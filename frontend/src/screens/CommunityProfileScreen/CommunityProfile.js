import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import PostCard from "../../components/CFCard/PostCard";
import ProfileCover from "../../components/ComForumCover/ComForumCover";
import { getPost } from "../../services/postServices/postServices";

const ProfileScreen = () => {
  const [postList, setPostList] = useState();

  const fetchPostData = async () => {
    try {
      const res = await getPost();
      setPostList(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  const handleUpdate = () => {
    fetchPostData();
  };

  const profilePicture = require("../../assets/images/PostCardImages/manprofile.jpg");

  const onDeletePost = (postId) => {
    setPostList((prevPostList) =>
      prevPostList.filter((post) => post._id !== postId)
    );
  };

  if (!postList) {
    return;
  }

  return (
    <View style={styles.contains}>
      <ScrollView>
        {/* <HeaderSub proPic={profilePicture} /> */}
        <ProfileCover proPic={profilePicture} />
        <View
          style={{
            paddingHorizontal: 25,
            paddingTop: 15,
          }}
        >
          <View style={styles.contains2}>
            <Text style={styles.header}>Thishakya Perera</Text>
            <Text style={styles.des}>
              If people like me, it’s great. If they don’t, it’s great. I like
              myself. It’s the only thing that matters.
            </Text>
          </View>

          {/* post cards list*/}
          <View>
            {postList.map((item) => (
              <PostCard
                postId={item._id}
                key={item._id}
                cardName={"MyProfileCard"}
                // image={item.user.proPic}
                // title={item.user.userName}
                Date={item.createdAt}
                description={item.description}
                postImage={item.image}
                onDelete={onDeletePost}
                onUpdate={handleUpdate}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contains: {
    flex: 1,
    paddingBottom: 80,
  },
  image: {
    height: 62.5,
    width: 62.5,
    position: "relative",
  },
  header: {
    fontSize: 22,
    color: "#101318",
    fontWeight: "500",
    alignSelf: "center",
  },
  des: {
    fontSize: 14,
    color: "#5C677D",
    fontWeight: "400",
  },
  contains2: {
    paddingHorizontal: 5,
    paddingTop: 30,
    paddingBottom: 15,
    gap: 10,
  },
});

export default ProfileScreen;
