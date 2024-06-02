import React, { useState , useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

//genarate the segmented buttons based on loops
export  const SplitButton = ({rateFunction}) => {
  const [pressedSegment, setPressedSegment] = useState(null);
  

  

  const handlePress = (segment) => {
    setPressedSegment(segment);
    // rateFunction(segment + 1);
    
  };

  const renderSegments = () => {
    const segments = [];
    for (let i = 0; i < 10; i++) {
        let index = i;
      segments.push(
        <TouchableOpacity
          key={i}
          
          style={[
            styles.segment,
            {
              backgroundColor:

                  pressedSegment !== null && i <= pressedSegment
                  ? '#4ABFB4' // color for pressed and preceding segments
                  : '#FFFFFF', // default color

                  borderTopLeftRadius: index === 0 ? 15 : 0,    //assign border radius for progress bar
                  borderTopRightRadius: index === 9 ? 15 : 0,
                  borderBottomLeftRadius: index === 0 ? 15 : 0,
                  borderBottomRightRadius: index === 9 ? 15 : 0,

            },

            

            


          ]}
          onPress={() => handlePress(i)}
        >
          <Text style={styles.segmentText}>{i + 1}</Text>
        </TouchableOpacity>
      );

      useEffect ( () => {
        if(pressedSegment === null){
          rateFunction(0);
        }else{
          rateFunction(pressedSegment + 1);
        }
      })

    }
    return segments;
  };

  return (
    <View style={styles.container}>
      {renderSegments()}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:25,
    flexDirection: 'row',
    marginBottom:32
  },
  segment: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 2,
    borderRadius: 0,
    
  },
  segmentText: {
    fontSize: 13,
    color: 'black',
    padding:5
  },
  outputText: {
    marginTop: 20,
    fontSize: 13,
    textAlign: 'center',
  },
});

