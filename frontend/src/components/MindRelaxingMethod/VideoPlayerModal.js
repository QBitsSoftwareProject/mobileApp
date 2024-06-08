import React from 'react';
import { View, Modal, Button, StyleSheet ,Text,TouchableOpacity} from 'react-native';
import VideoPlayer from './VideoPlayer';

const VideoPlayerModal = ({ visible, onClose, videoSource ,name}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{name}</Text>
          <VideoPlayer videoSource={videoSource} />
          {/* <Button title="Close" onPress={onClose} /> */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
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
    paddingTop:"45%",
    paddingBottom:"45%",
    
  },

  title: {
    marginTop:10,
    fontSize:18,
    alignSelf:"center"
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: '#74A9CD',
    borderWidth: 1,
    width:120,
    alignSelf:'center'
  },
  closeButtonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default VideoPlayerModal;
