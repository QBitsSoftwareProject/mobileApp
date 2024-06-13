import React from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";

const ProfileCover = (props) => {
  return (
    <View style={styles.bckImg}>
      <Image
        source={require("../../assets/images/PostCardImages/cover.jpg")}
        style={styles.cover}
      />
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
    zIndex: 100,
    marginBottom: 30,
  },
  cover: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
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
});

export default ProfileCover;
