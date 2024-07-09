import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView
} from "react-native";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import ExpandableCard from "../../components/MindRelaxingMethod/ExpandCard";
import { CustomButton } from "../../components/MindRelaxingMethod/DoubleButton";
import { useNavigation } from "@react-navigation/native";
import {
  fetchMindRelaxingMethod,
  fetchMindRelaxingMethodSuggestion,
} from "../../services/mindRelaxingMethodService/mindRelaxingMethodService";
import loadingGif from "../../assets/animation/loading.gif";
import { fetchCurrentMoodInput } from "../../services/currentMoodInputServices/currentMoodInputServices";

const Mindrelaxinmethod = () => {
  const screenHeight = Dimensions.get("window").height;

  const [userID, setUserId] = useState("");
  const [Data, setData] = useState([]);

  useEffect(() => {
    setUserId("214012H");
  }, [userID]);

  const navigation = useNavigation();

  //still not merge to stress level assessment branch so assing a valu yo stress level

  const [moodArray, setMoodArray] = useState("");
  const [happy, setHappy] = useState();
  const [sad, setSad] = useState();
  const [neutral, setNeutral] = useState();
  const [worried, setWorried] = useState();
  const [currentMood, setCurrentMood] = useState("");

  const getdata = async () => {
    try {
      const data = await fetchCurrentMoodInput();
      setMoodArray(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, [moodArray]);

  useEffect(() => {
    if (moodArray) {
      setHappy(moodArray[0].happy);
      setSad(moodArray[0].sad);
      setNeutral(moodArray[0].neutral);
      setWorried(moodArray[0].worried);
    }
  }, [moodArray]);

  useEffect(() => {
    let mood;

    if (happy === 1) {
      mood = "happy";
    }
    if (sad === 1) {
      mood = "sad";
    }

    if (neutral === 1) {
      mood = "neutral";
    }
    if (worried === 1) {
      mood = "worried";
    }

    setCurrentMood(mood);
  }, [happy, sad, neutral, worried]);

  const [suggestionArray, setSuggestionArray] = useState("");
  const [pdf, setPdf] = useState("");
  const [video, setVideo] = useState("");
  const [audio, setAudio] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const getSuggestions = async () => {
    try {
      const response = await fetchMindRelaxingMethodSuggestion(currentMood);
      setSuggestionArray(response);
      setPdf(response.pdf);
      setVideo(response.video);
      setAudio(response.audio);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getSuggestions();
  }, [currentMood]);

  useEffect(() => {
    let combinedArray = pdf.concat( audio, video);
    setSuggestion(combinedArray);
  }, [pdf, video, audio]);
 
 
  if (!suggestion) {
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

  //filter method according to the stress level
  const filteredData = Data.filter((item) => item.mark === yourMark);

  const resultBtnFunction = () => {
    // navigation.navigate('DisplayResultScreen');
    navigation.navigate("StressLevel", { screen: "DisplayResultScreen" });
  };

  const handleTryLaterBtn = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    
    <View>
      <HeaderSub
        headLine={"Suggestions"}
        subHeadLine={"Explore personalized recommendations"}
        back="HomeScreen"
      />

      <ScrollView style={{ height: screenHeight - 350 }}>
        <Text
          style={{
            margin: 25,
            fontSize: 18,
            fontWeight: "400",
            color: "#101318",
          }}
        >
          Choose your preferences
        </Text>
        {suggestion.map((item, index) => (
          <ExpandableCard
            key={index}
            methodId={item._id}
            methodname={item.resouceName}
            contentText={item.discription}
            imgLink={item.imageURL}
            methodType={item.methodType}
            rUrl={item.resourceURL}
            currentRating={item.currentRating}
            ratedUsers={item.ratedUsers}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Mindrelaxinmethod;
