import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Import useRoute

import HeaderSubSug from '../SuggestionsScreen/HeaderSubSug';
import MoodLineGraph from '../MonthAnalysis/Graph';

const MonthAnalysis = () => {
    const route = useRoute();
    
   

    const navigation = useNavigation();

    const suggestionButton = ()=>{
        navigation.navigate('SuggestionsScreen')

    }


    const inputYourMoodBtn = () => {
        navigation.navigate('MoodAnaysisScreen');
    };

    return (
        <View>
            <HeaderSubSug
                headLine="Mood Analysis"
                subHeadLine="Track, analyze, and understand your mood patterns"
            />

            <View style={styles.container}>
                {/* Image column */}
                <View style={styles.column}>
                    <Image
                        source={require('../../assets/images/analysisMood/moodInput.png')}
                        style={styles.image}
                    />
                </View>

                {/* Title text column */}
                <View style={styles.middleColumn}>
                    <Text style={styles.title}>Input your Mood 😍!!</Text>
                    <Text style={styles.subtitle}>Let Your Emotions Paint the Canvas of Your Day!</Text>
                </View>

                {/* Button column */}
                <View style={styles.column}>
                    <TouchableOpacity style={styles.button} onPress={inputYourMoodBtn}>
                        <Image
                            source={require('../../assets/images/analysisMood/inputMood.png')}
                            style={styles.buttonImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.viewMood}>Your Past Month mood Analysis</Text>

            <Image
                source={require('../../assets/images/analysisMood/moods.png')}
                style={styles.moodImage}
            />

            {/* Pass selectedEmoji as a prop directly */}
            <MoodLineGraph  />

            <TouchableOpacity style={styles.suggestionButton} onPress={suggestionButton}>
                <Text style={styles.suggestion}>Suggestions</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Arrange items horizontally
        width: 343,
        height: 112, // Adjust as needed
        alignSelf: 'center',
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 16,
        marginLeft: 25,
        marginRight: 25,
        borderColor: '#4ABFB4',
        borderWidth: 2,
    },
    column: {
        flex: 1, // Each column takes up equal space
        alignItems: 'center', // Align items at the center horizontally
        justifyContent: 'center',
    },
    middleColumn: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    image: {
        width: 90, // Adjust width as needed
        height: 90, // Adjust height as needed
        marginLeft: 25,
    },
    title: {
        fontSize: 18,
        color: '#40495B',
        textAlign: 'left',
        marginTop: 10,
        justifyContent: 'flex-start',
    },
    subtitle: {
        fontSize: 12,
        color: '#5C677D',
        textAlign: 'center',
        marginTop: 3,
    },
    button: {
        marginTop: 20,
    },
    buttonImage: {
        width: 20, // Adjust width as needed
        height: 20, // Adjust height as needed
        marginTop: -15,
        marginLeft: 10,
    },
    moodImage: {
        width: 300,
        height: 150,
        marginLeft: 25,
        marginRight: 25,
        alignSelf: 'center',
        marginTop: 50,
        opacity: 0.1,
    },
    viewMood: {
        alignSelf: 'center',
        marginTop: 25,
        fontSize: 18,
        color: '#40495B',
    },
    suggestionButton:{
        width:250,
        height:58,
        backgroundColor:'white',
        borderRadius:75,
        justifyContent:'center',
        alignSelf:'center',
        borderColor:'#4ABFB4',
        borderWidth:2,
        marginTop:25
    },
    suggestion:{
        textAlign:'center',
        fontSize:15
    }

});

export default MonthAnalysis;
