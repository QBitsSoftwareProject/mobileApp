import { View, FlatList, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderSub from "../../../components/HeaderSub/HeaderSub";
import TaskCard from "../../../components/TaskCards/TaskCard";
import TaskTypeCard from "../../../components/TaskTypecard/TaskTypeCard";
import { getAUser } from "../../../services/userServices/userService";
import loadingGif from "../../../assets/animation/loading.gif";
import { getSuggestedMotivation } from "../../../services/motivationServices/motivation";
import { checkTheTerm } from "../../../services/taskServices/taskservice";

// Importing images for task icons
const images = {
  shortTerm: require("../../../assets/images/TaskIcons/7day.png"),
  mediumTerm: require("../../../assets/images/TaskIcons/14day.png"),
  longTerm: require("../../../assets/images/TaskIcons/30day.png"),
};

const TaskTypeScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      await checkTheTerm();
      const response = await getAUser();

      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
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
            currentTaskType={user.currentTaskType}
            userName={user.userName}
          />
          <TaskTypeCard
            headText={"Medium Term Tasks"}
            subText={"This is 14 days guided stress management treatment."}
            icon={images.mediumTerm}
            taskType={"medium-term"}
            currentTaskType={user.currentTaskType}
            userName={user.userName}
          />
          <TaskTypeCard
            headText={"Long Term Tasks"}
            subText={"This is 30 days guided stress management treatment."}
            icon={images.longTerm}
            taskType={"long-term"}
            currentTaskType={user.currentTaskType}
            userName={user.userName}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default TaskTypeScreen;
