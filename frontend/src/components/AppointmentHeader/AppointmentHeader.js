import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigation } from "@react-navigation/core";

const AppointmentHeader = (props) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate(props.back);
  };

  return (
    <View style={styles.contains}>
      <ImageBackground
        source={require("../../assets/images/blueSqures.png")}
        style={styles.backImg}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity style={styles.backBtn} onPress={handleBackPress}>
            <Image source={require("../../assets/images/BackWhite.png")} />
          </TouchableOpacity>
          <View>
            <Text style={styles.headlineTxt}>{props.headLine}</Text>
            <Text style={styles.subHeadlineTxt}>{props.subHeadLine}</Text>
          </View>
        </View>

        <View style={{ marginTop: 50 }}>
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
  backBtn: {
    marginTop: 50,
  },
  headlineTxt: {
    fontWeight: "600",
    fontSize: 32,
    color: "white",
    marginTop: 50,
  },
  subHeadlineTxt: {
    fontWeight: "500",
    fontSize: 18,
    color: "white",
    marginVertical: 8,
  },
  searchbar: {},
  backImg: {
    paddingRight: 25,
    paddingLeft: 25,
    height: 240,
  },
});

export default AppointmentHeader;
