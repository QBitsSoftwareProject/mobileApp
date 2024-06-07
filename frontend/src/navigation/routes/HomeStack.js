import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import StressLevelStack from './StressLevelStack';

const stack = createNativeStackNavigator();

const HomeStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='HomeScreen' component={HomeScreen} /> 
      <stack.Screen name="StressLevel" component={StressLevelStack} />
   
      
    </stack.Navigator>

  )
}

export default HomeStack

