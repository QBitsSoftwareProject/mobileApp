import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = BACKEND_URI + "/journal";

// create new journal
export const addNewJournal = async (
  emoji,
  tittle,
  journalEntry,
  formattedTime,
  formattedDate
) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.post(
      `${URL}/add-journal`,

      {
        emoji,
        tittle,
        journalEntry,
        time: formattedTime, // Use the formatted time here
        date: formattedDate, // use the formatted  date here
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

//get journals by userId
export const getJournalsByUserId = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(`${URL}/getJournal-byid`, {
      headers: { authtoken: token },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

//get journals by date
export const getJournalsByDate = async (formattedDate) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.get(
      `${URL}/getJournal-bydate/${formattedDate}`,
      {
        headers: { authtoken: token },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("errr");
  }
};

//get journal by userid and update
export const updateJournal = async (
  id,
  newEmoji,
  NewTittle,
  newJournalEntry,
  formattedTime,
  formattedDate
) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.post(
      `${URL}/update-journal/${id}`,
      {
        emoji: newEmoji,
        tittle: NewTittle,
        journalEntry: newJournalEntry,
        time: formattedTime, // Use the formatted time here
        date: formattedDate, // use the formatted  date here
      },
      {
        headers: { authtoken: token },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error during request setup");
  }
};

//delete journal by id
export const deleteJournal = async (id) => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    const response = await axios.delete(`${URL}/delete-journal/${id}`, {
      headers: { authtoken: token },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("errr");
  }
};
