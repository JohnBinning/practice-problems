const getTimeDiff = (startDate: Date, endDate: Date) => {
  const secondsInOneHour = 60 * 60;
  const secondsInOneDay = secondsInOneHour * 24;
  const secondsInOneYear = secondsInOneDay * 365;
  let diffInSeconds = (endDate.getTime() - startDate.getTime()) / 1000;
  let years = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  if (diffInSeconds >= secondsInOneYear) {
    years = Math.floor(diffInSeconds / secondsInOneYear);
    diffInSeconds %= secondsInOneYear;
  }
  if (diffInSeconds >= secondsInOneDay) {
    days = Math.floor(diffInSeconds / secondsInOneDay);
    diffInSeconds %= secondsInOneDay;
  }
  if (diffInSeconds >= secondsInOneHour) {
    hours = Math.floor(diffInSeconds / secondsInOneHour);
    diffInSeconds %= secondsInOneHour;
  }
  minutes = Math.floor(diffInSeconds / 60);
  return {
    years,
    days,
    hours,
    minutes
  };
};

const date1 = new Date(2000, 0, 1, 9, 0);
const date2 = new Date(2003, 0, 4, 17, 5);
getTimeDiff(date1, date2); // => {
//   years: 3, 
//   days: 4,
//   hours: 8,
//   minutes: 5
// }