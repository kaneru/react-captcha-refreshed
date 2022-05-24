# react-captcha-refreshed

Simple captcha library for React. The library uses the [Shashank3736/captcha-canvas](https://github.com/Shashank3736/captcha-canvas) algorithm for captcha drawing.

## Installation

```bash
npm install react-captcha-refreshed
# or
yarn add react-captcha-refreshed
# or
pnpm add react-captcha-refreshed
```

## Usage

Library usage is pretty straightforward. Import the `CaptchaCanvas` component and the `useCaptchaValue` hook from `react-captcha-refreshed`.

```tsx
import "./App.css";
import { CaptchaCanvas, useCaptchaValue } from "react-captcha-refreshed";

function App() {
  const [value, updateValue] = useCaptchaValue(6);
  return (
    <div className="App">
      <CaptchaCanvas captchaValue={value} />
      <button onClick={updateValue}>Refresh</button>
    </div>
  );
}
```

## API

The library consists of the hook `useCaptchaValue` and the component `CaptchaCanvas`.

| Prop name       | Type | Description                                                   | Default | Required |
| --------------- | ----- | ------------------------------------------------------------- | ------- | -------- |
| `captchaValue`    | `string` | Value of the captcha text given by the `useCaptchaValue` hook |         | Yes      |
| `backgroundColor` | `string` | Background color of the captcha canvas                        | black   | No       |
| `textColor`       | `string` | Color of the captcha text                                     | white   | No       |
| `decoyTextColor`  |  `string` | Color of the decoy text                                       | #afafaf | No       |
| `decoyTextLength` |  `number` | Length of the decoy text                                      | 4       | No       |
| `width`           |  `number` | Width of the captcha canvas and resulted image                | 300     | No       |
| `height`          |  `number` | Height of the captcha canvas and redulted image               | 100     | No       |
