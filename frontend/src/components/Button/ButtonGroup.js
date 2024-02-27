import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const ButtonGroup = (props) => {
    // const[selectedTab, setSelectedTab] = useState(0);

    const navigation=useNavigation();

    const  goList = () => {
        
        navigation.navigate('AvailableDoctors');
      };

      const goAppointment = () => {
        
        navigation.navigate('AppointmentStatus');
      };
      
    return(
        <View style={styles.button}>
            
            <TouchableOpacity style={{width:113.5, height:40, backgroundColor: props.type==='list' ? '#5296C5' : '#fff', borderRadius:25, justifyContent:'center',alignItems:'center'}}
             onPress={() => {
                // setSelectedTab(0)
                goList();
            }}>
                <Text style={{color: props.type==='list' ?'#fff' : '#000', fontSize:18, fontWeight:'700'}}>List</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width:113.5, height:40, backgroundColor:props.type==="status" ? '#5296C5' : '#fff', borderRadius:25, justifyContent:'center',alignItems:'center'}} 
            onPress={() => {
                // setSelectedTab(1)
                goAppointment();
            }}>
                <Text style={{color:props.type==="status" ?'#fff' : '#000', fontSize:18, fontWeight:'700'}}>Appointment</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create ({
    button:{
        width:227, 
        height:40, 
        backgroundColor:'#fff', 
        borderRadius:25, 
        flexDirection:'row', 
        alignSelf:'center'
    }
})

export default ButtonGroup