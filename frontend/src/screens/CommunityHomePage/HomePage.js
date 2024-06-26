import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  PanResponder,
  Animated,
  StyleSheet,
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
  const screenWidth = Dimensions.get("window").width;

  const navigation = useNavigation();
  const route = useRoute();

  const [postList, setPostList] = useState([]);
  const pan = useState(
    new Animated.ValueXY({ x: screenWidth - 70, y: screenHeight - 80 })
  )[0];

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

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: 0,
        });
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
        // Ensure the button stays within screen bounds
        if (pan.x._value < 0) {
          Animated.spring(pan.x, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        } else if (pan.x._value > screenWidth - 70) {
          Animated.spring(pan.x, {
            toValue: screenWidth - 70,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  )[0];

  if (!postList) {
    return null;
  }

  return (
    <View style={styles.container}>
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
        <ScrollView style={{ height: "100%" }}>
          {/* post cards list*/}
          <View style={{ paddingBottom: 70 }}>
            {postList.map((item) => (
              <PostCard
                postId={item._id}
                key={item._id}
                cardName={"HomePageCard"}
                relevantUserId={item.userId._id}
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
            { transform: [{ translateX: pan.x }] },
            styles.floatingButtonContainer,
          ]}
          {...panResponder.panHandlers}
        >
          <FloatingButton addNew={addNew} />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButtonContainer: {
    position: "absolute",
    bottom: 25,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "transparent",
  },
});

export default HomePage;
