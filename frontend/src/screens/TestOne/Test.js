import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import {addDays, eachDayOfInterval, eachWeekOfInterval, format, subDays} from 'date-fns'
import PagerView from 'react-native-pager-view'



// const [value, setValue] = useState(new Date());
const dates = eachWeekOfInterval(
{
    start: subDays(new Date(), 14),
    end:addDays(new Date(), 14)
},
{
    weekStartsOn: 1,
},
).reduce((acc:Date[][], cur) => {
    const allDays = eachDayOfInterval({
        start:cur,
        end:addDays(cur, 6),
    });

    acc.push(allDays);
    return acc;
}, [])
const DateSlider= () => {
    return (
        <PagerView style={styles.container}>
            {dates.map((week, i) => {
               return (
               <View key={i}>
               <View style={styles.row}>
                    {week.map((day, j) => {
                      const isActive = 
                      value.toDateString() === item.date.toDateString();
                       const txt = format(day, 'EEEEE') ;

                       return (
                        <TouchableWithoutFeedback 
                        key={dateIndex}
                        onPress={() => setValue(item.date)}>
                          <View 
                            style={[
                              styles.item,
                              isActive && {
                                backgroundColor:'#111',
                                borderColor:'#111'
                              },
                              ]}>
                            <Text 
                              style={[
                                styles.itemweekday,
                                isActive && {
                                  color:'#fff'
                                },
                                ]}>{item.weekday}</Text>
                            <Text 
                              style={[
                                styles.itemdate,
                                isActive && {color:'#fff'}
                                ]}>{item.date.getDate()}</Text>
                          </View>
                        </TouchableWithoutFeedback>
                       )

                       return (
                        <View key={j}>
                        <View style={styles.day}>
                            <Text>{txt}</Text>
                            <Text>{day.getDate()}</Text>
                            </View>
                        </View>
                       );
                    })}
                    </View>
               </View> 
            );
            })}
        </PagerView>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        marginTop: 50
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    day: {
        alignItems:'center'
    }

})

export default DateSlider