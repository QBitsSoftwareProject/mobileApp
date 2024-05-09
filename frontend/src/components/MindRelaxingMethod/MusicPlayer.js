import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';



const PopupModal = ({ modalVisible, toggleModal, playAudio ,isPlaying,img}) => {

    console.log(img)
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        toggleModal();
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>This is a modal popup!</Text>

          <Image source={{ uri: img }} 
          style={styles.contentImage}/>

          <View style = {styles.btncontainer}>
          <TouchableOpacity onPress={playAudio}>
  {isPlaying ? <Text>Pause</Text> : <Text>Play</Text>}
</TouchableOpacity>
            <TouchableOpacity style = {styles.btn2}></TouchableOpacity>
          </View>

          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  btncontainer:{
    
    flexDirection:'row',
    width:'70%',
    height:20,
  },
  btn1:{
    flex:1,
    backgroundColor:'red'
  },
  btn2:{
    flex:1,
    backgroundColor:'yellow'
  },
  contentImage:{
    height:50
  }


});

export default PopupModal;
