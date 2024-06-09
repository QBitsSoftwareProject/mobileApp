import React, {useState} from 'react';
import { View, Modal, Button, Text, TextInput , TouchableOpacity} from 'react-native';

const BioEditPopUp = ({ isVisible, onClose, previousText,title }) => {

    const [text, setText] = useState(previousText);

  const handleInputChange = (inputText) => {
    setText(inputText);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width:'70%' }}>
          <Text style = {{alignSelf:'center', fontSize:18, marginBottom:15}}>{title}</Text>

          <TextInput
        style={{ height: 'auto',  paddingHorizontal: 10, marginBottom: 20 , fontSize:16, width:"100%", borderBottomWidth:1,borderBottomColor:'#9E9D9D',}}
        placeholder="Enter text here"
        onChangeText={handleInputChange}
        value={text}
        multiline={true}
      />


            <TouchableOpacity onPress={onClose} style = {{alignSelf:'center', backgroundColor:'#4A90BF',width:150, height:45, justifyContent:'center', borderRadius:15}}>
          <Text style = {{alignSelf:'center', fontSize:16, color:'white'}}>Confirm</Text>
           </TouchableOpacity>


        </View>
      </View>
    </Modal>
  );
};

export default BioEditPopUp;
