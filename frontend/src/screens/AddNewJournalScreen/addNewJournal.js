import React from "react";
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, SafeAreaView, TextInput, Button } from "react-native";
import { EmojiPicker } from "./emoji";
import styles, { Styles} from "../AddNewJournalScreen/styles";
import { CustomButton } from "./switch";
import { JournalTittle } from "./journalTittle";
import { JournalEntry } from "./journalEntry";
import { createStackNavigator } from '@react-navigation/stack';



export const AddNewJournal = ({navigation}) =>{

    const buttonPress = () => {
        // Handle button press logic here
        console.log('Button pressed!');
        alert("your journal is ready");
      };

      const stack = createStackNavigator();

      const handleViewButton = () =>{
      navigation.navigate('ViewJournal',{

    }); 

}
  

    return(
        <ScrollView>
        <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Add New Journal</Text>
        <Text style={styles.subHeader}>Wellcome to our mindful haven</Text>



        <CustomButton btnView={handleViewButton}></CustomButton>

        <Text style={styles.Text}>Feeling with...</Text>

        <EmojiPicker />

        <Text style={styles.Text}>Journal Tittle</Text>

        <JournalTittle/>

        <Text style={styles.Text}>Write your journal</Text>

        <JournalEntry/>

        <TouchableOpacity style = {styles.create} onPress={buttonPress}>
        <Text style={styles.createText}>Create Journal</Text>
        </TouchableOpacity>

        

        

       

      </SafeAreaView>

      </ScrollView>

       

         



            

           
      

        

  
      
    );



};

