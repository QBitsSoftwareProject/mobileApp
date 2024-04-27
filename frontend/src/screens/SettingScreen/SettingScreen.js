import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingScreen = ({ route }) => {
  const navigation = useNavigation();
  const { routeName } = route.params;
  console.log(routeName);

  const handleLogout = async () => {
    await clearAllData();

    if (routeName === "MainStack") {
      navigation.navigate("LoginStack");
    } else {
      navigation.navigate("WelcomeScreen");
    }
  };

  const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error("Error clearing AsyncStorage data:", error);
    }
  };
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          marginHorizontal: 25,
          marginVertical: 100,
          backgroundColor: "yellow",
          width: 300,
          height: 50,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={handleLogout}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingScreen;
