import {
  View,
  Text,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import ButtonGroup from "../../components/Button/ButtonGroup";
import ViewGoalCard from "../../components/ViewGoalCard/ViewGoalCard";

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

const ViewGoalScreen = () => {
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
        />
        <View style={{ marginVertical: 32 }}>
          <ButtonGroup
            tab1={"Your Goals"}
            tab2={"Suggested"}
            tab3={"Completed"}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={goalsList}
          renderItem={({ item, index }) => (
            <View
              style={{
                marginHorizontal: 25,
                marginTop: 15,
                marginBottom: index === goalsList.length - 1 ? 32 : 0,
              }}
            >
              <ViewGoalCard
                title={item.title}
                subTitle={item.subTitle}
                cNumber={item.completness}
                length={item.length}
              />
            </View>
          )}
        />
      </View>

      <TouchableOpacity style={{ position: "absolute", bottom: 90, right: 25 }}>
        <Image source={require("../../assets/images/plusBtn.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default ViewGoalScreen;
