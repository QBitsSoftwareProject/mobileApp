import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  Container : {
    marginHorizontal:25,
    marginTop:64,
    
  },

  topicText:{
    fontSize:18,
    fontWeight:'400',
    color:'#101318'
  },
  blueCard:{
    minHeight:112, 
    elevation:2,
    padding:20,
    justifyContent:'center',
  },
  bluCardText1:{
    fontSize:18,
    fontWeight:'400',
    color:'white',
  },
  bluCardText2:{
    fontSize:10,
    fontWeight:'400',
    color:'white',
    maxWidth:265
  },

  viewBtn:{
    width:80,
    height:35,
    borderRadius:20,
    elevation:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  },
  viewText:{
    fontSize:12,
    fontWeight:'400',
    color:'#5C677D'
  },

  // slide show ----------------------------------------------
  wrapper: {
    height:250,
    marginTop:25,
    justifyContent:'center',
    
  },
  slide: {
    justifyContent: 'flex-end',
    position: 'relative',
    marginHorizontal:7,
    overflow:'hidden',
    borderRadius:20,
   
  },
  image: {
    height: 200, // Adjust height according to your preference
    resizeMode: 'cover',
    borderRadius: 20,
    
  },
  sliderHeaderText:{
    fontSize:24,
    fontWeight:'500',
    color:'white',
  },
  sliderSubText:{
    fontSize:14,
    fontWeight:'400',
    color:'white',
  },
  blackBox:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex:1,
    borderRadius:20,
  }

})

export default styles