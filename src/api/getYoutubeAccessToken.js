import { request } from "../config/axios";

export const getYoutubeAccessToken = async (data) => {
  return request.get("/integrations/v1/youtube/access_token", {
    params: {
      access_token: data,
    },
  });
};
