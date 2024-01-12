import { View,FlatList } from "react-native";
import React from "react";
import styles from "./AudioStyles";

// components
import AudioItem from "./AudioItem";
import AudioData from "./AudioData";
// components

export default function Audios() {
  return (
    <View style={styles.container}>
      <FlatList
        data={AudioData}
        renderItem={({ item }) => <AudioItem item={item} />}
        horizontal={false}
      />
    </View>
  );
}
