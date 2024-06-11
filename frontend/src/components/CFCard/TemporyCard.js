import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { useState } from "react";

const uploadimage = require("../../assets/images/PostCardImages/upload.png");

const TemporyCard = (props) => {
  const [post, setPost] = useState(null);

  const [description, setDescription] = useState("");

  const handleOnChangeText = (text) => {
    setDescription(text);
  };
  console.log(description);

  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={[styles.cardBox]}>
      <View style={{ display: "flex", flexDirection: "column", padding: 15 }}>
        <View style={styles.content1}>
          <View style={styles.imageframe}>
            <Image source={{ uri: props.image }} style={styles.image} />
          </View>

          <View>
            <Text style={styles.title}>{props.title}</Text>
          </View>
        </View>

        <View style={{ marginVertical: 10 }}>
          <TextInput
            value={description}
            onChangeText={handleOnChangeText}
            multiline
            placeholder="Say something about your post...."
          />
          <TouchableWithoutFeedback onPress={handleModalClose}>
            <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
          </TouchableWithoutFeedback>
        </View>
      </View>

      {post === null && (
        <View style={{ padding: 15 }}>
          <TouchableOpacity style={styles.content2}>
            <Image source={uploadimage} style={styles.uploadimage} />

            <Text style={styles.des}>Upload your image here....</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 1,
    flexDirection: "column",
    alignSelf: "center",
    marginBottom: 15,
  },
  content1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  imageframe: {
    height: 60,
    width: 60,
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 50,
    overflow: "hidden",
    elevation: 2,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",
  },
  flex1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    borderWidth: 1,
    width: "60%",
    padding: 3,
    borderRadius: 5,
  },

  sub: {
    fontSize: 12,
    fontWeight: "500",
    color: "#5C677D",
  },
  arrow: {
    width: 20,
    height: 20,
    marginVertical: 20,
  },
  status: {
    width: 15,
    height: 15,
  },

  des: {
    display: "flex",
    fontSize: 13,
    fontWeight: "400",
    color: "#5C677D",
  },
  content2: {
    display: "flex",
    position: "relative",
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#C1C1C1",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  Postimage: {
    width: 344,
    height: 176,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  uploadimage: {
    display: "flex",
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
});

export default TemporyCard;
