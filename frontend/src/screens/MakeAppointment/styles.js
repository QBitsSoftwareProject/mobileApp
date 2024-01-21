import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
  header: {
    marginLeft:64,
    padding:20,
    fontSize:28,
    color:'#40495B',
    fontWeight: "bold",
    },
  boxcontainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
   },
  Image:{
    height:160,
    width:150,
    borderRadius:10,
  },
  description: {
    fontSize:14,
    color:'#5C677D',
    fontWeight: "400",
  },
  title: {
    marginTop:15,
    marginBottom:-10,
    fontSize:18,
    fontWeight: "500",
    color:'#101318'
  },
  titledescription: {
   fontSize:14,
   fontWeight: "400",
   lineHeight:22.5,
   color:'#5C677D'
  },
  cardBox: {
    width:40,
    height:80,
    marginHorizontal:8,
    backgroundColor:"white",
    borderRadius:20,
    elevation:1,
  },
  
  date: {
    marginHorizontal:8,
    paddingVertical: 10,
    textAlign:'center',
    fontSize:12,
    fontWeight:'bold',
    color: '#7D8597',
    lineHeight:35
  } ,  
  Tbutton: {
    width:100,
    height:30,
    borderColor:'#4A90BF',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'transparent', 
    marginVertical:8,
    marginHorizontal:8,
   
  },
  time: {
    color: '#4A90BF', 
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical:5
  },
popupContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
})


export default styles