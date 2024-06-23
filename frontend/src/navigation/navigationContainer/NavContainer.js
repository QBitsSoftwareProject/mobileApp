import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginStack from "../routes/LoginStack";
import MainStack from "../routes/MainStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackgroundMusicProvider } from "../../components/SettingScreen/BackgroundMusicProvider";
import Toast from "react-native-toast-message";
import toastConfig from "../../components/ToastMessage/toastConfig";

import { getAUser } from "../../services/userServices/userService";

const NavContainer = () => {
  const [userId, setUserId] = useState();
  const [role, setRole] = useState();
  const [dataFetched, setDataFetched] = useState(false);

  const tokenExp = async () => {
    try {
      await getAUser();
    } catch (error) {
      if (error.message == 401 || error.message == 403) {
        await AsyncStorage.clear();
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await tokenExp();
      const userId = await AsyncStorage.getItem("userId");
      const role = await AsyncStorage.getItem("role");

      setUserId(userId);
      setRole(role);

      setDataFetched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!dataFetched) {
    return null;
  }

  return (
    <BackgroundMusicProvider>
      <NavigationContainer>
        {/* Use the navigationRef here */}
        {!userId ? (
          <>
            <LoginStack />
          </>
        ) : (
          <>
            <MainStack userId={userId} role={role} />
          </>
        )}
        <Toast config={toastConfig} />
      </NavigationContainer>
    </BackgroundMusicProvider>
  );
};

export default NavContainer;
