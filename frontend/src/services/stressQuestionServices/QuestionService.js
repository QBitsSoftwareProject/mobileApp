import axiosInstance from "../../api/axios";

//fetch question ids
export const fetchQuestionIds = async () => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/question/get-all-question-ids"
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

//get question by id
export const fetchData = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/api/v1/question/get-question/${id}`
    );

    const data = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
};
