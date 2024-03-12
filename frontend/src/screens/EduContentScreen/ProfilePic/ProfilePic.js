import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./ProfileStyles";

// navigation
import { useNavigation } from "@react-navigation/native";
// navigation

const ProfilePic = ({item, z}) => {
  const navigation = useNavigation();

  const navigateToScreen = () => {
    navigation.navigate("AuthorScreen", { authorId: item.id });
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
      <View style={{ alignItems: "center" }}>
        <View>
          <Image source={item.image} />
        </View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            color: "#596C79",
            fontWeight: "500",
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfilePic;
