import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import ButtonGroup from "../../components/Button/ButtonGroup";
import ViewGoalCard from "../../components/ViewGoalCard/ViewGoalCard";
import HistoryGoalCard from "../../components/HistoryGoalCard/HistoryGoalCard";
import SuggestGoalCard from "../../components/SuggestGoalCard/SuggestGoalCard";
import notFoundGif from "../../assets/animation/not-found.png";
import loadingGif from "../../assets/animation/loading.gif";

import {
  getSelectedGoals,
  getSuggestedGoals,
} from "../../services/goalsService/goalsService";
import { useFocusEffect } from "@react-navigation/native";

const completedGoalsList = [
  {
    id: 1,
    title: "Mindfulness Moments",
    completness: 3,
    length: 6,
    completedDate: "12.11.2024",
  },
  {
    id: 2,
    title: "Connect and Smile",
    completness: 5,
    length: 6,
    completedDate: "12.11.2024",
  },
  {
    id: 3,
    title: "Write it Out",
    completness: 1,
    length: 6,
    completedDate: "12.11.2024",
  },
  {
    id: 4,
    title: "Mindfulness Moments",
    completness: 2,
    length: 6,
    completedDate: "12.11.2024",
  },
  {
    id: 5,
    title: "Connect and Smile",
    completness: 3,
    length: 10,
    completedDate: "12.11.2024",
  },
];

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
        result = completedGoalsList;
      }
      setData(result || []);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedTab, isChange]);

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
                    length={item.length}
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
                    change={(id) => setIsChange(!isChange)}
                  />
                ) : selectedTab == 2 ? (
                  <HistoryGoalCard
                    title={item.title}
                    cNumber={item.completness}
                    length={item.length}
                    completedDate={item.completedDate}
                  />
                ) : null}
              </View>
            )}
          />
        ) : (
          <View
            style={{
              alignItems: "center",
              width: "100%",
            }}
          >
            <Image source={notFoundGif} style={{ width: "60%", height: 250 }} />
          </View>
        )}
      </View>
    </View>
  );
};

export default ViewGoalScreen;
