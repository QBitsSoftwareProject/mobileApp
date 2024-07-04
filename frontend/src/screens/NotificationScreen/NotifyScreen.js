import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Keyboard,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import { getNotification } from "../../services/notificationService/notificationService";
import loadingGif from "../../assets/animation/loading.gif";
import notFoundGif from "../../assets/animation/not-found.png";
import { useWebSockets } from "../../services/socketServices/webSocket";

const NotifyScreen = () => {
  const [notificationList, setNotificationList] = useState();
  const [isRefresh, setIsRefresh] = useState(false);

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

  useEffect(() => {
    fetchNotification();
  }, [isRefresh]);

  useWebSockets((notification) => {
    fetchNotification();
  });

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
      <View style={styles.header}>
        <TouchableOpacity onPress={goBackFromComment}>
          <Image source={require("../../assets/images/BackBlack.png")} />
        </TouchableOpacity>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Profile</Text>
        </View>
      </View>

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
  header: {
    flexDirection: "row",
    padding: 25,

    zIndex: 20,
    alignItems: "center",
    gap: 32,
    width: "100%",
  },

  headerTextView: {
    width: "100%",
    position: "absolute",
    marginLeft: 25,
  },

  headerText: {
    fontSize: 24,
    color: "#101318",
    fontWeight: "500",
    textAlign: "center",
  },
});

export default NotifyScreen;
