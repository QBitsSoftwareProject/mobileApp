import React, { useState,useEffect} from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { useRoute } from '@react-navigation/native';

export const EmojiPicker = ({onEmojiPress,imoji}) =>{   //onEmojiPress is called when emoji pressed, emoji is hold currently selected mood

 
  const route = useRoute();
  const { itemEmoji } = route.params;
    
  const [userInput, setUserInput] = useState(itemEmoji);
  const [selectedEmoji, setSelectedEmoji] = useState(imoji|| '');


  // useEffect to update selectedEmoji when emoji changes
  useEffect(() => {
      setSelectedEmoji(imoji || '');
  }, [imoji]);

  
  // handleEmojiPress function
  const handleEmojiPress = (emoji, mark) => {
    
    
  // find the selected emoji in the emojiData array
  const selectedEmoji = emojiData.find(item => item.emoji === emoji);  
    
    
  // update userinput and selected emoji
        setUserInput((prevInput) => prevInput + `${emoji}(${mark})`);
        setSelectedEmoji(emoji);
     
  
  // Call the onEmojiPress callback with the selected emoji data
        onEmojiPress({ emoji, mark , category: selectedEmoji? selectedEmoji.category:''});

        console.log(selectedEmoji? selectedEmoji.category: '')

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

        { emoji: '😊' , mark: '10 ', category: 'positive'},
        { emoji: '😢' , mark: '20 ', category: 'negative' },
        { emoji: '😡' , mark: '30 ', category: 'negative'},
        { emoji: '😍' , mark: '40 ', category: 'positive'},
        { emoji: '😱' , mark: '50 ', category: 'negative'},
        { emoji: '😐' , mark: '60 ', category: 'negative'},
        { emoji: '😴' , mark: '70 ', category: 'positive'},
        { emoji: '🤒' , mark: '80 ', category: 'negative'}, 

       
    ];

    // console.log(selectedEmoji)

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
                    selectedEmoji === parseInt(item.mark) ? styles.selectedEmoji : null,
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
      marginBottom:15,
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



