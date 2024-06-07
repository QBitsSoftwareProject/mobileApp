import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import styles from "./articleStyle";
import ProfilePic from "../ProfilePic/ProfilePic";

// data imports
import Authors from "./Authors.js";
import ArticleCategories from "./ArticleCategories/ArticleCategories.js";
import ArticleCategoryBtn from "./ArticleCategories/ArticleCategoryBtn.js";
import Article from "./Article.js";
import ArticleData from "./ArticleData.js";
// data imports

// components
import SearchBarComponent from "../../../components/SearchBar/SearchBar.js";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories.js";
// components

// navigation
import { useNavigation } from "@react-navigation/native";
// navigation

const ArticleContent = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={[{ key: "unique-key" }]}
        renderItem={() => (
          <View>
            {/* Your existing content */}
            <View style={{ zIndex: 100, marginTop: 40 }}>
              {/* search and categories */}
              <SearchBarComponent />
              <SearchAndCategories currentView={"ArticleStack"} />
              {/* search and categories */}
            </View>
            <View style={styles.authorSections}>
              <View style={styles.authorSection1}>
                <Text style={{ fontSize: 20 }}>Read articles from</Text>
                <TouchableOpacity
                  style={styles.exploreBtn}
                  onPress={() => navigateToScreen("AllAuthorScreen")}
                >
                  <Text style={styles.exploreBtnText}>Explore Authors</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.authorSection2}>
                <FlatList
                  data={Authors}
                  style={{ display: "flex", flexDirection: "column" }}
                  horizontal
                  renderItem={({ item }) => {
                    return <ProfilePic item={item} />;
                  }}
                />
                <ProfilePic />
              </View>
            </View>
            <View style={styles.articleCategories}>
              <FlatList
                data={ArticleCategories}
                horizontal
                renderItem={({ item }) => {
                  return <ArticleCategoryBtn item={item} />;
                }}
              />
            </View>

            <Text style={{ fontSize: 20, padding: 10, marginTop: 20 }}>
              Some recent articles
            </Text>
            <View
              style={[
                styles.articleSection,
                { marginBottom: 100, marginTop: 10 },
              ]}
            >
              <FlatList
                data={ArticleData}
                renderItem={({ item }) => {
                  return <Article item={item} />;
                }}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ArticleContent;
