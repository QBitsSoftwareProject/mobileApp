import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
  title: {
    marginLeft:80,
    padding:20,
    fontSize:24,
    fontWeight: "bold",
    },
  container: {
    marginHorizontal:15,
    flexDirection: 'row',
  },
  Image:{
    height:160,
    width:150,
    borderRadius:10,
    marginBottom:15
  },
  description: {
    marginLeft:20,
    marginVertical:35,
    fontSize:14,
    fontWeight: "400",
  },
  header: {
    marginLeft:15,
    marginBottom: -15,
    fontSize:18,
    fontWeight: "600",
  },
  headerdescription: {
   marginLeft:15,
   fontSize:14,
   fontWeight: "400",
   paddingBottom:15,
   lineHeight:22.5
  },
  cardBox: {
    width:40,
    height:80,
    marginHorizontal:8,
    marginVertical:8,
    backgroundColor:"white",
    borderRadius:20,
    elevation:5,
  },
  cardcontainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    padding: 5,
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
    marginHorizontal:13,
   
  },
  TbuttonText: {
    color: '#4A90BF', 
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical:5
  },
  button: {
    width:250,
    height:35,
    backgroundColor: '#4A90BF', 
    padding: 8,
    borderRadius: 15,
    marginVertical:15,
    alignSelf:'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: '600'
  },
})


export default styles