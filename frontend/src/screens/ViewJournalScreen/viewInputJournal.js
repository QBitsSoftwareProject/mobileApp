import React, { useEffect, useState } from "react";
import { StyleSheet, View,Text, ImageBackground, } from "react-native";
import { Animated } from "react-native";
import { EditDeletebutton } from "./editDeleteButton";
import { createStackNavigator } from '@react-navigation/stack';
import { SwipeListView } from "react-native-swipe-list-view";
import getJournals from "./fetchJournals";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";


export const SwipableList = (props) => {

  const [journalDisplay , setJournalDisplay] = useState([]);  //set jouranal state

  

  const handleEditPress = (itemID,itemTittle, itemText, itemEmoji) => {
    
    //get props from editDelete button (handleEditPress)
    props.editFunction(itemID,itemTittle, itemText, itemEmoji);

    
   
  };

  const [showButton, setShowButton] = useState(false); // set state show edit delete button
  
  const handleSwipe = () => {
    setShowButton(true);
  };

  //get journal data to displayby userid in here display all jouranls according to that person
  
  useEffect(() => {
  const getJournals = async () => {
    try {
      const userid = '214102J';
      const journalArray = await axios.get(`http://192.168.43.51:3000/journal/getJournal-byid/${userid}`);
      setJournalDisplay(journalArray.data);
    } catch(error) {
      console.log(error);
    }
  };

  getJournals();
}, [journalDisplay]);




    const renderJournalItem = ({ item,index }) => {

      let mood = '';
      
      if(item.emoji === 10){
         mood = '😊';
      }
      if(item.emoji === 20){
        mood = '😢';
      }
      if(item.emoji === 30){
        mood = '😡'
      }
      if(item.emoji === 40){
        mood = '😍';
     }
     if(item.emoji === 50){
       mood = '😱';
     }
     if(item.emoji === 60){
       mood = '😐'
     }
     if(item.emoji === 70){
      mood = '😴';
    }
    if(item.emoji === 80){
      mood = '🤒'
    }

      return(

      <View style={styles.container}>
      <View style={styles.journalItem}>
        
        <View style={styles.emgTittle}>

       <Text style={styles.journalTittle}>{item.tittle}</Text>
       

       <Text style ={styles.emg}>{mood}</Text>

        </View>
        <Text style={styles.journalText}>{item.journalEntry}</Text>
      </View>
      </View>
    )
    };

    const renderHiddenItem = ({ item, index }, rowMap) => {

      let mood = '';
      
      if(item.emoji === 10){
         mood = '😊';
      }

      return(

      
      
      <View style={styles.buttonContainer}>
        
        <EditDeletebutton //edit and delete button , call the handleEditPress in editFunction
        item = {item._id}
        itemText={item.text}
        itemTittle={item.tittle}
        itemEmoji={mood}
        editFunction={(itemID,itemTittle, itemText,itemEmoji) => handleEditPress(itemID, itemTittle, itemText,itemEmoji)} />
      </View>
    )
      };

  

  return (
    
    <SwipeListView style={{height:340}}

    data={journalDisplay}
    keyExtractor={(item) => item._id}
    renderItem={renderJournalItem}

    onSwipeOpen={handleSwipe}
    onSwipeClose={() => setShowButton(false)}
   
    renderHiddenItem={renderHiddenItem}
    leftOpenValue={0}
    rightOpenValue={-65}
  />

);
};


const styles = StyleSheet.create({

  buttonContainer: {
    
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
