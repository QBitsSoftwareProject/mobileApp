import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";

const PostCatBtn = (props) => {
  return (
    <TouchableOpacity onPress={() => handleTimePress(props.PstCat)}>
      <View style={styles.PCbutton}>
        <Text style={styles.pstcat}>{props.PstCat}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  PCbutton: {
    width: 100,
    height: 30,
    borderRadius: 20,
    backgrounColor: "#fff",
    borderWidth: 1.2,
    borderColor: "#4A90BF",
    marginHorizontal: 7,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  pstcat: {
    color: "#4A90BF",
    fontWeight: "400",
  },
});

export default PostCatBtn;
