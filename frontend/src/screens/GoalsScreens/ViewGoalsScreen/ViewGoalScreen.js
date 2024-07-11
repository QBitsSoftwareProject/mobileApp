import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HeaderSub from "../../../components/HeaderSub/HeaderSub";
import ButtonGroup from "../../../components/Button/ButtonGroup";
import ViewGoalCard from "../../../components/ViewGoalCard/ViewGoalCard";
import HistoryGoalCard from "../../../components/HistoryGoalCard/HistoryGoalCard";
import SuggestGoalCard from "../../../components/SuggestGoalCard/SuggestGoalCard";
import notFoundGif from "../../../assets/animation/not-found.png";
import loadingGif from "../../../assets/animation/loading.gif";
import Toast from "react-native-toast-message";

import {
  getCompletedGoals,
  getSelectedGoals,
  getSuggestedGoals,
} from "../../../services/goalsService/goalsService";
import { useFocusEffect } from "@react-navigation/native";
import RatingPopUp from "../../../components/RatingPopUp/RatingPopUp";

const ViewGoalScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [resultSelected, setResultSelected] = useState([]);
  const [resultSuggested, setResultSuggested] = useState([]);
  const [resultCompleted, setResultCompleted] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    showSwipeToastOnceADay();
  }, []);

  const showSwipeToastOnceADay = async () => {
    try {
      const lastShown = await AsyncStorage.getItem("lastShown");
      const currentTime = Date.now();

      if (
        !lastShown ||
        currentTime - parseInt(lastShown, 10) >= 24 * 60 * 60 * 1000
      ) {
        // Show the toast message
        Toast.show({
          type: "info",
          text1: "You can swipe goals to  delete",
          text1Style: { fontSize: 16, fontWeight: "400" }, // Customize text style
          visibilityTime: 4000, // 4 seconds
        });

        // Update AsyncStorage with current time
        await AsyncStorage.setItem("lastShown", currentTime.toString());
      }
    } catch (error) {
      console.error("Error accessing AsyncStorage:", error.message);
    }
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);

      let result = [];
      setResultSuggested([]);
      setResultSelected([]);
      setResultCompleted([]);

      if (selectedTab === 0) {
        result = await getSelectedGoals();

        setResultSelected(result);
      } else if (selectedTab === 1) {
        result = await getSuggestedGoals();
        setResultSuggested(result);
      } else if (selectedTab === 2) {
        result = await getCompletedGoals();
        setResultCompleted(result);
      }

      if (result.length == 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [selectedTab, isChange])
  );

  const onClose = () => {
    setIsChange(!isChange);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 65,
      }}
    >
      <View>
        <HeaderSub
          headLine={"Goals"}
          subHeadLine={
            '"Self-care is how you take your power back." - Lalah Delia'
          }
          back={"HomeScreen"}
        />
        <View style={{ marginTop: 5, marginBottom: 15 }}>
          <ButtonGroup
            tab1={"Your Goals"}
            tab2={"Suggested"}
            tab3={"Completed"}
            select={setSelectedTab}
            change={selectedTab}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {isLoading == true && (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80%",
            }}
          >
            <Image source={loadingGif} />
          </View>
        )}

        {!isLoading && notFound && (
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

        {selectedTab == 0 ? (
          <FlatList
            data={resultSelected}
            renderItem={({ item, index }) => (
              <View
                style={{
                  marginHorizontal: 25,
                  paddingTop: 15,
                  marginBottom: index === resultSelected.length - 1 ? 32 : 0,
                }}
              >
                <ViewGoalCard
                  title={item.goalId.title}
                  subTitle={item.goalId.subTitle}
                  cNumber={item.completeness}
                  length={
                    item.goalId.objectives.length *
                    item.goalId.objectivesState.length
                  }
                  goalId={item.goalId._id}
                  change={(id) => setIsChange(!isChange)}
                />
              </View>
            )}
          />
        ) : selectedTab == 1 ? (
          <FlatList
            data={resultSuggested}
            renderItem={({ item, index }) => (
              <View
                style={{
                  marginHorizontal: 25,
                  paddingTop: 15,
                  marginBottom: index === resultSuggested.length - 1 ? 32 : 0,
                }}
              >
                <SuggestGoalCard
                  title={item.title}
                  subTitle={item.description}
                  goalId={item._id}
                  objectives={item.objectivesState}
                  completness={item.completeness}
                  // change={(id) => setIsChange(!isChange)}
                  select={setSelectedTab}
                />
              </View>
            )}
          />
        ) : selectedTab == 2 ? (
          <FlatList
            data={resultCompleted}
            renderItem={({ item, index }) => (
              <View
                style={{
                  marginHorizontal: 25,
                  paddingTop: 15,
                  marginBottom: index === resultCompleted.length - 1 ? 32 : 0,
                }}
              >
                {item.isRated ? (
                  <HistoryGoalCard
                    title={item.goalId.title}
                    cNumber={item.completeness}
                    length={
                      item.goalId.objectives.length *
                      item.objectivesState.length
                    }
                    dueDate={item.dueDate}
                  />
                ) : (
                  <RatingPopUp
                    onClose={onClose}
                    message={"How satisfied are you with your progress on, "}
                    goalId={item.goalId._id}
                    title={item.goalId.title}
                  />
                )}
              </View>
            )}
          />
        ) : null}
      </View>
    </View>
  );
};

export default ViewGoalScreen;
