import {
  Image,
  Pressable,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./styles";

const SearchBarComponent = () => {
  return (
    <View style={styles.content1}>
      <TextInput style={styles.textinput} placeholder="Search here...." />
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
        onPress={""}
      >
        <Image
          source={require("../../assets/images/SearchBarIcons/search.png")}
          style={styles.sendIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBarComponent;
