import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import PostCard from "../../components/CFCard/PostCard";
import ProfileCover from "../../components/ComForumCover/ComForumCover";
import { useNavigation } from "@react-navigation/native";
import ButtonGroup from "../../components/Button/ButtonGroup";

// Mock data for posts
const postList = [
  {
    id: 1,
    image: require("../../assets/images/PostCardImages/manprofile.jpg"),
    title: "Chethiya Bandara",
    sub: "public  10 min ago",
    description:
      "“You don't have to see the whole staircase, just take the first step.” – Martin Luther King.",
    Postimage: require("../../assets/images/PostCardImages/post3image.jpg"),
  },
  {
    id: 2,
    image: require("../../assets/images/PostCardImages/manprofile.jpg"),
    title: "Piyumi Amarasinghe",
    sub: "public  22 min ago",
    description:
      "“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau",
    Postimage: null,
  },
  {
    id: 3,
    image: require("../../assets/images/PostCardImages/manprofile.jpg"),
    title: "Chethiya Bandara",
    sub: "public  1 hour ago",
    description:
      "“You don't have to see the whole staircase, just take the first step.” – Martin Luther King.",
    Postimage: require("../../assets/images/PostCardImages/post4image.jpg"),
  },
];

const ProfileScreen = () => {
  const profilePicture = require("../../assets/images/PostCardImages/manprofile.jpg");
  const screenHeight = Dimensions.get("window").height - 275;

  const navigation = useNavigation();

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
          <ButtonGroup />
        </View>

        <ScrollView ScrollView style={{ height: "100%", marginBottom: 25 }}>
          {/* post cards list*/}
          <View>
            {postList.map((item) => (
              <PostCard
                key={item.id}
                image={item.image}
                title={item.title}
                sub={item.sub}
                description={item.description}
                Postimage={item.Postimage}
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
