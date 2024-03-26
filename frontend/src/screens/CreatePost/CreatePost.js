import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import RegularButton from "../../components/CFButton/RegularButton";
import TemporyCard from "../../components/CFCard/TemporyCard";
import PopupMessage from "../../components/CF Pop-up/Pop-up";
import { useState } from "react";
import PostCategory from "../PostCategory/PostCategory";

const post = 
  {
    id: 1,
    image: require("../../assets/images/PostCardImages/boydp.jpg"),
    title: "Chethiya Bandara",
    sub: "public",
    status: require("../../assets/images/PostCardImages/Globe.png"),
  }

const CreatePost = () => {
  
  const navigation=useNavigation();
  const [popupMessage, setPopupMessage] = useState('');
  
  const handlePostImageButtonPress = () => {
    setPopupMessage("Post Successful!");
  };

  const confirmMessage = () => {
    navigation.navigate('PostContent');
  };

  const closeMessage = () => {
    setPopupMessage('');
  };

  return (
    <View>
      <View>
        <HeaderSub headLine={"Create Post"} subHeadLine={"Edit your post"} back={PostCategory}/>
      </View>

      <SafeAreaView style={{ margin: 25 }}>

        <ScrollView style={{ height: 500 }}>
          <View>
              <TemporyCard
                image={post.image}
                title={post.title}
                sub={post.sub}
                status={post.status}
              />
          </View>

          <View style={styles.flex1}>

            <View>
              <Text style={styles.text1}>Hide from community???</Text>
              <Text style={styles.text2}>This post will be private</Text>
            </View>

          </View>

          <View style={styles.buttonContainer}>
            <RegularButton name={"post"} onPress={handlePostImageButtonPress} ></RegularButton> 
            <PopupMessage message={popupMessage} onConfirm={confirmMessage}  onClose={closeMessage} />
          </View>
        </ScrollView>

      </SafeAreaView>
        
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    flexDirection: "row",
  },
  content1: {
    flex: 1,
    flexDirection: "row",
  },
  text1: {
    fontSize: 15,
    fontWeight: "500",
    color: "#101318",
    marginBottom: 5,
  },
  text2: {
    fontSize: 12,
    fontWeight: "400",
    color: "#40495B",
  },
  content2: {
    flex: 1,
    flexDirection: "row",
  },
  buttonContainer: {
    marginBottom: 60,
  },
});

export default CreatePost;
