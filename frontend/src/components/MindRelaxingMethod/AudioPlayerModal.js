import React, { useState, useEffect } from 'react';
import { View, Modal, Button, StyleSheet } from 'react-native';
import AudioPlayer from './AudioPlayer';
import RatingPopUp from "./MindRelaxingMethodRatingPopUp"


const AudioPlayerModal = ({ visible, onClose, audioSource,img, name ,id,currentRating,ratedUsers,isRated,setIsRated}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundObject, setSoundObject] = useState(null);
  const [imgLink, setImgLink] = useState(img);


  useEffect(() => {
    const unsubscribe = async () => {
      if (soundObject) {
        await soundObject.unloadAsync();
      }
    };

    // Cleanup function to unload audio on unmount
    return unsubscribe;
  }, [soundObject]);

  const handleStopAndClose = async () => {
    setIsPlaying(false);
    if (soundObject) {
      await soundObject.stopAsync(); // Ensure audio stops first
    }
    onClose();
  };

 

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <AudioPlayer audioSource={audioSource} onStop={handleStopAndClose}imglink = {img} title = {name} id = {id} currentRating = {currentRating} ratedUsers = {ratedUsers} isRated ={isRated} setIsRated = {setIsRated} onClose = {onClose} />
          <View style={styles.buttonContainer} >
            {/* <Button title="Stopp and Close" onPress={handleStopAndClose} /> */}
          </View>
        </View>
        
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#F2F3F5',
    padding: 20,
    borderRadius: 10,
    height: '60%',
    width: '80%',
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default AudioPlayerModal;
