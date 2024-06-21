import axiosInstance from "../../api/axios";

//fetch stress level
export const fetchMindRelaxingMethod = async () => {
        try {

            const response = await axiosInstance.get(`/method/get-method`);
          
          return response.data;

        } catch (err) {
          console.log(err);
        }
      };