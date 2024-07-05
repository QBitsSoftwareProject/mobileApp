import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import CFHeaderSub from "../../../components/ComForumHeader/CFHeader";
import PostCard from "../../../components/CFCard/PostCard";
import FloatingButton from "../../../components/CFButton/FloatingButton";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { getPost } from "../../../services/postServices/postServices";

const HomePage = () => {
  const screenHeight = Dimensions.get("window").height - 275;
  const navigation = useNavigation();
  const route = useRoute();

  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  useEffect(() => {
    fetchPostData(0);
  }, []);

  const fetchPostData = async (newPage = 0) => {
    if (loading) return; // Prevent multiple simultaneous fetches
    setLoading(true);
    try {
      const res = await getPost(newPage * 8, 8); // Fetch 8 posts starting from the offset
      if (newPage === 0) {
        setPostList(res);
      } else {
        setPostList((prevPostList) => {
          // Ensure no duplicates
          const postMap = new Map(prevPostList.map((post) => [post._id, post]));
          res.forEach((post) => postMap.set(post._id, post));
          return Array.from(postMap.values());
        });
      }
      setPage(newPage); // Update the current page
      setHasMorePosts(res.length === 8); // Update hasMorePosts based on the response
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!loading && hasMorePosts) {
      fetchPostData(page + 1); // Fetch the next page
    }
  };

  const handleRefresh = () => {
    setRefreshing(true); // Set refreshing state to true
    fetchPostData(0).finally(() => setRefreshing(false)); // Fetch the first page and reset refreshing state
  };

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.refresh) {
        fetchPostData(0);
        navigation.setParams({ refresh: false }); // Reset the refresh param
      }
    }, [route.params?.refresh])
  );

  const onUpdatePost = () => {
    fetchPostData(0);
  };

  const onDeletePost = (postId) => {
    setPostList((prevPostList) =>
      prevPostList.filter((post) => post._id !== postId)
    );
  };

  const addNew = () => {
    navigation.navigate("PostCategory");
  };

  return (
    <View style={styles.container}>
      <View style={{ zIndex: 1000 }}>
        <CFHeaderSub
          subHeadLine={"Community Home Page"}
          profile={"ProfileScreen"}
        />
      </View>

      <View
        style={{
          height: screenHeight,
          paddingHorizontal: 25,
        }}
      >
        <FlatList
          style={{ height: "100%", paddingTop: 15 }}
          data={postList}
          renderItem={({ item }) => (
            <PostCard
              postId={item._id}
              cardName={"HomePageCard"}
              relevantUserId={item.userId._id}
              image={item.userId.proPic}
              title={item.userId.userName}
              Date={item.createdAt}
              description={item.description}
              postImage={item.image}
              onDelete={onDeletePost}
              onUpdate={onUpdatePost}
            />
          )}
          keyExtractor={(item) => item._id} //provides a unique key for each item in the list
          onEndReached={handleLoadMore} // triggers handleLoadMore to fetch more posts.
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading && hasMorePosts && <ActivityIndicator size="large" />
          }
          refreshing={refreshing}
          onRefresh={handleRefresh}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
        <FloatingButton addNew={addNew} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButtonContainer: {
    position: "absolute",
    bottom: 25,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "transparent",
  },
});

export default HomePage;
