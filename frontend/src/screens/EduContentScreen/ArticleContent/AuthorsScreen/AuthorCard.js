import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./AllAuthorScreenStyles";

import { useNavigation } from "@react-navigation/native";
import { getAuthorArticleCount } from "../../../../services/educationalServices/educationalServices";

const AuthorCard = ({ item }) => {
  const [articleCount, setArticleCount] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchAuthorArticleCount = async () => {
      try {
        const articleCount = await getAuthorArticleCount(item._id);
        setArticleCount(articleCount.data);
      } catch (err) {
        console.error("Error fetching author:", err);
      }
    }
    fetchAuthorArticleCount();
  }, []);

  return (
    <View style={styles.AuthorCard}>
      {/* image,name and article count */}
      <View style={styles.CardImageSection}>
        <Image
          source={{ uri: item.profileImg }}
          style={{ width: 50, height: 50, borderRadius: 100 }}
        />
        <View style={{ marginLeft: 15, width: 180 }}>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
          <Text style={{ fontSize: 16 }}>{(articleCount == 0) ? ("no articles") : ((articleCount == 1) ? (articleCount + " article") : (articleCount + " articles"))}</Text>
        </View>
        {/* view article button section */}
        <View
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {/* VIEW BTN */}
          <Pressable
            onPress={() => {
              navigation.navigate("AuthorScreen", { authorId: item._id });
            }}
            android_ripple={{ borderless: true, radius: 80, color: "#7CBDE8" }}
          >
            <View style={styles.ViewBtnBorder}>
              <View style={styles.ViewBtn}>
                <Text style={styles.ViewBtnText}>View articles</Text>
              </View>
            </View>
          </Pressable>
          {/* VIEW BTN */}
        </View>
        {/* view article button section */}
      </View>
      {/* image,name and article count */}

    </View>
  );
};

export default AuthorCard;
