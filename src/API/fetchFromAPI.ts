import axios from "axios";

export const baseURL: string = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: { maxResults: 50 },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchAPI = async (url: string) => {
  try {
    const { data } = await axios.get(`${baseURL}/${url}`, options);
    return data;
  } catch (error) {
    console.log("fetchAPI", { error });
  }
};
