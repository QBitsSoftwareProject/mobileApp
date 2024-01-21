import React, { useState } from 'react'
import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import DateCard from '../../components/DateCard/DateCard'
import TimeButton from '../../components/TimeButton/TimeButton'
import PopupMessage from '../../components/Pop-up/Pop-upScreen'
import RegularButton from '../../components/Button/RegularButton'


const MakeAppointment = () => {
  const [numColumns, setNumColumns] = useState(2);

  const dateList = [
    {id:1, date:'17 \n Mon'},
    {id:2, date:'18 \n Tue'},
    {id:3, date:'19 \n Wed'},
    {id:4, date:'20 \n Thur'},
    {id:5, date:'21 \n Fri'},
    {id:6, date:'22 \n Sat'},
    {id:7, date:'23 \n Sun'}
  ];

    const timeList = [
      {id:1, time:'5.00PM'},
      {id:2, time:'5.30PM'},
      {id:3, time:'6.00PM'}, 
      {id:4, time:'6.30PM'},
      {id:5, time:'7.00PM'},
      {id:6, time:'7.300PM'},
      {id:5, time:'7.00PM'},
      {id:6, time:'7.300PM'},
    ];

  const [popupMessage, setPopupMessage] = useState('');

  const showMessage = (message) => {
    setPopupMessage(message);
  };

  const closeMessage = () => {
    setPopupMessage('');
  };
    
    return(
      <ScrollView>
        <SafeAreaView style={{margin:25}}>

            <View>
             <Text style={styles.header}>Dr. B.M. Weerasinghe.</Text>
             </View>
                
                <View style = {styles.boxcontainer}>
                  
                  <View>
                    <Image source={{uri:'https://www.hollywoodreporter.com/wp-content/uploads/2015/01/kit_harrington.jpg?w=3000'}}
                    style = {styles.Image}/>
                  </View>
                  
                  <View style = {styles.description}>  
                    <Text>MBBS, University of Colombo.{'\n'} {'\n'}
                        RED NO - 234589{'\n'}{'\n'}
                        Anuradhapura Genaral Hospital.{'\n'}
                    </Text>
                  </View>

                </View>
                
            <Text style = {styles.title}>About{'\n'}</Text>

            <Text style = {styles.titledescription}>
            Experienced Psychiatrist with 8+ years of experience providing compassionate,
            patient-centered mental health care to a diverse population of adults and adolescents.
            A highly organized and detail-oriented professional who is committed to providing 
            the highest level of care to all patients.
            </Text>

            <Text style = {styles.title}>Select Date{'\n'}</Text>
   
            <FlatList data={dateList} 
            renderItem={({item}) => (
                <DateCard
                date={item.date}/>
            )} 
            
            keyExtractor={ (item, index) => item.id.toString()} horizontal />           
            
            <Text style = {styles.title}>Available Time Slot{'\n'}</Text>

            <FlatList data={timeList} 
            numColumns={3}
              renderItem={({item, index}) => {
              
              return <TimeButton
              time={item.time}/>
              
            }} 

            keyExtractor={ (item) => item.toString()} vertical/>

        <View style={{marginBottom:60}}>
            {/* <TouchableOpacity style={styles.button} onPress={() => showMessage("Do you confirm")}>
                <Text style={styles.buttonText}>Make an appointment</Text>
            </TouchableOpacity> */}

            <RegularButton name = {"Make an appointment"} onPress={() => showMessage("Do you confirm")}></RegularButton>
         
            <PopupMessage message={popupMessage} onClose={closeMessage} />
        </View>
           
        </SafeAreaView>
      </ScrollView>
    )
}


export default MakeAppointment