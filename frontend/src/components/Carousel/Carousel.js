import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./CarouselStyles";

// enter data here
import carouselData from "./data";
// enter data here

import CarouselItem from "./CarouselItem";

const Carousel = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={carouselData}
        renderItem={({ item }) => <CarouselItem item={item} />}
      />
    </View>
  );
};

export default Carousel;
