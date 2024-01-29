import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import EduContent from "../../screens/EduContentScreen/EduContent";
import ArticleContent from "../../screens/EduContentScreen/ArticleContent/ArticleContent";
import VideoContent from "../../screens/EduContentScreen/VideoContent/VideoContent";
import AudioContent from "../../screens/EduContentScreen/AudioContent/AudioContent";

const stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      {/* <stack.Screen name='HomeScreen' component={HomeScreen} /> */}
      <stack.Screen name="HomeScreen" component={EduContent} />
      <stack.Screen name="ArticleScreen" component={ArticleContent} />
      <stack.Screen name="VideoScreen" component={VideoContent} />
      <stack.Screen name="AudioScreen" component={AudioContent} />
    </stack.Navigator>
  );
};

export default HomeStack;
