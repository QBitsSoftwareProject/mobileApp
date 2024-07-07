import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import {
  deleteAllNotification,
  getNotification,
} from "../../services/notificationService/notificationService";
import loadingGif from "../../assets/animation/loading.gif";
import notFoundGif from "../../assets/animation/not-found.png";
import { useWebSockets } from "../../services/socketServices/webSocket";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NotifyScreen = () => {
  const [notificationList, setNotificationList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastDate, setLastDate] = useState(null);
  const [isRefresh, setIsRefresh] = useState(false);
  const [userRole, setUserRole] = useState("");

  const navigation = useNavigation();

  const goBackFromComment = () => {
    if (userRole == "doctor") {
      navigation.navigate("AppointmentListsCategory");
    } else {
      navigation.navigate("HomeScreen");
    }
  };

  const fetchNotification = async (last) => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const res = await getNotification();

      setNotificationList(res);
      // if (last == "") {
      //   setNotificationList(res);
      // } else {
      //   setNotificationList((prev) => [...prev, ...res]);
      // }

      // if (res.length > 0) {
      //   setLastDate(res[res.length - 1].createdAt);
      // }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRole = async () => {
    const role = await AsyncStorage.getItem("role");
    setUserRole(role);
  };

  useEffect(() => {
    fetchRole();
    fetchNotification("");
  }, [isRefresh]);

  useWebSockets((notification) => {
    if (notification) {
      fetchNotification("");
    }
  });

  const handleDelete = async () => {
    try {
      await deleteAllNotification();
      setNotificationList([]);
      setLastId(null);
      fetchNotification();
    } catch (error) {
      console.log(error);
    }
  };

  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <Image
        source={loadingGif}
        style={{ width: 50, height: 50, alignSelf: "center" }}
      />
    );
  };

  // if (isLoading) {
  //   return (
  //     <View style={styles.loadingGif}>
  //       <Image source={loadingGif} />
  //     </View>
  //   );
  // }

  if (!notificationList.length && !isLoading) {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          source={notFoundGif}
          style={{ width: "60%", height: 250, opacity: 0.3 }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ paddingBottom: 65, flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBackFromComment}>
          <Image source={require("../../assets/images/BackBlack.png")} />
        </TouchableOpacity>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Notifications</Text>
        </View>
      </View>

      <View style={styles.clearAllContainer}>
        <TouchableOpacity style={styles.viewBtn} onPress={handleDelete}>
          <Text style={styles.viewText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notificationList}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
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
        )}
        // onEndReached={() => fetchNotification(lastDate)}
        // onEndReachedThreshold={0.6}
        // ListFooterComponent={renderFooter}
        contentContainerStyle={{ paddingHorizontal: 25 }}
      />
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
    zIndex: -1,
  },
  headerText: {
    fontSize: 24,
    color: "#101318",
    fontWeight: "500",
    textAlign: "center",
  },
  clearAllContainer: {
    width: "100%",
    height: 30,
    paddingHorizontal: 25,
    marginBottom: 15,
    alignItems: "flex-end",
  },
  viewBtn: {
    height: 35,
    width: 100,
    borderRadius: 20,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  viewText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#5C677D",
  },
});

export default NotifyScreen;
