import From from './Form.js';
import InputField from './fields/InputField.js';
import TextAreaField from './fields/TextAreaField.js';
import "./polyfill.js"
(() => {
    new From([
        new InputField(),
    ]);
})();
