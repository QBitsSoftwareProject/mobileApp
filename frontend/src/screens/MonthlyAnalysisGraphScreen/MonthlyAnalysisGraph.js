import React from 'react';
import { ScrollView, View } from 'react-native';

import HeaderSubSug from '../SuggestionsScreen/HeaderSubSug';

const MonthlyAnalysisGraph = () => {
    return(
<View>
    <HeaderSubSug 
    headLine="Monthly Analysis"
    subHeadLine="Track your monthly mood inputs"/>
</View>
    )
}

export default MonthlyAnalysisGraph;