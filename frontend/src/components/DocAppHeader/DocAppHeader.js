import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";

const DocAppHeader = (props) => {
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
        }}
      >
        <Text style={styles.headlineTxt}>{props.headLine}</Text>
        <Text style={styles.subHeadlineTxt}>{props.docName}</Text>
      </View>

      <View>
        <View style={styles.profileFrame}>
          <Image source={props.proPic} style={styles.profileImage} />
        </View>
      </View>
      {/* <View style={styles.DDM}>
            <DocDropDown DDMtext={"Switch to"} />
          </View> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  contains: {
    height: 200,
    zIndex: 100,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headlineTxt: {
    fontWeight: "700",
    fontSize: 32,
    color: "white",
    marginTop: 25,
  },
  subHeadlineTxt: {
    fontWeight: "500",
    fontSize: 28,
    color: "white",
    marginTop: 7,
    maxWidth: 300,
  },
  backImgView: {
    position: "absolute",
    right: 0,
  },

  backImg: {
    height: 200,
    width: 200,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "flex-end",
    gap: 25,
  },
  profileFrame: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default DocAppHeader;
