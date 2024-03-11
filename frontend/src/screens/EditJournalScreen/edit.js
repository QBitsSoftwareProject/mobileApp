import React, {useState} from "react";
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, SafeAreaView, TextInput, Button, } from "react-native";
import { EmojiPicker } from "../AddNewJournalScreen/emoji";
import styles from "../AddNewJournalScreen/styles";
import { CustomButton } from "../AddNewJournalScreen/switch";
import { JournalTittle } from "../AddNewJournalScreen/journalTittle";
import { JournalEntry } from "../AddNewJournalScreen/journalEntry";
import { createStackNavigator } from '@react-navigation/stack';
import {Overlay} from "../EditJournalScreen/editPopup";
import TabBar from "../../components/TabBar/TabBar";
import HeaderSub from "../../components/HeaderSub/HeaderSub";






export const EditJournal = ({navigation, route,}) =>{
  const stack = createStackNavigator();
  const {itemID, itemTittle, itemText}=route.params;

    
    console.log(itemID);
    console.log(itemTittle);
    console.log(itemText);

const [isOverlayVisible, setOverlayVisible] = useState(false);

        const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
       };

   

      const handleViewButton = () =>{
      navigation.navigate('ViewJournal'); 

}
  

    return(
      <View>
<HeaderSub
      headLine={"Edit Journal"}
      subHeadLine={"Edit your journals"}
      back={'ViewJournal'}
/>

<CustomButton btnView={handleViewButton}></CustomButton>


        <ScrollView height = {500}>
   
       <SafeAreaView style={styles.container}>

        



        <Text style={styles.Text}>Feeling with...</Text>


        <EmojiPicker />

        <Text style={styles.Text1}>Journal Tittle</Text>

        <JournalTittle itemTittle={itemTittle}/>
       

        <Text style={styles.Text2}>Write your journal</Text>

        <JournalEntry itemtext={itemText}/>

        {/* <Text>{itemID}</Text>
        <Text>{itemText}</Text> */}
        

        

        {/* <TouchableOpacity style = {styles.create} onPress={toggleOverlay}>
        <Text style={styles.createText}>Create Journal</Text>
        </TouchableOpacity> */}

<View>
      <TouchableOpacity style={styles.create} onPress={toggleOverlay}>
      <Text style={styles.createText}>Edit Journal</Text>
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
