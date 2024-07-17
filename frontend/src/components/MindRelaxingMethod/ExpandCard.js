import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
  StyleSheet,
  ImageBackground,
  Modal,
} from "react-native";
import { Audio } from "expo-av";
import VideoPlayerModal from "./VideoPlayerModal";
import AudioPlayerModal from "./AudioPlayerModal";
import PDFViewerModal from "./PdfReaderModal";

// expand card component
const ExpandableCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const heightAnim = useRef(new Animated.Value(0)).current;
  const [imageHeight, setImageHeight] = useState(0);
  const [textHeight, setTextHeight] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [isRated, setIsRated] = useState(false);

  const toggleModal = () => {
    console.log(resource);
    setModalVisible(!modalVisible);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const imglink = props.imgLink;
  const methodtype = props.methodType;

  let mimg;
  let mtitle;
  let ibtn;
  let btnfunction; // Declare btnfunction here

  const [pdfModalVisible, setPdfModalVisible] = useState(false);
  // const videoSource = resource; // Replace with your video source
  let pdfSource;

  const togglePdfModal = () => {
    console.log("pdf resource is" + pdfSource);
    setPdfModalVisible(!pdfModalVisible);
  };

  const [videoModalVisible, setvideoModalVisible] = useState(false);
  // const videoSource = resource; // Replace with your video source
  let videoSource;

  const toggleVideoModal = () => {
    console.log("resource is" + videoSource);
    setvideoModalVisible(!videoModalVisible);
  };

  const [audioModalVisible, setaudioModalVisible] = useState(false);
  let audioSource; // Replace with your audio file source

  const toggleAudioModal = () => {
    setaudioModalVisible(!audioModalVisible);
  };

  let resource;

  let img;

  let name;

  let id;

  let currentRating;

  let ratedUsers;

  if (methodtype === "audio") {
    mimg = require("../../assets/images/MindRelaxingMethod/mp3.png");
    mtitle = "Listen to Music";
    ibtn = require("../../assets/images/MindRelaxingMethod/mp3playbutton.png");
    btnfunction = toggleAudioModal; // Assign playAudio to btnfunction
    audioSource = props.rUrl;
    img = props.imgLink;
    name = props.methodname;
    id = props.methodId;
    currentRating = props.currentRating;
    ratedUsers = props.ratedUsers;
  } else if (methodtype === "pdf") {
    mimg = require("../../assets/images/MindRelaxingMethod/story.png");
    mtitle = "Read a Story";
    ibtn = require("../../assets/images/MindRelaxingMethod/read.png");
    btnfunction = togglePdfModal;
    pdfSource = props.rUrl;
    name = props.methodname;
    id = props.methodId;
    currentRating = props.currentRating;
    ratedUsers = props.ratedUsers;
  } else {
    mimg = require("../../assets/images/MindRelaxingMethod/breathing.png");
    mtitle = "Watch a Video";
    ibtn = require("../../assets/images/MindRelaxingMethod/mp3playbutton.png");
    btnfunction = toggleVideoModal;
    videoSource = props.rUrl;
    name = props.methodname;
    id = props.methodId;
    currentRating = props.currentRating;
    ratedUsers = props.ratedUsers;
  }

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: isExpanded ? 0 : imageHeight + textHeight,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isExpanded, imageHeight, textHeight]);

  const onImageLayout = (event) => {
    setImageHeight(event.nativeEvent.layout.height);
  };

  const onTextLayout = (event) => {
    setTextHeight(event.nativeEvent.layout.height);
  };

  return (
    <View style={{ margin: 10 }}>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: isExpanded ? 20 : 20,
          borderBottomLeftRadius: isExpanded ? 20 : 0,
          borderBottomRightRadius: isExpanded ? 20 : 0,
          flexDirection: "row",
          height: 112,
          marginHorizontal: 10,
        }}
      >
        <View style={styles.expandImg}>
          <Image source={mimg} />
        </View>
        <View style={styles.expandTitle}>
          <View style={styles.title}>
            <Text style={styles.method}>{mtitle}</Text>
            <Text style={styles.methodName}>{props.methodname}</Text>
          </View>
          <View style={styles.expandIcon}>
            <TouchableOpacity onPress={toggleExpand}>
              <Image
                source={
                  isExpanded
                    ? require("../../assets/images/MindRelaxingMethod/expanddown.png")
                    : require("../../assets/images/MindRelaxingMethod/Expandup.png")
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Animated.View
          style={{
            overflow: "hidden",
            height: heightAnim,
            backgroundColor: "white",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            marginTop: -15,
            marginHorizontal: 10,
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                height: 160,
                paddingHorizontal: 10,
                marginTop: 10,
                marginBottom: 10,
              }}
              onLayout={onImageLayout}
            >
              <Image source={{ uri: imglink }} style={styles.contentImage} />

              <TouchableOpacity
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  marginLeft: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  borderRadius: 15,
                }}
                onPress={btnfunction}
              >
                <Image source={ibtn} />
              </TouchableOpacity>

              {/* <View style={{  borderRadius: 15, overflow: "hidden"}}>
                <ImageBackground
                  source={{ uri: imglink }}
                  style={styles.contentImage}
                >
                  <TouchableOpacity onPress={btnfunction}>
                    <Image source={ibtn} />
                  </TouchableOpacity>
                </ImageBackground>
              </View> */}
            </View>
            <View onLayout={onTextLayout}>
              <Text style={styles.contentText}>{props.contentText}</Text>
            </View>
          </View>
        </Animated.View>
      </View>

      <VideoPlayerModal
        visible={videoModalVisible}
        onClose={toggleVideoModal}
        videoSource={videoSource}
        name={name}
        id={id}
        currentRating={currentRating}
        ratedUsers={ratedUsers}
        isRated={isRated}
        setIsRated={setIsRated}
      />
      <AudioPlayerModal
        visible={audioModalVisible}
        onClose={toggleAudioModal}
        audioSource={audioSource}
        img={props.imgLink}
        name={name}
        id={id}
        currentRating={currentRating}
        ratedUsers={ratedUsers}
        isRated={isRated}
        setIsRated={setIsRated}
      />
      <PDFViewerModal
        visible={pdfModalVisible}
        onClose={togglePdfModal}
        pdfSource={pdfSource}
        name={name}
        id={id}
        currentRating={currentRating}
        ratedUsers={ratedUsers}
        isRated={isRated}
        setIsRated={setIsRated}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  expandImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  expandTitle: {
    flexDirection: "row",
    flex: 3,
  },

  title: {
    flex: 9,
    paddingTop: 8,
    paddingLeft: 10,
  },

  expandIcon: {
    flex: 1,
    paddingTop: 8,
  },

  method: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",
  },

  methodName: {
    fontSize: 12,
    fontWeight: "500",
    color: "#979DAC",
  },

  contentImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "stretch",
    borderRadius: 15,
  },

  contentText: {
    marginHorizontal: 10,
    marginBottom: 40,
    fontSize: 12,
    fontWeight: "500",
    color: "#979DAC",
  },
});

export default ExpandableCard;
