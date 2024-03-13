import React, { useState } from "react";
import { StyleSheet, View,Text, ImageBackground, } from "react-native";
import { Animated } from "react-native";
import { EditDeletebutton } from "./editDeleteButton";
import { createStackNavigator } from '@react-navigation/stack';
import { SwipeListView } from "react-native-swipe-list-view";

const inputJournals = [
  
  { id: '1', tittle:'Grateful Moments🌸😊❤️', text: 'Feeling Positive today!🌸. I am grateful for the supportive phone call today, I had with my best friend😊❤️.', category:'positive', emoji:'😊' },
  { id: '2', tittle: 'A Morning Brew of Coffee☀️🌈❤️', text: 'Woke up feeling grateful for a new day! 🙏 Starting the morning with a warm cup of coffee and the sun streaming through my window🌈❤️.', category:'positive',  emoji:'😍' },
  { id: '3', tittle: 'Navigating Inner Storms🌧️', text: 'Negative thoughts looming overhead. 🌧️ Battling inner demons and self-critical voices😔', category:'negative', emoji:'😢' },
  { id: '8', tittle:'Grateful Moments🌸😊❤️', text: 'Feeling Positive today!🌸. I am grateful for the supportive phone call today, I had with my best friend😊❤️.', category:'positive', emoji:'😊' },

  { id: '4', tittle: 'Embracing Gratitude🌸🌟❤️', text: 'Decided to focus on the good stuff❤️ and let go of negativity. Gratitude is the attitude!🌸🌟.', category:'positive', emoji:'😊' },
  { id: '5', tittle: 'Reflecting on Today Blessings😴💤',  text: 'Ending the day with gratitude. Thankful for the experiences and lessons today brought. Ready for a restful sleep. 😴💤.', category:'positive', emoji:'😴' },
  { id: '6', tittle: 'A Morning Brew of Coffee☀️🌈❤️', text: 'Woke up feeling grateful for a new day! 🙏 Starting the morning with a warm cup of coffee and the sun streaming through my window🌈❤️.', category:'positive', emoji:'😍'},
  { id: '7', tittle: 'Navigating Inner Storms🌧️😔', text: 'Negative thoughts looming overhead. 🌧️ Battling inner demons and self-critical voices😔', category:'negative', emoji:'😢' },

];


export const SwipableList = (props) => {

  const stack = createStackNavigator();

  const handleEditPress = (itemID,itemTittle, itemText, itemEmoji) => {
    props.editFunction(itemID,itemTittle, itemText, itemEmoji);
    // navigation.navigate('EditJournal', { itemID, itemText });
  };

  const [showButton, setShowButton] = useState(false);
  

  

  const handleSwipe = () => {
    setShowButton(true);
  };

 


 

  const renderJournalItem = ({ item,index }) => (
      <View style={styles.container}>
      <View style={styles.journalItem}>
        
        <View style={styles.emgTittle}>

       <Text style={styles.journalTittle}>{item.tittle}</Text>
       <Text style ={styles.emg}>{item.emoji}</Text>

        </View>
        <Text style={styles.journalText}>{item.text}</Text>
        {/* <Text style={styles.journalText}>{item.id}</Text> */}
      </View>
      </View>
    );

    const renderHiddenItem = ({ item, index }, rowMap) => (
      <View style={styles.buttonContainer}>
        <EditDeletebutton 
        item = {item.id}
        itemText={item.text}
        itemTittle={item.tittle}
        itemEmoji={item.emoji}
        editFunction={(itemID,itemTittle, itemText,itemEmoji) => handleEditPress(itemID, itemTittle, itemText,itemEmoji)} />
      </View>
    );

  return (
    

   
    <SwipeListView style={{height:342,}}

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



// const JournalListContent = ({ item, index }) => (
//   <FlatList
//     data={[inputJournals]}
//     keyExtractor={(item) => item.id}
//     renderItem={renderJournalItem}
//   />
// );






const styles = StyleSheet.create({

  buttonContainer: {
    // width: 80, // Adjust width as needed
  },
  
    journalItem: {
     
      backgroundColor:'#FFFFFF',
      width:350,
      height:127,
      elevation:2,
      alignSelf:'flex-end',
      borderRadius:20,
      marginBottom:15,
      flexDirection:'column'
      
      
  },

  emgTittle:{
  flexDirection:'row'
  },
  journalText: {
    color:'#101318',
    fontWeight:'200',
    lineHeight:20,
    paddingTop:5, 
    padding:15,
    fontSize:13,
    

  },

  journalTittle:{
    color:'#101318',
    fontWeight:'300',
    lineHeight:20, 
    paddingTop:15,
    paddingBottom:5,
    paddingLeft:15,
    paddingRight:15,
    fontSize:15,
    
    flex:6
    
    },
    emg:{
     
      paddingTop:10,
      fontSize:20,
      
      
      textAlign:'center',
      paddingRight:10,
      
      flex:1

    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      paddingTop:10
      
  
    }
});
