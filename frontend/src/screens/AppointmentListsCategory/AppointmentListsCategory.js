import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonGroup from "../../components/Button/ButtonGroup";
import DocAppHeader from "../../components/DocAppHeader/DocAppHeader";
import PendingAppointmentList from "../../screens/AppointmentListsCategory/PendingAppointmentList";
import AcceptedAppointmentList from "../../screens/AppointmentListsCategory/AcceptedAppointmentList";
import CompletedList from "../../screens/AppointmentListsCategory/CompletedList";

const AppointmentList = () => {
  const profilePicture = require("../../assets/images/PostCardImages/manprofile.jpg");
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View>
      <DocAppHeader
        headLine={"Welcome"}
        subHeadLine={"Dr. B.M. Weerasinghe"}
        proPic={profilePicture}
      />
      <SafeAreaView style={{ margin: 25 }}>
        <ScrollView style={{ height: 500 }}>
          <ButtonGroup
            tab1={"New"}
            tab2={"Accepted"}
            tab3={"History"}
            select={setSelectedTab}
          />

          {/* appointment status cards */}
          <View style={{ marginBottom: 80 }}>
            {selectedTab == 0 ? (
              <PendingAppointmentList />
            ) : selectedTab == 1 ? (
              <AcceptedAppointmentList />
            ) : selectedTab == 2 ? (
              <CompletedList />
            ) : null}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AppointmentList;
