import React from "react";
import { View, StyleSheet, ScrollView, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderSub from "../../../components/HeaderSub/HeaderSub";
import RegularButton from "../../../components/CFButton/RegularButton";
import TemporyCard from "../../../components/CFCard/TemporyCard";
import PopupMessage from "../../../components/CF Pop-up/Pop-up";
import { useState } from "react";
import HomePage from "../CommunityHomePage/HomePage";
import { createPost } from "../../../services/postServices/postServices";
import { storage } from "../../../config/firebase";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { updateTaskCompleteness } from "../../../services/taskServices/taskservice";

const loadingGif = require("../../../assets/animation/loading.gif");

const CreatePost = ({ route }) => {
  const { postCat, taskId } = route.params;
  const screenHeight = Dimensions.get("window").height - 275;
  const navigation = useNavigation();
  const [popupMessage, setPopupMessage] = useState("");
  const [description, setDescription] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handlePostImageButtonPress = async () => {
    try {
      if (!description) {
        return alert("you have to set a caption");
      }
      setIsLoading(true);
      const imgResponse = await fireBaseUpload();

      if (taskId) {
        await updateTaskCompleteness(taskId);
      }

      await createPost(postCat, description, imgResponse);
      setPopupMessage("Post Successful!");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    
  };

  const confirmMessage = async () => {
    navigation.navigate("ProfileScreen");
    closeMessagebtn()
  };
  const closeMessagebtn = () => {
    setPopupMessage("");
  };

  const closeMessage = () => {
    navigation.navigate("HomePage", { refresh: true });
    closeMessagebtn()
  };

  const fireBaseUpload = async () => {
    try {
      if (selectedImage) {
        const imgFileRef = ref(storage, "post/images/" + generateUniqueValue());

        const fileData = await fetch(selectedImage.uri);

        const fileBlob = await fileData.blob();

        await uploadBytes(imgFileRef, fileBlob);

        const imgURL = await getDownloadURL(imgFileRef);

        return imgURL;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //generate random value for images
  const generateUniqueValue = () => {
    return "xxxx-4xxx-yxxx-xxxx".replace(/[xy]/g, (char) => {
      const random = (Math.random() * 16) | 0;
      const value = char === "x" ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  };

  return (
    <View>
      <View>
        <HeaderSub
          headLine={"Create Post"}
          subHeadLine={"Edit your post"}
          back={HomePage}
        />
      </View>

      <View
        style={{
          height: screenHeight,
          paddingHorizontal: 25,
          paddingTop: 25,
        }}
      >
        <ScrollView ScrollView style={{ height: "100%", marginBottom: 25 }}>
          <View>
            <TemporyCard
              description={setDescription}
              selectedImage={setSelectedImage}
            />
          </View>

          <View style={styles.buttonContainer}>
            {isLoading ? (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image source={loadingGif} />
              </View>
            ) : (
              <RegularButton
                name={"post"}
                onPress={handlePostImageButtonPress}
              />
            )}

            <PopupMessage
              message={popupMessage}
              onConfirm={confirmMessage}
              onClose={closeMessage}
            />
          </View>
        </ScrollView>
      </View>
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
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default CreatePost;
