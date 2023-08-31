export const getHandleAngle = (date: Date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const hourAngle = (hour > 12 ? hour - 12 : hour) * 30 + minute * 0.5;
  const minuteAngle = minute * 6;
  const secondAngle = second * 6;

  return {
    hourAngle,
    minuteAngle,
    secondAngle,
  };
};

export const getDateToTimeString = (date: Date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const toTwoLetters = (number: number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  return `${toTwoLetters(hour)}:${toTwoLetters(minute)}:${toTwoLetters(
    second
  )}`;
};
