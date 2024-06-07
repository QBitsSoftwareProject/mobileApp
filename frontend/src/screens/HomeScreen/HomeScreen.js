import React, { useState , useContext , useEffect} from 'react'
import HomeTop from '../../components/HomeTop/HomeTop'
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import HomeCard from '../../components/HomeCard/HomeCard'
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';
import { BackgroundMusicContext } from '../../components/SettingScreen/BackgroundMusicProvider';


const proPic = require('../../assets/images/doc.jpg')

const medImg = require('../../assets/images/HomeCards/meditation.png')
const mindImg = require('../../assets/images/HomeCards/mind.png')
const moodImg = require('../../assets/images/HomeCards/mood.png')
const storyImg = require('../../assets/images/HomeCards/story.png')
const goalsImg = require('../../assets/images/HomeCards/goal.png')
const docsImg = require('../../assets/images/HomeCards/docs.png')
const communityImg = require('../../assets/images/HomeCards/community.png')
const feedbackImg = require('../../assets/images/HomeCards/feedback.png')

const images =[
 {id:1, image:require('../../assets/images/HomeCards/2.jpg'), headerText:"Videos", subText:"Immerse yourself in our diverse video collection"},
 {id:2, image:require('../../assets/images/HomeCards/1.jpg'), headerText:"Articles", subText:"Explore insights, tips, and stories curated"},
 {id:3, image:require('../../assets/images/HomeCards/3.jpg'), headerText:"Audios", subText:"Dive into our audio collection—your soothing companion"},
 
]

const name = "Thishakya"

const HomeScreen = () => {


  const winWidth = Dimensions.get('window').width-60

  return (
    <View style={{flex:1, paddingBottom:80}}>
      <View>
        <HomeTop headLine={'Hi,'+ name} subHeadLine={'"Your journey to wellness begins with a single step. Take it today."'} proPic={proPic}/>
      </View>

      
      <View style={{flex:1}}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          <View style={[styles.Container, {width:winWidth}]}>

            <View>

              <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                <Text style={styles.topicText}>Wellness Knowledge</Text>
                <TouchableOpacity style={styles.viewBtn}>
                    <Text style={styles.viewText}>View All</Text>
                </TouchableOpacity>
              </View>
              
              <Swiper style={styles.wrapper} showsButtons={false}>

                {images.map((image, index) => (
                  <TouchableOpacity style={styles.slide} key={index}>
                    <View style={styles.blackBox}></View>

                    <Image source={ image.image } style={[styles.image, {width:winWidth}]}/>

                    <View style={{position:'absolute', marginLeft:15, paddingBottom:15,zIndex:2}}>
                      <Text style={styles.sliderHeaderText}>{image.headerText}</Text>
                      <Text style={styles.sliderSubText}>{image.subText}</Text>
                    </View>

                    
          
                  </TouchableOpacity>
                ))}

              </Swiper>

            </View>

            <View>
              <Text style={styles.topicText}>Healthful Balance</Text>
              <HomeCard image={medImg} headLine={'Mindful Meditation'} subHeadLine={'Take a mindful pause for peace and tranquility.'} />
              <HomeCard image={mindImg} headLine={'Stress Management'} subHeadLine={'Discover personalized tools and expert guidance for effective stress management.'}/>
              <HomeCard image={moodImg} headLine={'Mood Tracking'} subHeadLine={'Track your moods, find balance. Your emotional compass in one place.'}/>
              <HomeCard image={storyImg} headLine={'Write Your Thoughts'} subHeadLine={'Take a mindful pause for peace and tranquility.'}/>
              <HomeCard image={goalsImg} headLine={'Set your Goals'} subHeadLine={'Chart your path to well-being by setting personalized health goals.'}/>
            </View>

            <View style={{marginTop:32}}>
              <Text style={styles.topicText}>Stress Level</Text>

              <TouchableOpacity style={{borderRadius:20,overflow:'hidden', marginTop:15}} >
                <LinearGradient colors={['#00453E', 'rgba(73,177,247,0.7)']} style={styles.blueCard}>
                  <Text style={styles.bluCardText1}>Stress Level Assesment</Text>
                  <Text style={styles.bluCardText2}>Assess stress levels, find peace. Your stress guide for a balanced life.</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={{marginTop:32}}>
              <Text style={styles.topicText}>Connect with Community</Text>
              <HomeCard image={docsImg} headLine={'Connect with Experts'} subHeadLine={'Your Instant Link to Specialized Healthcare Experts.'}/>
              <HomeCard image={communityImg} headLine={'Social Community'} subHeadLine={'Empathetic space connecting, sharing mental health journey companions.'}/>
            </View>

            <View style={{marginVertical:32}}>
              <Text style={styles.topicText}>Give your Ideas</Text>
              <HomeCard image={feedbackImg} headLine={'Feedback Form'} subHeadLine={'Share your thoughts with us. Your feedback shapes a better experience.'}/>
            </View>
            
            

          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default HomeScreen