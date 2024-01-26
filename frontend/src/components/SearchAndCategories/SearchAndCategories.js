import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import styles from "./SearchAndCategoryStyles";

// components
import SearchBarComponent from "../../components/SearchBar/SearchBar";
// components

const SearchAndCategories = () => {
  return (
    <View>
      <SearchBarComponent />
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable
            onPress={() => changeView("AllContent")}
            style={styles.NavBarElements}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <View
              style={
                currentView == "AllContent"
                  ? styles.NavBarElements_currentBtn
                  : null
              }
            >
              <Text
                style={
                  currentView == "AllContent"
                    ? styles.NavBarElements_currentText
                    : null
                }
              >
                All
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => changeView("ArticleContent")}
            style={styles.NavBarElements}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <View
              style={
                currentView == "ArticleContent"
                  ? styles.NavBarElements_currentBtn
                  : null
              }
            >
              <Text
                style={
                  currentView == "ArticleContent"
                    ? styles.NavBarElements_currentText
                    : null
                }
              >
                Articles
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => changeView("VideoContent")}
            style={styles.NavBarElements}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <View
              style={
                currentView == "VideoContent"
                  ? styles.NavBarElements_currentBtn
                  : null
              }
            >
              <Text
                style={
                  currentView == "VideoContent"
                    ? styles.NavBarElements_currentText
                    : null
                }
              >
                Videos
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => changeView("AudioContent")}
            style={styles.NavBarElements}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <View
              style={
                currentView == "AudioContent"
                  ? styles.NavBarElements_currentBtn
                  : null
              }
            >
              <Text
                style={
                  currentView == "AudioContent"
                    ? styles.NavBarElements_currentText
                    : null
                }
              >
                Audios
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SearchAndCategories;
