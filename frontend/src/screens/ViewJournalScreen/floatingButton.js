import React from "react";
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, SafeAreaView, TextInput, Button, Image} from "react-native";


export const FloatingButton = (props) =>{

    const clickHandler = () =>{
        alert('floating button pressed')
    }
    return(

       
       <TouchableOpacity
        style={styles.touchableOpacity}
        
        onPress={props.btnCreate}>

            <Image 
            style={styles.floatingbutton}
            source ={require('../../assets/images/journal/floatingButton.png')}/>

            
        </TouchableOpacity>

        
        
       
    )
}

const styles = StyleSheet.create({
    touchableOpacity:{
        position:'absolute',
        top:'85%',
        right:25
        
        
        

    },
    floatingbutton:{
        
        resizeMode:'contain',
        width:70,
        height:70
    }
})