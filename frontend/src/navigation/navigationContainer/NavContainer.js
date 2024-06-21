import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import LoginStack from "../routes/LoginStack";
import MainStack from "../routes/MainStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackgroundMusicProvider } from "../../components/SettingScreen/BackgroundMusicProvider";
import Toast from "react-native-toast-message";
import toastConfig from "../../components/ToastMessage/toastConfig";

const NavContainer = () => {
  const [userId, setUserId] = useState();
  const [role, setRole] = useState();
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
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
    return;
  }

  return (
    <BackgroundMusicProvider>
      <NavigationContainer>
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
