import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions} from 'react-native'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import PostCatBtn from '../../components/CFButton/PostCatBtn'
import PostCard from '../../components/CFCard/PostCard'
import  FloatingButton  from '../../components/FloatingButton/FloatingButton';
import { useNavigation } from '@react-navigation/native'

const PostCatList = [
    {id:1, PstCat:'Trending'},
    {id:2, PstCat:'Stress'},
    {id:3, PstCat:'Calm'}, 
  ];

const postList = [
    {id:1, 
      image:require("../../assets/images/PostCardImages/boydp.jpg"),
      title:'Chethiya Bandara', 
      sub:"public  10 min ago",
      description: "“You don't have to see the whole staircase, just take the first step.” – Martin Luther King.",
      Postimage:require("../../assets/images/PostCardImages/post1image.jpg")
    },
    {id:2, 
      image:require("../../assets/images/PostCardImages/girldp.jpg"),
      title:'Piyumi Amarasinghe', 
      sub:"public  22 min ago",
      description: "“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau",
      Postimage:null
    },
    {id:3, 
        image:require("../../assets/images/PostCardImages/boydp.jpg"),
        title:'Chethiya Bandara', 
        sub:"public  1 hour ago",
        description: "“You don't have to see the whole staircase, just take the first step.” – Martin Luther King.",
        Postimage:require("../../assets/images/PostCardImages/post2image.jpg")
      }

];

const HomePage = () => {
    const screenHeight=Dimensions.get("window").height-275;

    const navigation=useNavigation();
    
    const addNew = () => {
       navigation.navigate('PostCategory');
    };


    return (
        <View>
            <View style={style.contains}>
                <HeaderSub headLine={'Thishakya Perera'} subHeadLine={'80 total post'} back={"HomeScreen"}/>
            </View>
    
                <View style={{height:screenHeight, paddingHorizontal:25 }}>
                
                    <ScrollView ScrollView style={{height:"100%", marginBottom:25}}>

                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {PostCatList.map((item, index) => (
                            <PostCatBtn key={index} PstCat={item.PstCat}/>
                            ))}
                        </View>


                        <View>
                            {postList.map(( item ) => (
                                <PostCard
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                sub={item.sub}
                                description={item.description}
                                Postimage={item.Postimage}
                                />
                            ))}
                        </View>

                    </ScrollView>

                    <FloatingButton addNew={addNew}/>
                    
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

export default HomePage;