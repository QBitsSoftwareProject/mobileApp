import { View, FlatList } from 'react-native'
import React from 'react'
import HeaderSub from '../../../components/HeaderSub/HeaderSub'
import TaskCard from '../../../components/TaskCards/TaskCard'

const images ={
    meditation:require('../../../assets/images/TaskIcons/meditation.png'),
    friends:require('../../../assets/images/TaskIcons/friends.png'),
    journal:require('../../../assets/images/TaskIcons/journal.png'),
    story:require('../../../assets/images/TaskIcons/story.png')
}

const taskList = [
  {id:1, headText:'Take today meditation', subText:'Heal yourself', completeness:'complete', icon:images.meditation},
  {id:2, headText:'Time to write your thoughts', subText:'collect memories', completeness:'incomplete', icon:images.journal},
  {id:3, headText:'Renew your connections', subText:'say hi', completeness:'complete', icon:images.friends},
  {id:4, headText:'See the story', subText:'Way to understand', completeness:'incomplete', icon:images.story},
  {id:5, headText:'Take today meditation', subText:'Heal yourself', completeness:'complete', icon:images.meditation},
]



const TaskListScreen = () => {

  let remaining = 0
  const count = taskList.filter((item)=>{
    if(item.completeness==='incomplete'){
      remaining++
    }
  })

  const sortedTaskList = [...taskList].sort((a, b) => {
    if (a.completeness === 'incomplete' && b.completeness !== 'incomplete') {
      return -1; 
    } else if (a.completeness !== 'incomplete' && b.completeness === 'incomplete') {
      return 1; 
    } else {
      return 0; 
    }
  });

  return (
    <View style={{flex:1, paddingBottom:85,}}>
      <HeaderSub headLine={'Daily Activities'} subHeadLine={remaining + ' more to complete'} back={'WelcomeScreen'}/>

      <View style={{flex:1}}>
      <FlatList
        data={sortedTaskList}
        renderItem={({ item, index }) => (

          <View style={{marginHorizontal:25, marginTop:15, marginBottom:index===taskList.length-1 ? 32 : 0 }} >
            <TaskCard headText={item.headText} subText={item.subText} completeness={item.completeness} icon={item.icon}/>
          </View>
          
        )} 
      />
    
      </View>   
    </View>
  )
}

export default TaskListScreen