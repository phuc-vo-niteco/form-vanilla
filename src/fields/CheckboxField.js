import Field from "./Field";

export default class CheckboxField extends Field {
  constructor(settings) {
    super(settings);
  }

  __renderControl(settings) {
    return `<div class="field-control-checkbox">
      <input type="checkbox" name="${settings.name}" class="" />
      </div>`;
  }
}
