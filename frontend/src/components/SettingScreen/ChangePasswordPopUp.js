import React, { useState, useEffect } from 'react';
import { View, Modal, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAUser, updateAUser } from "../../services/userServices/userService";
import {getADoctor} from "../../services/doctorServices/doctorService";
import {passwordUpdate} from "../../services/passwordServices/passwordUpdate"


const BioEditPopUp = ({ isVisible, onClose }) => {

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordMatch, setIsPasswordMatch] = useState(false);
    const [userId, setUserId] = useState(false);
    const [userRole, setUserRole] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        setIsPasswordMatch(newPassword !== "" && newPassword === confirmPassword);
    }, [newPassword, confirmPassword]);

    const handleCancel = () => {
        setConfirmPassword('');
        setNewPassword('')
        setIsPasswordMatch(false)
        onClose();
    }

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const role = await AsyncStorage.getItem("role");
            setUserRole(role);
    
            let userData;
            if (role === "regularUser") {
              userData = await getAUser();
            } else if (role === "doctor") {
              userData = await getADoctor();
            } else {
              throw new Error("Invalid user role");
            }
    
            setUser(userData);
          } catch (err) {
            setError(err.message);
          } finally {
            
          }
        };
    
        fetchUserData();
      }, []);

      useEffect(() => {
        if (user != null) {
          setUserId(user._id);
        }

        
      }, [user]);

    const handleChange = async() => {
        console.log(userId);
        console.log(userRole);
        console.log(confirmPassword);
       
        const update = await passwordUpdate(confirmPassword,userId,userRole)
        
        
    }

    
    

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ backgroundColor: '#F2F3F5', padding: 20, borderRadius: 10, width: '80%' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 18, marginBottom: 15 }}>Reset Password</Text>

                    <Text style={{marginBottom:5,fontSize: 16,}}>New password :</Text>
                    
                    <TextInput style={{
                    height: "auto",
                    paddingHorizontal: 10,
                    marginBottom: 10,
                    fontSize: 16,
                    width: "100%",
                    
                    borderBottomColor: "#9E9D9D",
                    backgroundColor: "white" ,
                    height:45,
                    borderRadius:10
                    }} 
                    placeholder='new password'
                    placeholderTextColor={'#D8D8D8'}
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry={true}/>

<Text style={{marginBottom:5,fontSize: 16,}}>Confirm password :</Text>
                    
                    <TextInput style={{
                    height: "auto",
                    paddingHorizontal: 10,
                    marginBottom: 20,
                    fontSize: 16,
                    width: "100%",
                    
                    borderBottomColor: "#9E9D9D",
                    backgroundColor: "white" ,
                    height:45,
                    borderRadius:10
                    }} 
                    placeholder='confirm password'
                    placeholderTextColor={'#D8D8D8'}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}/>
                    
                    

                    
                    <View style={{flexDirection:'row',gap:20, alignItems:'center', justifyContent:'center'}}>
                        <View>
                    <TouchableOpacity onPress={handleCancel} style={{ alignSelf: 'center', backgroundColor: 'white', width: 130, height: 45, justifyContent: 'center', borderRadius: 15 }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16, color: 'black' }}>Cancel</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity  onPress={handleChange}
                    style={{ alignSelf: 'center', backgroundColor: 'white', width: 130, height: 45, justifyContent: 'center', borderRadius: 15 }}
                    disabled={!isPasswordMatch}
                    >
                        <Text style={{ 
                            alignSelf: 'center', fontSize: 16,  
                            color: !isPasswordMatch ? "#D8D8D8" : "black",
                            }}>Change</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default BioEditPopUp;
