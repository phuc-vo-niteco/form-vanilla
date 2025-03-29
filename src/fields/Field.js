export default class Field {
  constructor(settings) {
    this.$wrap = document.createElement("div");
    this.$wrap.className = "field-container";
    this.__render(settings);
    this.validate = settings.validate || null;
  }

  render(h) {
    return this.$wrap;
  }

  __render(settings) {
    const { label, message } = settings;
    const _html = `
                <label class="field-label" for="field">${label}</label>
                <div class="field-control-container">
                    ${this.__renderControl(settings)}
                    <span class="error-msg">${message || ""}</span>
                </div>
        `;
    this.$wrap.innerHTML = _html;
  }
}
