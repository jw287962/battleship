/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/Roboto-Regular.ttf */ "./src/asset/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/Roboto-Bold.ttf */ "./src/asset/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'RobotoReg';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: 'RobotoBold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n\nbody{\n  font-family: 'RobotoReg',Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n  width: 100vw;\n}\n\n.header{\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid grey;\n  height: 70px;\n  font-size: 25px;\n}\n\n\n/* making a board */\n#playeronegrid,#playertwogrid{\n  display: grid;\n  grid-template-rows: repeat(10,1fr);\n  grid-template-columns: repeat(10,1fr);\n  \n}\n\n.gameboard{\n  display: grid;\n  grid-template-columns: repeat(2,1fr);\n  gap: 100px;\n\n}\n\n.box{\n  height: 20px;\n  width: 20px;\n  border: 1px solid black;\n}\n\n\n.turn{\n  font-family: RobotoBold, Arial, Helvetica, sans-serif;\n  margin: 10px;\n  border: 1px solid grey;\n  padding: 10px;\n  color: white;\n  background-color: black;\n}\n\n\n.ship{\n  background-color: rgb(0, 217, 255);\n}\n\n.hit::before{\n  content: \"+\";\n  display: flex;\n  justify-content: center;\n  color:black;\n  background-color: red;\n}\n\n\n.miss::before{\n  content: \"--\";\n  display: flex;\n  justify-content: center;\n  vertical-align:middle;\n  align-items: center;\n  font-weight: 800;\n}\n\n.sunk,.hit{\n  content: 'X';\n  background-color: red;\n\n}\n\n/* BUTTONS */\nbutton{\n  background-color: white;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 5px;\n  width: 100px;\n}\n.restart{\n  background-color: white;\n\n  margin: 3px;\n\n  position: absolute;\n  left: 0;\n}\n\n.restart:active{\n  position: absolute;\ntop: 20px;\n}\n\nbutton:active{\n  position: relative;\n  top: 2px\n}\n.hidden{\n    display: none;\n}\n\n.start{\n  width: 150px;\n  background-color: rgb(202, 242, 255);\n  margin: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,4CAAmC;AACrC;;;AAGA;EACE,qDAAqD;EACrD,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;;AAGA,mBAAmB;AACnB;EACE,aAAa;EACb,kCAAkC;EAClC,qCAAqC;;AAEvC;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,UAAU;;AAEZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;AACzB;;;AAGA;EACE,qDAAqD;EACrD,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;;;AAGA;EACE,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,qBAAqB;AACvB;;;AAGA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,qBAAqB;;AAEvB;;AAEA,YAAY;AACZ;EACE,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,YAAY;AACd;AACA;EACE,uBAAuB;;EAEvB,WAAW;;EAEX,kBAAkB;EAClB,OAAO;AACT;;AAEA;EACE,kBAAkB;AACpB,SAAS;AACT;;AAEA;EACE,kBAAkB;EAClB;AACF;AACA;IACI,aAAa;AACjB;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,YAAY;AACd","sourcesContent":["@font-face {\n  font-family: 'RobotoReg';\n  src: url('./asset/Roboto-Regular.ttf');\n}\n@font-face {\n  font-family: 'RobotoBold';\n  src: url('./asset/Roboto-Bold.ttf');\n}\n\n\nbody{\n  font-family: 'RobotoReg',Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n  width: 100vw;\n}\n\n.header{\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid grey;\n  height: 70px;\n  font-size: 25px;\n}\n\n\n/* making a board */\n#playeronegrid,#playertwogrid{\n  display: grid;\n  grid-template-rows: repeat(10,1fr);\n  grid-template-columns: repeat(10,1fr);\n  \n}\n\n.gameboard{\n  display: grid;\n  grid-template-columns: repeat(2,1fr);\n  gap: 100px;\n\n}\n\n.box{\n  height: 20px;\n  width: 20px;\n  border: 1px solid black;\n}\n\n\n.turn{\n  font-family: RobotoBold, Arial, Helvetica, sans-serif;\n  margin: 10px;\n  border: 1px solid grey;\n  padding: 10px;\n  color: white;\n  background-color: black;\n}\n\n\n.ship{\n  background-color: rgb(0, 217, 255);\n}\n\n.hit::before{\n  content: \"+\";\n  display: flex;\n  justify-content: center;\n  color:black;\n  background-color: red;\n}\n\n\n.miss::before{\n  content: \"--\";\n  display: flex;\n  justify-content: center;\n  vertical-align:middle;\n  align-items: center;\n  font-weight: 800;\n}\n\n.sunk,.hit{\n  content: 'X';\n  background-color: red;\n\n}\n\n/* BUTTONS */\nbutton{\n  background-color: white;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 5px;\n  width: 100px;\n}\n.restart{\n  background-color: white;\n\n  margin: 3px;\n\n  position: absolute;\n  left: 0;\n}\n\n.restart:active{\n  position: absolute;\ntop: 20px;\n}\n\nbutton:active{\n  position: relative;\n  top: 2px\n}\n.hidden{\n    display: none;\n}\n\n.start{\n  width: 150px;\n  background-color: rgb(202, 242, 255);\n  margin: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const ship = __webpack_require__(/*! ./ship */ "./src/ship.js");
// const ship = { length, sunk,}
const gameboard = () => {
    let board = [[]]
    createBoard();
    let turn = 0;
    let shipsArray = [];

    function getBoard(){
      return board;
    }
      function createBoard() {
        for(let i = 0; i <10;i ++){
          board.push([]);
          for(let o = 0; o <10; o++){
            board[i].push(createCoordinateObject(i,o));
          }
        }
      }

      function createCoordinateObject(x,y){
        let coordinate =
        {
          x: x,
         y: y,
         ship: undefined,
         hit: null,
       }
       return coordinate;
      }

      const location = (num1,num2) => {
          return board[num1][num2];
      }

      function fillBoardRandom(battleship){
        shipsArray.push(battleship);
        let length = battleship.getShip().length;

          let x = Math.round(Math.random() *9);
          let y = Math.round(Math.random() *9);
          while(!checkNoShip(battleship.isShipHorizontal(),length,x,y)){
            x = Math.round(Math.random() *9);
            y = Math.round(Math.random() *9);
          }

          if(battleship.isShipHorizontal()){
            for(let i = 0 ;i < length; i++){
              board[x+i][y].ship = battleship;
            }
          }
              
        else{
          for(let i = 0 ;i < length; i++){
            board[x][y+i].ship = battleship;
          }

      }

    }
        function checkNoShip(isHorizontal,length,x,y){
          if(isHorizontal){
            if(x< 0 || (x+length) > 9 || y < 0 || y> 9)
            return false;
            for(let i = 0 ;i < length; i++){
              if(board[x+i][y].ship != undefined)
              return false;
            } 
          }
          else {
            if(x< 0 || x > 9 || y < 0 || (y+length) > 9)
            return false;
            for(let i = 0 ;i < length; i++){
              if(board[x][y+i].ship != undefined)
                return false;
          }    
     
        }
          return true;
        }
      function addShip(num1,num2,size = 2, isHorizontal = true){
        const battleship = ship(size);

        if(isHorizontal){
            for(let i = 0 ;i < size; i ++){
              board[num1][num2+i].ship = battleship;
            }

        }
        else{
          for(let i = 0 ;i < size; i ++){
            board[num1+i][num1].ship = battleship;
          }

        }

        prettyPrint();
      }


     
      function prettyPrint(){
        let string = '';
        for(let i = 0; i <10;i ++){
          string += '\n'
          for(let o = 0; o <10; o++){
             if(board[i][o].hit == false) 
            string += '[-]';
            else if(!board[i][o].ship)
            string +='[ ]';
            else if(board[i][o].ship.isSunk())
            string += '[X]';
            
            else if(board[i][o].ship)
              string +='[S]';
          }
        }
        return string;
      }


      function hitShip(num1,num2){

        if(num1 < 0 || num2< 0 || num1 >9 || num2 > 9){
          return undefined;
        }
          if(board[num1][num2].hit !== null) { 
            //can't hit something already hit before
            return undefined;
          }


          if(board[num1][num2].ship){ //if a ship  
            board[num1][num2].ship.hit();
            board[num1][num2].ship.isSunk();
            board[num1][num2].hit = true;
            // see if all ships are sunk
            prettyPrint();
           return true;
          }else {   //if a miss
            board[num1][num2].hit = false;
            prettyPrint();
            return false;
          }
          
       
          
      }
      
      function checkAllSunk(){
        
        let allSunk = board.every(coord => coord.every( element => checkShip(element)));
// && coord.ship.sunk == false
       if(allSunk){
        return true;
       }
        else
        return false;
      }
      function checkShip(coord){
          if(coord.ship == undefined) 
          return true;
          else if(coord.ship.getShip().sunk)  
          return true;  
          else
          return false;
      }

      function checkIsShip(coord){
        if(coord.ship == undefined) 
        return false;
        else if(coord.ship)  
        return true;   //lol redudnat?
        else
        return false;
    }

     return {turn,getBoard,location,addShip,hitShip,prettyPrint,checkAllSunk,checkIsShip,fillBoardRandom,shipsArray}; 

      
}

module.exports = gameboard;

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
const ship = __webpack_require__(/*! ./ship */ "./src/ship.js");



const player = (name,isAInt,number = 1) => {
  const isAI = isAInt;
  const playerName = name;
  const playerNumber = number;
  const board = gameboard(); 
const ships = [];
const shipCoordinates = [];
const possibleMoves = [];

let winner = false; 
for(let i = 0; i <7; i++){
  let num;
  if(i <= 2)  num = 2;
  else if(i <= 4)  num = 3;
  else if(i <= 5)  num = 4;
  else if(i < 7) num = 5;
  const ship1 = ship(num);
  ships.push(ship1);
}

fillAllShips();

    function getAllShips(){
        return ships;
    }
    
    function fillAllShips(){
      ships.forEach(element => {
        board.fillBoardRandom(element);

      });
      board.prettyPrint();
    }
    
    function shootCoordinates(x =0 ,y = 0,isRobot){
      if(isRobot){
             x = Math.round(Math.random() *9);
             y = Math.round(Math.random() *9);

        if(shipCoordinates.length >= 1 || possibleMoves.length >= 1){
          // if(board.checkIsShip(board.location(shipCoordinates[0],shipCoordinates[1])))
          //   shipCoordinates.splice(0,shipCoordinates.length);
          //   else{
            if(shipCoordinates.length >= 1){
              x = shipCoordinates.splice(0,1)[0];
              y =  shipCoordinates.splice(0,1)[0];
              possibleMoves.push(x+1,y);
              possibleMoves.push(x-1,y);
              possibleMoves.push(x,y-1);
              possibleMoves.push(x,y+1);
            }
              let coord = possibleMoves.splice(0,2);
                let hitWhat = board.hitShip(coord[0],coord[1])
              while(possibleMoves.length !=0 &&  hitWhat == undefined ){
                console.log(possibleMoves);
                coord = possibleMoves.splice(0,2);
                hitWhat  = board.hitShip(coord[0],coord[1]);
              };
              if(hitWhat != undefined){
                // console.log(hitWhat);
                  if(hitWhat){
                    shipCoordinates.push(coord[0]);
                    shipCoordinates.push(coord[1]);
                  }
                return;
              }
        }
          let movePossible = board.hitShip(x,y);
        
          while(movePossible === undefined){
               x = Math.round(Math.random() *9);
               y = Math.round(Math.random() *9);
              movePossible = board.hitShip(x,y);
            }
            console.log(movePossible, x,y);
          if(movePossible == true){
            shipCoordinates.push(x);
            shipCoordinates.push(y);
          }
          console.log(shipCoordinates);

      
      }else{
        
        console.log('human');
        board.hitShip(x,y)
      }
    }
    function isWinner(){
      return winner;
    }
    function won(){
       winner = true;
    }
    function getName(){
      return name;
    }

    return {getAllShips,board,shootCoordinates, playerNumber,getName,isAI,isWinner,won}
  }


  module.exports = player;

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {


const Ship = (length = 2, isHorizontal = 0, sunk = false) => {
 const ship = {
    length: length,
    hits: 0,
    sunk: sunk,
    horizontal: undefined
  }

   isHorizontal = Math.round(Math.random());
  ship.horizontal == isHorizontal;

  const hit = () =>{
    ship.hits += 1;
    return ship.hits;
  }
  function isShipHorizontal(){
    return this.horizontal;
  }
  const getShip = () => {
    return ship;
  }
  
  const isSunk = () =>{
    if(ship.hits == ship.length) ship.sunk = true;
    return ship.sunk;
  }

  return {Ship,getShip,hit,isSunk,isShipHorizontal};
}


module.exports = Ship;

/***/ }),

/***/ "./src/asset/Roboto-Bold.ttf":
/*!***********************************!*\
  !*** ./src/asset/Roboto-Bold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/asset/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/asset/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
const player = __webpack_require__(/*! ./player */ "./src/player.js");




let isAi = true;

let player1 = player('Player1',!isAi,1);
let player2 = player('AI',isAi,2);

let i = 0; 
let winner = false;

const newGameDiv = document.querySelector('.restart');
const startGameDiv = document.querySelector('.start')

// button to start game 
newGameDiv.addEventListener('click',playGame);
startGameDiv.addEventListener('click',addEventListenerGameStart);


playGame();



// make a board on website
function playGame(){
  startGameDiv.classList.remove('hidden');
   player1 = player('Player1',!isAi,1);
 player2 = player('AI',isAi,2);
  console.log("new game")

const player1Board = document.querySelector('#playeronegrid');
const player2Board = document.querySelector('#playertwogrid');
checkTurn();

makeAGrid(player1Board);
makeAGrid(player2Board);

updateBoard();

}



// playGame();  //will need to change for when there is a user interface

function addEventListenerGameStart(e){
  e.preventDefault();
  console.log('addListenrs')

  startGameDiv.classList.toggle('hidden');
  player2.board.getBoard().forEach(element => {
    element.forEach( element=> {
      let number = "" + element.x+element.y;
        const box = document.querySelector('#playertwogrid');
        box.childNodes[+number].addEventListener('click',evalulatePlayerClick);
     
    })
  });
}

function dragShip(e){
  // console.log(e.target.classList[2]);
  let shipName = e.target.classList[2];
  const ship = document.getElementsByClassName(shipName);
  // let shipCoordinate = [];
  // console.log(ship);
  e.dataTransfer.setData("text", e.target.classList);
  e.dataTransfer.dropEffect = "copy";
  // for(let i = 0; i < ship.length;i++){
  //   shipCoordinate.push(ship[i].id);

  // }
}

function dragShipEnd(e){
  console.log(e, 'dropend')
  e.preventDefault();
let data = e.dataTransfer.getData("text");
console.log(data);
e.target.classList.add('ship');
}
function onDropShip(e){
console.log(e, 'on drop')
}
function makeAGrid(parentDiv){
  parentDiv.innerHTML = "";
  for(let i = 0;i< 10;i++){
    for(let o =0;o <10;o++){
        const boxGrid = document.createElement('div');
        
        boxGrid.classList.add('box');
        boxGrid.setAttribute('id',`${i}${o}`)
        if(player1.board.getBoard()[i][o].ship){
          boxGrid.draggable  = true;
          boxGrid.addEventListener('dragstart',dragShip);
         
        }
        boxGrid.addEventListener('ondrop',onDropShip);
        boxGrid.addEventListener('dropend',dragShipEnd);
        parentDiv.appendChild(boxGrid);
    }
  }
}

function evalulatePlayerClick(e){
  e.preventDefault();
  if(player1.isWinner() ||  player2.isWinner()){
    return;
  }
  if(player1.board.turn+player2.board.turn == 0 && e.target.parentElement.id === 'playeronegrid' ){
    //game has not started. can move ships....
      let coord = e.target.id.split('');
      if(player1.board.checkIsShip(player1.board.location(coord[0],coord[1]))){
        // var data = e.dataTransfer.getData(e.target);
        console.log(e.dataTransfer.setData("text","hi"));
  
    }
    

    return;
  }
  
    if(player1.board.turn == player2.board.turn && e.target.parentElement.id === 'playertwogrid' ){
    // player 1 turn
    player1.board.turn++
    let coord = e.target.id.split('');
    if(player2.board.hitShip(coord[0],coord[1]) == undefined){
      player1.board.turn--;
      return;
    }
      updateBoard();
      checkWinner();
   
  }else{
  console.log('ALL UNITS MUST ATTACK ENEMY.')
  return;
}
    player2.board.turn++;
    player1.shootCoordinates(0,0,player2.isAI);
    updateBoard();


    checkTurn();

    checkWinner();


    
}
function checkTurn(){
  const turnDiv = document.querySelector('.turn');
  if(player1.board.turn == player2.board.turn) {
    turnDiv.textContent = 'PLAYER ONE TURN ';
  }
  if(player1.board.turn > player2.board.turn){
    turnDiv.textContent = 'PLAYER TWO TURN';
  }
}
function updateBoard(){
  player1.board.getBoard().forEach(element => {
    element.forEach( element=> {
      let num = 0;
      let number = "" + element.x+element.y;
        const box = document.querySelector('#playeronegrid');
        box.childNodes[+number].textContent = '';
      if(element.hit == false) 
      box.childNodes[+number].classList.toggle('miss');
      else if(!element.ship)
      box.childNodes[+number].textContent ='';
      else if(element.ship.isSunk())
      box.childNodes[+number].classList.toggle('sunk');
      else if(element.hit == true) 
      box.childNodes[+number].classList.toggle('hit');
      else if(element.ship){

      player1.board.shipsArray.forEach(ship => {
        if(ship.getShip() === element.ship.getShip()){
          box.childNodes[+number].classList.toggle(`ship`);
          box.childNodes[+number].classList.add(`ship${num}`);
        }
        num++;
      });


      }
    })
  });

  player2.board.getBoard().forEach(element => {
    element.forEach( element=> {
      let number = "" + element.x+element.y;
        const box = document.querySelector('#playertwogrid');
        box.childNodes[+number].textContent = '';
        
        if(element.hit == false) 
        box.childNodes[+number].classList.add('miss');
        else if(!element.ship)
        box.childNodes[+number].textContent ='';
        else if(element.ship.isSunk()){
          box.childNodes[+number].classList.remove('hit');
        box.childNodes[+number].classList.add('sunk');
        }
        else if(element.hit == true) 
        box.childNodes[+number].classList.add('hit');
        // else if(element.ship)
        // box.childNodes[+number].textContent = "S";
    })
  });

}


function checkWinner(){
  const turnDiv = document.querySelector('.turn');

  if(player2.board.checkAllSunk()){
    turnDiv.textContent = "Player 1 WON";
    player1.won();
}
if(player1.board.checkAllSunk()){
  turnDiv.textContent = "Player 2 WON";
  player2.won();
}
}

// function findMoveAI(){
//   let x = Math.round(Math.random() *9);
//   let y = Math.round(Math.random() *9);

//     let movePossible = player1.board.hitShip(x,y);
    
//      while(movePossible === undefined){
//         let x = Math.round(Math.random() *9);
//         let y = Math.round(Math.random() *9);
       
//       }
//       if(movePossible == true){
        
//       }
//       movePossible = player1.board.hitShip(x,y);
//      // while(movePossible === undefined){
//     //     let x = Math.round(Math.random() *9);
//     //     let y = Math.round(Math.random() *9);
//     //     movePossible = player2.board.hitShip(x,y);
//     //   }
// }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLHFDQUFxQyxFQUFFLEVBQUUsRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELElBQUk7QUFDM0Q7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXQvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90b1JlZyc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9Cb2xkJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuXFxuYm9keXtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVnJyxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXJ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcblxcbi8qIG1ha2luZyBhIGJvYXJkICovXFxuI3BsYXllcm9uZWdyaWQsI3BsYXllcnR3b2dyaWR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICBcXG59XFxuXFxuLmdhbWVib2FyZHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICBnYXA6IDEwMHB4O1xcblxcbn1cXG5cXG4uYm94e1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLnR1cm57XFxuICBmb250LWZhbWlseTogUm9ib3RvQm9sZCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcblxcbi5zaGlwe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIxNywgMjU1KTtcXG59XFxuXFxuLmhpdDo6YmVmb3Jle1xcbiAgY29udGVudDogXFxcIitcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6YmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcblxcbi5taXNzOjpiZWZvcmV7XFxuICBjb250ZW50OiBcXFwiLS1cXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5zdW5rLC5oaXR7XFxuICBjb250ZW50OiAnWCc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFxufVxcblxcbi8qIEJVVFRPTlMgKi9cXG5idXR0b257XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcbi5yZXN0YXJ0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICBtYXJnaW46IDNweDtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5yZXN0YXJ0OmFjdGl2ZXtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IDIwcHg7XFxufVxcblxcbmJ1dHRvbjphY3RpdmV7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweFxcbn1cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3RhcnR7XFxuICB3aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyNDIsIDI1NSk7XFxuICBtYXJnaW46IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsNENBQW1DO0FBQ3JDOzs7QUFHQTtFQUNFLHFEQUFxRDtFQUNyRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7QUFDakI7OztBQUdBLG1CQUFtQjtBQUNuQjtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMscUNBQXFDOztBQUV2Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsVUFBVTs7QUFFWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOzs7QUFHQTtFQUNFLHFEQUFxRDtFQUNyRCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOzs7QUFHQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCOztBQUV2Qjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7O0VBRXZCLFdBQVc7O0VBRVgsa0JBQWtCO0VBQ2xCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQixTQUFTO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEI7QUFDRjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWcnO1xcbiAgc3JjOiB1cmwoJy4vYXNzZXQvUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9Cb2xkJztcXG4gIHNyYzogdXJsKCcuL2Fzc2V0L1JvYm90by1Cb2xkLnR0ZicpO1xcbn1cXG5cXG5cXG5ib2R5e1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWcnLEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlcntcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcXG4gIGhlaWdodDogNzBweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuXFxuLyogbWFraW5nIGEgYm9hcmQgKi9cXG4jcGxheWVyb25lZ3JpZCwjcGxheWVydHdvZ3JpZHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMWZyKTtcXG4gIFxcbn1cXG5cXG4uZ2FtZWJvYXJke1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gIGdhcDogMTAwcHg7XFxuXFxufVxcblxcbi5ib3h7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4udHVybntcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuXFxuLnNoaXB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjE3LCAyNTUpO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmV7XFxuICBjb250ZW50OiBcXFwiK1xcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjpibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuXFxuLm1pc3M6OmJlZm9yZXtcXG4gIGNvbnRlbnQ6IFxcXCItLVxcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLnN1bmssLmhpdHtcXG4gIGNvbnRlbnQ6ICdYJztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXG59XFxuXFxuLyogQlVUVE9OUyAqL1xcbmJ1dHRvbntcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuLnJlc3RhcnR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIG1hcmdpbjogM3B4O1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnJlc3RhcnQ6YWN0aXZle1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbnRvcDogMjBweDtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZXtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4XFxufVxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdGFydHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDI0MiwgMjU1KTtcXG4gIG1hcmdpbjogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuY29uc3Qgc2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpO1xuLy8gY29uc3Qgc2hpcCA9IHsgbGVuZ3RoLCBzdW5rLH1cbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBsZXQgYm9hcmQgPSBbW11dXG4gICAgY3JlYXRlQm9hcmQoKTtcbiAgICBsZXQgdHVybiA9IDA7XG4gICAgbGV0IHNoaXBzQXJyYXkgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGdldEJvYXJkKCl7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuICAgICAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPDEwO2kgKyspe1xuICAgICAgICAgIGJvYXJkLnB1c2goW10pO1xuICAgICAgICAgIGZvcihsZXQgbyA9IDA7IG8gPDEwOyBvKyspe1xuICAgICAgICAgICAgYm9hcmRbaV0ucHVzaChjcmVhdGVDb29yZGluYXRlT2JqZWN0KGksbykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjcmVhdGVDb29yZGluYXRlT2JqZWN0KHgseSl7XG4gICAgICAgIGxldCBjb29yZGluYXRlID1cbiAgICAgICAge1xuICAgICAgICAgIHg6IHgsXG4gICAgICAgICB5OiB5LFxuICAgICAgICAgc2hpcDogdW5kZWZpbmVkLFxuICAgICAgICAgaGl0OiBudWxsLFxuICAgICAgIH1cbiAgICAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbG9jYXRpb24gPSAobnVtMSxudW0yKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGJvYXJkW251bTFdW251bTJdO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBmaWxsQm9hcmRSYW5kb20oYmF0dGxlc2hpcCl7XG4gICAgICAgIHNoaXBzQXJyYXkucHVzaChiYXR0bGVzaGlwKTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IGJhdHRsZXNoaXAuZ2V0U2hpcCgpLmxlbmd0aDtcblxuICAgICAgICAgIGxldCB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcbiAgICAgICAgICBsZXQgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqOSk7XG4gICAgICAgICAgd2hpbGUoIWNoZWNrTm9TaGlwKGJhdHRsZXNoaXAuaXNTaGlwSG9yaXpvbnRhbCgpLGxlbmd0aCx4LHkpKXtcbiAgICAgICAgICAgIHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKjkpO1xuICAgICAgICAgICAgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqOSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoYmF0dGxlc2hpcC5pc1NoaXBIb3Jpem9udGFsKCkpe1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMCA7aSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgYm9hcmRbeCtpXVt5XS5zaGlwID0gYmF0dGxlc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICBlbHNle1xuICAgICAgICAgIGZvcihsZXQgaSA9IDAgO2kgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBib2FyZFt4XVt5K2ldLnNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuICAgICAgICBmdW5jdGlvbiBjaGVja05vU2hpcChpc0hvcml6b250YWwsbGVuZ3RoLHgseSl7XG4gICAgICAgICAgaWYoaXNIb3Jpem9udGFsKXtcbiAgICAgICAgICAgIGlmKHg8IDAgfHwgKHgrbGVuZ3RoKSA+IDkgfHwgeSA8IDAgfHwgeT4gOSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDAgO2kgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgIGlmKGJvYXJkW3graV1beV0uc2hpcCAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoeDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCAoeStsZW5ndGgpID4gOSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDAgO2kgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgIGlmKGJvYXJkW3hdW3kraV0uc2hpcCAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gICAgXG4gICAgIFxuICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGFkZFNoaXAobnVtMSxudW0yLHNpemUgPSAyLCBpc0hvcml6b250YWwgPSB0cnVlKXtcbiAgICAgICAgY29uc3QgYmF0dGxlc2hpcCA9IHNoaXAoc2l6ZSk7XG5cbiAgICAgICAgaWYoaXNIb3Jpem9udGFsKXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDAgO2kgPCBzaXplOyBpICsrKXtcbiAgICAgICAgICAgICAgYm9hcmRbbnVtMV1bbnVtMitpXS5zaGlwID0gYmF0dGxlc2hpcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgZm9yKGxldCBpID0gMCA7aSA8IHNpemU7IGkgKyspe1xuICAgICAgICAgICAgYm9hcmRbbnVtMStpXVtudW0xXS5zaGlwID0gYmF0dGxlc2hpcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHByZXR0eVByaW50KCk7XG4gICAgICB9XG5cblxuICAgICBcbiAgICAgIGZ1bmN0aW9uIHByZXR0eVByaW50KCl7XG4gICAgICAgIGxldCBzdHJpbmcgPSAnJztcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8MTA7aSArKyl7XG4gICAgICAgICAgc3RyaW5nICs9ICdcXG4nXG4gICAgICAgICAgZm9yKGxldCBvID0gMDsgbyA8MTA7IG8rKyl7XG4gICAgICAgICAgICAgaWYoYm9hcmRbaV1bb10uaGl0ID09IGZhbHNlKSBcbiAgICAgICAgICAgIHN0cmluZyArPSAnWy1dJztcbiAgICAgICAgICAgIGVsc2UgaWYoIWJvYXJkW2ldW29dLnNoaXApXG4gICAgICAgICAgICBzdHJpbmcgKz0nWyBdJztcbiAgICAgICAgICAgIGVsc2UgaWYoYm9hcmRbaV1bb10uc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgICAgIHN0cmluZyArPSAnW1hdJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxzZSBpZihib2FyZFtpXVtvXS5zaGlwKVxuICAgICAgICAgICAgICBzdHJpbmcgKz0nW1NdJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgIH1cblxuXG4gICAgICBmdW5jdGlvbiBoaXRTaGlwKG51bTEsbnVtMil7XG5cbiAgICAgICAgaWYobnVtMSA8IDAgfHwgbnVtMjwgMCB8fCBudW0xID45IHx8IG51bTIgPiA5KXtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgICAgaWYoYm9hcmRbbnVtMV1bbnVtMl0uaGl0ICE9PSBudWxsKSB7IFxuICAgICAgICAgICAgLy9jYW4ndCBoaXQgc29tZXRoaW5nIGFscmVhZHkgaGl0IGJlZm9yZVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIGlmKGJvYXJkW251bTFdW251bTJdLnNoaXApeyAvL2lmIGEgc2hpcCAgXG4gICAgICAgICAgICBib2FyZFtudW0xXVtudW0yXS5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgYm9hcmRbbnVtMV1bbnVtMl0uc2hpcC5pc1N1bmsoKTtcbiAgICAgICAgICAgIGJvYXJkW251bTFdW251bTJdLmhpdCA9IHRydWU7XG4gICAgICAgICAgICAvLyBzZWUgaWYgYWxsIHNoaXBzIGFyZSBzdW5rXG4gICAgICAgICAgICBwcmV0dHlQcmludCgpO1xuICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9ZWxzZSB7ICAgLy9pZiBhIG1pc3NcbiAgICAgICAgICAgIGJvYXJkW251bTFdW251bTJdLmhpdCA9IGZhbHNlO1xuICAgICAgICAgICAgcHJldHR5UHJpbnQoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgXG4gICAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGZ1bmN0aW9uIGNoZWNrQWxsU3Vuaygpe1xuICAgICAgICBcbiAgICAgICAgbGV0IGFsbFN1bmsgPSBib2FyZC5ldmVyeShjb29yZCA9PiBjb29yZC5ldmVyeSggZWxlbWVudCA9PiBjaGVja1NoaXAoZWxlbWVudCkpKTtcbi8vICYmIGNvb3JkLnNoaXAuc3VuayA9PSBmYWxzZVxuICAgICAgIGlmKGFsbFN1bmspe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY2hlY2tTaGlwKGNvb3JkKXtcbiAgICAgICAgICBpZihjb29yZC5zaGlwID09IHVuZGVmaW5lZCkgXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgZWxzZSBpZihjb29yZC5zaGlwLmdldFNoaXAoKS5zdW5rKSAgXG4gICAgICAgICAgcmV0dXJuIHRydWU7ICBcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjaGVja0lzU2hpcChjb29yZCl7XG4gICAgICAgIGlmKGNvb3JkLnNoaXAgPT0gdW5kZWZpbmVkKSBcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBlbHNlIGlmKGNvb3JkLnNoaXApICBcbiAgICAgICAgcmV0dXJuIHRydWU7ICAgLy9sb2wgcmVkdWRuYXQ/XG4gICAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgICByZXR1cm4ge3R1cm4sZ2V0Qm9hcmQsbG9jYXRpb24sYWRkU2hpcCxoaXRTaGlwLHByZXR0eVByaW50LGNoZWNrQWxsU3VuayxjaGVja0lzU2hpcCxmaWxsQm9hcmRSYW5kb20sc2hpcHNBcnJheX07IFxuXG4gICAgICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lYm9hcmQ7IiwiY29uc3QgZ2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcbmNvbnN0IHNoaXAgPSByZXF1aXJlKCcuL3NoaXAnKTtcblxuXG5cbmNvbnN0IHBsYXllciA9IChuYW1lLGlzQUludCxudW1iZXIgPSAxKSA9PiB7XG4gIGNvbnN0IGlzQUkgPSBpc0FJbnQ7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBuYW1lO1xuICBjb25zdCBwbGF5ZXJOdW1iZXIgPSBudW1iZXI7XG4gIGNvbnN0IGJvYXJkID0gZ2FtZWJvYXJkKCk7IFxuY29uc3Qgc2hpcHMgPSBbXTtcbmNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFtdO1xuY29uc3QgcG9zc2libGVNb3ZlcyA9IFtdO1xuXG5sZXQgd2lubmVyID0gZmFsc2U7IFxuZm9yKGxldCBpID0gMDsgaSA8NzsgaSsrKXtcbiAgbGV0IG51bTtcbiAgaWYoaSA8PSAyKSAgbnVtID0gMjtcbiAgZWxzZSBpZihpIDw9IDQpICBudW0gPSAzO1xuICBlbHNlIGlmKGkgPD0gNSkgIG51bSA9IDQ7XG4gIGVsc2UgaWYoaSA8IDcpIG51bSA9IDU7XG4gIGNvbnN0IHNoaXAxID0gc2hpcChudW0pO1xuICBzaGlwcy5wdXNoKHNoaXAxKTtcbn1cblxuZmlsbEFsbFNoaXBzKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRBbGxTaGlwcygpe1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGZpbGxBbGxTaGlwcygpe1xuICAgICAgc2hpcHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgYm9hcmQuZmlsbEJvYXJkUmFuZG9tKGVsZW1lbnQpO1xuXG4gICAgICB9KTtcbiAgICAgIGJvYXJkLnByZXR0eVByaW50KCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNob290Q29vcmRpbmF0ZXMoeCA9MCAseSA9IDAsaXNSb2JvdCl7XG4gICAgICBpZihpc1JvYm90KXtcbiAgICAgICAgICAgICB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcbiAgICAgICAgICAgICB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcblxuICAgICAgICBpZihzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoID49IDEgfHwgcG9zc2libGVNb3Zlcy5sZW5ndGggPj0gMSl7XG4gICAgICAgICAgLy8gaWYoYm9hcmQuY2hlY2tJc1NoaXAoYm9hcmQubG9jYXRpb24oc2hpcENvb3JkaW5hdGVzWzBdLHNoaXBDb29yZGluYXRlc1sxXSkpKVxuICAgICAgICAgIC8vICAgc2hpcENvb3JkaW5hdGVzLnNwbGljZSgwLHNoaXBDb29yZGluYXRlcy5sZW5ndGgpO1xuICAgICAgICAgIC8vICAgZWxzZXtcbiAgICAgICAgICAgIGlmKHNoaXBDb29yZGluYXRlcy5sZW5ndGggPj0gMSl7XG4gICAgICAgICAgICAgIHggPSBzaGlwQ29vcmRpbmF0ZXMuc3BsaWNlKDAsMSlbMF07XG4gICAgICAgICAgICAgIHkgPSAgc2hpcENvb3JkaW5hdGVzLnNwbGljZSgwLDEpWzBdO1xuICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goeCsxLHkpO1xuICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goeC0xLHkpO1xuICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goeCx5LTEpO1xuICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goeCx5KzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgY29vcmQgPSBwb3NzaWJsZU1vdmVzLnNwbGljZSgwLDIpO1xuICAgICAgICAgICAgICAgIGxldCBoaXRXaGF0ID0gYm9hcmQuaGl0U2hpcChjb29yZFswXSxjb29yZFsxXSlcbiAgICAgICAgICAgICAgd2hpbGUocG9zc2libGVNb3Zlcy5sZW5ndGggIT0wICYmICBoaXRXaGF0ID09IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc3NpYmxlTW92ZXMpO1xuICAgICAgICAgICAgICAgIGNvb3JkID0gcG9zc2libGVNb3Zlcy5zcGxpY2UoMCwyKTtcbiAgICAgICAgICAgICAgICBoaXRXaGF0ICA9IGJvYXJkLmhpdFNoaXAoY29vcmRbMF0sY29vcmRbMV0pO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBpZihoaXRXaGF0ICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaGl0V2hhdCk7XG4gICAgICAgICAgICAgICAgICBpZihoaXRXaGF0KXtcbiAgICAgICAgICAgICAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goY29vcmRbMF0pO1xuICAgICAgICAgICAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChjb29yZFsxXSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICBsZXQgbW92ZVBvc3NpYmxlID0gYm9hcmQuaGl0U2hpcCh4LHkpO1xuICAgICAgICBcbiAgICAgICAgICB3aGlsZShtb3ZlUG9zc2libGUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcbiAgICAgICAgICAgICAgIHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKjkpO1xuICAgICAgICAgICAgICBtb3ZlUG9zc2libGUgPSBib2FyZC5oaXRTaGlwKHgseSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtb3ZlUG9zc2libGUsIHgseSk7XG4gICAgICAgICAgaWYobW92ZVBvc3NpYmxlID09IHRydWUpe1xuICAgICAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goeCk7XG4gICAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaCh5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coc2hpcENvb3JkaW5hdGVzKTtcblxuICAgICAgXG4gICAgICB9ZWxzZXtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdodW1hbicpO1xuICAgICAgICBib2FyZC5oaXRTaGlwKHgseSlcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNXaW5uZXIoKXtcbiAgICAgIHJldHVybiB3aW5uZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdvbigpe1xuICAgICAgIHdpbm5lciA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE5hbWUoKXtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0QWxsU2hpcHMsYm9hcmQsc2hvb3RDb29yZGluYXRlcywgcGxheWVyTnVtYmVyLGdldE5hbWUsaXNBSSxpc1dpbm5lcix3b259XG4gIH1cblxuXG4gIG1vZHVsZS5leHBvcnRzID0gcGxheWVyOyIsIlxuY29uc3QgU2hpcCA9IChsZW5ndGggPSAyLCBpc0hvcml6b250YWwgPSAwLCBzdW5rID0gZmFsc2UpID0+IHtcbiBjb25zdCBzaGlwID0ge1xuICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgIGhpdHM6IDAsXG4gICAgc3Vuazogc3VuayxcbiAgICBob3Jpem9udGFsOiB1bmRlZmluZWRcbiAgfVxuXG4gICBpc0hvcml6b250YWwgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICBzaGlwLmhvcml6b250YWwgPT0gaXNIb3Jpem9udGFsO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+e1xuICAgIHNoaXAuaGl0cyArPSAxO1xuICAgIHJldHVybiBzaGlwLmhpdHM7XG4gIH1cbiAgZnVuY3Rpb24gaXNTaGlwSG9yaXpvbnRhbCgpe1xuICAgIHJldHVybiB0aGlzLmhvcml6b250YWw7XG4gIH1cbiAgY29uc3QgZ2V0U2hpcCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcDtcbiAgfVxuICBcbiAgY29uc3QgaXNTdW5rID0gKCkgPT57XG4gICAgaWYoc2hpcC5oaXRzID09IHNoaXAubGVuZ3RoKSBzaGlwLnN1bmsgPSB0cnVlO1xuICAgIHJldHVybiBzaGlwLnN1bms7XG4gIH1cblxuICByZXR1cm4ge1NoaXAsZ2V0U2hpcCxoaXQsaXNTdW5rLGlzU2hpcEhvcml6b250YWx9O1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiY29uc3QgcGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKTtcbmltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5cblxuXG5sZXQgaXNBaSA9IHRydWU7XG5cbmxldCBwbGF5ZXIxID0gcGxheWVyKCdQbGF5ZXIxJywhaXNBaSwxKTtcbmxldCBwbGF5ZXIyID0gcGxheWVyKCdBSScsaXNBaSwyKTtcblxubGV0IGkgPSAwOyBcbmxldCB3aW5uZXIgPSBmYWxzZTtcblxuY29uc3QgbmV3R2FtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0Jyk7XG5jb25zdCBzdGFydEdhbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKVxuXG4vLyBidXR0b24gdG8gc3RhcnQgZ2FtZSBcbm5ld0dhbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHBsYXlHYW1lKTtcbnN0YXJ0R2FtZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkRXZlbnRMaXN0ZW5lckdhbWVTdGFydCk7XG5cblxucGxheUdhbWUoKTtcblxuXG5cbi8vIG1ha2UgYSBib2FyZCBvbiB3ZWJzaXRlXG5mdW5jdGlvbiBwbGF5R2FtZSgpe1xuICBzdGFydEdhbWVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICBwbGF5ZXIxID0gcGxheWVyKCdQbGF5ZXIxJywhaXNBaSwxKTtcbiBwbGF5ZXIyID0gcGxheWVyKCdBSScsaXNBaSwyKTtcbiAgY29uc29sZS5sb2coXCJuZXcgZ2FtZVwiKVxuXG5jb25zdCBwbGF5ZXIxQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyb25lZ3JpZCcpO1xuY29uc3QgcGxheWVyMkJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcnR3b2dyaWQnKTtcbmNoZWNrVHVybigpO1xuXG5tYWtlQUdyaWQocGxheWVyMUJvYXJkKTtcbm1ha2VBR3JpZChwbGF5ZXIyQm9hcmQpO1xuXG51cGRhdGVCb2FyZCgpO1xuXG59XG5cblxuXG4vLyBwbGF5R2FtZSgpOyAgLy93aWxsIG5lZWQgdG8gY2hhbmdlIGZvciB3aGVuIHRoZXJlIGlzIGEgdXNlciBpbnRlcmZhY2VcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckdhbWVTdGFydChlKXtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zb2xlLmxvZygnYWRkTGlzdGVucnMnKVxuXG4gIHN0YXJ0R2FtZURpdi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgcGxheWVyMi5ib2FyZC5nZXRCb2FyZCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5mb3JFYWNoKCBlbGVtZW50PT4ge1xuICAgICAgbGV0IG51bWJlciA9IFwiXCIgKyBlbGVtZW50LngrZWxlbWVudC55O1xuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVydHdvZ3JpZCcpO1xuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZXZhbHVsYXRlUGxheWVyQ2xpY2spO1xuICAgICBcbiAgICB9KVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZHJhZ1NoaXAoZSl7XG4gIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsYXNzTGlzdFsyXSk7XG4gIGxldCBzaGlwTmFtZSA9IGUudGFyZ2V0LmNsYXNzTGlzdFsyXTtcbiAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2hpcE5hbWUpO1xuICAvLyBsZXQgc2hpcENvb3JkaW5hdGUgPSBbXTtcbiAgLy8gY29uc29sZS5sb2coc2hpcCk7XG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIGUudGFyZ2V0LmNsYXNzTGlzdCk7XG4gIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcImNvcHlcIjtcbiAgLy8gZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoO2krKyl7XG4gIC8vICAgc2hpcENvb3JkaW5hdGUucHVzaChzaGlwW2ldLmlkKTtcblxuICAvLyB9XG59XG5cbmZ1bmN0aW9uIGRyYWdTaGlwRW5kKGUpe1xuICBjb25zb2xlLmxvZyhlLCAnZHJvcGVuZCcpXG4gIGUucHJldmVudERlZmF1bHQoKTtcbmxldCBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG5jb25zb2xlLmxvZyhkYXRhKTtcbmUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbn1cbmZ1bmN0aW9uIG9uRHJvcFNoaXAoZSl7XG5jb25zb2xlLmxvZyhlLCAnb24gZHJvcCcpXG59XG5mdW5jdGlvbiBtYWtlQUdyaWQocGFyZW50RGl2KXtcbiAgcGFyZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIGZvcihsZXQgaSA9IDA7aTwgMTA7aSsrKXtcbiAgICBmb3IobGV0IG8gPTA7byA8MTA7bysrKXtcbiAgICAgICAgY29uc3QgYm94R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgYm94R3JpZC5jbGFzc0xpc3QuYWRkKCdib3gnKTtcbiAgICAgICAgYm94R3JpZC5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtpfSR7b31gKVxuICAgICAgICBpZihwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbaV1bb10uc2hpcCl7XG4gICAgICAgICAgYm94R3JpZC5kcmFnZ2FibGUgID0gdHJ1ZTtcbiAgICAgICAgICBib3hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsZHJhZ1NoaXApO1xuICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgYm94R3JpZC5hZGRFdmVudExpc3RlbmVyKCdvbmRyb3AnLG9uRHJvcFNoaXApO1xuICAgICAgICBib3hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3BlbmQnLGRyYWdTaGlwRW5kKTtcbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGJveEdyaWQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBldmFsdWxhdGVQbGF5ZXJDbGljayhlKXtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZihwbGF5ZXIxLmlzV2lubmVyKCkgfHwgIHBsYXllcjIuaXNXaW5uZXIoKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKHBsYXllcjEuYm9hcmQudHVybitwbGF5ZXIyLmJvYXJkLnR1cm4gPT0gMCAmJiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkID09PSAncGxheWVyb25lZ3JpZCcgKXtcbiAgICAvL2dhbWUgaGFzIG5vdCBzdGFydGVkLiBjYW4gbW92ZSBzaGlwcy4uLi5cbiAgICAgIGxldCBjb29yZCA9IGUudGFyZ2V0LmlkLnNwbGl0KCcnKTtcbiAgICAgIGlmKHBsYXllcjEuYm9hcmQuY2hlY2tJc1NoaXAocGxheWVyMS5ib2FyZC5sb2NhdGlvbihjb29yZFswXSxjb29yZFsxXSkpKXtcbiAgICAgICAgLy8gdmFyIGRhdGEgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKGUudGFyZ2V0KTtcbiAgICAgICAgY29uc29sZS5sb2coZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIixcImhpXCIpKTtcbiAgXG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICAgIGlmKHBsYXllcjEuYm9hcmQudHVybiA9PSBwbGF5ZXIyLmJvYXJkLnR1cm4gJiYgZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCA9PT0gJ3BsYXllcnR3b2dyaWQnICl7XG4gICAgLy8gcGxheWVyIDEgdHVyblxuICAgIHBsYXllcjEuYm9hcmQudHVybisrXG4gICAgbGV0IGNvb3JkID0gZS50YXJnZXQuaWQuc3BsaXQoJycpO1xuICAgIGlmKHBsYXllcjIuYm9hcmQuaGl0U2hpcChjb29yZFswXSxjb29yZFsxXSkgPT0gdW5kZWZpbmVkKXtcbiAgICAgIHBsYXllcjEuYm9hcmQudHVybi0tO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAgIHVwZGF0ZUJvYXJkKCk7XG4gICAgICBjaGVja1dpbm5lcigpO1xuICAgXG4gIH1lbHNle1xuICBjb25zb2xlLmxvZygnQUxMIFVOSVRTIE1VU1QgQVRUQUNLIEVORU1ZLicpXG4gIHJldHVybjtcbn1cbiAgICBwbGF5ZXIyLmJvYXJkLnR1cm4rKztcbiAgICBwbGF5ZXIxLnNob290Q29vcmRpbmF0ZXMoMCwwLHBsYXllcjIuaXNBSSk7XG4gICAgdXBkYXRlQm9hcmQoKTtcblxuXG4gICAgY2hlY2tUdXJuKCk7XG5cbiAgICBjaGVja1dpbm5lcigpO1xuXG5cbiAgICBcbn1cbmZ1bmN0aW9uIGNoZWNrVHVybigpe1xuICBjb25zdCB0dXJuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR1cm4nKTtcbiAgaWYocGxheWVyMS5ib2FyZC50dXJuID09IHBsYXllcjIuYm9hcmQudHVybikge1xuICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSAnUExBWUVSIE9ORSBUVVJOICc7XG4gIH1cbiAgaWYocGxheWVyMS5ib2FyZC50dXJuID4gcGxheWVyMi5ib2FyZC50dXJuKXtcbiAgICB0dXJuRGl2LnRleHRDb250ZW50ID0gJ1BMQVlFUiBUV08gVFVSTic7XG4gIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkKCl7XG4gIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuZm9yRWFjaCggZWxlbWVudD0+IHtcbiAgICAgIGxldCBudW0gPSAwO1xuICAgICAgbGV0IG51bWJlciA9IFwiXCIgKyBlbGVtZW50LngrZWxlbWVudC55O1xuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyb25lZ3JpZCcpO1xuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgaWYoZWxlbWVudC5oaXQgPT0gZmFsc2UpIFxuICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnRvZ2dsZSgnbWlzcycpO1xuICAgICAgZWxzZSBpZighZWxlbWVudC5zaGlwKVxuICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0udGV4dENvbnRlbnQgPScnO1xuICAgICAgZWxzZSBpZihlbGVtZW50LnNoaXAuaXNTdW5rKCkpXG4gICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QudG9nZ2xlKCdzdW5rJyk7XG4gICAgICBlbHNlIGlmKGVsZW1lbnQuaGl0ID09IHRydWUpIFxuICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnRvZ2dsZSgnaGl0Jyk7XG4gICAgICBlbHNlIGlmKGVsZW1lbnQuc2hpcCl7XG5cbiAgICAgIHBsYXllcjEuYm9hcmQuc2hpcHNBcnJheS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICBpZihzaGlwLmdldFNoaXAoKSA9PT0gZWxlbWVudC5zaGlwLmdldFNoaXAoKSl7XG4gICAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnRvZ2dsZShgc2hpcGApO1xuICAgICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5hZGQoYHNoaXAke251bX1gKTtcbiAgICAgICAgfVxuICAgICAgICBudW0rKztcbiAgICAgIH0pO1xuXG5cbiAgICAgIH1cbiAgICB9KVxuICB9KTtcblxuICBwbGF5ZXIyLmJvYXJkLmdldEJvYXJkKCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmZvckVhY2goIGVsZW1lbnQ9PiB7XG4gICAgICBsZXQgbnVtYmVyID0gXCJcIiArIGVsZW1lbnQueCtlbGVtZW50Lnk7XG4gICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJ0d29ncmlkJyk7XG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIFxuICAgICAgICBpZihlbGVtZW50LmhpdCA9PSBmYWxzZSkgXG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgZWxzZSBpZighZWxlbWVudC5zaGlwKVxuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS50ZXh0Q29udGVudCA9Jyc7XG4gICAgICAgIGVsc2UgaWYoZWxlbWVudC5zaGlwLmlzU3VuaygpKXtcbiAgICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKTtcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZWxlbWVudC5oaXQgPT0gdHJ1ZSkgXG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAvLyBlbHNlIGlmKGVsZW1lbnQuc2hpcClcbiAgICAgICAgLy8gYm94LmNoaWxkTm9kZXNbK251bWJlcl0udGV4dENvbnRlbnQgPSBcIlNcIjtcbiAgICB9KVxuICB9KTtcblxufVxuXG5cbmZ1bmN0aW9uIGNoZWNrV2lubmVyKCl7XG4gIGNvbnN0IHR1cm5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybicpO1xuXG4gIGlmKHBsYXllcjIuYm9hcmQuY2hlY2tBbGxTdW5rKCkpe1xuICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSBcIlBsYXllciAxIFdPTlwiO1xuICAgIHBsYXllcjEud29uKCk7XG59XG5pZihwbGF5ZXIxLmJvYXJkLmNoZWNrQWxsU3VuaygpKXtcbiAgdHVybkRpdi50ZXh0Q29udGVudCA9IFwiUGxheWVyIDIgV09OXCI7XG4gIHBsYXllcjIud29uKCk7XG59XG59XG5cbi8vIGZ1bmN0aW9uIGZpbmRNb3ZlQUkoKXtcbi8vICAgbGV0IHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKjkpO1xuLy8gICBsZXQgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqOSk7XG5cbi8vICAgICBsZXQgbW92ZVBvc3NpYmxlID0gcGxheWVyMS5ib2FyZC5oaXRTaGlwKHgseSk7XG4gICAgXG4vLyAgICAgIHdoaWxlKG1vdmVQb3NzaWJsZSA9PT0gdW5kZWZpbmVkKXtcbi8vICAgICAgICAgbGV0IHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKjkpO1xuLy8gICAgICAgICBsZXQgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqOSk7XG4gICAgICAgXG4vLyAgICAgICB9XG4vLyAgICAgICBpZihtb3ZlUG9zc2libGUgPT0gdHJ1ZSl7XG4gICAgICAgIFxuLy8gICAgICAgfVxuLy8gICAgICAgbW92ZVBvc3NpYmxlID0gcGxheWVyMS5ib2FyZC5oaXRTaGlwKHgseSk7XG4vLyAgICAgIC8vIHdoaWxlKG1vdmVQb3NzaWJsZSA9PT0gdW5kZWZpbmVkKXtcbi8vICAgICAvLyAgICAgbGV0IHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKjkpO1xuLy8gICAgIC8vICAgICBsZXQgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqOSk7XG4vLyAgICAgLy8gICAgIG1vdmVQb3NzaWJsZSA9IHBsYXllcjIuYm9hcmQuaGl0U2hpcCh4LHkpO1xuLy8gICAgIC8vICAgfVxuLy8gfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==