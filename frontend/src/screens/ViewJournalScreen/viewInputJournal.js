import React, { useState } from "react";
import { StyleSheet, View,Text, } from "react-native";
import { Animated } from "react-native";
import { EditDeletebutton } from "./editDeleteButton";
import { createStackNavigator } from '@react-navigation/stack';
import { SwipeListView } from "react-native-swipe-list-view";

const inputJournals = [
  
  { id: '1', tittle:'Grateful Moments🌸😊❤️', text: 'Feeling Positive today!🌸. I am grateful for the supportive phone call today, I had with my best friend😊❤️.' },
  { id: '2', tittle: 'A Morning Brew of Coffee☀️🌈❤️', text: 'Woke up feeling grateful for a new day! 🙏 Starting the morning with a warm cup of coffee and the sun streaming through my window🌈❤️.' },
  { id: '3', tittle: 'Navigating Inner Storms🌧️', text: 'Negative thoughts looming overhead. 🌧️ Battling inner demons and self-critical voices😔' },
  { id: '8', tittle:'Grateful Moments🌸😊❤️', text: 'Feeling Positive today!🌸. I am grateful for the supportive phone call today, I had with my best friend😊❤️.' },

  { id: '4', tittle: 'Embracing Gratitude🌸🌟❤️', text: 'Decided to focus on the good stuff❤️ and let go of negativity. Gratitude is the attitude!🌸🌟.' },
  { id: '5', tittle: 'Reflecting on Today Blessings😴💤',  text: 'Ending the day with gratitude. Thankful for the experiences and lessons today brought. Ready for a restful sleep. 😴💤.' },
  { id: '6', tittle: 'A Morning Brew of Coffee☀️🌈❤️', text: 'Woke up feeling grateful for a new day! 🙏 Starting the morning with a warm cup of coffee and the sun streaming through my window🌈❤️.'},
  { id: '7', tittle: 'Navigating Inner Storms🌧️😔', text: 'Negative thoughts looming overhead. 🌧️ Battling inner demons and self-critical voices😔' },

];

export const SwipableList = (props) => {

  const stack = createStackNavigator();

  const handleEditPress = (itemID,itemTittle, itemText) => {
    props.editFunction(itemID,itemTittle, itemText);
    // navigation.navigate('EditJournal', { itemID, itemText });
  };

  const [showButton, setShowButton] = useState(false);

  

  const handleSwipe = () => {
    setShowButton(true);
  };



 

  const renderJournalItem = ({ item,index }) => (
      
      <View style={styles.journalItem}>
        <Text style={styles.journalTittle}>{item.tittle}</Text>
        <Text style={styles.journalText}>{item.text}</Text>
        {/* <Text style={styles.journalText}>{item.id}</Text> */}
      </View>
    );

    const renderHiddenItem = ({ item, index }, rowMap) => (
      <View style={styles.buttonContainer}>
        <EditDeletebutton 
        item = {item.id}
        itemText={item.text}
        itemTittle={item.tittle}
        editFunction={(itemID,itemTittle, itemText) => handleEditPress(itemID, itemTittle, itemText)} />
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
    fontWeight:'200',
    lineHeight:20,
    paddingTop:5, 
    padding:15,
    fontSize:13

  },

  journalTittle:{
    color:'#101318',
    fontWeight:'300',
    lineHeight:20, 
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:15,
    paddingRight:15,
    fontSize:14,
    paddingTop:10
    }
});
