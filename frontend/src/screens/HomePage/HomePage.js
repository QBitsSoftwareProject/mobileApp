import { View, Text, StyleSheet, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import TimeButton from '../../components/TimeButton/TimeButton'
import CreateCard from '../../components/Card/CreateCard'

const HomePage = () => {

    
    return (
        <View style={{margin:25}}>
            <View style={style.contains}>
                <HeaderSub headLine={'Thishakya Perera'} subHeadLine={'80 total post'} />
            </View>
        
            <SafeAreaView>
                
                <ScrollView>
                    <View>
                        <TimeButton/>
                    </View>

                    <View>
                        <CreateCard/>
                    </View>
                </ScrollView>

            </SafeAreaView>
        
        </View>
    )
    
}

const style = StyleSheet. create({
    contains: {

    }
})

export default HomePage;