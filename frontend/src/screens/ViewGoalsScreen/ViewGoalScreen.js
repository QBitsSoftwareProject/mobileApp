import {
  View,
  Text,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import ButtonGroup from "../../components/Button/ButtonGroup";
import ViewGoalCard from "../../components/ViewGoalCard/ViewGoalCard";

import HistoryGoalCard from "../../components/HistoryGoalCard/HistoryGoalCard";
import SuggestGoalCard from "../../components/SuggestGoalCard/SuggestGoalCard";
import {
  getSelectedGoals,
  getSuggestedGoals,
  getTheReleventGoal,
} from "../../services/goalsService/goalsService";

const goalsList = [
  {
    id: 1,
    title: "Mindfulness Moments",
    subTitle: "Take 10 minutes daily meditation at 6.30 A.M.",
    completness: 3,
    length: 6,
  },
  {
    id: 2,
    title: "Connect and Smile",
    subTitle: "reaching out to friends and family 3 times a week",
    completness: 5,
    length: 6,
  },
  {
    id: 3,
    title: "Write it Out",
    subTitle: "Allocate time for reflective journaling 4 times",
    completness: 1,
    length: 6,
  },
  {
    id: 4,
    title: "Mindfulness Moments",
    subTitle: "Take 10 minutes daily meditation at 6.30 A.M. ",
    completness: 2,
    length: 6,
  },
  {
    id: 5,
    title: "Connect and Smile",
    subTitle: "reaching out to friends and family 3 times a week",
    completness: 3,
    length: 10,
  },
];

// const suggestGoalsList = [
//   {
//     id: 1,
//     title: "Mindfulness Moments",
//     description:
//       "3 times a week! Ease stress with journaling. Pen your thoughts and feelings for clarity andcalmness.",
//   },
//   {
//     id: 2,
//     title: "Write it out",
//     description:
//       "Take 10! Practice daily mindfulness for peace. Try meditation, breathing exercises, or body scans to find calm in just 10 minutes.",
//   },
//   {
//     id: 3,
//     title: "Connect and Smile",
//     description:
//       "Twice a week, reach out! Socialize in-person, call, or message loved ones. Building connections for a happier you",
//   },
//   {
//     id: 4,
//     title: "Mindfulness Moments",
//     description:
//       "Take 10! Practice daily mindfulness for peace. Try meditation, breathing exercises, or body scans to find calm in just 10 minutes.",
//   },
// ];
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        if (selectedTab === 0) {
          result = await getSelectedGoals();
        } else if (selectedTab === 1) {
          result = await getSuggestedGoals();
        } else if (selectedTab === 2) {
          result = completedGoalsList;
        }
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [selectedTab]);

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
                  cNumber={item.completness}
                  length={item.length}
                  goalId={item._id}
                />
              ) : selectedTab == 1 ? (
                <SuggestGoalCard
                  title={item.title}
                  subTitle={item.description}
                  goalId={item._id}
                  objectives={item.objectivesState}
                  completness={item.completness}
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
      </View>

      {/* Goals add btn--------------------------------------------------------------------------- */}

      {/* {selectedTab == 0 && (
        <TouchableOpacity
          style={{ position: "absolute", bottom: 90, right: 25 }}
        >
          <Image source={require("../../assets/images/plusBtn.png")} />
        </TouchableOpacity>
      )} */}
    </View>
  );
};

export default ViewGoalScreen;
