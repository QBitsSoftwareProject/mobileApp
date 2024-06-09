import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

import FeedbackStack from './FeedbackStack';
const stack = createNativeStackNavigator();

const HomeStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='HomeScreen' component={HomeScreen} />
      <stack.Screen name='FeedbackStack' component={FeedbackStack} />

      
    </stack.Navigator>

  )
}

export default HomeStack



