const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
const Utils = {
  debounce,
};



export default class Validate {
  static register({ $form, fields = [], onSuccess, onFail }) {

    const onValidate = (nameTarget, isSubmited = false) => {
      const _fields = isSubmited ? fields : (nameTarget ? fields.filter(({ name }) => name === nameTarget) : []);
      const _validations = _fields.reduce((acc, field) => {
        const { name, rules } = field;
        const $input = $form.querySelector(`[name="${name}"]`);

        const validation = rules.map((rule) => {
          const value = $input.value || '';
          // Visibility
          if (!$input.isVisible()) {
            return {
              name,
              // Message is null use for remove message.
            };
          } else if (typeof rule === 'function') {
            const _validate = rule(value, $input, field);
            if (_validate) {
              return _validate;
            }
            // Required
          } else if (rule.required && Validate.isNullOrWhiteSpace(value)) {
            return {
              name,
              message: rule.message || 'This field is required',
            };
            // Max length
          } else if (rule.maxlength && value.length > Number.parseInt(rule.maxlength)) {
            return {
              name,
              message: rule.message || `Please enter no more than ${rule.maxlength} characters.`,
            };
            // Min length
          } else if (rule.minLength && value.length < Number.parseInt(rule.minLength)) {
            return {
              name,
              message: rule.message || `Please enter no more less ${rule.minLength} characters.`,
            };
            // Email
          } else if (rule.email && !Validate.isNullOrWhiteSpace(value)) {
            const pattern = /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;
            if (!pattern.test(value)) {
              return {
                name,
                message: rule.message || 'Please enter a valid email address',
              };
            }
            // Confirmed
          } else if (rule.confirmed && !Validate.isNullOrWhiteSpace(value)) {
            const _target = document.querySelector(rule.confirmed) || document.createElement('input');
            const _targetValue = _target.value;
            if (_targetValue !== value) {
              return {
                name,
                message: rule.message || 'This field do not match',
              };
            }
            // Password
          } else if (rule.password && !Validate.isNullOrWhiteSpace(value)) {
            const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{10,}$/;
            const $formGroup = $input.closest('.form-group');
            const $note = $formGroup.querySelector('.field-note');
            if (!pattern.test(value)) {
              if (rule.hideHintText) {
                if ($note) $note.addClass('d-none');
              }
              return {
                name,
                message: rule.message || 'Please enter a valid password',
              };
            }
            // Phone number
          } else if (rule.number && !Validate.isNullOrWhiteSpace(value)) {
            const pattern = /^(\d+\s?)+$/;
            if (!pattern.test(value)) {
              return {
                name,
                message: rule.message || 'Please enter a valid phone number',
              };
            }
            // URL
          } else if (rule.url && !Validate.isNullOrWhiteSpace(value)) {
            const pattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
            if (!pattern.test(value)) {
              return {
                name,
                message: rule.message || 'Please enter a valid phone number',
              };
            }
            // Pattern
          } else if (rule.pattern) {
            if (!rule.pattern.test(value)) {
              return {
                name,
                message: rule.message || 'Please enter a valid format',
              };
            }
          }
          return {
            name,
            // Message is null use for remove message.
          };
        });
        return [...acc, ...validation];
      }, []);

      Promise.all(Object.values(_validations)).then((results) => {
        return results
          .filter((result) => !!result && !!result.name)
          .reduce((acc, { name, message }) => {
            acc[name] = acc[name] || [];
            message && acc[name].push(message);

            return acc;
          }, {});
      }).then((validations) => {
        Object.keys(validations).forEach((key) => {
          const isInvalid = validations[key].length;
          const $message = $form.querySelector(`[name="${key}"]`).closest('div').querySelector('.error-msg');
          if (isInvalid) {
            const message = validations[key][0];
            Validate.show($message, message, false);
          } else {
            Validate.hide($message);
          }
        });

        if (isSubmited) {
          if (Object.values(validations).find((message) => message.length)) {
            const $message = $form.querySelector('.error-msg.active');
            onFail && onFail(validations, $form);
            $message && $message.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
          } else if (onSuccess) {
            onSuccess(validations, $form);
          } else {
            $form.submit();
          }
        }
      });
    };

    $form.addEventListener('submit', (event) => {
      event.preventDefault();
      onValidate('', true);
    });

    $form.addEventListener('keyup', Utils.debounce((event) => {
      onValidate(event.target.name || '');
    }, 200));

    $form.addEventListener('change', (event) => {
      onValidate(event.target.name || '');
    });

    fields = [
      ...Array.from($form.querySelectorAll('[data-rule]')).map((input) => {
        const rule = JSON.parse(input.dataset.rule);
        rule.name = input.attributes.name.value;

        return rule;
      }),
      ...fields,
    ];
  }

  static show($message, innerHTML = null, isIntoView = true) {
    $message.addClass('active');
    if (innerHTML) {
      $message.innerHTML = innerHTML;
    }
    (isIntoView && $message) && $message.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }

  static hide($message) {
    $message.innerHTML = '';
    $message.removeClass('active');
  };

  static isNullOrWhiteSpace(value) {
    return !value || !value.replace(/\s/gi, '').length;
  }
}
