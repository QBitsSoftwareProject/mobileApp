import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AnalysisSwitch } from "./analysSwitch";
import { JournalCalendar } from "./statisticCalender";

import TabBar from "../../components/TabBar/TabBar";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import { CustomAnalysisButton } from "./switchAnalysis";

import styles, { Styles } from "../JournalStatisticsScreen/statisticsStyles";

export const JournalStatistics = ({ navigation }) => {
  const stack = createStackNavigator();
  const [journalArray, setJournalArray] = useState([]);

  const handleJournalButton = () => {
    navigation.navigate("ViewJournal");
  };

  return (
    <View>
      <HeaderSub
        headLine={"My Journals"}
        subHeadLine={"View your past journals"}
        back={"ViewJournal"}
      />

      <ScrollView height={585}>
        <View style={styles.container}>
          <View>
            {/* <Image 
            style={styles.img}
            source ={require('../../assets/images/journal/healthJournal.png')}/> */}

            <CustomAnalysisButton btnAnalysis={handleJournalButton} />
            {/* <AnalysisSwitch btnAnalysis={handleJournalButton}></AnalysisSwitch> */}

            {/* <Text style={styles.tittle}>Journal Statistics</Text> */}

            <JournalCalendar></JournalCalendar>

            {/* <View style={styles.pns}>
        <View style={styles.align}>
            <Image source={require('../../assets/images/journal/positive.png')}></Image>
        </View>

        <View>
            <Text style={styles.pnsTitle}>Positive</Text>
        </View>

        </View>

    <View style={styles.pns1}>
        <View style={styles.align}>
            <Image source={require('../../assets/images/journal/negative.png')}></Image>
        </View>

        <View>
            <Text style={styles.pnsTitle}>Negative</Text>
        </View>

    </View> */}

            <View style={styles.row}>
              <View style={styles.pns}>
                <View style={styles.align}>
                  <Image
                    source={require("../../assets/images/journal/positive.png")}
                  />
                </View>
                <View>
                  <Text style={styles.pnsTitle}>Positive</Text>
                </View>
              </View>

              <View style={styles.pns}>
                <View style={styles.align}>
                  <Image
                    source={require("../../assets/images/journal/negative.png")}
                  />
                </View>
                <View>
                  <Text style={styles.pnsTitle}>Negative</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ top: 0, left: 0, right: 0 }}></View>
    </View>
  );
};
