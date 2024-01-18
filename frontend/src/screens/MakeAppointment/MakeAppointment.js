import { View, Text, Image, onPress, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
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
           { props.children }	
        </ScrollView>
    ) 
  }

  const renderDateItem= ( {item} ) => (
  <TouchableOpacity onPress={() => handledatePress(item.date)}>
    <DateCard style={styles.cardcontainer}>
      <Text style={styles.date}>{item.date}</Text>
    </DateCard>
  </TouchableOpacity>  
);   

    const timeList = [
      {id:1, time:'5.00PM'},
      {id:2, time:'5.30PM'},
      {id:3, time:'6.00PM'}, 
      {id:4, time:'6.30PM'},
      {id:5, time:'7.00PM'},
      {id:6, time:'7.300PM'},
    ];
    const splitIndex = Math.floor(timeList.length / 2);
    const firstHalfTimeList = timeList.slice(0, 3);
    const secondHalfTimeList = timeList.slice(3,6);
    
    const TimeButton = (props) => { 
	
      return( 
          <View style={styles.Tbutton}>
             { props.children }	
          </View>
      ) 
    } 
    const renderTimeItem= ( {item} ) => (
     <TouchableOpacity onPress={() => handleTimePress(item.time)}>
          <TimeButton style={styles.Tbutton} onPress={onPress}>
          <Text style={styles.TbuttonText}>{item.time}</Text>
          </TimeButton> 
      </TouchableOpacity>
    );

    const keyExtractor = (item) => item.id;   
   
    return(
        <SafeAreaView>
            <View>
             <Text style={styles.title}>Dr. B.M. Weerasinghe.</Text>
             </View>
                
                <View style = {styles.container}>
                  
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
                
            
            <Text style = {styles.header}>About{'\n'}</Text>

            <Text style = {styles.headerdescription}>
            Experienced Psychiatrist with 8+ years of experience providing compassionate,
            patient-centered mental health care to a diverse population of adults and adolescents.
            A highly organized and detail-oriented professional who is committed to providing 
            the highest level of care to all patients.
            </Text>

            <Text style = {styles.header}>Select Date{'\n'}</Text>
   
            <FlatList data={dateList} renderItem={renderDateItem} keyExtractor={ (item) => item.toString()} horizontal />
         
            <Text style = {styles.header}>Available Time Slot{'\n'}</Text>

            <FlatList data={firstHalfTimeList} 
            // renderItem={({item, index})=>(
            //   <renderTimeItem/>
            //   {index%3==0 && (
            //     <View></View>
            //   )}
            //   )} 

            keyExtractor={ (item) => item.toString()} horizontal />

            {/* <FlatList data={secondHalfTimeList} renderItem={renderTimeItem} keyExtractor={ (item) => item.toString()} horizontal /> */}
           
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Make an appointment</Text>
            </TouchableOpacity>
                    
        </SafeAreaView>
    )
}


export default MakeAppointment