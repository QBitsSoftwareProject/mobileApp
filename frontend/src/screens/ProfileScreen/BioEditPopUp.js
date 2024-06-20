import React, { useState, useEffect } from 'react';
import { View, Modal, Text, TextInput, TouchableOpacity ,StyleSheet } from 'react-native';
import { checkExistsUser } from '../../services/userServices/checkExistsUser';
import { countries } from '../../components/InputField/Countries';
import { Picker } from '@react-native-picker/picker';

const BioEditPopUp = ({ isVisible, onClose, previousText, title, update, updateFunction }) => {
    const [text, setText] = useState('');
    const [emailExist, setEmailExist] = useState(0);
    const [existUser, setExistUser] = useState('');

    useEffect(() => {
        setText(previousText);
        setQuery(previousText) 
    }, [previousText]);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\+\d{11}$/;
        return phoneRegex.test(phoneNumber);
    };

    const checkEmailExist = async (email) => {
        try {
            const checkUser = await checkExistsUser(email);
            setExistUser(checkUser);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (title === "Edit Email") {
            checkEmailExist(text);
        }

        if (existUser.user != null && text !== previousText) {
            setEmailExist(1);
        } else {
            setEmailExist(0);
        }
    }, [text, previousText, title, existUser.user]);

    const handleConfirm = async () => {
        if (!text.trim()) {
            alert("cannot set as empty");
            return;
        }

        if (title === "Edit Email") {
            if (validateEmail(text)) {
                try {
                    await checkEmailExist(text);

                    if (emailExist === 0) {
                        update(text.toLocaleLowerCase());
                        updateFunction(text);
                        onClose();
                    } else {
                        alert("email already exists");
                        return;
                    }
                } catch (err) {
                    console.log(err);
                    alert("An error occurred while checking the email");
                }
            } else {
                alert("not a valid email");
                return;
            }
        } else if (title === "Edit Contact Number") {
            if (validatePhoneNumber(text)) {
                update(text);
                updateFunction(text);
                onClose();
            } else {
                alert("invalid contact number");
                return;
            }
        } else if(title === "Edit Country"){

            if(!query.trim()){
                
                alert('cannot set empty')
            }else{
            update(newCountry);
            updateFunction(newCountry);
            onClose();
            }
        }else{
            update(text);
            updateFunction(text);
            onClose();
        }


    };

const [displayCountries, setDisplayCountries] = useState(true);
  const [query, setQuery] = useState(previousText);
  const [newCountry, setNewCountry] = useState('')

  const searchCountries = (query) => {
    if (!query) return [];
    const lowerCaseQuery = query.toLowerCase();
    return countries.filter((country) =>
      country.toLowerCase().includes(lowerCaseQuery)
    );
  };

  const matchingCountries = displayCountries ? searchCountries(query) : [];

  const handleCountryPress = (country) => {
    setQuery(country);
    setDisplayCountries(false);
    setNewCountry(country)
  };

  const [selectedOption, setSelectedOption] = useState('');

  

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '70%' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 18, marginBottom: 15 }}>{title}</Text>

                {(title === "Edit Contact Number" || title === "Edit Name" || title === "Edit User Name" ||  title ==="Edit Email"  || title ==="Edit Address" || title ==="Edit City" ) && (

                
                    <TextInput
                        style={{ height: 'auto', paddingHorizontal: 10, marginBottom: 20, fontSize: 16, width: "100%", borderBottomWidth: 1, borderBottomColor: '#9E9D9D', }}
                        placeholder="Enter text here"
                        onChangeText={setText}
                        value={text}
                        multiline={true}
                    />
                    )}


                        {title === "Edit Country" && (
                        <View>
                            <TextInput
                                value={query}
                                onChangeText={(text) => {
                                    setQuery(text);
                                    setDisplayCountries(true);
                                }}
                                style={{ borderColor: 'gray', borderWidth: 1, padding: 8, borderRadius: 4 }}
                            />
                            {matchingCountries.length > 0 && displayCountries && (
                                <View style={{ borderRadius: 10, backgroundColor: "white", marginTop: 3 }}>
                                    {matchingCountries.slice(0, 5).map((country, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            style={{ padding: 10 }}
                                            onPress={() => handleCountryPress(country)}
                                        >
                                            <Text>{country}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}
                        </View>


                    )}

                        {title === 'Edit Specialization' && (

                            <>
                                <Picker
                                    selectedValue={text}
                                    style={styles.picker}
                                    onValueChange={(itemValue) => setText(itemValue)}  
                                >
                         <Picker.Item label={text} value={text} />
                         <Picker.Item label="Option 1" value="option1" />
                         <Picker.Item label="Option 2" value="option2" />
                        </Picker>

                            </>

                        )}

                        {(title === 'Edit Bio' || title === 'Edit Qualification') && (

                        <>
                            <TextInput
                                style={styles.textArea}
                                multiline={true}
                                numberOfLines={5}
                                placeholder="Type here..."
                                value={text}
                                onChangeText={setText}
                            />

                        </>

                        )}

                    



                    <TouchableOpacity onPress={handleConfirm} style={{ alignSelf: 'center', backgroundColor: '#4A90BF', width: 150, height: 45, justifyContent: 'center', borderRadius: 15 }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16, color: 'white' }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default BioEditPopUp;

const styles = StyleSheet.create({

    textArea: {
        height: 80,
        justifyContent: "flex-start",
        textAlignVertical: 'top',
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom:32
      },

      selectOption:{
        color: "#4A90BF"
      }
    });