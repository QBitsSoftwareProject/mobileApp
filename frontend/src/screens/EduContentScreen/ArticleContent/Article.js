import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./articleStyle";

import noPreviewAvailableImg from "../../../assets/images/no-image-avaliable.jpg";
import { useNavigation, useRoute } from "@react-navigation/native";
import { editFavoriteArticles, getAuthorInfo } from "../../../services/educationalServices/educationalServices";

// favorites
import favorite from "../../../assets/images/favorites/favorite.png";
import notFavorite from "../../../assets/images/favorites/notFavorite.png";
import Toast from "react-native-toast-message";
// favorites

const Article = ({ user, item, actionStateFunction, actState, section }) => {
  const navigation = useNavigation();

  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // favorite article
        if (user.favArticles && (user.favArticles).includes(item._id)) {
          setIsFavorite(true)
        } else {
          setIsFavorite(false)
        }
        // favorite article
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUserData();
  }, [actionState]);

  const [Isfavorite, setIsFavorite] = useState(false);
  const [actionState, setActionState] = useState(false);

  const editFavorites = async () => {
    try {
      await editFavoriteArticles(item._id);
      if (Isfavorite) {
        Toast.show({
          type: "success",
          text1: "Article removed from favorites",
        });
      } else {
        Toast.show({
          type: "success",
          text1: "Article added to favorites",
        });
      }
      actionStateFunction((prev) => !prev);
      setActionState(!actionState);
      if (section != "fav") {
        setIsFavorite((prev) => !prev); // Directly toggle the state
      }
    } catch (err) {
      console.log("failed to add to favorites,error:", err.response.data)
    }
  }

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
    };
    fetchArticleData();
  }, [item]);

  return (
    <View style={styles.article}>
      <View style={{ width: "100%", height: 50, position: "absolute", zIndex: 150, display: "flex", alignItems: "flex-end" }}>
        <TouchableOpacity
          onPress={() => {
            editFavorites();
          }}
          style={{
            height: 50,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <View style={styles.addToFavBtn}>
            {
              (Isfavorite) ? (<Image source={favorite} style={{ width: 21, height: 18 }} />) : (<Image source={notFavorite} style={{ width: 19, height: 17 }} />)
            }
          </View>
        </TouchableOpacity>
      </View>
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
            <Text style={{ color: "#596C79", fontSize: 12, marginTop: 5 }}>
              {author.name}
            </Text>
          </View>
          <View
            style={{ display: "flex", justifyContent: "center", width: "30%" }}
          >
            <TouchableOpacity onPress={navigateToScreen}>
              <View style={styles.readMoreBtn}>
                <Image
                  source={require("../../../assets/images/articleThumbnails/bi_eye-fill.png")}
                />
                <Text
                  style={{ fontSize: 10, color: "white", fontWeight: "500" }}
                >
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
