export const convertNumberToK = (number: number) => {
  if (number >= 10000) {
    number = number / 1000;
    return `${number}k`;
  }
  return number;
};
