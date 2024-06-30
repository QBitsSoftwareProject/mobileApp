import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

// components
import Carousel from "../../../components/Carousel/Carousel";
import Categories from "../../../components/Categories/Categories";
import Audios from "../../../components/AudioList/Audios";
// components

function AllContent() {
  return (
    <SafeAreaView style={{ marginHorizontal: 25 }}>
      <Text style={styles.mainHeading}>Featured Resurces</Text>
      <View>
        <Carousel />
      </View>
      <Text style={styles.mainHeading2}>Watch Videos about</Text>
      <View>
        <Categories />
      </View>
      <Text style={[styles.mainHeading2, { marginTop: 40 }]}>
        Listen to Calm yourself
      </Text>
      <View>
        <Audios />
      </View>
    </SafeAreaView>
  );
}

export default AllContent;
