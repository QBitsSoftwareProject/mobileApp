import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = BACKEND_URI + "/resources";

export const getAudios = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL + "/audio/getAudios/", {
      headers: { authtoken: token },
    });
    return response;
  } catch (err) {
    console.log("error audio fetch , error:" + err.message);
  }
};

export const getAudiosBySearch = async (keyword) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(
      URL + "/audio/getAudios/search/" + keyword,
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("error audio fetch , error:" + err.message);
  }
};

export const getAudiosBySearchAndCategory = async (keyword, category) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(
      `${URL}/audio/getAudios/search-and-category/`,
      {
        params: {
          keyword,
          category,
        },
      },
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("Error fetching audios, error: " + err.message);
  }
};

export const getFilteredAudios = async (category) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL + "/audio/getAudios/" + category, {
      headers: { authtoken: token },
    });
    return response;
  } catch (err) {
    console.log("error audio fetch , error:" + err.message);
  }
};

export const getAudioTags = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL + "/audio/get-audio-tags/", {
      headers: { authtoken: token },
    });
    return response;
  } catch (err) {
    console.log("error audio tag fetch , error:" + err.message);
  }
};

export const getVideos = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL + "/video/", {
      headers: { authtoken: token },
    });
    return response;
  } catch (err) {
    console.log("error video fetch , error:" + err.message);
  }
};

export const getFilteredVideos = async (category) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(
      URL + "/video/getFilteredVideos/" + category,
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("error video fetch , error:" + err.message);
  }
};

export const getVideosBySearch = async (keyword) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL + "/video/search/" + keyword, {
      headers: { authtoken: token },
    });
    return response;
  } catch (err) {
    console.log("error video fetch , error:" + err.message);
  }
};

export const getArticles = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL + "/article/", {
      headers: { authtoken: token },
    });
    return response;
  } catch (err) {
    console.log("error article fetch , error:" + err.message);
  }
};

export const getArticlesBySearch = async (keyword) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(
      URL + "/article/article-search/" + keyword,
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("error article fetch , error:" + err.message);
  }
};

export const getCategorizedArticles = async (category) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(
      URL + "/article/categorizedArticles/" + category,
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("error article fetch , error:" + err.message);
  }
};

export const getCategorizedArticlesBySearch = async (keyword, category) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(
      `${URL}/article/categorizedArticlesBysearch/`,
      {
        params: {
          keyword,
          category,
        },
      },
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("error article fetch , error:" + err.message);
  }
};

export const getArticleTags = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL + "/article/articleTags", {
      headers: { authtoken: token },
    });
    return response;
  } catch (err) {
    console.log("error article tag fetch , error:" + err.message);
  }
};

export const getAuthors = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(URL + "/author/", {
      headers: { authtoken: token },
    });
    return response;
  } catch (err) {
    console.log("error author fetch , error:" + err.message);
  }
};

export const getAuthorArticles = async (authorId) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.get(
      URL + "/article/authors-articles/" + authorId,
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("error author fetch , error:" + err.message);
  }
};

export const getAuthorInfo = async (authorId) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(
      URL + "/author/get-authorInfo/" + authorId,
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("error author info fetch , error:" + err.message);
  }
};

export const getAuthorArticleCount = async (authorId) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(
      URL + "/article/authors-article-count/" + authorId,
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("error author count fetch , error:" + err.message);
  }
};

export const editFavoriteVideos = async (videoId) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.put(
      `${BACKEND_URI}/user/edit-favorites/video/`,
      { videoId },
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("error in adding to favorites , error:" + err.message);
  }
};

export const editFavoriteAudios = async (audioId) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.put(
      `${BACKEND_URI}/user/edit-favorites/audio/`,
      { audioId },
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("error in adding to favorites , error:" + err.message);
  }
};

export const editFavoriteArticles = async (articleId) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.put(
      `${BACKEND_URI}/user/edit-favorites/article`,
      { articleId },
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("error in adding to favorites , error:" + err.message);
  }
};

export const getFavoriteVideos = async (favoriteVideoIds) => {
  try {
    console.log("video ids service:", favoriteVideoIds);
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.post(
      URL + "/video/getFavoriteVideos/",
      favoriteVideoIds,
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("error video fetch , error:" + err.message);
  }
};

export const getFavoriteAudios = async (favoriteAudioIds) => {
  try {
    console.log("audio ids service:", favoriteAudioIds);
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.post(
      URL + "/audio/getFavoriteArticles/",
      favoriteAudioIds,
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("error audio fetch , error:" + err.message);
  }
};

export const getFavoriteArticles = async (favoriteArticleIds) => {
  try {
    console.log("article ids service:", favoriteArticleIds);
    const token = await AsyncStorage.getItem("authToken");
    const response = await axios.post(
      URL + "/article/getFavoriteArticles/",
      favoriteArticleIds,
      {
        headers: { authtoken: token },
      }
    );
    return response;
  } catch (err) {
    console.log("error article fetch , error:" + err.message);
  }
};
