import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SplitButton } from "./ProgressBar";
import styles from "./feedbackStyles";
import { QuestionButton } from "./Switch";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import axiosInstance from "../../api/axios";
import { addFeedback } from "../../services/feedbackServices/feedbackServices";
import Toast from "react-native-toast-message";

const Feedback = () => {
  const [satisfaction, setSatisfaction] = useState("");
  const [finterfaceValue, setFinterfaceValue] = useState("");
  const [design, setDesign] = useState("");
  const [speed, setSpeed] = useState("");
  const [consumption, setConsumption] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [comments, setComments] = useState("");
  const [questionSix, setQuestionSix] = useState("");
  const [qOne, setQone] = useState(0);
  const [qTwo, setQtwo] = useState(0);
  const [qThree, setQthree] = useState(0);
  const [qFour, setQfour] = useState(0);
  const [qFive, setQfive] = useState(0);
  const [rateValue, setRateValue] = useState(0);
  const [userRate, setUserRate] = useState("");
  const [fDate, setDate] = useState("");
  const [fTime, setTime] = useState("");
  const [data, setData] = useState([]);
  const [submitTriggered, setSubmitTriggered] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (qOne !== null) {
      const value =
        qOne === 0
          ? "User interface is intuitive and easy to navigate"
          : "User interface is not intuitive and easy to navigate";
      setFinterfaceValue(value);
    }
  }, [qOne]);

  useEffect(() => {
    if (qTwo !== null) {
      const value =
        qTwo === 0
          ? "There are privacy settings or permissions that seem excessive or insufficient"
          : "There are not privacy settings or permissions that seem excessive or insufficient";
      setPrivacy(value);
    }
  }, [qTwo]);

  useEffect(() => {
    if (qThree !== null) {
      const value =
        qThree === 1
          ? "App is slow to load or respond"
          : "App is not slow to load or respond";
      setSpeed(value);
    }
  }, [qThree]);

  useEffect(() => {
    if (qFour !== null) {
      const value =
        qFour === 1
          ? "This app consumes excessive battery or data"
          : "This app does not consume excessive battery or data";
      setConsumption(value);
    }
  }, [qFour]);

  useEffect(() => {
    if (qFive !== null) {
      const value =
        qFive === 1
          ? "There are elements of the design that are confusing or difficult to use"
          : "There are not elements of the design that are confusing or difficult to use";
      setDesign(value);
    }
  }, [qFive]);

  useEffect(() => {
    if (rateValue === 0) {
      const satisfactionRate = `User satisfaction rate is: Not rated`;
      setUserRate(satisfactionRate);
    } else {
      const satisfactionRate = `User satisfaction rate is: ${rateValue}`;
      setUserRate(satisfactionRate);
    }
  }, [rateValue]);

  useEffect(() => {
    if (submitTriggered) {
      storeData();
    }
  }, [submitTriggered]);

  const handleSubmit = async () => {
    if (submitTriggered) return; // Prevent multiple submissions
    getDeviceTimeAndDate();
  };

  const getDeviceTimeAndDate = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    setDate(date);
    setTime(time);
    setSubmitTriggered(true);
  };

  const resetForm = () => {
    setSatisfaction("");
    setFinterfaceValue("");
    setDesign("");
    setSpeed("");
    setConsumption("");
    setPrivacy("");
    setComments("");
    setQuestionSix("");
    setQone(0);
    setQtwo(0);
    setQthree(0);
    setQfour(0);
    setQfive(0);
    setRateValue(0);
    setUserRate("");
    setDate("");
    setTime("");
    setSubmitTriggered(false);
    setResetKey((prevKey) => prevKey + 1); // Force re-render
  };

  const storeData = async () => {
    try {
      await addFeedback(
        userRate,
        finterfaceValue,
        privacy,
        speed,
        consumption,
        design,
        questionSix,
        fDate,
        fTime
      );

      console.log("Data saved successfully");
      Toast.show({
        type: "success",
        text1: "Thank you for your Feedback!!",
      });
      resetForm();
    } catch (error) {
      console.log("Error saving data:", error);
      setSubmitTriggered(false); // Reset submitTriggered on error
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const getResponse = await axiosInstance.get(
  //         "/Feedback/getAll-feedback"
  //       );
  //       setData(getResponse.data);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <View contentContainerStyle={styles.container}>
      <HeaderSub
        headLine={"Feedback"}
        subHeadLine={"Feel free to drop us your feedback."}
        back="HomeScreen"
      />
      <ScrollView height={500}>
        <Text style={styles.question1}>
          How satisfied are you overall with the support of our mental health
          application?
        </Text>

        <SplitButton
          rateFunction={setRateValue}
          submitTriggered={submitTriggered}
        />

        <QuestionButton
          qtext="1. Is the user interface intuitive and easy to navigate?"
          btnFunction={setQone}
          key={`${resetKey}-q1`}
        />
        <QuestionButton
          qtext="2. Are there any privacy settings or permissions that seem excessive or insufficient?"
          btnFunction={setQtwo}
          key={`${resetKey}-q2`}
        />
        <QuestionButton
          qtext="3. Is the app slow to load or respond?"
          btnFunction={setQthree}
          key={`${resetKey}-q3`}
        />
        <QuestionButton
          qtext="4. Does it consume excessive battery or data?"
          btnFunction={setQfour}
          key={`${resetKey}-q4`}
        />
        <QuestionButton
          qtext="5. Are there any elements of the design that are confusing or difficult to use?"
          btnFunction={setQfive}
          key={`${resetKey}-q5`}
        />

        <TextInput
          style={styles.textarea}
          multiline={true}
          numberOfLines={4}
          value={questionSix}
          onChangeText={(text) => setQuestionSix(text)}
          placeholder="Please tell us your reasons for giving this score here..."
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Send Feedback</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Feedback;