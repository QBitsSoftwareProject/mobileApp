import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import { Audio } from 'expo-av';
import AudioPlayer from './AudioService';

const ExpandableCard = (props) => {
  const [isVisible, setIsVisible] = useState(false); // State for modal visibility

  const handlePlaySound = async () => {
    try {
      // Set the visibility of the modal to true when the sound starts playing
      setIsVisible(true);
    } catch (error) {
      console.error('Failed to play the sound:', error);
    }
  };
  

  return (
    <View style={{ margin: 10 }}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={handlePlaySound}>
          <Image
            source={require('../../assets/images/MindRelaxingMethod/mp3playbutton.png')}
            style={styles.playButton}
          />
        </TouchableOpacity>
        <Text style={styles.method}>{props.methodName}</Text>
      </View>

      <Modal visible={isVisible} transparent>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <TouchableOpacity onPress={() => setIsVisible(false)} style={{ position: 'absolute', top: 20, right: 20 }}>
            <Text style={{ color: 'white' }}>Close</Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <AudioPlayer mp3={props.rUrl} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  playButton: {
    width: 50,
    height: 50,
  },
  method: {
    fontSize: 18,
    color: '#101318',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default ExpandableCard;
