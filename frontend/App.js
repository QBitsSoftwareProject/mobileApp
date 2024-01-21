import React, { useState } from 'react';
import NavContainer from './src/navigation/navigationContainer/NavContainer';
import { View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AddNewJournal } from './src/screens/AddNewJournalScreen/addNewJournal';
import {ViewJournal} from './src/screens/ViewJournalScreen/viewJournal';
import {JournalStatistics} from './src/screens/JournalStatisticsScreen/journalStatistics';


const Stack = createNativeStackNavigator();


export default function App() {
    return (
        // <View style={{flex:1}}>
        //     <NavContainer/>
           
        // </View>

        <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AddNewJournal"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="AddNewJournal" component={AddNewJournal} />
        <Stack.Screen name="ViewJournal" component={ViewJournal} />
        <Stack.Screen name="JournalStatistics" component={JournalStatistics}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  </GestureHandlerRootView>
    
    );
  
}
