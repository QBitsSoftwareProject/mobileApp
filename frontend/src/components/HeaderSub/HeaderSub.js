import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView
} from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/core";

const HeaderSub = (props) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate(props.back);
  };

  return (
    <SafeAreaView>
    <View style={styles.contains}>
      <ImageBackground
        source={require("../../assets/images/blueSqures.png")}
        style={styles.backImg}
      >
        <View>
          <TouchableOpacity style={styles.backBtn} onPress={handleBackPress}>
            <Image source={require("../../assets/images/BackWhite.png")} />
          </TouchableOpacity>
          <View>
            <Text style={styles.headlineTxt}>{props.headLine}</Text>
            <Text style={styles.subHeadlineTxt}>{props.subHeadLine}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
    </SafeAreaView>
  );
};

export default HeaderSub;
