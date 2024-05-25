import React from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";

const ProfileCover = (props) => {
  return (
    <View style={styles.backgroundFrame}>
      <ImageBackground
        source={require("../../assets/images/PostCardImages/cover.jpg")}
        style={styles.backImg}
      >
        <View style={{ alignItems: "center", zIndex: 101 }}>
          <View style={styles.profileFrame}>
            <Image source={props.proPic} style={styles.profileImage} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundFrame: {
    height: 250,
    width: "100%",
    zIndex: 100,
    borderColor: "white",
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
    marginTop: 200,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default ProfileCover;
