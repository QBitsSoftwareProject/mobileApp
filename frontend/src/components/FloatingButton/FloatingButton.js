import React from "react";
import { StyleSheet,TouchableOpacity, Image} from "react-native";


const FloatingButton = ({addNew}) =>{
    
    return (

       <TouchableOpacity
        
        style={styles.touchableOpacity} onPress={addNew}>
             <Image 
                style={styles.floatingbutton}
                source ={require('../../assets/images/NavigationIcons/SVGRepo_iconCarrier.png')}/>   

        </TouchableOpacity>
 
    )
}

const styles = StyleSheet.create({
    touchableOpacity:{
        position:'absolute',
        top:'82%',
        right:25,
    },
    floatingbutton:{

        resizeMode:'contain',
        width:62.5,
        height:62.5,
    }
})

export default FloatingButton;