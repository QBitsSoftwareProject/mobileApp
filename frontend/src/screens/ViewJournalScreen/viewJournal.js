import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
  Animated,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./viewStyles";
import { CustomButtonView } from "./viewSwitch";
import { Calendar } from "./calender";
import { SwipableList } from "./viewInputJournal";
import { FloatingButton } from "./floatingButton";
import loadingGif from "../../assets/animation/loading.gif";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import { createStackNavigator } from "@react-navigation/stack";
import moment from "moment";
import { color } from "@rneui/base";

export const ViewJournal = ({ navigation }) => {
  const stack = createStackNavigator();
  const [before, setBefore] = useState("");
  const [arrayController, setArrayController] = useState(0);
  const [journalArray, setJournalArray] = useState([]);
  const [isCalendarVisible, setIsCalendarVisible] = useState(true); // Add this state

  const handleButton = () => {
    navigation.navigate("JournalStatistics", {});
  };

  const handleFlotingPointButton = () => {
    navigation.navigate("AddNewJournal", {});
  };

  const handleEditButton = (item, itemTittle, itemText, itemEmoji) => {
    // navigate edit jouranal, get props from editFuntion
    navigation.navigate("EditJournal", {
      item,
      itemTittle,
      itemText,
      itemEmoji,
    });
  };

  return (
    <View>
      <HeaderSub
        headLine={"My Journals"}
        subHeadLine={"View your past journals"}
        back="HomeScreen"
      />

      <View style={styles.container}>
        <CustomButtonView btnAnalysis={handleButton}></CustomButtonView>
        <Calendar
          setJournalArray={setJournalArray}
          setArrayController={setArrayController}
          isVisible={isCalendarVisible} // Pass the visibility state
        ></Calendar>

        <SwipableList
          editFunction={handleEditButton}
          journalArray={journalArray}
          arrayController={arrayController}
          setIsCalendarVisible={setIsCalendarVisible} // Pass the setter for calendar visibility
        />

        <FloatingButton
          btnCreate={handleFlotingPointButton}
          isVisible={isCalendarVisible}
        />
      </View>
    </View>
  );
};
