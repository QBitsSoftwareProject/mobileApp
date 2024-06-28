import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import { getNotification } from "../../services/notificationService/notificationService";
import loadingGif from "../../assets/animation/loading.gif";

const NotifyScreen = () => {
  const [notificationList, setNotificationList] = useState([]);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const navigation = useNavigation();

  const goBackFromComment = () => {
    navigation.navigate("HomeScreen");
  };

  const fetchNotification = async () => {
    try {
      const res = await getNotification();
      setNotificationList(res);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchNotification();

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
    }, [])
  );
  if (!notificationList) {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image source={loadingGif} />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        paddingTop: 35,
        paddingBottom: isKeyboardVisible ? 50 : 130,
        flex: 1,
      }}
    >
      <TouchableOpacity onPress={goBackFromComment} style={styles.backButton}>
        <Image source={require("../../assets/images/BackBlack.png")} />
      </TouchableOpacity>

      <ScrollView style={{ paddingHorizontal: 25, paddingTop: 80 }}>
        <View>
          {notificationList &&
            notificationList.map((item) => (
              <NotificationCard
                key={item._id}
                appId={item._id}
                postId={item.referenceId}
                image={item.proPic}
                title={item.userName}
                Date={item.createdAt}
                content={item.message}
                status={item.status}
                type={item.type}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    margin: 35,
    zIndex: 20,
  },
});

export default NotifyScreen;
