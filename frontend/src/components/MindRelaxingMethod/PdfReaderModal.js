// PdfReaderModal.js
import React from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PdfReader from './PdfReader';

const PdfReaderModal = ({ visible, onClose, pdfSource,name }) => {
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