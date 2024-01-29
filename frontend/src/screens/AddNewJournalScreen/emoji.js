import React, { useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView} from 'react-native';

export const EmojiPicker = () =>{
    
    const [userInput, setUserInput] = useState('');

    const handleEmojiPress = (emoji, mark) => {
        setUserInput((prevInput) => prevInput + `${emoji}(${mark})`);

        // console.log(mark); get the marks of emoji
      };

    const emojiData = [

        { emoji: '😊' , mark: '10 '},
        { emoji: '😢' , mark: '20 '},
        { emoji: '😡' , mark: '30 '},
        { emoji: '😍' , mark: '40 '},
        { emoji: '😱' , mark: '50 '},
        { emoji: '😐' , mark: '60 '},
        { emoji: '😴' , mark: '70 '},
        { emoji: '🤒' , mark: '80 '},

       
    ];

    return (
        <View style={styles.container}>
            <ScrollView
              horizontal
              contentContainerStyle={styles.ScrollViewContent}
              showsHorizontalScrollIndicator={false}
            >
                {emojiData.map((item, index) => (
                    <TouchableOpacity
                    key={index}
                    style={styles.emojiButton}
                    onPress={() => handleEmojiPress(item.emoji, item.mark)}
                    >
                        <Text style={styles.emoji}>{item.emoji}</Text>
                
                    </TouchableOpacity>

                ))}
                
            </ScrollView>
            {/* <Text>User Input: {userInput}</Text> */}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:32,
    //   margin:25
    // backgroundColor:'red'
    },
    scrollViewContent: {
      flexDirection: 'row',
    },
    emojiButton: {
      paddingLeft: 10,
      paddingRight:10
    },
    emoji: {
      fontSize: 40,
    },
  });



