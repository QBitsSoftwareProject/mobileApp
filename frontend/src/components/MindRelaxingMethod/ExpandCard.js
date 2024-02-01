import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Animated ,Image,StyleSheet,ImageBackground} from 'react-native';

const ExpandableCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const heightAnim = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(0);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(heightAnim, {
      toValue: isExpanded ? 0 :250, // Adjust the height as needed
      duration: 300, // Adjust the duration of the animation
      useNativeDriver: false,
    }).start();
  };

//   const onContentLayout = (event) => {
//     setContentHeight(event.nativeEvent.layout.height);
//   };

  return (
    <View style={{ margin: 10 }}>
      
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 20,
            height:100,
            flexDirection:'row',
            height:112
            
          }}>
           
            <View style = {styles.expandImg}>
                <Image source={require('../../assets/images/MindRelaxingMethod/mp3.png')}/>
            </View>
            <View style = {styles.expandTitle}>

                <View style = {styles.title}>
                    <Text style = {styles.method} >Listen a music</Text>
                    <Text style = {styles.methodName}>Felista by Yanni</Text>

                </View>


                <View style = {styles.expandIcon}>


            <TouchableOpacity onPress={toggleExpand}>
          {/* <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Click to {isExpanded ? 'Collapse' : 'Expand'}
          </Text> */}
          <Image
        source={
          isExpanded
            ? require('../../assets/images/MindRelaxingMethod/Expandup.png')
            : require('../../assets/images/MindRelaxingMethod/expanddown.png')
        }
      />
          </TouchableOpacity>
          </View>
          </View>
          
        </View>
      

      <Animated.View 
        style={{
          overflow: 'hidden',
          height: heightAnim,
        
        //   marginTop: 10,
        //   padding: 10,
          backgroundColor: 'white',
          borderRadius: 8,
          
        }}>
        {/* <Text>This is the expanded content of the card.</Text> */}
        
        <View style = {{height:160, paddingHorizontal:80}} >
        <ImageBackground
        source={require('../../assets/images/MindRelaxingMethod/felista.png')}
        style = {styles.contentImage}>
            
            <TouchableOpacity>
          <Image source= {require('../../assets/images/MindRelaxingMethod/mp3playbutton.png')}/>
          </TouchableOpacity>
      </ImageBackground>
      </View>
      <Text style = {styles.contentText} >"Felitsa" is a heartfelt composition by Yanni from his 1997 album 
"Tribute," dedicated to his mother. Known for its emotional
melodies, the track showcases Yanni's unique fusion of world and 
classical music.</Text>
        
        
      </Animated.View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
    expandImg: {
        flex:1,
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
        
    },

    expandTitle: {
        flexDirection:'row',
        flex:3,
        
    },

    title:{
        flex:9,
        paddingTop:8,
        paddingLeft:10
    },

    expandIcon:{
        flex:1,
        paddingTop:8
    },

    method:{
        fontSize:18,
        color:"#101318",
        marginBottom:5,
        fontWeight: 'bold',
    },

    methodName:{
        fontSize:12,
        color:"#5C677D"
    },

    contentImage:{
        flex: 1,
        // resizeMode: 'cover', // or 'stretch' or 'contain'
        alignItems:"center",
        
        justifyContent: 'center',
    },
    contentText:{
        marginHorizontal:10,
        marginTop:10,
        color:"#5C677D",
    }


    
})

export default ExpandableCard;