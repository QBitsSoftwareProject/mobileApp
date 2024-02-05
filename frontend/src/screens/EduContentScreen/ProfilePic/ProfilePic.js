import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./ProfileStyles";

// navigation
import { useNavigation } from "@react-navigation/native";
// navigation

const ProfilePic = ({ item }) => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName, data) => {
    navigation.navigate(screenName, { data });
  };

  if (!item) {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.ProfilePic}
      onPress={() => {
        navigateToScreen("AuthorScreen", { authorData: item });
      }}
    >
      <View style={{ alignItems: "center" }}>
        <View>
          <Image source={item.image} />
        </View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            color: "#596C79",
            fontWeight: "1000",
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfilePic;
