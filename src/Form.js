import Validate from "../validate";

export default class Form {
    constructor(fields = []) {
        this.fields = fields;
        this.$body = document.querySelector('body');
        this.$form = this.initForm();
        this.$body.appendChild(this.$form);
        this.initFormFields();
        this.initButtonSubmit()
        this.initValidate();
    }

    initButtonSubmit() {
        const $button = document.createElement('button');
        $button.type = 'submit';
        $button.innerText = 'Submit';
        $button.className = 'btn-submit';

        this.$form.appendChild($button);
    }

    initValidate() {
        Validate.register({
            $form: this.$form, onSuccess: () => {
                console.log('Form submitted successfully!');
            }, onError: () => {
                console.log('Form submission failed!');
            },
            fields: [
                { name: 'inputField', rules: [{ required: true, message: 'Input field is required.' }] },
                {
                    name: 'textareaField', rules: [{ required: true, message: 'Textarea field is required.' }]
                }
            ]
        });
    }

    initForm() {
        const $form = document.createElement('form');
        $form.id = 'form';
        $form.className = 'form';
        $form.style.display = 'flex';
        $form.style.flexDirection = 'column';

        return $form;
    }

    initFormFields() {
        this.fields.forEach(field => {
            console.log(field);

            const $field = field.render();
            this.$form.appendChild($field);
        });
    }

    addField(field) {
        this.fields.push(field);
        this.$form.appendChild(field.render());
    }

    render() {

    }
}