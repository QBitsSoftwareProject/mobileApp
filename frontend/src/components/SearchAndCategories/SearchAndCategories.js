import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./SearchAndCategoryStyles";

// navigation
import { useNavigation } from "@react-navigation/native";
// navigation

const SearchAndCategories = ({ currentView }) => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View>
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable
            onPress={() => navigateToScreen("HomeScreen")}
            style={styles.NavBarElements}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <View
              style={[
                styles.NavBarElements,
                currentView === "HomeScreen" &&
                  styles.NavBarElements_currentBtn,
              ]}
            >
              <Text
                style={[
                  styles.NavBarElements,
                  currentView === "HomeScreen" &&
                    styles.NavBarElements_currentText,
                ]}
              >
                All
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigateToScreen("ArticleStack")}
            style={styles.NavBarElements}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <View
              style={[
                styles.NavBarElements,
                currentView === "ArticleStack" &&
                  styles.NavBarElements_currentBtn,
              ]}
            >
              <Text
                style={[
                  styles.NavBarElements,
                  currentView === "ArticleStack" &&
                    styles.NavBarElements_currentText,
                ]}
              >
                Article
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigateToScreen("VideoScreen")}
            style={styles.NavBarElements}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <View
              style={[
                styles.NavBarElements,
                currentView === "VideoScreen" &&
                  styles.NavBarElements_currentBtn,
              ]}
            >
              <Text
                style={[
                  styles.NavBarElements,
                  currentView === "VideoScreen" &&
                    styles.NavBarElements_currentText,
                ]}
              >
                Video
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigateToScreen("AudioScreen")}
            style={styles.NavBarElements}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <View
              style={[
                styles.NavBarElements,
                currentView === "AudioScreen" &&
                  styles.NavBarElements_currentBtn,
              ]}
            >
              <Text
                style={[
                  styles.NavBarElements,
                  currentView === "AudioScreen" &&
                    styles.NavBarElements_currentText,
                ]}
              >
                Audio
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SearchAndCategories;
