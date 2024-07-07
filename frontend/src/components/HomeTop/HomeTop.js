import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import React from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

const HomeTop = (props) => {
  return (
  
    <LinearGradient
      colors={["rgba(73,177,247,0.7)", "#00453E"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.contains}
    >
      <View style={styles.backImgView}>
        <Image
          source={require("../../assets/images/squre2.png")}
          style={styles.backImg}
        />
      </View>

      <View
        style={{
          flexdirection: "row",
          alignItems: "center",
          marginBottom: 32,
          width: "80%",
          alignSelf: "center",
        }}
      >
        <Text style={styles.headlineTxt}>{props.headLine}</Text>
        <Text style={styles.subHeadlineTxt}>{props.subHeadLine}</Text>
      </View>

      <View style={{ alignItems: "center",
        zIndex: 101,
        position: "absolute",
        flex: 1,
        width: "100%",
        bottom: -50,
       }}>
        <View style={styles.profileFrame}>
          <Image source={props.proPic} style={styles.profileImage} />
        </View>
      </View>
      </LinearGradient>
  );
};

export default HomeTop;
