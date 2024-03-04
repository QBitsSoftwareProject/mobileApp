import React from 'react';
import { ScrollView, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import { useNavigation } from '@react-navigation/native'
import PostCard from '../../components/CFCard/PostCard'


const PostCategory = () => {
  const navigation=useNavigation();

  const pressHandler = () => {
    navigation.navigate('CreatePost')
  };

  const postCategoryList = [
    {id:1, 
      image:require("../../assets/images/PostCategoryImage/Feedback.png"),
      title:'Stories', 
      sub:"Share your journey and experiences, your story matters." , 
      arrow:require("../../assets/images/PostCategoryImage/ForwordArrow.png")
     
    },
    {id:2, 
        image:require("../../assets/images/PostCategoryImage/Selflove.png"),
        title:'Self Care', 
        sub:"Tips, tricks, and moments that help you prioritize self-love and care." ,
        arrow:require("../../assets/images/PostCategoryImage/ForwordArrow.png")
    },
     
    {id:3, 
        image:require("../../assets/images/PostCategoryImage/Yoga.png"),
        title:'Mindfulness', 
        sub:"Moments of peace and reflections to nourish your soul and mind.",
        arrow:require("../../assets/images/PostCategoryImage/ForwordArrow.png")
    },
    {id:4, 
        image:require("../../assets/images/PostCategoryImage/Creativebrain.png"),
        title:'Creative', 
        sub:"Express yourself creatively—art, poetry, or any creative outlet.",
        arrow:require("../../assets/images/PostCategoryImage/ForwordArrow.png")
    },
    {id:5, 
        image:require("../../assets/images/PostCategoryImage/Target.png"),
        title:'Supportive', 
        sub:"Offer support, encouragement, and empathy to our community members.",
        arrow:require("../../assets/images/PostCategoryImage/ForwordArrow.png")
    },
    {id:6, 
      image:require("../../assets/images/PostCategoryImage/Stressed.png"),
      title:'Stress', 
      sub:"Insights, strategies, and discussions to manage and overcome stress.",
      arrow:require("../../assets/images/PostCategoryImage/ForwordArrow.png")
  }
  ]; 

  return (
    <View>
      <HeaderSub headLine={'Add your post'}  subHeadLine={'Select post category.'} backarrow={"HomePage"}/>
        
          <SafeAreaView style={{margin:25}}>
           
            <ScrollView style={{height:500}}>   
  
              <View style={{ marginBottom: 80}}>
                {postCategoryList.map(( item ) => (
                  <PostCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  cardName={'regular'}
                  sub={item.sub}
                  arrow={item.arrow}
                  onPress={pressHandler} />
                ))}  
              </View>
            
            </ScrollView>  
          
          </SafeAreaView>
    
    </View>
     

    )
}

export default PostCategory;

