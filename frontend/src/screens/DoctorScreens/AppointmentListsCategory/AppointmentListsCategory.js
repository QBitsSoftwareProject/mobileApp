import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, View } from "react-native";
import ButtonGroup from "../../../components/Button/ButtonGroup";
import DocAppHeader from "../../../components/DocAppHeader/DocAppHeader";
import PendingAppointmentList from "./PendingAppointmentList";
import AcceptedAppointmentList from "./AcceptedAppointmentList";
import CompletedList from "./CompletedList";
import { getADoctor } from "../../../services/doctorServices/doctorService";
import loadingGif from "../../../assets/animation/loading.gif";

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
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image source={loadingGif} />
      </View>
    );
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
          // paddingTop: 15,
          // backgroundColor: "red",
        }}
      >
        <ButtonGroup
          tab1={"New"}
          tab2={"Accepted"}
          tab3={"History"}
          select={setSelectedTab}
        />
        <ScrollView style={{ height: "100%", paddingTop: 15 }}>
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
