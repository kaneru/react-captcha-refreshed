import { getRandomNumber } from "./get-random-number";

export const getRandomCoordinates = (
  width: number,
  height: number,
  size: number
): number[][] => {
  let coordinates = [];
  for (let i = 0; i < size; ++i) {
    const widthGap = Math.floor(width / size);
    const coordinate = [];
    const quasiRandomX = widthGap * (i + 0.2);
    coordinate.push(quasiRandomX);
    const randomY = getRandomNumber(30, height - 30);
    coordinate.push(randomY);
    coordinates.push(coordinate);
  }
  return coordinates;
};
