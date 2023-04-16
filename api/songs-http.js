import axios from "axios";
import Toast from "react-native-toast-message";

const BASE_URL = `https://bdcsongbook-b653a-default-rtdb.firebaseio.com`;

export const createSongInFirebase = async (songData) => {
  try {
    const response = await axios.post(BASE_URL + "/songs.json", songData);
  } catch (err) {
    Toast.show({
      type: "error",
      text1: err.message,
      text2: "check your Internet connection",
    });
  }
};

export const fetchAllDataFromFirebase = async () => {
  try {
    const response = await axios.get(BASE_URL + "/songs.json");

    const tempSongs = [];

    for (const key in response.data) {
      const songObj = {
        id: key,
        number: response.data[key].number,
        title: response.data[key].title,
        lyrics: response.data[key].lyrics,
      };

      tempSongs.push(songObj);
    }
    return tempSongs;
  } catch (err) {
    Toast.show({ type: "error", text1: err.message });
  }
};

export const updateSongInFirebase = async (id, expenseData) => {
  try {
    axios.put(BASE_URL + `/songs/${id}.json`, expenseData);
  } catch (err) {
    Toast.show({ type: "error", text1: err.message });
  }
};

export const deleteSongInFirebase = async (id) => {
  try {
    axios.delete(BASE_URL + `/songs/${id}.json`);
  } catch (err) {
    Toast.show({ type: "error", text1: err.message });
  }
};
