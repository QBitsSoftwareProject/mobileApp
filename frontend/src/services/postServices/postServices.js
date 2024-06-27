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
        image,
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
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getProfilePost = async (userId) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(URL + "/view-profile-post", {
      headers: { authtoken: token },
      params: { userId: userId },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

export const getSearchProfile = async (searchText, list) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.post(
      URL + "/view-search-profile",
      {
        userName: searchText,
        list,
      },
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

export const updatePost = async (id, newDescription) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.put(
      URL + "/update-post/" + id,
      {
        newDescription,
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
