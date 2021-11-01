import axios from "axios";

export const uploadYoutubeVideoUri = (location, token) => {
  return axios.put(`${location}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-Upload-Content-Type": "video/*",
      "X-Upload-Content-Length": 3000000,
    },
  });
};
