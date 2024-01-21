import React, { useState } from 'react';


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AddNewJournal } from '../../screens/AddNewJournalScreen/addNewJournal';
import {ViewJournal} from '../../screens/ViewJournalScreen/viewJournal';
import { View } from 'react-native';
import { JournalStatistics } from '../../screens/JournalStatisticsScreen/journalStatistics';

const Stack = createNativeStackNavigator();

// const HomeStack = ()=>{
//   return(
// <GestureHandlerRootView style={{ flex: 1 }}>
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="AddNewJournal"
//         screenOptions={{ headerShown: false }}
//       >
//         <Stack.Screen name="AddNewJournal" component={AddNewJournal} />
//         <Stack.Screen name="ViewJournal" component={ViewJournal} />
        
        
//       </Stack.Navigator>
//     </NavigationContainer>
//   </GestureHandlerRootView>
//   )
// }
// export default HomeStack;


const HomeStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='AddNewJournalScreen' component={AddNewJournal} />
      <stack.Screen name='ViewJournalScreen' component={ViewJournal} />
      <stack.Screen name='JournalStatistics' component={JournalStatistics} />

      
    </stack.Navigator>

    

  )
}

export default HomeStack