import React, { useState } from "react";
import { StyleSheet, View,Text, } from "react-native";
import { Animated } from "react-native";
import { EditDeletebutton } from "./editDeleteButton";
import { createStackNavigator } from '@react-navigation/stack';
import { SwipeListView } from "react-native-swipe-list-view";

const inputJournals = [
  
  { id: '1', text: 'Feeling Positive today!🌸. I am grateful for the supportive phone call today, I had with my best friend😊❤️.' },
  { id: '2', text: 'Woke up feeling grateful for a new day! 🙏 Starting the morning with a warm cup of coffee and the sun streaming through my window🌈❤️.' },
  { id: '3', text: 'Negative thoughts looming overhead. 🌧️ Battling inner demons and self-critical voices😔' },
  { id: '8', text: 'Feeling Positive today!🌸. I am grateful for the supportive phone call today, I had with my best friend😊❤️.' },

  { id: '4', text: 'Decided to focus on the good stuff❤️ and let go of negativity. Gratitude is the attitude!🌸🌟.' },
  { id: '5', text: 'Ending the day with gratitude. Thankful for the experiences and lessons today brought. Ready for a restful sleep. 😴💤.' },
  { id: '6', text: 'Feeling lonely and disconnected. Plans canceled, calls unanswered. 😔 Loneliness creeping in like an unwelcome guest..' },
  { id: '7', text: 'Negative thoughts looming overhead. 🌧️ Battling inner demons and self-critical voices😔' },

];

export const SwipableList = (props) => {



  const [showButton, setShowButton] = useState(false);

  

  const handleSwipe = () => {
    setShowButton(true);
  };



 

  const renderJournalItem = ({ item,index }) => (
      
      <View style={styles.journalItem}>
        <Text style={styles.journalText}>{item.text}</Text>
        <Text style={styles.journalText}>{item.id}</Text>
      </View>
    );

    const renderHiddenItem = ({ item, index }, rowMap) => (
      <View style={styles.buttonContainer}>
        <EditDeletebutton 
        itemID = {item.id}
        editFunction ={props.editFunction} />
      </View>
    );

  return (

    <SwipeListView style={{paddingTop:32,height:342,}}

    data={inputJournals}
    keyExtractor={(item) => item.id}
    renderItem={renderJournalItem}

    onSwipeOpen={handleSwipe}
    onSwipeClose={() => setShowButton(false)}
   
    renderHiddenItem={renderHiddenItem}
    leftOpenValue={0}
    rightOpenValue={-65}
  />
 
);
};

const JournalListContent = ({ item, index }) => (
  <FlatList
    data={[inputJournals]}
    keyExtractor={(item) => item.id}
    renderItem={renderJournalItem}
  />
);




const styles = StyleSheet.create({
  container: {

  
  },
  journalContainer: {
 
  },
  buttonContainer: {
    // width: 80, // Adjust width as needed
  },
  
    journalItem: {
      // padding: 15,
      backgroundColor:'#FFFFFF',
      width:350,
      height:127,
      // alignItems:'flex-end',
      alignSelf:'flex-end',
      borderRadius:20,
      marginBottom:15,
      
  },
  journalText: {
    color:'#101318',
    fontWeight:'300',
    lineHeight:25, 
    padding:15
  },
});
