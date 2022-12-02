import Button from "./Button";

const submissionInProgress = { true: true, false: false};
const buttonType = {solid: "solid", outline: "outline"};
const theme = {primary: "primary", success: "success", warning: "warning"};
const type = {button: "button", submit: "submit", reset: "reset"};
export default {
  title: "Buttons",
  component: Button,
  argTypes: {
    type: {
      options: Object.keys(type),
      mapping: type,
      control: {
        type: "select"
      }
    },
    submissionInProgress: {
      options: Object.keys(submissionInProgress),
      mapping: submissionInProgress,
      control: {
        type: "boolean",
      },
    },
    buttonType: {
      options: Object.keys(buttonType),
      mapping: buttonType,
      control: {
        type: "select"
      }
    },
    theme: {
      options: Object.keys(theme),
      mapping: theme,
      control: {
        type: "select"
      }
    },
  },
};

export const Solid = (args) => <Button {...args}></Button>;
export const Outline = (args) => <Button {...args}></Button>;

Solid.args = {
  text: "Button",
  buttonType: "solid",
};

Outline.args = {
  text: "Button",
  buttonType: "outline",
};
