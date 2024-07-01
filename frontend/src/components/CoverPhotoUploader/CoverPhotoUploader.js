import React, { useState } from "react";
import { View, Modal, Text, TouchableOpacity, Image } from "react-native";
import { storage } from "../../config/firebase";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import FilePicker from "../../components/GetImages/FilePicker";
import { updateAUser } from "../../services/userServices/userService";
import loadingGif from "../../assets/animation/loading.gif";

const CoverPhotoUploader = ({ isVisible, onClose }) => {
  const [selectedImage, setSelectedImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      const imgResponse = await fireBaseUpload();
      await updateAUser({ coverImage: imgResponse });
      setIsLoading(false);
      onClose();
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

          {!isLoading && selectedImage ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity
                onPress={() => onClose()}
                style={{
                  width: 150,
                  height: 45,
                  justifyContent: "center",
                  borderRadius: 15,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 16,
                    color: "#40495B",
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleComfirmButtonPress}
                style={{
                  backgroundColor: "#4A90BF",
                  width: 150,
                  height: 45,
                  justifyContent: "center",
                  borderRadius: 15,
                }}
              >
                <Text
                  style={{ alignSelf: "center", fontSize: 16, color: "white" }}
                >
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          ) : !isLoading && !selectedImage ? (
            <TouchableOpacity
              onPress={() => onClose()}
              style={{
                alignSelf: "center",

                width: 150,
                height: 45,
                justifyContent: "center",
                borderRadius: 15,
              }}
            >
              <Text
                style={{ alignSelf: "center", fontSize: 16, color: "#40495B" }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          ) : isLoading ? (
            <View
              style={{
                alignSelf: "center",
              }}
            >
              <Text>Uploading...</Text>
              <Image source={loadingGif} />
            </View>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

export default CoverPhotoUploader;
