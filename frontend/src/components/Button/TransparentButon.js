import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

const TransparentButton = (props) => {
   
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={() => props.onPress()}>
                <Text style={styles.buttonText}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    button: {
        backgroundColor:'transparent',
        borderWidth:1,
        borderColor: '#3498db',
        padding: 10,
        margin:5,
        borderRadius: 20,
        alignItems: 'center',
      },
    buttonText: {
        color: '#101318',
        fontSize:18,
        fontWeight: '#400',
        textAlign:'center',
    
      },
    })


export default TransparentButton