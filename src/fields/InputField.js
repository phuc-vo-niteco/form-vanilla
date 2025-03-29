import Field from "./Field";

export default class InputField extends Field {
  constructor(settings) {
    super(settings);
  }

  __renderControl(settings) {
    return `<input type="text" name="${settings.name}" placeholder="${settings.placeholder || ''}" class="field-control" />`;
  }
}
