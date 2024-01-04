import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";

// sections
import AllContent from "./AllContent";
import AudioContent from "./AudioContent";
import VideoContent from "./VideoContent";
import ArticleContent from "./ArticleContent";
// sections

// components
import SearchBarComponent from "../../components/SearchBar/SearchBar";
// components

const EduContent = () => {
  const [currentView, setCurrentView] = useState("AllContent"); // Initial view

  const changeView = (viewName) => {
    setCurrentView(viewName);
  };

  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <View>
          {/* categories */}
          <SearchBarComponent />
          <View style={styles.NavContainer}>
            <View style={styles.NavBar}>
              <Pressable
                onPress={() => changeView("AllContent")}
                style={styles.NavBarElements}
                android_ripple={{ borderless: true, radius: 50 }}
              >
                <Text style={styles.NavBarElements_current}>All</Text>
              </Pressable>
              <Pressable
                onPress={() => changeView("ArticleContent")}
                style={styles.NavBarElements}
                android_ripple={{ borderless: true, radius: 50 }}
              >
                <Text>Articles</Text>
              </Pressable>
              <Pressable
                onPress={() => changeView("VideoContent")}
                style={styles.NavBarElements}
                android_ripple={{ borderless: true, radius: 50 }}
              >
                <Text>Videos</Text>
              </Pressable>
              <Pressable
                onPress={() => changeView("AudioContent")}
                style={styles.NavBarElements}
                android_ripple={{ borderless: true, radius: 50 }}
              >
                <Text>Audios</Text>
              </Pressable>
            </View>
          </View>
          {/* categories */}
        </View>
        {/* changing view */}
        <View style={styles.Content}>{renderContent(currentView)}</View>
        {/* changing view */}
      </View>
    </SafeAreaView>
  );
};

const renderContent = (currentView) => {
  switch (currentView) {
    case "AllContent":
      return <AllContent />;
    case "ArticleContent":
      return <ArticleContent />;
    case "VideoContent":
      return <VideoContent />;
    case "AudioContent":
      return <AudioContent />;
    default:
      return null;
  }
};

export default EduContent;
