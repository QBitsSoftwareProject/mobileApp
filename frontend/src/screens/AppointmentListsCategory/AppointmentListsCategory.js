import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonGroup from "../../components/Button/ButtonGroup";
import DocAppHeader from "../../components/DocAppHeader/DocAppHeader";
import PendingAppointmentList from "../../screens/AppointmentListsCategory/PendingAppointmentList";
import AcceptedAppointmentList from "../../screens/AppointmentListsCategory/AcceptedAppointmentList";
import CompletedList from "../../screens/AppointmentListsCategory/CompletedList";
import { getADoctor } from "../../services/doctorServices/doctorService";

const AppointmentList = () => {
  const screenHeight = Dimensions.get("window").height - 275;

  const [selectedTab, setSelectedTab] = useState(0);
  const [doctorData, setDoctorData] = useState();

  const fetchData = async () => {
    try {
      //getdoctor
      const doctor = await getADoctor();
      setDoctorData(doctor);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!doctorData) {
    return;
  }

  return (
    <View>
      <View>
        <DocAppHeader
          headLine={"Welcome"}
          docName={doctorData.fullName}
          proPic={{ uri: doctorData.proPic }}
        />
      </View>

      <View
        style={{
          height: screenHeight,
          paddingHorizontal: 25,
          paddingTop: 15,
          // backgroundColor: "red",
        }}
      >
        <ScrollView style={{ height: "100%", marginTop: 15 }}>
          <ButtonGroup
            tab1={"New"}
            tab2={"Accepted"}
            tab3={"History"}
            select={setSelectedTab}
          />

          {/* appointment status cards */}
          <View style={{ marginBottom: 70 }}>
            {selectedTab == 0 ? (
              <PendingAppointmentList />
            ) : selectedTab == 1 ? (
              <AcceptedAppointmentList />
            ) : selectedTab == 2 ? (
              <CompletedList />
            ) : null}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AppointmentList;
