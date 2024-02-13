import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, ScrollView,Image,  } from 'react-native';
import HeaderSub from '../../screens/MoodAnalysisScreen/Header';
import { useNavigation } from '@react-navigation/native';


const MoodAnalysis = () => {

  const navigation = useNavigation();
  const [moodIndex, setMoodIndex] = useState('');

  const emojis = [
    {  emoji: '😄' , moodText:'Happy', imageSource:require('../../assets/images/analysisMood/happyPicture.png') },
    {  emoji: '😍' , moodText:'Lovely', imageSource:require('../../assets/images/analysisMood/lovelyPicture.png')},
    {  emoji: '😢' , moodText:'Sad' , imageSource:require('../../assets/images/analysisMood/sadPicture.png') },
    {  emoji: '😡' , moodText:'Angry', imageSource:require('../../assets/images/analysisMood/angryPicture.png') },
    {  emoji: '🤒' , moodText:'Sick' , imageSource:require('../../assets/images/analysisMood/sickPicture.png')},
    {  emoji: '😴' , moodText:'Sleepy' , imageSource:require('../../assets/images/analysisMood/sleepPicture.png') },
    {  emoji: '😐' , moodText:'Nutral', imageSource:require('../../assets/images/analysisMood/nutralPicture.png')},
    {  emoji: '😱' , moodText:'Scare', imageSource:require('../../assets/images/analysisMood/scaredPicture.png') },
  ];

  const handlePress = (index ) => {
    console.log(`Emoji at index ${index} pressed`);

    setSelectedEmoji(emojis[index].emoji);
    setMoodIndex(index)
    // console.log(index);
    
  };

  const handlePressButton = () => {
  
    if (selectedEmoji !== null) {
      const selectedEmojiObject = emojis.find(emoji => emoji.emoji === selectedEmoji);
      
      if (selectedEmojiObject) {
        
        const { moodText } = selectedEmojiObject;
        const { imageSource} = selectedEmojiObject;

        console.log('Selected mood:', moodText);
        navigation.navigate('AnalysisGraphScreen', { selectedEmoji, moodText,imageSource, emojis, moodIndex });
        
      
      } else {
        console.log('Selected emoji not found in the emojis array.');
      }
    
    } else {
      console.log('No emoji selected.');
    }
  };

  
        

  const [animation] = useState(new Animated.Value(1));
  const [selectedEmoji, setSelectedEmoji] = useState(null);




  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1.1,
          duration: 550,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animation]);

  const radiusX = 150; // Horizontal radius
  const radiusY = 175; // Vertical radius
  const totalEmojis = emojis.length;
  const angle = (360 / totalEmojis) * (Math.PI / 180);

  const animatedStyle = {
    transform: [{ scale: animation }],
  };

  const getCenterPosition = (dimension, containerDimension) => {
    return (containerDimension - dimension) / 2;
  };

  return (
    <View>
     
      <HeaderSub headLine={'How are you feeling today!'} />

      {/* <ScrollView> */}
      <View style={styles.circleContainer}>
        {emojis.map((emoji, index) => {
          const x = radiusX * Math.cos(index * angle);
          const y = radiusY * Math.sin(index * angle);

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(index)}
        
              style={[styles.emojiWrapper, { left: x, top: y }, animatedStyle]}
            >
              <Text style={styles.emojiText}>{emoji.emoji}</Text>
             
            </TouchableOpacity>
          );
        })}

        {selectedEmoji && (
          <View
            style={[
              styles.emojiWrapper,
              { left: getCenterPosition(330, 300), top: getCenterPosition(390, 350) },
            ]}
          >
            <Text style={styles.selectemoji}>{selectedEmoji}</Text>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.setMood} onPress={handlePressButton}>
        <Text style={styles.mood}>Set mood</Text>
      </TouchableOpacity>

    
     
     
    </View>
  );
};

const styles = {
  circleContainer: {
    position: 'relative',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 175,
    marginRight:65,
    justifyContent:'center'
    
  },
  emojiWrapper: {
    position: 'absolute',
    // margin: 10,
    
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  emojiText: {
    fontSize: 60,
  },
  selectemoji: {
    fontSize: 90,
  },
  setMood: {
    // alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    marginTop: 281,
    marginBottom:48,
    width:250,
    height:58,
    backgroundColor: '#FFFFFF',
    borderRadius:75,
    borderColor:'#4ABFB4',
    borderWidth:2,
    marginBottom:400
    
    },

    mood:{
      fontSize:16,
      alignSelf:'center',
      
    }
};

export default MoodAnalysis;
