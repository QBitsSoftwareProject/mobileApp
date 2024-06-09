import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import AnswerBtns from "../../../../components/AnswerBtns/AnswerBtns";
import ProgressBar from "../../../../components/ProgressBar/ProgressBar";
import { updateAnswer } from "../../../../services/questionServices/questionServices";

const McqScreen = ({ navigation, route }) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [qNumber, setQNumber] = useState(1);
  const [answer, setAnswer] = useState("");
  const [qId, setQId] = useState(null);

  const { questions } = route.params;

  // Handler for selecting answer buttons
  const pressHandlerBtns = (item, btnId) => {
    setAnswer(item);
    setSelectedButtonIndex(btnId);
  };

  // Handler for moving to the next question
  const pressHandlerNext = async () => {
    try {
      if (qNumber < questions.length) {
        if (
          selectedButtonIndex !== null ||
          currentQuestion.questionType !== "mcq"
        ) {
          setQNumber((prevQNumber) => prevQNumber + 1);
          setSelectedButtonIndex(null);
        }
        await updateAnswer(qId, answer);
      } else {
        await updateAnswer(qId, answer);
        navigation.navigate("TaskListScreen"); // Navigating to the task list screen when all questions are answered
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handler for going back to the previous question or screen
  const backHandler = () => {
    if (qNumber > 1) {
      setQNumber((prevQNumber) => prevQNumber - 1);
      setSelectedButtonIndex(null);
    } else {
      navigation.navigate("WelcomeScreen"); // Navigating back to the welcome screen
    }
  };

  // Finding the current question based on the question number
  const currentQuestion = questions.find(
    (question) => question.number === qNumber
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F3F5" }}>
      <View style={{ marginLeft: 25, marginRight: 25 }}>
        <TouchableOpacity style={styles.backbtn} onPress={backHandler}>
          <Image source={require("../../../../assets/images/backBlack.png")} />
        </TouchableOpacity>

        <ProgressBar qNumber={qNumber} length={questions.length} />

        <FlatList
          data={questions.filter((question) => question.number === qNumber)}
          renderItem={({ item }) => (
            <Text style={styles.question}>{item.questionText}</Text>
          )}
          keyExtractor={(item) => {
            setQId(item._id);
            return item._id.toString();
          }}
        />

        {/* answers list--------------------------------------------------------------------------------------- */}
        <ScrollView>
          <View style={{ paddingBottom: 393 }}>
            <View style={{ marginTop: 32 }}>
              {currentQuestion &&
                currentQuestion.questionType === "mcq" &&
                currentQuestion.options.map((item, index) => (
                  <AnswerBtns
                    key={index}
                    button={item}
                    index={index}
                    active={selectedButtonIndex}
                    onPress={() => pressHandlerBtns(item, index)}
                  />
                ))}

              {currentQuestion && currentQuestion.questionType === "input" && (
                <TextInput
                  placeholder="Input your text here"
                  style={styles.inputBox}
                />
              )}
            </View>

            {/* next btn-------------------------------------------------------------------------------------------- */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 70,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={styles.nextBtn}
                onPress={pressHandlerNext}
              >
                <Text style={styles.nextBtnTxt}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default McqScreen;
