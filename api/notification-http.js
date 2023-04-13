import axios from "axios";

const BASE_URL = `https://bdcsongbook-b653a-default-rtdb.firebaseio.com`;

export const createNotification = async (data) => {
  const response = await axios.post(BASE_URL + "/notifications.json", data);
  return response.data.name;
};

export const fetchAllNotification = async () => {
  const response = await axios.get(BASE_URL + "/notifications.json");
  const tempNotify = [];

  for (const key in response.data) {
    const notifyData = {
      id: key,
      title: response.data[key].title,
      description: response.data[key].description,
      date: response.data[key].date.toString(),
    };
    tempNotify.push(notifyData);
  }
  return tempNotify;
};

export const deleteNotification = async (id) => {
  axios.delete(BASE_URL + `/notifications/${id}.json`);
};
