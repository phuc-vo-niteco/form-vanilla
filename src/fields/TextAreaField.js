export default class TextareaField {
    constructor() {
        this.styles = {
            width: '100%',
            name: 'a'
        };
        this.render();
    }
    render(h) {
        this.$wrap = document.createElement('div');
        this.$textarea = document.createElement('textarea');
        this.$textarea.name = 'textareaField';
        this.$wrap.appendChild(this.$textarea);
        this.setStylesForTextarea(this.styles);

        this.renderLabel();
        this.renderError();
        return this.$wrap;
    }

    renderLabel() {
        this.$label = document.createElement('label');
        this.$label.innerText = 'Textarea Field';
        this.$wrap.prepend(this.$label);
    }

    renderError() {
        this.$error = document.createElement('span');
        this.$error.className = 'error-msg';
        this.$error.innerText = 'This is an error message';
        this.$wrap.appendChild(this.$error);
    }

    setStylesForTextarea(styles) {
        Object.keys(styles).forEach(key => {
            this.$textarea.style[key] = styles[key];
        });
    }


}