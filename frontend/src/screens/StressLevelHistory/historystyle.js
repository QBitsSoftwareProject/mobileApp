import { StyleSheet } from 'react-native';


const historystyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      leftSection: {
        
        marginLeft:25,
        backgroundColor:'white',
        
      },
      rightSection: {
        
        
        backgroundColor:'black',
      },
      row: {
        marginBottom: 8,
      },
      separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 8,
      },
  });
  
  export default historystyles;