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

  const itemEmojiString = route.params ? route.params.itemEmoji : "";
  console.log("itemEmojiString:", itemEmojiString); // Debug log

  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [previousMood, setPreviousMood] = useState(itemEmojiString);

  console.log("pre", itemEmojiString);
  console.log("new", selectedEmoji);

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
              ? styles.selectedEmoji
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
  emoji: {
    fontSize: 30,
  },
});
