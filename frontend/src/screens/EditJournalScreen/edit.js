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
} from "react-native";
import { EmojiPicker } from "../AddNewJournalScreen/emoji";
import styles from "../AddNewJournalScreen/styles";
import { CustomButton } from "../AddNewJournalScreen/switch";
import { JournalTittle } from "../AddNewJournalScreen/journalTittle";
import { JournalEntry } from "../AddNewJournalScreen/journalEntry";
import { createStackNavigator } from "@react-navigation/stack";
import { Overlay } from "../EditJournalScreen/editPopup";
import TabBar from "../../components/TabBar/TabBar";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import getJournal from "./fetchJournal";
import axios from "axios";
import {
  addNewJournal,
  updateJournal,
} from "../../services/journalService/journalService";

export const EditJournal = ({ navigation, route }) => {
  const stack = createStackNavigator();
  const { item, itemTittle, itemText, itemEmoji } = route.params;

  const [title, setTitle] = useState(itemTittle);
  const [entry, setEntry] = useState(itemText);
  const [selectemoji, setSelectEmoji] = useState(itemEmoji);

  const [selectedEmojiMarks, setSelectedEmojiMarks] = useState("");
  const [emoji, setEmoji] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  // Ensure itemID is defined
  useEffect(() => {
    if (!item) {
      console.error("Error: item is undefined");
    } else {
      // console.log("itemID:", item);
    }
  }, [item]);

  const handleEditButton = async () => {
    // update the journal
    if (!emoji) {
      alert("Emoji is required");
    }

    if (!entry) {
      alert("Journal is required");
    }

    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    setdate(formattedDate);
    settime(formattedTime);

    try {
      const journalID = item;
      const response = await updateJournal(
        journalID,
        emoji,
        title,
        entry,
        formattedTime,
        formattedDate
      );
      if (response) {
        // console.log("Data updated", response);
        toggleOverlay();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (date && time) {
      // Ensure date and time are set before calling addNewJournal
      const createJournal = async () => {
        try {
          await addNewJournal(emoji, title, entry, time, date);
          toggleOverlay();
        } catch (error) {
          console.log(error);
        }
      };
      createJournal();
    }
  }, [date, time]);

  const handleEmojiPress = ({ emoji, mark }) => {
    setSelectedEmojiMarks((prevMarks) => prevMarks + `${emoji}(${mark})`);
    setEmoji(mark);
  };

  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const handleViewButton = () => {
    navigation.navigate("ViewJournal");
  };

  return (
    <View>
      <HeaderSub
        headLine={"Edit Journal"}
        subHeadLine={"Edit your journals"}
        back={"ViewJournal"}
      />

      <CustomButton btnView={handleViewButton}></CustomButton>

      <ScrollView height={470}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.Text}>Feeling with...</Text>

          <EmojiPicker onEmojiPress={handleEmojiPress} imoji={selectemoji} />

          <Text style={styles.Text1}>Journal Tittle</Text>

          <JournalTittle value={title} newText={setTitle} />

          <Text style={styles.Text2}>Write your journal</Text>

          <JournalEntry value={entry} newText={setEntry} />

          <View>
            <TouchableOpacity style={styles.create} onPress={handleEditButton}>
              <Text style={styles.createText}>Edit Journal</Text>
            </TouchableOpacity>

            <Overlay
              isVisible={isOverlayVisible}
              onClose={toggleOverlay}
              propbtnfunction={handleViewButton}
            />
          </View>
        </SafeAreaView>
      </ScrollView>

      <View style={{ top: 0, left: 0, right: 0 }}>
        <TabBar />
      </View>
    </View>
  );
};
