import React, { useEffect, useState } from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
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

  const fetchPostData = async () => {
    try {
      const res = await getPost();
      setPostList(res);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.refresh) {
        fetchPostData();
        navigation.setParams({ refresh: false }); // Reset the refresh param
      }
    }, [route.params?.refresh])
  );

  useEffect(() => {
    fetchPostData();
  }, []);

  const onUpdatePost = () => {
    fetchPostData();
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
      <View style = {{zIndex:1000}}>
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
        <ScrollView style={{ height: "100%", paddingTop: 15  }}>
          {/* post cards list*/}
          <View style={{ paddingBottom: 50, zIndex:-1 }}>
            {postList.map((item) => (
              <PostCard
                postId={item._id}
                key={item._id}
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
            ))}
          </View>
        </ScrollView>

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
