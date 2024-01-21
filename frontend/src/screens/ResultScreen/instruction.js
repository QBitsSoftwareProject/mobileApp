import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Overlay = ({ isVisible, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.overlayContent}>
        <TouchableOpacity onPress={onClose}>
        <Image source={require("../../assets/images/resultScreen/close.png")} style = {styles.closeimg} ></Image></TouchableOpacity>
          <Text style={styles.topic}>Introduction</Text>
          <Image source={ require('../../assets/images/stresslevelhistory/intro.png')} style = {styles.overlayimg}/>
          <View style = {styles.textarea}>
            <ScrollView>
          <Text>What are PSS Questionnaires?</Text>
          <Text></Text>
          <Text>PSS questionnaires are a group of self-report surveys
             designed to measure an individual's perceived stress level. 
             They're quick and easy-to-use tools that help you understand 
             how stressful you feel based on your recent experiences and thought patterns.</Text>
            <Text></Text>
             <Text>How do they work?</Text>
          <Text></Text>
          <Text>These questionnaires typically consist of 10 simple questions
             asking you to rate how often you've experienced certain thoughts
              and feelings in the past month. These thoughts and feelings relate
               to how you perceive your life as unpredictable, uncontrollable, and overloaded</Text>


             </ScrollView>
          </View>
          
          
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

  closeimg : {
    width:30,
    height:30,
    alignSelf: 'flex-end',
    marginLeft:270,
    
},

topic:{
  fontSize:20,
  alignSelf:'center'
},

overlayimg : {
  width:230,
  height:180,
},

textarea: {
  width:300,
  height:200,
}
});

export default Overlay;
