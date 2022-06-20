/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main-red: #c40505;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    /*outline: 1px solid red; */\n}\n\nhtml {\n    font-size: 62.5%;\n    height: 100vh;\n}\n\nbody {\n    font-size: 3rem;\n}\n\n.main-wrapper {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    flex-shrink: 0;\n    background-color: var(--main-red);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh1 {\n    font-size: 6rem;\n    margin: 1rem;\n}\n\nh2 {\n    font-size: 4rem;\n    margin: 1rem 0;\n}\n\n.menu-button {\n    display: none;\n    cursor: pointer;\n    margin: 20px;\n\n}\n\n.menu-button-row-1,\n.menu-button-row-2,\n.menu-button-row-3 {\n    width: 35px;\n    height: 5px;\n    background-color: black;\n    margin: 6px 0;\n    transition: 0.4s;\n}\n\n.change .menu-button-row-1 {\n    -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n    transform: rotate(-45deg) translate(-9px, 6px);\n}\n\n.change .menu-button-row-2 {\n    opacity: 0;\n}\n\n.change .menu-button-row-3 {\n    -webkit-transform: rotate(45deg) translate(-8px, -8px);\n    transform: rotate(45deg) translate(-8px, -8px);\n}\n\nmain {\n    flex: 1 0 auto;\n    background-color: bisque;\n    display: flex;\n}\n\n.menu {\n    flex-shrink: 0;\n    background-color: #f6f6f6;\n}\n\n.menu li {\n    cursor: pointer;\n}\n\n.content {\n    flex: 1 0 auto;\n    background-color: rgb(250 250 250);\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n\n\n.content>* {\n    padding: 1.25rem;\n    margin: 1.25rem;\n}\n\n.inbox-wrapper {\n    width: 100%;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    background-color: var(--main-red);\n    font-size: 2rem;\n}\n\nfooter>* {\n    padding: 0.5rem;\n}\n\n.github-logo {\n    display: block;\n    width: 32px;\n    height: auto;\n}\n\nnav {\n    padding: 2rem;\n    margin: 2rem;\n    font-size: 3rem;\n}\n\nul {\n    list-style-type: none;\n}\n\nli {\n    margin: 1rem;\n}\n\n\n.task-card {\n    margin: 1rem;\n    padding: 1rem;\n    border: 2px solid black;\n    border-radius: 1rem;\n    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n}\n\n.blur {\n    filter: blur(5px);\n}\n\n\n.active {\n    display: block;\n}\n\n.inactive {\n    display: none;\n}\n\n\n@media screen and (max-width: 500px) {\n    .menu-button {\n        display: inline-block;\n    }\n\n    .menu {\n        /*hidind and showing sidebar on small screen*/\n        display: none;\n    }\n}\n\nmain.active-overlay {\n    /*hidind and showing sidebar on small screen*/\n    display: block;\n}\n\n.menu.active-overlay {\n    /*hidind and showing sidebar on small screen*/\n    position: relative;\n    height: 100%;\n    z-index: 99;\n    display: flex;\n}\n\n.menu.active-overlay>nav {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    font-size: 4rem;\n}\n\n.add-task-container.active {\n    display: flex;\n    flex-direction: column;\n    margin: 2rem auto;\n    border: 1px solid black;\n    border-radius: 1rem;\n    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n}\n\n.add-task-buttons-wrapper>button {\n    margin: 1rem;\n    padding: 1rem;\n}\n\n.add-task-btn {\n    margin: 1rem;\n    padding: 1rem;\n    background-color: transparent;\n    border-color: var(--main-red);\n    cursor: pointer;\n    transition-duration: 0.4s;\n    border-radius: 0.5rem;\n    font-size: 1.75rem;\n\n}\n\n\n.add-task-btn:hover {\n    background-color: var(--main-red);\n    color: white;\n}\n\n\nform {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    margin: 1rem;\n    padding: 1rem;\n}\n\n\nlabel {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-task-container input,\n.add-task-container select,\n.add-task-container textarea {\n    width: 200px;\n}\n\n.high-importance {\n    border-color: rgb(237, 104, 104);\n}\n\n.medium-importance {\n    border-color: rgb(237, 228, 104);\n}\n\n.low-importance {\n    border-color: rgb(104, 237, 144);\n}\n\n.checked {\n    text-decoration: line-through;\n    opacity: 0.5;\n}\n\n.trash-btn {\n    display: block;\n    width: 32px;\n    height: auto;\n    cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,iCAAiC;IACjC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;;AAEhB;;AAEA;;;IAGI,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,sDAAsD;IACtD,8CAA8C;AAClD;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,sDAAsD;IACtD,8CAA8C;AAClD;;AAEA;IACI,cAAc;IACd,wBAAwB;IACxB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,kCAAkC;IAClC,aAAa;IACb,uBAAuB;IACvB,uBAAuB;AAC3B;;;;AAIA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kDAAkD;IAClD,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,2BAA2B;IAC3B,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI;QACI,qBAAqB;IACzB;;IAEA;QACI,6CAA6C;QAC7C,aAAa;IACjB;AACJ;;AAEA;IACI,6CAA6C;IAC7C,cAAc;AAClB;;AAEA;IACI,6CAA6C;IAC7C,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,kDAAkD;AACtD;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,6BAA6B;IAC7B,eAAe;IACf,yBAAyB;IACzB,qBAAqB;IACrB,kBAAkB;;AAEtB;;;AAGA;IACI,iCAAiC;IACjC,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,YAAY;IACZ,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;;IAGI,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,eAAe;AACnB","sourcesContent":[":root {\n    --main-red: #c40505;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    /*outline: 1px solid red; */\n}\n\nhtml {\n    font-size: 62.5%;\n    height: 100vh;\n}\n\nbody {\n    font-size: 3rem;\n}\n\n.main-wrapper {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    flex-shrink: 0;\n    background-color: var(--main-red);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh1 {\n    font-size: 6rem;\n    margin: 1rem;\n}\n\nh2 {\n    font-size: 4rem;\n    margin: 1rem 0;\n}\n\n.menu-button {\n    display: none;\n    cursor: pointer;\n    margin: 20px;\n\n}\n\n.menu-button-row-1,\n.menu-button-row-2,\n.menu-button-row-3 {\n    width: 35px;\n    height: 5px;\n    background-color: black;\n    margin: 6px 0;\n    transition: 0.4s;\n}\n\n.change .menu-button-row-1 {\n    -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n    transform: rotate(-45deg) translate(-9px, 6px);\n}\n\n.change .menu-button-row-2 {\n    opacity: 0;\n}\n\n.change .menu-button-row-3 {\n    -webkit-transform: rotate(45deg) translate(-8px, -8px);\n    transform: rotate(45deg) translate(-8px, -8px);\n}\n\nmain {\n    flex: 1 0 auto;\n    background-color: bisque;\n    display: flex;\n}\n\n.menu {\n    flex-shrink: 0;\n    background-color: #f6f6f6;\n}\n\n.menu li {\n    cursor: pointer;\n}\n\n.content {\n    flex: 1 0 auto;\n    background-color: rgb(250 250 250);\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n\n\n.content>* {\n    padding: 1.25rem;\n    margin: 1.25rem;\n}\n\n.inbox-wrapper {\n    width: 100%;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    background-color: var(--main-red);\n    font-size: 2rem;\n}\n\nfooter>* {\n    padding: 0.5rem;\n}\n\n.github-logo {\n    display: block;\n    width: 32px;\n    height: auto;\n}\n\nnav {\n    padding: 2rem;\n    margin: 2rem;\n    font-size: 3rem;\n}\n\nul {\n    list-style-type: none;\n}\n\nli {\n    margin: 1rem;\n}\n\n\n.task-card {\n    margin: 1rem;\n    padding: 1rem;\n    border: 2px solid black;\n    border-radius: 1rem;\n    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n}\n\n.blur {\n    filter: blur(5px);\n}\n\n\n.active {\n    display: block;\n}\n\n.inactive {\n    display: none;\n}\n\n\n@media screen and (max-width: 500px) {\n    .menu-button {\n        display: inline-block;\n    }\n\n    .menu {\n        /*hidind and showing sidebar on small screen*/\n        display: none;\n    }\n}\n\nmain.active-overlay {\n    /*hidind and showing sidebar on small screen*/\n    display: block;\n}\n\n.menu.active-overlay {\n    /*hidind and showing sidebar on small screen*/\n    position: relative;\n    height: 100%;\n    z-index: 99;\n    display: flex;\n}\n\n.menu.active-overlay>nav {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    font-size: 4rem;\n}\n\n.add-task-container.active {\n    display: flex;\n    flex-direction: column;\n    margin: 2rem auto;\n    border: 1px solid black;\n    border-radius: 1rem;\n    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n}\n\n.add-task-buttons-wrapper>button {\n    margin: 1rem;\n    padding: 1rem;\n}\n\n.add-task-btn {\n    margin: 1rem;\n    padding: 1rem;\n    background-color: transparent;\n    border-color: var(--main-red);\n    cursor: pointer;\n    transition-duration: 0.4s;\n    border-radius: 0.5rem;\n    font-size: 1.75rem;\n\n}\n\n\n.add-task-btn:hover {\n    background-color: var(--main-red);\n    color: white;\n}\n\n\nform {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    margin: 1rem;\n    padding: 1rem;\n}\n\n\nlabel {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-task-container input,\n.add-task-container select,\n.add-task-container textarea {\n    width: 200px;\n}\n\n.high-importance {\n    border-color: rgb(237, 104, 104);\n}\n\n.medium-importance {\n    border-color: rgb(237, 228, 104);\n}\n\n.low-importance {\n    border-color: rgb(104, 237, 144);\n}\n\n.checked {\n    text-decoration: line-through;\n    opacity: 0.5;\n}\n\n.trash-btn {\n    display: block;\n    width: 32px;\n    height: auto;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/task-logic.js":
/*!***************************!*\
  !*** ./src/task-logic.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskToTaskList": () => (/* binding */ addTaskToTaskList),
/* harmony export */   "addToLocalStorage": () => (/* binding */ addToLocalStorage),
/* harmony export */   "clearLocalStorage": () => (/* binding */ clearLocalStorage),
/* harmony export */   "getFromLocalStorage": () => (/* binding */ getFromLocalStorage),
/* harmony export */   "setEmptyArrayTaskList": () => (/* binding */ setEmptyArrayTaskList),
/* harmony export */   "taskList": () => (/* binding */ taskList)
/* harmony export */ });
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");




let taskList = [];

function setEmptyArrayTaskList(){
    taskList = [];
}

class Task {
    constructor(taskName, taskDetails, taskCategory, taskDate, taskPriority) {
        this.taskName = taskName;
        this.taskDetails = taskDetails;
        this.taskCategory = taskCategory;
        this.taskDate = taskDate;
        this.taskPriority = taskPriority;
        this.checked = false;
    }
}

function addTaskToTaskList() {
    if (taskList === null) {
        setEmptyArrayTaskList();
    }

    let task = new Task(
        document.querySelector("#task-name-input").value,
        document.querySelector("#task-details-input").value,
        document.querySelector("#task-category-input").value,
        document.querySelector("#task-date-input").value,
        document.querySelector("#task-priority-input").value,
    )

    taskList.push(task);
    addToLocalStorage();
    document.querySelector("#task-name-input").value = "";
    document.querySelector("#task-details-input").value = "";
    document.querySelector("#task-category-input").value = "";
    document.querySelector("#task-date-input").value = "";
    document.querySelector("#task-priority-input").value = "";
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.createInbox)();
}

/* const taskFactory = (taskName, taskDetails, taskCategory) => {
    return {taskName, taskDetails, taskCategory}
} */

/* let todoObject1 = taskFactory("task1", "task1", "task1");
let todoObject2 = taskFactory("task2", "task2", "task2"); */

/* (function addTaskToTaskList(){
    if (taskList === null) {
        taskList = [];
    }
    taskList.push(todoObject1);
    taskList.push(todoObject2);
})() */

function addToLocalStorage() {
    localStorage.setItem("taskListLocal", JSON.stringify(taskList));
}

function getFromLocalStorage() {
    taskList = JSON.parse(localStorage.getItem("taskListLocal"));
}

function clearLocalStorage() {
    localStorage.clear();
}

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearContent": () => (/* binding */ clearContent),
/* harmony export */   "createInbox": () => (/* binding */ createInbox),
/* harmony export */   "renderPage": () => (/* binding */ renderPage),
/* harmony export */   "toggleAddTaskContainer": () => (/* binding */ toggleAddTaskContainer)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github.png */ "./src/github.png");
/* harmony import */ var _trash_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trash.png */ "./src/trash.png");
/* harmony import */ var _task_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-logic */ "./src/task-logic.js");







const renderPage = () => {
    createWrapper();
    createHeader();
    createMain();
    createFooter();
    createPage();
};

const createWrapper = () => {
    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('main-wrapper');
    
    window.addEventListener("resize", function(){
        if (window.innerWidth > 500) {
            document.querySelector("main").classList.remove("active-overlay")
            document.querySelector(".menu").classList.remove("active-overlay");
            document.querySelector(".menu-button").classList.remove("change");
        }
    });
    
    return mainWrapper;
}

const createHeader = () => {
    const header = document.createElement("header");
    const headerName = document.createElement("h1");
    headerName.textContent = "Todo List";
    const headerMenuButton = document.createElement("div");
    headerMenuButton.classList.add("menu-button");
    const headerMenuButtonRow1 = document.createElement("div");
    headerMenuButtonRow1.classList.add("menu-button-row-1");
    const headerMenuButtonRow2 = document.createElement("div");
    headerMenuButtonRow2.classList.add("menu-button-row-2");
    const headerMenuButtonRow3 = document.createElement("div");
    headerMenuButtonRow3.classList.add("menu-button-row-3");
    header.appendChild(headerName);
    header.appendChild(headerMenuButton);
    headerMenuButton.appendChild(headerMenuButtonRow1);
    headerMenuButton.appendChild(headerMenuButtonRow2);
    headerMenuButton.appendChild(headerMenuButtonRow3);
    headerMenuButton.addEventListener('click', () => {
    headerMenuButton.classList.toggle("change");
    });
    headerMenuButton.addEventListener('click', () => {
        document.querySelector("main").classList.toggle("active-overlay");
        document.querySelector(".menu").classList.toggle("active-overlay");
    });

    const trash = document.createElement("button");
    trash.textContent = "Delete local storage";
    trash.addEventListener("click", _task_logic__WEBPACK_IMPORTED_MODULE_3__.clearLocalStorage);
    header.appendChild(trash);
    
    return header;
}

const createMain = () => {
    const main = document.createElement("main");
    const mainMenuDiv = document.createElement("div");
    mainMenuDiv.classList.add("menu");
    const mainMenuDivNav = document.createElement("nav");
    const mainMenuDivNavUl = document.createElement("ul");
    const mainMenuDivNavUlLi1 = document.createElement("li");
    mainMenuDivNavUlLi1.classList.add("nav-list-inbox");
    mainMenuDivNavUlLi1.textContent = "Inbox";
    const mainMenuDivNavUlLi2 = document.createElement("li");
    mainMenuDivNavUlLi2.classList.add("nav-list-today");
    mainMenuDivNavUlLi2.textContent = "Today";
    const mainMenuDivNavUlLi3 = document.createElement("li");
    mainMenuDivNavUlLi3.classList.add("nav-list-week");
    mainMenuDivNavUlLi3.textContent = "This Week"
    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("content");
    main.appendChild(mainMenuDiv);
    mainMenuDiv.appendChild(mainMenuDivNav);
    mainMenuDivNav.appendChild(mainMenuDivNavUl);
    mainMenuDivNavUl.appendChild(mainMenuDivNavUlLi1);
    mainMenuDivNavUl.appendChild(mainMenuDivNavUlLi2);
    mainMenuDivNavUl.appendChild(mainMenuDivNavUlLi3);
    main.appendChild(mainContentDiv);
    
    return main;
}

const createFooter = () => {
    const footer = document.createElement("footer");
    const footerDiv = document.createElement("div");
    const footerLink = document.createElement("a");
    const footerLinkImg = document.createElement("img");
    footerLinkImg.classList.add('github-logo');
    footerLinkImg.setAttribute("src", _github_png__WEBPACK_IMPORTED_MODULE_1__);
    footerDiv.textContent = "Developed by miroslav-zarenkov";
    footerLink.setAttribute("href", "https://github.com/miroslav-zarenkov");
    footerLink.setAttribute("target", "_blank");
    footerLink.setAttribute("rel", "noopener noreferrer");
    footer.appendChild(footerDiv);
    footer.appendChild(footerLink);
    footerLink.appendChild(footerLinkImg);
    return footer;
}

const createPage = () => {
    document.body.appendChild(createWrapper());
    document.querySelector(".main-wrapper").appendChild(createHeader());
    document.querySelector(".main-wrapper").appendChild(createMain());
    document.querySelector(".main-wrapper").appendChild(createFooter());
    createInbox();
    document.querySelector(".nav-list-inbox").addEventListener("click", createInbox);
    document.querySelector(".nav-list-today").addEventListener("click", createToday);
    document.querySelector(".nav-list-week").addEventListener("click", createWeek);
}

const clearContent = () => {
    let myNode = document.querySelector(".content");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
}
}

const createInbox = () => {
    clearContent();
    const inboxWrapper = document.createElement("div");
    inboxWrapper.classList.add("inbox-wrapper");
    const inboxHeader = document.createElement("h2");
    inboxHeader.textContent = "Inbox";
    inboxWrapper.appendChild(inboxHeader);
    document.querySelector(".content").appendChild(inboxWrapper);
    const listWrapper = document.createElement("div");
    listWrapper.classList.add("list-wrapper");
    inboxWrapper.appendChild(listWrapper);
    createTaskElement();
    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-btn", "active");
    addTaskBtn.textContent = "Add task";
    addTaskBtn.addEventListener("click", toggleAddTaskContainer);
    inboxWrapper.appendChild(addTaskBtn);
    addTaskContainer();
}


const createToday = () => {
    clearContent();
    const todayWrapper = document.createElement("div");
    todayWrapper.classList.add("today-wrapper");
    const todayHeader = document.createElement("h2");
    todayHeader.textContent = "Today";
    todayWrapper.appendChild(todayHeader);
    document.querySelector(".content").appendChild(todayWrapper);
    const taskObjectsList = document.createElement("div");
    taskObjectsList.textContent = JSON.stringify(_task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList);
    todayWrapper.appendChild(taskObjectsList);

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add task";
    todayWrapper.appendChild(addTaskBtn);
}

const createWeek = () => {
    clearContent();
    const weekWrapper = document.createElement("div");
    weekWrapper.classList.add("week-wrapper");
    const weekHeader = document.createElement("h2");
    weekHeader.textContent = "This Week";
    weekWrapper.appendChild(weekHeader);
    document.querySelector(".content").appendChild(weekWrapper);
    const taskObjectsList = document.createElement("div");
    taskObjectsList.textContent = JSON.stringify(_task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList);
    weekWrapper.appendChild(taskObjectsList);

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add task";
    weekWrapper.appendChild(addTaskBtn);
}

const createTaskElement = () => {
    ;(0,_task_logic__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)();
    if (_task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList === null) (0,_task_logic__WEBPACK_IMPORTED_MODULE_3__.setEmptyArrayTaskList)();
    for (let i = 0; i < _task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList.length; i++) {
    console.log(_task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList[i]);
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    taskCard.setAttribute("data-number", i);
    if (_task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList[i].taskPriority === "high") taskCard.classList.add("high-importance");
    if (_task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList[i].taskPriority === "medium") taskCard.classList.add("medium-importance");
    if (_task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList[i].taskPriority === "low") taskCard.classList.add("low-importance");
    if (_task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList[i].checked === true) taskCard.classList.add("checked");
    
    const taskCardCheck = document.createElement("input");
    taskCardCheck.setAttribute("type", "checkbox");
    if (_task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList[i].checked === true) taskCardCheck.checked = true;
    const taskCardName = document.createElement("div");
    taskCardName.textContent = _task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList[i].taskName;

    const deleteTaskBtn = document.createElement("img");
    deleteTaskBtn.classList.add("trash-btn");
    deleteTaskBtn.setAttribute("src", _trash_png__WEBPACK_IMPORTED_MODULE_2__);
    taskCard.appendChild(taskCardCheck);
    taskCard.appendChild(taskCardName);
    taskCard.appendChild(deleteTaskBtn);
    document.querySelector(".list-wrapper").appendChild(taskCard);
    }

    const checkBtns = document.querySelectorAll("input[type=checkbox]")
    checkBtns.forEach(btn => {
        btn.addEventListener("click", event => {
            btn.checked != btn.checked;
            const taskNumber = btn.parentElement.getAttribute("data-number");
            _task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList[taskNumber].checked = btn.checked;
            console.log(_task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList[taskNumber].checked)
            btn.parentElement.classList.toggle("checked");
            (0,_task_logic__WEBPACK_IMPORTED_MODULE_3__.addToLocalStorage)();
        })
    })

    const deleteBtn = document.querySelectorAll(".trash-btn");
    deleteBtn.forEach(btn => {
        btn.addEventListener("click", event => {
            console.log(_task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList);
            const taskNumber = btn.parentElement.getAttribute("data-number");
            _task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList.splice(taskNumber, 1)
            console.log(_task_logic__WEBPACK_IMPORTED_MODULE_3__.taskList);
            (0,_task_logic__WEBPACK_IMPORTED_MODULE_3__.addToLocalStorage)();
            createInbox();
        })
    })
}
    /* taskList.forEach(element => {
    const taskObjectsList = document.createElement("div");
    taskObjectsList.textContent = JSON.stringify(element);
    document.querySelector(".list-wrapper").appendChild(taskObjectsList);
}); */


const addTaskContainer =() => {
    const addTaskContainer = document.createElement("div");
    addTaskContainer.classList.add("add-task-container", "inactive");
    document.querySelector(".inbox-wrapper").appendChild(addTaskContainer);
    const addTaskForm = document.createElement("form");
    addTaskForm.setAttribute("action", "#");
    addTaskForm.setAttribute("method", "post");

    const taskNameLabel = document.createElement("label");
    taskNameLabel.setAttribute("for", "task-name-input");
    taskNameLabel.textContent = "Task Name";
    const taskNameLabelInput = document.createElement("input");
    taskNameLabelInput.setAttribute("type", "text");
    taskNameLabelInput.setAttribute("id", "task-name-input");
    taskNameLabelInput.setAttribute("name", "task-name-input");
    taskNameLabel.appendChild(taskNameLabelInput);

    const taskDetailsLabel = document.createElement("label");
    taskDetailsLabel.setAttribute("for", "task-detail-input");
    taskDetailsLabel.textContent = "Task Details";
    const taskDetailsLabelInput = document.createElement("textarea");
    taskDetailsLabelInput.setAttribute("id", "task-details-input");
    taskDetailsLabelInput.setAttribute("name", "task-details-input");
    taskDetailsLabel.appendChild(taskDetailsLabelInput);

    const taskCategoryLabel = document.createElement("label");
    taskCategoryLabel.setAttribute("for", "task-category-input");
    taskCategoryLabel.textContent = "Task Category";
    const taskCategoryLabelInput = document.createElement("input");
    taskCategoryLabelInput.setAttribute("type", "text");
    taskCategoryLabelInput.setAttribute("id", "task-category-input");
    taskCategoryLabelInput.setAttribute("name", "task-category-input");
    taskCategoryLabel.appendChild(taskCategoryLabelInput);

    const taskDateLabel = document.createElement("label");
    taskDateLabel.setAttribute("for", "task-date-input");
    taskDateLabel.textContent = "Task Date";
    const taskDateLabelInput = document.createElement("input");
    taskDateLabelInput.setAttribute("type", "date");
    taskDateLabelInput.setAttribute("id", "task-date-input");
    taskDateLabelInput.setAttribute("name", "task-date-input");
    taskDateLabel.appendChild(taskDateLabelInput);

    const taskPriorityabel = document.createElement("label");
    taskPriorityabel.setAttribute("for", "task-priority-input");
    taskPriorityabel.textContent = "Task Priority";
    const taskPriorityLabelInput = document.createElement("select");
    const taskPriorityLabelInputNone = document.createElement("option");
    taskPriorityLabelInputNone.textContent = "";
    taskPriorityLabelInputNone.setAttribute("value", "none");
    const taskPriorityLabelInputLow = document.createElement("option");
    taskPriorityLabelInputLow.textContent = "Low";
    taskPriorityLabelInputLow.setAttribute("value", "low");
    const taskPriorityLabelInputMedium = document.createElement("option");
    taskPriorityLabelInputMedium.textContent = "Medium";
    taskPriorityLabelInputMedium.setAttribute("value", "medium");
    const taskPriorityLabelInputHigh = document.createElement("option");
    taskPriorityLabelInputHigh.textContent = "High";
    taskPriorityLabelInputHigh.setAttribute("value", "high");
    taskPriorityLabelInput.setAttribute("id", "task-priority-input");
    taskPriorityLabelInput.setAttribute("name", "task-priority-input");
    taskPriorityLabelInput.appendChild(taskPriorityLabelInputNone);
    taskPriorityLabelInput.appendChild(taskPriorityLabelInputLow);
    taskPriorityLabelInput.appendChild(taskPriorityLabelInputMedium);
    taskPriorityLabelInput.appendChild(taskPriorityLabelInputHigh);
    taskPriorityabel.appendChild(taskPriorityLabelInput);

    addTaskForm.appendChild(taskNameLabel);
    addTaskForm.appendChild(taskDetailsLabel);
    addTaskForm.appendChild(taskCategoryLabel);
    addTaskForm.appendChild(taskDateLabel);
    addTaskForm.appendChild(taskPriorityabel);
    addTaskContainer.appendChild(addTaskForm);

    const addTaskContainerButtons = document.createElement('div');
    addTaskContainerButtons.classList.add('add-task-buttons-wrapper');
    addTaskContainer.appendChild(addTaskContainerButtons);
    const addTaskContainerConfirmBtn = document.createElement("button");
    addTaskContainerConfirmBtn.classList.add("confirm-new-task");
    addTaskContainerConfirmBtn.textContent = "Confirm";
    addTaskContainerButtons.appendChild(addTaskContainerConfirmBtn);
    addTaskContainerConfirmBtn.addEventListener("click", _task_logic__WEBPACK_IMPORTED_MODULE_3__.addTaskToTaskList);
    const addTaskContainerCancelBtn = document.createElement("button");
    addTaskContainerCancelBtn.classList.add("cancel-new-task");
    addTaskContainerCancelBtn.textContent = "Cancel";
    addTaskContainerButtons.appendChild(addTaskContainerCancelBtn);
    addTaskContainerCancelBtn.addEventListener("click", toggleAddTaskContainer);
    addTaskContainerCancelBtn.addEventListener("click", clearInput);
}

const toggleAddTaskContainer = () => {
    document.querySelector(".add-task-container").classList.toggle("inactive");
    document.querySelector(".add-task-container").classList.toggle("active");
    document.querySelector(".add-task-btn").classList.toggle("inactive");
    document.querySelector(".add-task-btn").classList.toggle("active");
}

const clearInput = () => {
    document.querySelector("#task-name-input").value = "";
    document.querySelector("#task-details-input").value = "";
    document.querySelector("#task-category-input").value = "";
}


/***/ }),

/***/ "./src/github.png":
/*!************************!*\
  !*** ./src/github.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a38fb992fc0b988f234.png";

/***/ }),

/***/ "./src/trash.png":
/*!***********************!*\
  !*** ./src/trash.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58cd60509fcccc3643f2.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");


document.addEventListener("DOMContentLoaded", _ui__WEBPACK_IMPORTED_MODULE_0__.renderPage)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7O0FDQWtDOztBQUVsQyw4Q0FBOEMsMkNBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2stbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbWFpbi1yZWQ6ICNjNDA1MDU7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5tYWluLXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1yZWQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDIwcHg7XFxuXFxufVxcblxcbi5tZW51LWJ1dHRvbi1yb3ctMSxcXG4ubWVudS1idXR0b24tcm93LTIsXFxuLm1lbnUtYnV0dG9uLXJvdy0zIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luOiA2cHggMDtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLmNoYW5nZSAubWVudS1idXR0b24tcm93LTEge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XFxufVxcblxcbi5jaGFuZ2UgLm1lbnUtYnV0dG9uLXJvdy0yIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNoYW5nZSAubWVudS1idXR0b24tcm93LTMge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XFxufVxcblxcbm1haW4ge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcbn1cXG5cXG4ubWVudSBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCAyNTAgMjUwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5cXG5cXG4uY29udGVudD4qIHtcXG4gICAgcGFkZGluZzogMS4yNXJlbTtcXG4gICAgbWFyZ2luOiAxLjI1cmVtO1xcbn1cXG5cXG4uaW5ib3gtd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcmVkKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5mb290ZXI+KiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmdpdGh1Yi1sb2dvIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbm5hdiB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcblxcbi50YXNrLWNhcmQge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggMnB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5ibHVyIHtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcblxcbi5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmluYWN0aXZlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLm1lbnUtYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgfVxcblxcbiAgICAubWVudSB7XFxuICAgICAgICAvKmhpZGluZCBhbmQgc2hvd2luZyBzaWRlYmFyIG9uIHNtYWxsIHNjcmVlbiovXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbm1haW4uYWN0aXZlLW92ZXJsYXkge1xcbiAgICAvKmhpZGluZCBhbmQgc2hvd2luZyBzaWRlYmFyIG9uIHNtYWxsIHNjcmVlbiovXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWVudS5hY3RpdmUtb3ZlcmxheSB7XFxuICAgIC8qaGlkaW5kIGFuZCBzaG93aW5nIHNpZGViYXIgb24gc21hbGwgc2NyZWVuKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWVudS5hY3RpdmUtb3ZlcmxheT5uYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAycHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9ucy13cmFwcGVyPmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1yZWQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcblxcbn1cXG5cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1yZWQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5cXG5sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hZGQtdGFzay1jb250YWluZXIgaW5wdXQsXFxuLmFkZC10YXNrLWNvbnRhaW5lciBzZWxlY3QsXFxuLmFkZC10YXNrLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmhpZ2gtaW1wb3J0YW5jZSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNywgMTA0LCAxMDQpO1xcbn1cXG5cXG4ubWVkaXVtLWltcG9ydGFuY2Uge1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzcsIDIyOCwgMTA0KTtcXG59XFxuXFxuLmxvdy1pbXBvcnRhbmNlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTA0LCAyMzcsIDE0NCk7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRyYXNoLWJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7O0FBRWhCOztBQUVBOzs7SUFHSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0RBQXNEO0lBQ3RELDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNEQUFzRDtJQUN0RCw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7Ozs7QUFJQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtEQUFrRDtJQUNsRCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksNkNBQTZDO1FBQzdDLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLDZDQUE2QztJQUM3QyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixrQkFBa0I7O0FBRXRCOzs7QUFHQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7OztJQUdJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1haW4tcmVkOiAjYzQwNTA1O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKm91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ubWFpbi13cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcmVkKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAyMHB4O1xcblxcbn1cXG5cXG4ubWVudS1idXR0b24tcm93LTEsXFxuLm1lbnUtYnV0dG9uLXJvdy0yLFxcbi5tZW51LWJ1dHRvbi1yb3ctMyB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogNnB4IDA7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5jaGFuZ2UgLm1lbnUtYnV0dG9uLXJvdy0xIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xcbn1cXG5cXG4uY2hhbmdlIC5tZW51LWJ1dHRvbi1yb3ctMiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jaGFuZ2UgLm1lbnUtYnV0dG9uLXJvdy0zIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleDogMSAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG59XFxuXFxuLm1lbnUgbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZmxleDogMSAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAgMjUwIDI1MCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuXFxuXFxuLmNvbnRlbnQ+KiB7XFxuICAgIHBhZGRpbmc6IDEuMjVyZW07XFxuICAgIG1hcmdpbjogMS4yNXJlbTtcXG59XFxuXFxuLmluYm94LXdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXJlZCk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuZm9vdGVyPioge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5naXRodWItbG9nbyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5uYXYge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG5cXG4udGFzay1jYXJkIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IDJweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uYmx1ciB7XFxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG5cXG4uYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIC5tZW51LWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUge1xcbiAgICAgICAgLypoaWRpbmQgYW5kIHNob3dpbmcgc2lkZWJhciBvbiBzbWFsbCBzY3JlZW4qL1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5tYWluLmFjdGl2ZS1vdmVybGF5IHtcXG4gICAgLypoaWRpbmQgYW5kIHNob3dpbmcgc2lkZWJhciBvbiBzbWFsbCBzY3JlZW4qL1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1lbnUuYWN0aXZlLW92ZXJsYXkge1xcbiAgICAvKmhpZGluZCBhbmQgc2hvd2luZyBzaWRlYmFyIG9uIHNtYWxsIHNjcmVlbiovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiA5OTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1lbnUuYWN0aXZlLW92ZXJsYXk+bmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5hZGQtdGFzay1jb250YWluZXIuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggMnB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbnMtd3JhcHBlcj5idXR0b24ge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tcmVkKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG5cXG59XFxuXFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcmVkKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuXFxubGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGFpbmVyIGlucHV0LFxcbi5hZGQtdGFzay1jb250YWluZXIgc2VsZWN0LFxcbi5hZGQtdGFzay1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5oaWdoLWltcG9ydGFuY2Uge1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzcsIDEwNCwgMTA0KTtcXG59XFxuXFxuLm1lZGl1bS1pbXBvcnRhbmNlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM3LCAyMjgsIDEwNCk7XFxufVxcblxcbi5sb3ctaW1wb3J0YW5jZSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDEwNCwgMjM3LCAxNDQpO1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50cmFzaC1idG4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IHRhc2tMaXN0LCBhZGRUYXNrVG9UYXNrTGlzdCwgZ2V0RnJvbUxvY2FsU3RvcmFnZSwgY2xlYXJMb2NhbFN0b3JhZ2UsIHNldEVtcHR5QXJyYXlUYXNrTGlzdCwgYWRkVG9Mb2NhbFN0b3JhZ2UgfTtcbmltcG9ydCB7IGNsZWFyQ29udGVudCwgY3JlYXRlSW5ib3gsIHRvZ2dsZUFkZFRhc2tDb250YWluZXIgfSBmcm9tIFwiLi91aS5qc1wiO1xuXG5cbmxldCB0YXNrTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBzZXRFbXB0eUFycmF5VGFza0xpc3QoKXtcbiAgICB0YXNrTGlzdCA9IFtdO1xufVxuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXNrTmFtZSwgdGFza0RldGFpbHMsIHRhc2tDYXRlZ29yeSwgdGFza0RhdGUsIHRhc2tQcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRhc2tOYW1lID0gdGFza05hbWU7XG4gICAgICAgIHRoaXMudGFza0RldGFpbHMgPSB0YXNrRGV0YWlscztcbiAgICAgICAgdGhpcy50YXNrQ2F0ZWdvcnkgPSB0YXNrQ2F0ZWdvcnk7XG4gICAgICAgIHRoaXMudGFza0RhdGUgPSB0YXNrRGF0ZTtcbiAgICAgICAgdGhpcy50YXNrUHJpb3JpdHkgPSB0YXNrUHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvVGFza0xpc3QoKSB7XG4gICAgaWYgKHRhc2tMaXN0ID09PSBudWxsKSB7XG4gICAgICAgIHNldEVtcHR5QXJyYXlUYXNrTGlzdCgpO1xuICAgIH1cblxuICAgIGxldCB0YXNrID0gbmV3IFRhc2soXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lLWlucHV0XCIpLnZhbHVlLFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGV0YWlscy1pbnB1dFwiKS52YWx1ZSxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWNhdGVnb3J5LWlucHV0XCIpLnZhbHVlLFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGF0ZS1pbnB1dFwiKS52YWx1ZSxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByaW9yaXR5LWlucHV0XCIpLnZhbHVlLFxuICAgIClcblxuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZS1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRldGFpbHMtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1jYXRlZ29yeS1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGUtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcmlvcml0eS1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgY3JlYXRlSW5ib3goKTtcbn1cblxuLyogY29uc3QgdGFza0ZhY3RvcnkgPSAodGFza05hbWUsIHRhc2tEZXRhaWxzLCB0YXNrQ2F0ZWdvcnkpID0+IHtcbiAgICByZXR1cm4ge3Rhc2tOYW1lLCB0YXNrRGV0YWlscywgdGFza0NhdGVnb3J5fVxufSAqL1xuXG4vKiBsZXQgdG9kb09iamVjdDEgPSB0YXNrRmFjdG9yeShcInRhc2sxXCIsIFwidGFzazFcIiwgXCJ0YXNrMVwiKTtcbmxldCB0b2RvT2JqZWN0MiA9IHRhc2tGYWN0b3J5KFwidGFzazJcIiwgXCJ0YXNrMlwiLCBcInRhc2syXCIpOyAqL1xuXG4vKiAoZnVuY3Rpb24gYWRkVGFza1RvVGFza0xpc3QoKXtcbiAgICBpZiAodGFza0xpc3QgPT09IG51bGwpIHtcbiAgICAgICAgdGFza0xpc3QgPSBbXTtcbiAgICB9XG4gICAgdGFza0xpc3QucHVzaCh0b2RvT2JqZWN0MSk7XG4gICAgdGFza0xpc3QucHVzaCh0b2RvT2JqZWN0Mik7XG59KSgpICovXG5cbmZ1bmN0aW9uIGFkZFRvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza0xpc3RMb2NhbFwiLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xufVxuXG5mdW5jdGlvbiBnZXRGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tMaXN0TG9jYWxcIikpO1xufVxuXG5mdW5jdGlvbiBjbGVhckxvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbn0iLCJleHBvcnQgeyByZW5kZXJQYWdlLCBjbGVhckNvbnRlbnQsIGNyZWF0ZUluYm94LCB0b2dnbGVBZGRUYXNrQ29udGFpbmVyIH07XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBHaXRodWJMb2dvIGZyb20gJy4vZ2l0aHViLnBuZyc7XG5pbXBvcnQgVHJhc2hJbWFnZSBmcm9tICcuL3RyYXNoLnBuZydcbmltcG9ydCB7IHRhc2tMaXN0LCBhZGRUYXNrVG9UYXNrTGlzdCwgZ2V0RnJvbUxvY2FsU3RvcmFnZSwgY2xlYXJMb2NhbFN0b3JhZ2UsIHNldEVtcHR5QXJyYXlUYXNrTGlzdCxhZGRUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vdGFzay1sb2dpYyc7XG5cblxuY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICBjcmVhdGVXcmFwcGVyKCk7XG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgY3JlYXRlTWFpbigpO1xuICAgIGNyZWF0ZUZvb3RlcigpO1xuICAgIGNyZWF0ZVBhZ2UoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtYWluLXdyYXBwZXInKTtcbiAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA1MDApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtb3ZlcmxheVwiKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtb3ZlcmxheVwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcImNoYW5nZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtYWluV3JhcHBlcjtcbn1cblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgaGVhZGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXJOYW1lLnRleHRDb250ZW50ID0gXCJUb2RvIExpc3RcIjtcbiAgICBjb25zdCBoZWFkZXJNZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJNZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ1dHRvblwiKTtcbiAgICBjb25zdCBoZWFkZXJNZW51QnV0dG9uUm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyTWVudUJ1dHRvblJvdzEuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uLXJvdy0xXCIpO1xuICAgIGNvbnN0IGhlYWRlck1lbnVCdXR0b25Sb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJNZW51QnV0dG9uUm93Mi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b24tcm93LTJcIik7XG4gICAgY29uc3QgaGVhZGVyTWVudUJ1dHRvblJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlck1lbnVCdXR0b25Sb3czLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ1dHRvbi1yb3ctM1wiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTmFtZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlck1lbnVCdXR0b24pO1xuICAgIGhlYWRlck1lbnVCdXR0b24uYXBwZW5kQ2hpbGQoaGVhZGVyTWVudUJ1dHRvblJvdzEpO1xuICAgIGhlYWRlck1lbnVCdXR0b24uYXBwZW5kQ2hpbGQoaGVhZGVyTWVudUJ1dHRvblJvdzIpO1xuICAgIGhlYWRlck1lbnVCdXR0b24uYXBwZW5kQ2hpbGQoaGVhZGVyTWVudUJ1dHRvblJvdzMpO1xuICAgIGhlYWRlck1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGVhZGVyTWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2hhbmdlXCIpO1xuICAgIH0pO1xuICAgIGhlYWRlck1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmUtb3ZlcmxheVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmUtb3ZlcmxheVwiKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0cmFzaC50ZXh0Q29udGVudCA9IFwiRGVsZXRlIGxvY2FsIHN0b3JhZ2VcIjtcbiAgICB0cmFzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJMb2NhbFN0b3JhZ2UpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0cmFzaCk7XG4gICAgXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgY29uc3QgbWFpbk1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5NZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICAgIGNvbnN0IG1haW5NZW51RGl2TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBtYWluTWVudURpdk5hdlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IG1haW5NZW51RGl2TmF2VWxMaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbWFpbk1lbnVEaXZOYXZVbExpMS5jbGFzc0xpc3QuYWRkKFwibmF2LWxpc3QtaW5ib3hcIik7XG4gICAgbWFpbk1lbnVEaXZOYXZVbExpMS50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgICBjb25zdCBtYWluTWVudURpdk5hdlVsTGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG1haW5NZW51RGl2TmF2VWxMaTIuY2xhc3NMaXN0LmFkZChcIm5hdi1saXN0LXRvZGF5XCIpO1xuICAgIG1haW5NZW51RGl2TmF2VWxMaTIudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgY29uc3QgbWFpbk1lbnVEaXZOYXZVbExpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBtYWluTWVudURpdk5hdlVsTGkzLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlzdC13ZWVrXCIpO1xuICAgIG1haW5NZW51RGl2TmF2VWxMaTMudGV4dENvbnRlbnQgPSBcIlRoaXMgV2Vla1wiXG4gICAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Db250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbk1lbnVEaXYpO1xuICAgIG1haW5NZW51RGl2LmFwcGVuZENoaWxkKG1haW5NZW51RGl2TmF2KTtcbiAgICBtYWluTWVudURpdk5hdi5hcHBlbmRDaGlsZChtYWluTWVudURpdk5hdlVsKTtcbiAgICBtYWluTWVudURpdk5hdlVsLmFwcGVuZENoaWxkKG1haW5NZW51RGl2TmF2VWxMaTEpO1xuICAgIG1haW5NZW51RGl2TmF2VWwuYXBwZW5kQ2hpbGQobWFpbk1lbnVEaXZOYXZVbExpMik7XG4gICAgbWFpbk1lbnVEaXZOYXZVbC5hcHBlbmRDaGlsZChtYWluTWVudURpdk5hdlVsTGkzKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50RGl2KTtcbiAgICBcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgZm9vdGVyTGlua0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZm9vdGVyTGlua0ltZy5jbGFzc0xpc3QuYWRkKCdnaXRodWItbG9nbycpO1xuICAgIGZvb3RlckxpbmtJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIEdpdGh1YkxvZ28pO1xuICAgIGZvb3RlckRpdi50ZXh0Q29udGVudCA9IFwiRGV2ZWxvcGVkIGJ5IG1pcm9zbGF2LXphcmVua292XCI7XG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL21pcm9zbGF2LXphcmVua292XCIpO1xuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwibm9vcGVuZXIgbm9yZWZlcnJlclwiKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG4gICAgZm9vdGVyTGluay5hcHBlbmRDaGlsZChmb290ZXJMaW5rSW1nKTtcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5jb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcHBlcigpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gICAgY3JlYXRlSW5ib3goKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1saXN0LWluYm94XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVJbmJveCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtbGlzdC10b2RheVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVG9kYXkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWxpc3Qtd2Vla1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlV2Vlayk7XG59XG5cbmNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgICBsZXQgbXlOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIHdoaWxlIChteU5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgbXlOb2RlLnJlbW92ZUNoaWxkKG15Tm9kZS5sYXN0Q2hpbGQpO1xufVxufVxuXG5jb25zdCBjcmVhdGVJbmJveCA9ICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBjb25zdCBpbmJveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluYm94V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaW5ib3gtd3JhcHBlclwiKTtcbiAgICBjb25zdCBpbmJveEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBpbmJveEhlYWRlci50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgICBpbmJveFdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5ib3hIZWFkZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5hcHBlbmRDaGlsZChpbmJveFdyYXBwZXIpO1xuICAgIGNvbnN0IGxpc3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaXN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibGlzdC13cmFwcGVyXCIpO1xuICAgIGluYm94V3JhcHBlci5hcHBlbmRDaGlsZChsaXN0V3JhcHBlcik7XG4gICAgY3JlYXRlVGFza0VsZW1lbnQoKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idG5cIiwgXCJhY3RpdmVcIik7XG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIHRhc2tcIjtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVBZGRUYXNrQ29udGFpbmVyKTtcbiAgICBpbmJveFdyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgYWRkVGFza0NvbnRhaW5lcigpO1xufVxuXG5cbmNvbnN0IGNyZWF0ZVRvZGF5ID0gKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNvbnN0IHRvZGF5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kYXlXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RheS13cmFwcGVyXCIpO1xuICAgIGNvbnN0IHRvZGF5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRvZGF5SGVhZGVyLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIHRvZGF5V3JhcHBlci5hcHBlbmRDaGlsZCh0b2RheUhlYWRlcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLmFwcGVuZENoaWxkKHRvZGF5V3JhcHBlcik7XG4gICAgY29uc3QgdGFza09iamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrT2JqZWN0c0xpc3QudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCk7XG4gICAgdG9kYXlXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tPYmplY3RzTGlzdCk7XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuICAgIHRvZGF5V3JhcHBlci5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbn1cblxuY29uc3QgY3JlYXRlV2VlayA9ICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBjb25zdCB3ZWVrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2Vla1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndlZWstd3JhcHBlclwiKTtcbiAgICBjb25zdCB3ZWVrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHdlZWtIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRoaXMgV2Vla1wiO1xuICAgIHdlZWtXcmFwcGVyLmFwcGVuZENoaWxkKHdlZWtIZWFkZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5hcHBlbmRDaGlsZCh3ZWVrV3JhcHBlcik7XG4gICAgY29uc3QgdGFza09iamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrT2JqZWN0c0xpc3QudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCk7XG4gICAgd2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza09iamVjdHNMaXN0KTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG4gICAgd2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG59XG5cbmNvbnN0IGNyZWF0ZVRhc2tFbGVtZW50ID0gKCkgPT4ge1xuICAgIGdldEZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICBpZiAodGFza0xpc3QgPT09IG51bGwpIHNldEVtcHR5QXJyYXlUYXNrTGlzdCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFtpXSk7XG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNhcmRcIik7XG4gICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIiwgaSk7XG4gICAgaWYgKHRhc2tMaXN0W2ldLnRhc2tQcmlvcml0eSA9PT0gXCJoaWdoXCIpIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWdoLWltcG9ydGFuY2VcIik7XG4gICAgaWYgKHRhc2tMaXN0W2ldLnRhc2tQcmlvcml0eSA9PT0gXCJtZWRpdW1cIikgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcIm1lZGl1bS1pbXBvcnRhbmNlXCIpO1xuICAgIGlmICh0YXNrTGlzdFtpXS50YXNrUHJpb3JpdHkgPT09IFwibG93XCIpIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoXCJsb3ctaW1wb3J0YW5jZVwiKTtcbiAgICBpZiAodGFza0xpc3RbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgXG4gICAgY29uc3QgdGFza0NhcmRDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrQ2FyZENoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBpZiAodGFza0xpc3RbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkgdGFza0NhcmRDaGVjay5jaGVja2VkID0gdHJ1ZTtcbiAgICBjb25zdCB0YXNrQ2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDYXJkTmFtZS50ZXh0Q29udGVudCA9IHRhc2tMaXN0W2ldLnRhc2tOYW1lO1xuXG4gICAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGVsZXRlVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwidHJhc2gtYnRuXCIpO1xuICAgIGRlbGV0ZVRhc2tCdG4uc2V0QXR0cmlidXRlKFwic3JjXCIsIFRyYXNoSW1hZ2UpO1xuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tDYXJkQ2hlY2spO1xuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tDYXJkTmFtZSk7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J0bik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXdyYXBwZXJcIikuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiKVxuICAgIGNoZWNrQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgYnRuLmNoZWNrZWQgIT0gYnRuLmNoZWNrZWQ7XG4gICAgICAgICAgICBjb25zdCB0YXNrTnVtYmVyID0gYnRuLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIik7XG4gICAgICAgICAgICB0YXNrTGlzdFt0YXNrTnVtYmVyXS5jaGVja2VkID0gYnRuLmNoZWNrZWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFt0YXNrTnVtYmVyXS5jaGVja2VkKVxuICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIik7XG4gICAgICAgICAgICBhZGRUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoLWJ0blwiKTtcbiAgICBkZWxldGVCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOdW1iZXIgPSBidG4ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW51bWJlclwiKTtcbiAgICAgICAgICAgIHRhc2tMaXN0LnNwbGljZSh0YXNrTnVtYmVyLCAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0xpc3QpO1xuICAgICAgICAgICAgYWRkVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIGNyZWF0ZUluYm94KCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cbiAgICAvKiB0YXNrTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IHRhc2tPYmplY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza09iamVjdHNMaXN0LnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoZWxlbWVudCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXdyYXBwZXJcIikuYXBwZW5kQ2hpbGQodGFza09iamVjdHNMaXN0KTtcbn0pOyAqL1xuXG5cbmNvbnN0IGFkZFRhc2tDb250YWluZXIgPSgpID0+IHtcbiAgICBjb25zdCBhZGRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1jb250YWluZXJcIiwgXCJpbmFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94LXdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRhaW5lcik7XG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCIjXCIpO1xuICAgIGFkZFRhc2tGb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG5cbiAgICBjb25zdCB0YXNrTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tOYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1uYW1lLWlucHV0XCIpO1xuICAgIHRhc2tOYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgTmFtZVwiO1xuICAgIGNvbnN0IHRhc2tOYW1lTGFiZWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrTmFtZUxhYmVsSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGFza05hbWVMYWJlbElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1uYW1lLWlucHV0XCIpO1xuICAgIHRhc2tOYW1lTGFiZWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1uYW1lLWlucHV0XCIpO1xuICAgIHRhc2tOYW1lTGFiZWwuYXBwZW5kQ2hpbGQodGFza05hbWVMYWJlbElucHV0KTtcblxuICAgIGNvbnN0IHRhc2tEZXRhaWxzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza0RldGFpbHNMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWRldGFpbC1pbnB1dFwiKTtcbiAgICB0YXNrRGV0YWlsc0xhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIERldGFpbHNcIjtcbiAgICBjb25zdCB0YXNrRGV0YWlsc0xhYmVsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgdGFza0RldGFpbHNMYWJlbElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1kZXRhaWxzLWlucHV0XCIpO1xuICAgIHRhc2tEZXRhaWxzTGFiZWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1kZXRhaWxzLWlucHV0XCIpO1xuICAgIHRhc2tEZXRhaWxzTGFiZWwuYXBwZW5kQ2hpbGQodGFza0RldGFpbHNMYWJlbElucHV0KTtcblxuICAgIGNvbnN0IHRhc2tDYXRlZ29yeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tDYXRlZ29yeUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stY2F0ZWdvcnktaW5wdXRcIik7XG4gICAgdGFza0NhdGVnb3J5TGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgQ2F0ZWdvcnlcIjtcbiAgICBjb25zdCB0YXNrQ2F0ZWdvcnlMYWJlbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tDYXRlZ29yeUxhYmVsSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGFza0NhdGVnb3J5TGFiZWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stY2F0ZWdvcnktaW5wdXRcIik7XG4gICAgdGFza0NhdGVnb3J5TGFiZWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1jYXRlZ29yeS1pbnB1dFwiKTtcbiAgICB0YXNrQ2F0ZWdvcnlMYWJlbC5hcHBlbmRDaGlsZCh0YXNrQ2F0ZWdvcnlMYWJlbElucHV0KTtcblxuICAgIGNvbnN0IHRhc2tEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza0RhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWRhdGUtaW5wdXRcIik7XG4gICAgdGFza0RhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBEYXRlXCI7XG4gICAgY29uc3QgdGFza0RhdGVMYWJlbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tEYXRlTGFiZWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICB0YXNrRGF0ZUxhYmVsSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRhdGUtaW5wdXRcIik7XG4gICAgdGFza0RhdGVMYWJlbElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLWRhdGUtaW5wdXRcIik7XG4gICAgdGFza0RhdGVMYWJlbC5hcHBlbmRDaGlsZCh0YXNrRGF0ZUxhYmVsSW5wdXQpO1xuXG4gICAgY29uc3QgdGFza1ByaW9yaXR5YWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrUHJpb3JpdHlhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stcHJpb3JpdHktaW5wdXRcIik7XG4gICAgdGFza1ByaW9yaXR5YWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBQcmlvcml0eVwiO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsSW5wdXROb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICB0YXNrUHJpb3JpdHlMYWJlbElucHV0Tm9uZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgdGFza1ByaW9yaXR5TGFiZWxJbnB1dE5vbmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJub25lXCIpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsSW5wdXRMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsSW5wdXRMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsSW5wdXRMb3cuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJsb3dcIik7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5TGFiZWxJbnB1dE1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgdGFza1ByaW9yaXR5TGFiZWxJbnB1dE1lZGl1bS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgdGFza1ByaW9yaXR5TGFiZWxJbnB1dE1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1lZGl1bVwiKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlMYWJlbElucHV0SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgdGFza1ByaW9yaXR5TGFiZWxJbnB1dEhpZ2gudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICB0YXNrUHJpb3JpdHlMYWJlbElucHV0SGlnaC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImhpZ2hcIik7XG4gICAgdGFza1ByaW9yaXR5TGFiZWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stcHJpb3JpdHktaW5wdXRcIik7XG4gICAgdGFza1ByaW9yaXR5TGFiZWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1wcmlvcml0eS1pbnB1dFwiKTtcbiAgICB0YXNrUHJpb3JpdHlMYWJlbElucHV0LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUxhYmVsSW5wdXROb25lKTtcbiAgICB0YXNrUHJpb3JpdHlMYWJlbElucHV0LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUxhYmVsSW5wdXRMb3cpO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsSW5wdXQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5TGFiZWxJbnB1dE1lZGl1bSk7XG4gICAgdGFza1ByaW9yaXR5TGFiZWxJbnB1dC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlMYWJlbElucHV0SGlnaCk7XG4gICAgdGFza1ByaW9yaXR5YWJlbC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlMYWJlbElucHV0KTtcblxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lTGFiZWwpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzTGFiZWwpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yeUxhYmVsKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZUxhYmVsKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlhYmVsKTtcbiAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tGb3JtKTtcblxuICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXJCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkVGFza0NvbnRhaW5lckJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnV0dG9ucy13cmFwcGVyJyk7XG4gICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyQnV0dG9ucyk7XG4gICAgY29uc3QgYWRkVGFza0NvbnRhaW5lckNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tDb250YWluZXJDb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoXCJjb25maXJtLW5ldy10YXNrXCIpO1xuICAgIGFkZFRhc2tDb250YWluZXJDb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gICAgYWRkVGFza0NvbnRhaW5lckJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRhaW5lckNvbmZpcm1CdG4pO1xuICAgIGFkZFRhc2tDb250YWluZXJDb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrVG9UYXNrTGlzdCk7XG4gICAgY29uc3QgYWRkVGFza0NvbnRhaW5lckNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVGFza0NvbnRhaW5lckNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLW5ldy10YXNrXCIpO1xuICAgIGFkZFRhc2tDb250YWluZXJDYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGFkZFRhc2tDb250YWluZXJCdXR0b25zLmFwcGVuZENoaWxkKGFkZFRhc2tDb250YWluZXJDYW5jZWxCdG4pO1xuICAgIGFkZFRhc2tDb250YWluZXJDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUFkZFRhc2tDb250YWluZXIpO1xuICAgIGFkZFRhc2tDb250YWluZXJDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFySW5wdXQpO1xufVxuXG5jb25zdCB0b2dnbGVBZGRUYXNrQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stY29udGFpbmVyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnRuXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ0blwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufVxuXG5jb25zdCBjbGVhcklucHV0ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lLWlucHV0XCIpLnZhbHVlID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGV0YWlscy1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWNhdGVnb3J5LWlucHV0XCIpLnZhbHVlID0gXCJcIjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vdWlcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcmVuZGVyUGFnZSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==