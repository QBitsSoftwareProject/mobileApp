import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { countries } from './Countries';

const InputField = (props) => {
    const [inputText, setInputText] = useState('');
    const [displayCountries, setDisplayCountries] = useState(true);

    const searchCountries = (query) => {
        if (!query) return [];

        const lowerCaseQuery = query.toLowerCase();
        return countries.filter(country => country.toLowerCase().includes(lowerCaseQuery));
    };

    const matchingCountries = props.searchBox ? searchCountries(props.query) : [];

    const handleCountryPress = (country) => {
        setInputText(country);
        setDisplayCountries(false)
        props.onChangeText(country);
    };

    return (
        <View style={{ marginBottom: 32 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#40495B',
                        marginBottom: 7
                    }}>
                    {props.label}
                </Text>
                <Text style={{ color: '#E82519' }}>{props.errMsg}</Text>
            </View>

            <View style={{ flex: 1 }}>
                <TextInput
                    placeholder={props.placeHolder}
                    style={{
                        backgroundColor: 'white',
                        height: props.type === 'textField' ? 150 : 50,
                        width: '100%',
                        padding: 10,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: 'rgba(151,157,172,0.6)',
                        textAlignVertical: props.type === 'textField' ? 'top' : 'center'
                    }}
                    onChangeText={(text) => {
                        props.onChangeText(text); 
                        setDisplayCountries(true); 
                        setInputText(text);
                    }}
                    multiline={props.type === 'textField' ? true : false} 
                    value={inputText}  
                  
                    
                />
            </View>
            {props.searchBox && matchingCountries.length > 0 && displayCountries &&(
                <View style={{borderRadius:10,backgroundColor:'white',marginTop:3}}>
                    {matchingCountries.slice(0,5).map((country, index) => (
                          <TouchableOpacity key={index} style={{ padding: 10, }} onPress={() => {handleCountryPress(country)}}>
                            <Text>{country}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}

        </View>
    )
}

export default InputField
