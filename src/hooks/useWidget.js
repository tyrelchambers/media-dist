import { useMutation, useQuery } from "react-query";
import { getWidget } from "../api/getWidget";
import { createWidget } from "../api/createWidget";

export const useWidget = (widgetId) => {
  const widgetQuery = useQuery(["widget", widgetId], () => getWidget(widgetId));
  const newWidget = useMutation((data) => createWidget(data));
  return {
    widgetQuery,
    newWidget,
  };
};
