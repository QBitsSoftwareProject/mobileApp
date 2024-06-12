import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView ,Image} from 'react-native';

const DayAndTime = ({ day , setTimeSlots,timeSlots}) => {
  const [textStart, setTextStart] = useState('');
  const [textEnd, setTextEnd] = useState('');
  

  

  const handleTime = (start, end) => {
    let time = `${start} - ${end}`;
    return time;
  };

  const removeTimeSlot = (index) => {
    const newTimeSlots = timeSlots.filter((_, i) => i !== index);
    setTimeSlots(newTimeSlots);
  };

  const handleOkBtn = () => {

    if(textStart && textEnd){
    const finalTime = handleTime(textStart, textEnd);
    setTimeSlots([...timeSlots, finalTime]);
    setTextStart('');
    setTextEnd('');
  }else{
    alert("fill the time slots"); 
  }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={{ fontSize: 18 }}>{day}</Text>
        </View>

        <View style={styles.right}>
          <View style={styles.rightUp}>
            <View style={styles.rightLeft}>
              <TextInput
                style={{
                    height: "100%",
                  paddingHorizontal: 10,
                  fontSize: 14,
                  width: '100%',
                  borderWidth: 1,
                  borderColor:'#4A90BF',
                  borderBottomColor: '#9E9D9D',
                  backgroundColor:'white',
                  borderRadius:15
                }}
                placeholder="08.00AM"
                placeholderTextColor="#E4E5E6"
                onChangeText={setTextStart}
                value={textStart}
              />
            </View>

            <View style={styles.rightMiddle}>
              <TextInput
                style={{
                    height: "100%",
                  paddingHorizontal: 10,
                  fontSize: 14,
                  width: '100%',
                  borderWidth: 1,
                  borderColor:'#4A90BF',
                  borderBottomColor: '#9E9D9D',
                  backgroundColor:'white',
                  borderRadius:15,
                  marginLeft:1.5
                }}
                placeholder="03.00PM"
                placeholderTextColor="#E4E5E6"
                onChangeText={setTextEnd}
                value={textEnd}
              />
            </View>

            <View style={styles.rightRight}>
              <TouchableOpacity
                style={{
                  height: "100%",
                  
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={handleOkBtn}
              >
                <Image
                source={require('../../assets/images/TimeSlot/add.png')}
                style = {{width:30,height:30}}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
          
            
            

          <View style={styles.rightBottom}>
          
            <ScrollView>
            {timeSlots.length > 0 ? (
                timeSlots.map((slot, index) => (
                  <View key={index} style={styles.rightBottomLeft}>
                    <View
                      style={{
                        
                        backgroundColor: 'white',
                        borderRadius:15,
                        borderWidth: 1,
                        borderColor:'#4ABFB4',
                        borderBottomColor: '#9E9D9D',
                        paddingTop: 10,
                        paddingBottom: 10,
                        marginBottom: 5,
                        width:'100%'
                      }}
                    >
                      <Text style={styles.timeSlot}>{slot}</Text>
                    </View>
                    <TouchableOpacity onPress={() => removeTimeSlot(index)}>
                    <Image
                source={require('../../assets/images/TimeSlot/remove2.png')}
                style = {{width:30,height:30, marginLeft:22,marginTop:3}}
                ></Image>
                    </TouchableOpacity>
                  </View>
                ))
              ) : (
                <>
                <View style ={{paddingVertical:30, alignItems:'center'}}>
                <Text style ={{fontSize:16, color:'gray'}}>Not Available Time Slot</Text>
                </View>
                </>
              )}

            </ScrollView>
            

            

          </View>
          
        </View>
      </View>
    </View>
  );
};

export default DayAndTime;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
   height:150,
   marginTop:20
  },
  left: {
    flex: 2,
    alignItems: 'center',
  },
  rightUp: {
    flexDirection: 'row',
    flex: 1,
    marginBottom:15
  },
  rightBottom: {
    flex: 2,
    
  },
  right: {
    flexDirection: 'column',
    flex: 3,
  },
  rightLeft: {
    flex: 3,
  },
  rightMiddle: {
    flex: 3,
  },
  rightRight: {
    flex: 2,
  },
  rightBottomLeft: {
    flexDirection: 'row',
    width: 160,
  },
  timeSlot: {
    width: 160,
    marginHorizontal: 15,
  },
});
