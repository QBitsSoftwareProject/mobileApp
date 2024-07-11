// welcomescreen.js
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { getTime } from "./GetTime";
import { useNavigation } from "@react-navigation/native";
import { getSuggestedMotivation } from "../../../services/motivationServices/motivation";
import { getAUser } from "../../../services/userServices/userService";
import { getDailyQuestion } from "../../../services/questionServices/questionServices";
import loadingGif from "../../../assets/animation/loading.gif";

const WelcomeScreen = ({ route }) => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [questionData, setQuestionData] = useState(null);

  const screenHeight = Dimensions.get("window").height;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const motivation = await getSuggestedMotivation();
      const question = await getDailyQuestion();

      setData(motivation);
      setQuestionData(question);
    } catch (error) {
      console.log(error);
    }
  };

  if (!data || !questionData) {
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

  const presshandler = () => {
    // Navigate to McqScreen if a question is not answered, otherwise navigate to TaskListScreen
    if (questionData.isAnswered) {
      navigation.navigate("TaskListScreen");
    } else
      navigation.navigate("McqScreen", { questions: questionData.questions });
  };

  return (
    <LinearGradient colors={["#4A90BF", "#00453E"]} style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/squreBg.png")}
        style={styles.background}
      >
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.backbtn}
            onPress={() => {
              navigation.navigate("TaskTypeScreen");
            }}
          >
            <Image source={require("../../../assets/images/BackWhite.png")} />
          </TouchableOpacity>

          <View style={{ height: screenHeight - 110 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <Text style={styles.headertxt}>Welcome</Text>

              <Text style={styles.daytxt}>Day {data.motivation.day}</Text>

              <Text style={styles.greetingtxt}>
                Good {getTime()} {data.userName}!{" "}
              </Text>
              <Text style={styles.descriptiontxt}>
                {data.motivation.description}
              </Text>

              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity style={styles.button} onPress={presshandler}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={styles.buttontxt}>Next</Text>
                  </View>
                  <Image
                    source={require("../../../assets/images/right-arrow.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default WelcomeScreen;
