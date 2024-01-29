import React, { useState } from 'react';
import { Modal, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const PopupMessage = ({ visible, message, imageUrl, onConfirm, onCancel }) => {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.messageText}>{message}</Text>
          {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} style={styles.confirmButton}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '80%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
    },
    messageText: {
      fontSize: 18,
      marginBottom: 10,
    },
    image: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
      marginBottom: 10,
      borderRadius: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cancelButton: {
      flex: 1,
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
      marginRight: 5,
      alignItems: 'center',
    },
    confirmButton: {
      flex: 1,
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 5,
      marginLeft: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
  

export default PopupMessage