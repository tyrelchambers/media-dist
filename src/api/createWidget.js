import { request } from "../config/axios";

export const createWidget = (widget) => {
  return request.post("/widgets/create", widget);
};
