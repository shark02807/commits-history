export const getPassedTime = (date: string, currentDate: Date): string => {
  const commitDate = new Date(date);
  // @ts-ignore
  const passedTime = Math.abs(currentDate - commitDate);
  const passedSeconds = Math.floor(passedTime / 1000);
  const passedMinutes = Math.floor(passedSeconds / 60);
  const passedHours = Math.floor(passedMinutes / 60);
  const passedDays = Math.floor(passedHours / 24);
  const passedMonths = Math.floor(passedDays / 30);
  const passedYears = Math.floor(passedDays / 365);

  let passedTimeString = '';

  if (passedYears) {
    const yearWord = passedYears === 1 ? 'year' : 'years';
    passedTimeString = `${passedYears} ${yearWord} ago`;
  } else if (passedMonths) {
    const monthWord = passedMonths === 1 ? 'month' : 'months';
    passedTimeString = `${passedMonths} ${monthWord} ago`;
  } else if (passedDays) {
    const dayWord = passedDays === 1 ? 'day' : 'days';
    passedTimeString = `${passedDays} ${dayWord} ago`;
  } else if (passedHours) {
    const hourWord = passedHours === 1 ? 'hour' : 'hours';
    passedTimeString = `${passedHours} ${hourWord} ago`;
  } else if (passedMinutes) {
    const minuteWord = passedMinutes === 1 ? 'minute' : 'minutes';
    passedTimeString = `${passedMinutes} ${minuteWord} ago`;
  } else if (passedSeconds) {
    passedTimeString = passedSeconds === 1 ? 'just now' : `${passedSeconds} seconds ago`;
  }

  return passedTimeString;
};
