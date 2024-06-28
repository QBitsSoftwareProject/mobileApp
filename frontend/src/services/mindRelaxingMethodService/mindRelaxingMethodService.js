import axiosInstance from "../../api/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

//fetch stress level
export const fetchMindRelaxingMethod = async () => {
        try {

            const response = await axiosInstance.get(`/method/get-method`);
          
          return response.data;

        } catch (err) {
          console.log(err);
        }
      };

      export const fetchMindRelaxingMethodSuggestion = async (inputMood) => {
        try {

          const token = await AsyncStorage.getItem("authToken");

          

            const response = await axiosInstance.post(`api/v1/method/video-suggestion`,
              {
                inputMood:inputMood
              },{
              headers: { authtoken: token }
            }
            );
          
          return response.data;

        } catch (err) {
          console.log(err);
        }
      };


      export const updateMethodRatingById = async (id, currentRating) => {
        try {
      
          // Send PUT request using axiosInstance
          const response = await axiosInstance.put(`/api/v1/method/update-method/${id}`, {
            currentRating:currentRating
          }
          );
      
          if (response.status >= 200 && response.status < 300) {
            console.log("Data updated successfully");
          } else {
            console.error(`Failed to update data on the server. Status: ${response.status}`);
          }
        } catch (error) {
          console.error('Error updating method:', error.message);
        }
      };