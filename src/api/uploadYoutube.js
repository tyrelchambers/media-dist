import axios from "axios";

export const uploadYoutube = (data, token) => {
  return axios
    .post(
      "https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status,contentDetails",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Upload-Content-Type": "video/*",
          "Content-Type": "application/json; charset=UTF-8",
          "X-Upload-Content-Length": 3000000,
          "Content-Length": 278,
        },
      }
    )
    .then((res) => res.headers.location);
};
