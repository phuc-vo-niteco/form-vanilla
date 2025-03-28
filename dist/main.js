/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Form.js":
/*!*********************!*\
  !*** ./src/Form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validate */ \"./validate.js\");\n\r\n\r\nclass Form {\r\n    constructor(fields = []) {\r\n        this.fields = fields;\r\n        this.$body = document.querySelector('body');\r\n        this.$form = this.initForm();\r\n        this.$body.appendChild(this.$form);\r\n        this.initFormFields();\r\n        this.initButtonSubmit()\r\n        this.initValidate();\r\n    }\r\n\r\n    initButtonSubmit() {\r\n        const $button = document.createElement('button');\r\n        $button.type = 'submit';\r\n        $button.innerText = 'Submit';\r\n        $button.className = 'btn-submit';\r\n\r\n        this.$form.appendChild($button);\r\n    }\r\n\r\n    initValidate() {\r\n        _validate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\r\n            $form: this.$form, onSuccess: () => {\r\n                console.log('Form submitted successfully!');\r\n            }, onError: () => {\r\n                console.log('Form submission failed!');\r\n            },\r\n            fields: [\r\n                { name: 'inputField', rules: [{ required: true, message: 'Input field is required.' }] },\r\n                {\r\n                    name: 'textareaField', rules: [{ required: true, message: 'Textarea field is required.' }]\r\n                }\r\n            ]\r\n        });\r\n    }\r\n\r\n    initForm() {\r\n        const $form = document.createElement('form');\r\n        $form.id = 'form';\r\n        $form.className = 'form';\r\n        $form.style.display = 'flex';\r\n        $form.style.flexDirection = 'column';\r\n\r\n        return $form;\r\n    }\r\n\r\n    initFormFields() {\r\n        this.fields.forEach(field => {\r\n            console.log(field);\r\n\r\n            const $field = field.render();\r\n            this.$form.appendChild($field);\r\n        });\r\n    }\r\n\r\n    addField(field) {\r\n        this.fields.push(field);\r\n        this.$form.appendChild(field.render());\r\n    }\r\n\r\n    render() {\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://form-vanilla/./src/Form.js?");

/***/ }),

/***/ "./src/fields/Field.js":
/*!*****************************!*\
  !*** ./src/fields/Field.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Field)\n/* harmony export */ });\nclass Field {\r\n    constructor() {\r\n        this.$wrap = document.createElement('div');\r\n        this.__render({ name: 'inputField' });\r\n    }\r\n    __render(settings) {\r\n        console.log('__render', settings);\r\n\r\n\r\n        const { label, message } = settings;\r\n        const _html = `\r\n            <div class=\"field-container\">\r\n                <label for=\"field\">${label}</label>\r\n                ${this.__renderControl(settings)}\r\n                <span class=\"error-msg\">${message}</span>\r\n            </div>\r\n        `;\r\n        this.$wrap.innerHTML = _html;\r\n    }\r\n\r\n    render(h) {\r\n        return this.$wrap;\r\n    }\r\n}\n\n//# sourceURL=webpack://form-vanilla/./src/fields/Field.js?");

/***/ }),

/***/ "./src/fields/InputField.js":
/*!**********************************!*\
  !*** ./src/fields/InputField.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InputField)\n/* harmony export */ });\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ \"./src/fields/Field.js\");\n\r\n\r\nclass InputField extends _Field__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n\r\n    }\r\n\r\n\r\n    __renderControl(settings) {\r\n        const _html = `\r\n            <input type=\"text\" name=\"${settings.name}\" class=\"field-control\" />\r\n        `;\r\n        return _html;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://form-vanilla/./src/fields/InputField.js?");

/***/ }),

/***/ "./src/fields/TextAreaField.js":
/*!*************************************!*\
  !*** ./src/fields/TextAreaField.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TextareaField)\n/* harmony export */ });\nclass TextareaField {\r\n    constructor() {\r\n        this.styles = {\r\n            width: '100%',\r\n            name: 'a'\r\n        };\r\n        this.render();\r\n    }\r\n    render(h) {\r\n        this.$wrap = document.createElement('div');\r\n        this.$textarea = document.createElement('textarea');\r\n        this.$textarea.name = 'textareaField';\r\n        this.$wrap.appendChild(this.$textarea);\r\n        this.setStylesForTextarea(this.styles);\r\n\r\n        this.renderLabel();\r\n        this.renderError();\r\n        return this.$wrap;\r\n    }\r\n\r\n    renderLabel() {\r\n        this.$label = document.createElement('label');\r\n        this.$label.innerText = 'Textarea Field';\r\n        this.$wrap.prepend(this.$label);\r\n    }\r\n\r\n    renderError() {\r\n        this.$error = document.createElement('span');\r\n        this.$error.className = 'error-msg';\r\n        this.$error.innerText = 'This is an error message';\r\n        this.$wrap.appendChild(this.$error);\r\n    }\r\n\r\n    setStylesForTextarea(styles) {\r\n        Object.keys(styles).forEach(key => {\r\n            this.$textarea.style[key] = styles[key];\r\n        });\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://form-vanilla/./src/fields/TextAreaField.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.js */ \"./src/Form.js\");\n/* harmony import */ var _fields_InputField_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields/InputField.js */ \"./src/fields/InputField.js\");\n/* harmony import */ var _fields_TextAreaField_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields/TextAreaField.js */ \"./src/fields/TextAreaField.js\");\n/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polyfill.js */ \"./src/polyfill.js\");\n/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_polyfill_js__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n(() => {\r\n    new _Form_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([\r\n        new _fields_InputField_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](),\r\n    ]);\r\n})();\r\n\n\n//# sourceURL=webpack://form-vanilla/./src/index.js?");

/***/ }),

/***/ "./src/polyfill.js":
/*!*************************!*\
  !*** ./src/polyfill.js ***!
  \*************************/
/***/ (() => {

eval("Math.easeInOutQuad = function(t, b, c, d) {\r\n  t /= d/2;\r\n  if (t < 1) return c/2*t*t + b;\r\n  t--;\r\n  return -c/2 * (t*(t-2) - 1) + b;\r\n};\r\n\r\nconst re = /\\s*(?:,|$)\\s*/;\r\nif (!Element.prototype.matches) {\r\n  Element.prototype.matches =\r\n    Element.prototype.msMatchesSelector ||\r\n    Element.prototype.webkitMatchesSelector;\r\n}\r\n\r\nif (!Element.prototype.closest) {\r\n  Element.prototype.closest = function(s) {\r\n    var el = this;\r\n\r\n    do {\r\n      if (Element.prototype.matches.call(el, s)) return el;\r\n      el = el.parentElement || el.parentNode;\r\n    } while (el !== null && el.nodeType === 1);\r\n    return null;\r\n  };\r\n}\r\n\r\nif (!Element.prototype.siblings) {\r\n  /**\r\n   *\r\n   * @param {string} s\r\n   * @return {HTMLDOM} Array\r\n   */\r\n  Element.prototype.siblings = function(s) {\r\n    var el = this;\r\n    // if no parent, return no sibling\r\n    if (!el.parentNode) {\r\n      return null;\r\n    }\r\n    return Array.from(el.parentNode.querySelectorAll(s)).filter((child) =>\r\n      child !== el\r\n    );\r\n  };\r\n}\r\n\r\nif (!Element.prototype.show) {\r\n  Element.prototype.show = function() {\r\n    this.style.display = 'block';\r\n    return this;\r\n  };\r\n}\r\n\r\nif (!Element.prototype.hide) {\r\n  Element.prototype.hide = function() {\r\n    this.style.display = 'none';\r\n    return this;\r\n  };\r\n}\r\n\r\nif (!NodeList.prototype.show) {\r\n  NodeList.prototype.show = function() {\r\n    this.forEach(function(element) {\r\n      element.style.display = 'block';\r\n    });\r\n    return this;\r\n  };\r\n}\r\n\r\nif (!NodeList.prototype.hide) {\r\n  NodeList.prototype.hide = function() {\r\n    this.forEach(function(element) {\r\n      element.style.display = 'none';\r\n    });\r\n    return this;\r\n  };\r\n}\r\n\r\nif (!NodeList.prototype.removeClass) {\r\n  NodeList.prototype.removeClass = function(cls) {\r\n    cls = cls.split(re);\r\n    this.forEach(function(element) {\r\n      element.classList.remove(...cls);\r\n    });\r\n    return this;\r\n  };\r\n}\r\n\r\nif (!NodeList.prototype.addClass) {\r\n  NodeList.prototype.addClass = function(cls) {\r\n    cls = cls.split(re);\r\n    this.forEach(function(element) {\r\n      element.classList.add(...cls);\r\n    });\r\n    return this;\r\n  };\r\n}\r\n\r\nif (!NodeList.prototype.toggleClass) {\r\n  NodeList.prototype.toggleClass = function(cls) {\r\n    this.forEach(function(element) {\r\n      element.classList.toggle(cls);\r\n    });\r\n    return this;\r\n  };\r\n}\r\n\r\nif (!Element.prototype.removeClass) {\r\n  Element.prototype.removeClass = function(cls) {\r\n    cls = cls.split(re);\r\n    this.classList.remove(...cls);\r\n    return this;\r\n  };\r\n}\r\n\r\nif (!Element.prototype.addClass) {\r\n  Element.prototype.addClass = function(cls) {\r\n    cls = cls.split(re);\r\n    this.classList.add(...cls);\r\n    return this;\r\n  };\r\n}\r\n\r\nif (!Element.prototype.toggleClass) {\r\n  Element.prototype.toggleClass = function(cls) {\r\n    this.classList.toggle(cls);\r\n  };\r\n}\r\n\r\nif (!Element.prototype.hasClass) {\r\n  Element.prototype.hasClass = function(cls) {\r\n    return this.classList.contains(cls);\r\n  };\r\n}\r\n\r\n\r\nif (!Element.prototype.isVisible) {\r\n  Element.prototype.isVisible = function() {\r\n    return !!(this.offsetWidth || this.offsetHeight || this.getClientRects().length);\r\n  };\r\n}\r\n\r\nif (!NodeList.prototype.hasClass) {\r\n  NodeList.prototype.hasClass = function(cls) {\r\n    let _hasClass = false;\r\n    this.forEach(function(element) {\r\n      _hasClass = _hasClass || element.classList.contains(cls);\r\n    });\r\n    return _hasClass;\r\n  };\r\n}\r\n\r\n\n\n//# sourceURL=webpack://form-vanilla/./src/polyfill.js?");

/***/ }),

/***/ "./validate.js":
/*!*********************!*\
  !*** ./validate.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Validate)\n/* harmony export */ });\nconst debounce = (func, wait) => {\r\n  let timeout;\r\n  return function executedFunction(...args) {\r\n    const later = () => {\r\n      clearTimeout(timeout);\r\n      func(...args);\r\n    };\r\n    clearTimeout(timeout);\r\n    timeout = setTimeout(later, wait);\r\n  };\r\n};\r\nconst Utils = {\r\n  debounce,\r\n};\r\n\r\n\r\n\r\nclass Validate {\r\n  static register({ $form, fields = [], onSuccess, onFail }) {\r\n\r\n    const onValidate = (nameTarget, isSubmited = false) => {\r\n      const _fields = isSubmited ? fields : (nameTarget ? fields.filter(({ name }) => name === nameTarget) : []);\r\n      const _validations = _fields.reduce((acc, field) => {\r\n        const { name, rules } = field;\r\n        const $input = $form.querySelector(`[name=\"${name}\"]`);\r\n\r\n        const validation = rules.map((rule) => {\r\n          const value = $input.value || '';\r\n          // Visibility\r\n          if (!$input.isVisible()) {\r\n            return {\r\n              name,\r\n              // Message is null use for remove message.\r\n            };\r\n          } else if (typeof rule === 'function') {\r\n            const _validate = rule(value, $input, field);\r\n            if (_validate) {\r\n              return _validate;\r\n            }\r\n            // Required\r\n          } else if (rule.required && Validate.isNullOrWhiteSpace(value)) {\r\n            return {\r\n              name,\r\n              message: rule.message || 'This field is required',\r\n            };\r\n            // Max length\r\n          } else if (rule.maxlength && value.length > Number.parseInt(rule.maxlength)) {\r\n            return {\r\n              name,\r\n              message: rule.message || `Please enter no more than ${rule.maxlength} characters.`,\r\n            };\r\n            // Min length\r\n          } else if (rule.minLength && value.length < Number.parseInt(rule.minLength)) {\r\n            return {\r\n              name,\r\n              message: rule.message || `Please enter no more less ${rule.minLength} characters.`,\r\n            };\r\n            // Email\r\n          } else if (rule.email && !Validate.isNullOrWhiteSpace(value)) {\r\n            const pattern = /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;\r\n            if (!pattern.test(value)) {\r\n              return {\r\n                name,\r\n                message: rule.message || 'Please enter a valid email address',\r\n              };\r\n            }\r\n            // Confirmed\r\n          } else if (rule.confirmed && !Validate.isNullOrWhiteSpace(value)) {\r\n            const _target = document.querySelector(rule.confirmed) || document.createElement('input');\r\n            const _targetValue = _target.value;\r\n            if (_targetValue !== value) {\r\n              return {\r\n                name,\r\n                message: rule.message || 'This field do not match',\r\n              };\r\n            }\r\n            // Password\r\n          } else if (rule.password && !Validate.isNullOrWhiteSpace(value)) {\r\n            const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{10,}$/;\r\n            const $formGroup = $input.closest('.form-group');\r\n            const $note = $formGroup.querySelector('.field-note');\r\n            if (!pattern.test(value)) {\r\n              if (rule.hideHintText) {\r\n                if ($note) $note.addClass('d-none');\r\n              }\r\n              return {\r\n                name,\r\n                message: rule.message || 'Please enter a valid password',\r\n              };\r\n            }\r\n            // Phone number\r\n          } else if (rule.number && !Validate.isNullOrWhiteSpace(value)) {\r\n            const pattern = /^(\\d+\\s?)+$/;\r\n            if (!pattern.test(value)) {\r\n              return {\r\n                name,\r\n                message: rule.message || 'Please enter a valid phone number',\r\n              };\r\n            }\r\n            // URL\r\n          } else if (rule.url && !Validate.isNullOrWhiteSpace(value)) {\r\n            const pattern = /^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$/;\r\n            if (!pattern.test(value)) {\r\n              return {\r\n                name,\r\n                message: rule.message || 'Please enter a valid phone number',\r\n              };\r\n            }\r\n            // Pattern\r\n          } else if (rule.pattern) {\r\n            if (!rule.pattern.test(value)) {\r\n              return {\r\n                name,\r\n                message: rule.message || 'Please enter a valid format',\r\n              };\r\n            }\r\n          }\r\n          return {\r\n            name,\r\n            // Message is null use for remove message.\r\n          };\r\n        });\r\n        return [...acc, ...validation];\r\n      }, []);\r\n\r\n      Promise.all(Object.values(_validations)).then((results) => {\r\n        return results\r\n          .filter((result) => !!result && !!result.name)\r\n          .reduce((acc, { name, message }) => {\r\n            acc[name] = acc[name] || [];\r\n            message && acc[name].push(message);\r\n\r\n            return acc;\r\n          }, {});\r\n      }).then((validations) => {\r\n        Object.keys(validations).forEach((key) => {\r\n          const isInvalid = validations[key].length;\r\n          const $message = $form.querySelector(`[name=\"${key}\"]`).closest('div').querySelector('.error-msg');\r\n          if (isInvalid) {\r\n            const message = validations[key][0];\r\n            Validate.show($message, message, false);\r\n          } else {\r\n            Validate.hide($message);\r\n          }\r\n        });\r\n\r\n        if (isSubmited) {\r\n          if (Object.values(validations).find((message) => message.length)) {\r\n            const $message = $form.querySelector('.error-msg.active');\r\n            onFail && onFail(validations, $form);\r\n            $message && $message.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });\r\n          } else if (onSuccess) {\r\n            onSuccess(validations, $form);\r\n          } else {\r\n            $form.submit();\r\n          }\r\n        }\r\n      });\r\n    };\r\n\r\n    $form.addEventListener('submit', (event) => {\r\n      event.preventDefault();\r\n      onValidate('', true);\r\n    });\r\n\r\n    $form.addEventListener('keyup', Utils.debounce((event) => {\r\n      onValidate(event.target.name || '');\r\n    }, 200));\r\n\r\n    $form.addEventListener('change', (event) => {\r\n      onValidate(event.target.name || '');\r\n    });\r\n\r\n    fields = [\r\n      ...Array.from($form.querySelectorAll('[data-rule]')).map((input) => {\r\n        const rule = JSON.parse(input.dataset.rule);\r\n        rule.name = input.attributes.name.value;\r\n\r\n        return rule;\r\n      }),\r\n      ...fields,\r\n    ];\r\n  }\r\n\r\n  static show($message, innerHTML = null, isIntoView = true) {\r\n    $message.addClass('active');\r\n    if (innerHTML) {\r\n      $message.innerHTML = innerHTML;\r\n    }\r\n    (isIntoView && $message) && $message.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });\r\n  }\r\n\r\n  static hide($message) {\r\n    $message.innerHTML = '';\r\n    $message.removeClass('active');\r\n  };\r\n\r\n  static isNullOrWhiteSpace(value) {\r\n    return !value || !value.replace(/\\s/gi, '').length;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://form-vanilla/./validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;