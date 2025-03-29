import Field from "./Field";

export default class InputFileField extends Field {
  constructor(settings) {
    super(settings);
  }

  __renderControl(settings) {
    return `<input type="file" name="${settings.name}" placeholder="${settings.placeholder || ''}" class="field-control" />`;
  }
}
