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