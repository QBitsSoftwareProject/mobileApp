import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import DocNavPop from "../DropDownMenu/DocNavPop";

const DocDropDown = ({ checkPage, setCheckPage }) => {
  const [isPress, setIsPress] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(checkPage);
  const ddArrow = require("../../assets/images/PostCardImages/droparrow.png");

  useEffect(() => {
    setSelectedMenu(checkPage);
  }, [checkPage]);

  const handlePress = () => {
    setIsPress(!isPress);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.DropDown}>
          <View style={styles.container}>
            <Text style={styles.DDMtext}>{selectedMenu}</Text>
            <Image source={ddArrow} style={styles.arrow} />
          </View>
        </View>
      </TouchableOpacity>
      {isPress && (
        <>
        
        <DocNavPop selectedMenu={setCheckPage} setIsPress={setIsPress} />
        
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  DropDown: {
    width: 120,
    height: 35,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 1,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
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
