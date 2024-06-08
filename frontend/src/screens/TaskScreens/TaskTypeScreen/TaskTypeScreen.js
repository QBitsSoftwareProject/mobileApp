import { View, FlatList, ScrollView } from "react-native";
import React from "react";
import HeaderSub from "../../../components/HeaderSub/HeaderSub";
import TaskCard from "../../../components/TaskCards/TaskCard";
import TaskTypeCard from "../../../components/TaskTypecard/TaskTypeCard";

// Importing images for task icons
const images = {
  shortTerm: require("../../../assets/images/TaskIcons/7day.png"),
  mediumTerm: require("../../../assets/images/TaskIcons/14day.png"),
  longTerm: require("../../../assets/images/TaskIcons/30day.png"),
};

const TaskTypeScreen = () => {
  return (
    <View style={{ flex: 1, paddingBottom: 85 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <HeaderSub
          headLine={"Task Types"}
          subHeadLine={"Here you can select the task type"}
          back={"HomeScreen"}
        />

        <View style={{ flex: 1, marginTop: 32, paddingHorizontal: 25 }}>
          <TaskTypeCard
            headText={"Short Term Tasks"}
            subText={"This is 7 days guided stress management treatment."}
            icon={images.shortTerm}
            taskType={"short-term"}
          />
          <TaskTypeCard
            headText={"Medium Term Tasks"}
            subText={"This is 14 days guided stress management treatment."}
            icon={images.mediumTerm}
            taskType={"medium-term"}
          />
          <TaskTypeCard
            headText={"Long Term Tasks"}
            subText={"This is 30 days guided stress management treatment."}
            icon={images.longTerm}
            taskType={"long-term"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default TaskTypeScreen;
