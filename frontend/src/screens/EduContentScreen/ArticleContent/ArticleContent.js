import React, { useEffect, useState } from "react";
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
import ArticleCategoryBtn from "./ArticleCategories/ArticleCategoryBtn.js";
import Article from "./Article.js";
// data imports

// components
import SearchBarComponent from "../../../components/SearchBar/SearchBar.js";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories.js";
// components

// navigation
import { useNavigation } from "@react-navigation/native";
import { getArticleTags, getArticles, getAuthors } from "../../../services/educationalServices/educationalServices.js";
// navigation

const ArticleContent = () => {

  const [articles, setArticles] = useState([]);
  const [articleTagList, setArticleTagList] = useState([]);
  const [authorList, setAuthorList] = useState([]);

  const navigation = useNavigation();

  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };

  useEffect(() => {
    const fetchArticleContentData = async () => {
      try {
        const articleList = await getArticles();
        const articleTags = await getArticleTags();
        const authors = await getAuthors();
        setArticles(articleList.data.slice(0, 5));
        setAuthorList(authors.data.slice(0, 4));
        setArticleTagList(["All Articles", ...articleTags.data.tags]);
      } catch (error) {
        console.error("Error fetching article content:", error);
      }
    };
    fetchArticleContentData();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={[{ key: "unique-key" }]}
        renderItem={() => (
          <View>
            {/* Your existing content */}
            <View style={{ zIndex: 100, marginTop: 40 }}>
              {/* categories */}
              <SearchAndCategories currentView={"ArticleStack"} />
              {/* categories */}
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
                  data={authorList}
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
                data={articleTagList}
                horizontal
                renderItem={({ item }) => {
                  return <ArticleCategoryBtn item={item} />;
                }}
              />
            </View>
            <Text style={{ fontSize: 20, padding: 10, marginTop: 20 }}>
              Some articles
            </Text>
            <View
              style={[
                styles.articleSection,
                { marginBottom: 100, marginTop: 10 },
              ]}
            >
              <FlatList
                data={articles}
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
