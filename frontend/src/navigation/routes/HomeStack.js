import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import MoodAnalysis from '../../screens/MoodAnalysisScreen/SelectMood';
import AnalysisGraph from '../../screens/AnalysisGraphScreen/AnalysisGraph';
import SuggestioScreen from '../../screens/SuggestionsScreen/SuggestioScreen';
import MonthAnalysis from '../../screens/MonthAnalysis/MonthAnalysis'
import MonthlyAnalysisGraph from '../../screens/MonthlyAnalysisGraphScreen/MonthlyAnalysisGraph'


const stack = createNativeStackNavigator();

const HomeStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='MonthAnalysisScreen' component={MonthAnalysis} />
       <stack.Screen name='MoodAnaysisScreen' component={MoodAnalysis} /> 
      <stack.Screen name='AnalysisGraphScreen' component={AnalysisGraph} />  
      <stack.Screen name='SuggestionsScreen' component={SuggestioScreen} />
      <stack.Screen name='MonthlyAnalysisGraphScreen' component={MonthlyAnalysisGraph} />



   
      
    </stack.Navigator>
  

  )
}

export default HomeStack

