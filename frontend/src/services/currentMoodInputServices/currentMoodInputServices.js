import axiosInstance from "../../api/axios";
import { getUserId } from "../getUserIdService/getUserIdService";

// Fetch current mood input
export const fetchCurrentMoodInput = async () => {
    try {
        const userid = await getUserId();
        console.log(`User ID: ${userid}`);

        if (!userid) {
            throw new Error('User ID is not available');
        }

        const response = await axiosInstance.get(`/currentmood/get-mood-by-id/${userid}`);
        return response.data;
    } catch (err) {
        if (err.response && err.response.status === 404) {
            return null; // No mood entry found for the user
        } else {
            console.log(err);
        }
    }
};

// Store current mood
export const storeCurrentMood = async (happy, sad, neutral, worried) => {
    try {
        const userId = await getUserId();
        console.log(`User ID: ${userId}`);

        if (!userId) {
            throw new Error('User ID is not available');
        }

        const data = {
            userid: userId,
            happy: Number(happy), // Ensure the data type matches the schema
            sad: Number(sad),
            neutral: Number(neutral),
            worried: Number(worried)
        };

        // console.log('Data to be sent:', data);

        const response = await axiosInstance.post('/currentmood/add-mood', data);
        // console.log('Response:', response);

        if (response.status >= 200 && response.status < 300) {
            console.log("Data sent successfully");
        } else {
            console.error(`Failed to send data to the server. Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error sending mood:', error.message);
    }
};

// Update current mood
export const updateCurrentMood = async (happy, sad, neutral, worried) => {
    try {
        const userId = await getUserId();
        console.log(`User ID: ${userId}`);

        if (!userId) {
            throw new Error('User ID is not available');
        }

        const response = await axiosInstance.post(`/currentmood/update-current-mood/${userId}`, {
            userid: userId,
            happy: Number(happy), // Ensure the data type matches the schema
            sad: Number(sad),
            neutral: Number(neutral),
            worried: Number(worried)
        });

        if (response.status >= 200 && response.status < 300) {
            console.log("Data updated successfully");
        } else {
            console.error(`Failed to update data on the server. Status: ${response.status}`);
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.log('Mood entry not found, creating a new one.');
            await storeCurrentMood(happy, sad, neutral, worried);
        } else {
            console.error('Error updating current mood:', error.message);
        }
    }
};

// Combined function to check and update or store mood
export const checkAndUpsertMood = async (happy, sad, neutral, worried) => {
    try {
        const currentMood = await fetchCurrentMoodInput();

        if (currentMood) {
            console.log('Updating existing mood entry');
            await updateCurrentMood(happy, sad, neutral, worried);
        } else {
            console.log('Storing new mood entry');
            await storeCurrentMood(happy, sad, neutral, worried);
        }
    } catch (error) {
        console.error('Error in checking and upserting mood:', error.message);
    }
};
