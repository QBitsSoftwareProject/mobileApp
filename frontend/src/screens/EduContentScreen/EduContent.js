import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "../EduContentScreen/AllContent/style";
import { SafeAreaView } from "react-native-safe-area-context";

// sections
import AllContent from "../EduContentScreen/AllContent/AllContent";
import AudioContent from "../EduContentScreen/AudioContent/AudioContent";
import VideoContent from "../EduContentScreen/VideoContent/VideoContent";
import ArticleContent from "../EduContentScreen/ArticleContent/ArticleContent";
// sections

// components
import SearchAndCategories from "../../components/SearchAndCategories/SearchAndCategories";
// components

const EduContent = () => {
  const [currentView, setCurrentView] = useState("AllContent"); // Initial view

  const changeView = (viewName) => {
    setCurrentView(viewName);
  };

  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <ScrollView>
          <View style={{ zIndex: 100 }}>
            {/* categories */}
            <SearchAndCategories />
            {/* categories */}
          </View>
          {/* changing view */}
          <View style={styles.Content}>{renderContent(currentView)}</View>
          {/* changing view */}
        </ScrollView>
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
