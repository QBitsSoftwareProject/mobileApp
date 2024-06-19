import axiosInstance from "../../api/axios";
import { getUserId } from "../getUserIdService/getUserIdService";
import AsyncStorage from "@react-native-async-storage/async-storage";

//fetch stress level
export const fetchMarkById = async () => {
        try {
            const token = await AsyncStorage.getItem("authToken");
    
            const response = await axiosInstance.get(`/mark/get-mark-by-id`,
              {
                headers: { authtoken: token },
              }
            );
          
          return response.data;

        } catch (err) {
          console.log(err);
        }
      };


export const submitMarksToDatabase = async (totMark) => {
        try {

          const token = await AsyncStorage.getItem("authToken");
   
          const currentDate = new Date();
      
          // Extract date and time parts
          
          const formattedTime = currentDate.toLocaleTimeString();

          const day = currentDate.getDate();
          const month = currentDate.getMonth() + 1;
          const year = currentDate.getFullYear();

          const formattedDate = `${year}-${month}-${day}`;
      
          // Prepare the payload with mark converted to a number
          const payload = {
            mark: Number(totMark), 
            date: formattedDate,
            time: formattedTime,
          };
      
          // Send POST request using axiosInstance
          const response = await axiosInstance.post('/mark/add-mark', payload ,
            {
              headers: { authtoken: token },
            }
          );
      
          
          if (response.status >= 200 && response.status < 300) {
            console.log("Data sent successfully");
          } else {
            console.error(`Failed to send data to the server. Status: ${response.status}`);
          }
        } catch (error) {
          console.error('Error sending mark:', error.message);
        }
      };
      

      export const fetchHistoryDataByUserId = async () => {
        try {

            const token = await AsyncStorage.getItem("authToken");
    
            const response = await axiosInstance.get(`/mark/get-sorted-mark-by-id`,
              {
                headers: { authtoken: token },
              });
          
          return response.data;

        } catch (err) {
          console.log(err);
        }
      };