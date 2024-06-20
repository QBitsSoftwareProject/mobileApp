import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/core";

import SearchBarComponent from "../../components/SearchBar/SearchBar";

const CFHeaderSub = (props) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(props.profile);
  };

  return (
    <View style={styles.contains}>
      <ImageBackground
        source={require("../../assets/images/blueSqures.png")}
        style={styles.backImg}
      >
        <View style={styles.container1}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginTop: 50,
            }}
          >
            <TouchableOpacity onPress={handlePress}>
              <View style={styles.imageframe}>
                <Image
                  source={require("../../assets/images/PostCardImages/manprofile.jpg")}
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.headlineTxt}>{props.headLine}</Text>
              <Text style={styles.subHeadlineTxt}>{props.subHeadLine}</Text>
            </View>
          </View>

          <SearchBarComponent />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  contains: {
    flexDirection: "column",
    height: 240,
    backgroundColor: "#4A90BF",
    width: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  imageframe: {
    height: 80,
    width: 80,
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 50,
    marginRight: 15,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  headlineTxt: {
    fontWeight: "600",
    fontSize: 32,
    color: "white",
  },
  subHeadlineTxt: {
    fontWeight: "500",
    fontSize: 18,
    color: "white",
  },
  backImg: {
    height: 240,
    width: "100%",
  },
  container1: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    gap: 25,
  },
});

export default CFHeaderSub;
