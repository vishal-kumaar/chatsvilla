const formatDate = (date) => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const parts = date.split("/");
  const inputDate = new Date(parts[2], parts[1] - 1, parts[0]);
  inputDate.setHours(0, 0, 0, 0);

  const oneDayInMillis = 24 * 60 * 60 * 1000;

  if (currentDate - inputDate === 0) {
    return "Today";
  } else if (currentDate - inputDate === oneDayInMillis) {
    return "Yesterday";
  } else {
    return date;
  }
};

export default formatDate;
