import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const RegularButton = (props) => {
   
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={(onPress) => {}}>
                <Text style={styles.buttonText}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
button: {
    width:250,
    height:35,
    backgroundColor: '#4A90BF', 
    padding: 8,
    borderRadius: 15,
    marginVertical:15,
    alignSelf:'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: '600'
  },
})

export default RegularButton