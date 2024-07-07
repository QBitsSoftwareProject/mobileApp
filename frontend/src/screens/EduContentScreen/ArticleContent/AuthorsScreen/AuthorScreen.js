import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../articleStyle";
import backImg from "../../../../assets/images/icons/Back-White.png";
import { useNavigation } from "@react-navigation/native";

import profilePic from "../../../../assets/images/profilePics/img4.png";
import profilePic2 from "../../../../assets/images/profilePics/img5.jpg";
import profilePic3 from "../../../../assets/images/profilePics/img3.png";
import viewIcon from "../../../../assets/images/icons/bi_eye-fill.png";

// components
import ArticleListItem from "../../../../components/AuthorScreen/ArticleListItem";
import {
  getAuthorArticleCount,
  getAuthorArticles,
  getAuthorInfo,
} from "../../../../services/educationalServices/educationalServices";
import Article from "../Article";
// components

const AuthorScreen = ({ route }) => {
  const authorData = route.params;
  const navigation = useNavigation();

  const [articleCount, setArticleCount] = useState();
  const [selectedAuthor, setSelectedAuthor] = useState([]);
  const [authorArticles, setAuthorArticles] = useState([]);

  useEffect(() => {
    const fetchAuthorArticleData = async () => {
      try {
        const articleCount = await getAuthorArticleCount(authorData.authorId);
        const authorInfo = await getAuthorInfo(authorData.authorId);
        const authorArticlesData = await getAuthorArticles(authorData.authorId);

        setArticleCount(articleCount.data);
        setSelectedAuthor(authorInfo.data);
        setAuthorArticles(authorArticlesData.data);
      } catch (err) {
        console.error("Error fetching author:", err);
      }
    };
    fetchAuthorArticleData();
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <FlatList
        data={[{ key: "unique-key" }]}
        renderItem={() => (
          <View
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <View style={styles.authorDetails}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Pressable onPress={goBack}>
                  <Image source={backImg} />
                </Pressable>
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    marginStart: "5%",
                    fontWeight: "600",
                  }}
                >
                  Author
                </Text>
              </View>
              <View>
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 17,
                      marginTop: 10,
                      width: 350,
                    }}
                  >
                    Author name: {selectedAuthor.name}
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                    }}
                  >
                    {articleCount == 0
                      ? "no articles"
                      : articleCount == 1
                      ? articleCount + " article"
                      : articleCount + " articles"}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                position: "absolute",
                marginTop: 180,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 1.0,
                shadowRadius: 2,
                borderRadius: 100,
                elevation: 2,
              }}
            >
              <Image
                source={{ uri: selectedAuthor.profileImg }}
                style={{
                  borderRadius: 100,
                  height: 104,
                  width: 104,
                }}
              />
            </View>
            {/* Article list */}
            <View style={styles.articleList}>
              <FlatList
                data={authorArticles}
                renderItem={({ item }) => {
                  return <Article item={item} />;
                }}
              />
            </View>
            {/* Article list */}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default AuthorScreen;
