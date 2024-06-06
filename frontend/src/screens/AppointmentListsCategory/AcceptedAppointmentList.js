import React, { useEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import DocCard from "../../components/Card/DocCard";
import styles from "./styles";

const AcceptedAppointment = () => {
  return (
    <View>
      <ScrollView style={{ height: 500 }}>
        <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
          <Text style={styles.descript2}>Accepted Appointment List.</Text>
        </View>

        {/* appointment status cards */}
        <View style={{ marginBottom: 80 }}>
          {AcceptedList.map((item) => (
            <DocCard
              key={item.id}
              image={item.image}
              title={item.title}
              cardName={"Accepted"}
              time={item.time}
              date={item.date}
              contactNo={item.contactNo}
              status={item.status}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AcceptedAppointment;
