import Field from "./Field";

export default class TextAreaField extends Field {
  constructor(settings) {
    super(settings);
  }

  __renderControl(settings) {
    return `<textarea type="text" name="${settings.name}" placeholder=${settings.placeholder || ''} class="field-control" ></textarea>`;
  }
}
