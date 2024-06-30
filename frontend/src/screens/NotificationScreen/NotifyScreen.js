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
        paddingBottom: 65,
        flex: 1,
      }}
    >
      <TouchableOpacity onPress={goBackFromComment} style={styles.backButton}>
        <Image source={require("../../assets/images/BackBlack.png")} />
      </TouchableOpacity>

      <ScrollView style={{ paddingHorizontal: 25 }}>
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
    margin: 25,

    zIndex: 20,
  },
});

export default NotifyScreen;
