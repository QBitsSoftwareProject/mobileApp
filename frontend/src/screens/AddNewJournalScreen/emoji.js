import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import PropTypes from "prop-types";
import { useRoute } from "@react-navigation/native";

export const EmojiPicker = ({ onEmojiPress, value }) => {
  const route = useRoute();

  const itemEmojiNumber = route.params ? route.params.itemEmoji : "";
  // console.log("itememoji", itemEmojiNumber);

  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [previousMood, setPreviousMood] = useState(itemEmojiString);

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

  const itemEmojiString = markToEmoji(itemEmojiNumber);
  // console.log("prev", itemEmojiString);

  useEffect(() => {
    if (!selectedEmoji) {
      setSelectedEmoji(itemEmojiString);
    }
    setPreviousMood(selectedEmoji);
  }, [itemEmojiString, selectedEmoji]);

  const handleEmojiPress = (emoji, mark, category) => {
    setSelectedEmoji(emoji);
    const encodedEmoji = encodeURIComponent(emoji); // Encode emoji
    onEmojiPress({ emoji: encodedEmoji, mark, category }); // Pass encoded emoji to backend
  };

  const emojiData = [
    { emoji: "😊", mark: "10 ", category: "positive" },
    { emoji: "😭", mark: "20 ", category: "negative" },
    { emoji: "😡", mark: "30 ", category: "negative" },
    { emoji: "😍", mark: "40 ", category: "positive" },
    { emoji: "😨", mark: "50 ", category: "negative" },
    { emoji: "😐", mark: "60 ", category: "negative" },
    { emoji: "🥱", mark: "70 ", category: "negative" },
    { emoji: "😟", mark: "80 ", category: "negative" },
  ];

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollViewContent}
      showsHorizontalScrollIndicator={false}
    >
      {emojiData.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.emojiButton,
            selectedEmoji === item.emoji ? styles.selectedEmoji : null,
            previousMood === item.emoji && selectedEmoji !== item.emoji
              ? styles.previousMood
              : null,

            // selectedEmoji === item.imoji ? styles.selectedEmoji : null,
          ]}
          onPress={() => handleEmojiPress(item.emoji, item.mark, item.category)}
        >
          <Text style={styles.emoji}>{item.emoji}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

EmojiPicker.propTypes = {
  onEmojiPress: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  scrollViewContent: {
    flexDirection: "row",
    // backgroundColor: "yellow",
  },
  emojiButton: {
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 5,
  },
  selectedEmoji: {
    borderColor: "#5296C5",
  },
  previousMood: {
    borderColor: "#5296C5",
  },
  emoji: {
    fontSize: 30,
  },
});
