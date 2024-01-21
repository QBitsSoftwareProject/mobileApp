import React, { useState, useEffect } from 'react';
import { View, Image, PermissionsAndroid, Text, TouchableOpacity, } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import styles from './styles';

const proPic=require('../../assets/images/doc.jpg')

const FilePicker = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // useEffect(() => {
  //   requestStoragePermission();
  // }, []);

  // const requestStoragePermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //       {
  //         title: 'Storage Permission',
  //         message: 'This app needs access to your storage to pick images.',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );

  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('Storage permission granted');
  //     } else {
  //       console.log('Storage permission denied');
  //     }
  //   } catch (error) {
  //     console.error('Error requesting storage permission:', error);
  //   }
  // };

  const pickImage = () => {
    const options = {
      mediaType: 'photo', // or 'video' or 'mixed'
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.8,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('Image picker was canceled');
      } else if (response.errorCode) {
        console.error('Image picker error:', response.errorMessage);
      } else {
        const selectedUri = response.uri;
        setSelectedImage(selectedUri);
        console.log('Selected image URI:', selectedUri);
      }
    });
  };

  return (
    <View style={{marginBottom:32}}>
      <Text style={styles.title}>Upload a profile picture :</Text>
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}

      <TouchableOpacity style={styles.imageBtn}>
        <Text style={styles.btnText}>choose Image</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={proPic} style={styles.image}/>
      </View>
    </View>
  );
};

export default FilePicker