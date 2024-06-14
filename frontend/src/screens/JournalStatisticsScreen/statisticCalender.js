import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  ImageBackground,
} from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import { getJournalsByUserId } from "../../services/journalService/journalService";

export const JournalCalendar = () => {
  const [markedDates, setMarkedDates] = useState({});
  const [journalEntries, setJournalEntries] = useState([]);
  const [selectedDate, setSelectedDate] = useState();

  const emojiData = [
    { emoji: "10", category: "positive" },
    { emoji: "20", category: "negative" },
    { emoji: "30", category: "negative" },
    { emoji: "40", category: "positive" },
    { emoji: "50", category: "negative" },
    { emoji: "60", category: "negative" },
    { emoji: "70", category: "positive" },
    { emoji: "80", category: "negative" },
  ];

  //find the category acording to the emoji
  const getCategoryByEmoji = (emoji) => {
    if (emoji === null || emoji === undefined) {
      console.log("Emoji is null or undefined:", emoji);
      return "unknown";
    }
    const emojiEntry = emojiData.find(
      (entry) => entry.emoji === emoji.toString()
    );
    return emojiEntry ? emojiEntry.category : "unknown";
  };

  // call the function getJournalbyUserId and calculate the differece of categories.
  useEffect(() => {
    const getJournals = async () => {
      try {
        const journalArray = await getJournalsByUserId();

        const filteredData = journalArray.map((entry) => ({
          date: moment(entry.date, "DD-MMMM-YYYY").format("YYYY-MM-DD"),
          category: getCategoryByEmoji(entry.emoji),
        }));

        setJournalEntries(filteredData);

        const counts = {};
        filteredData.forEach((entry) => {
          if (!counts[entry.date]) {
            counts[entry.date] = { positive: 0, negative: 0 };
          }
          counts[entry.date][entry.category]++;
        });

        // Calculate the difference and assign new category
        const markedData = {};
        for (const date in counts) {
          const diff = counts[date].positive - counts[date].negative;
          const newCategory = diff >= 0 ? "positive" : "negative";
          markedData[date] = {
            customStyles: {
              container: {
                backgroundColor:
                  newCategory === "positive" ? "#5296C5" : "#4ABFB4",
                width: 30,
                height: 30,
                alignItems: "center",
              },
            },
          };
          // console.log(
          //   `Date: ${date}, Difference: ${diff}, Category: ${newCategory}`
          // );
        }

        setMarkedDates(markedData);
      } catch (error) {
        console.log(error);
      }
    };

    getJournals();
  }, []);

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    console.log("Selected Date:", date.dateString);
  };

  const renderCustomHeader = (date) => {
    const headerDate = new Date(date);
    const day = headerDate.getDate();
    const month = headerDate.toLocaleString("default", { month: "long" });
    const year = headerDate.getFullYear();
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{`${day} - ${month} - ${year}`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/journal/positive2.png")}
        style={styles.backgroundImage}
        opacity={0.1}
      >
        <Calendar
          style={styles.calendar}
          theme={{
            calendarBackground: "transparent",
            textDayFontSize: 10,
            textDayFontWeight: "500",
            textMonthFontSize: 10,
            textDayHeaderFontSize: 14,
            textDayHeaderFontWeight: "500",
            textSectionTitleColor: "#5C677D",
          }}
          onDayPress={handleDateSelect}
          markingType={"custom"}
          markedDates={markedDates}
          renderHeader={renderCustomHeader}
        />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  backgroundImage: {
    flex: 1,
  },
  calendar: {
    flex: 1,
    backgroundColor: "transparent",
  },
  headerText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default JournalCalendar;
