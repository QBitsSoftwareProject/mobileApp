// import React, { useState, useEffect } from "react";
// import {
//   View,
//   ScrollView,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
// } from "react-native";
// import PropTypes from "prop-types";
// import { useRoute } from "@react-navigation/native";

// export const EmojiPicker = ({ onEmojiPress, value }) => {
//   const route = useRoute();
//   const itemEmoji = route.params ? route.params.itemEmoji : "";

//   const [selectedEmoji, setSelectedEmoji] = useState(value || itemEmoji);
//   // const [inputMood, setInputMood] = useState(value || "");

//   useEffect(() => {
//     setSelectedEmoji(value || itemEmoji);
//   }, [value, itemEmoji]);

//   const handleEmojiPress = (emoji, mark, category) => {
//     setSelectedEmoji(emoji);
//     onEmojiPress({ emoji, mark, category });
//     console.log(selectedEmoji);
//   };

//   const emojiData = [
//     { emoji: "😊", mark: "10 ", category: "positive" },
//     { emoji: "😭", mark: "20 ", category: "negative" },
//     { emoji: "😡", mark: "30 ", category: "negative" },
//     { emoji: "😍", mark: "40 ", category: "positive" },
//     { emoji: "😨", mark: "50 ", category: "negative" },
//     { emoji: "😐", mark: "60 ", category: "negative" },
//     { emoji: "🥱", mark: "70 ", category: "negative" },
//     { emoji: "😟", mark: "80 ", category: "negative" },
//   ];

//   return (
//     <ScrollView
//       horizontal
//       contentContainerStyle={styles.scrollViewContent}
//       showsHorizontalScrollIndicator={false}
//     >
//       {emojiData.map((item, index) => (
//         <TouchableOpacity
//           key={index}
//           style={[
//             styles.emojiButton,
//             selectedEmoji === item.emoji ? styles.selectedEmoji : null,

//             // selectedEmoji === item.imoji ? styles.selectedEmoji : null,
//           ]}
//           onPress={() => handleEmojiPress(item.emoji, item.mark, item.category)}
//         >
//           <Text style={styles.emoji}>{item.emoji}</Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// EmojiPicker.propTypes = {
//   onEmojiPress: PropTypes.func,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   scrollViewContent: {
//     flexDirection: "row",
//   },
//   emojiButton: {
//     paddingLeft: 10,
//     paddingRight: 10,
//     borderWidth: 1,
//     borderColor: "transparent",
//     borderRadius: 5,
//   },
//   selectedEmoji: {
//     borderColor: "#5296C5",
//     borderWidth: 1,
//   },
//   emoji: {
//     fontSize: 40,
//   },
// });

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   ScrollView,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
// } from "react-native";
// import PropTypes from "prop-types";
// import { useRoute } from "@react-navigation/native";

// export const EmojiPicker = ({ onEmojiPress, value }) => {
//   const route = useRoute();
//   const itemEmoji = route.params ? route.params.itemEmoji : "";

//   const [selectedEmoji, setSelectedEmoji] = useState(value || itemEmoji);
//   // const [inputMood, setInputMood] = useState(value || "");

//   useEffect(() => {
//     setSelectedEmoji(value || itemEmoji);
//   }, [value, itemEmoji]);

//   const handleEmojiPress = (emoji, mark, category) => {
//     setSelectedEmoji(emoji);
//     onEmojiPress({ emoji, mark, category });
//     console.log(selectedEmoji);
//   };

//   const emojiData = [
//     { emoji: "😊", mark: "10 ", category: "positive" },
//     { emoji: "😭", mark: "20 ", category: "negative" },
//     { emoji: "😡", mark: "30 ", category: "negative" },
//     { emoji: "😍", mark: "40 ", category: "positive" },
//     { emoji: "😨", mark: "50 ", category: "negative" },
//     { emoji: "😐", mark: "60 ", category: "negative" },
//     { emoji: "🥱", mark: "70 ", category: "negative" },
//     { emoji: "😟", mark: "80 ", category: "negative" },
//   ];

//   return (
//     <ScrollView
//       horizontal
//       contentContainerStyle={styles.scrollViewContent}
//       showsHorizontalScrollIndicator={false}
//     >
//       {emojiData.map((item, index) => (
//         <TouchableOpacity
//           key={index}
//           style={[
//             styles.emojiButton,
//             selectedEmoji === item.emoji ? styles.selectedEmoji : null,

//             // selectedEmoji === item.imoji ? styles.selectedEmoji : null,
//           ]}
//           onPress={() => handleEmojiPress(item.emoji, item.mark, item.category)}
//         >
//           <Text style={styles.emoji}>{item.emoji}</Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// EmojiPicker.propTypes = {
//   onEmojiPress: PropTypes.func,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   scrollViewContent: {
//     flexDirection: "row",
//   },
//   emojiButton: {
//     paddingLeft: 10,
//     paddingRight: 10,
//     borderWidth: 1,
//     borderColor: "transparent",
//     borderRadius: 5,
//   },
//   selectedEmoji: {
//     borderColor: "#5296C5",
//     borderWidth: 1,
//   },
//   emoji: {
//     fontSize: 40,
//   },
// });

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
  const itemEmoji = route.params ? route.params.itemEmoji : "";

  const [selectedEmoji, setSelectedEmoji] = useState(value || itemEmoji);
  // const [inputMood, setInputMood] = useState(value || "");

  useEffect(() => {
    setSelectedEmoji(value || itemEmoji);
  }, [value, itemEmoji]);

  const handleEmojiPress = (emoji, mark, category) => {
    setSelectedEmoji(emoji);
    onEmojiPress({ emoji, mark, category });
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
    marginBottom: 15,
  },
  scrollViewContent: {
    flexDirection: "row",
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
    fontSize: 40,
  },
});
