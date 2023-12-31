// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headertxt: {
    color: 'white',
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start', 
  
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start', 

  },
});

export default styles;
