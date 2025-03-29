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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.form {\n  display: flex;\n  flex-direction: column;\n  color: rgba(0, 0, 0, 0.88);\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.form .field-container {\n  padding: 5px 0;\n  display: flex;\n  flex-direction: row;\n}\n.form .field-container .field-control {\n  border: 1px solid #d9d9d9;\n  width: 100%;\n  color: rgba(0, 0, 0, 0.88);\n  border-radius: 6px;\n  padding: 4px 11px;\n  line-height: 1.5715;\n}\n.form .field-container .field-control:focus {\n  box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);\n  border-color: #1677ff;\n  outline: 0;\n}\n.form .field-container .field-control:hover {\n  border-color: #4096ff;\n}\n.form .field-container .field-label {\n  width: 300px;\n}\n.form .field-container .field-control-container {\n  width: 100%;\n}\n.form .field-container .field-control-container .error-msg {\n  color: #ff4d4f;\n  font-size: 12px;\n  margin-top: 5px;\n}\n.form button {\n  padding: 7px;\n  border-radius: 4px;\n  outline: 0;\n  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);\n  cursor: pointer;\n  line-height: 1.5715;\n  border: none;\n  background-color: #1677ff;\n  color: #fff;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://form-vanilla/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://form-vanilla/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://form-vanilla/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://form-vanilla/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://form-vanilla/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://form-vanilla/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://form-vanilla/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://form-vanilla/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://form-vanilla/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Form.js":
/*!*********************!*\
  !*** ./src/Form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./src/validate.js\");\n\n\nclass Form {\n  constructor(fields = []) {\n    this.fields = fields;\n    this.$body = document.querySelector(\"body\");\n    this.$form = this.initForm();\n    this.$body.appendChild(this.$form);\n    this.validateFields = [];\n    this.initFormFields();\n    this.initButtonSubmit();\n    this.initValidate();\n  }\n\n  initButtonSubmit() {\n    const $button = document.createElement(\"button\");\n    $button.type = \"submit\";\n    $button.innerText = \"Submit\";\n    $button.className = \"btn-submit\";\n\n    this.$form.appendChild($button);\n  }\n\n  initValidate() {\n    _validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\n      $form: this.$form,\n      onSuccess: () => {\n        console.log(\"Form submitted successfully!\");\n      },\n      onError: () => {\n        console.log(\"Form submission failed!\");\n      },\n      fields: this.validateFields,\n    });\n  }\n\n  initForm() {\n    const $form = document.createElement(\"form\");\n    $form.id = \"form\";\n    $form.className = \"form\";\n    $form.style.display = \"flex\";\n    $form.style.flexDirection = \"column\";\n\n    return $form;\n  }\n\n  initFormFields() {\n    this.fields.forEach((field) => {\n      console.log(field);\n\n      const $field = field.render();\n      field.validate && this.validateFields.push(field.validate);\n      this.$form.appendChild($field);\n    });\n  }\n\n  addField(field) {\n    this.fields.push(field);\n    this.$form.appendChild(field.render());\n  }\n\n  render() {}\n}\n\n\n//# sourceURL=webpack://form-vanilla/./src/Form.js?");

/***/ }),

/***/ "./src/fields/CheckboxField.js":
/*!*************************************!*\
  !*** ./src/fields/CheckboxField.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CheckboxField)\n/* harmony export */ });\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ \"./src/fields/Field.js\");\n\n\nclass CheckboxField extends _Field__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(settings) {\n    super(settings);\n  }\n\n  __renderControl(settings) {\n    return `<div class=\"field-control-checkbox\">\n      <input type=\"checkbox\" name=\"${settings.name}\" class=\"\" />\n      </div>`;\n  }\n}\n\n\n//# sourceURL=webpack://form-vanilla/./src/fields/CheckboxField.js?");

/***/ }),

/***/ "./src/fields/Field.js":
/*!*****************************!*\
  !*** ./src/fields/Field.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Field)\n/* harmony export */ });\nclass Field {\n  constructor(settings) {\n    this.$wrap = document.createElement(\"div\");\n    this.$wrap.className = \"field-container\";\n    this.__render(settings);\n    this.validate = settings.validate || null;\n  }\n\n  render(h) {\n    return this.$wrap;\n  }\n\n  __render(settings) {\n    const { label, message } = settings;\n    const _html = `\n                <label class=\"field-label\" for=\"field\">${label}</label>\n                <div class=\"field-control-container\">\n                    ${this.__renderControl(settings)}\n                    <span class=\"error-msg\">${message || \"\"}</span>\n                </div>\n        `;\n    this.$wrap.innerHTML = _html;\n  }\n}\n\n\n//# sourceURL=webpack://form-vanilla/./src/fields/Field.js?");

/***/ }),

/***/ "./src/fields/InputField.js":
/*!**********************************!*\
  !*** ./src/fields/InputField.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InputField)\n/* harmony export */ });\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ \"./src/fields/Field.js\");\n\n\nclass InputField extends _Field__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(settings) {\n    super(settings);\n  }\n\n  __renderControl(settings) {\n    return `<input type=\"text\" name=\"${settings.name}\" placeholder=\"${settings.placeholder || ''}\" class=\"field-control\" />`;\n  }\n}\n\n\n//# sourceURL=webpack://form-vanilla/./src/fields/InputField.js?");

/***/ }),

/***/ "./src/fields/InputFileField.js":
/*!**************************************!*\
  !*** ./src/fields/InputFileField.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InputFileField)\n/* harmony export */ });\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ \"./src/fields/Field.js\");\n\n\nclass InputFileField extends _Field__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(settings) {\n    super(settings);\n  }\n\n  __renderControl(settings) {\n    return `<input type=\"file\" name=\"${settings.name}\" placeholder=\"${settings.placeholder || ''}\" class=\"field-control\" />`;\n  }\n}\n\n\n//# sourceURL=webpack://form-vanilla/./src/fields/InputFileField.js?");

/***/ }),

/***/ "./src/fields/TextAreaField.js":
/*!*************************************!*\
  !*** ./src/fields/TextAreaField.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TextAreaField)\n/* harmony export */ });\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ \"./src/fields/Field.js\");\n\n\nclass TextAreaField extends _Field__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(settings) {\n    super(settings);\n  }\n\n  __renderControl(settings) {\n    return `<textarea type=\"text\" name=\"${settings.name}\" placeholder=${settings.placeholder || ''} class=\"field-control\" ></textarea>`;\n  }\n}\n\n\n//# sourceURL=webpack://form-vanilla/./src/fields/TextAreaField.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _Form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.js */ \"./src/Form.js\");\n/* harmony import */ var _fields_InputField_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields/InputField.js */ \"./src/fields/InputField.js\");\n/* harmony import */ var _fields_TextAreaField_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields/TextAreaField.js */ \"./src/fields/TextAreaField.js\");\n/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polyfill.js */ \"./src/polyfill.js\");\n/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_polyfill_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fields_CheckboxField_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fields/CheckboxField.js */ \"./src/fields/CheckboxField.js\");\n/* harmony import */ var _fields_InputFileField_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fields/InputFileField.js */ \"./src/fields/InputFileField.js\");\n\n\n\n\n\n\n\n(() => {\n  new _Form_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([\n    new _fields_InputField_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      name: \"firstName\",\n      label: \"First name:\",\n      placeholder: \"Enter your name\",\n      value: \"\",\n      validate: {\n        name: \"firstName\",\n        rules: [\n          {\n            required: true,\n            message: \"Input field is required.\",\n          },\n        ],\n      },\n    }),\n    new _fields_InputField_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      name: \"lastName\",\n      label: \"Last name:\",\n      placeholder: \"Enter your name\",\n      value: \"\",\n      validate: {\n        name: \"lastName\",\n        rules: [\n          {\n            required: true,\n            message: \"Input field is required.\",\n          },\n        ],\n      },\n    }),\n    new _fields_TextAreaField_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      name: \"about\",\n      label: \"About:\",\n      placeholder: \"Enter your name\",\n      value: \"\",\n      validate: {\n        name: \"about\",\n        rules: [\n          {\n            required: true,\n            message: \"Input field is required.\",\n          },\n        ],\n      },\n    }),\n\t\t\n    new _fields_CheckboxField_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n      name: \"checkbox\",\n      label: \"Checkbox:\",\n      placeholder: \"Enter your name\",\n      value: \"\",\n      validate: {\n        name: \"checkbox\",\n        rules: [\n          {\n            required: true,\n            message: \"Please selected the checkbox.\",\n          },\n        ],\n      },\n    }),\n\n    new _fields_InputFileField_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n      name: \"file\",\n      label: \"File:\",\n      placeholder: \"Enter your name\",\n      value: \"\",\n      validate: {\n        name: \"file\",\n        rules: [\n          {\n            required: true,\n            message: \"Please selected the checkbox.\",\n          },\n        ],\n      },\n    }),\n  ]);\n})();\n\n\n//# sourceURL=webpack://form-vanilla/./src/index.js?");

/***/ }),

/***/ "./src/polyfill.js":
/*!*************************!*\
  !*** ./src/polyfill.js ***!
  \*************************/
/***/ (() => {

eval("Math.easeInOutQuad = function(t, b, c, d) {\n  t /= d/2;\n  if (t < 1) return c/2*t*t + b;\n  t--;\n  return -c/2 * (t*(t-2) - 1) + b;\n};\n\nconst re = /\\s*(?:,|$)\\s*/;\nif (!Element.prototype.matches) {\n  Element.prototype.matches =\n    Element.prototype.msMatchesSelector ||\n    Element.prototype.webkitMatchesSelector;\n}\n\nif (!Element.prototype.closest) {\n  Element.prototype.closest = function(s) {\n    var el = this;\n\n    do {\n      if (Element.prototype.matches.call(el, s)) return el;\n      el = el.parentElement || el.parentNode;\n    } while (el !== null && el.nodeType === 1);\n    return null;\n  };\n}\n\nif (!Element.prototype.siblings) {\n  /**\n   *\n   * @param {string} s\n   * @return {HTMLDOM} Array\n   */\n  Element.prototype.siblings = function(s) {\n    var el = this;\n    // if no parent, return no sibling\n    if (!el.parentNode) {\n      return null;\n    }\n    return Array.from(el.parentNode.querySelectorAll(s)).filter((child) =>\n      child !== el\n    );\n  };\n}\n\nif (!Element.prototype.show) {\n  Element.prototype.show = function() {\n    this.style.display = 'block';\n    return this;\n  };\n}\n\nif (!Element.prototype.hide) {\n  Element.prototype.hide = function() {\n    this.style.display = 'none';\n    return this;\n  };\n}\n\nif (!NodeList.prototype.show) {\n  NodeList.prototype.show = function() {\n    this.forEach(function(element) {\n      element.style.display = 'block';\n    });\n    return this;\n  };\n}\n\nif (!NodeList.prototype.hide) {\n  NodeList.prototype.hide = function() {\n    this.forEach(function(element) {\n      element.style.display = 'none';\n    });\n    return this;\n  };\n}\n\nif (!NodeList.prototype.removeClass) {\n  NodeList.prototype.removeClass = function(cls) {\n    cls = cls.split(re);\n    this.forEach(function(element) {\n      element.classList.remove(...cls);\n    });\n    return this;\n  };\n}\n\nif (!NodeList.prototype.addClass) {\n  NodeList.prototype.addClass = function(cls) {\n    cls = cls.split(re);\n    this.forEach(function(element) {\n      element.classList.add(...cls);\n    });\n    return this;\n  };\n}\n\nif (!NodeList.prototype.toggleClass) {\n  NodeList.prototype.toggleClass = function(cls) {\n    this.forEach(function(element) {\n      element.classList.toggle(cls);\n    });\n    return this;\n  };\n}\n\nif (!Element.prototype.removeClass) {\n  Element.prototype.removeClass = function(cls) {\n    cls = cls.split(re);\n    this.classList.remove(...cls);\n    return this;\n  };\n}\n\nif (!Element.prototype.addClass) {\n  Element.prototype.addClass = function(cls) {\n    cls = cls.split(re);\n    this.classList.add(...cls);\n    return this;\n  };\n}\n\nif (!Element.prototype.toggleClass) {\n  Element.prototype.toggleClass = function(cls) {\n    this.classList.toggle(cls);\n  };\n}\n\nif (!Element.prototype.hasClass) {\n  Element.prototype.hasClass = function(cls) {\n    return this.classList.contains(cls);\n  };\n}\n\n\nif (!Element.prototype.isVisible) {\n  Element.prototype.isVisible = function() {\n    return !!(this.offsetWidth || this.offsetHeight || this.getClientRects().length);\n  };\n}\n\nif (!NodeList.prototype.hasClass) {\n  NodeList.prototype.hasClass = function(cls) {\n    let _hasClass = false;\n    this.forEach(function(element) {\n      _hasClass = _hasClass || element.classList.contains(cls);\n    });\n    return _hasClass;\n  };\n}\n\n\n\n//# sourceURL=webpack://form-vanilla/./src/polyfill.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://form-vanilla/./src/styles/style.scss?");

/***/ }),

/***/ "./src/validate.js":
/*!*************************!*\
  !*** ./src/validate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Validate)\n/* harmony export */ });\nconst debounce = (func, wait) => {\n  let timeout;\n  return function executedFunction(...args) {\n    const later = () => {\n      timeout = null;\n      func(...args);\n    };\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n  };\n};\n\nconst Utils = { debounce };\n\nclass Validate {\n  static register({ $form, fields = [], onSuccess, onFail }) {\n    const onValidate = (nameTarget, isSubmited = false) => {\n      const _fields = isSubmited\n        ? fields\n        : nameTarget\n        ? fields.filter(({ name }) => name === nameTarget)\n        : [];\n      const _validations = _fields.reduce((acc, field) => {\n        const { name, rules } = field;\n        const $input = $form.querySelector(`[name=\"${name}\"]`);\n\n        const validation = rules.map((rule) => {\n          const getValue = () => {\n            switch ($input.type) {\n              case \"checkbox\":\n                return $input.checked;\n\n              default:\n                return $input.value;\n            }\n          };\n\n          const value = getValue();\n\n          // Visibility\n          if (!$input.isVisible()) {\n            return {\n              name,\n              // Message is null use for remove message.\n            };\n          } else if (typeof rule === \"function\") {\n            const _validate = rule(value, $input, field);\n            if (_validate) {\n              return _validate;\n            }\n            // Required\n          } else if (rule.required && Validate.isNullOrWhiteSpace(value)) {\n            return {\n              name,\n              message: rule.message || \"This field is required\",\n            };\n            // Max length\n          } else if (\n            rule.maxlength &&\n            value.length > Number.parseInt(rule.maxlength)\n          ) {\n            return {\n              name,\n              message:\n                rule.message ||\n                `Please enter no more than ${rule.maxlength} characters.`,\n            };\n            // Min length\n          } else if (\n            rule.minLength &&\n            value.length < Number.parseInt(rule.minLength)\n          ) {\n            return {\n              name,\n              message:\n                rule.message ||\n                `Please enter no more less ${rule.minLength} characters.`,\n            };\n            // Email\n          } else if (rule.email && !Validate.isNullOrWhiteSpace(value)) {\n            const pattern =\n              /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;\n            if (!pattern.test(value)) {\n              return {\n                name,\n                message: rule.message || \"Please enter a valid email address\",\n              };\n            }\n            // Confirmed\n          } else if (rule.confirmed && !Validate.isNullOrWhiteSpace(value)) {\n            const _target =\n              document.querySelector(rule.confirmed) ||\n              document.createElement(\"input\");\n            const _targetValue = _target.value;\n            if (_targetValue !== value) {\n              return {\n                name,\n                message: rule.message || \"This field do not match\",\n              };\n            }\n            // Password\n          } else if (rule.password && !Validate.isNullOrWhiteSpace(value)) {\n            const pattern =\n              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{10,}$/;\n            const $formGroup = $input.closest(\".form-group\");\n            const $note = $formGroup.querySelector(\".field-note\");\n            if (!pattern.test(value)) {\n              if (rule.hideHintText) {\n                if ($note) $note.addClass(\"d-none\");\n              }\n              return {\n                name,\n                message: rule.message || \"Please enter a valid password\",\n              };\n            }\n            // Phone number\n          } else if (rule.number && !Validate.isNullOrWhiteSpace(value)) {\n            const pattern = /^(\\d+\\s?)+$/;\n            if (!pattern.test(value)) {\n              return {\n                name,\n                message: rule.message || \"Please enter a valid phone number\",\n              };\n            }\n            // URL\n          } else if (rule.url && !Validate.isNullOrWhiteSpace(value)) {\n            const pattern =\n              /^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$/;\n            if (!pattern.test(value)) {\n              return {\n                name,\n                message: rule.message || \"Please enter a valid phone number\",\n              };\n            }\n            // Pattern\n          } else if (rule.pattern) {\n            if (!rule.pattern.test(value)) {\n              return {\n                name,\n                message: rule.message || \"Please enter a valid format\",\n              };\n            }\n          }\n          return {\n            name,\n            // Message is null use for remove message.\n          };\n        });\n        return [...acc, ...validation];\n      }, []);\n\n      Promise.all(Object.values(_validations))\n        .then((results) => {\n          return results\n            .filter((result) => !!result && !!result.name)\n            .reduce((acc, { name, message }) => {\n              acc[name] = acc[name] || [];\n              message && acc[name].push(message);\n\n              return acc;\n            }, {});\n        })\n        .then((validations) => {\n          Object.keys(validations).forEach((key) => {\n            const isInvalid = validations[key].length;\n            const $message = $form\n              .querySelector(`[name=\"${key}\"]`)\n              .closest(\"div.field-control-container\")\n              .querySelector(\".error-msg\");\n            if (isInvalid) {\n              const message = validations[key][0];\n              Validate.show($message, message, false);\n            } else {\n              Validate.hide($message);\n            }\n          });\n\n          if (isSubmited) {\n            if (Object.values(validations).find((message) => message.length)) {\n              const $message = $form.querySelector(\".error-msg.active\");\n              onFail && onFail(validations, $form);\n              $message &&\n                $message.scrollIntoView({\n                  behavior: \"smooth\",\n                  block: \"center\",\n                  inline: \"nearest\",\n                });\n            } else if (onSuccess) {\n              onSuccess(validations, $form);\n            } else {\n              $form.submit();\n            }\n          }\n        });\n    };\n\n    $form.addEventListener(\"submit\", (event) => {\n      event.preventDefault();\n      onValidate(\"\", true);\n    });\n\n    $form.addEventListener(\n      \"keyup\",\n      Utils.debounce((event) => {\n        onValidate(event.target.name || \"\");\n      }, 200)\n    );\n\n    $form.addEventListener(\"change\", (event) => {\n      onValidate(event.target.name || \"\");\n    });\n\n    fields = [\n      ...Array.from($form.querySelectorAll(\"[data-rule]\")).map((input) => {\n        const rule = JSON.parse(input.dataset.rule);\n        rule.name = input.attributes.name.value;\n\n        return rule;\n      }),\n      ...fields,\n    ];\n  }\n\n  static show($message, innerHTML = null, isIntoView = true) {\n    $message.addClass(\"active\");\n    if (innerHTML) {\n      $message.innerHTML = innerHTML;\n    }\n    isIntoView &&\n      $message &&\n      $message.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"center\",\n        inline: \"nearest\",\n      });\n  }\n\n  static hide($message) {\n    $message.innerHTML = \"\";\n    $message.removeClass(\"active\");\n  }\n\n  static isNullOrWhiteSpace(value) {\n    return !value || value === false || !value.replace(/\\s/gi, \"\").length;\n  }\n}\n\n\n//# sourceURL=webpack://form-vanilla/./src/validate.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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