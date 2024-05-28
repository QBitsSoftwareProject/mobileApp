import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const MoodProgressBars = ({selectedEmoji,barHeight}) => {


    // console.log(barHeight);
    // console.log(barHeight);
   

    const[bheight,setBheight] = useState('');
    useEffect(() => {
        // Parse the barHeight string to a number
        const parsedHeight = parseFloat(barHeight);
        // Check if the parsedHeight is a valid number
        if (!isNaN(parsedHeight)) {
            setBheight(parsedHeight);
        }
    }, [barHeight])





    return (
        <View style={styles.progressBarsContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.selectedEmoji}>{selectedEmoji}</Text>
                <View style={[styles.progressBar, {  height: bheight || 0 }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    
    progressBarsContainer: {
       
        alignSelf: 'flex-end',
        // alignContent: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'yellow',
        marginLeft: 25,
        marginBottom:10,
        marginTop:-265
    },

    contentContainer: {
        alignItems: 'center',
        // justifyContent: 'center'
    },

    progressBar: {
        backgroundColor: '#4ABFB4', // Changed to a color for better visibility
        width: '100%', // Adjust the width of the progress bar as needed
        borderTopLeftRadius: 20, // Adjust the radius as needed
        borderTopRightRadius: 20,
         // Adjust the radius as needed
    },

    selectedEmoji: {
        fontSize: 22,
        fontWeight: 'bold',
        
 
    },
});

export default MoodProgressBars;
