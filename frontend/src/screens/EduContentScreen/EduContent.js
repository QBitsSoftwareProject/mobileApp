import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "../EduContentScreen/AllContent/style";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import SearchBarComponent from "../../components/SearchBar/SearchBar";
import SearchAndCategories from "../../components/SearchAndCategories/SearchAndCategories";
import Carousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
import Audios from "../../components/AudioList/Audios";
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
            {/* search and categories */}
            <SearchBarComponent />
            <SearchAndCategories
              changeView={changeView}
              currentView={currentView}
            />
            {/* search and categories */}
          </View>
          {/* changing view */}
          <SafeAreaView>
            <Text style={styles.mainHeading}>Featured Resurces</Text>
            <View>
              <Carousel />
            </View>
            <Text style={styles.mainHeading2}>Read articles about</Text>
            <View>
              <Categories />
            </View>
            <Text style={[styles.mainHeading2, { marginTop: 40 }]}>
              Follow Along
            </Text>
            <View>
              <Audios />
            </View>
          </SafeAreaView>
          {/* changing view */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EduContent;
