import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export  const SplitButton = () => {
  const [pressedSegment, setPressedSegment] = useState(null);
  

  const handlePress = (segment) => {
    setPressedSegment(segment);
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

              pressedSegment === null 
                  ? '#FFFFFF' // color for pressed and preceding segments
                  : 

                pressedSegment !== null && i <= pressedSegment
                  ? '#4ABFB4' // color for pressed and preceding segments
                  : '#FFFFFF', // default color

                  borderTopLeftRadius: index === 0 ? 15 : 0,
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
    }
    return segments;
  };

  return (
    <View style={styles.container}>
      {renderSegments()}
      {/* <Text style={styles.outputText}>
        {pressedSegment !== null ? `Segment ${pressedSegment } pressed!` : ''}
      </Text> */}
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
