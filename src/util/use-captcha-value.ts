import { useState } from "react";
import { generateRandomText } from "./generate-random-text";

export const useCaptchaValue = (
  captchaLength: number
): [string, () => void] => {
  const [captchaValue, setCaptchaValue] = useState(
    generateRandomText(captchaLength)
  );
  return [
    captchaValue,
    () => setCaptchaValue(() => generateRandomText(captchaLength)),
  ];
};
