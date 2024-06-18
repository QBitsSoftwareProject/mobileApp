import axios from "axios";
import { BACKEND_URI } from "../../config/env";

const URL = BACKEND_URI + "/resources";

export const getAudios = async () => {
    try {
        const response = await axios.get(URL + '/audio/getAudios/');
        return response;
    } catch (err) {
        console.log("error audio fetch , error:" + err.message);
    }
}

export const getAudiosBySearch = async (keyword) => {
    try {
        const response = await axios.get(URL + '/audio/getAudios/search/' + keyword);
        return response;
    } catch (err) {
        console.log("error audio fetch , error:" + err.message);
    }
}

export const getAudiosBySearchAndCategory = async (keyword, category) => {
    try {
        const response = await axios.get(`${URL}/audio/getAudios/search-and-category/`, {
            params: {
                keyword,
                category
            }
        });
        return response;
    } catch (err) {
        console.log("Error fetching audios, error: " + err.message);
    }
};

export const getFilteredAudios = async (category) => {
    try {
        const response = await axios.get(URL + '/audio/getAudios/' + category);
        return response;
    } catch (err) {
        console.log("error audio fetch , error:" + err.message);
    }
}

export const getAudioTags = async () => {
    try {
        const response = await axios.get(URL + '/audio/get-audio-tags/');
        return response;
    } catch (err) {
        console.log("error audio tag fetch , error:" + err.message);
    }
}

export const getVideos = async () => {
    try {
        const response = await axios.get(URL + '/video/');
        return response;
    } catch (err) {
        console.log("error video fetch , error:" + err.message);
    }
}

export const getFilteredVideos = async (category) => {
    try {
        const response = await axios.get(URL + '/video/getFilteredVideos/' + category);
        return response;
    } catch (err) {
        console.log("error video fetch , error:" + err.message);
    }
}

export const getVideosBySearch = async (keyword) => {
    try {
        const response = await axios.get(URL + '/video/search/' + keyword);
        console.log(response.data);
        return response;
    } catch (err) {
        console.log("error video fetch , error:" + err.message);
    }
}

export const getArticles = async () => {
    try {
        const response = await axios.get(URL + '/article/');
        return response;
    } catch (err) {
        console.log("error article fetch , error:" + err.message);
    }
}

export const getCategorizedArticles = async (category) => {
    try {
        const response = await axios.get(URL + '/article//categorizedArticles/' + category);
        return response;
    } catch (err) {
        console.log("error article fetch , error:" + err.message);
    }
}

export const getArticleTags = async () => {
    try {
        const response = await axios.get(URL + '/article/articleTags');
        return response;
    } catch (err) {
        console.log("error article tag fetch , error:" + err.message);
    }
}


