import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../EduContentScreen/AllContent/style";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import SearchAndCategories from "../../components/SearchAndCategories/SearchAndCategories";
import Audios from "../../components/AudioList/Audios";
import { getFavoriteArticles, getFavoriteVideos } from "../../services/educationalServices/educationalServices";
import VideoItem from "./VideoContent/VideoItem/VideoItem";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import loadingGif from "../../assets/animation/loading.gif";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAUser } from "../../services/userServices/userService";
import Article from "./ArticleContent/Article";
// components

const EduContent = () => {
  const screenHeight = Dimensions.get("window").height;

  const [videos, setVideos] = useState();
  const [articles, setArticles] = useState();

  const [user, setUser] = useState({});
  const [userRole, setUserRole] = useState("");
  const [actionState, setActionState] = useState(false);

  const [favVideoIds, setFavVideoIds] = useState([]);
  const [favArticleIds, setFavArticleIds] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      let userInfo;
      try {
        const role = await AsyncStorage.getItem("role");
        setUserRole(role);
        if (role === "regularUser") {
          userInfo = await getAUser();
          setUser(userInfo);
          setFavVideoIds(user.favVideos);
          setFavArticleIds(user.favArticles);
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

  //fetch favorites
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        let favVideos;
        let favArticles;
        favVideos = await getFavoriteVideos(favVideoIds);
        favArticles = await getFavoriteArticles(favArticleIds);
        if (favVideos) {
          setVideos(favVideos.data);
        } else {
          setVideos([]);
        }
        if (favArticles) {
          setArticles(favArticles.data);
        } else {
          setArticles([]);
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    fetchFavorites();
  }, []);
  // fetch favorites


  if (!videos) {
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
      <View style={[styles.Container, { height: screenHeight - 190 }]}>
        <View>
          <SearchAndCategories currentView={"EducationalScreen"} />
        </View>

        <ScrollView>
          <View style={{ paddingHorizontal: 25, marginTop: 15 }}>

            {/* articles */}
            {/* <Text style={styles.mainHeading2}>Here are your favorite articles</Text>
            <View style={{ marginTop: 20 }}>
              {articles && articles.map((item, index) => (
                <View key={index}>
                  <Article item={item} user={user}
                    actionStateFunction={setActionState}
                    actState={actionState} />
                </View>
              ))}
            </View> */}

            {/* videos */}
            <Text style={styles.mainHeading2}>Here are your favorite videos</Text>
            <View style={{ marginTop: 20 }}>
              {videos && videos.map((item, index) => (
                <View key={index}>
                  <VideoItem item={item} screen={"allStack"} user={user}
                    actionStateFunction={setActionState}
                    actState={actionState} />
                </View>
              ))}
            </View>

            {/* audios */}
            {/* <Text style={[styles.mainHeading2]}>Here are your favorite audios</Text>
            <Audios /> */}

          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EduContent;
