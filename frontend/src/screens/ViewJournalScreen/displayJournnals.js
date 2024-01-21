import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { SwipableList } from './viewInputJournal';

export const JournalList = () => {
  const inputJournals = [

    { id: '1', text: 'Feeling Positive today!🌸. I am grateful for the supportive phone call today, I had with my best friend😊❤️.' },
    
    



  

    // Add more journal entries as needed
  ];

  const renderJournalItem = ({ item }) => (
    <View style={styles.journalItem}>
      <Text style={styles.journalText}>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={inputJournals}
      keyExtractor={(item) => item.id}
      renderItem={renderJournalItem}
    />
  );
};

const styles = StyleSheet.create({
  journalItem: {
    padding: 15,
    backgroundColor:'#FFFFFF',
    width:286,
    height:127,
    alignItems:'flex-end',
    alignSelf:'flex-end',
    borderRadius:20,
    marginBottom:15,
    // color:'#101318',
    // fontWeight:'1000',
    // lineHeight:10


    

  },

  journalText:{
    color:'#101318',
    fontWeight:'300',
    lineHeight:25,
  }
});


