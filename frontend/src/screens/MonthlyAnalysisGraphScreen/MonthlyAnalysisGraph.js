import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import MonthlyProgressBar from './Graph';
import CustomBarChart from './CustomBarChart';


import HeaderSubSug from '../SuggestionsScreen/HeaderSubSug';

const MonthlyAnalysisGraph = () => {

    const positiveMoods = ['😄', '😍', '😴']; // Add appropriate emojis for positive moods
    const negativeMoods = ['😢', '😡', '🤒', '😐', '😱']; // Add appropriate emojis for negative moods
   
    return(
<View>
    <HeaderSubSug 
    headLine="Monthly Analysis"
    subHeadLine="Track your monthly mood inputs"/>



                <View>
                    <Text style={styles.headerLine} >  Monthly Analysing report!! </Text>
                </View>


                <ScrollView horizontal>
                <View style={styles.container}>
                {/* <CustomBarChart positiveMoods={positiveMoods} negativeMoods={negativeMoods} /> */}
                <MonthlyProgressBar/>
               </View>
               </ScrollView>
               

</View>

    )};


    const styles = StyleSheet.create({
        headerLine:{
        fontSize: 25,
        fontWeight: '300',
        color: '#40495B',
        alignSelf: 'center',
        marginTop: 15,
      }, 
    //   barContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     marginTop: 20,
    // },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30
      },
    
    
    });
    
    
export default MonthlyAnalysisGraph;