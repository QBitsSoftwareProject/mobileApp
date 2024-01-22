import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const GetMonthAndDate = ({ fulldate,color}) => {
  const dateObject = new Date(fulldate);

  if (isNaN(dateObject.getTime())) {
    // Check if the date is valid
    return <Text>Invalid Date</Text>;
  }

  const month = dateObject.getMonth() + 1; // Adding 1 because getMonth() returns a zero-based index
  const day = dateObject.getDate();

  let monthName = '';

  switch (month) {
    case 1 :
      monthName = 'Jan';

      break;

      case 2 :
        monthName = 'Feb';
  
        break;

      case 3 :
        monthName = 'Mar';
    
        break;

      case 4 :
        monthName = 'Apr';
    
        break;

      case 5 :
        monthName = 'May';
    
        break;

        case 6 :
          monthName = 'Jun';
    
          break;
    
          case 7 :
            monthName = 'Jul';
      
            break;
    
          case 8 :
            monthName = 'Aug';
        
            break;
    
          case 9 :
            monthName = 'Sep';
        
            break;
    
          case 10 :
            monthName = 'Oct';
        
            break;

            case 11 :
              monthName = 'Nov';
          
              break;

              case 13 :
                monthName = 'Dec';
            
                break;
    
          default:
            monthName = 'invalid month';
  }

  return (
    <View style={[styles.monthdate, { backgroundColor: color }]}>
      <Text style={styles.mdtext}>{`${monthName}`}</Text>
      <Text style={styles.mdtext}>{`${day}`}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  monthdate: {
    // backgroundColor:'#4ABFB4',
    height:49,
    width:53,
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,

  },

  mdtext:{
    
    alignSelf:'center',
    color:'white',
  }


});
