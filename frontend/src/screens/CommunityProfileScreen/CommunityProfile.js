import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PostCard from "../../components/CFCard/PostCard";
import ProfileCover from "../../components/ComForumCover/ComForumCover";
import { getProfilePost } from "../../services/postServices/postServices";
import { getAUser, getUserById } from "../../services/userServices/userService";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [postList, setPostList] = useState();
  const [userData, setUserData] = useState();

  const fetchData = async () => {
    try {
      //getUser
      let user;
      if (!route.params.userId) {
        user = await getAUser();
      } else {
        user = await getUserById(route.params.userId);
      }

      setUserData(user);

      //getPost
      const res = await getProfilePost();
      setPostList(res);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.refresh) {
        fetchData();
        navigation.setParams({ refresh: false }); // Reset the refresh param
      }
    }, [route.params?.refresh])
  );

  useEffect(() => {
    fetchData();
  }, []);

  const onUpdatePost = () => {
    fetchData();
  };

  const onDeletePost = (postId) => {
    setPostList((prevPostList) =>
      prevPostList.filter((post) => post._id !== postId)
    );
  };

  if (!postList || !userData) {
    return;
  }

  return (
    <View style={styles.contains}>
      <ScrollView>
        <ProfileCover
          coverImage={{ uri: userData.coverImage }}
          proPic={{ uri: userData.proPic }}
        />
        <View
          style={{
            paddingHorizontal: 25,
            paddingTop: 15,
          }}
        >
          <View style={styles.contains2}>
            <Text style={styles.header}>{userData.userName}</Text>
          </View>

          {/* post cards list*/}
          <View>
            {postList.map((item) => (
              <PostCard
                postId={item._id}
                key={item._id}
                cardName={"MyProfileCard"}
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
    paddingTop: 10,
    paddingBottom: 25,
    gap: 10,
  },
});

export default ProfileScreen;