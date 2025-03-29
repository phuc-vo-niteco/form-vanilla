import "./styles/style.scss";
import From from "./Form.js";
import InputField from "./fields/InputField.js";
import TextAreaField from "./fields/TextAreaField.js";
import "./polyfill.js";
import CheckboxField from "./fields/CheckboxField.js";
import InputFileField from "./fields/InputFileField.js";
(() => {
  new From([
    new InputField({
      name: "firstName",
      label: "First name:",
      placeholder: "Enter your name",
      value: "",
      validate: {
        name: "firstName",
        rules: [
          {
            required: true,
            message: "Input field is required.",
          },
        ],
      },
    }),
    new InputField({
      name: "lastName",
      label: "Last name:",
      placeholder: "Enter your name",
      value: "",
      validate: {
        name: "lastName",
        rules: [
          {
            required: true,
            message: "Input field is required.",
          },
        ],
      },
    }),
    new TextAreaField({
      name: "about",
      label: "About:",
      placeholder: "Enter your name",
      value: "",
      validate: {
        name: "about",
        rules: [
          {
            required: true,
            message: "Input field is required.",
          },
        ],
      },
    }),
		
    new CheckboxField({
      name: "checkbox",
      label: "Checkbox:",
      placeholder: "Enter your name",
      value: "",
      validate: {
        name: "checkbox",
        rules: [
          {
            required: true,
            message: "Please selected the checkbox.",
          },
        ],
      },
    }),

    new InputFileField({
      name: "file",
      label: "File:",
      placeholder: "Enter your name",
      value: "",
      validate: {
        name: "file",
        rules: [
          {
            required: true,
            message: "Please selected the checkbox.",
          },
        ],
      },
    }),
  ]);
})();
