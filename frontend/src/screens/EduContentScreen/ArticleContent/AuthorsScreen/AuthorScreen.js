import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import styles from "../articleStyle";
import backImg from "../../../../assets/images/icons/Back-White.png";
import { useNavigation } from "@react-navigation/native";

import profilePic from "../../../../assets/images/profilePics/img4.png";
import profilePic2 from "../../../../assets/images/profilePics/img5.jpg";
import profilePic3 from "../../../../assets/images/profilePics/img3.png";
import viewIcon from "../../../../assets/images/icons/bi_eye-fill.png";

// components
import ArticleListItem from "../../../../components/AuthorScreen/ArticleListItem";
// components

const AuthorScreen = ({ route, key }) => {
  const authorData = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
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
            <View>
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 23,
                    marginTop: 20,
                  }}
                >
                  Author ID: 000{authorData.authorId}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                  }}
                >
                  24 Articles
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
              source={profilePic2}
              style={{
                borderRadius: 100,
                height: 104,
                width: 104,
              }}
            />
          </View>
          {/* Article list */}
          <View style={styles.articleList}>
            <ArticleListItem />
            <ArticleListItem />
            <ArticleListItem />
            <ArticleListItem />
            <ArticleListItem />
            <ArticleListItem />
          </View>
          {/* Article list */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthorScreen;
