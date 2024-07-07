import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import styles from "./articleStyle";
import ProfilePic from "../ProfilePic/ProfilePic";
import loadingGif from "../../../assets/animation/loading.gif";

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
import {
  getArticleTags,
  getArticles,
  getAuthors,
} from "../../../services/educationalServices/educationalServices.js";
import HeaderSub from "../../../components/HeaderSub/HeaderSub.js";
import { getAUser } from "../../../services/userServices/userService.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
// navigation

const ArticleContent = () => {
  const [articles, setArticles] = useState();
  const [articleTagList, setArticleTagList] = useState();
  const [authorList, setAuthorList] = useState();

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


  const [user, setUser] = useState({});
  const [userRole, setUserRole] = useState("");
  const [actionState, setActionState] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      let userInfo;
      try {
        const role = await AsyncStorage.getItem("role");
        setUserRole(role);
        if (role === "regularUser") {
          userInfo = await getAUser();
          setUser(userInfo);
        } else {
          throw new Error("Invalid role");
        }

      } catch (err) {
        setError(err.message);
      }
    };
    fetchUserData();
  }, [actionState]);

  const [error, setError] = useState(null);

  if (!articles) {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image source={loadingGif} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <HeaderSub
        back={"HomeScreen"}
        headLine={"Educational content"}
        subHeadLine={"Enjoy featured resource to up your mood"}
      />
      <View style={{ zIndex: 100 }}>
        {/* categories */}
        <SearchAndCategories currentView={"ArticleStack"} />
      </View>
      <FlatList
        data={[{ key: "unique-key" }]}
        renderItem={() => (
          <View>
            {/* Your existing content */}
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
            <Text
              style={{ fontSize: 20, paddingHorizontal: 25, marginTop: 20 }}
            >
              Recent articles
            </Text>
            <View style={[styles.articleSection, { marginBottom: 350 }]}>
              <FlatList
                data={articles}
                renderItem={({ item }) => {
                  return <Article item={item} user={user}
                    actionStateFunction={setActionState}
                    actState={actionState} />;
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
