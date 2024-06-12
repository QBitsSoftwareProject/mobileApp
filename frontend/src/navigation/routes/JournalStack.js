import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddNewJournal } from '../../screens/AddNewJournalScreen/addNewJournal';
import { EditJournal } from '../../screens/EditJournalScreen/edit';
import { ViewJournal } from '../../screens/ViewJournalScreen/viewJournal';
import { JournalStatistics } from '../../screens/JournalStatisticsScreen/journalStatistics';

const stack = createNativeStackNavigator();

const JournalStack = () =>{

    return(
        <stack.Navigator 
        screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false ,
        
        }}>

  
      
       

        <stack.Screen name='AddNewJournal' component={AddNewJournal} />
        <stack.Screen name='ViewJournal' component={ViewJournal} />
        <stack.Screen name='JournalStatistics' component={JournalStatistics} />
        <stack.Screen name='EditJournal' component={EditJournal} />



        
        </stack.Navigator>
    )
}

export default JournalStack;