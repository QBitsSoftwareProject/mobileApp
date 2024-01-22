import React from "react";
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, SafeAreaView, TextInput, Button, Image} from "react-native";


export const FloatingButton = (props) =>{

    const clickHandler = () =>{
        alert('floating button pressed')
    }
    return(

       <View>
       <TouchableOpacity
        style={styles.touchableOpacity}
        
        onPress={props.btnCreate}>

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
        marginTop:-70
        
        
        

    },
    floatingbutton:{
        
        resizeMode:'contain',
        width:70,
        height:70
    }
})