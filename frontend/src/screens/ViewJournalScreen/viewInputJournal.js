import React, { useState } from "react";
import { StyleSheet, View,Text,ScrollView } from "react-native";
import { EditDeletebutton } from "./editDeleteButton";

import { SwipeListView } from "react-native-swipe-list-view";

export const SwipableList = () => {
  const [showButton, setShowButton] = useState(false);

  const handleSwipe = () => {
    setShowButton(true);
  };

   
    const inputJournals = [
  
      { id: '1', text: 'Feeling Positive today!🌸. I am grateful for the supportive phone call today, I had with my best friend😊❤️.' },
      { id: '2', text: 'Feeling Positive today!. I am grateful for the supportive phone call today, I had with my best friend😊❤️.' },
      { id: '3', text: 'Feeling Positive today!. I am grateful for the supportive phone call today, I had with my best friend😊❤️.' },
      { id: '4', text: 'Feeling Positive today!. I am grateful for the supportive phone call today, I had with my best friend😊❤️.' },
      { id: '5', text: 'Feeling Positive today!. I am grateful for the supportive phone call today, I had with my best friend😊❤️.' },
      { id: '6', text: 'Feeling Positive today!. I am grateful for the supportive phone call today, I had with my best friend😊❤️.' },


      
      
  
    ];

    const renderJournalItem = ({ item }) => (
      <View style={styles.journalItem}>
        <Text style={styles.journalText}>{item.text}</Text>
      </View>
    );

    const renderHiddenItem = ({ item, index }, rowMap) => (
      <View style={styles.buttonContainer}>
        <EditDeletebutton />
      </View>
    );

  return (

    <SwipeListView style={{marginTop:140 , height:420}}

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
      padding: 15,
      backgroundColor:'#FFFFFF',
      width:286,
      height:127,
      alignItems:'flex-end',
      alignSelf:'flex-end',
      borderRadius:20,
      marginBottom:15,
      
  },
  journalText: {
    color:'#101318',
    fontWeight:'300',
    lineHeight:25, 
  },
});
