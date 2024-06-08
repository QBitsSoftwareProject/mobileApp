import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import CustomBarChart from './CustomBarChart';
import HeaderSubSug from '../SuggestionsScreen/HeaderSubSug';
import { useNavigation } from '@react-navigation/native';



const MonthlyAnalysisGraph = () => {

    const navigation = useNavigation();


    const positiveMoods = ['😄', '😍', '😴']; // Add appropriate emojis for positive moods
    const negativeMoods = ['😢', '😡', '🤒', '😐', '😱']; // Add appropriate emojis for negative moods
    
    const handlePressButton = async () => {
        navigation.navigate('MoodAnaysisScreen');
    };
    


   
    return(
<View>
    <HeaderSubSug 
    headLine="Monthly Analysis"
    subHeadLine="Track your monthly mood inputs"/>



                <View>
                    <Text style={styles.headerLine} >  Monthly Analysing report 😍 </Text>
                </View>


                <ScrollView horizontal>
                <View style={styles.container}>
                <CustomBarChart positiveMoods={positiveMoods} negativeMoods={negativeMoods} />
                
                {/* <MonthlyProgressBar/> */}
                
               </View>
               <View>
               
               </View>
               </ScrollView>
               
               <TouchableOpacity style={styles.setMood} onPress={handlePressButton}>
        <Text style={styles.mood}>Set mood</Text>
      </TouchableOpacity>

</View>

    )};


    const styles = StyleSheet.create({
        headerLine:{
        fontSize: 22,
        fontWeight: '400',
        color: '#40495B',
        alignSelf: 'center',
        marginTop: 15,
        letterSpacing:1,
        backgroundColor:'white',
        padding:15,
        borderRadius:20
      }, 
    //   barContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     marginTop: 20,
    // },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:15
      },

      mood: {
        fontSize: 16,
    alignSelf: 'center',
        
      },
      setMood: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop:20,
        
        width: 150,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 75,
        borderColor: '#599CCA',
        borderWidth: 2,
      },
    
    
    });
    
    
export default MonthlyAnalysisGraph;