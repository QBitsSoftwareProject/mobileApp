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
import notFoundGif from "../../assets/animation/not-found.png";

const NotifyScreen = () => {
  const [notificationList, setNotificationList] = useState();
  const [isRefresh, setIsRefresh] = useState();

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
    }, [isRefresh])
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
        {notificationList.length == 0 && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: 32,
            }}
          >
            <Image
              source={notFoundGif}
              style={{ width: "60%", height: 250, opacity: 0.3 }}
            />
          </View>
        )}

        <View>
          {notificationList.length > 0 &&
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
                isRefresh={setIsRefresh}
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
