import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity,Image} from 'react-native'

const PopupMessage = ({ message, onClose, onConfirm, props}) => {
  return (
    <Modal transparent animationType="slide" visible={!!message}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.messageText}>{message}</Text>
          <View style={{alignItems:'center'}}>
          <Image
                source={require('../../assets/images/Confirm.png')}
                style={{width:180, height:180, marginVertical:20}} />
          </View>
         
          <TouchableOpacity onPress={onConfirm} style={styles.CCButton}>
              <Text style={styles.CCButtonText}>Confirm</Text>
            </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.CCButton}>
            <Text style={styles.CCButtonText}>Cancel</Text>
          </TouchableOpacity>
         
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
      },
modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',

    },
messageText: {
    fontSize: 32,
    fontWeight:'400',
    color:'#40495B',
    textAlign:'center',
    marginBottom: 10,
  },

  CCButton: {
    backgroundColor:'transparent',
    borderWidth:1,
    borderColor: '#3498db',
    padding: 10,
    margin:5,
    borderRadius: 20,
    alignItems: 'center',
  },
  CCButtonText: {
    color: '#101318',
    fontSize:18,
    fontWeight: '#400',
    textAlign:'center',

  },

})
export default PopupMessage