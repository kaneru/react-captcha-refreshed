import React, { useEffect, useRef } from "react";
import { generateRandomText } from "./util/generate-random-text";
import { getRandomCoordinates } from "./util/get-random-coordinates";
import { getRandomNumber } from "./util/get-random-number";

export type CaptchaCanvasProps = {
  captchaValue: string;
  backgroundColor?: string;
  textColor?: string;
  decoyTextColor?: string;
  decoyTextLength?: number;
  width?: number;
  height?: number;
};

export const CaptchaCanvas = ({
  captchaValue,
  backgroundColor = "black",
  textColor = "white",
  decoyTextColor = "#afafaf",
  decoyTextLength = 4,
  width = 300,
  height = 100,
}: CaptchaCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const coordinates = getRandomCoordinates(
      width,
      height,
      captchaValue.length
    );
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = textColor;
      const captchaText = captchaValue;

      // Draw decoy text
      const randomText = generateRandomText(decoyTextLength);
      ctx.globalAlpha = 0.9;
      ctx.font = "16px Arial";
      ctx.fillStyle = decoyTextColor;

      for (let i = 0; i < randomText.length; i++) {
        ctx.fillText(
          randomText[i],
          getRandomNumber(30, width - 30),
          getRandomNumber(30, height - 30)
        );
      }

      // Draw text with random coords
      ctx.globalAlpha = 1;
      ctx.font = "30px Monaco";
      ctx.fillStyle = textColor;
      for (let i = 0; i < coordinates.length; i++) {
        ctx.save();
        ctx.translate(coordinates[i][0], coordinates[i][1]);
        ctx.transform(
          1,
          Math.random(),
          getRandomNumber(0, 20) / height,
          1,
          0,
          0
        );
        ctx.fillText(captchaText[i], 0, 0);
        ctx.restore();
      }

      // Draw trace
      ctx.strokeStyle = textColor;
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.moveTo(coordinates[0][0], coordinates[0][1]);
      ctx.lineWidth = 3;

      for (let i = 1; i < coordinates.length; i++) {
        ctx.lineTo(coordinates[i][0], coordinates[i][1]);
      }
      ctx.stroke();
      ctx.globalAlpha = 1;

      ctx.canvas.hidden = true;
      const image = canvas.toDataURL("image/png");
      if (imageRef && imageRef.current) {
        imageRef.current.src = image;
      }
    }
  }, [captchaValue]);

  return (
    <>
      <canvas ref={canvasRef} width={width} height={height} />
      <img ref={imageRef} />
    </>
  );
};
