import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import HomePage from '../../screens/HomePage/HomePage';

const stack = createNativeStackNavigator();

const HomeStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      {/* <stack.Screen name='HomeScreen' component={HomeScreen} />  */}
      <stack.Screen name='HomePage' component={HomePage} /> 
   
      
    </stack.Navigator>

  )
}

export default HomeStack

