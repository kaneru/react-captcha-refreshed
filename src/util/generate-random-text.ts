export const generateRandomText = (numberOfCharacters: number = 6) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0, n = characters.length; i < numberOfCharacters; ++i) {
    result += characters.charAt(Math.floor(Math.random() * n));
  }
  return result;
};
