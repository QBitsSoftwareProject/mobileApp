import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HeaderSubSug = (props) => {
  const navigation = useNavigation();

  const backBtn = () => {
    navigation.navigate("MonthAnalysisScreen");
  };
  return (
    <View style={styles.contains}>
      <ImageBackground
        source={require("../../../assets/images/blueSqures.png")}
        style={styles.backImg}
      >
        <TouchableOpacity onPress={backBtn} style={styles.backBtn}>
          <Image source={require("../../../assets/images/BackWhite.png")} />
        </TouchableOpacity>

        <Text style={styles.headlineTxt}>{props.headLine}</Text>
        <Text style={styles.subHeadlineTxt}>{props.subHeadLine}</Text>
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
    marginBottom: 17,
  },
  backBtn: {
    marginTop: 50,
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
});

export default HeaderSubSug;
