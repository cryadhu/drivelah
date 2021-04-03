import moment from "moment";
export const formatDateTime = (dateTime) => {
  if (!moment(dateTime).isValid()) return null;
  return dateTime.format("DD MMM, HH:mm A");
};
