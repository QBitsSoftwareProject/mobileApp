import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

const proPic = require('../../assets/images/doc.jpg');

const FilePicker = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {

    if (selectedImage != null) {
      props.selectedImg(selectedImage)
    }

  }, [selectedImage])

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera roll permissions to make this work!');
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
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ marginBottom: 32 }}>
      <Text style={styles.title}>{props.label} :</Text>

      <TouchableOpacity style={styles.imageBtn} onPress={pickImage}>
        <Text style={styles.btnText}>Choose Image</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          <Text style={{ color: '#979DAC' }}>{props.errMsg}</Text>
        )}
      </View>
    </View>
  );
};

export default FilePicker;
