import { TouchableOpacity, View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '../../screens/MakeAppointment/styles'

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

export default DateCard