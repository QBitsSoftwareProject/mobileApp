import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native'
import React from 'react'


const DateCard = (props) => { 
	
    return( 
        <ScrollView style={styles.cardBox}>
          <TouchableOpacity onPress={() => handledatePress(props.date)}>
            <View style={styles.cardcontainer}>
              <Text style={styles.date}>{props.date}</Text>
            </View>
          </TouchableOpacity> 
        </ScrollView>
    ) 
  }

const styles = StyleSheet.create ({
    cardBox: {
      width:40,
      height:80,
      marginHorizontal:8,
      backgroundColor:"white",
      borderRadius:20,
      elevation:1,
    },
    
    date: {
      marginHorizontal:8,
      marginVertical:10,
      textAlign:'center',
      fontSize:12,
      fontWeight:'bold',
      color: '#7D8597',
      lineHeight:35
    },  
  }
)

export default DateCard