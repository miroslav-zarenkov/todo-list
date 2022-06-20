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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main-red: #c40505;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    /*outline: 1px solid red; */\n}\n\nhtml {\n    font-size: 62.5%;\n    height: 100vh;\n}\n\nbody {\n    font-size: 3rem;\n}\n\n.main-wrapper {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    flex-shrink: 0;\n    background-color: var(--main-red);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh1 {\n    font-size: 6rem;\n    margin: 1rem;\n}\n\nh2 {\n    font-size: 4rem;\n    margin: 1rem 0;\n}\n\n.menu-button {\n    display: none;\n    cursor: pointer;\n    margin: 20px;\n\n}\n\n.menu-button-row-1,\n.menu-button-row-2,\n.menu-button-row-3 {\n    width: 35px;\n    height: 5px;\n    background-color: black;\n    margin: 6px 0;\n    transition: 0.4s;\n}\n\n.change .menu-button-row-1 {\n    -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n    transform: rotate(-45deg) translate(-9px, 6px);\n}\n\n.change .menu-button-row-2 {\n    opacity: 0;\n}\n\n.change .menu-button-row-3 {\n    -webkit-transform: rotate(45deg) translate(-8px, -8px);\n    transform: rotate(45deg) translate(-8px, -8px);\n}\n\nmain {\n    flex: 1 0 auto;\n    background-color: bisque;\n    display: flex;\n}\n\n.menu {\n    flex-shrink: 0;\n    background-color: #f6f6f6;\n}\n\n.menu li {\n    cursor: pointer;\n}\n\n.content {\n    flex: 1 0 auto;\n    background-color: rgb(250 250 250);\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n\n\n.content>* {\n    padding: 1.25rem;\n    margin: 1.25rem;\n}\n\n.inbox-wrapper {\n    width: 100%;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    background-color: var(--main-red);\n    font-size: 2rem;\n}\n\nfooter>* {\n    padding: 0.5rem;\n}\n\n.github-logo {\n    display: block;\n    width: 32px;\n    height: auto;\n}\n\nnav {\n    padding: 2rem;\n    margin: 2rem;\n    font-size: 3rem;\n}\n\nul {\n    list-style-type: none;\n}\n\nli {\n    margin: 1rem;\n}\n\n\n.task-card {\n    margin: 1rem;\n    padding: 1rem;\n    border-bottom: 1px solid black;\n}\n\n.blur {\n    filter: blur(5px);\n}\n\n\n.active {\n    display: block;\n}\n\n.inactive {\n    display: none;\n}\n\n\n@media screen and (max-width: 500px) {\n    .menu-button {\n        display: inline-block;\n    }\n\n    .menu {\n        /*hidind and showing sidebar on small screen*/\n        display: none;\n    }\n}\n\nmain.active-overlay {\n    /*hidind and showing sidebar on small screen*/\n    display: block;\n}\n\n.menu.active-overlay {\n    /*hidind and showing sidebar on small screen*/\n    position: relative;\n    height: 100%;\n    z-index: 99;\n    display: flex;\n}\n\n.menu.active-overlay>nav {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    font-size: 4rem;\n}\n\n.add-task-container.active {\n    display: flex;\n    flex-direction: column;\n    margin: 2rem auto;\n    border: 1px solid black;\n    border-radius: 10px;\n    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n}\n\n.add-task-buttons-wrapper>button {\n    margin: 1rem;\n    padding: 1rem;\n}\n\nform {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    margin: 1rem;\n    padding: 1rem;\n}\n\n\nlabel {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-task-container input,\n.add-task-container select,\n.add-task-container textarea {\n    width: 200px;\n}\n\n.high-importance {\n    background-color: rgb(237, 104, 104);\n}\n\n.medium-importance {\n    background-color: rgb(237, 228, 104);\n}\n\n.low-importance {\n    background-color: rgb(104, 237, 144);\n}\n\n.checked {\n    text-decoration: line-through;\n    opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,iCAAiC;IACjC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;;AAEhB;;AAEA;;;IAGI,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,sDAAsD;IACtD,8CAA8C;AAClD;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,sDAAsD;IACtD,8CAA8C;AAClD;;AAEA;IACI,cAAc;IACd,wBAAwB;IACxB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,kCAAkC;IAClC,aAAa;IACb,uBAAuB;IACvB,uBAAuB;AAC3B;;;;AAIA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI;QACI,qBAAqB;IACzB;;IAEA;QACI,6CAA6C;QAC7C,aAAa;IACjB;AACJ;;AAEA;IACI,6CAA6C;IAC7C,cAAc;AAClB;;AAEA;IACI,6CAA6C;IAC7C,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,kDAAkD;AACtD;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,YAAY;IACZ,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;;IAGI,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB","sourcesContent":[":root {\n    --main-red: #c40505;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    /*outline: 1px solid red; */\n}\n\nhtml {\n    font-size: 62.5%;\n    height: 100vh;\n}\n\nbody {\n    font-size: 3rem;\n}\n\n.main-wrapper {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    flex-shrink: 0;\n    background-color: var(--main-red);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh1 {\n    font-size: 6rem;\n    margin: 1rem;\n}\n\nh2 {\n    font-size: 4rem;\n    margin: 1rem 0;\n}\n\n.menu-button {\n    display: none;\n    cursor: pointer;\n    margin: 20px;\n\n}\n\n.menu-button-row-1,\n.menu-button-row-2,\n.menu-button-row-3 {\n    width: 35px;\n    height: 5px;\n    background-color: black;\n    margin: 6px 0;\n    transition: 0.4s;\n}\n\n.change .menu-button-row-1 {\n    -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n    transform: rotate(-45deg) translate(-9px, 6px);\n}\n\n.change .menu-button-row-2 {\n    opacity: 0;\n}\n\n.change .menu-button-row-3 {\n    -webkit-transform: rotate(45deg) translate(-8px, -8px);\n    transform: rotate(45deg) translate(-8px, -8px);\n}\n\nmain {\n    flex: 1 0 auto;\n    background-color: bisque;\n    display: flex;\n}\n\n.menu {\n    flex-shrink: 0;\n    background-color: #f6f6f6;\n}\n\n.menu li {\n    cursor: pointer;\n}\n\n.content {\n    flex: 1 0 auto;\n    background-color: rgb(250 250 250);\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n\n\n.content>* {\n    padding: 1.25rem;\n    margin: 1.25rem;\n}\n\n.inbox-wrapper {\n    width: 100%;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    background-color: var(--main-red);\n    font-size: 2rem;\n}\n\nfooter>* {\n    padding: 0.5rem;\n}\n\n.github-logo {\n    display: block;\n    width: 32px;\n    height: auto;\n}\n\nnav {\n    padding: 2rem;\n    margin: 2rem;\n    font-size: 3rem;\n}\n\nul {\n    list-style-type: none;\n}\n\nli {\n    margin: 1rem;\n}\n\n\n.task-card {\n    margin: 1rem;\n    padding: 1rem;\n    border-bottom: 1px solid black;\n}\n\n.blur {\n    filter: blur(5px);\n}\n\n\n.active {\n    display: block;\n}\n\n.inactive {\n    display: none;\n}\n\n\n@media screen and (max-width: 500px) {\n    .menu-button {\n        display: inline-block;\n    }\n\n    .menu {\n        /*hidind and showing sidebar on small screen*/\n        display: none;\n    }\n}\n\nmain.active-overlay {\n    /*hidind and showing sidebar on small screen*/\n    display: block;\n}\n\n.menu.active-overlay {\n    /*hidind and showing sidebar on small screen*/\n    position: relative;\n    height: 100%;\n    z-index: 99;\n    display: flex;\n}\n\n.menu.active-overlay>nav {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    font-size: 4rem;\n}\n\n.add-task-container.active {\n    display: flex;\n    flex-direction: column;\n    margin: 2rem auto;\n    border: 1px solid black;\n    border-radius: 10px;\n    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n}\n\n.add-task-buttons-wrapper>button {\n    margin: 1rem;\n    padding: 1rem;\n}\n\nform {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    margin: 1rem;\n    padding: 1rem;\n}\n\n\nlabel {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-task-container input,\n.add-task-container select,\n.add-task-container textarea {\n    width: 200px;\n}\n\n.high-importance {\n    background-color: rgb(237, 104, 104);\n}\n\n.medium-importance {\n    background-color: rgb(237, 228, 104);\n}\n\n.low-importance {\n    background-color: rgb(104, 237, 144);\n}\n\n.checked {\n    text-decoration: line-through;\n    opacity: 0.5;\n}"],"sourceRoot":""}]);
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
        this.checked = true;
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
/* harmony import */ var _task_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-logic */ "./src/task-logic.js");






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
    trash.addEventListener("click", _task_logic__WEBPACK_IMPORTED_MODULE_2__.clearLocalStorage);
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
    taskObjectsList.textContent = JSON.stringify(_task_logic__WEBPACK_IMPORTED_MODULE_2__.taskList);
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
    taskObjectsList.textContent = JSON.stringify(_task_logic__WEBPACK_IMPORTED_MODULE_2__.taskList);
    weekWrapper.appendChild(taskObjectsList);

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add task";
    weekWrapper.appendChild(addTaskBtn);
}

const createTaskElement = () => {
    ;(0,_task_logic__WEBPACK_IMPORTED_MODULE_2__.getFromLocalStorage)();
    if (_task_logic__WEBPACK_IMPORTED_MODULE_2__.taskList === null) (0,_task_logic__WEBPACK_IMPORTED_MODULE_2__.setEmptyArrayTaskList)();
    for (let i = 0; i < _task_logic__WEBPACK_IMPORTED_MODULE_2__.taskList.length; i++) {
    console.log(_task_logic__WEBPACK_IMPORTED_MODULE_2__.taskList[i]);
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    taskCard.setAttribute("data-number", i);
    if (_task_logic__WEBPACK_IMPORTED_MODULE_2__.taskList[i].taskPriority === "high") taskCard.classList.add("high-importance");
    if (_task_logic__WEBPACK_IMPORTED_MODULE_2__.taskList[i].taskPriority === "medium") taskCard.classList.add("medium-importance");
    if (_task_logic__WEBPACK_IMPORTED_MODULE_2__.taskList[i].taskPriority === "low") taskCard.classList.add("low-importance");
    if (_task_logic__WEBPACK_IMPORTED_MODULE_2__.taskList[i].checked === true) taskCard.classList.add("checked");
    
    const taskCardCheck = document.createElement("input");
    taskCardCheck.setAttribute("type", "checkbox");
    if (_task_logic__WEBPACK_IMPORTED_MODULE_2__.taskList[i].checked === true) taskCardCheck.checked = true;
    const taskCardName = document.createElement("div");
    taskCardName.textContent = _task_logic__WEBPACK_IMPORTED_MODULE_2__.taskList[i].taskName;
    taskCard.appendChild(taskCardCheck);
    taskCard.appendChild(taskCardName);
    console.log(taskCardCheck.value)
    document.querySelector(".list-wrapper").appendChild(taskCard);
    }

    const checkBtns = document.querySelectorAll("input[type=checkbox]")

    checkBtns.forEach(btn => {
        btn.addEventListener("click", event => {
            btn.checked != btn.checked;
            const taskNumber = btn.parentElement.getAttribute("data-number");
            _task_logic__WEBPACK_IMPORTED_MODULE_2__.taskList[taskNumber].checked = btn.checked;
            console.log(_task_logic__WEBPACK_IMPORTED_MODULE_2__.taskList[taskNumber].checked)
            btn.parentElement.classList.toggle("checked");
            (0,_task_logic__WEBPACK_IMPORTED_MODULE_2__.addToLocalStorage)();
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
    addTaskContainerConfirmBtn.addEventListener("click", _task_logic__WEBPACK_IMPORTED_MODULE_2__.addTaskToTaskList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7OztBQ0FrQzs7QUFFbEMsOENBQThDLDJDQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLWxvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLW1haW4tcmVkOiAjYzQwNTA1O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKm91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ubWFpbi13cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcmVkKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAyMHB4O1xcblxcbn1cXG5cXG4ubWVudS1idXR0b24tcm93LTEsXFxuLm1lbnUtYnV0dG9uLXJvdy0yLFxcbi5tZW51LWJ1dHRvbi1yb3ctMyB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogNnB4IDA7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5jaGFuZ2UgLm1lbnUtYnV0dG9uLXJvdy0xIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xcbn1cXG5cXG4uY2hhbmdlIC5tZW51LWJ1dHRvbi1yb3ctMiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jaGFuZ2UgLm1lbnUtYnV0dG9uLXJvdy0zIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleDogMSAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG59XFxuXFxuLm1lbnUgbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZmxleDogMSAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAgMjUwIDI1MCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuXFxuXFxuLmNvbnRlbnQ+KiB7XFxuICAgIHBhZGRpbmc6IDEuMjVyZW07XFxuICAgIG1hcmdpbjogMS4yNXJlbTtcXG59XFxuXFxuLmluYm94LXdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXJlZCk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuZm9vdGVyPioge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5naXRodWItbG9nbyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5uYXYge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG5cXG4udGFzay1jYXJkIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ibHVyIHtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcblxcbi5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmluYWN0aXZlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLm1lbnUtYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgfVxcblxcbiAgICAubWVudSB7XFxuICAgICAgICAvKmhpZGluZCBhbmQgc2hvd2luZyBzaWRlYmFyIG9uIHNtYWxsIHNjcmVlbiovXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbm1haW4uYWN0aXZlLW92ZXJsYXkge1xcbiAgICAvKmhpZGluZCBhbmQgc2hvd2luZyBzaWRlYmFyIG9uIHNtYWxsIHNjcmVlbiovXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWVudS5hY3RpdmUtb3ZlcmxheSB7XFxuICAgIC8qaGlkaW5kIGFuZCBzaG93aW5nIHNpZGViYXIgb24gc21hbGwgc2NyZWVuKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWVudS5hY3RpdmUtb3ZlcmxheT5uYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAycHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9ucy13cmFwcGVyPmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcblxcbmxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRhaW5lciBpbnB1dCxcXG4uYWRkLXRhc2stY29udGFpbmVyIHNlbGVjdCxcXG4uYWRkLXRhc2stY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uaGlnaC1pbXBvcnRhbmNlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMTA0LCAxMDQpO1xcbn1cXG5cXG4ubWVkaXVtLWltcG9ydGFuY2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAyMjgsIDEwNCk7XFxufVxcblxcbi5sb3ctaW1wb3J0YW5jZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDQsIDIzNywgMTQ0KTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDViwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZOztBQUVoQjs7QUFFQTs7O0lBR0ksV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNEQUFzRDtJQUN0RCw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzREFBc0Q7SUFDdEQsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOzs7O0FBSUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksNkNBQTZDO1FBQzdDLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLDZDQUE2QztJQUM3QyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7OztJQUdJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbWFpbi1yZWQ6ICNjNDA1MDU7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5tYWluLXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1yZWQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDIwcHg7XFxuXFxufVxcblxcbi5tZW51LWJ1dHRvbi1yb3ctMSxcXG4ubWVudS1idXR0b24tcm93LTIsXFxuLm1lbnUtYnV0dG9uLXJvdy0zIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luOiA2cHggMDtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLmNoYW5nZSAubWVudS1idXR0b24tcm93LTEge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XFxufVxcblxcbi5jaGFuZ2UgLm1lbnUtYnV0dG9uLXJvdy0yIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNoYW5nZSAubWVudS1idXR0b24tcm93LTMge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XFxufVxcblxcbm1haW4ge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcbn1cXG5cXG4ubWVudSBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCAyNTAgMjUwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5cXG5cXG4uY29udGVudD4qIHtcXG4gICAgcGFkZGluZzogMS4yNXJlbTtcXG4gICAgbWFyZ2luOiAxLjI1cmVtO1xcbn1cXG5cXG4uaW5ib3gtd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcmVkKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5mb290ZXI+KiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmdpdGh1Yi1sb2dvIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbm5hdiB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcblxcbi50YXNrLWNhcmQge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJsdXIge1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuXFxuLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaW5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAubWVudS1idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB9XFxuXFxuICAgIC5tZW51IHtcXG4gICAgICAgIC8qaGlkaW5kIGFuZCBzaG93aW5nIHNpZGViYXIgb24gc21hbGwgc2NyZWVuKi9cXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxubWFpbi5hY3RpdmUtb3ZlcmxheSB7XFxuICAgIC8qaGlkaW5kIGFuZCBzaG93aW5nIHNpZGViYXIgb24gc21hbGwgc2NyZWVuKi9cXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tZW51LmFjdGl2ZS1vdmVybGF5IHtcXG4gICAgLypoaWRpbmQgYW5kIHNob3dpbmcgc2lkZWJhciBvbiBzbWFsbCBzY3JlZW4qL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tZW51LmFjdGl2ZS1vdmVybGF5Pm5hdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGFpbmVyLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IDJweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b25zLXdyYXBwZXI+YnV0dG9uIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuXFxubGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGFpbmVyIGlucHV0LFxcbi5hZGQtdGFzay1jb250YWluZXIgc2VsZWN0LFxcbi5hZGQtdGFzay1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5oaWdoLWltcG9ydGFuY2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAxMDQsIDEwNCk7XFxufVxcblxcbi5tZWRpdW0taW1wb3J0YW5jZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIyOCwgMTA0KTtcXG59XFxuXFxuLmxvdy1pbXBvcnRhbmNlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgMjM3LCAxNDQpO1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgdGFza0xpc3QsIGFkZFRhc2tUb1Rhc2tMaXN0LCBnZXRGcm9tTG9jYWxTdG9yYWdlLCBjbGVhckxvY2FsU3RvcmFnZSwgc2V0RW1wdHlBcnJheVRhc2tMaXN0LCBhZGRUb0xvY2FsU3RvcmFnZSB9O1xuaW1wb3J0IHsgY2xlYXJDb250ZW50LCBjcmVhdGVJbmJveCwgdG9nZ2xlQWRkVGFza0NvbnRhaW5lciB9IGZyb20gXCIuL3VpLmpzXCI7XG5cblxubGV0IHRhc2tMaXN0ID0gW107XG5cbmZ1bmN0aW9uIHNldEVtcHR5QXJyYXlUYXNrTGlzdCgpe1xuICAgIHRhc2tMaXN0ID0gW107XG59XG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRhc2tOYW1lLCB0YXNrRGV0YWlscywgdGFza0NhdGVnb3J5LCB0YXNrRGF0ZSwgdGFza1ByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGFza05hbWUgPSB0YXNrTmFtZTtcbiAgICAgICAgdGhpcy50YXNrRGV0YWlscyA9IHRhc2tEZXRhaWxzO1xuICAgICAgICB0aGlzLnRhc2tDYXRlZ29yeSA9IHRhc2tDYXRlZ29yeTtcbiAgICAgICAgdGhpcy50YXNrRGF0ZSA9IHRhc2tEYXRlO1xuICAgICAgICB0aGlzLnRhc2tQcmlvcml0eSA9IHRhc2tQcmlvcml0eTtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb1Rhc2tMaXN0KCkge1xuICAgIGlmICh0YXNrTGlzdCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRFbXB0eUFycmF5VGFza0xpc3QoKTtcbiAgICB9XG5cbiAgICBsZXQgdGFzayA9IG5ldyBUYXNrKFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZS1pbnB1dFwiKS52YWx1ZSxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRldGFpbHMtaW5wdXRcIikudmFsdWUsXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1jYXRlZ29yeS1pbnB1dFwiKS52YWx1ZSxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGUtaW5wdXRcIikudmFsdWUsXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcmlvcml0eS1pbnB1dFwiKS52YWx1ZSxcbiAgICApXG5cbiAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5hbWUtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXRhaWxzLWlucHV0XCIpLnZhbHVlID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stY2F0ZWdvcnktaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlLWlucHV0XCIpLnZhbHVlID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHktaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICAgIGNyZWF0ZUluYm94KCk7XG59XG5cbi8qIGNvbnN0IHRhc2tGYWN0b3J5ID0gKHRhc2tOYW1lLCB0YXNrRGV0YWlscywgdGFza0NhdGVnb3J5KSA9PiB7XG4gICAgcmV0dXJuIHt0YXNrTmFtZSwgdGFza0RldGFpbHMsIHRhc2tDYXRlZ29yeX1cbn0gKi9cblxuLyogbGV0IHRvZG9PYmplY3QxID0gdGFza0ZhY3RvcnkoXCJ0YXNrMVwiLCBcInRhc2sxXCIsIFwidGFzazFcIik7XG5sZXQgdG9kb09iamVjdDIgPSB0YXNrRmFjdG9yeShcInRhc2syXCIsIFwidGFzazJcIiwgXCJ0YXNrMlwiKTsgKi9cblxuLyogKGZ1bmN0aW9uIGFkZFRhc2tUb1Rhc2tMaXN0KCl7XG4gICAgaWYgKHRhc2tMaXN0ID09PSBudWxsKSB7XG4gICAgICAgIHRhc2tMaXN0ID0gW107XG4gICAgfVxuICAgIHRhc2tMaXN0LnB1c2godG9kb09iamVjdDEpO1xuICAgIHRhc2tMaXN0LnB1c2godG9kb09iamVjdDIpO1xufSkoKSAqL1xuXG5mdW5jdGlvbiBhZGRUb0xvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tMaXN0TG9jYWxcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrTGlzdExvY2FsXCIpKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG59IiwiZXhwb3J0IHsgcmVuZGVyUGFnZSwgY2xlYXJDb250ZW50LCBjcmVhdGVJbmJveCwgdG9nZ2xlQWRkVGFza0NvbnRhaW5lciB9O1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgR2l0aHViTG9nbyBmcm9tICcuL2dpdGh1Yi5wbmcnO1xuaW1wb3J0IHsgdGFza0xpc3QsIGFkZFRhc2tUb1Rhc2tMaXN0LCBnZXRGcm9tTG9jYWxTdG9yYWdlLCBjbGVhckxvY2FsU3RvcmFnZSwgc2V0RW1wdHlBcnJheVRhc2tMaXN0LGFkZFRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi90YXNrLWxvZ2ljJztcblxuXG5jb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgIGNyZWF0ZVdyYXBwZXIoKTtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVNYWluKCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG4gICAgY3JlYXRlUGFnZSgpO1xufTtcblxuY29uc3QgY3JlYXRlV3JhcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21haW4td3JhcHBlcicpO1xuICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDUwMCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1vdmVybGF5XCIpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1vdmVybGF5XCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ1dHRvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2hhbmdlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1haW5XcmFwcGVyO1xufVxuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBoZWFkZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlck5hbWUudGV4dENvbnRlbnQgPSBcIlRvZG8gTGlzdFwiO1xuICAgIGNvbnN0IGhlYWRlck1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlck1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uXCIpO1xuICAgIGNvbnN0IGhlYWRlck1lbnVCdXR0b25Sb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJNZW51QnV0dG9uUm93MS5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b24tcm93LTFcIik7XG4gICAgY29uc3QgaGVhZGVyTWVudUJ1dHRvblJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlck1lbnVCdXR0b25Sb3cyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ1dHRvbi1yb3ctMlwiKTtcbiAgICBjb25zdCBoZWFkZXJNZW51QnV0dG9uUm93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyTWVudUJ1dHRvblJvdzMuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uLXJvdy0zXCIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJOYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTWVudUJ1dHRvbik7XG4gICAgaGVhZGVyTWVudUJ1dHRvbi5hcHBlbmRDaGlsZChoZWFkZXJNZW51QnV0dG9uUm93MSk7XG4gICAgaGVhZGVyTWVudUJ1dHRvbi5hcHBlbmRDaGlsZChoZWFkZXJNZW51QnV0dG9uUm93Mik7XG4gICAgaGVhZGVyTWVudUJ1dHRvbi5hcHBlbmRDaGlsZChoZWFkZXJNZW51QnV0dG9uUm93Myk7XG4gICAgaGVhZGVyTWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBoZWFkZXJNZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjaGFuZ2VcIik7XG4gICAgfSk7XG4gICAgaGVhZGVyTWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZS1vdmVybGF5XCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZS1vdmVybGF5XCIpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRyYXNoLnRleHRDb250ZW50ID0gXCJEZWxldGUgbG9jYWwgc3RvcmFnZVwiO1xuICAgIHRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckxvY2FsU3RvcmFnZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRyYXNoKTtcbiAgICBcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBtYWluTWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbk1lbnVEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgY29uc3QgbWFpbk1lbnVEaXZOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IG1haW5NZW51RGl2TmF2VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgY29uc3QgbWFpbk1lbnVEaXZOYXZVbExpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBtYWluTWVudURpdk5hdlVsTGkxLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlzdC1pbmJveFwiKTtcbiAgICBtYWluTWVudURpdk5hdlVsTGkxLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuICAgIGNvbnN0IG1haW5NZW51RGl2TmF2VWxMaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbWFpbk1lbnVEaXZOYXZVbExpMi5jbGFzc0xpc3QuYWRkKFwibmF2LWxpc3QtdG9kYXlcIik7XG4gICAgbWFpbk1lbnVEaXZOYXZVbExpMi50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICBjb25zdCBtYWluTWVudURpdk5hdlVsTGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG1haW5NZW51RGl2TmF2VWxMaTMuY2xhc3NMaXN0LmFkZChcIm5hdi1saXN0LXdlZWtcIik7XG4gICAgbWFpbk1lbnVEaXZOYXZVbExpMy50ZXh0Q29udGVudCA9IFwiVGhpcyBXZWVrXCJcbiAgICBjb25zdCBtYWluQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluTWVudURpdik7XG4gICAgbWFpbk1lbnVEaXYuYXBwZW5kQ2hpbGQobWFpbk1lbnVEaXZOYXYpO1xuICAgIG1haW5NZW51RGl2TmF2LmFwcGVuZENoaWxkKG1haW5NZW51RGl2TmF2VWwpO1xuICAgIG1haW5NZW51RGl2TmF2VWwuYXBwZW5kQ2hpbGQobWFpbk1lbnVEaXZOYXZVbExpMSk7XG4gICAgbWFpbk1lbnVEaXZOYXZVbC5hcHBlbmRDaGlsZChtYWluTWVudURpdk5hdlVsTGkyKTtcbiAgICBtYWluTWVudURpdk5hdlVsLmFwcGVuZENoaWxkKG1haW5NZW51RGl2TmF2VWxMaTMpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnREaXYpO1xuICAgIFxuICAgIHJldHVybiBtYWluO1xufVxuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBmb290ZXJMaW5rSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBmb290ZXJMaW5rSW1nLmNsYXNzTGlzdC5hZGQoJ2dpdGh1Yi1sb2dvJyk7XG4gICAgZm9vdGVyTGlua0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgR2l0aHViTG9nbyk7XG4gICAgZm9vdGVyRGl2LnRleHRDb250ZW50ID0gXCJEZXZlbG9wZWQgYnkgbWlyb3NsYXYtemFyZW5rb3ZcIjtcbiAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vbWlyb3NsYXYtemFyZW5rb3ZcIik7XG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJub29wZW5lciBub3JlZmVycmVyXCIpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJEaXYpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5rKTtcbiAgICBmb290ZXJMaW5rLmFwcGVuZENoaWxkKGZvb3RlckxpbmtJbWcpO1xuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmNvbnN0IGNyZWF0ZVBhZ2UgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVXcmFwcGVyKCkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi13cmFwcGVyXCIpLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKS5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi13cmFwcGVyXCIpLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgICBjcmVhdGVJbmJveCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWxpc3QtaW5ib3hcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUluYm94KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1saXN0LXRvZGF5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVUb2RheSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtbGlzdC13ZWVrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVXZWVrKTtcbn1cblxuY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGxldCBteU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgd2hpbGUgKG15Tm9kZS5maXJzdENoaWxkKSB7XG4gICAgICBteU5vZGUucmVtb3ZlQ2hpbGQobXlOb2RlLmxhc3RDaGlsZCk7XG59XG59XG5cbmNvbnN0IGNyZWF0ZUluYm94ID0gKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNvbnN0IGluYm94V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5ib3hXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJpbmJveC13cmFwcGVyXCIpO1xuICAgIGNvbnN0IGluYm94SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGluYm94SGVhZGVyLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuICAgIGluYm94V3JhcHBlci5hcHBlbmRDaGlsZChpbmJveEhlYWRlcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLmFwcGVuZENoaWxkKGluYm94V3JhcHBlcik7XG4gICAgY29uc3QgbGlzdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpc3RXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0LXdyYXBwZXJcIik7XG4gICAgaW5ib3hXcmFwcGVyLmFwcGVuZENoaWxkKGxpc3RXcmFwcGVyKTtcbiAgICBjcmVhdGVUYXNrRWxlbWVudCgpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWJ0blwiLCBcImFjdGl2ZVwiKTtcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUFkZFRhc2tDb250YWluZXIpO1xuICAgIGluYm94V3JhcHBlci5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgICBhZGRUYXNrQ29udGFpbmVyKCk7XG59XG5cblxuY29uc3QgY3JlYXRlVG9kYXkgPSAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY29uc3QgdG9kYXlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RheVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRvZGF5LXdyYXBwZXJcIik7XG4gICAgY29uc3QgdG9kYXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdG9kYXlIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgdG9kYXlXcmFwcGVyLmFwcGVuZENoaWxkKHRvZGF5SGVhZGVyKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikuYXBwZW5kQ2hpbGQodG9kYXlXcmFwcGVyKTtcbiAgICBjb25zdCB0YXNrT2JqZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tPYmplY3RzTGlzdC50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KTtcbiAgICB0b2RheVdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza09iamVjdHNMaXN0KTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG4gICAgdG9kYXlXcmFwcGVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xufVxuXG5jb25zdCBjcmVhdGVXZWVrID0gKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNvbnN0IHdlZWtXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWVrV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwid2Vlay13cmFwcGVyXCIpO1xuICAgIGNvbnN0IHdlZWtIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgd2Vla0hlYWRlci50ZXh0Q29udGVudCA9IFwiVGhpcyBXZWVrXCI7XG4gICAgd2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQod2Vla0hlYWRlcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLmFwcGVuZENoaWxkKHdlZWtXcmFwcGVyKTtcbiAgICBjb25zdCB0YXNrT2JqZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tPYmplY3RzTGlzdC50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KTtcbiAgICB3ZWVrV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrT2JqZWN0c0xpc3QpO1xuXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIHRhc2tcIjtcbiAgICB3ZWVrV3JhcHBlci5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbn1cblxuY29uc3QgY3JlYXRlVGFza0VsZW1lbnQgPSAoKSA9PiB7XG4gICAgZ2V0RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIGlmICh0YXNrTGlzdCA9PT0gbnVsbCkgc2V0RW1wdHlBcnJheVRhc2tMaXN0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0W2ldKTtcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcInRhc2stY2FyZFwiKTtcbiAgICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW51bWJlclwiLCBpKTtcbiAgICBpZiAodGFza0xpc3RbaV0udGFza1ByaW9yaXR5ID09PSBcImhpZ2hcIikgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcImhpZ2gtaW1wb3J0YW5jZVwiKTtcbiAgICBpZiAodGFza0xpc3RbaV0udGFza1ByaW9yaXR5ID09PSBcIm1lZGl1bVwiKSB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKFwibWVkaXVtLWltcG9ydGFuY2VcIik7XG4gICAgaWYgKHRhc2tMaXN0W2ldLnRhc2tQcmlvcml0eSA9PT0gXCJsb3dcIikgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcImxvdy1pbXBvcnRhbmNlXCIpO1xuICAgIGlmICh0YXNrTGlzdFtpXS5jaGVja2VkID09PSB0cnVlKSB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICBcbiAgICBjb25zdCB0YXNrQ2FyZENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tDYXJkQ2hlY2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGlmICh0YXNrTGlzdFtpXS5jaGVja2VkID09PSB0cnVlKSB0YXNrQ2FyZENoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICAgIGNvbnN0IHRhc2tDYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NhcmROYW1lLnRleHRDb250ZW50ID0gdGFza0xpc3RbaV0udGFza05hbWU7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0NhcmRDaGVjayk7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0NhcmROYW1lKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrQ2FyZENoZWNrLnZhbHVlKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC13cmFwcGVyXCIpLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIilcblxuICAgIGNoZWNrQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgYnRuLmNoZWNrZWQgIT0gYnRuLmNoZWNrZWQ7XG4gICAgICAgICAgICBjb25zdCB0YXNrTnVtYmVyID0gYnRuLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIik7XG4gICAgICAgICAgICB0YXNrTGlzdFt0YXNrTnVtYmVyXS5jaGVja2VkID0gYnRuLmNoZWNrZWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFt0YXNrTnVtYmVyXS5jaGVja2VkKVxuICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIik7XG4gICAgICAgICAgICBhZGRUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG4gICAgLyogdGFza0xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCB0YXNrT2JqZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tPYmplY3RzTGlzdC50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGVsZW1lbnQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC13cmFwcGVyXCIpLmFwcGVuZENoaWxkKHRhc2tPYmplY3RzTGlzdCk7XG59KTsgKi9cblxuXG5jb25zdCBhZGRUYXNrQ29udGFpbmVyID0oKSA9PiB7XG4gICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkVGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stY29udGFpbmVyXCIsIFwiaW5hY3RpdmVcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmJveC13cmFwcGVyXCIpLmFwcGVuZENoaWxkKGFkZFRhc2tDb250YWluZXIpO1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiI1wiKTtcbiAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuXG4gICAgY29uc3QgdGFza05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stbmFtZS1pbnB1dFwiKTtcbiAgICB0YXNrTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIE5hbWVcIjtcbiAgICBjb25zdCB0YXNrTmFtZUxhYmVsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza05hbWVMYWJlbElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRhc2tOYW1lTGFiZWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stbmFtZS1pbnB1dFwiKTtcbiAgICB0YXNrTmFtZUxhYmVsSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stbmFtZS1pbnB1dFwiKTtcbiAgICB0YXNrTmFtZUxhYmVsLmFwcGVuZENoaWxkKHRhc2tOYW1lTGFiZWxJbnB1dCk7XG5cbiAgICBjb25zdCB0YXNrRGV0YWlsc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tEZXRhaWxzTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kZXRhaWwtaW5wdXRcIik7XG4gICAgdGFza0RldGFpbHNMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBEZXRhaWxzXCI7XG4gICAgY29uc3QgdGFza0RldGFpbHNMYWJlbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIHRhc2tEZXRhaWxzTGFiZWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZGV0YWlscy1pbnB1dFwiKTtcbiAgICB0YXNrRGV0YWlsc0xhYmVsSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stZGV0YWlscy1pbnB1dFwiKTtcbiAgICB0YXNrRGV0YWlsc0xhYmVsLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzTGFiZWxJbnB1dCk7XG5cbiAgICBjb25zdCB0YXNrQ2F0ZWdvcnlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrQ2F0ZWdvcnlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWNhdGVnb3J5LWlucHV0XCIpO1xuICAgIHRhc2tDYXRlZ29yeUxhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIENhdGVnb3J5XCI7XG4gICAgY29uc3QgdGFza0NhdGVnb3J5TGFiZWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrQ2F0ZWdvcnlMYWJlbElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRhc2tDYXRlZ29yeUxhYmVsSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWNhdGVnb3J5LWlucHV0XCIpO1xuICAgIHRhc2tDYXRlZ29yeUxhYmVsSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stY2F0ZWdvcnktaW5wdXRcIik7XG4gICAgdGFza0NhdGVnb3J5TGFiZWwuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3J5TGFiZWxJbnB1dCk7XG5cbiAgICBjb25zdCB0YXNrRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kYXRlLWlucHV0XCIpO1xuICAgIHRhc2tEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgRGF0ZVwiO1xuICAgIGNvbnN0IHRhc2tEYXRlTGFiZWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrRGF0ZUxhYmVsSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgdGFza0RhdGVMYWJlbElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1kYXRlLWlucHV0XCIpO1xuICAgIHRhc2tEYXRlTGFiZWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1kYXRlLWlucHV0XCIpO1xuICAgIHRhc2tEYXRlTGFiZWwuYXBwZW5kQ2hpbGQodGFza0RhdGVMYWJlbElucHV0KTtcblxuICAgIGNvbnN0IHRhc2tQcmlvcml0eWFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza1ByaW9yaXR5YWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLXByaW9yaXR5LWlucHV0XCIpO1xuICAgIHRhc2tQcmlvcml0eWFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgUHJpb3JpdHlcIjtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlMYWJlbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlMYWJlbElucHV0Tm9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgdGFza1ByaW9yaXR5TGFiZWxJbnB1dE5vbmUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsSW5wdXROb25lLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibm9uZVwiKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlMYWJlbElucHV0TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICB0YXNrUHJpb3JpdHlMYWJlbElucHV0TG93LnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICB0YXNrUHJpb3JpdHlMYWJlbElucHV0TG93LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibG93XCIpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsSW5wdXRNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsSW5wdXRNZWRpdW0udGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsSW5wdXRNZWRpdW0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJtZWRpdW1cIik7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5TGFiZWxJbnB1dEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsSW5wdXRIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgdGFza1ByaW9yaXR5TGFiZWxJbnB1dEhpZ2guc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJoaWdoXCIpO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXByaW9yaXR5LWlucHV0XCIpO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stcHJpb3JpdHktaW5wdXRcIik7XG4gICAgdGFza1ByaW9yaXR5TGFiZWxJbnB1dC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlMYWJlbElucHV0Tm9uZSk7XG4gICAgdGFza1ByaW9yaXR5TGFiZWxJbnB1dC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlMYWJlbElucHV0TG93KTtcbiAgICB0YXNrUHJpb3JpdHlMYWJlbElucHV0LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUxhYmVsSW5wdXRNZWRpdW0pO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsSW5wdXQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5TGFiZWxJbnB1dEhpZ2gpO1xuICAgIHRhc2tQcmlvcml0eWFiZWwuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5TGFiZWxJbnB1dCk7XG5cbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUxhYmVsKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsc0xhYmVsKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrQ2F0ZWdvcnlMYWJlbCk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0RhdGVMYWJlbCk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5YWJlbCk7XG4gICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG5cbiAgICBjb25zdCBhZGRUYXNrQ29udGFpbmVyQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFRhc2tDb250YWluZXJCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ1dHRvbnMtd3JhcHBlcicpO1xuICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRhaW5lckJ1dHRvbnMpO1xuICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXJDb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQ29udGFpbmVyQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKFwiY29uZmlybS1uZXctdGFza1wiKTtcbiAgICBhZGRUYXNrQ29udGFpbmVyQ29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICAgIGFkZFRhc2tDb250YWluZXJCdXR0b25zLmFwcGVuZENoaWxkKGFkZFRhc2tDb250YWluZXJDb25maXJtQnRuKTtcbiAgICBhZGRUYXNrQ29udGFpbmVyQ29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza1RvVGFza0xpc3QpO1xuICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXJDYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tDb250YWluZXJDYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1uZXctdGFza1wiKTtcbiAgICBhZGRUYXNrQ29udGFpbmVyQ2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBhZGRUYXNrQ29udGFpbmVyQnV0dG9ucy5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyQ2FuY2VsQnRuKTtcbiAgICBhZGRUYXNrQ29udGFpbmVyQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVBZGRUYXNrQ29udGFpbmVyKTtcbiAgICBhZGRUYXNrQ29udGFpbmVyQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhcklucHV0KTtcbn1cblxuY29uc3QgdG9nZ2xlQWRkVGFza0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1jb250YWluZXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ0blwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idG5cIikuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn1cblxuY29uc3QgY2xlYXJJbnB1dCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZS1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRldGFpbHMtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1jYXRlZ29yeS1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL3VpXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHJlbmRlclBhZ2UpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=