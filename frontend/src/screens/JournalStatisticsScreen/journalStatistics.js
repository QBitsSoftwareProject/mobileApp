import React, { useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView,Button,SafeAreaView,Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AnalysisSwitch } from './analysSwitch';
import styles, { Styles} from "../JournalStatisticsScreen/statisticsStyles";


export const JournalStatistics = ({navigation})=>{

    const stack = createStackNavigator();

    const handleJournalButton = () =>{
        navigation.navigate('ViewJournal',{
    
      }); 
        }


    return(


        <ScrollView>
        <SafeAreaView style={styles.container}>
        <View>
        <Text style={styles.header}>Health Journal</Text>

        <Image 
            style={styles.img}
            source ={require('../../assets/images/journal/healthJournal.png')}/>

            <AnalysisSwitch btnAnalysis={handleJournalButton}></AnalysisSwitch>

        <Text style={styles.tittle}>Journal Statistics</Text>
        </View>

        </SafeAreaView>
        </ScrollView>

    );
};

