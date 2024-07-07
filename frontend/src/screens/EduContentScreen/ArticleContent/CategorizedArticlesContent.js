import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import styles from "./articleStyle.js";
import ProfilePic from "../ProfilePic/ProfilePic.js";

// data imports
import Authors from "./Authors.js";
import Article from "./Article.js";
// data imports

import HeaderSub from "../../../components/HeaderSub/HeaderSub.js";

// navigation
import { useRoute } from "@react-navigation/native";
import {
  getArticles,
  getArticlesBySearch,
  getCategorizedArticles,
  getCategorizedArticlesBySearch,
} from "../../../services/educationalServices/educationalServices.js";
import SearchBarComponent from "../../../components/SearchBar/SearchBar.js";
// navigation

const CategorizedArticlesContent = () => {
  const [keyword, setKeyWord] = useState("");

  const route = useRoute();
  const { category } = route.params;

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let articles;
        if (keyword.trim() == "") {
          articles =
            category == "All Articles"
              ? await getArticles()
              : await getCategorizedArticles(category);
        } else {
          articles =
            category == "All Articles"
              ? await getArticlesBySearch(keyword)
              : await getCategorizedArticlesBySearch(keyword, category);
        }
        setArticles(articles.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, [keyword]);

  return (
    <SafeAreaView>
      <FlatList
        data={[{ key: "unique-key" }]}
        renderItem={() => (
          <View>
            <View>
              <HeaderSub
                back={"ArticleScreen"}
                subHeadLine={"Your Choices"}
                headLine={
                  category == "All Articles" ? category : category + " articles"
                }
              />
            </View>
            {category == "All Articles" ? (
              <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                <SearchBarComponent keyword={setKeyWord} schema="edu" />
              </View>
            ) : null}
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

export default CategorizedArticlesContent;
