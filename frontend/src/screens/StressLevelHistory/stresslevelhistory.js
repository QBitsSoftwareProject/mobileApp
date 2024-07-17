import {
  View,
  Text,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import styles from "./historystyle";
import React, { useState, useEffect } from "react";
import axiosInstance from "../../api/axios";
import { GetMonthAndDate } from "../StressLevelAssessmentQuestions/convertdatetime";
import TabBar from "../../components/TabBar/TabBar";
import { useNavigation } from "@react-navigation/native";
import { fetchHistoryDataByUserId } from "../../services/stressMarksServices/stressMarkServices";

const StressLevelHistory = () => {
  const [historyData, setHistoryData] = useState([]);
  const [userID, setUserId] = useState("");

  //get history of stress level by newest first and groupde by date
  const fetchHistoryData = async () => {
    try {
      const response = await fetchHistoryDataByUserId();
      const userData = response;

      const historyDataArray = Object.entries(userData).map(
        ([date, items]) => ({
          date,
          items,
        })
      );

      setHistoryData(historyDataArray);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHistoryData();
  }, []);

  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.navigate("DisplayResultScreen", {
      userId: userID,
    });
  };

  const renderDateItem = ({ item, index }) => {
    const colors = ["#4ABFB4", "#4A90BF"];

    return (
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <View style={styles.verticalbar}></View>
          <GetMonthAndDate
            fulldate={item.date}
            color={colors[index % colors.length]}
          />
        </View>
        <View style={styles.rightSection}>
          {/* Render individual items for the date */}
          {item.items.map((dataItem, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.timetext}>{dataItem.time}</Text>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={styles.stressLvlText}>Your Stress level </Text>
                </View>
                <View style={styles.markview}></View>
                <Text style={styles.markText}>{dataItem.mark} / 40</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  };

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={{ flex: 1 }}>
      <HeaderSub
        headLine="History"
        subHeadLine="Past stress level."
        back="DisplayResultScreen"
        userID={userID}
      />
      <ImageBackground
        source={require("../../assets/images/stresslevelhistory/historybc.png")}
      >
        <View style={styles.scrollArea}>
          <FlatList
            style={styles.FlatList}
            data={historyData}
            keyExtractor={(item) => item.date}
            renderItem={renderDateItem}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default StressLevelHistory;
