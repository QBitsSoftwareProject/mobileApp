import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import DateCard from '../../components/DateCard/DateCard'
import TimeButton from '../../components/TimeButton/TimeButton'
import PopupMessage from '../../components/Pop-up/Pop-upScreen'
import RegularButton from '../../components/Button/RegularButton'
import { useNavigation } from '@react-navigation/native'

const MakeAppointment = () => {

  const [numColumns, setNumColumns] = useState(2); // Number of columns for layout
  const [ timeBtnpress, setTimebtnPress] = useState(false) // State to track time button press
  const [dateBtnPress, setDateBtnPress] = useState(false) // State to track date button press
  const [popupMessage, setPopupMessage] = useState(''); // State for popup message

  // Mock data for date and time slots
  const dateList = [
    {id:1, date:'17',  month:'Mon'},
    {id:2, date:'18',  month: 'Tue'},
    {id:3, date:'19',  month: 'Wed'},
    {id:4, date:'20',  month: 'Thur'},
    {id:5, date:'21',  month: 'Fri'},
    {id:6, date:'22',  month: 'Sat'},
    {id:7, date:'23',  month: 'Sun'}
  ];

    const timeList = [
      {id:1, time:'5.00PM'},
      {id:2, time:'5.30PM'},
      {id:3, time:'6.00PM'}, 
      {id:4, time:'6.30PM'},
      {id:5, time:'7.00PM'},
      {id:6, time:'7.300PM'},
    ];

  // Hook for navigation  
    const navigation=useNavigation();
    
    const showMessage = (message) => {
      setPopupMessage(message);
    };

    const confirmMessage = () => {
      navigation.navigate('AppointmentStatus');
    };
  
    const closeMessage = () => {
      setPopupMessage('');
    };

    const goBack = () => {
      navigation.navigate('AvailableDoctors')
    };
    
    return(
      
        <SafeAreaView style={{margin:25}}>
            
            <View style={{marginBottom:20}}>
              <TouchableOpacity style={styles.backBtn} onPress={goBack}> 
                  <Image source={require(('../../assets/images/BackBlack.png'))}/>
              </TouchableOpacity>
            </View>
            
            <ScrollView>

                {/* Doctor details */}
                <View style={styles.headerBox}>
                  <Text style={styles.header}>Dr. B.M. Weerasinghe</Text>
                </View>

                <View style = {styles.boxcontainer}>
                      
                      <View>
                        <Image source={{uri:'https://www.hollywoodreporter.com/wp-content/uploads/2015/01/kit_harrington.jpg?w=3000'}}
                        style = {styles.Image}/>
                      </View>
                      
                      <View style = {styles.description}>  
                        <Text style={styles.docDetails}>MBBS, University of Colombo.</Text>
                        <Text style={styles.docDetails}>RegNo: 158764258</Text>
                        <Text style={styles.docDetails}>Anuradhapura Genaral Hospital.</Text>
                      </View>

                </View>
                
                <View style={{marginBottom:20}}>   
                    <Text style = {styles.title}>About</Text>

                    <Text style = {styles.titledescription}>
                    Experienced Psychiatrist with 8+ years of experience providing compassionate,
                    patient-centered mental health care to a diverse population of adults and adolescents.
                    A highly organized and detail-oriented professional who is committed to providing 
                    the highest level of care to all patients.
                    </Text>
                </View> 


              {/* Date selection */}  
                <View style={{marginBottom:20}}>
                    <Text style = {styles.title}>Select Date{'\n'}</Text>
                    
                    <View style={{ flexDirection: 'row' }}>
                    {dateList.map((item, index) => (
                      <View key={item.id} style={{ paddingBottom: 10}}>
                        <DateCard key={index} date={item.date} month={item.month} indexKey={index} press={setDateBtnPress} change={dateBtnPress}/>
                      </View>
                      ))}
                    </View>          
                </View> 
              
              
              {/* Time selection */}
                <View style={{marginBottom:20}}>
                    <Text style = {styles.title}>Available Time Slot{'\n'}</Text>
                  
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                      {timeList.map((item, index) => (
                        <TimeButton key={index} time={item.time} indexKey={index} press={setTimebtnPress} change={timeBtnpress}/>
                      ))}
                    </View>
                </View>


                <View style={{marginBottom:150}}>
                    <RegularButton name = {"Make an appointment"} onPress={() => showMessage("Do you confirm???")}></RegularButton>
              
              {/* Popup message */}  
                    <PopupMessage message={popupMessage} onConfirm={confirmMessage} onClose={closeMessage} />
                </View>
            </ScrollView> 
        
        </SafeAreaView>

    )
}


export default MakeAppointment