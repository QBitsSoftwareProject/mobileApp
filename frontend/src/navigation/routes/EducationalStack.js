import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import EduContent from "../../screens/EduContentScreen/EduContent";
import VideoContent from "../../screens/EduContentScreen/VideoContent/VideoContent";
import AudioContent from "../../screens/EduContentScreen/AudioContent/AudioContent";
import ArticleStack from "./ArticleStack";

const stack = createNativeStackNavigator();

const EducationalStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <stack.Screen name="HomeScreen" component={EduContent} />
      <stack.Screen name="ArticleStack" component={ArticleStack} />
      <stack.Screen name="VideoScreen" component={VideoContent} />
      <stack.Screen name="AudioScreen" component={AudioContent} />
    </stack.Navigator>
  );
};

export default EducationalStack;
