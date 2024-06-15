import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";

const ImageUploader = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage != null) {
      props.selectedImg(selectedImage);
    }
  }, [selectedImage]);

  const pickImage = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Sorry, we need camera roll permissions to make this work!"
        );
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedAsset = result.assets[0]; // Access the first selected asset

      const localUri = selectedAsset.uri;
      const filename = localUri.split("/").pop();

      // Infer the type of the image
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image`;

      // Create a Blob from the selected image
      const file = {
        uri: localUri,
        name: filename,
        type,
      };

      setSelectedImage(file);
    }
  };

  return (
    <View style={{ marginBottom: 32 }}>
      <TouchableOpacity style={styles.imageBtn} onPress={pickImage}>
        <Text style={styles.btnText}>Upload your image here... </Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage.uri }} style={styles.image} />
        ) : (
          <Text style={{ color: "#979DAC" }}>{props.errMsg}</Text>
        )}
      </View>
    </View>
  );
};

export default ImageUploader;
