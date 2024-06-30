import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import CoverPhotoUploader from "../CoverPhotoUploader/CoverPhotoUploader";

const ProfileCover = (props) => {
  const navigation = useNavigation();
  const [popupVisible, setPopupVisible] = useState(false);

  const confirmMessage = async () => {
    setPopupVisible(false);
  };

  const closeMessage = () => {
    props.isRefresh((prev) => prev + 1);
    setPopupVisible(false);
  };

  const handleEditIconPress = () => {
    setPopupVisible(true);
  };

  const handleBackToHome = () => {
    navigation.navigate("HomePage", { refresh: true });
  };

  return (
    <View style={styles.bckImg}>
      {props.coverImage ? (
        <Image source={props.coverImage} style={styles.cover} />
      ) : (
        <Image
          source={require("../../assets/images/PostCardImages/cover.jpg")}
          style={styles.cover}
        />
      )}

      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          position: "absolute",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          opacity: 0.4,
          zIndex: 100,
        }}
      ></View>

      <View
        style={{
          zIndex: 101,
        }}
      >
        <TouchableOpacity onPress={handleBackToHome}>
          <Image
            source={require("../../assets/images/BackWhite.png")}
            style={styles.backWhiteImg}
          />
        </TouchableOpacity>
      </View>

      <View style={{ zIndex: 110 }}>
        {props.isOwnProfile && (
          <TouchableOpacity
            onPress={handleEditIconPress}
            style={{ position: "absolute", bottom: 80, right: 30 }}
          >
            <Image
              source={require("../../assets/images/NavigationIcons/mdi_camera.png")}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        )}
        <CoverPhotoUploader
          isVisible={popupVisible}
          onConfirm={confirmMessage}
          onClose={closeMessage}
          onUploadSuccess={confirmMessage}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          zIndex: 101,
          position: "absolute",
          flex: 1,
          width: "100%",
          bottom: -50,
        }}
      >
        <View style={styles.profileFrame}>
          <Image source={props.proPic} style={styles.profileImage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bckImg: {
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    zIndex: 10,
    marginBottom: 30,
  },
  cover: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden",
  },
  backImg: {
    paddingRight: 25,
    paddingLeft: 25,
    height: 250,
  },

  profileFrame: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "white",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  backWhiteImg: {
    bottom: 170,
    left: 25,
  },
  editIcon: {
    width: 25,
    height: 20,
    opacity: 0.8,
  },
});

export default ProfileCover;
