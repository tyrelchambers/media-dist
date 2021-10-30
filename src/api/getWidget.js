import { request } from "../config/axios";
export const getWidget = (widgetId) => {
  return request.get(`/widgets/${widgetId}`);
};
