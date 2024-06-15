import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = BACKEND_URI + "/comments";

export const createComment = async (postId, cont) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.post(
      URL + "/",
      {
        postId,
        content: cont,
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

export const getComments = async (postId) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    console.log(postId);
    const response = await axios.get(
      URL + "/view-comments/" + postId,

      {
        headers: { authtoken: token },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getAComment = async (id) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(
      URL + "/view-one-comment/" + id,

      {
        headers: { authtoken: token },
      }
    );
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getUpdatedComment = async (id) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(
      URL + "/view-updated-comment/" + id,

      {
        headers: { authtoken: token },
      }
    );
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const updateComment = async (id, newContent) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.put(
      URL + "/update-comment/" + id,
      {
        newContent,
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

export const deleteAComment = async (id) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.delete(URL + "/delete-comment/" + id, {
      headers: { authtoken: token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};
