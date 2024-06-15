import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import EditPopupMessage from "../CF Pop-up/EditPop-up";

const ReportMenu = (props) => {
  const navigation = useNavigation();

  const [popupMessage, setPopupMessage] = useState("");

  const [press, setPress] = useState(false);

  const handleReport = async () => {
    try {
      setPopupMessage("Report");
      handlePress();
    } catch (error) {
      console.log(error);
    }
  };

  const confirmMessage = async () => {
    // navigation.navigate("");
  };

  const closeMessage = () => {
    setPopupMessage("");
  };

  const handlePress = () => {
    setPress(true);
  };

  if (press) {
    return null; // Dismiss the component
  }

  return (
    <View style={styles.DropPop}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleReport()}
          style={[styles.contains1, { gap: 25 }]}
        >
          <Text style={styles.DPtext}>{props.DPtext}</Text>
          <Image
            source={require("../../assets/images/PostCardImages/report.png")}
            style={styles.reportImg}
          />
        </TouchableOpacity>

        <EditPopupMessage
          message={popupMessage}
          onConfirm={confirmMessage}
          onClose={closeMessage}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  DropPop: {
    width: 100,
    height: "auto",
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 1,
    marginHorizontal: 5,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 10,
    zIndex: 10,
  },
  container: {
    height: "auto",
    alignItems: "flex-start",
  },
  DPtext: {
    fontSize: 12,
    color: "#40495B",
    fontWeight: "400",
    lineHeight: 35,
  },
  contains1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reportImg: {
    width: 17,
    height: 17,
  },
});

export default ReportMenu;
