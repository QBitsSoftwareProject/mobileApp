import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import MoodInputScreen from '../../screens/ImmeidateMoodInputScrren/MoodInputScreen';

const stack = createNativeStackNavigator();

const HomeStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='MoodInputScreen' component={MoodInputScreen} /> 
   
      
    </stack.Navigator>

  )
}

export default HomeStack

