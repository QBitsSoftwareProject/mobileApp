import React, { useState, useEffect } from "react";

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ActivityIndicator
  } from "react-native";

  //radio button componennt with fetched options
  //options pass from the stress level assessment screen 
const RadioButton = ({ options, selectedOption, onSelect, selectedMark }) => {
    const [selectedOptionInternal, setSelectedOptionInternal] = useState(null);
    const [selectedOptionMark, setSelectedOptionMark] = useState(null);
  
    useEffect(() => {
      setSelectedOptionInternal(selectedOption);
    }, [selectedOption]);
  
  
  
    const handleOptionSelect = (option,mark) => {
      setSelectedOptionInternal(option);
      setSelectedOptionMark(selectedMark)
      onSelect(option); // Pass the entire option object to onSelect
      console.log('Selected Option Mark:', mark);
    };

    
  
    return (
      <View>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 5,
              backgroundColor: selectedOptionInternal === option ? '#ABF4DF' : 'white',
              paddingHorizontal: 10,
              paddingVertical: 7,
              borderRadius: 15,
            }}
            onPress={() => handleOptionSelect(option,selectedMark[index])}
          >
            <Text style={{ color: 'black', fontSize: 14 }}>{option}</Text>
            <View
              style={{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: selectedOptionInternal === option ? "#4ABFB4" : "#4ABFB4",
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: selectedOptionInternal === option ? "#4ABFB4" : 'white',
              }}
            >
              {selectedOptionInternal === option && (
                <View
                  style={{
                    height: 14,
                    width: 14,
                    borderRadius: 6,
                    backgroundColor: "#4ABFB4",
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  export default RadioButton;

