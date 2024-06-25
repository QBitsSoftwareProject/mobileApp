import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  PanResponder,
  Animated,
} from "react-native";
import CFHeaderSub from "../../components/ComForumHeader/CFHeader";
import PostCard from "../../components/CFCard/PostCard";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { getPost } from "../../services/postServices/postServices";

const HomePage = () => {
  const screenHeight = Dimensions.get("window").height - 275;

  const navigation = useNavigation();
  const route = useRoute();

  const [postList, setPostList] = useState([]);

  const fetchPostData = async () => {
    try {
      const res = await getPost();
      setPostList(res);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.refresh) {
        fetchPostData();
        navigation.setParams({ refresh: false }); // Reset the refresh param
      }
    }, [route.params?.refresh])
  );

  useEffect(() => {
    fetchPostData();
  }, []);

  const addNew = () => {
    navigation.navigate("PostCategory");
  };

  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  )[0];

  if (!postList) {
    return;
  }

  return (
    <View style={{ paddingBottom: 110 }}>
      <View>
        <CFHeaderSub
          subHeadLine={"Community Home Page"}
          profile={"ProfileScreen"}
        />
      </View>

      <View
        style={{
          height: screenHeight,
          paddingHorizontal: 25,
          paddingTop: 15,
        }}
      >
        <ScrollView ScrollView style={{ height: "100%", marginBottom: 25 }}>
          {/* post cards list*/}
          <View style={{ paddingBottom: 70 }}>
            {postList.map((item) => (
              <PostCard
                postId={item._id}
                key={item._id}
                cardName={"HomePageCard"}
                image={item.userId.proPic}
                title={item.userId.userName}
                Date={item.createdAt}
                description={item.description}
                postImage={item.image}
              />
            ))}
          </View>
        </ScrollView>

        <Animated.View
          style={[
            pan.getLayout(),
            {
              position: "absolute",
              bottom: 100,
              right: 30,
              zIndex: 10,
            },
          ]}
          {...panResponder.panHandlers}
        >
          <FloatingButton addNew={addNew} />
        </Animated.View>
      </View>
    </View>
  );
};

export default HomePage;
