import React from 'react'
import { View, Text, Image, onPress, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'


const MakeAppointment = () => {
  const dateList = [
    {id:1, date:'17 \n Mon'},
    {id:2, date:'18 \n Tue'},
    {id:3, date:'19 \n Wed'},
    {id:4, date:'20 \n Thur'},
    {id:5, date:'21 \n Fri'},
    {id:6, date:'22 \n Sat'},
    {id:7, date:'23 \n Sun'}
  ];
  const DateCard = (props) => { 
	
    return( 
        <ScrollView style={styles.cardBox}>
          <TouchableOpacity onPress={() => handledatePress(props.date)}>
            <View style={styles.cardcontainer}>
              <Text style={styles.date}>{props.date}</Text>
            </View>
          </TouchableOpacity> 
        </ScrollView>
    ) 
  }

    const timeList = [
      {id:1, time:'5.00PM'},
      {id:2, time:'5.30PM'},
      {id:3, time:'6.00PM'}, 
      {id:4, time:'6.30PM'},
      {id:5, time:'7.00PM'},
      {id:6, time:'7.300PM'},
    ];
    
    const TimeButton = (props) => { 
      return(

      <TouchableOpacity onPress={() => handleTimePress(props.time)}>
        <View style={styles.Tbutton}>
        <Text style={styles.time}>{props.time}</Text>
        </View> 
      </TouchableOpacity> 
      )
    } 
  
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
            renderItem={({item}) => {
              return(
                <>
                <DateCard
                date={item.date}/>
                </>
              )
              
            }} keyExtractor={ (item, id) => item.id.toString()} horizontal />           
            
            <Text style = {styles.title}>Available Time Slot{'\n'}</Text>

            <FlatList data={timeList} 
            renderItem={({item, id}) => {
              return(
                <>
                {item.id%3==0 && (
                <TimeButton
                time={item.time}/>
              )}
                </>
              )
              
            }} 

            keyExtractor={ (item) => item.toString()} vertical/>

        
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Make an appointment</Text>
            </TouchableOpacity>
                    
        </SafeAreaView>
      </ScrollView>
    )
}


export default MakeAppointment