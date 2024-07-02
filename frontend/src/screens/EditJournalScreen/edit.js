import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
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
  const screenHeight = Dimensions.get("window").height;

  const { item, itemTittle, itemText, itemEmoji } = route.params;

  const [title, setTitle] = useState(itemTittle);
  const [entry, setEntry] = useState(itemText);
  const [newMood, setNewMood] = useState(itemEmoji);

  const [selectedEmojiMarks, setSelectedEmojiMarks] = useState("");
  const [emoji, setEmoji] = useState(itemEmojiString);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // console.log("pre", itemEmoji);
  // console.log("now", emoji);

  // Function to convert emoji to mark value
  const markToEmoji = (mark) => {
    switch (mark) {
      case 10:
        return "😊";
      case 20:
        return "😭";
      case 30:
        return "😡";
      case 40:
        return "😍";
      case 50:
        return "😨";
      case 60:
        return "😐";
      case 70:
        return "🥱";
      case 80:
        return "😟";
      default:
        return null;
    }
  };

  const itemEmojiString = markToEmoji(itemEmoji);
  // console.log("prev", itemEmojiString);

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
    if (!itemEmoji) {
      Toast.show({
        type: "error",
        text1: "Your current feeling mood is required",
      });
      return;
    }

    getDate();
    updateJournalEntry();

    if (!entry) {
      Toast.show({
        type: "error",
        text1: "Your current feeling journal entry is required",
      });
      return;
    }
  };

  const updateJournalEntry = async () => {
    try {
      await updateJournal(item._id, emoji, title, entry, time);
      toggleOverlay();
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
        back={"ViewJournal"}
      />

      <View style={{ height: screenHeight - 190 }}>
        <ScrollView>
          <SafeAreaView style={styles.container}>
            <Text style={styles.Text}>Feeling with</Text>

            <EmojiPicker onEmojiPress={handleEmojiPress} value={emoji} />

            <Text style={styles.editTittle}>Journal Title</Text>

            <JournalTittle value={title} newText={setTitle} />

            <Text style={styles.Text2}>Write your journal</Text>

            <JournalEntry value={entry} newText={setEntry} />

            <View>
              <TouchableOpacity
                style={styles.create}
                onPress={handleEditButton}
              >
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
    </View>
  );
};
