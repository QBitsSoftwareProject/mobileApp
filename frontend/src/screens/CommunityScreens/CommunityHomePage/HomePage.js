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
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [lastCreatedAt, setLastCreatedAt] = useState(null);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  useEffect(() => {
    fetchPostData(true); // Initial fetch with refresh
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.refresh) {
        fetchPostData(true);
        navigation.setParams({ refresh: false }); // Reset the refresh param
      }
    }, [route.params?.refresh])
  );

  const fetchPostData = async (refresh = false) => {
    if (loading) return; // Prevent multiple simultaneous fetches
    setLoading(true);

    try {
      const res = await getPost(refresh ? null : lastCreatedAt, 8); // Fetch 8 posts starting from the offset or from the beginning if refreshing
      if (refresh) {
        setPostList(res);
        setLastCreatedAt(res[res.length - 1]?.createdAt);
      } else {
        setPostList((prev) => [...prev, ...res]);
        setLastCreatedAt(res[res.length - 1]?.createdAt);
      }
      setHasMorePosts(res.length === 8); // Update hasMorePosts based on the response
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      if (refresh) setRefreshing(false);
    }
  };

  const handleLoadMore = () => {
    if (!loading && hasMorePosts) {
      fetchPostData();
    }
  };

  const handleRefresh = () => {
    setRefreshing(true); // Set refreshing state to true
    fetchPostData(true); // Fetch the first page and reset refreshing state
  };

  const onUpdatePost = () => {
    fetchPostData(true);
  };

  const onDeletePost = (postId) => {
    setPostList((prevPostList) =>
      prevPostList.filter((post) => post._id !== postId)
    );
  };

  const addNew = () => {
    navigation.navigate("PostCategory", { refresh: true });
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
          style={{ height: "100%", paddingTop: 15 }} //,marginBottom:65
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
