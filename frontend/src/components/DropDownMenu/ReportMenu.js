import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import ReportPopupMessage from "../CF Pop-up/ReportPop-up";

const ReportMenu = (props) => {
  const [popupMessage, setPopupMessage] = useState("");

  const [press, setPress] = useState(false);

  const handleReport = async () => {
    try {
      setPopupMessage("Report comment");
      handlePress();
    } catch (error) {
      console.log(error);
    }
  };

  const confirmMessage = async () => {
    setPopupMessage("");
  };

  const closeMessage = () => {
    props.onClose(false);
    setPopupMessage("");
  };

  const handlePress = () => {
    setPress(true);
  };

  return (
    <View style={styles.DropPop}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleReport()}
          style={[styles.contains1, { gap: 25 }]}
        >
          <Text style={styles.DPtext}>Report</Text>
          <Image
            source={require("../../assets/images/PostCardImages/report.png")}
            style={styles.reportImg}
          />
        </TouchableOpacity>

        <ReportPopupMessage
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
    width: 120,
    height: "auto",
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 3,
    padding: 10,
    top: 25,
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    position: "absolute",
  },
  container: {
    flex: 1,
    height: "auto",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  DPtext: {
    fontSize: 15,
    color: "#40495B",
    fontWeight: "400",
  },
  contains1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reportImg: {
    width: 25,
    height: 25,
  },
});

export default ReportMenu;
