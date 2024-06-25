import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./ProfileStyles";

// navigation
import { useNavigation } from "@react-navigation/native";
// navigation

const ProfilePic = ({ item }) => {
  const navigation = useNavigation();

  const navigateToScreen = () => {
    navigation.navigate("AuthorScreen", { authorId: item._id });
  };

  if (!item) {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.ProfilePic}
      onPress={() => {
        navigateToScreen();
      }}
    >
      <View style={{ alignItems: "center"}}>
        <View>
          <Image source={{ uri: item.profileImg }} style={{ width: 60, height: 60, borderRadius: 100 }} />
        </View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 5,
            color: "#596C79",
            fontWeight: "500",
            width:80,
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfilePic;
