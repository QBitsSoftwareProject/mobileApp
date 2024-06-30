import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView, Image, Dimensions } from "react-native";
import notFoundGif from "../../assets/animation/not-found.png";
import { CustomButtonView } from "./viewSwitch";
import { Calendar } from "./calender";
import { FloatingButton } from "./floatingButton";
import loadingGif from "../../assets/animation/loading.gif";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import { getJournalsByUserId } from "../../services/journalService/journalService";
import JounalCard from "./JounalCard";
import { useFocusEffect } from "@react-navigation/native";

export const ViewJournal = ({ navigation }) => {
  const screenHeight = Dimensions.get("window").height;
  const [journalArray, setJournalArray] = useState();
  const [refresh, setIsRefresh] = useState(1);

  useFocusEffect(
    useCallback(() => {
      fetchJournals();
    }, [refresh])
  );

  const fetchJournals = async () => {
    try {
      const journalData = await getJournalsByUserId();
      const reversedJournalData = journalData.reverse();
      setJournalArray(reversedJournalData);
    } catch (err) {
      console.log("err" + err.message);
    }
  };

  const handleButton = () => {
    navigation.navigate("JournalStatistics", {});
  };

  const handleFlotingPointButton = () => {
    navigation.navigate("AddNewJournal", {});
  };

  if (!journalArray) {
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
    <View>
      <HeaderSub
        headLine={"My Journals"}
        subHeadLine={"View your past journals"}
        back="HomeScreen"
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 32,
        }}
      >
        <CustomButtonView btnAnalysis={handleButton}></CustomButtonView>
      </View>
      <View style={{ height: screenHeight - 320 }}>
        <ScrollView
          style={{
            marginHorizontal: 25,
            marginBottom: 30,
          }}
        >
          <Calendar setJournalArray={setJournalArray} />
          {journalArray.length == 0 ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image
                source={notFoundGif}
                style={{
                  width: 200,
                  height: 200,
                  opacity: 0.3,
                  resizeMode: "cover",
                }}
              />
            </View>
          ) : (
            journalArray.map((item) => (
              <JounalCard
                key={item._id}
                journal={item}
                setIsRefresh={setIsRefresh}
              />
            ))
          )}
        </ScrollView>
        <FloatingButton handleFlotingPointButton={handleFlotingPointButton} />
      </View>
    </View>
  );
};
