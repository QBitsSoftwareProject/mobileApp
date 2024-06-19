import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GoalsProgressBar from "../GoalsProgressBar/GoalsProgressBar";
import { ListItem } from "@rneui/themed";
import { Button } from "@rneui/base";
import { deleteASelectedGoal } from "../../services/goalsService/goalsService";
import { StyleSheet } from "react-native";

const ViewGoalCard = ({ title, subTitle, cNumber, length, goalId, change }) => {
  const navigation = useNavigation();

  const handlePress = (goalId) => {
    navigation.navigate("InsideGoalsScreen", {
      goalId,
      tab: "viewGoals",
    });
  };

  const handleDelete = async () => {
    try {
      await deleteASelectedGoal({ goalId: goalId });
      change(goalId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ListItem.Swipeable
      rightContent={(reset) => (
        <Button
          onPress={() => {
            handleDelete();
            reset();
          }}
          icon={{ name: "delete", color: "white", size: 50 }}
          buttonStyle={{
            backgroundColor: "#B0B4C0",
            borderRadius: 20,
          }}
        />
      )}
      rightStyle={styles.deleteBtn}
      containerStyle={styles.cardContainer}
    >
      <ListItem.Content>
        <TouchableOpacity
          onPress={() => {
            handlePress(goalId);
            // handleReload();
          }}
          style={{ width: "100%" }}
        >
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>

          <View>
            <GoalsProgressBar cNumber={cNumber} length={length} />
          </View>
        </TouchableOpacity>
      </ListItem.Content>
    </ListItem.Swipeable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    height: "auto",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    color: "#101318",
  },
  subTitle: {
    fontSize: 12,
    color: "#979DAC",
    width: 300,
  },
  deleteBtn: {
    backgroundColor: "#B0B4C0",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ViewGoalCard;
