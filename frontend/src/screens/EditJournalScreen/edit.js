import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { EmojiPicker } from "../AddNewJournalScreen/emoji";
import styles from "../AddNewJournalScreen/styles";
import { CustomButton } from "../AddNewJournalScreen/switch";
import { JournalTittle } from "../AddNewJournalScreen/journalTittle";
import { JournalEntry } from "../AddNewJournalScreen/journalEntry";
import { Overlay } from "../EditJournalScreen/editPopup";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import Toast from "react-native-toast-message";
import { updateJournal } from "../../services/journalService/journalService";

export const EditJournal = ({ navigation, route }) => {
  const { item, itemTittle, itemText, itemEmoji } = route.params;

  const [title, setTitle] = useState(itemTittle);
  const [entry, setEntry] = useState(itemText);
  const [newMood, setNewMood] = useState(itemEmoji);

  const [selectedEmojiMarks, setSelectedEmojiMarks] = useState("");
  const [emoji, setEmoji] = useState(String(itemEmoji));
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Ensure itemID is defined
  useEffect(() => {
    if (!item) {
      console.error("Error: item is undefined");
    }
  }, [item]);

  const getDate = useCallback(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString("default", { month: "long" });
    const day = currentDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${day}, ${month}, ${year}`;
    const formattedTime = currentDate.toLocaleTimeString();

    setDate(formattedDate);
    setTime(formattedTime);
  }, []);

  const handleEditButton = async () => {
    if (!emoji) {
      Toast.show({
        type: "error",
        text1: "Your current feeling mood is required",
      });
      return;
    }

    getDate();

    if (!entry) {
      Toast.show({
        type: "error",
        text1: "Your current feeling journal entry is required",
      });
      return;
    }
  };

  useEffect(() => {
    if (date && time) {
      const journalID = item;
      const updateJournalEntry = async () => {
        try {
          await updateJournal(journalID, emoji, title, entry, time, date);
          toggleOverlay();
        } catch (error) {
          console.error("Error:", error);
        }
      };
      updateJournalEntry();
    }
  }, [date, time]);

  const handleEmojiPress = ({ emoji, mark }) => {
    setSelectedEmojiMarks((prevMarks) => `${prevMarks}${emoji}(${mark})`);
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
        back={"HomeScreen"}
      />

      <CustomButton btnView={handleViewButton} />

      <ScrollView height={470}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.Text}>Feeling with...</Text>

          <EmojiPicker onEmojiPress={handleEmojiPress} value={emoji} />

          <Text style={styles.Text1}>Journal Title</Text>

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
    </View>
  );
};
