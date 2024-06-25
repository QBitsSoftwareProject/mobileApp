import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useState } from "react";
import DocNavPop from "../DropDownMenu/DocNavPop";

const DocDropDown = (props) => {
  const [isPress, setIsPress] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Completed");
  const ddArrow = require("../../assets/images/PostCardImages/droparrow.png");

  const handlePress = () => {
    setIsPress(!isPress);
    props.check(selectedMenu);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => handlePress()}>
        <View style={styles.DropDown}>
          <View style={styles.container}>
            <Text style={styles.DDMtext}>{selectedMenu}</Text>
            <Image source={ddArrow} style={styles.arrow} />
          </View>
        </View>
      </TouchableOpacity>
      {isPress && <DocNavPop selectedMenu={setSelectedMenu} />}
    </View>
  );
};

const styles = StyleSheet.create({
  DropDown: {
    width: 95,
    height: 30,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 1,
    marginHorizontal: 5,
    marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  DDMtext: {
    color: "#40495B",
    fontWeight: "400",
  },
  arrow: {
    width: 10,
    height: 10,
  },
});

export default DocDropDown;
