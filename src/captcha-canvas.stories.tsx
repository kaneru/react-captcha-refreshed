import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CaptchaCanvas, CaptchaCanvasProps } from "./captcha-canvas";
import { useCaptchaValue } from "./util/use-captcha-value";

export default {
  title: "CaptchaCanvas",
  component: CaptchaCanvas,
} as ComponentMeta<typeof CaptchaCanvas>;

const Template: ComponentStory<typeof CaptchaCanvas> = (
  args: CaptchaCanvasProps
) => {
  const [captchaValue, updateCapcthaValue] = useCaptchaValue(6);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toUpperCase());
  };

  const validateCaptcha = () => {
    if (captchaValue === inputValue) {
      alert("Capctha matched");
    } else {
      alert("Captcha is wrong");
      updateCapcthaValue();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: `${300}px`,
      }}
    >
      <CaptchaCanvas {...args} captchaValue={captchaValue} />
      <button
        type="button"
        onClick={() => {
          setInputValue("");
          updateCapcthaValue();
        }}
      >
        Refresh
      </button>
      <input
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
        maxLength={captchaValue.length}
      />
      <button type="button" onClick={validateCaptcha}>
        Submit
      </button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "white",
  textColor: "#53dbc8",
  decoyTextColor: "#a0a0a0",
};
