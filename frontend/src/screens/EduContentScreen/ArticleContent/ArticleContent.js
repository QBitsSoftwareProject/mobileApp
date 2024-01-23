import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./articleStyle";
import ProfilePic from "../ProfilePic/ProfilePic";

// data imports
import Authors from "./Authors.js";
import ArticleCategories from "./ArticleCategories.js";
import ArticleCategoryBtn from "./ArticleCategoryBtn.js";
// data imports

const scr_width = Dimensions.get("window").width;

const ArticleContent = () => {
  return (
    <ScrollView>
      <View style={styles.authorSections}>
        <View style={styles.authorSection1}>
          <Text style={{ fontSize: 20 }}>Read articles from</Text>
          <TouchableOpacity style={styles.exploreBtn}>
            <Text style={styles.exploreBtnText}>Explore Authors</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.authorSection2]}>
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
            return <ArticleCategoryBtn item={item}/>;
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ArticleContent;
