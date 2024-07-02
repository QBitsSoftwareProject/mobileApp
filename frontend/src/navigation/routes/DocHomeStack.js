import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import AppointmentListsCategory from "../../screens/DoctorScreens/AppointmentListsCategory/AppointmentListsCategory";
import { BackgroundMusicContext } from "../../components/SettingScreen/BackgroundMusicProvider";
import React, { useEffect, useState, useContext } from "react";

const stack = createNativeStackNavigator();

const DocHomeStack = () => {
  const { setMusicStop } = useContext(BackgroundMusicContext);

  useEffect(() => {
    // Set musicStop to true when the component mounts
    setMusicStop(true);
  }, []);

  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      {/* <stack.Screen name='HomeScreen' component={HomeScreen} />  */}
      <stack.Screen
        name="AppointmentListsCategory"
        component={AppointmentListsCategory}
      />
    </stack.Navigator>
  );
};

export default DocHomeStack;
