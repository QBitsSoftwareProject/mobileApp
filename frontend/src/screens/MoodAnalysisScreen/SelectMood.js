import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import HeaderSub from '../../screens/MoodAnalysisScreen/Header';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const MoodAnalysis = () => {
  const navigation = useNavigation();

  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [moodIndex, setMoodIndex] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [count, setCount] = useState(0);
  const [moodtext, setMoodText] = useState('')
  const [ImageSource, setImageSource] = useState('');
  const userid = '214102J';

  const emojis = [
    { emoji: '😄', moodText: 'Happy', imageSource: require('../../assets/images/analysisMood/happyPicture.png') },
    { emoji: '😍', moodText: 'Lovely', imageSource: require('../../assets/images/analysisMood/lovelyPicture.png') },
    { emoji: '😢', moodText: 'Sad', imageSource: require('../../assets/images/analysisMood/sadPicture.png') },
    { emoji: '😡', moodText: 'Angry', imageSource: require('../../assets/images/analysisMood/angryPicture.png') },
    { emoji: '🤒', moodText: 'Sick', imageSource: require('../../assets/images/analysisMood/sickPicture.png') },
    { emoji: '😴', moodText: 'Sleepy', imageSource: require('../../assets/images/analysisMood/sleepPicture.png') },
    { emoji: '😐', moodText: 'Nutral', imageSource: require('../../assets/images/analysisMood/nutralPicture.png') },
    { emoji: '😱', moodText: 'Scare', imageSource: require('../../assets/images/analysisMood/scaredPicture.png') },
  ];

  const handlePress = (index) => {
    console.log(`Emoji at index ${index} pressed`);
    setSelectedEmoji(emojis[index].emoji);
    setMoodIndex(index);
    setMoodText(emojis[index].moodText);
    console.log(emojis[index].moodText);
    setImageSource(emojis[index].imageSource);
    
  };

  const storedata = async (currentDate, currentTime) => {

    const count = 10;

    console.log(userid);
console.log(selectedEmoji);
// console.log(emojis[moodIndex].moodText);
console.log(moodtext)
console.log(time);
console.log(date);
console.log(count);


    try {
      const response = await axios.post('http://192.168.43.51:3000/moodEntries/mood-create', {
        userid,
        selectedEmoji,
        moodText: emojis[moodIndex].moodText,
        time: currentTime,
        date: currentDate,
        count
      });

      if (response.status === 200) {
        console.log('Data saved successfully');
      } else {
        console.log('Error');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handlePressButton = async () => {
    if (!selectedEmoji) {
      alert('Emoji is required');
      return;
    }

    

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    setDate(formattedDate);
    setTime(formattedTime);

    await storedata(formattedDate, formattedTime);

   


    navigation.navigate('AnalysisGraphScreen', { selectedEmoji, moodIndex, count, moodtext ,ImageSource});
  };

  useEffect(() => {
    const animation = new Animated.Value(1);
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
  }, []);

  const radiusX = 150;
  const radiusY = 175;
  const totalEmojis = emojis.length;
  const angle = (360 / totalEmojis) * (Math.PI / 180);

  const getCenterPosition = (dimension, containerDimension) => {
    return (containerDimension - dimension) / 2;
  };

  return (
    <View>
      <HeaderSub headLine={'How are you feeling today!'} />
      <View style={styles.circleContainer}>
        {emojis.map((emoji, index) => {
          const x = radiusX * Math.cos(index * angle);
          const y = radiusY * Math.sin(index * angle);

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(index)}
              style={[styles.emojiWrapper, { left: x, top: y }]}
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
    marginRight: 65,
    justifyContent: 'center'
  },
  emojiWrapper: {
    position: 'absolute',
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
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 281,
    marginBottom: 48,
    width: 250,
    height: 58,
    backgroundColor: '#FFFFFF',
    borderRadius: 75,
    borderColor: '#4ABFB4',
    borderWidth: 2,
  },
  mood: {
    fontSize: 16,
    alignSelf: 'center',
  }
};

export default MoodAnalysis;