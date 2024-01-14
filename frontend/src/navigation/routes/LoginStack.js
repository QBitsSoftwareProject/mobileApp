import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/WelcomScreen/WelcomeScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import TabBar from '../../components/TabBar/TabBar'
import SelectionScreen from '../../screens/SignUpScreens/SelectionScreen/SelectionScreen';
import UserRegScreen from '../../screens/SignUpScreens/UserRegScreen/UserRegScreen';
const stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
      <stack.Screen name='LoginScreen' component={LoginScreen} />
      <stack.Screen name='TabBar' component={TabBar} />
      <stack.Screen name='SelectionScreen' component={SelectionScreen} />
      <stack.Screen name='UserRegScreen' component={UserRegScreen} />
      
    </stack.Navigator>
  )
}

export default LoginStack