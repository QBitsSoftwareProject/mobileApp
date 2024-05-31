import React from 'react';
import { SafeAreaView} from 'react-native';
import SearchFilter from '../screens/search/search';

const data = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Watermelon'];

const App = () => {
  return (
    <SafeAreaView>
      <SearchFilter data={data} />
    </SafeAreaView>
  );
};

export default App;
