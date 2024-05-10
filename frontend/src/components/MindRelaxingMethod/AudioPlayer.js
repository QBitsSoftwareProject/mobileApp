import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text ,Image,TouchableOpacity} from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';

const AudioPlayer = ({ audioSource, onStop, imglink ,title}) => {
  const [soundObject, setSoundObject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [img,setImg] = useState(imglink)
  const [name,setName] = useState(title)

 
  useEffect(() => {
    async function loadAudio() {
      const newSoundObject = new Audio.Sound();
      try {
        await newSoundObject.loadAsync({ uri: audioSource });
        const audioDuration = await newSoundObject.getStatusAsync();
        setDuration(audioDuration.durationMillis);
        setSoundObject(newSoundObject);
        newSoundObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        await newSoundObject.playAsync(); // Start playing audio when loaded
        setIsPlaying(true);
      } catch (error) {
        console.error('Failed to load audio:', error);
      }
    }

    loadAudio();

    return () => {
      if (soundObject !== null) {
        soundObject.unloadAsync();
      }
    };
  }, [audioSource]);

  const playAudio = async () => {
    try {
      await soundObject.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.error('Failed to play audio:', error);
    }
  };

  const pauseAudio = async () => {
    try {
      await soundObject.pauseAsync();
      setIsPlaying(false);
    } catch (error) {
      console.error('Failed to pause audio:', error);
    }
  };

  const stopAudio = async () => {
    try {
      if (soundObject) {
        await soundObject.stopAsync();
        setIsPlaying(false);
        setPosition(0);
        onStop(); // Call the onStop function passed from the parent component to close the modal
      }
    } catch (error) {
      console.error('Failed to stop audio:', error);
    }
  };

  const onSeek = async (value) => {
    try {
      if (soundObject) {
        await soundObject.setPositionAsync(value);
        setPosition(value);
      }
    } catch (error) {
    //   console.warn('Failed to seek audio:', error.message);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (!status.isPlaying && isPlaying) {
      // If audio stopped playing unexpectedly, update isPlaying state
      setIsPlaying(false);
    }
    if (status.isLoaded && !status.isBuffering) {
      setPosition(status.positionMillis);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.container}>

        <Text style={styles.title}>{name}</Text>

<Image source={{ uri: img }} style={styles.img}></Image>
      
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onValueChange={onSeek}
        disabled={!soundObject}
      />


      <View  style={styles.timeContainer}>
        <View  style={styles.currentTime}>
      <Text style={styles.timeText}>{formatTime(position)}
      </Text>
      </View>
      <View  style={styles.durationTime}>
       <Text style={styles.timeText}>{formatTime(duration)}</Text>
    </View>
        </View>
      <View style={styles.controls}>
        {isPlaying ? (

<TouchableOpacity style={styles.playbtn} onPress={pauseAudio}>
<Image source={require('../../assets/images/MindRelaxingMethod/pause3.png')} />
</TouchableOpacity>
        ) : (

            <TouchableOpacity onPress={playAudio} style={styles.playbtn} >
<Image source={require('../../assets/images/MindRelaxingMethod/play.png')} />
</TouchableOpacity>
          
        )}
      </View>
      <TouchableOpacity style={styles.closebtn}  onPress={stopAudio} >
        <Text style={styles.closetext} >close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    marginBottom: 10,
  },
  slider: {
    width: '80%',
  },

  img:{
    width:"80%",
    height:"50%"
  },

  timeContainer:{
    flexDirection:"row",
    marginHorizontal:25
  },
  currentTime:{
    flex:1,
    alignItems:"flex-start",
  },

  durationTime:{
    flex:1,
    alignItems:"flex-end"
  },

  timeText:{
    fontSize:12,
    color:"#5C677D"
  },

  playbtn:{
    alignItems: "center",
  padding: 10,
  backgroundColor: "white",
  borderRadius: 50,
  // Shadow properties for iOS
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  // Elevation for Android
  elevation: 5,
},

title:{
    fontSize:18,
    marginBottom:15
},

closebtn:{
    padding:10,
    backgroundColor:'white',
    borderRadius:15,
    width:120,
    justifyContent:"center",
    alignItems:'center',
    marginTop:32,
    height:45,
    borderColor:'#74A9CD',
    borderWidth:1,
},
closetext:{
    fontSize:16,
    color:"black"
}
});

export default AudioPlayer;
