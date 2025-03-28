import Field from "./Field";

export default class InputField extends Field {
    constructor() {
        super();

    }


    __renderControl(settings) {
        const _html = `
            <input type="text" name="${settings.name}" class="field-control" />
        `;
        return _html;
    }

}