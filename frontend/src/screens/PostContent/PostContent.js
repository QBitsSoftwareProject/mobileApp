import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions} from 'react-native'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import PostCard from '../../components/CFCard/PostCard'
import { useNavigation } from '@react-navigation/native'

const newPost = [
    {
      id: 1,
      image: require("../../assets/images/PostCardImages/boydp.jpg"),
      title: "Chethiya Bandara",
      sub: "public",
      status: require("../../assets/images/PostCardImages/Globe.png"),
      description: "Healthy food comprises nutrient-rich options like fruits, vegetables, whole grains, and lean proteins, fostering overall well-being and reducing disease risk through balanced, mindful choices.",
      selectedimage: require("../../assets/images/PostCardImages/foodimage.jpeg"),
    },
  ];

  const PostContent = (item) => {
    const screenHeight=Dimensions.get("window").height-275;

    const navigation=useNavigation();
    
    const pressHandler = () => {
       navigation.navigate('');
    };


    return (
        <View>
            <View style={style.contains}>
                <HeaderSub headLine={'Post Content'}  back={"CreatePost"}/>
            </View>
    
                <View style={{height:screenHeight, paddingHorizontal:25 }}>
                
                    <ScrollView ScrollView style={{height:"100%", marginBottom:25}}>

                        <View>
                        {newPost.map((post) => (
                            <View key={post.id}>
                                <PostCard
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                sub={item.sub}
                                description={item.description}
                                Postimage={item.Postimage}
                                />
                            </View>
                            ))}    
                        </View>

                    </ScrollView>
                    
                </View>
        
        </View>
    )
    
}

const style = StyleSheet. create({
    image: {
        height:62.5,
        width:62.5,
        position:'relative'
    }
})

export default PostContent;