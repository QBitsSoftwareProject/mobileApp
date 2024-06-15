import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from "react-native";
import { Overlay } from "./deletePopup";
import { deleteJournal } from "../../services/journalService/journalService";

export const EditDeletebutton = (props) => {
  const [journalId, setJournalId] = useState("");

  const stack = createStackNavigator();
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleEditPress = () => {
    props.editFunction(
      props.item,
      props.itemTittle,
      props.itemText,
      props.itemEmoji,
      props.itemTime
    );
  };

  const handleDeletePress = () => {
    // props.deleteFunction(props.item);
    setIsOverlayVisible(true);
    deleteJournal(id);
  };

  return (
    <View style={styles.mainButton}>
      {/* EditeButton */}
      <View style={styles.editButton}>
        <TouchableOpacity
          onPress={handleEditPress}
          style={[styles.editButton, { backgroundColor: "#D9D9D9;" }]}
        >
          <Image
            source={require("../../assets/images/journal/edit.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      {/* deleteButton */}
      <View style={styles.deleteButton}>
        <TouchableOpacity
          onPress={handleDeletePress}
          style={[styles.deleteButton, { backgroundColor: "#D9D9D9;" }]}
        >
          <Image
            source={require("../../assets/images/journal/delete.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      <Overlay
        isVisible={isOverlayVisible}
        onClose={() => setIsOverlayVisible(false)}
        item={props.item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainButton: {
    flexDirection: "column",
    backgroundColor: "#D9D9D9",
    height: 127,
    width: 64,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end",
  },
  editButton: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 63.5,
    marginBottom: -10,
  },
  deleteButton: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 63.5,
    marginTop: -10,
  },
});
