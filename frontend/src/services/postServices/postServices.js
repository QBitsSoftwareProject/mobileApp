import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = BACKEND_URI + "/posts";

export const createPost = async (postCategory, caption, image) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.post(
      URL + "/",
      {
        postCategory,
        description: caption,
        img: image,
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

export const getAPost = async (id) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(
      URL + "/view-one-post/" + id,

      {
        headers: { authtoken: token },
      }
    );
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getUpdatedPost = async (id) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(
      URL + "/view-updated-post/" + id,

      {
        headers: { authtoken: token },
      }
    );
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const updatePost = async (id, newDescription, updateImage) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.put(
      URL + "/update-post/" + id,
      {
        newDescription,
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

export const deleteAPost = async (id) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.delete(URL + "/delete-post/" + id, {
      headers: { authtoken: token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};
