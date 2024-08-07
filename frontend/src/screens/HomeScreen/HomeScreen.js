import React, { useEffect, useState, useContext } from "react";
import HomeTop from "../../components/HomeTop/HomeTop";
import {
  BackHandler,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import HomeCard from "../../components/HomeCard/HomeCard";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-swiper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getAUser, getUser } from "../../services/userServices/userService";
import { getADoctor } from "../../services/doctorServices/doctorService";
import loadingGif from "../../assets/animation/loading.gif";
import { BackgroundMusicContext } from "../../components/SettingScreen/BackgroundMusicProvider";
import { fetchHistoryDataByUserId } from "../../services/stressMarksServices/stressMarkServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

// const proPic = require('../../assets/images/doc.jpg')

const medImg = require("../../assets/images/HomeCards/meditation.png");
const mindImg = require("../../assets/images/HomeCards/mind.png");
const moodImg = require("../../assets/images/HomeCards/mood.png");
const storyImg = require("../../assets/images/HomeCards/story.png");
const goalsImg = require("../../assets/images/HomeCards/goal.png");
const docsImg = require("../../assets/images/HomeCards/docs.png");
const communityImg = require("../../assets/images/HomeCards/community.png");
const feedbackImg = require("../../assets/images/HomeCards/feedback.png");

const images = [
  {
    id: 1,
    image: require("../../assets/images/HomeCards/2.jpg"),
    headerText: "Videos",
    subText: "Immerse yourself in our diverse video collection",
  },
  {
    id: 2,
    image: require("../../assets/images/HomeCards/1.jpg"),
    headerText: "Articles",
    subText: "Explore insights, tips, and stories curated",
  },
  {
    id: 3,
    image: require("../../assets/images/HomeCards/3.jpg"),
    headerText: "Audios",
    subText: "Dive into our audio collection—your soothing companion",
  },
];

// const name = "Thishakya"

const HomeScreen = (props) => {
  const { setMusicStop } = useContext(BackgroundMusicContext);

  const navigation = useNavigation();

  const { role } = props.route.params;

  const [user, setUser] = useState(null);

  const winWidth = Dimensions.get("window").width - 60;

  useEffect(() => {
    // Set musicStop to true when the component mounts
    setMusicStop(true);
  }, []);

  useEffect(() => {
    fetchUser(role);

    //back navigation
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (navigation.isFocused()) {
          return true;
        }
      }
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  const handleStressLevelPress = async () => {
    try {
      const resolvedStressLevel = await fetchHistoryDataByUserId(); // Await the resolution of the Promise

      if (resolvedStressLevel && Object.keys(resolvedStressLevel).length > 0) {
        navigation.navigate("StressLevel", { screen: "DisplayResultScreen" });
      } else {
        navigation.navigate("StressLevel");
      }
    } catch (error) {
      console.error("Failed to resolve stressLevel:", error);
    }
  };

  //fetch user from database
  const fetchUser = async (checkRole) => {
    try {
      let currentUser;

      if (checkRole == "doctor") {
        currentUser = await getADoctor();
      } else {
        currentUser = await getAUser();
      }

      setUser(currentUser);
    } catch (error) {
      console.log(error.message);
    }
  };

  const screenNavigator = (index) => {
    console.log(index);
    if (index == 0) {
      navigation.navigate("EducationalStack", { screen: "VideoScreen" });
    } else if (index == 1) {
      navigation.navigate("EducationalStack", { screen: "ArticleStack" });
    } else if (index == 2) {
      navigation.navigate("EducationalStack", { screen: "AudioScreen" });
    }
  };

  if (!user) {
    // Render loading state or placeholder if user is not yet fetched

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
    <View style={{ marginBottom: 64 }}>
      <ScrollView>
        <HomeTop
          headLine={"Hi," + user.userName}
          subHeadLine={
            '"Your journey to wellness begins with a single step. Take it today."'
          }
          proPic={{ uri: user.proPic }}
        />

        <View style={[styles.Container, { width: winWidth }]}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.topicText}>Wellness Knowledge</Text>
              <TouchableOpacity
                style={styles.viewBtn}
                onPress={() => {
                  navigation.navigate("EducationalStack");
                }}
              >
                <Text style={styles.viewText}>View All</Text>
              </TouchableOpacity>
            </View>

            <Swiper style={styles.wrapper} showsButtons={false}>
              {images.map((image, index) => (
                <TouchableOpacity
                  style={styles.slide}
                  key={index}
                  onPress={() => {
                    screenNavigator(index);
                  }}
                >
                  <View style={styles.blackBox}></View>

                  <Image
                    source={image.image}
                    style={[styles.image, { width: winWidth }]}
                  />

                  <View
                    style={{
                      position: "absolute",
                      marginLeft: 15,
                      paddingBottom: 15,
                      zIndex: 2,
                    }}
                  >
                    <Text style={styles.sliderHeaderText}>
                      {image.headerText}
                    </Text>
                    <Text style={styles.sliderSubText}>{image.subText}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </Swiper>
          </View>

          {/* Healthful Balance section */}
          <View>
            <Text style={styles.topicText}>Healthful Balance</Text>
            <HomeCard
              image={medImg}
              cardName={"meditation"}
              headLine={"Mindful Meditation"}
              subHeadLine={"Take a mindful pause for peace and tranquility."}
            />
            <HomeCard
              image={mindImg}
              cardName={"stressManagement"}
              headLine={"Stress Management"}
              subHeadLine={
                "Discover personalized tools and expert guidance for effective stress management."
              }
            />
            <HomeCard
              image={moodImg}
              cardName={"mood"}
              headLine={"Mood Tracking"}
              subHeadLine={
                "Track your moods, find balance. Your emotional compass in one place."
              }
            />
            <HomeCard
              image={storyImg}
              cardName={"journal"}
              headLine={"Write Your Thoughts"}
              subHeadLine={"Take a mindful pause for peace and tranquility."}
            />
            <HomeCard
              image={goalsImg}
              cardName={"goals"}
              headLine={"Set your Goals"}
              subHeadLine={
                "Chart your path to well-being by setting personalized health goals."
              }
            />
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.topicText}>Stress Level</Text>

            <TouchableOpacity
              style={{ borderRadius: 20, overflow: "hidden", marginTop: 15 }}
              onPress={handleStressLevelPress}
            >
              <LinearGradient
                colors={["#00453E", "rgba(73,177,247,0.7)rgba(73,177,247,0.7)"]}
                style={styles.blueCard}
              >
                <Text style={styles.bluCardText1}>Stress Level Assesment</Text>
                <Text style={styles.bluCardText2}>
                  Assess stress levels, find peace. Your stress guide for a
                  balanced life.
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.topicText}>Connect with Community</Text>
            <HomeCard
              image={docsImg}
              cardName={"appointment"}
              headLine={"Connect with Experts"}
              subHeadLine={
                "Your Instant Link to Specialized Healthcare Experts."
              }
            />
            <HomeCard
              image={communityImg}
              cardName={"community"}
              headLine={"Social Community"}
              subHeadLine={
                "Empathetic space connecting, sharing mental health journey companions."
              }
              access={user.access}
            />
          </View>

          <View style={{ marginVertical: 32 }}>
            <Text style={styles.topicText}>Give your Ideas</Text>
            <HomeCard
              image={feedbackImg}
              cardName={"feedback"}
              headLine={"Feedback Form"}
              subHeadLine={
                "Share your thoughts with us. Your feedback shapes a better experience."
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
