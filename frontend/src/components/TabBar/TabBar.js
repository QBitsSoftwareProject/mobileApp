import React, { useEffect, useState, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingScreen from "../../screens/SettingScreen/SettingScreen";
import NotifyScreen from "../../screens/NotificationScreen/NotifyScreen";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";
import TabBarIcon from "./TabBarIcon";
import MusicPlayer from "./BackgroundMusic";
import { BackgroundMusicContext } from "../SettingScreen/BackgroundMusicProvider";
import { View, ActivityIndicator, Keyboard } from "react-native";
import {
  checkNotification,
  checkUnreadNotification,
} from "../../services/notificationService/notificationService";
import { useNavigation } from "@react-navigation/native";
import {
  useWebSockets,
  useWebSocketsNotification,
} from "../../services/socketServices/webSocket";

const Tab = createBottomTabNavigator();

const TabBar = ({ route, user, userRole }) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [notificationList, setNotificationList] = useState();
  const [HomeStack, setHomeStack] = useState(null);
  const navigation = useNavigation();

  let userId = null;
  let role = null;
  let routeName = "LoginStack";

  if (!route || !route.params) {
    userId = user;
    role = userRole;
  } else {
    userId = route.params.userId;
    role = route.params.role;
    routeName = route.params.routeName;
  }

  useEffect(() => {
    checkNotification();
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  //check unread notification
  const checkNotification = async () => {
    try {
      let res = [];
      res = await checkUnreadNotification();

      if (res.notify) {
        setIsNotification(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // web socket
  useWebSockets((obj) => {
    checkNotification();
  });

  const loadHomeStack = async () => {
    const { default: loadedHomeStack } = await import(
      "../../navigation/routes/HomeStack"
    );
    setHomeStack(() => loadedHomeStack);
  };

  useEffect(() => {
    const runEffect = async () => {
      await loadHomeStack();
    };

    const unsubscribe = navigation.addListener("state", runEffect);

    // Run the effect initially
    runEffect();

    return unsubscribe;
  }, [navigation]);

  const { backgroundMusicValid, backgroundMusic, musicStop } = useContext(
    BackgroundMusicContext
  );
  const firebaseAudioUrl =
    "https://firebasestorage.googleapis.com/v0/b/uploadingfile-9e556.appspot.com/o/music%2FBlue%20Sky%20-%20Anime%20Piano%20%20Relaxation%20and%20Inspiration.mp3?alt=media&token=63f0612a-cfaf-41c7-ac6c-a001512b5369";

  if (!HomeStack) {
    // Return a loading indicator or placeholder until HomeStack is loaded
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {musicStop && (
        <MusicPlayer
          play={backgroundMusic && backgroundMusicValid}
          url={firebaseAudioUrl}
        />
      )}
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            flexDirection: "row",
            position: "absolute",
            height: isKeyboardVisible ? 0 : 65,
            overflow: isKeyboardVisible ? "hidden" : "visible",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: 32,
            alignItems: "center",
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeStack}
          initialParams={{ userId: userId, role: role }}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} screenName={"home"} />
            ),
          }}
        />

        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} screenName={"user"} />
            ),
          }}
        />

        <Tab.Screen
          name="Notification"
          component={NotifyScreen}
          listeners={{
            tabPress: (e) => {
              setIsNotification(false);
            },
          }}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                screenName={"notification"}
                isNotification={isNotification}
              />
            ),
          }}
        />

        <Tab.Screen
          name="setting"
          component={SettingScreen}
          initialParams={{ routeName: routeName }}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} screenName={"setting"} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabBar;
