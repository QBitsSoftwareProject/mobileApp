import axiosInstance from "../../api/axios";
import { getUserId } from "../getUserIdService/getUserIdService";



//fetch stress level
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
          console.log(err);
        }
      };

      export const storeCurrentMood = async (happy, sad, neutral, worried) => {
        try {
            const userId = await getUserId();
            console.log(`User ID: ${userId}`);
    
            if (!userId) {
                throw new Error('User ID is not available');
            }
    
            const data = {
                userid: userId,
                happy: Number(happy),  // Ensure the data type matches the schema
                sad: Number(sad),
                neutral: Number(neutral),
                worried: Number(worried)
            };
    
            console.log('Data to be sent:', data);
    
            const response = await axiosInstance.post('/currentmood/add-mood', data);
            console.log('Response:', response);
    
            if (response.status >= 200 && response.status < 300) {
                console.log("Data sent successfully");
            } else {
                console.error(`Failed to send data to the server. Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error sending mood:', error.message);
        }
    };


      export const updateCurrentMood = async ( happy, sad, neutral, worried) => {
        try {

            const userId = await getUserId();
            console.log(`User ID: ${userId}`);
    
            if (!userId) {
                throw new Error('User ID is not available');
            }
          
      
          // Send PUT request using axiosInstance
          const response = await axiosInstance.post(`/currentmood/update-current-mood/${userId}`, {
            userid: userId,
            happy: happy, 
            sad: sad,
            neutral: neutral,
            worried: worried
          });
      
          if (response.status >= 200 && response.status < 300) {
            console.log("Data updated successfully");
          } else {
            console.error(`Failed to update data on the server. Status: ${response.status}`);
          }
        } catch (error) {
          console.error('Error updating current mood:', error.message);
        }
      };

