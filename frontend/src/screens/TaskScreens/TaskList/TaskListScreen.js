import { View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderSub from "../../../components/HeaderSub/HeaderSub";
import TaskCard from "../../../components/TaskCards/TaskCard";
import { getSuggestedTasks } from "../../../services/taskServices/taskservice";
import loadingGif from "../../../assets/animation/loading.gif";
import notFoundGif from "../../../assets/animation/not-found.png";

// Importing images for task icons
const images = {
  meditation: require("../../../assets/images/TaskIcons/meditation.png"),
  friends: require("../../../assets/images/TaskIcons/friends.png"),
  journal: require("../../../assets/images/TaskIcons/journal.png"),
  default: require("../../../assets/images/TaskIcons/7day.png"),
};

const TaskListScreen = () => {
  const [taskList, setTaskList] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await getSuggestedTasks();

      setTaskList(response);
    } catch (error) {
      console.log(error);
    }
  };

  if (!taskList) {
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

  // Counting remaining incomplete tasks
  let remaining = 0;
  const count = taskList.filter((item) => {
    if (!item.isComplete) {
      remaining++;
    }
  });

  // Sorting the task list with incomplete tasks first
  const sortedTaskList = [...taskList].sort((a, b) => {
    if (!a.isComplete && b.isComplete) {
      return -1;
    } else if (a.isComplete && !b.isComplete) {
      return 1;
    } else {
      return 0;
    }
  });

  const setIcon = (type) => {
    switch (type) {
      case "journal":
        return images.journal;

      case "resource":
        return images.meditation;

      case "community":
        return images.friends;

      default:
        return images.default;
    }
  };

  return (
    <View style={{ flex: 1, paddingBottom: 85 }}>
      <HeaderSub
        headLine={"Daily Activities"}
        subHeadLine={remaining + " more to complete"}
        back={"TaskTypeScreen"}
      />

      <View style={{ flex: 1 }}>
        {taskList.length <= 0 ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              source={notFoundGif}
              style={{ width: "60%", height: 250, opacity: 0.3 }}
            />
          </View>
        ) : (
          <FlatList
            data={sortedTaskList}
            renderItem={({ item, index }) => (
              <View
                style={{
                  marginHorizontal: 25,
                  marginTop: 15,
                  marginBottom: index === taskList.length - 1 ? 32 : 0,
                }}
              >
                <TaskCard
                  headText={item.taskId.headText}
                  subText={item.taskId.subText}
                  completeness={item.isComplete}
                  icon={setIcon(item.taskId.feature)}
                  taskId={item.taskId._id}
                  index={index + 1}
                  type={item.taskId.feature}
                />
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default TaskListScreen;
