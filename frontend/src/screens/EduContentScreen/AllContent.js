import { View, Text,StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import styles from "./style";
import { Font } from "expo-font";

function AllContent() {
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "Poppins Regular": require("../EduContentScreen/Poppins Regular.ttf"),
        // Add other font variants if needed (e.g., Poppins-Bold, Poppins-Italic, etc.)
      });
    }

    loadFont();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.mainHeading}>Featured Resurces</Text>
        <View></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    backgroundColor: "#F2F3F5",
    alignItems: "center",
    height: "100%",
  },
  NavContainer: {
    position: "absolute",
    alignItems: "center",
    marginTop: 80,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "#4A90BF",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 100,
    height: 40,
  },
  NavBarElements: {
    color: "black",
    fontWeight: "900",
  },
  NavBarElements_current: {
    color: "white",
  },
  Content: {
    backgroundColor: "#4A90BF",
    width: "100%",
    height: 300,
    marginTop: 120,
  },
  mainHeading: {
    color: "black",
    marginTop: -30,
    fontSize: 20,
    fontFamily: "Poppins Regular",
  },
});

export default AllContent;
