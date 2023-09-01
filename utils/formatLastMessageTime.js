function formatLastMessageTime(isoDate) {
  const jsDate = new Date(isoDate);
  const now = new Date();
  const oneDayInMillis = 24 * 60 * 60 * 1000;

  const timeDifferenceInMillis = now - jsDate;

  if (timeDifferenceInMillis < oneDayInMillis) {
    const formattedTime = jsDate.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return formattedTime;
  } else if (
    jsDate.getDate() === now.getDate() - 1 &&
    jsDate.getMonth() === now.getMonth() &&
    jsDate.getFullYear() === now.getFullYear()
  ) {
    return "yesterday";
  } else {
    const formattedDate = jsDate.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    return formattedDate;
  }
}

export default formatLastMessageTime;
