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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'RobotoReg';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: 'RobotoBold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n\nbody{\n  font-family: 'RobotoReg',Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n  width: 100vw;\n}\n\n.header{\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid grey;\n  height: 70px;\n  font-size: 25px;\n}\n\n\n/* making a board */\n#playeronegrid,#playertwogrid{\n  display: grid;\n  grid-template-rows: repeat(10,1fr);\n  grid-template-columns: repeat(10,1fr);\n  \n}\n\n.gameboard{\n  display: grid;\n  grid-template-columns: repeat(2,1fr);\n  gap: 100px;\n\n}\n\n.box{\n  height: 20px;\n  width: 20px;\n  border: 1px solid black;\n}\n\n\n.turn{\n  font-family: RobotoBold, Arial, Helvetica, sans-serif;\n  margin: 10px;\n  border: 1px solid grey;\n  padding: 10px;\n  color: white;\n  background-color: black;\n}\n\n\n.ship{\n  background-color: rgb(0, 217, 255);\n}\n\n.hit::before{\n  content: \"+\";\n  display: flex;\n  justify-content: center;\n  color:black;\n  background-color: red;\n}\n\n\n.miss::before{\n  content: \"--\";\n  display: flex;\n  justify-content: center;\n  vertical-align:middle;\n  align-items: center;\n  font-weight: 800;\n}\n\n.sunk,.hit{\n  content: 'X';\n  background-color: red;\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,4CAAmC;AACrC;;;AAGA;EACE,qDAAqD;EACrD,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;;AAGA,mBAAmB;AACnB;EACE,aAAa;EACb,kCAAkC;EAClC,qCAAqC;;AAEvC;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,UAAU;;AAEZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;AACzB;;;AAGA;EACE,qDAAqD;EACrD,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;;;AAGA;EACE,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,qBAAqB;AACvB;;;AAGA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,qBAAqB;;AAEvB","sourcesContent":["@font-face {\n  font-family: 'RobotoReg';\n  src: url('./asset/Roboto-Regular.ttf');\n}\n@font-face {\n  font-family: 'RobotoBold';\n  src: url('./asset/Roboto-Bold.ttf');\n}\n\n\nbody{\n  font-family: 'RobotoReg',Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n  width: 100vw;\n}\n\n.header{\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid grey;\n  height: 70px;\n  font-size: 25px;\n}\n\n\n/* making a board */\n#playeronegrid,#playertwogrid{\n  display: grid;\n  grid-template-rows: repeat(10,1fr);\n  grid-template-columns: repeat(10,1fr);\n  \n}\n\n.gameboard{\n  display: grid;\n  grid-template-columns: repeat(2,1fr);\n  gap: 100px;\n\n}\n\n.box{\n  height: 20px;\n  width: 20px;\n  border: 1px solid black;\n}\n\n\n.turn{\n  font-family: RobotoBold, Arial, Helvetica, sans-serif;\n  margin: 10px;\n  border: 1px solid grey;\n  padding: 10px;\n  color: white;\n  background-color: black;\n}\n\n\n.ship{\n  background-color: rgb(0, 217, 255);\n}\n\n.hit::before{\n  content: \"+\";\n  display: flex;\n  justify-content: center;\n  color:black;\n  background-color: red;\n}\n\n\n.miss::before{\n  content: \"--\";\n  display: flex;\n  justify-content: center;\n  vertical-align:middle;\n  align-items: center;\n  font-weight: 800;\n}\n\n.sunk,.hit{\n  content: 'X';\n  background-color: red;\n\n}"],"sourceRoot":""}]);
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
        console.log(num1,num2)
        console.log(board[num1][num2])
          return board[num1][num2];
      }

      function fillBoardRandom(battleship){
        let length = battleship.getShip().length;

          let x = Math.round(Math.random() *9);
          let y = Math.round(Math.random() *9);
          let isHorizontal = Math.round(Math.random());
          while(!checkNoShip(isHorizontal,length,x,y)){
            x = Math.round(Math.random() *9);
            y = Math.round(Math.random() *9);
          }

          if(isHorizontal){
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
          if(board[num1][num2].hit !== null) {
            return undefined;
          }


          if(board[num1][num2].ship){
            board[num1][num2].ship.hit();
            board[num1][num2].ship.isSunk();
            board[num1][num2].hit = true;
            // see if all ships are sunk
            prettyPrint();
           return true;
          }else {
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
        else if(coord.ship.isSunk())  
        return true;   //lol redudnat?
        else
        return false;
    }

     return {turn,getBoard,location,addShip,hitShip,prettyPrint,checkAllSunk,checkIsShip,fillBoardRandom}; 

      
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
            let x = Math.round(Math.random() *9);
            let y = Math.round(Math.random() *9);

        // if(shipCoordinates.length >= 1){
        //   if(board.checkIsShip(board.location(shipCoordinates[0],shipCoordinates[1])))
        //     shipCoordinates.splice(0,shipCoordinates.length);
        //     else{
        //       x = shipCoordinates[0];
        //       y =  shipCoordinates[1];
        //       possibleMoves.push(x+1,y);
        //       possibleMoves.push(x-1,y);
        //       possibleMoves.push(x,y-1);
        //       possibleMoves.push(x,y+1);
        //       let coord = possibleMoves.splice(0,1);
        //       while(possibleMoves.length !=0 && board.hitShip(coord[0][0],coord[0][1]) == undefined ){
        //         coord = possibleMoves.splice(0,1);
        //       };


        //     }
        // }
          let movePossible = board.hitShip(x,y);
        
          while(movePossible === undefined){
              let x = Math.round(Math.random() *9);
              let y = Math.round(Math.random() *9);
              movePossible = board.hitShip(x,y);
            }
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


const Ship = (length = 2, sunk = false) => {
 const ship = {
    length: length,
    hits: 0,
    sunk: sunk,
  }


  const hit = () =>{
    ship.hits += 1;
    return ship.hits;
  }

  const getShip = () => {
    return ship;
  }
  
  const isSunk = () =>{
    if(ship.hits == ship.length) ship.sunk = true;
    return ship.sunk;
  }

  return {Ship,getShip,hit,isSunk};
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

const player1 = player('Player1',!isAi,1);
const player2 = player('AI',isAi,2);

let i = 0; 
let winner = false;
// make a board on website

const player1Board = document.querySelector('#playeronegrid');
const player2Board = document.querySelector('#playertwogrid');
checkTurn();

makeAGrid(player1Board);
makeAGrid(player2Board);

updateBoard();


// playGame();  //will need to change for when there is a user interface





function makeAGrid(parentDiv){

  for(let i = 0;i< 10;i++){
    for(let o =0;o <10;o++){
        const boxGrid = document.createElement('div');
        boxGrid.classList.add('box');
        boxGrid.setAttribute('id',`${i}${o}`)
        boxGrid.addEventListener('click',evalulatePlayerClick);
        parentDiv.appendChild(boxGrid);
    }
  }
}

function evalulatePlayerClick(e){
  if(player1.isWinner() ||  player2.isWinner()){
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
      else if(element.ship)
      box.childNodes[+number].classList.toggle('ship');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EscUNBQXFDLEVBQUUsRUFBRSxFQUFFO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXQvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90b1JlZyc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9Cb2xkJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuXFxuYm9keXtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVnJyxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXJ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcblxcbi8qIG1ha2luZyBhIGJvYXJkICovXFxuI3BsYXllcm9uZWdyaWQsI3BsYXllcnR3b2dyaWR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICBcXG59XFxuXFxuLmdhbWVib2FyZHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICBnYXA6IDEwMHB4O1xcblxcbn1cXG5cXG4uYm94e1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLnR1cm57XFxuICBmb250LWZhbWlseTogUm9ib3RvQm9sZCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcblxcbi5zaGlwe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIxNywgMjU1KTtcXG59XFxuXFxuLmhpdDo6YmVmb3Jle1xcbiAgY29udGVudDogXFxcIitcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6YmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcblxcbi5taXNzOjpiZWZvcmV7XFxuICBjb250ZW50OiBcXFwiLS1cXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5zdW5rLC5oaXR7XFxuICBjb250ZW50OiAnWCc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsNENBQW1DO0FBQ3JDOzs7QUFHQTtFQUNFLHFEQUFxRDtFQUNyRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7QUFDakI7OztBQUdBLG1CQUFtQjtBQUNuQjtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMscUNBQXFDOztBQUV2Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsVUFBVTs7QUFFWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOzs7QUFHQTtFQUNFLHFEQUFxRDtFQUNyRCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOzs7QUFHQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCOztBQUV2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVnJztcXG4gIHNyYzogdXJsKCcuL2Fzc2V0L1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvQm9sZCc7XFxuICBzcmM6IHVybCgnLi9hc3NldC9Sb2JvdG8tQm9sZC50dGYnKTtcXG59XFxuXFxuXFxuYm9keXtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVnJyxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXJ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcblxcbi8qIG1ha2luZyBhIGJvYXJkICovXFxuI3BsYXllcm9uZWdyaWQsI3BsYXllcnR3b2dyaWR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICBcXG59XFxuXFxuLmdhbWVib2FyZHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICBnYXA6IDEwMHB4O1xcblxcbn1cXG5cXG4uYm94e1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLnR1cm57XFxuICBmb250LWZhbWlseTogUm9ib3RvQm9sZCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcblxcbi5zaGlwe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIxNywgMjU1KTtcXG59XFxuXFxuLmhpdDo6YmVmb3Jle1xcbiAgY29udGVudDogXFxcIitcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6YmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcblxcbi5taXNzOjpiZWZvcmV7XFxuICBjb250ZW50OiBcXFwiLS1cXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5zdW5rLC5oaXR7XFxuICBjb250ZW50OiAnWCc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmNvbnN0IHNoaXAgPSByZXF1aXJlKCcuL3NoaXAnKTtcbi8vIGNvbnN0IHNoaXAgPSB7IGxlbmd0aCwgc3Vuayx9XG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgbGV0IGJvYXJkID0gW1tdXVxuICAgIGNyZWF0ZUJvYXJkKCk7XG4gICAgbGV0IHR1cm4gPSAwO1xuXG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmQoKXtcbiAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG4gICAgICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8MTA7aSArKyl7XG4gICAgICAgICAgYm9hcmQucHVzaChbXSk7XG4gICAgICAgICAgZm9yKGxldCBvID0gMDsgbyA8MTA7IG8rKyl7XG4gICAgICAgICAgICBib2FyZFtpXS5wdXNoKGNyZWF0ZUNvb3JkaW5hdGVPYmplY3QoaSxvKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNvb3JkaW5hdGVPYmplY3QoeCx5KXtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGUgPVxuICAgICAgICB7XG4gICAgICAgICAgeDogeCxcbiAgICAgICAgIHk6IHksXG4gICAgICAgICBzaGlwOiB1bmRlZmluZWQsXG4gICAgICAgICBoaXQ6IG51bGwsXG4gICAgICAgfVxuICAgICAgIHJldHVybiBjb29yZGluYXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsb2NhdGlvbiA9IChudW0xLG51bTIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobnVtMSxudW0yKVxuICAgICAgICBjb25zb2xlLmxvZyhib2FyZFtudW0xXVtudW0yXSlcbiAgICAgICAgICByZXR1cm4gYm9hcmRbbnVtMV1bbnVtMl07XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGZpbGxCb2FyZFJhbmRvbShiYXR0bGVzaGlwKXtcbiAgICAgICAgbGV0IGxlbmd0aCA9IGJhdHRsZXNoaXAuZ2V0U2hpcCgpLmxlbmd0aDtcblxuICAgICAgICAgIGxldCB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcbiAgICAgICAgICBsZXQgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqOSk7XG4gICAgICAgICAgbGV0IGlzSG9yaXpvbnRhbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgd2hpbGUoIWNoZWNrTm9TaGlwKGlzSG9yaXpvbnRhbCxsZW5ndGgseCx5KSl7XG4gICAgICAgICAgICB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcbiAgICAgICAgICAgIHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKjkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKGlzSG9yaXpvbnRhbCl7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwIDtpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICBib2FyZFt4K2ldW3ldLnNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgZm9yKGxldCBpID0gMCA7aSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGJvYXJkW3hdW3kraV0uc2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrTm9TaGlwKGlzSG9yaXpvbnRhbCxsZW5ndGgseCx5KXtcbiAgICAgICAgICBpZihpc0hvcml6b250YWwpe1xuICAgICAgICAgICAgaWYoeDwgMCB8fCAoeCtsZW5ndGgpID4gOSB8fCB5IDwgMCB8fCB5PiA5KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMCA7aSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgaWYoYm9hcmRbeCtpXVt5XS5zaGlwICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZih4PCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8ICh5K2xlbmd0aCkgPiA5KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMCA7aSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgaWYoYm9hcmRbeF1beStpXS5zaGlwICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSAgICBcbiAgICAgXG4gICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgZnVuY3Rpb24gYWRkU2hpcChudW0xLG51bTIsc2l6ZSA9IDIsIGlzSG9yaXpvbnRhbCA9IHRydWUpe1xuICAgICAgICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcChzaXplKTtcblxuICAgICAgICBpZihpc0hvcml6b250YWwpe1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMCA7aSA8IHNpemU7IGkgKyspe1xuICAgICAgICAgICAgICBib2FyZFtudW0xXVtudW0yK2ldLnNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwIDtpIDwgc2l6ZTsgaSArKyl7XG4gICAgICAgICAgICBib2FyZFtudW0xK2ldW251bTFdLnNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcHJldHR5UHJpbnQoKTtcbiAgICAgIH1cblxuXG4gICAgIFxuICAgICAgZnVuY3Rpb24gcHJldHR5UHJpbnQoKXtcbiAgICAgICAgbGV0IHN0cmluZyA9ICcnO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwxMDtpICsrKXtcbiAgICAgICAgICBzdHJpbmcgKz0gJ1xcbidcbiAgICAgICAgICBmb3IobGV0IG8gPSAwOyBvIDwxMDsgbysrKXtcbiAgICAgICAgICAgICBpZihib2FyZFtpXVtvXS5oaXQgPT0gZmFsc2UpIFxuICAgICAgICAgICAgc3RyaW5nICs9ICdbLV0nO1xuICAgICAgICAgICAgZWxzZSBpZighYm9hcmRbaV1bb10uc2hpcClcbiAgICAgICAgICAgIHN0cmluZyArPSdbIF0nO1xuICAgICAgICAgICAgZWxzZSBpZihib2FyZFtpXVtvXS5zaGlwLmlzU3VuaygpKVxuICAgICAgICAgICAgc3RyaW5nICs9ICdbWF0nO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbHNlIGlmKGJvYXJkW2ldW29dLnNoaXApXG4gICAgICAgICAgICAgIHN0cmluZyArPSdbU10nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgfVxuXG5cbiAgICAgIGZ1bmN0aW9uIGhpdFNoaXAobnVtMSxudW0yKXtcbiAgICAgICAgICBpZihib2FyZFtudW0xXVtudW0yXS5oaXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBpZihib2FyZFtudW0xXVtudW0yXS5zaGlwKXtcbiAgICAgICAgICAgIGJvYXJkW251bTFdW251bTJdLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICBib2FyZFtudW0xXVtudW0yXS5zaGlwLmlzU3VuaygpO1xuICAgICAgICAgICAgYm9hcmRbbnVtMV1bbnVtMl0uaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHNlZSBpZiBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgICAgICAgICAgIHByZXR0eVByaW50KCk7XG4gICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGJvYXJkW251bTFdW251bTJdLmhpdCA9IGZhbHNlO1xuICAgICAgICAgICAgcHJldHR5UHJpbnQoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgXG4gICAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGZ1bmN0aW9uIGNoZWNrQWxsU3Vuaygpe1xuICAgICAgICBcbiAgICAgICAgbGV0IGFsbFN1bmsgPSBib2FyZC5ldmVyeShjb29yZCA9PiBjb29yZC5ldmVyeSggZWxlbWVudCA9PiBjaGVja1NoaXAoZWxlbWVudCkpKTtcbi8vICYmIGNvb3JkLnNoaXAuc3VuayA9PSBmYWxzZVxuICAgICAgIGlmKGFsbFN1bmspe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY2hlY2tTaGlwKGNvb3JkKXtcbiAgICAgICAgICBpZihjb29yZC5zaGlwID09IHVuZGVmaW5lZCkgXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgZWxzZSBpZihjb29yZC5zaGlwLmdldFNoaXAoKS5zdW5rKSAgXG4gICAgICAgICAgcmV0dXJuIHRydWU7ICBcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjaGVja0lzU2hpcChjb29yZCl7XG4gICAgICAgIGlmKGNvb3JkLnNoaXAgPT0gdW5kZWZpbmVkKSBcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBlbHNlIGlmKGNvb3JkLnNoaXAuaXNTdW5rKCkpICBcbiAgICAgICAgcmV0dXJuIHRydWU7ICAgLy9sb2wgcmVkdWRuYXQ/XG4gICAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgICByZXR1cm4ge3R1cm4sZ2V0Qm9hcmQsbG9jYXRpb24sYWRkU2hpcCxoaXRTaGlwLHByZXR0eVByaW50LGNoZWNrQWxsU3VuayxjaGVja0lzU2hpcCxmaWxsQm9hcmRSYW5kb219OyBcblxuICAgICAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZWJvYXJkOyIsImNvbnN0IGdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5jb25zdCBzaGlwID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5cblxuXG5jb25zdCBwbGF5ZXIgPSAobmFtZSxpc0FJbnQsbnVtYmVyID0gMSkgPT4ge1xuICBjb25zdCBpc0FJID0gaXNBSW50O1xuICBjb25zdCBwbGF5ZXJOYW1lID0gbmFtZTtcbiAgY29uc3QgcGxheWVyTnVtYmVyID0gbnVtYmVyO1xuICBjb25zdCBib2FyZCA9IGdhbWVib2FyZCgpOyBcbmNvbnN0IHNoaXBzID0gW107XG5jb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbmNvbnN0IHBvc3NpYmxlTW92ZXMgPSBbXTtcblxubGV0IHdpbm5lciA9IGZhbHNlOyBcbmZvcihsZXQgaSA9IDA7IGkgPDc7IGkrKyl7XG4gIGxldCBudW07XG4gIGlmKGkgPD0gMikgIG51bSA9IDI7XG4gIGVsc2UgaWYoaSA8PSA0KSAgbnVtID0gMztcbiAgZWxzZSBpZihpIDw9IDUpICBudW0gPSA0O1xuICBlbHNlIGlmKGkgPCA3KSBudW0gPSA1O1xuICBjb25zdCBzaGlwMSA9IHNoaXAobnVtKTtcbiAgc2hpcHMucHVzaChzaGlwMSk7XG59XG5cbmZpbGxBbGxTaGlwcygpO1xuXG4gICAgZnVuY3Rpb24gZ2V0QWxsU2hpcHMoKXtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBmaWxsQWxsU2hpcHMoKXtcbiAgICAgIHNoaXBzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGJvYXJkLmZpbGxCb2FyZFJhbmRvbShlbGVtZW50KTtcblxuICAgICAgfSk7XG4gICAgICBib2FyZC5wcmV0dHlQcmludCgpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzaG9vdENvb3JkaW5hdGVzKHggPTAgLHkgPSAwLGlzUm9ib3Qpe1xuICAgICAgaWYoaXNSb2JvdCl7XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqOSk7XG4gICAgICAgICAgICBsZXQgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqOSk7XG5cbiAgICAgICAgLy8gaWYoc2hpcENvb3JkaW5hdGVzLmxlbmd0aCA+PSAxKXtcbiAgICAgICAgLy8gICBpZihib2FyZC5jaGVja0lzU2hpcChib2FyZC5sb2NhdGlvbihzaGlwQ29vcmRpbmF0ZXNbMF0sc2hpcENvb3JkaW5hdGVzWzFdKSkpXG4gICAgICAgIC8vICAgICBzaGlwQ29vcmRpbmF0ZXMuc3BsaWNlKDAsc2hpcENvb3JkaW5hdGVzLmxlbmd0aCk7XG4gICAgICAgIC8vICAgICBlbHNle1xuICAgICAgICAvLyAgICAgICB4ID0gc2hpcENvb3JkaW5hdGVzWzBdO1xuICAgICAgICAvLyAgICAgICB5ID0gIHNoaXBDb29yZGluYXRlc1sxXTtcbiAgICAgICAgLy8gICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHgrMSx5KTtcbiAgICAgICAgLy8gICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHgtMSx5KTtcbiAgICAgICAgLy8gICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHgseS0xKTtcbiAgICAgICAgLy8gICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHgseSsxKTtcbiAgICAgICAgLy8gICAgICAgbGV0IGNvb3JkID0gcG9zc2libGVNb3Zlcy5zcGxpY2UoMCwxKTtcbiAgICAgICAgLy8gICAgICAgd2hpbGUocG9zc2libGVNb3Zlcy5sZW5ndGggIT0wICYmIGJvYXJkLmhpdFNoaXAoY29vcmRbMF1bMF0sY29vcmRbMF1bMV0pID09IHVuZGVmaW5lZCApe1xuICAgICAgICAvLyAgICAgICAgIGNvb3JkID0gcG9zc2libGVNb3Zlcy5zcGxpY2UoMCwxKTtcbiAgICAgICAgLy8gICAgICAgfTtcblxuXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgICBsZXQgbW92ZVBvc3NpYmxlID0gYm9hcmQuaGl0U2hpcCh4LHkpO1xuICAgICAgICBcbiAgICAgICAgICB3aGlsZShtb3ZlUG9zc2libGUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgIGxldCB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcbiAgICAgICAgICAgICAgbGV0IHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKjkpO1xuICAgICAgICAgICAgICBtb3ZlUG9zc2libGUgPSBib2FyZC5oaXRTaGlwKHgseSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgaWYobW92ZVBvc3NpYmxlID09IHRydWUpe1xuICAgICAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goeCk7XG4gICAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaCh5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coc2hpcENvb3JkaW5hdGVzKTtcblxuICAgICAgXG4gICAgICB9ZWxzZXtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdodW1hbicpO1xuICAgICAgICBib2FyZC5oaXRTaGlwKHgseSlcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNXaW5uZXIoKXtcbiAgICAgIHJldHVybiB3aW5uZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdvbigpe1xuICAgICAgIHdpbm5lciA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE5hbWUoKXtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0QWxsU2hpcHMsYm9hcmQsc2hvb3RDb29yZGluYXRlcywgcGxheWVyTnVtYmVyLGdldE5hbWUsaXNBSSxpc1dpbm5lcix3b259XG4gIH1cblxuXG4gIG1vZHVsZS5leHBvcnRzID0gcGxheWVyOyIsIlxuY29uc3QgU2hpcCA9IChsZW5ndGggPSAyLCBzdW5rID0gZmFsc2UpID0+IHtcbiBjb25zdCBzaGlwID0ge1xuICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgIGhpdHM6IDAsXG4gICAgc3Vuazogc3VuayxcbiAgfVxuXG5cbiAgY29uc3QgaGl0ID0gKCkgPT57XG4gICAgc2hpcC5oaXRzICs9IDE7XG4gICAgcmV0dXJuIHNoaXAuaGl0cztcbiAgfVxuXG4gIGNvbnN0IGdldFNoaXAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXA7XG4gIH1cbiAgXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+e1xuICAgIGlmKHNoaXAuaGl0cyA9PSBzaGlwLmxlbmd0aCkgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICByZXR1cm4gc2hpcC5zdW5rO1xuICB9XG5cbiAgcmV0dXJuIHtTaGlwLGdldFNoaXAsaGl0LGlzU3Vua307XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJjb25zdCBwbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcblxuXG5cbmxldCBpc0FpID0gdHJ1ZTtcblxuY29uc3QgcGxheWVyMSA9IHBsYXllcignUGxheWVyMScsIWlzQWksMSk7XG5jb25zdCBwbGF5ZXIyID0gcGxheWVyKCdBSScsaXNBaSwyKTtcblxubGV0IGkgPSAwOyBcbmxldCB3aW5uZXIgPSBmYWxzZTtcbi8vIG1ha2UgYSBib2FyZCBvbiB3ZWJzaXRlXG5cbmNvbnN0IHBsYXllcjFCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJvbmVncmlkJyk7XG5jb25zdCBwbGF5ZXIyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVydHdvZ3JpZCcpO1xuY2hlY2tUdXJuKCk7XG5cbm1ha2VBR3JpZChwbGF5ZXIxQm9hcmQpO1xubWFrZUFHcmlkKHBsYXllcjJCb2FyZCk7XG5cbnVwZGF0ZUJvYXJkKCk7XG5cblxuLy8gcGxheUdhbWUoKTsgIC8vd2lsbCBuZWVkIHRvIGNoYW5nZSBmb3Igd2hlbiB0aGVyZSBpcyBhIHVzZXIgaW50ZXJmYWNlXG5cblxuXG5cblxuZnVuY3Rpb24gbWFrZUFHcmlkKHBhcmVudERpdil7XG5cbiAgZm9yKGxldCBpID0gMDtpPCAxMDtpKyspe1xuICAgIGZvcihsZXQgbyA9MDtvIDwxMDtvKyspe1xuICAgICAgICBjb25zdCBib3hHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJveEdyaWQuY2xhc3NMaXN0LmFkZCgnYm94Jyk7XG4gICAgICAgIGJveEdyaWQuc2V0QXR0cmlidXRlKCdpZCcsYCR7aX0ke299YClcbiAgICAgICAgYm94R3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZXZhbHVsYXRlUGxheWVyQ2xpY2spO1xuICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoYm94R3JpZCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGV2YWx1bGF0ZVBsYXllckNsaWNrKGUpe1xuICBpZihwbGF5ZXIxLmlzV2lubmVyKCkgfHwgIHBsYXllcjIuaXNXaW5uZXIoKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICAgIGlmKHBsYXllcjEuYm9hcmQudHVybiA9PSBwbGF5ZXIyLmJvYXJkLnR1cm4gJiYgZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCA9PT0gJ3BsYXllcnR3b2dyaWQnICl7XG4gICAgLy8gcGxheWVyIDEgdHVyblxuICAgIHBsYXllcjEuYm9hcmQudHVybisrXG4gICAgbGV0IGNvb3JkID0gZS50YXJnZXQuaWQuc3BsaXQoJycpO1xuICAgIGlmKHBsYXllcjIuYm9hcmQuaGl0U2hpcChjb29yZFswXSxjb29yZFsxXSkgPT0gdW5kZWZpbmVkKXtcbiAgICAgIHBsYXllcjEuYm9hcmQudHVybi0tO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAgIHVwZGF0ZUJvYXJkKCk7XG4gICAgICBjaGVja1dpbm5lcigpO1xuICAgXG4gIH1lbHNle1xuICBjb25zb2xlLmxvZygnQUxMIFVOSVRTIE1VU1QgQVRUQUNLIEVORU1ZLicpXG4gIHJldHVybjtcbn1cbiAgICBwbGF5ZXIyLmJvYXJkLnR1cm4rKztcbiAgICBwbGF5ZXIxLnNob290Q29vcmRpbmF0ZXMoMCwwLHBsYXllcjIuaXNBSSk7XG4gICAgdXBkYXRlQm9hcmQoKTtcblxuXG4gICAgY2hlY2tUdXJuKCk7XG5cbiAgICBjaGVja1dpbm5lcigpO1xuXG5cbiAgICBcbn1cbmZ1bmN0aW9uIGNoZWNrVHVybigpe1xuICBjb25zdCB0dXJuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR1cm4nKTtcbiAgaWYocGxheWVyMS5ib2FyZC50dXJuID09IHBsYXllcjIuYm9hcmQudHVybikge1xuICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSAnUExBWUVSIE9ORSBUVVJOICc7XG4gIH1cbiAgaWYocGxheWVyMS5ib2FyZC50dXJuID4gcGxheWVyMi5ib2FyZC50dXJuKXtcbiAgICB0dXJuRGl2LnRleHRDb250ZW50ID0gJ1BMQVlFUiBUV08gVFVSTic7XG4gIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkKCl7XG4gIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuZm9yRWFjaCggZWxlbWVudD0+IHtcbiAgICAgIGxldCBudW1iZXIgPSBcIlwiICsgZWxlbWVudC54K2VsZW1lbnQueTtcbiAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcm9uZWdyaWQnKTtcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0udGV4dENvbnRlbnQgPSAnJztcbiAgICAgIGlmKGVsZW1lbnQuaGl0ID09IGZhbHNlKSBcbiAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC50b2dnbGUoJ21pc3MnKTtcbiAgICAgIGVsc2UgaWYoIWVsZW1lbnQuc2hpcClcbiAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnRleHRDb250ZW50ID0nJztcbiAgICAgIGVsc2UgaWYoZWxlbWVudC5zaGlwLmlzU3VuaygpKVxuICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnRvZ2dsZSgnc3VuaycpO1xuICAgICAgZWxzZSBpZihlbGVtZW50LmhpdCA9PSB0cnVlKSBcbiAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC50b2dnbGUoJ2hpdCcpO1xuICAgICAgZWxzZSBpZihlbGVtZW50LnNoaXApXG4gICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QudG9nZ2xlKCdzaGlwJyk7XG4gICAgfSlcbiAgfSk7XG5cbiAgcGxheWVyMi5ib2FyZC5nZXRCb2FyZCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5mb3JFYWNoKCBlbGVtZW50PT4ge1xuICAgICAgbGV0IG51bWJlciA9IFwiXCIgKyBlbGVtZW50LngrZWxlbWVudC55O1xuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVydHdvZ3JpZCcpO1xuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBcbiAgICAgICAgaWYoZWxlbWVudC5oaXQgPT0gZmFsc2UpIFxuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIGVsc2UgaWYoIWVsZW1lbnQuc2hpcClcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0udGV4dENvbnRlbnQgPScnO1xuICAgICAgICBlbHNlIGlmKGVsZW1lbnQuc2hpcC5pc1N1bmsoKSl7XG4gICAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnJlbW92ZSgnaGl0Jyk7XG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGVsZW1lbnQuaGl0ID09IHRydWUpIFxuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgLy8gZWxzZSBpZihlbGVtZW50LnNoaXApXG4gICAgICAgIC8vIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnRleHRDb250ZW50ID0gXCJTXCI7XG4gICAgfSlcbiAgfSk7XG5cbn1cblxuXG5mdW5jdGlvbiBjaGVja1dpbm5lcigpe1xuICBjb25zdCB0dXJuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR1cm4nKTtcblxuICBpZihwbGF5ZXIyLmJvYXJkLmNoZWNrQWxsU3VuaygpKXtcbiAgICB0dXJuRGl2LnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMSBXT05cIjtcbiAgICBwbGF5ZXIxLndvbigpO1xufVxuaWYocGxheWVyMS5ib2FyZC5jaGVja0FsbFN1bmsoKSl7XG4gIHR1cm5EaXYudGV4dENvbnRlbnQgPSBcIlBsYXllciAyIFdPTlwiO1xuICBwbGF5ZXIyLndvbigpO1xufVxufVxuXG4vLyBmdW5jdGlvbiBmaW5kTW92ZUFJKCl7XG4vLyAgIGxldCB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcbi8vICAgbGV0IHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKjkpO1xuXG4vLyAgICAgbGV0IG1vdmVQb3NzaWJsZSA9IHBsYXllcjEuYm9hcmQuaGl0U2hpcCh4LHkpO1xuICAgIFxuLy8gICAgICB3aGlsZShtb3ZlUG9zc2libGUgPT09IHVuZGVmaW5lZCl7XG4vLyAgICAgICAgIGxldCB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcbi8vICAgICAgICAgbGV0IHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKjkpO1xuICAgICAgIFxuLy8gICAgICAgfVxuLy8gICAgICAgaWYobW92ZVBvc3NpYmxlID09IHRydWUpe1xuICAgICAgICBcbi8vICAgICAgIH1cbi8vICAgICAgIG1vdmVQb3NzaWJsZSA9IHBsYXllcjEuYm9hcmQuaGl0U2hpcCh4LHkpO1xuLy8gICAgICAvLyB3aGlsZShtb3ZlUG9zc2libGUgPT09IHVuZGVmaW5lZCl7XG4vLyAgICAgLy8gICAgIGxldCB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcbi8vICAgICAvLyAgICAgbGV0IHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKjkpO1xuLy8gICAgIC8vICAgICBtb3ZlUG9zc2libGUgPSBwbGF5ZXIyLmJvYXJkLmhpdFNoaXAoeCx5KTtcbi8vICAgICAvLyAgIH1cbi8vIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=