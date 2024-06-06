import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { Dimensions } from 'react-native';

const ProgressBar = ({qNumber, length}) => {
    const windowWidth = Dimensions.get('window').width;
    const barWidth = (qNumber/length) * windowWidth - 50;

  return (
    <View>
        <View>
            <View style={styles.backBar}>
                <View style={[styles.frontBar, {width:barWidth}]}></View>
            </View>
        </View>
        
        <Text style={styles.progressTxt}>Questions {qNumber} of {length}</Text>
    </View>
  )
}

export default ProgressBar