import React, { useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { useRoute } from '@react-navigation/native';

export const EmojiPicker = ({onEmojiPress}) =>{

  const route = useRoute();
  const { itemEmoji } = route.params;
    
    const [userInput, setUserInput] = useState(itemEmoji);
    const [selectedEmoji, setSelectedEmoji] = useState(null);

    const handleEmojiPress = (emoji, mark) => {
        setUserInput((prevInput) => prevInput + `${emoji}(${mark})`);
        setSelectedEmoji(emoji);
        onEmojiPress({ emoji, mark });

        // console.log(mark); 
        // get the marks of emoji
      };

      EmojiPicker.propTypes = {
        onEmojiPress: PropTypes.func.isRequired,
      };

      EmojiPicker.defaultProps = {
        onEmojiPress: () => {},
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
                    style={[styles.emojiButton,
                    selectedEmoji === item.emoji ? styles.selectedEmoji : null,
                  ]}
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
      paddingRight:10,borderWidth: 1, 
      borderColor: 'transparent', 
      borderRadius: 5, 
    },

    selectedEmoji: {
      borderColor: '#5296C5', // Change the border color when selected
    },

    emoji: {
      fontSize: 40,
    },
  });



