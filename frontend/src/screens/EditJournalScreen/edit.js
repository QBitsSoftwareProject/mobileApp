import React, {useState, useEffect} from "react";
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
import getJournal from "./fetchJournal";
import axios from "axios";



export const EditJournal = ({navigation, route,}) =>{
  const stack = createStackNavigator();
  const {itemID, itemTittle, itemText}=route.params;

  const [journalData,setJournalData] = useState({});
  const [selectedEmojiMarks, setSelectedEmojiMarks] = useState('');
  const [emoji, setEmoji] = useState('');
  const [date,setdate] = useState('');
  const [time,settime ]= useState('');

  const userid = '214102J'
  const imgUrl = 'This is image url';


const handleEditButton = async() =>{
      
  // update the journal
      if(!emoji){
           alert('Emoji is required');
      }

      if(!journalEntry){
            alert('Journal is required');
       }

            const currentDate = new Date();

            const formattedDate = currentDate.toLocaleDateString();
            const formattedTime = currentDate.toLocaleTimeString();

            setdate(formattedDate);
            settime(formattedTime);

            try{
                  const journalID = itemID;
                  const journalResponse = await axios.post(`http://192.168.43.51:3000/journal/update-journal/${journalID}`,{

                  userid,
                  emoji,
                  tittle:newtitle,
                  journalEntry:newentry,
                  imgUrl,
                  time: formattedTime, // Use the formatted time here
                  date: formattedDate
                        
                  });

                  if(journalResponse.data){
                        console.log('data updated');
                  }
            } catch (error) {
                  console.log('Error:', error);
                  // Handle the error here (e.g., display an error message)
                }

      
      console.log(emoji);
      console.log(tittle);
      console.log(journalEntry);
      console.log(date);
      console.log(time);
      console.log(userid);
      console.log(imgUrl);

     
      toggleOverlay();

  }
  // get the selected journal
  useEffect(() => {
      const getJournal = async () => {
        try {
          const journalID = itemID;
          const JournalData = await axios.get(`http://192.168.43.51:3000/journal/getJournal-byObjectId/${journalID}`);
          setJournalData(JournalData.data);
        } catch(error) {
          console.log(error);
        }
      };

      console.log(emoji);
      console.log(tittle);
      console.log(journalEntry);
      console.log(date);
      console.log(time);
      console.log(userid);
      console.log(imgUrl);

      
    
      getJournal();
    }, [journalData]);



const [tittle,setTittle] = useState('');
const [selectemoji,setSelectimoji] = useState('')
const [journalEntry,setjournalEntry] = useState('')
const [newentry,setNewEntry] = useState('');
const [newtitle,setNewtitle] = useState('');

useEffect(() => {

      // Update tittle with journalData.tittle, or an empty string if undefined
      setTittle(journalData.tittle || ''); 

      setSelectimoji(journalData.emoji || '')

      setjournalEntry(journalData.journalEntry || '')
      
    }, [journalData]);



const handleEmojiPress = ({ emoji, mark }) => {
      
  setSelectedEmojiMarks((prevMarks) => prevMarks + `${emoji}(${mark})`);
  setEmoji(mark);
      

};

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


        <EmojiPicker onEmojiPress={handleEmojiPress} imoji={selectemoji}/>

        <Text style={styles.Text1}>Journal Tittle</Text>

        <JournalTittle value = {tittle} newText = {setNewtitle}/>
       

        <Text style={styles.Text2}>Write your journal</Text>

        <JournalEntry value = {journalEntry}  newText = {setNewEntry}/>



<View>
      
      <TouchableOpacity style={styles.create} onPress={handleEditButton}>
      <Text style={styles.createText}>Edit Journal</Text>
      </TouchableOpacity>

      <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} propbtnfunction={handleViewButton} />
    </View>

     </SafeAreaView>
     </ScrollView>

<View style={{ top:10, left: 0, right: 0 }}>
<TabBar/>
</View>

</View>

    );
};

