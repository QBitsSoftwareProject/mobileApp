import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VideoContent from "../../screens/EduContentScreen/VideoContent/VideoContent";
import FilteredVideoContent from "../../screens/EduContentScreen/VideoContent/FilteredVideoContentScreen/FilteredVideosContent";

const stack = createNativeStackNavigator();

const VideoStack = () => {
    return (
        <stack.Navigator
            screenOptions={{
                headerStyle: { flex: 1, backgroundColor: "transparent" },
                headerShown: false,
            }}
        >
            <stack.Screen name="AllVideoScreen" component={VideoContent} />
            <stack.Screen name="FilteredVideoScreen" component={FilteredVideoContent} />
        </stack.Navigator>
    );
};

export default VideoStack;
