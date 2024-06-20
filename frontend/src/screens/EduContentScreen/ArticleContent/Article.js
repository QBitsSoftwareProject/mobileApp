import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./articleStyle";

import noPreviewAvailableImg from "../../../assets/images/no-image-avaliable.jpg";
import { useNavigation } from "@react-navigation/native";
import { getAuthorInfo } from "../../../services/educationalServices/educationalServices";

const Article = ({ item }) => {

  const navigation = useNavigation();

  const navigateToScreen = () => {
    navigation.navigate("SelectedArticleScreen", { article: item });
  };

  const [isImagePresent, setIsImagePresent] = useState(false);
  const [imageParagraphId, setImageParagraphId] = useState(null);
  const [author, setAuthor] = useState([]);

  useEffect(() => {

    const fetchArticleData = async () => {
      try {
        const authorInfo = await getAuthorInfo(item.author);
        setAuthor(authorInfo.data);
      } catch (err) {
        console.error("Error fetching article and author details:", err);
      }
      // Reset state before checking paragraphs
      setIsImagePresent(false);
      setImageParagraphId(null);

      // Iterate over paragraphs to find the first image
      item.paragraphs.some((paragraph, index) => {
        if (paragraph.image) {
          setIsImagePresent(true);
          setImageParagraphId(index);
          return true; // Exit loop early
        }
        return false;
      });
      
    }
    fetchArticleData();
  }, [item]);

  return (
    <View style={styles.article}>
      <View>
        {isImagePresent ? (
          <Image
            source={{ uri: item.paragraphs[0].image.url }}
            style={{ width: "100%", height: "100%", borderRadius: 7 }}
          />
        ) : (
          <Image
            source={noPreviewAvailableImg}
            style={{ width: "100%", height: "100%", borderRadius: 7 }}
          />
        )}
      </View>
      <View style={[styles.articleDetails, { paddingHorizontal: 10 }]}>
        <View style={{ flex: 1, alignSelf: "stretch", alignItems: "center" }}>
          <Image
            source={item.author_profile}
            style={{
              margin: 10,
              width: 40,
              height: 40,
              borderRadius: 100,
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "500", textTransform: "uppercase" }}>
              {item.title}
            </Text>
            <Text style={{ color: "#596C79", fontSize: 12, marginTop: 5 }}>{author.name}</Text>
          </View>
          <View
            style={{ display: "flex", justifyContent: "center", width: "30%" }}
          >
            <TouchableOpacity onPress={navigateToScreen}>
              <View style={styles.readMoreBtn}>
                <Image
                  source={require("../../../assets/images/articleThumbnails/bi_eye-fill.png")}
                />
                <Text style={{ fontSize: 10, color: "white", fontWeight: "500" }}>
                  {" "}
                  READ MORE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Article;
