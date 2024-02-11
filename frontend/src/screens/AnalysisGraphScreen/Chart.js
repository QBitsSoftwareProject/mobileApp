import React from "react";
import { View } from "react-native";
import {BarChart} from 'react-native-chart-kit';

const data = {
    labales: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets:[
        {
            data:[3,2,4,5,1,3,2],
        },
    ],
};

const ChartComponent = () => {
    return (
      <View>
        <BarChart style={styles.chart}
          data={data}
          width={300}
          height={200}
          yAxisSuffix=""
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0, // precision for data values
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // color of bars
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // color of labels
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          verticalLabelRotation={30}
        />
      </View>
    );
  };

  const styles = {
    chart:{
        marginTop:-300,
        margingBottom:200,
        justifyContent:'center',
        alignSelf:'center'
    }
  }
  
  export default ChartComponent;