import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../EduContentScreen/AllContent/style";

// components
import SearchAndCategories from "../../components/SearchAndCategories/SearchAndCategories";
import {
  getFavoriteArticles,
  getFavoriteAudios,
  getFavoriteVideos,
} from "../../services/educationalServices/educationalServices";
import VideoItem from "./VideoContent/VideoItem/VideoItem";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import loadingGif from "../../assets/animation/loading.gif";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAUser } from "../../services/userServices/userService";
import Article from "./ArticleContent/Article";
import { useFocusEffect } from "@react-navigation/native";
import AudioItem from "../../components/AudioList/AudioItem";
// components

const EduContent = () => {
  const screenHeight = Dimensions.get("window").height;

  const [videos, setVideos] = useState([]);
  const [articles, setArticles] = useState([]);
  const [audios, setAudios] = useState([]);
  const [user, setUser] = useState({});
  const [userRole, setUserRole] = useState("");
  const [actionState, setActionState] = useState(false);
  const [error, setError] = useState(null);

  useFocusEffect(
    useCallback(() => {
      fetchUserDataAndFavorites();
    }, [actionState])
  );

  const fetchUserDataAndFavorites = async () => {
    try {
      const role = await AsyncStorage.getItem("role");
      setUserRole(role);

      if (role === "regularUser") {
        const userInfo = await getAUser();
        setUser(userInfo);
        const favVideoIds = userInfo.favVideos;
        const favArticleIds = userInfo.favArticles;
        const favAudioIds = userInfo.favAudios;

        if (favVideoIds.length > 0) {
          const favVideos = await getFavoriteVideos(favVideoIds);
          setVideos(favVideos.data);
        }

        if (favArticleIds.length > 0) {
          const favArticles = await getFavoriteArticles(favArticleIds);
          setArticles(favArticles.data);
        }

        if (favAudioIds.length > 0) {
          const favAudios = await getFavoriteAudios(favAudioIds);
          console.log("fav audios:", audios);
          setAudios(favAudios.data);
        }
      } else {
        throw new Error("Invalid role");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  if (!videos && !articles && !audios) {
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
    <View>
      <HeaderSub
        back={"HomeScreen"}
        headLine={"Educational content"}
        subHeadLine={"Enjoy featured resource to up your mood"}
      />
      <View
        style={[
          styles.Container,
          { height: screenHeight - 340, paddingBottom: 20 },
        ]}
      >
        <View>
          <SearchAndCategories currentView={"EducationalScreen"} />
        </View>
        <ScrollView>
          <Text style={styles.mainHeading2}>Here are your favorite videos</Text>

          {/* videos */}
          <View style={{ marginTop: 15 }}>
            {videos.length != 0 &&
              videos.map((item, index) => (
                <View key={index}>
                  <VideoItem
                    item={item}
                    screen={"allStack"}
                    user={user}
                    actionStateFunction={setActionState}
                    actState={actionState}
                    section={"fav"}
                  />
                </View>
              ))}
          </View>

          <Text style={styles.mainHeading2}>
            Here are your favorite articles
          </Text>

          {/* articles */}
          <View style={{ marginTop: 15 }}>
            {articles.length != 0 &&
              articles.map((item, index) => (
                <View key={index}>
                  <Article
                    item={item}
                    user={user}
                    actionStateFunction={setActionState}
                    actState={actionState}
                    section={"fav"}
                  />
                </View>
              ))}
          </View>

          <Text style={styles.mainHeading2}>Here are your favorite audios</Text>

          <View style={{ marginTop: 15 }}>
            {audios.length != 0 &&
              audios.map((item, index) => (
                <View key={index}>
                  {console.log("fav audios map :", index, item)}
                  <AudioItem
                    item={item}
                    user={user}
                    actionStateFunction={setActionState}
                    actState={actionState}
                    section={"fav"}
                  />
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default EduContent;
