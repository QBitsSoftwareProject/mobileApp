import React, { useState , useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./viewStyles";
import { CustomButtonView } from "./viewSwitch";
import { Calendar } from "./calender";
import { SwipableList } from "./viewInputJournal";
import { FloatingButton } from "./floatingButton";
import TabBar from "../../components/TabBar/TabBar";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import { createStackNavigator } from "@react-navigation/stack";
import moment from "moment";

export const ViewJournal = ({ navigation }) => {
  const stack = createStackNavigator();
  const [before, setBefore] = useState("");
  const [arrayController, setArrayController] = useState(0);
  const [journalArray, setJournalArray] = useState([]);

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
        {/* <SafeAreaView style={styles.container}> */}

        <CustomButtonView btnAnalysis={handleButton}></CustomButtonView>

        {/* <View> */}
        <Calendar
          setJournalArray={setJournalArray}
          setArrayController={setArrayController}
        ></Calendar>
        <SwipableList
          editFunction={handleEditButton}
          journalArray={journalArray}
          arrayController={arrayController}
          style={{ marginTop: 24.5, backgroundColor: "yellow" }}
        />
        {/* </View> */}

        {/* </SafeAreaView>     */}

        <FloatingButton btnCreate={handleFlotingPointButton}></FloatingButton>
      </View>
    </View>
  );
};
