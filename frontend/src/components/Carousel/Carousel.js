import { View, Text, FlatList, Dimensions, Image } from "react-native";
import React from "react";
import styles from "./CarouselStyles";
import Swipper from "react-native-swiper";

// enter data here
import carouselData from "./CarouselData";
// enter data here

import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <Swipper>
        {carouselData.map((item, index) => (
          <View key={index}>
            {/* Your existing content */}
            <View style={styles.imgContainer}>
              <Image
                source={item.image}
                style={[styles.image, { width, resizeMode: "cover" }]}
              />
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginTop: -55,
                height: 100,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        ))}
      </Swipper>
    </View>
  );
};

export default Carousel;
