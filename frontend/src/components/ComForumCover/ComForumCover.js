import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const ProfileCover = (props) => {
  const navigation = useNavigation();

  const handleBackToHome = () => {
    navigation.navigate("HomePage");
  };

  return (
    <View style={styles.bckImg}>
      <Image
        source={require("../../assets/images/PostCardImages/cover.jpg")}
        style={styles.cover}
      />
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          position: "absolute",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          opacity: 0.4,
          zIndex: 1,
        }}
      >
        <TouchableOpacity onPress={handleBackToHome}>
          <Image
            source={require("../../assets/images/BackWhite.png")}
            style={styles.backWhiteImg}
          />
        </TouchableOpacity>
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
    zIndex: 100,
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
    position: "absolute",
    margin: 30,
  },
});

export default ProfileCover;
