import React, { useState } from 'react';
import Question from './src/screens/StressLevelAssessmentQuestions/StressLevelQuestions';
import DisplayResultScreen from './src/screens/ResultScreen/displayResult';
import StressLevelHistoryScreen from './src/screens/StressLevelHistory/stresslevelhistory';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from 'react-native';

const Stack = createNativeStackNavigator();


export default function App() {
    return (

        <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Question"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Question" component={Question} />
          <Stack.Screen name="DisplayResultScreen" component={DisplayResultScreen} />
          <Stack.Screen name="StressLevelHistoryScreen" component={StressLevelHistoryScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>




        
    
    );
  
}
