import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Import useRoute
import Card from './card';
import HeaderSubSug from '../SuggestionsScreen/HeaderSubSug';


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
                headLine="Track your Mood"
                subHeadLine="Track, analyze, and understand your mood pattern and get suggestions"
            />

            <View style={{ paddingLeft: 24, paddingRight:24, paddingTop:15 }}>
            <Card
                imageSource={require('../../assets/images/analysisMood/moodInput.png')}
                title="Input your Mood 😍"
                subtitle="Let Your Emotions Paint the Canvas of Your Day!"
                onPress={inputYourMoodBtn}
            />
        </View>

        <View style={{ paddingLeft: 24, paddingRight:24, paddingTop:15 }}>
            <Card
                imageSource={require('../../assets/images/analysisMood/weeklyInputs.png')}
                title="Weekly input moods 📅 "
                subtitle="Track Your Mood Changes Weekly"
                onPress={inputYourMoodBtn}
            />
        </View>

        <View style={{ paddingLeft: 24, paddingRight:24, paddingTop:15 }}>
            <Card
                imageSource={require('../../assets/images/analysisMood/analysis.png')}
                title="Monthly analysis of your moods 📈 "
                subtitle="Track Your Mood Changes Weekly"
                onPress={inputYourMoodBtn}
            />
        </View>

        
        <View style={{ paddingLeft: 24, paddingRight:24, paddingTop:15}}>
            <Card
                imageSource={require('../../assets/images/analysisMood/suggestions.png')}
                title="Suggestions 💡 "
                subtitle="Track Your Mood Changes Weekly"
                onPress={inputYourMoodBtn}
            />
        </View>
            
        </View>
      
    );
};



export default MonthAnalysis;
