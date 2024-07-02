import React, { useState, useEffect, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export const JournalTittle = ({ newText, value }) => {
  //value is current tittle, newText is after changing the tittle

  const route = useRoute();
  const { itemID, itemTittle, itemText } = route.params || {};
  const [inputTittle, setInputTittle] = useState(value || "");

  useEffect(() => {
    setInputTittle(value || "");
  }, [value]);

  // console.log(itemID);
  // console.log(itemTittle);
  // console.log(itemText);

  const handleInputChange = (text) => {
    setInputTittle(text); // Update local state
    newText(text); // Call the parent's onChangeText callback
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          // placeholder="Feeling happy today..."
          multiline={true}
          value={inputTittle}
          onChangeText={handleInputChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    paddingBottom: 5,
    borderBottomColor: "rgba(151,157,172,0.5)",
    borderBottomWidth: 1,
    fontSize: 24,
    fontWeight: "400",
    flex: 1,
    marginRight: 25,
  },

  edit: {
    // marginLeft:290,
    // marginTop:-45
    position: "absolute",
    right: 50,
  },
});
