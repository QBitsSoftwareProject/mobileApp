import { View} from "react-native";
import React from "react";
import styles from "./AudioStyles";

// components
import AudioItem from "./AudioItem";
import AudioData from "./AudioData";
// components

export default function Audios() {
  return (
    <View style={styles.container}>
      {AudioData.map((item,index) => (
        <AudioItem key={index} item={item} />
      ))}
    </View>
  );
}
