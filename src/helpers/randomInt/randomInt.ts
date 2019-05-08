export const randomInt = (min: number, max: number): number => {
  const minInt = Math.trunc(min);
  const maxInt = Math.trunc(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}
