import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import { useNavigation } from "@react-navigation/native";
import RegularCard from "../../components/CFCard/RegularCard";
import HomePage from "../CommunityHomePage/HomePage";

const postCategoryList = [
  {
    id: 1,
    image: require("../../assets/images/NotificationImages/Yoga.png"),
    title: "Daily meditation ",
    sub: "our daily meditation session begins in 45 minutes. Time to find your inner calm.",
  },
  {
    id: 2,
    image: require("../../assets/images/NotificationImages/Appointment.png"),
    title: "Appointment Confirmation",
    sub: "Your appointment with Dr. Smith has been confirmed for tomorrow at 10 AM.",
  },

  {
    id: 3,
    image: require("../../assets/images/NotificationImages/Comments.png"),
    title: "Community Engagement",
    sub: "Divya Rajapaksha commented on your post. Join the conversation!",
  },
  {
    id: 4,
    image: require("../../assets/images/NotificationImages/Clipboard.png"),
    title: "Task Reminder",
    sub: "Don't forget to complete your daily tasks today for a healthier you!",
  },
];

const NotifyScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <HeaderSub
        headLine={"Notification"}
        subHeadLine={"See your past notification"}
        back={HomePage}
      />

      <SafeAreaView style={{ margin: 25 }}>
        <ScrollView style={{ height: 500 }}>
          <View style={{ marginBottom: 80 }}>
            {postCategoryList.map((item) => (
              <RegularCard
                key={item.id}
                image={item.image}
                title={item.title}
                sub={item.sub}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default NotifyScreen;
