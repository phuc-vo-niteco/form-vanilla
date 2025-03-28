export default class Field {
    constructor() {
        this.$wrap = document.createElement('div');
        this.__render({ name: 'inputField' });
    }
    __render(settings) {
        console.log('__render', settings);


        const { label, message } = settings;
        const _html = `
            <div class="field-container">
                <label for="field">${label}</label>
                ${this.__renderControl(settings)}
                <span class="error-msg">${message}</span>
            </div>
        `;
        this.$wrap.innerHTML = _html;
    }

    render(h) {
        return this.$wrap;
    }
}