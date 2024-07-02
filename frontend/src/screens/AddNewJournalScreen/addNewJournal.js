import React, { useCallback, useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { EmojiPicker } from "./emoji";
import styles from "../AddNewJournalScreen/styles";
import { CustomButton } from "./switch";
import { JournalTittle } from "./journalTittle";
import { JournalEntry } from "./journalEntry";
import { Overlay } from "./AddNewPopup";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import { addNewJournal } from "../../services/journalService/journalService";
import Toast from "react-native-toast-message";

import { useRoute } from "@react-navigation/native";
import { updateTaskCompleteness } from "../../services/taskServices/taskservice";

//AddNewJournal function
export const AddNewJournal = ({ navigation }) => {
  const screenHeight = Dimensions.get("window").height;

  const route = useRoute();
  const [isOverlayVisible, setOverlayVisible] = useState(false); // Set state to visible popup
  const [selectedEmojiMarks, setSelectedEmojiMarks] = useState(""); // Set marks in selected emoji
  const [tittle, setTittle] = useState("");
  const [journalEntry, setJournalEntry] = useState("");
  const [emoji, setEmoji] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Popup visible function
  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  // Navigate to viewJournal
  const handleViewButton = () => {
    navigation.navigate("ViewJournal");
  };

  // Handle the emoji press
  const handleEmojiPress = ({ emoji, mark, category }) => {
    setSelectedEmojiMarks(
      (prevMarks) => `${prevMarks}${emoji}(${mark}) (${category})`
    );
    setEmoji(mark); // Fix to set the emoji state
  };

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

  useEffect(() => {
    if (date && time) {
      const createJournal = async () => {
        try {
          await addNewJournal(emoji, tittle, journalEntry, time, date);
          toggleOverlay();
        } catch (error) {
          console.log(error);
        }
      };
      createJournal();
    }
  }, [date, time, emoji, tittle, journalEntry]);

  // Handle create button
  const handleCreateButton = async () => {
    if (!emoji) {
      Toast.show({
        type: "error",
        text1: "Your current feeling mood is required",
      });
      return;
    }

    if (!journalEntry) {
      Toast.show({
        type: "error",
        text1: "Your journal entry is required",
      });
      return;
    }

    getDate();
    // await addNewJournal(emoji, tittle, journalEntry, time, date); //call the journal Service file for create a new journal

    // toggleOverlay();
    // } catch (error) {
    //   console.log(error);
    // }

    if (route.params.taskId) {
      taskUpdate();
    }
  };

  //task completenss update
  const taskUpdate = async () => {
    try {
      await updateTaskCompleteness(route.params.taskId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <HeaderSub
        headLine={"Add New Journal"}
        subHeadLine={"Welcome to our mindful haven"}
        back={"ViewJournal"}
      />

      <View style={{ height: screenHeight - 250 }}>
        <ScrollView style={{ paddingTop: 15 }}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.Text}>Select Your Mood</Text>

            <View
              style={{
                // backgroundColor: "yellow",
                width: "90%",
                marginBottom: 15,
              }}
            >
              <EmojiPicker
                onEmojiPress={handleEmojiPress}
                imoji={emoji} // Pass the current emoji state to the EmojiPicker
              />
            </View>

            <Text style={styles.Text1}>Journal Title</Text>

            <JournalTittle
              style={styles.tittlejournal}
              value={tittle}
              newText={setTittle}
            />

            <Text style={styles.Text2}>Write your journal</Text>

            <JournalEntry value={journalEntry} newText={setJournalEntry} />

            <View>
              <TouchableOpacity
                style={styles.create}
                onPress={handleCreateButton}
              >
                <Text style={styles.createText}>Create Journal</Text>
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
