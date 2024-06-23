import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";

const DocAppHeader = (props) => {
  return (
    <View style={styles.contains}>
      <ImageBackground
        source={require("../../assets/images/DocHeaderTop.png")}
        style={styles.backImg}
      >
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  contains: {
    height: 250,
    zIndex: 100,
    width: "100%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headlineTxt: {
    fontWeight: "700",
    fontSize: 32,
    color: "white",
    marginTop: 65,
  },
  subHeadlineTxt: {
    fontWeight: "500",
    fontSize: 28,
    color: "white",
    marginTop: 7,
    maxWidth: 300,
  },
  backImg: {
    paddingRight: 25,
    paddingLeft: 25,
    height: 250,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
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
