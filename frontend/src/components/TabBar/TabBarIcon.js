import { View, Text, Image } from "react-native";
import React from "react";

const IconMapping = {
  home: require("../../assets/images/home.png"),
  user: require("../../assets/images/user.png"),
  notification: require("../../assets/images/notification.png"),
  setting: require("../../assets/images/setting.png"),
};

const TabBarIcon = ({ focused, screenName }) => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    {focused ? (
      <Image
        source={require("../../assets/images/ellipse.png")}
        style={{ position: "absolute", tintColor: "#d5e4eb" }}
      />
    ) : null}
    <Image source={IconMapping[screenName]} style={{ tintColor: "#9dabb3" }} />
  </View>
);

export default TabBarIcon;
