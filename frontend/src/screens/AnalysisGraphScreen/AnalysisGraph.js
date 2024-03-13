import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, ScrollView, route, Image } from 'react-native';
import HeaderSubAnalysis from './HeaderAnalysis'
import MoodProgressBars from './Chart';
import { useRoute, useNavigation } from '@react-navigation/native';

const AnalysisGraph = () => {
    const[bHeight,setBHeight] = useState('');
    const[sadbHeight,setSadBHeight] = useState('');
    const[angryHeight,setAngryHeight] = useState(' ');
    const[sickHeight,setSickHeight] = useState('');
    const[sleepHeight,setSleepHeight] = useState('');
    const[nutralHeight,setNutralHeight] = useState('');
    const[scaredHeight,setScaredHeight] = useState('');
    const[happyHeight, setHappyHeight] = useState('');


    const route = useRoute();
    const { selectedEmoji, moodText, imageSource, moodIndex } = route.params;

    console.log(moodText);
    console.log(moodIndex);

    const navigation = useNavigation();

    const handleContiunePress = ()=>{
        console.log(selectedEmoji)
        navigation.navigate('MonthAnalysisScreen',{
            selectedEmoji: selectedEmoji,
            moodText: moodText,
            imageSource: imageSource,
            moodIndex: moodIndex
        })

    }

    

    useEffect(() => {
        if (moodIndex === 1) {
            // Incrementing the happyHeight and updating state
            setBHeight(prevHeight => prevHeight + 40);
        }
        else if(moodIndex === 2){
            setSadBHeight(prevHeight => prevHeight + 40);
        }
        else if(moodIndex === 3){
            setAngryHeight(prevHeight => prevHeight + 40);
        }
        else if(moodIndex === 4){
            setSickHeight(prevHeight => prevHeight + 40);
        }
        else if(moodIndex === 5){
            setSleepHeight(prevHeight => prevHeight + 40);
        }
        else if(moodIndex === 6){
            setNutralHeight(prevHeight => prevHeight + 40);
        }
        else if(moodIndex === 7){
            setScaredHeight(prevHeight => prevHeight + 40);
        }
        else if(moodIndex === 0){
            setHappyHeight(prevHeight => prevHeight + 40);
        }
    }, [moodIndex]);
    console.log(bHeight);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <HeaderSubAnalysis headLine={'Good Morning Sara'} subheadLine={'You are feeling '+  moodText + ' today'} />
                <View style={[styles.selectedEmojiContainer, { opacity: 0.2 }]}>
                    <Text style={styles.selectedEmojiLeft}>{selectedEmoji}</Text>
                    <Text style={styles.selectedEmojiRight}>{selectedEmoji}</Text>
                </View>
                <Text style={styles.selectedEmoji}>{selectedEmoji}</Text>
                <Text style={styles.moodText}>{moodText}</Text>
                <View style={styles.graphContainer}>
                    <Image style={styles.image} source={imageSource} />
                    <View style={styles.bar}>
                        <MoodProgressBars selectedEmoji={'😍'} barHeight = {bHeight} />
                        <MoodProgressBars selectedEmoji={'😢'} barHeight = {sadbHeight}/>
                        <MoodProgressBars selectedEmoji={'😡'} barHeight = {angryHeight}/>
                        <MoodProgressBars selectedEmoji={'🤒'} barHeight = {sickHeight}/>
                        <MoodProgressBars selectedEmoji={'😴'} barHeight = {sleepHeight}/>
                        <MoodProgressBars selectedEmoji={'😐'} barHeight = {nutralHeight} />
                        <MoodProgressBars selectedEmoji={'😱'} barHeight = {scaredHeight} />
                        <MoodProgressBars selectedEmoji={'😄'} barHeight = {happyHeight} />
                    </View>
                </View>
                <TouchableOpacity style={styles.continueButton} onPress={handleContiunePress}>
                <Text style={styles.continue}>Continue</Text>
            </TouchableOpacity>
            </ScrollView>
            
        </View>
    );
};

const styles = {
    selectedEmojiContainer: {
        flexDirection: 'row', // Arrange children horizontally
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 44,
        
        
    },
    selectedEmoji: {
        fontSize: 130,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: -180,
        
        
    },
    selectedEmojiLeft: {
        fontSize: 90,
        marginRight:20,
    },
    selectedEmojiRight: {
        fontSize: 90,
        marginLeft: 20,
    },
    moodText: {
        fontSize: 23,
        fontWeight: '300',
        color: '#40495B',
        alignSelf: 'center',
        marginTop: 10,
    },
    image: {
        width: 369,
        height: 280,
        marginTop: 10,
        alignSelf: 'center',
    },
    graphContainer: {
        position: 'relative',
    },
    bar: {
        flexDirection: 'row',
    },
    continueButton: {
        backgroundColor: '#FFFFFF' ,
        width: 250, // Set width to ensure the button spans the width of the screen
        height: 58, // Set height for the button
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        marginBottom:100,
        borderRadius:75,
        borderColor:'#4ABFB4',
        borderWidth:2
    },
    continue: {
        color: '#101318', // Set text color
        fontSize: 16, // Set font size
    },
};

export default AnalysisGraph;
