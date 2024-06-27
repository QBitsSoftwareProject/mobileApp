import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, Animated, Image, StyleSheet, ImageBackground, Modal } from 'react-native';
import { Audio } from 'expo-av';
import VideoPlayerModal from './VideoPlayerModal';
import AudioPlayerModal from './AudioPlayerModal';
import PDFViewerModal from './PdfReaderModal';



// expand card component
const ExpandableCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const heightAnim = useRef(new Animated.Value(0)).current;
  const [imageHeight, setImageHeight] = useState(0);
  const [textHeight, setTextHeight] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  
  

  const toggleModal = () => {
    console.log(resource)
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
    console.log("pdf resource is"+pdfSource)
    setPdfModalVisible(!pdfModalVisible);
  };

  const [videoModalVisible, setvideoModalVisible] = useState(false);
  // const videoSource = resource; // Replace with your video source
  let videoSource;

  const toggleVideoModal = () => {
    console.log("resource is"+videoSource)
    setvideoModalVisible(!videoModalVisible);
  };

  const [audioModalVisible, setaudioModalVisible] = useState(false);
  let audioSource ; // Replace with your audio file source

  const toggleAudioModal = () => {
    setaudioModalVisible(!audioModalVisible);
  };

  
  let resource;

  let img;

  let name;
  

  if (methodtype === 'audio') {
    mimg = require('../../assets/images/MindRelaxingMethod/mp3.png');
    mtitle = 'Listen to Music';
    ibtn = require('../../assets/images/MindRelaxingMethod/mp3playbutton.png');
    btnfunction = toggleAudioModal; // Assign playAudio to btnfunction
    audioSource = props.rUrl;
    img = props.imgLink;
    name = props.methodname;
  } else if (methodtype === 'pdf') {
    mimg = require('../../assets/images/MindRelaxingMethod/story.png');
    mtitle = 'Read a Story';
    ibtn = require('../../assets/images/MindRelaxingMethod/read.png');
    btnfunction = togglePdfModal;
    pdfSource = props.rUrl;
    name = props.methodname;
  } else {
    mimg = require('../../assets/images/MindRelaxingMethod/breathing.png');
    mtitle = 'Breathing Exercise';
    ibtn = require('../../assets/images/MindRelaxingMethod/mp3playbutton.png');
    btnfunction = toggleVideoModal;
    videoSource = props.rUrl;
    name = props.methodname;
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
      <View style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: isExpanded ? 20 : 20,
        borderBottomLeftRadius: isExpanded ? 20 : 0,
        borderBottomRightRadius: isExpanded ? 20 : 0,
        flexDirection: 'row',
        height: 112,
        marginHorizontal: 10
      }}>
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
                    ? require('../../assets/images/MindRelaxingMethod/expanddown.png')
                    : require('../../assets/images/MindRelaxingMethod/Expandup.png')
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Animated.View
          style={{
            overflow: 'hidden',
            height: heightAnim,
            backgroundColor: 'white',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            marginTop: -15,
            marginHorizontal: 10
          }}
        >
          <View style={{ flexDirection: 'column' }}>
            <View style={{ height: 160, paddingHorizontal: 80, marginTop: 10 }} onLayout={onImageLayout}>
              <View style={{ flex: 1, borderRadius: 15, overflow: 'hidden' }}>
                <ImageBackground
                  source={{ uri: imglink }}
                  style={styles.contentImage}
                >
                  <TouchableOpacity onPress={btnfunction}>
                    <Image source={ibtn} />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </View>
            <View onLayout={onTextLayout}>
              <Text style={styles.contentText}>
                {props.contentText} 
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>
      
      <VideoPlayerModal visible={videoModalVisible} onClose={toggleVideoModal} videoSource={videoSource} name = {name} />
      <AudioPlayerModal visible={audioModalVisible} onClose={toggleAudioModal} audioSource={audioSource} img ={props.imgLink} name = {name}/>
      <PDFViewerModal visible={pdfModalVisible} onClose={togglePdfModal} pdfSource={pdfSource} name = {name}/>
    </View>
  );
};

const styles = StyleSheet.create({
  expandImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  expandTitle: {
    flexDirection: 'row',
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
    color: '#101318',
    marginBottom: 5,
    fontWeight: 'bold',
  },

  methodName: {
    fontSize: 12,
    color: '#5C677D',
  },

  contentImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentText: {
    marginHorizontal: 10,
    marginVertical: 20,
    color: '#5C677D',
    fontSize: 12,
    lineHeight: 15,
  },
});

export default ExpandableCard;
