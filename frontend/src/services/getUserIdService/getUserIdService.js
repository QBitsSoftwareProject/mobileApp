import axiosInstance from "../../api/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAUser } from '../userServices/userService';
import { getADoctor } from '../doctorServices/doctorService';

// Fetch stress level
export const getUserId = async () => {
    try {
        let userid = null;
        let user = null;

            user = await getAUser();
    
        if (user && user._id) {
            userid = user._id;
        } else {
            console.log('User or User ID not found');
            return null; // Return null if user or user._id is not found
        }

        return userid;
    } catch (err) {
        console.log(err);
        return null; // Return null if an error occurs
    }
};