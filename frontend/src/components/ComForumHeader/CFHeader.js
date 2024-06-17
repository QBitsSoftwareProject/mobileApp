import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import SearchBar from "../../components/SearchBar/SearchBar";

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
          <SearchBar />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  contains: {
    height: 240,
    backgroundColor: "#4A90BF",
    color: "red",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
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
    marginTop: 15,
  },
  subHeadlineTxt: {
    fontWeight: "500",
    fontSize: 18,
    color: "white",
    marginTop: 7,
  },
  backImg: {
    paddingRight: 25,
    paddingLeft: 25,
    height: 240,
  },
  container1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default CFHeaderSub;
