import React from "react";
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, SafeAreaView, TextInput, Button, Image} from "react-native";


export const FloatingButton = () =>{

    const clickHandler = () =>{
        alert('floating button pressed')
    }
    return(

       <View>
       <TouchableOpacity
        style={styles.touchableOpacity}
        
        onPress={clickHandler}>

            <Image 
            style={styles.floatingbutton}
            source ={require('../../assets/images/journal/floatingButton.png')}/>

            
        </TouchableOpacity>

        
        </View>
       
    )
}

const styles = StyleSheet.create({
    touchableOpacity:{
        position:'absolute',
        alignItems:'flex-end',
        alignSelf:'flex-end',
        right:30,
        bottom:60
        

    },
    floatingbutton:{
        
        resizeMode:'contain',
        width:65,
        height:65
    }
})