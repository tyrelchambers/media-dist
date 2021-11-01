import { request } from "../config/axios";

export const youtubeIntegrate = () => {
  return request.get("/integrations/v1/youtube");
};
