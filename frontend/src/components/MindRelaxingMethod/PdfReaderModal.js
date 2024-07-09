// PdfReaderModal.js
import React , { useState }from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PdfReader from './PdfReader';
import RatingPopUp from "./MindRelaxingMethodRatingPopUp"
import Toast from "react-native-toast-message";

const PdfReaderModal = ({ visible, onClose, pdfSource,name ,id,currentRating,ratedUsers,isRated,setIsRated}) => {

  

  const [isPopUpVisible, setIsPopUpVisible] = useState(false)

  const handleButtonClick = () => {
    if(!isRated){
    setIsPopUpVisible(true);
    setIsRated(true)
    }
    else{
      onClose();
    }
  };
  
    const handleClosePopUp = (text2) => {
      setIsPopUpVisible(false);
      setTimeout(() => {
        Toast.show({
          type: "success",
          text1: "Thank you for reading",
          text2: text2,
        });
      }, 200);
    };

  const handleRating = () => {
    handleButtonClick()
  }
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
          <PdfReader pdfSource={pdfSource} />
          <TouchableOpacity style={styles.closeButton} onPress={handleRating}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>

        <RatingPopUp
        message="Rate your experience"
        onClose={handleClosePopUp}
        methodId={id}
        title="Rate this PDF"
        visible={isPopUpVisible}
        close = {onClose}
        ratedUsers={ratedUsers}
        currentRating={currentRating}
        >

        </RatingPopUp>
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
    height: '77.5%',
    width: '100%',
  },
  title: {
    marginBottom:32,
    marginTop:10,
    fontSize:18,
    alignSelf:"center"
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

export default PdfReaderModal;
