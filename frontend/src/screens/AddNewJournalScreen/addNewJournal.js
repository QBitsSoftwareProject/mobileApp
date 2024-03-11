import React, {useState} from "react";
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, SafeAreaView, TextInput, Button, } from "react-native";
import { EmojiPicker } from "./emoji";
import styles from "../AddNewJournalScreen/styles";
import { CustomButton } from "./switch";
import { JournalTittle } from "./journalTittle";
import { JournalEntry } from "./journalEntry";

import {Overlay} from "./AddNewPopup";
import TabBar from "../../components/TabBar/TabBar";
import HeaderSub from "../../components/HeaderSub/HeaderSub";





export const AddNewJournal = ({navigation}) =>{

      

const [isOverlayVisible, setOverlayVisible] = useState(false);
const [selectedEmojiMarks, setSelectedEmojiMarks] = useState('');

        const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
       };

      const handleViewButton = () =>{
      navigation.navigate('ViewJournal',{ 

    }); 


}

const handleEmojiPress = ({ emoji, mark }) => {
      setSelectedEmojiMarks((prevMarks) => prevMarks + `${emoji}(${mark})`);

      console.log(mark);
  };
  

    return(
      <View>
<HeaderSub

      headLine={"Add New Journal"}
      subHeadLine={"Wellcome to our mindful haven"}
      back={'ViewJournal'}
/>

<CustomButton btnView={handleViewButton}></CustomButton>


        <ScrollView height = {500}>
   
       <SafeAreaView style={styles.container}>

        



        <Text style={styles.Text}>Feeling with...</Text>

        <EmojiPicker onEmojiPress={handleEmojiPress} />

        <Text style={styles.Text1}>Journal Tittle</Text>

        <JournalTittle/>

        <Text style={styles.Text2}>Write your journal</Text>

        <JournalEntry/>

 

<View>
      <TouchableOpacity style={styles.create} onPress={toggleOverlay}>
      <Text style={styles.createText}>Create Journal</Text>
      </TouchableOpacity>

      <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} propbtnfunction={handleViewButton} />
    </View>

   

      </SafeAreaView>

      </ScrollView>

<View style={{ position: 'absolute', top:900, left: 0, right: 0 }}>
<TabBar/>
</View>

</View>

    );



};

