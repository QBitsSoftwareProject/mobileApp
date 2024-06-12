import React, { useState, useEffect } from 'react';
import { View, Modal, Text, TextInput, TouchableOpacity,ScrollView ,KeyboardAvoidingView, Platform} from 'react-native';
import DayAndTime from './DayAndTime';



const SchedulePopUp = ({ isVisible, onClose, setProPic , updateFunction, 
    setMonday ,
    setTeusday ,
    setWednesday ,
    setThursday,
    setFriday ,
    setSaturday ,
    setSunday,
    monday,
    tuesday,
    wednesday,
    thursday ,
    friday ,
    saturday ,
    sunday,
    setavailableDays,
    availableDays
}) => {

    useEffect(() => {
        if (monday.length > 0 ) {
            if(!availableDays.includes("monday")){
                setavailableDays(prevState => [...prevState, "monday"]);
            }else{
                return;
            }
            
        } else {
            setavailableDays(prevState => prevState.filter(day => day !== "monday"));
        }
    }, [monday]);

    useEffect(() => {
        if (tuesday.length > 0) {
            if(!availableDays.includes("tuesday")){
                setavailableDays(prevState => [...prevState, "tuesday"]);
            }else{
                return;
            }
        } else {
            setavailableDays(prevState => prevState.filter(day => day !== "tuesday"));
        }
    }, [tuesday]);

    useEffect(() => {
        if (wednesday.length > 0 ) {
            if(!availableDays.includes("wednesday")){
                setavailableDays(prevState => [...prevState, "wednesday"]);
            }else{
                return;
            }
        } else {
            setavailableDays(prevState => prevState.filter(day => day !== "wednesday"));
        }
    }, [wednesday]);

    useEffect(() => {
        if (thursday.length > 0 ) {
            if(!availableDays.includes("thursday")){
                setavailableDays(prevState => [...prevState, "thursday"]);
            }else{
                return;
            }
        } else {
            setavailableDays(prevState => prevState.filter(day => day !== "thursday"));
        }
    }, [thursday]);

    useEffect(() => {
        if (friday.length > 0 ) {
            if(!availableDays.includes("friday")){
                setavailableDays(prevState => [...prevState, "friday"]);
            }else{
                return;
            }
        } else {
            setavailableDays(prevState => prevState.filter(day => day !== "friday"));
        }
    }, [friday]);

    useEffect(() => {
        if (saturday.length > 0) {
            if(!availableDays.includes("saturday")){
                setavailableDays(prevState => [...prevState, "saturday"]);
            }else{
                return;
            }
        } else {
            setavailableDays(prevState => prevState.filter(day => day !== "saturday"));
        }
    }, [saturday]);

    useEffect(() => {
        if (sunday.length > 0) {
            if(!availableDays.includes("sunday")){
                setavailableDays(prevState => [...prevState, "sunday"]);
            }else{
                return;
            }
        } else {
            setavailableDays(prevState => prevState.filter(day => day !== "sunday"));
        }
    }, [sunday]);

    const handleConfirmBtn = () => {
        
        updateFunction(availableDays,monday,tuesday,wednesday,thursday,friday,saturday,sunday);
    }
  
    

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
            
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ backgroundColor: '#F2F3F5', padding: 10, borderRadius: 10, width: '95%' , }}>
                <ScrollView style={{height:'70%'}}>
                <DayAndTime day = "Monday" setTimeSlots = {setMonday} timeSlots ={monday}></DayAndTime>
                <DayAndTime day = "Tuesday" setTimeSlots = {setTeusday} timeSlots ={tuesday}></DayAndTime>
                <DayAndTime day = "Wednesday" setTimeSlots = {setWednesday} timeSlots ={wednesday}></DayAndTime>
                <DayAndTime day = "Thursday" setTimeSlots = {setThursday} timeSlots ={thursday}></DayAndTime>
                <DayAndTime day = "Friday" setTimeSlots = {setFriday} timeSlots ={friday}></DayAndTime>
                <DayAndTime day = "Saturday" setTimeSlots = {setSaturday} timeSlots ={saturday}></DayAndTime>
                <DayAndTime day = "Sunday" setTimeSlots = {setSunday} timeSlots ={sunday}></DayAndTime>
                </ScrollView>
                <TouchableOpacity onPress={handleConfirmBtn} style={{ alignSelf: 'center', backgroundColor: '#4A90BF', width: 150, height: 45, justifyContent: 'center', borderRadius: 15, }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16, color: 'white' }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>

            </KeyboardAvoidingView>
        </Modal>
    );
};

export default SchedulePopUp;
