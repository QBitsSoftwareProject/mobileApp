import React, { useState } from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import { storage } from "../../config/firebase";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import FilePicker from "../../components/GetImages/FilePicker";
import { updateAUser } from "../../services/userServices/userService";

const CoverPhotoUploader = ({ isVisible, onClose }) => {
  const [selectedImage, setSelectedImage] = useState();

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

  const handleComfirmButtonPress = async () => {
    try {
      const imgResponse = await fireBaseUpload();
      console.log(imgResponse);
      await updateAUser({ coverImage: imgResponse });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            width: "90%",
          }}
        >
          <Text style={{ alignSelf: "center", fontSize: 18, marginBottom: 15 }}>
            Update Your Cover Photo
          </Text>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <FilePicker
              errMsg={"You have to select an image"}
              selectedImg={setSelectedImage}
              label={"Upload a cover photo"}
            ></FilePicker>
          </View>

          <TouchableOpacity
            onPress={handleComfirmButtonPress}
            style={{
              alignSelf: "center",
              backgroundColor: "#4A90BF",
              width: 150,
              height: 45,
              justifyContent: "center",
              borderRadius: 15,
            }}
          >
            <Text style={{ alignSelf: "center", fontSize: 16, color: "white" }}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CoverPhotoUploader;