import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const errorHandler = (err) => {
  throw err;
};

const uploadImage = async (file) => {
  try {
    const response = await api.post("/upload", file);
    return response.data;
  } catch (err) {
    errorHandler(err);
  }
};

const createEvent = async (newEvent) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}api/events`, newEvent);
    return response.data;
  } catch (err) {
    errorHandler(err);
  }
};

export default {
  uploadImage,
  createEvent,
};
