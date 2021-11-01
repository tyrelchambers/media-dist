import { request } from "../config/axios";

export const removeYoutubeIntegration = () => {
  return request.put("/integrations/v1/youtube/disconnect");
};
