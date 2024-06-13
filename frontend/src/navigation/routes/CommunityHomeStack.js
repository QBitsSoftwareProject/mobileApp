import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import PostCategory from "../../screens/PostCategory/PostCategory";
import CreatePost from "../../screens/CreatePost/CreatePost";
import PostContent from "../../screens/PostContent/PostContent";
import HomePage from "../../screens/CommunityHomePage/HomePage";
import ProfileScreen from "../../screens/CommunityProfileScreen/CommunityProfile";

const stack = createNativeStackNavigator();

const CommunityHomeStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      {/* <stack.Screen name='HomeScreen' component={HomeScreen} />  */}
      <stack.Screen name="HomePage" component={HomePage} />
      <stack.Screen name="PostCategory" component={PostCategory} />
      <stack.Screen name="CreatePost" component={CreatePost} />
      <stack.Screen name="PostContent" component={PostContent} />
      <stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </stack.Navigator>
  );
};

export default CommunityHomeStack;
