import { useState } from "react";
import {View, ScrollView, SafeAreaView} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import React from "react";

const ViewJournal = () => {

    return(

        <View style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>My Journals</Text>
        <Text style={styles.subtitle}>veiw your past journals</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button1,{marginRight:0}]}>
          <Text style={styles.buttonText1}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button2,{marginLeft:-30}]}>
          <Text style={styles.buttonText2}>View</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </View>

    )
}

export default ViewJournal;