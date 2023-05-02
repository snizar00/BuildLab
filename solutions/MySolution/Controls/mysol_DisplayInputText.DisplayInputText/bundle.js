/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./DisplayInputText/index.ts":
/*!***********************************!*\
  !*** ./DisplayInputText/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.DisplayInputText = void 0;\nvar DisplayInputText = /** @class */function () {\n  /**\n   * Empty constructor.\n   */\n  function DisplayInputText() {\n    var _this = this;\n    this.defaultLoaded = false;\n    this.onTextAreaInput = function () {\n      _this.autoSizeTextArea();\n    };\n    this.onTextAreaChanged = function () {\n      _this.notifyOutputChanged();\n    };\n  }\n  /**\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\n   * Data-set values are not initialized here, use updateView.\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\n   */\n  DisplayInputText.prototype.init = function (context, notifyOutputChanged, state, container) {\n    // Add control initialization code\n    this.container = container;\n    this.context = context;\n    this.notifyOutputChanged = notifyOutputChanged;\n    this.textarea = document.createElement(\"textarea\");\n    this.textarea.rows = 1;\n    this.textarea.style.resize = 'none';\n    this.textarea.style.overflowY = 'hidden';\n    this.textarea.oninput = this.onTextAreaInput;\n    this.textarea.onchange = this.onTextAreaChanged;\n    this.container.appendChild(this.textarea);\n  };\n  DisplayInputText.prototype.autoSizeTextArea = function () {\n    this.textarea.style.height = 'auto';\n    var newHeight = this.textarea.scrollHeight + 'px';\n    var heightChanged = newHeight !== this.textarea.style.height;\n    this.textarea.style.height = newHeight;\n    if (heightChanged) {\n      this.notifyOutputChanged();\n    }\n  };\n  /**\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\n   */\n  DisplayInputText.prototype.updateView = function (context) {\n    // Add code to update control view\n    var value = context.parameters.TextValue;\n    var disabled = context.mode.isControlDisabled;\n    var masked = false;\n    if (value && value.security) {\n      masked = !value.security.readable;\n      disabled = disabled || masked || !value.security.editable;\n    }\n    // Set font style\n    this.updateStyle(disabled);\n    // Update text value if input value changes\n    if (!this.defaultLoaded || context.updatedProperties.indexOf(\"TextValue\") > -1) {\n      this.defaultLoaded = true;\n      var newValue = masked ? \"****\" : value.raw;\n      this.textarea.value = newValue;\n      this.autoSizeTextArea();\n    }\n  };\n  DisplayInputText.prototype.updateStyle = function (disabled) {\n    var newStyle = {\n      fontFamily: this.context.parameters.Font.raw || \"SegoeUI\",\n      fontSize: this.context.parameters.FontSize.raw ? this.context.parameters.FontSize.raw + \"px\" : \"13px\"\n    };\n    var fontChanged = this.textarea.style.fontFamily !== newStyle.fontFamily || this.textarea.style.fontSize !== newStyle.fontSize;\n    if (fontChanged) {\n      this.textarea.style.fontFamily = newStyle.fontFamily;\n      this.textarea.style.fontSize = newStyle.fontSize;\n      this.autoSizeTextArea();\n    }\n    if (this.textarea.disabled !== disabled) {\n      this.textarea.disabled = disabled;\n    }\n  };\n  /**\n   * It is called by the framework prior to a control receiving new data.\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\n   */\n  DisplayInputText.prototype.getOutputs = function () {\n    //return {};\n    var height = Number.parseInt(this.textarea.style.height);\n    return {\n      TextValue: this.textarea.value,\n      AutoHeightValue: height\n    };\n  };\n  /**\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\n   */\n  DisplayInputText.prototype.destroy = function () {\n    // Add code to cleanup control if necessary\n  };\n  return DisplayInputText;\n}();\nexports.DisplayInputText = DisplayInputText;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./DisplayInputText/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./DisplayInputText/index.ts"](0, __webpack_exports__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('DisplayInputText.DisplayInputText', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.DisplayInputText);
} else {
	var DisplayInputText = DisplayInputText || {};
	DisplayInputText.DisplayInputText = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.DisplayInputText;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}