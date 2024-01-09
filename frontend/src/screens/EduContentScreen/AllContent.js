import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

// components
import Carousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
// components

function AllContent() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.mainHeading}>Featured Resurces</Text>
        <View>
          <Carousel />
        </View>
        <Text style={styles.mainHeading2}>Read articles about</Text>
        <View>
          <Categories/>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AllContent;
