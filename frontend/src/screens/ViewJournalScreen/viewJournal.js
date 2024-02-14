import React, { useState } from "react";
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, SafeAreaView, TextInput, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./viewStyles";
import { CustomButtonView } from "./viewSwitch";
import { Calendar } from "./calender";
import { SwipableList} from "./viewInputJournal";
import { FloatingButton} from "./floatingButton";

import TabBar from "../../components/TabBar/TabBar";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import { createStackNavigator } from '@react-navigation/stack';





export const ViewJournal = ({navigation}) =>{

    const stack = createStackNavigator();

    const handleButton = () =>{
    navigation.navigate('JournalStatistics',{

  }); 
    }

    const handleFlotingPointButton = () =>{
        navigation.navigate('AddNewJournal',{

        })
    }

    const handleEditButton = (itemID,itemTittle,itemText,itemEmoji) =>{
      navigation.navigate('EditJournal',{
        itemID,
        itemTittle,
        itemText,
        itemEmoji
        
        // navigation:navigate,

      });
    };



    return(
        <View>
            <HeaderSub
      headLine={"My Journals"}
      subHeadLine={"View your past journals"}
    />

       
        <SafeAreaView style={styles.container}>
    

      
        <CustomButtonView btnAnalysis={handleButton}></CustomButtonView>

        <View>
            <Calendar></Calendar>

            
          
            {/* <SwipableList editFunction={(itemID, itemText) => handleEditButton(itemID, itemText)}></SwipableList> */}
            <SwipableList editFunction={handleEditButton} style={{ marginTop: 24.5, backgroundColor: 'yellow' } }  />

        </View>

        </SafeAreaView>    


<FloatingButton btnCreate = {handleFlotingPointButton}></FloatingButton>

<View style={{ position: 'absolute', top:900, left: 0, right: 0 }}>
        <TabBar/>
      </View>


</View>


 );
};


