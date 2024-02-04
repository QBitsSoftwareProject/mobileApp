import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import styles from "../articleStyle";
import backImg from "../../../../assets/images/icons/Back-White.png";
import { useNavigation } from "@react-navigation/native";

// Import your profile pics here
import profilePic from "../../../../assets/images/profilePics/img4.png";
import profilePic2 from "../../../../assets/images/profilePics/img5.jpg";
import profilePic3 from "../../../../assets/images/profilePics/img3.png";
import viewIcon from "../../../../assets/images/icons/bi_eye-fill.png";

// components
import ArticleListItem from "../../../../components/AuthorScreen/ArticleListItem";
// components

// author details
import AuthorDetails from "../Authors";
// author details

const AuthorScreen = ({ route }) => {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    if (route.params && route.params.authorData) {
      setAuthorData(route.params.authorData);
    }
  }, [route.params]);

  // back navigation
  const navigation = useNavigation();
  // back navigation

  return (
    <SafeAreaView>
      <View
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        <View style={styles.authorDetails}>
          {authorData ? (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Pressable
                onPress={() => {
                  navigation.navigate("ArticleScreen");
                }}
              >
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
          ) : null}
          {authorData ? (
            <View>
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 23,
                    marginTop: 20,
                  }}
                >
                  {authorData.name}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                  }}
                >
                  {authorData.articles.length} Articles
                </Text>
              </View>
            </View>
          ) : null}
        </View>
        <View
          style={{
            position: "absolute",
            marginTop: 180,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}
        >
          {authorData ? (
            <Image
              source={authorData.image} // Use the correct property from your authorData object
              style={{
                borderRadius: 100,
                height: 104,
                width: 104,
              }}
            />
          ) : null}
        </View>
        {/* Article list */}
        <View style={styles.articleList}>
          <FlatList
            data={AuthorDetails}
            style={{ display: "flex", flexDirection: "column" }}
            renderItem={({ item }) => {
              return <ArticleListItem item={item} />;
            }}
          />
        </View>
        {/* Article list */}
      </View>
    </SafeAreaView>
  );
};

export default AuthorScreen;
