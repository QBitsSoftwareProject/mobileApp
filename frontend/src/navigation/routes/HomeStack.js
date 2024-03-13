import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import HomePage from "../../screens/HomePage/HomePage";
import PostCategory from "../../screens/PostCategory/PostCategory";
import CreatePost from "../../screens/CreatePost/CreatePost";
import UploadPost from "../../screens/UploadPost/UploadPost"

const stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      {/* <stack.Screen name='HomeScreen' component={HomeScreen} />  */}
      <stack.Screen name='HomePage' component={HomePage} /> 
      <stack.Screen name='PostCategory' component={PostCategory} /> 
      <stack.Screen name='CreatePost' component={CreatePost} /> 
      {/* <stack.Screen name='UploadPost' component={UploadPost} />    */}
     
    </stack.Navigator>
  );
};

export default HomeStack;
