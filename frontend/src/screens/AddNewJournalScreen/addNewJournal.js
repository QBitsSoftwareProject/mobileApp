import React, {useState} from "react";
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, SafeAreaView, TextInput, Button, } from "react-native";
import { EmojiPicker } from "./emoji";
import styles, { Styles} from "../AddNewJournalScreen/styles";
import { CustomButton } from "./switch";
import { JournalTittle } from "./journalTittle";
import { JournalEntry } from "./journalEntry";
import { createStackNavigator } from '@react-navigation/stack';
import {Overlay} from "./AddNewPopup";




export const AddNewJournal = ({navigation}) =>{

    // const buttonPress = () => {
    //     // Handle button press logic here
    //     console.log('Button pressed!');
    //     alert("your journal is ready");
    //   };
    const [isOverlayVisible, setOverlayVisible] = useState(false);

        const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
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

        <Text style={styles.Text1}>Journal Tittle</Text>

        <JournalTittle/>

        <Text style={styles.Text2}>Write your journal</Text>

        <JournalEntry/>

        {/* <TouchableOpacity style = {styles.create} onPress={toggleOverlay}>
        <Text style={styles.createText}>Create Journal</Text>
        </TouchableOpacity> */}

<View>
      <TouchableOpacity style={styles.create} onPress={toggleOverlay}>
      <Text style={styles.createText}>Create Journal</Text>
      </TouchableOpacity>

      <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} propbtnfunction={handleViewButton} />
    </View>

        

        

       

      </SafeAreaView>

      </ScrollView>

       

         



            

           
      

        

  
      
    );



};

