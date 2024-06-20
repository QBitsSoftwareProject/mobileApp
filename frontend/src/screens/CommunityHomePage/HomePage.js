import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import CFHeaderSub from "../../components/ComForumHeader/CFHeader";
import PostCard from "../../components/CFCard/PostCard";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getPost } from "../../services/postServices/postServices";

const HomePage = () => {
  const screenHeight = Dimensions.get("window").height - 275;

  const navigation = useNavigation();

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
      fetchPostData();
    }, [])
  );

  const addNew = () => {
    navigation.navigate("PostCategory");
  };

  if (!postList) {
    return;
  }

  return (
    <View style={{ paddingBottom: 110 }}>
      <View>
        <CFHeaderSub
          headLine={"Thishakya Perera"}
          subHeadLine={"80 total post"}
          profile={"ProfileScreen"}
        />
      </View>

      <View
        style={{
          height: screenHeight,
          paddingHorizontal: 25,
          paddingTop: 15,
        }}
      >
        <ScrollView ScrollView style={{ height: "100%", marginBottom: 25 }}>
          {/* post cards list*/}
          <View style={{ paddingBottom: 70 }}>
            {postList.map((item) => (
              <PostCard
                postId={item._id}
                key={item._id}
                cardName={"HomePageCard"}
                // image={item.user.proPic}
                // title={item.user.userName}
                Date={item.createdAt}
                description={item.description}
                postImage={item.image}
              />
            ))}
          </View>
        </ScrollView>

        <FloatingButton addNew={addNew} />
      </View>
    </View>
  );
};

export default HomePage;
