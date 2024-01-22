import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const CalendarDay = ({ day, color }) => {
  return (
    <View style={[styles.calendarDay, { backgroundColor: color }]}>
      <Text style={styles.calendarDayText}>{day}</Text>
    </View>
  );
};

export const Calendar = () => {
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  // Placeholder data for shades of blue and green
  const colors = ['#5296C5', '#4ABFB4', '#E7E7E7', '#4ABFB4', '#5296C5', '#4ABFB4', '#E7E7E7'];

  return (
    <View style={styles.container}>
      <View style={styles.daysOfWeekContainer}>
        {daysOfWeek.map((day, index) => (
          <Text key={index} style={styles.dayOfWeekText}>
            {day}
          </Text>
        ))}
      </View>

      <View style={styles.calendarContainer}>
        {[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(
          (date, index) => (
            <CalendarDay key={index} day={date} color={colors[index % colors.length]} />
          )
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:5,
    backgroundColor: '#F2F3F5',
  },
  daysOfWeekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dayOfWeekText: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom:1,
    marginTop:23,
    paddingLeft:20,
    paddingRight:20

  },
  calendarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  calendarDay: {
    width: 43,
    height: 39,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 9,
    marginHorizontal:3
    
  },
  calendarDayText: {
    color: '#101318',
    fontSize: 10,
  },
});


