import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import PostCard from "../../components/CFCard/PostCard";
import ProfileCover from "../../components/ComForumCover/ComForumCover";
// import HeaderSub from "../../components/HomeTop/HomeTop";
import { useNavigation } from "@react-navigation/native";
import ButtonGroup from "../../components/Button/ButtonGroup";
import { getPost } from "../../services/postServices/postServices";

const ProfileScreen = () => {
  const [postList, setPostList] = useState();

  const fetchPostData = async () => {
    try {
      const res = await getPost();
      // console.log(res);
      setPostList(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  const profilePicture = require("../../assets/images/PostCardImages/manprofile.jpg");

  const screenHeight = Dimensions.get("window").height - 275;

  const navigation = useNavigation();

  if (!postList) {
    return;
  }

  return (
    <View style={styles.contains}>
      {/* <HeaderSub proPic={profilePicture} /> */}
      <ProfileCover proPic={profilePicture} />
      <View style={{ height: screenHeight, paddingHorizontal: 25 }}>
        <View style={styles.contains2}>
          <Text style={styles.header}>Thishakya Perera</Text>
          <Text style={styles.des}>
            If people like me, it’s great. If they don’t, it’s great. I like
            myself. It’s the only thing that matters.
          </Text>
        </View>

        <View style={styles.contains3}>
          <ButtonGroup tab1={"All"} tab2={"Post"} tab3={"Videos"} />
        </View>

        <ScrollView ScrollView style={{ height: "100%", marginBottom: 25 }}>
          {/* post cards list*/}
          <View>
            {postList.map((item) => (
              <PostCard
                key={item._id}
                // image={item.user.proPic}
                // title={item.user.userName}
                sub={item.postedAt}
                description={item.description}
                // Postimage={item.Postimage}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contains: {
    zIndex: 100,
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
  contains3: {
    paddingVertical: 15,
  },
});

export default ProfileScreen;
