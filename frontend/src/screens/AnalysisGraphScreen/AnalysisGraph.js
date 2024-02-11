import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, ScrollView, route, Image } from 'react-native';
import HeaderSub from '../../screens/MoodAnalysisScreen/Header';
import ChartComponent from './Chart';


import { useRoute } from '@react-navigation/native';


const AnalysisGraph = () =>{
    const route = useRoute();
    const { selectedEmoji, moodText, imageSource } = route.params;

    console.log(moodText)




  return (
        <View>
        <ScrollView>
        <HeaderSub headLine={'Good Morning Sara'}
         subheadLine={'You are feeling lovely today'}/>
         
         
         <View style={[styles.selectedEmojiContainer, { opacity: 0.2 }]}>
         <Text style={styles.selectedEmojiLeft}>{selectedEmoji}</Text>
         <Text style={styles.selectedEmojiRight}>{selectedEmoji}</Text>
         </View>
         <Text style={styles.selectedEmoji}>{selectedEmoji}</Text>

         <Text style={styles.moodText}>{moodText}</Text> 
         
         <View style={styles.graphContainer}>
         <Image style={styles.image} source={imageSource}/>
         <ChartComponent/>
         {/* <View style={styles.graphOverlay}>
              
            </View> */}
            

         
        </View>

        
         
         </ScrollView>
        </View>
    )
}

const styles = {
    selectedEmojiContainer: {
        flexDirection: 'row', // Arrange children horizontally
        alignItems: 'center',
        justifyContent:'center',
        marginTop:65,
        
         },
    selectedEmoji: {
    
      fontSize:130 ,
    //   backgroundColor:'red',
      alignItems: 'center',
      justifyContent:'center',
      alignSelf:'center',
      marginTop:-180
      
    },

    selectedEmojiLeft:{

        fontSize: 90,
        // backgroundColor:'green',
        marginRight:27.5
       
        
        
      },
    selectedEmojiRight:{
        fontSize: 90,
        // backgroundColor:'yellow',
        marginLeft:27.5
        
        
    },  moodText: {
        fontSize: 23,
        fontWeight: '300',
        color:'#40495B',
        alignSelf:'center',
        marginTop:10
    },
    image:{
      width:361,
      height:369,
      marginTop:10,
      alignSelf:'center',
      
    },

    graphContainer:{
      
      position:'relative',
    },
  //   graphOverlay: {
  //     position: 'absolute',
  //     top: -60,
  //     left: 0,
  //     right: 0,
  //     bottom: 0,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  // },


  };

export default AnalysisGraph;