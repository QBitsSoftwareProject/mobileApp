import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingCard from "../../components/SettingScreen/SettingCard";
import LogoutCard from "../../components/SettingScreen/LogoutCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackgroundMusicContext } from "../../components/SettingScreen/BackgroundMusicProvider";
import ChangePasswordPopUp from "../../components/SettingScreen/ChangePasswordPopUp";
import LogOutPopUp from "../../components/SettingScreen/LogOutPopUp";

const SettingScreen = ({ route }) => {
  const { setMusicStop } = useContext(BackgroundMusicContext);
  const [isPopupVisibleChangePassword, setPopupVisibleChangePassword] =
    useState(false);
  const [isPopupVisibleLogOut, setPopupVisibleLogOut] = useState(false);

  const togglePopupChangePassword = () => {
    setPopupVisibleChangePassword(!isPopupVisibleChangePassword);
  };

  const togglePopupLogOut = () => {
    setPopupVisibleLogOut(!isPopupVisibleLogOut);
  };

  const logoutImg = require("../../assets/images/Settings/Logout.png");
  const passwordResettImg = require("../../assets/images/Settings/password.png");

  const navigation = useNavigation();
  const { routeName } = route.params;

  console.log(routeName);

  const handleLogout = async () => {
    setMusicStop(false);

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
    <View>
      <View style={{ marginRight: 25, marginLeft: 25 }}>
        <Text style={styles.SettingText}>Settings</Text>
        <SettingCard></SettingCard>
        <LogoutCard
          handleLogout={togglePopupChangePassword}
          text={"Change Password"}
          img={passwordResettImg}
        />
        <LogoutCard
          handleLogout={togglePopupLogOut}
          text={"Logout"}
          img={logoutImg}
        />
      </View>

      <ChangePasswordPopUp
        isVisible={isPopupVisibleChangePassword}
        onClose={togglePopupChangePassword}
      />

      <LogOutPopUp
        isVisible={isPopupVisibleLogOut}
        onClose={togglePopupLogOut}
        logout={handleLogout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SettingText: {
    alignSelf: "center",
    marginTop: 32,
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 32,
  },
});

export default SettingScreen;
