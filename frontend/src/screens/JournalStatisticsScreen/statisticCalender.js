import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Text, ImageBackground } from 'react-native';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';
import moment from 'moment';

export const JournalCalendar = ({ setJournalArray }) => {
  const [markedDates, setMarkedDates] = useState({});
  const [journalEntries, setJournalEntries] = useState([]);
  const [selectedDate, setSelectedDate] = useState();

  const emojiData = [
    { emoji: '10', category: 'positive' },
    { emoji: '20', category: 'negative' },
    { emoji: '30', category: 'negative' },
    { emoji: '40', category: 'positive' },
    { emoji: '50', category: 'negative' },
    { emoji: '60', category: 'negative' },
    { emoji: '70', category: 'positive' },
    { emoji: '80', category: 'negative' }, 
  ];

  const getCategoryByEmoji = (emoji) => {
    const emojiEntry = emojiData.find(entry => entry.emoji === emoji.toString());
    return emojiEntry ? emojiEntry.category : 'unknown';
  };

  useEffect(() => {
    const getJournals = async () => {
      try {
        const userid = '214102J';
        const response = await axios.get(`http://192.168.43.51:3000/journal/getJournal-byid/${userid}`);
        const journalArray = response.data;

        const filteredData = journalArray.map(entry => ({
          date: moment(entry.date, 'DD-MMMM-YYYY').format('YYYY-MM-DD'),
          category: getCategoryByEmoji(entry.emoji)
        }));

        setJournalEntries(filteredData);

        const counts = {};
        filteredData.forEach(entry => {
          if (!counts[entry.date]) {
            counts[entry.date] = { positive: 0, negative: 0 };
          }
          counts[entry.date][entry.category]++;
        });

        // Calculate the difference and assign new category
        const markedData = {};
        for (const date in counts) {
          const diff = counts[date].positive - counts[date].negative;
          const newCategory = diff >= 0 ? 'positive' : 'negative';
          markedData[date] = {
            customStyles: {
              container: { backgroundColor: newCategory === 'positive' ? '#5296C5' : '#4ABFB4' ,
                           width:30,
                           height:30,
                           alignitem:'center'
  
              } // Blue for positive, Red for negative
              
            }
          };
          console.log(`Date: ${date}, Difference: ${diff}, Category: ${newCategory}`);
        }

        setMarkedDates(markedData);
      } catch (error) {
        console.log(error);
      }
    };

    getJournals();
  }, []);

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    console.log('Selected Date:', date.dateString);
  };

  const renderCustomHeader = (date) => {
    const headerDate = new Date(date);
    const day = headerDate.getDate();
    const month = headerDate.toLocaleString('default', { month: 'long' });
    const year = headerDate.getFullYear();
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{`${day} - ${month} - ${year}`}</Text>
      </View>
    );
  };

  // const getTodayDate = () => {
  //   const today = new Date();
  //   const day = today.getDate();
  //   const month = today.toLocaleString('default', { month: 'long' });
  //   const year = today.getFullYear();
  //   return `${day}, ${month}, ${year}`;
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/journal/positive2.png')}
        style={styles.backgroundImage}
        opacity={0.1} // Set the opacity of the background image
      
      >
        <Calendar
          style={styles.calendar}
          theme={{
            calendarBackground: 'transparent', // Set calendar background color to transparent
            textDayFontSize: 10,
            textDayFontWeight: '500',
            textMonthFontSize: 10,
            textDayHeaderFontSize: 14,
            textDayHeaderFontWeight: '500',
            textSectionTitleColor: '#5C677D', 
            
          }}
          onDayPress={handleDateSelect}
          markingType={'custom'}
          markedDates={markedDates}
          renderHeader={renderCustomHeader}
        />
      </ImageBackground>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
   
  },
  backgroundImage: {
    flex: 1,
    // resizeMode: 'center', // or 'stretch'
   
    

  },
  calendar: {
    flex: 1,
    backgroundColor: 'transparent', // Set calendar background color to transparent
  },
  // todayText: {
  //   fontSize: 16,
  //   textAlign: 'center',
  //   marginVertical: 10,
  // },
  // header: {
  //   // padding: 10,
  // },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default JournalCalendar;
