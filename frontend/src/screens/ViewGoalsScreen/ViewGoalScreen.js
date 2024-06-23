import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import ButtonGroup from "../../components/Button/ButtonGroup";
import ViewGoalCard from "../../components/ViewGoalCard/ViewGoalCard";
import HistoryGoalCard from "../../components/HistoryGoalCard/HistoryGoalCard";
import SuggestGoalCard from "../../components/SuggestGoalCard/SuggestGoalCard";
import notFoundGif from "../../assets/animation/not-found.png";
import loadingGif from "../../assets/animation/loading.gif";

import {
  getCompletedGoals,
  getSelectedGoals,
  getSuggestedGoals,
} from "../../services/goalsService/goalsService";
import { useFocusEffect } from "@react-navigation/native";
import RatingPopUp from "../../components/RatingPopUp/RatingPopUp";

const ViewGoalScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      let result = [];
      if (selectedTab === 0) {
        result = await getSelectedGoals();
      } else if (selectedTab === 1) {
        result = await getSuggestedGoals();
      } else if (selectedTab === 2) {
        result = await getCompletedGoals();
      }
      setData(result || []);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setData([]);
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
        paddingBottom: 80,
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
        <View style={{ marginVertical: 32 }}>
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
        {isLoading == true ? (
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
        ) : data && data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <View
                style={{
                  marginHorizontal: 25,
                  marginTop: 15,
                  marginBottom: index === data.length - 1 ? 32 : 0,
                }}
              >
                {selectedTab == 0 ? (
                  <ViewGoalCard
                    title={item.title}
                    subTitle={item.subTitle}
                    cNumber={item.completeness}
                    length={
                      item.objectives.length * item.objectivesState.length
                    }
                    goalId={item._id}
                    change={(id) => setIsChange(!isChange)}
                  />
                ) : selectedTab == 1 ? (
                  <SuggestGoalCard
                    title={item.title}
                    subTitle={item.description}
                    goalId={item._id}
                    objectives={item.objectivesState}
                    completness={item.completeness}
                    // change={(id) => setIsChange(!isChange)}
                    select={setSelectedTab}
                  />
                ) : selectedTab == 2 && item.isRated ? (
                  <HistoryGoalCard
                    title={item.title}
                    cNumber={item.completeness}
                    length={
                      item.objectives.length * item.objectivesState.length
                    }
                    dueDate={item.dueDate}
                  />
                ) : selectedTab == 2 && !item.isRated ? (
                  <RatingPopUp
                    message={"How satisfy you are?"}
                    goalId={item._id}
                    onClose={onClose}
                  />
                ) : null}
              </View>
            )}
            keyExtractor={(item) => item._id}
          />
        ) : (
          <View
            style={{
              alignItems: "center",
              width: "100%",
            }}
          >
            <Image
              source={notFoundGif}
              style={{ width: "60%", height: 250, opacity: 0.3 }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default ViewGoalScreen;
