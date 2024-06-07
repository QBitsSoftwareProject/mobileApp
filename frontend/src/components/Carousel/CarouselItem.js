import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import styles from "./CarouselStyles";

 function CarouselItem({ item }) {
  const width = Dimensions.get("window").width;
  return (
    <View style={[styles.carouselContainer, { width }]}>
      <View style={styles.imgContainer}>
        <Image
          source={item.image}
          style={[styles.image, { width, resizeMode: "cover" }]}
        />
      </View>
      <View style={[{ flex: 4 }, styles.textContainer]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

export default CarouselItem;
