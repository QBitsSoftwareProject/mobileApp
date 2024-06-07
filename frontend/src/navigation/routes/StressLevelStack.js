import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Question from '../../screens/StressLevelAssessmentQuestions/StressLevelQuestions';
import DisplayResultScreen from '../../screens/ResultScreen/displayResult';
import StressLevelHistoryScreen from '../../screens/StressLevelHistory/stresslevelhistory';
const stack = createNativeStackNavigator();

const StressLevelStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
          <stack.Screen name="Question" component={Question} />
          <stack.Screen name="DisplayResultScreen" component={DisplayResultScreen} />
          <stack.Screen name="StressLevelHistoryScreen" component={StressLevelHistoryScreen} />
      
    </stack.Navigator>

  )
}

export default StressLevelStack