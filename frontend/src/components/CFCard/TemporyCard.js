import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import ImageUploader from "../../components/ImageUploader/ImageUploader";

const TemporyCard = (props) => {
  const [post, setPost] = useState(null);

  const [postdescription, setPostDescription] = useState("");

  const [image, setImage] = useState(null);

  useEffect(() => {
    props.selectedImage(image);
  }, [image]);

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

        <View
          style={{
            marginVertical: 10,
          }}
        >
          <TextInput
            value={postdescription}
            onChangeText={(text) => {
              props.description(text);
              setPostDescription(text);
            }}
            multiline
            placeholder="Say something about your post..."
          />

          <TouchableWithoutFeedback onPress={handleModalClose}>
            <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
          </TouchableWithoutFeedback>
        </View>
      </View>

      {post === null && (
        <View style={styles.content2}>
          <ImageUploader selectedImg={setImage} />
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
    marginBottom: 5,
  },
  content1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  imageframe: {
    height: 35,
    width: 35,
    backgroundColor: "gray",
    opacity: 0.5,
    borderRadius: 50,
    overflow: "hidden",
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
    width: "100%",
    height: "auto",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#C1C1C1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // position: "relative",
  },

  modalBG: {
    flex: 1,
    zIndex: -1,
  },
});

export default TemporyCard;
