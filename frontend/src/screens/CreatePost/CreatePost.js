import React from 'react';
import { View, StyleSheet, ScrollView, Text} from 'react-native';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import HeaderSub from '../../components/HeaderSub/HeaderSub';
import PostCard from '../../components/CFCard/PostCard';
import TransparentButton from '../../components/CFButton/TransparentButton';
import RegularButton from '../../components/CFButton/RegularButton';

const CreatePost = () => {
    const newPost = [
        {
            id: 1,
            image: require("../../assets/images/PostCardImages/boydp.jpg"),
            title: 'Chethiya Bandara',
            sub:'public' , 
            status: require("../../assets/images/PostCardImages/Globe.png"),
            description: "Say something about your post....",
            uploadimage: require("../../assets/images/PostCardImages/upload.png"),
    
        },
    ];
    const navigation=useNavigation();
    const goBack = () => {
        navigation.navigate('PostCategory')
      };
      
  

    return (
        <View>
            <View>
                <HeaderSub headLine={'Create Post'} subHeadLine={'Edit your post'} backarrow={goBack}/>
            </View>

            <SafeAreaView style={{ margin: 25 }}>
                <ScrollView style={{height:500}}>
                    {newPost.map(post => (
                        <View key={post.id}>
                            <PostCard
                                image={post.image}
                                title={post.title}
                                cardName={'temp'}
                                sub={post.sub}
                                status={post.status}
                                description={post.description}
                                uploadimage={post.uploadimage}
                                upspace={post.upspace}
                            />
                        </View>
                    ))}

                    <View style={styles.flex1}>
                        <View>
                            <Text style={styles.text1}>Hide from community???</Text>
                            <Text style={styles.text2}>This post will be private</Text>
                        </View>   
                    </View>

                    <View style={{marginBottom:60}}>
                        <TransparentButton/>
                        <RegularButton/>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    flex1: {
       flex:1,
       flexDirection:'row'
    },
    content1: {
        flex:1,
        flexDirection:'row'
     },
     text1:{
        fontSize:15,
        fontWeight:'500',
        color:"#101318",
        marginBottom:5
     },
     text2:{
        fontSize:12,
        fontWeight:'400',
        color:"#40495B"
     },
     content2: {
        flex:1,
        flexDirection:'row'
     },
});

export default CreatePost;