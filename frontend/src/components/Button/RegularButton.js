import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const RegularButton = (props) => {
    
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
    width:'100%',
    height:50,
    backgroundColor: '#4A90BF', 
    borderRadius: 20,
    marginVertical:15,
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: '600'
  },
})

export default RegularButton