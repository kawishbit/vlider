(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vlider", [], factory);
	else if(typeof exports === 'object')
		exports["vlider"] = factory();
	else
		root["vlider"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Vlider.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/index.js?!./src/Vlider.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/Vlider.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    props: [`rangeData`, `theme`, `id`],\r\n    data() {\r\n      return {\r\n        inputRange: null,\r\n        rangeStyle: ''\r\n      }\r\n    },\r\n    computed: {\r\n      rangeAmount() {\r\n        return this.rangeData.length\r\n      }\r\n    },\r\n    watch: {\r\n      rangeData() {\r\n        this.createCss()\r\n        this.inputRange = null\r\n      }\r\n    },\r\n    mounted() {\r\n      this.createCss()\r\n    },\r\n    methods: {\r\n      selectThumb(numbers){\r\n        this.inputRange = numbers\r\n      },\r\n      createCss() {\r\n        var prevelem = document.getElementById(`rangeStyle${this.id}`)\r\n        if(prevelem) {\r\n          prevelem.remove()\r\n        }\r\n        var head = document.head || document.getElementByTagName('head')[0]\r\n        var css = document.createElement('style')\r\n        css.setAttribute('id', `rangeStyle${this.id}`)\r\n        css.type = 'text/css'\r\n        var styles = ''\r\n        var color_stops = ''\r\n        var self = this\r\n        var no = 1\r\n        var label = `.range-container .range-labels li.rangeBullet`\r\n        var boxShadow = `0 0 0 3px`\r\n        var boxShadowActive = `0 0 0 6px`\r\n        this.rangeData.forEach((val, index) => {\r\n          styles += `\r\n              ${label}${self.sluggify(val.name)}::after {\r\n                -webkit-box-shadow: ${boxShadow} ${val.color};\r\n                -ms-box-shadow: ${boxShadow} ${val.color};\r\n                -o-box-shadow: ${boxShadow} ${val.color};\r\n                box-shadow: ${boxShadow} ${val.color};\r\n              }\r\n\r\n              ${label}${self.sluggify(val.name)}.active::after {\r\n                -webkit-box-shadow: ${boxShadowActive} ${val.color};\r\n                -ms-box-shadow: ${boxShadowActive} ${val.color};\r\n                -o-box-shadow: ${boxShadowActive} ${val.color};\r\n                box-shadow: ${boxShadowActive} ${val.color};\r\n              }\r\n          `\r\n          var comma = this.rangeAmount == no ? '' : ','\r\n          color_stops += val.color + comma\r\n          no++\r\n        })\r\n\r\n        var prefix = `#${this.id} .range input[type=range]`\r\n        var gradient = `\r\n          background: ${this.rangeData[0].color};\r\n          background: -moz-linear-gradient(left, ${color_stops});\r\n          background: -webkit-linear-gradient(left,${color_stops});\r\n          background: linear-gradient(to right, ${color_stops});\r\n          filter: progid:DXprogid:DXImageTransform.Microsoft.gradient(startColorstr='${this.rangeData[0].color}', endColorstr='${this.rangeData[this.rangeAmount - 1].color}',GradientType=1);\r\n        `\r\n        styles += `\r\n          ${prefix}::-webkit-slider-runnable-track{${gradient}}\r\n          ${prefix}:focus::-webkit-slider-runnable-track {${gradient}}\r\n          ${prefix}::-moz-range-track {${gradient}}\r\n          ${prefix}::-ms-track {background: transparent;}\r\n          ${prefix}::-ms-fill-lower {${gradient}}\r\n          ${prefix}:focus::-ms-fill-lower {${gradient}}\r\n          ${prefix}::-ms-fill-upper {${gradient}}\r\n          ${prefix}:focus::-ms-fill-upper {${gradient}}\r\n        `\r\n        css.appendChild(document.createTextNode(styles))\r\n        head.appendChild(css)\r\n      },\r\n      sluggify(str) {\r\n        str = str.replace(/^\\s+|\\s+$/g, '') // trim\r\n        str = str.toLowerCase()\r\n\r\n        // remove accents, swap ñ for n, etc\r\n        var from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;'\r\n        var to = 'aaaaaeeeeiiiioooouuuunc------'\r\n\r\n        for (var i = 0, l = from.length; i < l; i++) {\r\n          str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))\r\n        }\r\n\r\n        str = str\r\n          .replace(/[^a-z0-9 -]/g, '') // remove invalid chars\r\n          .replace(/\\s+/g, '-') // collapse whitespace and replace by -\r\n          .replace(/-+/g, '-') // collapse dashes\r\n\r\n        return str\r\n      },\r\n      createName(name) {\r\n        return 'rangeBullet' + this.sluggify(name)\r\n      },\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://vlider/./src/Vlider.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Vlider.vue?vue&type=template&id=410a1f6a&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/Vlider.vue?vue&type=template&id=410a1f6a& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"range-container\",attrs:{\"id\":_vm.id}},[_c('ul',{staticClass:\"range-labels\"},[_vm._l((_vm.rangeData),function(range,index){return [_c('li',{class:[_vm.createName(range.name), _vm.theme, {'active' : index+1 == _vm.inputRange}],on:{\"click\":function($event){return _vm.selectThumb(index+1)}}},[_c('p',[_vm._v(_vm._s(range.name))]),_vm._v(\" \"),_c('i',{staticClass:\"em\",class:['em-'+range.icon]})])]})],2),_vm._v(\" \"),_c('div',{staticClass:\"range\"},[_c('input',{directives:[{name:\"model\",rawName:\"v-model.number\",value:(_vm.inputRange),expression:\"inputRange\",modifiers:{\"number\":true}}],attrs:{\"type\":\"range\",\"min\":\"1\",\"max\":_vm.rangeAmount,\"steps\":\"1\"},domProps:{\"value\":(_vm.inputRange)},on:{\"__r\":function($event){_vm.inputRange=_vm._n($event.target.value)},\"blur\":function($event){return _vm.$forceUpdate()}}})])])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://vlider/./src/Vlider.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://vlider/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./src/Vlider.vue":
/*!************************!*\
  !*** ./src/Vlider.vue ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Vlider_vue_vue_type_template_id_410a1f6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vlider.vue?vue&type=template&id=410a1f6a& */ \"./src/Vlider.vue?vue&type=template&id=410a1f6a&\");\n/* harmony import */ var _Vlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vlider.vue?vue&type=script&lang=js& */ \"./src/Vlider.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Vlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Vlider_vue_vue_type_template_id_410a1f6a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Vlider_vue_vue_type_template_id_410a1f6a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://vlider/./src/Vlider.vue?");

/***/ }),

/***/ "./src/Vlider.vue?vue&type=script&lang=js&":
/*!*************************************************!*\
  !*** ./src/Vlider.vue?vue&type=script&lang=js& ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Vlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./Vlider.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/Vlider.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Vlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://vlider/./src/Vlider.vue?");

/***/ }),

/***/ "./src/Vlider.vue?vue&type=template&id=410a1f6a&":
/*!*******************************************************!*\
  !*** ./src/Vlider.vue?vue&type=template&id=410a1f6a& ***!
  \*******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vlider_vue_vue_type_template_id_410a1f6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./Vlider.vue?vue&type=template&id=410a1f6a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Vlider.vue?vue&type=template&id=410a1f6a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vlider_vue_vue_type_template_id_410a1f6a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vlider_vue_vue_type_template_id_410a1f6a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://vlider/./src/Vlider.vue?");

/***/ })

/******/ });
});