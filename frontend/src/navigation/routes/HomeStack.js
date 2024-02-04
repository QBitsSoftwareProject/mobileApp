import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import SelectMood from '../../screens/MoodAnalysisScreen/SelectMood'

const stack = createNativeStackNavigator();

const HomeStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='MoodAnaysisScreen' component={SelectMood} /> 
   
      
    </stack.Navigator>

  )
}

export default HomeStack

