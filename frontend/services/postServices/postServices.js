import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = BACKEND_URI + "/posts";

export const createPost = async (
  userId,
  postCategory,
  date,
  time,
  description,
  image
) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.post(
      URL + "/",
      {
        headers: { authtoken: token },
      },
      {
        userId,
        postCategory,
        date,
        time,
        description,
        image,
      }
    );
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getPost = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(URL + "/view-post", {
      headers: { authtoken: token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const updatePost = async (updateDescription, updateImage) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.put(
      URL + "/update-post/:postId",
      {
        newDescription: updateDescription,
        newImage: updateImage,
      },
      {
        headers: { authtoken: token },
      }
    );
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const deleteAPost = async () => {
  try {
    const { postId } = req.params;
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.put(URL + "/delete-post/:postId", postId, {
      headers: { authtoken: token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};
