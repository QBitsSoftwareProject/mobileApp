import React, { useState } from "react";
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, SafeAreaView, TextInput, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./viewStyles";
import { CustomButtonView } from "./viewSwitch";
import { Calendar } from "./calender";
import { SwipableList} from "./viewInputJournal";
import { FloatingButton} from "./floatingButton";
import { createStackNavigator } from '@react-navigation/stack';





export const ViewJournal = ({navigation}) =>{

    const stack = createStackNavigator();

    const handleButton = () =>{
    navigation.navigate('JournalStatistics',{

  }); 
    }



    return(
        <View>
        <ScrollView>
        <SafeAreaView style={styles.container}>
        <Text  style={styles.header} >My Journals</Text>
        <Text style={styles.subHeader}>View your past journals</Text>

        <CustomButtonView btnAnalysis={handleButton}></CustomButtonView>

        <Calendar></Calendar>

        
        <SwipableList></SwipableList>
        <SwipableList></SwipableList>
        <SwipableList></SwipableList>
        <SwipableList></SwipableList>
        <SwipableList></SwipableList>

    


    </SafeAreaView>
    </ScrollView>
    


<FloatingButton></FloatingButton>
</View>




    );
};


