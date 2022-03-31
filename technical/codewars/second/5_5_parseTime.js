const parseTime = (timeString = "") => {
  if (timeString === "") return null;
  const d = new Date();
  const time = timeString.match(/^(\d\d?)(?::?(\d\d))?(?::(\d\d))/i);
  console.log(time)
  d.setHours(parseInt(time[1], 10) || 0);
  d.setMinutes(parseInt(time[2], 10) || 0);
  d.setSeconds(0, 0);

  return d;
};

console.log(parseTime("09:29"));
