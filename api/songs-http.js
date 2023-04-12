import axios from "axios";

const BASE_URL = `https://bdcsongbook-b653a-default-rtdb.firebaseio.com`;

export const createSongInFirebase = async (songData) => {
  const response = await axios.post(BASE_URL + "/songs.json", songData);
};

export const fetchAllDataFromFirebase = async () => {
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
};

export const updateSongInFirebase = async (id, expenseData) => {
  axios.put(BASE_URL + `/songs/${id}.json`, expenseData);
};

export const deleteSongInFirebase = async (id) => {
  axios.delete(BASE_URL + `/songs/${id}.json`);
};
