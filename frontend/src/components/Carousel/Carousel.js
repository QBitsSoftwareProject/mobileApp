import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./CarouselStyles";
import Swipper from "react-native-swiper";

// enter data here
import carouselData from "./CarouselData";
// enter data here

import CarouselItem from "./CarouselItem";

import { useNavigation } from "@react-navigation/native";

const Carousel = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screen) => {
    if (screen == "articles") {
      console.log("mekanam wada");
      navigation.navigate("ArticleStack");
    }
  };

  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <Swipper>
        {carouselData.map((item, index) => (
          <View key={index} style={styles.carouselContainer}>
            {/* Your existing content */}
            <View style={styles.imgContainer}>
              <Image source={item.image} style={[styles.image]} />
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginTop: -55,
                height: 90,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.title}>{item.title}</Text>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingHorizontal: 5,
                  }}
                ></View>
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        ))}
      </Swipper>
    </View>
  );
};

export default Carousel;
