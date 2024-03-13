import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
} from 'react-native';
import moment from 'moment';

import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

export const Calendar = ({onDateSelect}) => {
  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');

    return [-1, 0, 1].map(adj => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  const handleDateSelect = (date) => {
    setValue(date);
    setSelectedDate(date)
    if (onDateSelect){
      onDateSelect(date);
    }
  };

  return (
<View>
 <View style={styles.picker}>
    <View>
       <Swiper
            
        index={1}
        ref={swiper }
        loop={false}
        showsPagination={false}
        onIndexChanged={ind => {
         if (ind === 1) {
            return;
          }
              setTimeout(() => {
                const newIndex = ind - 1;
                const newWeek = week + newIndex;
                setWeek(newWeek);
                setValue(moment(value).add(newIndex, 'week').toDate());
                swiper.current.scrollTo(1, false);
              }, 100);
            }}>
            {weeks.map((dates, index) => (
              <View
                style={[
                  styles.itemRow,{paddingHorizontal: 16}
                  
                ]}
                key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive =
                    value.toDateString() === item.date.toDateString();
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => handleDateSelect(item.date)}>
                      <View
                        style={[
                          styles.item,
                          isActive && {
                            borderColor: '#4A90BF',
                          },
                        ]}>

                        <Text
                          style={[
                            styles.itemDate,
                            isActive && { color: '#5C677D' },
                          ]}>
                          {item.date.getDate()}
                        </Text>

                        <Text
                          style={[
                            styles.itemWeekday,
                            isActive && { color: '#5C677D' },
                          ]}>
                          {item.weekday}
                        </Text>

                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
          </View>
        
        </View>
          {/* display selected date below the calender */}
          {selectedDate && (
            <Text style={styles.selectedDate}>
                {moment(selectedDate).format('MMMM DD, YYYY')}
            </Text>
          )}
       </View>
      
  );
};

const styles = StyleSheet.create({

  picker: {
    // flex: 1,
    flexDirection: 'row',
    height:80,
    alignItems:'center',
    
    
  },
  item: {
    // flex: 1,
    height: 80,
    width: 38,
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    
    backgroundColor: 'white',
  },
  itemRow: {
    width: width,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  itemWeekday: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5C677D',
  },
  itemDate: {
    fontSize: 13,
    fontWeight: '600',
    color: '#5C677D',
    marginTop: 10,
    marginBottom: 11,
  },
  selectedDate: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: '300',
  
    alignSelf:'flex-end',
    marginBottom:15
  }
});


