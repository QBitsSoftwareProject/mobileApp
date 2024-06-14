import React, { useState, useEffect } from 'react';
import { View, Modal, Text, TextInput, TouchableOpacity } from 'react-native';
import { checkExistsUser } from '../../services/userServices/checkExistsUser';
import { countries } from '../../components/InputField/Countries';
import FilePicker from "../../components/GetImages/FilePicker";

const BioEditPopUp = ({ isVisible, onClose, setProPic , updateFunction }) => {

  

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '70%' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 18, marginBottom: 15 }}>Update Profile</Text>

                    <View style={{ justifyContent: 'center',alignItems :"center"}}>
                    <FilePicker errMsg={"You have to select an image"}
                                selectedImg={setProPic}
                                label={"Upload a profile picture"}></FilePicker>
                    </View>

                    <TouchableOpacity onPress={updateFunction} style={{ alignSelf: 'center', backgroundColor: '#4A90BF', width: 150, height: 45, justifyContent: 'center', borderRadius: 15 }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16, color: 'white' }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default BioEditPopUp;
