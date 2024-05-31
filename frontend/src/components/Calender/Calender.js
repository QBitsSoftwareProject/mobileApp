// import React, { useMemo, useRef, useState } from 'react'
// import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback} from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import moment from 'moment'
// import Swiper from 'react-native-swiper'

// const {width} = Dimensions.get('screen')

// const Calender = () => {

//   const [value, setValue] = useState(new Date());
//   const [week, setWeek] = useState(0);
//   const weeks = useMemo(() => {
//     const start = moment(start).add(week, 'weeks').startOf ('week');
//       return [-1, 0, 1].map(adj => {
//         return Array.from({length:7}).map(( _, index) => {
//           const date = moment (start).add(adj, 'week').add(index, 'day');

//           return {
//             weekday: date.format('add'),
//             date: date.toDate(),
//           }
//         })
//       })
//     }, [week]);
    
//   const swiper = useRef();
  
//   return (
//       <SafeAreaView style={{flex:1}}>
//         <View style={styles.container}>
//           <View style={styles.header}>
//             <Text style={styles.title}>Available Date</Text>
//           </View>
          
//           <View style={styles.picker}>
//             <Swiper 
//             index={1} 
//             ref={swiper} 
//             showsPagination={false} 
//             loop={false} 
//             onIndexChanged={ind => {
//               if(ind === 1) {
//                 return;
//               }

//               setTimeout(() => {
//                 const newIndex = ind - 1;
//                 const newWeek = week + newIndex;
//                 setWeek(newWeek);
//                 setValue(moment(value).add(newIndex, 'week').toDate());
//                 swiper.current.scrollTo(1, false);
//               }, 100);
//             }}>
//               {weeks.map((dates, index) => (
//               <View style={[styles.itemrow, {paddingHorizontal:16}]}
//               key={index}>
//               {dates.map ((item, dateIndex) => {
//                 const isActive = 
//                 value.toDateString() === item.date.toDateString();

//                 return (
//                   <TouchableWithoutFeedback 
//                   key={dateIndex}
//                   onPress={() => setValue(item.date)}>
//                     <View 
//                       style={[
//                         styles.item,
//                         isActive && {
//                           backgroundColor:'#111',
//                           borderColor:'#111'
//                         },
//                         ]}>
//                       <Text 
//                         style={[
//                           styles.itemweekday,
//                           isActive && {
//                             color:'#fff'
//                           },
//                           ]}>{item.weekday}</Text>
//                       <Text 
//                         style={[
//                           styles.itemdate,
//                           isActive && {color:'#fff'}
//                           ]}>{item.date.getDate()}</Text>
//                     </View>
//                   </TouchableWithoutFeedback>
//                 )
//               })}
//             </View>
//             ))}
//             </Swiper>
//           </View>
          
//         </View>
//       </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   paddingVertical: 24,
// },
// picker:{
//   flex:1,
//   maxHeight:74,
//   paddingVertical:12,
//   flexDirection:'row',
//   alignItems: 'center'
// },
// header: {
//   paddingHorizontal: 16,
// },

// title: {
//   fontSize: 32,
//   fontWeight: '700',
//   color:'#1d1d1d',
//   marginBottom: 12
// },
// itemrow: {
//   width,
//   flexDirection:'row',
//   alignItems: 'flex-start',
//   justifyContent: 'center',
//   marginHorizontal: 4

// },
// item: {
//   flex:1,
//   height: 50,
//   marginHorizontal: 4,
//   paddingVertical:6,
//   paddingHorizontal:4,
//   borderWidth:1,
//   borderColor:'#e3e3e3',
//   borderRadius: 8,
//   alignItems: 'center',
//   flexDirection:'column',
  
// },
// itemweekday: {
//   fontSize: 13,
//   fontWeight:'500',
//   color:'#737373',
//   marginBottom: 4
// },
// itemdate: {
//   fontSize: 15,
//   fontWeight: '600',
//   color: '#111'
// },
// } )
// export default Calender

