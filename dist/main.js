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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'RobotoReg';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: 'RobotoBold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n\nbody{\n  font-family: 'RobotoReg',Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n  width: 100vw;\n}\n\n.header{\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid grey;\n  height: 70px;\n  font-size: 25px;\n}\n\n\n/* making a board */\n#playeronegrid,#playertwogrid{\n  display: grid;\n  grid-template-rows: repeat(10,1fr);\n  grid-template-columns: repeat(10,1fr);\n  \n}\n\n.gameboard{\n  display: grid;\n  grid-template-columns: repeat(2,1fr);\n  gap: 100px;\n}\n\n.box{\n  height: 30px;\n  width: 30px;\n  border: 1px solid black;\n}\n\n\n.turn{\n  font-family: RobotoBold, Arial, Helvetica, sans-serif;\n  margin: 10px;\n  border: 1px solid grey;\n  padding: 10px;\n  color: white;\n  background-color: black;\n}\n\n\n.ship{\n  background-color: rgb(0, 217, 255);\n}\n\n.hit::before{\n  content: \"+\";\n  display: flex;\n  justify-content: center;\n  color:black;\n  background-color: red;\n}\n\n\n.miss::before{\n  content: \"--\";\n  display: flex;\n  justify-content: center;\n  vertical-align:middle;\n  align-items: center;\n  font-weight: 800;\n}\n\n.sunk,.hit{\n  content: 'X';\n  background-color: red;\n\n}\n\n/* BUTTONS */\nbutton{\n  background-color: white;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 5px;\n  width: 100px;\n}\n.restart{\n  background-color: white;\n\n  margin: 3px;\n\n  position: absolute;\n  left: 0;\n}\n\n.restart:active{\n  position: absolute;\ntop: 20px;\n}\n\nbutton:active{\n  position: relative;\n  top: 2px\n}\n.hidden{\n    display: none;\n}\n\n.start{\n  width: 150px;\n  background-color: rgb(202, 242, 255);\n  margin: 10px;\n}\n\n\n@media only screen and (max-width: 600px) {\n  .gameboard{\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .box{\n    height: 25px;\n    width: 25px;\n    border: 1px solid black;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,4CAAmC;AACrC;;;AAGA;EACE,qDAAqD;EACrD,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;;AAGA,mBAAmB;AACnB;EACE,aAAa;EACb,kCAAkC;EAClC,qCAAqC;;AAEvC;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;AACzB;;;AAGA;EACE,qDAAqD;EACrD,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;;;AAGA;EACE,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,qBAAqB;AACvB;;;AAGA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,qBAAqB;;AAEvB;;AAEA,YAAY;AACZ;EACE,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,YAAY;AACd;AACA;EACE,uBAAuB;;EAEvB,WAAW;;EAEX,kBAAkB;EAClB,OAAO;AACT;;AAEA;EACE,kBAAkB;AACpB,SAAS;AACT;;AAEA;EACE,kBAAkB;EAClB;AACF;AACA;IACI,aAAa;AACjB;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,YAAY;AACd;;;AAGA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,uBAAuB;EACzB;AACF","sourcesContent":["@font-face {\n  font-family: 'RobotoReg';\n  src: url('./asset/Roboto-Regular.ttf');\n}\n@font-face {\n  font-family: 'RobotoBold';\n  src: url('./asset/Roboto-Bold.ttf');\n}\n\n\nbody{\n  font-family: 'RobotoReg',Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n  width: 100vw;\n}\n\n.header{\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid grey;\n  height: 70px;\n  font-size: 25px;\n}\n\n\n/* making a board */\n#playeronegrid,#playertwogrid{\n  display: grid;\n  grid-template-rows: repeat(10,1fr);\n  grid-template-columns: repeat(10,1fr);\n  \n}\n\n.gameboard{\n  display: grid;\n  grid-template-columns: repeat(2,1fr);\n  gap: 100px;\n}\n\n.box{\n  height: 30px;\n  width: 30px;\n  border: 1px solid black;\n}\n\n\n.turn{\n  font-family: RobotoBold, Arial, Helvetica, sans-serif;\n  margin: 10px;\n  border: 1px solid grey;\n  padding: 10px;\n  color: white;\n  background-color: black;\n}\n\n\n.ship{\n  background-color: rgb(0, 217, 255);\n}\n\n.hit::before{\n  content: \"+\";\n  display: flex;\n  justify-content: center;\n  color:black;\n  background-color: red;\n}\n\n\n.miss::before{\n  content: \"--\";\n  display: flex;\n  justify-content: center;\n  vertical-align:middle;\n  align-items: center;\n  font-weight: 800;\n}\n\n.sunk,.hit{\n  content: 'X';\n  background-color: red;\n\n}\n\n/* BUTTONS */\nbutton{\n  background-color: white;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 5px;\n  width: 100px;\n}\n.restart{\n  background-color: white;\n\n  margin: 3px;\n\n  position: absolute;\n  left: 0;\n}\n\n.restart:active{\n  position: absolute;\ntop: 20px;\n}\n\nbutton:active{\n  position: relative;\n  top: 2px\n}\n.hidden{\n    display: none;\n}\n\n.start{\n  width: 150px;\n  background-color: rgb(202, 242, 255);\n  margin: 10px;\n}\n\n\n@media only screen and (max-width: 600px) {\n  .gameboard{\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .box{\n    height: 25px;\n    width: 25px;\n    border: 1px solid black;\n  }\n}"],"sourceRoot":""}]);
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
          if(movePossible == true){
            shipCoordinates.push(x);
            shipCoordinates.push(y);
          }

      
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
  ship.horizontal = isHorizontal == 1;

  const hit = () =>{
    ship.hits += 1;
    return ship.hits;
  }
  function isShipHorizontal(){
    return ship.horizontal;
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

const player1Board = document.querySelector('#playeronegrid');
const player2Board = document.querySelector('#playertwogrid');
playGame();



// make a board on website
function playGame(){
  startGameDiv.classList.remove('hidden');
   player1 = player('Player1',!isAi,1);
 player2 = player('AI',isAi,2);
  console.log("new game")


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
    const box = document.querySelector('#playertwogrid');

    element.forEach( element=> {
      let number = "" + element.x+element.y;
        box.childNodes[+number].addEventListener('click',evalulatePlayerClick);
        box.childNodes[+number].removeEventListener('dragstart',dragShip);
        box.childNodes[+number].removeEventListener('dragover',draggingfunction);
        box.childNodes[+number].removeEventListener('drop',dragShipEnd);
    })
  });

  player1.board.getBoard().forEach(element => {
    const box = document.querySelector('#playeronegrid');

    element.forEach( element=> {
      let number = "" + element.x+element.y;
        box.childNodes[+number].removeEventListener('dragstart',dragShip);
        box.childNodes[+number].removeEventListener('dragover',draggingfunction);
        box.childNodes[+number].removeEventListener('drop',dragShipEnd);
    })
  });

}

function dragShip(e){
  console.log(e.target.classList[2])
  // console.log(e.target.classList[2]);
  let shipName = e.target.classList[2];
  const ship = document.getElementsByClassName(shipName);
  // let shipCoordinate = [];
  // console.log(ship);
  e.dataTransfer.setData("text", e.target.id);
  e.dataTransfer.dropEffect = "copy";
  // for(let i = 0; i < ship.length;i++){
  //   shipCoordinate.push(ship[i].id);

  // }
}

function dragShipEnd(e){
  e.preventDefault();
const sourceData = e.dataTransfer.getData("text");
let sourceShipCoord = document.getElementById(`${sourceData}`);
let sourceShipNameArray = document.querySelectorAll(`.${sourceShipCoord.classList[2]}`);
const shipCoord = [];

sourceShipNameArray.forEach(element =>{
  let xy = element.id.split('');
  console.log(element);
  shipCoord.push(+xy[0]);
  shipCoord.push(+xy[1]);
});
let coordinate = (sourceData).split('');

let sourceShip = player1.board.getBoard()[+coordinate[0]][+coordinate[1]].ship;
// player1.board.getBoard()

let targetID  = e.target.id



checkUpdateGameBoard(shipCoord,sourceShip,sourceData,targetID);

makeAGrid(player1Board);
updateBoard();
}

// function updateShipsBoard(){
//   player1.board.getBoard().forEach(element => {
//     element.forEach( element=> {
//       let num = 0;
//       let number = "" + element.x+element.y;
//         const box = document.querySelector('#playeronegrid');
//         box.childNodes[+number].textContent = '';
//       if(element.ship){

//       }
//       box.childNodes[+number].classList.add('miss');
     
//   })})
// }

function checkUpdateGameBoard(shipCoord,sourceShip,sourceData,targetID){
  let add 
  let difference 
  let newPositionCoord 
  let newPositionHolder;
  if(!player1.board.getBoard()[+shipCoord[0]][+shipCoord[1]].ship.isShipHorizontal()){
     add =1; 
   difference = (shipCoord[shipCoord.length-2]*10+shipCoord[shipCoord.length-1]) - sourceData;
   newPositionCoord = +targetID + difference - (shipCoord.length/2-1);
   newPositionHolder = newPositionCoord;
  if(newPositionCoord%10+(shipCoord.length/2) > 10){
    return;
  }
  }else{
    add = 10;
     difference = (shipCoord[shipCoord.length-2]*10+shipCoord[shipCoord.length-1]) - sourceData;
     newPositionCoord = +targetID + difference - (shipCoord.length/2-1)*10;
     newPositionHolder = newPositionCoord;
    
    if(Math.round(newPositionCoord/10-0.49)+(shipCoord.length/2) > 10){
      return;
    }
  }

    for(let i =0; i < shipCoord.length;i++){   //check target has no ship
      let  newShipCoordXY;
      if(newPositionHolder<=9){
        newShipCoordXY = (`0${newPositionHolder}`).split('');
      }else
        newShipCoordXY = (`${newPositionHolder}`).split('');
      if(player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship &&
      player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship != sourceShip)
      return;
      newPositionHolder+=add;
      i++;
    }
    for(let i =0; i < shipCoord.length;i++){  //remove current ship
      player1.board.getBoard()[+shipCoord[i]][+shipCoord[i+1]].ship  = undefined;
      i++;
    }
    for(let i =0; i < shipCoord.length;i++){  
      let  newShipCoordXY;
      if(newPositionCoord<=9){
        newShipCoordXY = (`0${newPositionCoord}`).split('');
      }else
        newShipCoordXY = (`${newPositionCoord}`).split('');
        console.log(+newShipCoordXY[0],+newShipCoordXY[1])
      player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship  = sourceShip;
      i++;
      newPositionCoord+=add;
    }

  }
  

    
function draggingfunction(e){
  e.preventDefault();
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
        boxGrid.addEventListener('dragover',draggingfunction);
        // boxGrid.addEventListener('dropend',dragShipEnd);
        boxGrid.addEventListener('drop',dragShipEnd);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxJQUFJO0FBQzNEO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0L1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXQvUm9ib3RvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWcnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvQm9sZCc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcblxcbmJvZHl7XFxuICBmb250LWZhbWlseTogJ1JvYm90b1JlZycsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG5cXG4vKiBtYWtpbmcgYSBib2FyZCAqL1xcbiNwbGF5ZXJvbmVncmlkLCNwbGF5ZXJ0d29ncmlke1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgXFxufVxcblxcbi5nYW1lYm9hcmR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmJveHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi50dXJue1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5cXG4uc2hpcHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMTcsIDI1NSk7XFxufVxcblxcbi5oaXQ6OmJlZm9yZXtcXG4gIGNvbnRlbnQ6IFxcXCIrXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOmJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG5cXG4ubWlzczo6YmVmb3Jle1xcbiAgY29udGVudDogXFxcIi0tXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uc3VuaywuaGl0e1xcbiAgY29udGVudDogJ1gnO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcbn1cXG5cXG4vKiBCVVRUT05TICovXFxuYnV0dG9ue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG4ucmVzdGFydHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgbWFyZ2luOiAzcHg7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ucmVzdGFydDphY3RpdmV7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiAyMHB4O1xcbn1cXG5cXG5idXR0b246YWN0aXZle1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHhcXG59XFxuLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN0YXJ0e1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjQyLCAyNTUpO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZ2FtZWJvYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICB9XFxuXFxuICAuYm94e1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBc0M7QUFDeEM7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBbUM7QUFDckM7OztBQUdBO0VBQ0UscURBQXFEO0VBQ3JELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7O0FBR0EsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxxQ0FBcUM7O0FBRXZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRSxxREFBcUQ7RUFDckQsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjs7QUFFdkI7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCOztFQUV2QixXQUFXOztFQUVYLGtCQUFrQjtFQUNsQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIsU0FBUztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCO0FBQ0Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7O0FBR0E7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7RUFDekI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVnJztcXG4gIHNyYzogdXJsKCcuL2Fzc2V0L1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvQm9sZCc7XFxuICBzcmM6IHVybCgnLi9hc3NldC9Sb2JvdG8tQm9sZC50dGYnKTtcXG59XFxuXFxuXFxuYm9keXtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVnJyxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXJ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcblxcbi8qIG1ha2luZyBhIGJvYXJkICovXFxuI3BsYXllcm9uZWdyaWQsI3BsYXllcnR3b2dyaWR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICBcXG59XFxuXFxuLmdhbWVib2FyZHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uYm94e1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLnR1cm57XFxuICBmb250LWZhbWlseTogUm9ib3RvQm9sZCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcblxcbi5zaGlwe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIxNywgMjU1KTtcXG59XFxuXFxuLmhpdDo6YmVmb3Jle1xcbiAgY29udGVudDogXFxcIitcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6YmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcblxcbi5taXNzOjpiZWZvcmV7XFxuICBjb250ZW50OiBcXFwiLS1cXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5zdW5rLC5oaXR7XFxuICBjb250ZW50OiAnWCc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFxufVxcblxcbi8qIEJVVFRPTlMgKi9cXG5idXR0b257XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcbi5yZXN0YXJ0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICBtYXJnaW46IDNweDtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5yZXN0YXJ0OmFjdGl2ZXtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IDIwcHg7XFxufVxcblxcbmJ1dHRvbjphY3RpdmV7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweFxcbn1cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3RhcnR7XFxuICB3aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyNDIsIDI1NSk7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5nYW1lYm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gIH1cXG5cXG4gIC5ib3h7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5jb25zdCBzaGlwID0gcmVxdWlyZSgnLi9zaGlwJyk7XG4vLyBjb25zdCBzaGlwID0geyBsZW5ndGgsIHN1bmssfVxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGxldCBib2FyZCA9IFtbXV1cbiAgICBjcmVhdGVCb2FyZCgpO1xuICAgIGxldCB0dXJuID0gMDtcbiAgICBsZXQgc2hpcHNBcnJheSA9IFtdO1xuXG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmQoKXtcbiAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG4gICAgICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8MTA7aSArKyl7XG4gICAgICAgICAgYm9hcmQucHVzaChbXSk7XG4gICAgICAgICAgZm9yKGxldCBvID0gMDsgbyA8MTA7IG8rKyl7XG4gICAgICAgICAgICBib2FyZFtpXS5wdXNoKGNyZWF0ZUNvb3JkaW5hdGVPYmplY3QoaSxvKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNvb3JkaW5hdGVPYmplY3QoeCx5KXtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGUgPVxuICAgICAgICB7XG4gICAgICAgICAgeDogeCxcbiAgICAgICAgIHk6IHksXG4gICAgICAgICBzaGlwOiB1bmRlZmluZWQsXG4gICAgICAgICBoaXQ6IG51bGwsXG4gICAgICAgfVxuICAgICAgIHJldHVybiBjb29yZGluYXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsb2NhdGlvbiA9IChudW0xLG51bTIpID0+IHtcbiAgICAgICAgICByZXR1cm4gYm9hcmRbbnVtMV1bbnVtMl07XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGZpbGxCb2FyZFJhbmRvbShiYXR0bGVzaGlwKXtcbiAgICAgICAgc2hpcHNBcnJheS5wdXNoKGJhdHRsZXNoaXApO1xuICAgICAgICBsZXQgbGVuZ3RoID0gYmF0dGxlc2hpcC5nZXRTaGlwKCkubGVuZ3RoO1xuXG4gICAgICAgICAgbGV0IHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKjkpO1xuICAgICAgICAgIGxldCB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcbiAgICAgICAgICB3aGlsZSghY2hlY2tOb1NoaXAoYmF0dGxlc2hpcC5pc1NoaXBIb3Jpem9udGFsKCksbGVuZ3RoLHgseSkpe1xuICAgICAgICAgICAgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqOSk7XG4gICAgICAgICAgICB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZihiYXR0bGVzaGlwLmlzU2hpcEhvcml6b250YWwoKSl7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwIDtpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICBib2FyZFt4K2ldW3ldLnNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgZm9yKGxldCBpID0gMCA7aSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGJvYXJkW3hdW3kraV0uc2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrTm9TaGlwKGlzSG9yaXpvbnRhbCxsZW5ndGgseCx5KXtcbiAgICAgICAgICBpZihpc0hvcml6b250YWwpe1xuICAgICAgICAgICAgaWYoeDwgMCB8fCAoeCtsZW5ndGgpID4gOSB8fCB5IDwgMCB8fCB5PiA5KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMCA7aSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgaWYoYm9hcmRbeCtpXVt5XS5zaGlwICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZih4PCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8ICh5K2xlbmd0aCkgPiA5KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMCA7aSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgaWYoYm9hcmRbeF1beStpXS5zaGlwICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSAgICBcbiAgICAgXG4gICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgZnVuY3Rpb24gYWRkU2hpcChudW0xLG51bTIsc2l6ZSA9IDIsIGlzSG9yaXpvbnRhbCA9IHRydWUpe1xuICAgICAgICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcChzaXplKTtcblxuICAgICAgICBpZihpc0hvcml6b250YWwpe1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMCA7aSA8IHNpemU7IGkgKyspe1xuICAgICAgICAgICAgICBib2FyZFtudW0xXVtudW0yK2ldLnNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwIDtpIDwgc2l6ZTsgaSArKyl7XG4gICAgICAgICAgICBib2FyZFtudW0xK2ldW251bTFdLnNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcHJldHR5UHJpbnQoKTtcbiAgICAgIH1cblxuXG4gICAgIFxuICAgICAgZnVuY3Rpb24gcHJldHR5UHJpbnQoKXtcbiAgICAgICAgbGV0IHN0cmluZyA9ICcnO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwxMDtpICsrKXtcbiAgICAgICAgICBzdHJpbmcgKz0gJ1xcbidcbiAgICAgICAgICBmb3IobGV0IG8gPSAwOyBvIDwxMDsgbysrKXtcbiAgICAgICAgICAgICBpZihib2FyZFtpXVtvXS5oaXQgPT0gZmFsc2UpIFxuICAgICAgICAgICAgc3RyaW5nICs9ICdbLV0nO1xuICAgICAgICAgICAgZWxzZSBpZighYm9hcmRbaV1bb10uc2hpcClcbiAgICAgICAgICAgIHN0cmluZyArPSdbIF0nO1xuICAgICAgICAgICAgZWxzZSBpZihib2FyZFtpXVtvXS5zaGlwLmlzU3VuaygpKVxuICAgICAgICAgICAgc3RyaW5nICs9ICdbWF0nO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbHNlIGlmKGJvYXJkW2ldW29dLnNoaXApXG4gICAgICAgICAgICAgIHN0cmluZyArPSdbU10nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgfVxuXG5cbiAgICAgIGZ1bmN0aW9uIGhpdFNoaXAobnVtMSxudW0yKXtcblxuICAgICAgICBpZihudW0xIDwgMCB8fCBudW0yPCAwIHx8IG51bTEgPjkgfHwgbnVtMiA+IDkpe1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgICBpZihib2FyZFtudW0xXVtudW0yXS5oaXQgIT09IG51bGwpIHsgXG4gICAgICAgICAgICAvL2Nhbid0IGhpdCBzb21ldGhpbmcgYWxyZWFkeSBoaXQgYmVmb3JlXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgaWYoYm9hcmRbbnVtMV1bbnVtMl0uc2hpcCl7IC8vaWYgYSBzaGlwICBcbiAgICAgICAgICAgIGJvYXJkW251bTFdW251bTJdLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICBib2FyZFtudW0xXVtudW0yXS5zaGlwLmlzU3VuaygpO1xuICAgICAgICAgICAgYm9hcmRbbnVtMV1bbnVtMl0uaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHNlZSBpZiBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgICAgICAgICAgIHByZXR0eVByaW50KCk7XG4gICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1lbHNlIHsgICAvL2lmIGEgbWlzc1xuICAgICAgICAgICAgYm9hcmRbbnVtMV1bbnVtMl0uaGl0ID0gZmFsc2U7XG4gICAgICAgICAgICBwcmV0dHlQcmludCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICBcbiAgICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZnVuY3Rpb24gY2hlY2tBbGxTdW5rKCl7XG4gICAgICAgIFxuICAgICAgICBsZXQgYWxsU3VuayA9IGJvYXJkLmV2ZXJ5KGNvb3JkID0+IGNvb3JkLmV2ZXJ5KCBlbGVtZW50ID0+IGNoZWNrU2hpcChlbGVtZW50KSkpO1xuLy8gJiYgY29vcmQuc2hpcC5zdW5rID09IGZhbHNlXG4gICAgICAgaWYoYWxsU3Vuayl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBjaGVja1NoaXAoY29vcmQpe1xuICAgICAgICAgIGlmKGNvb3JkLnNoaXAgPT0gdW5kZWZpbmVkKSBcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICBlbHNlIGlmKGNvb3JkLnNoaXAuZ2V0U2hpcCgpLnN1bmspICBcbiAgICAgICAgICByZXR1cm4gdHJ1ZTsgIFxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNoZWNrSXNTaGlwKGNvb3JkKXtcbiAgICAgICAgaWYoY29vcmQuc2hpcCA9PSB1bmRlZmluZWQpIFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2UgaWYoY29vcmQuc2hpcCkgIFxuICAgICAgICByZXR1cm4gdHJ1ZTsgICAvL2xvbCByZWR1ZG5hdD9cbiAgICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgIHJldHVybiB7dHVybixnZXRCb2FyZCxsb2NhdGlvbixhZGRTaGlwLGhpdFNoaXAscHJldHR5UHJpbnQsY2hlY2tBbGxTdW5rLGNoZWNrSXNTaGlwLGZpbGxCb2FyZFJhbmRvbSxzaGlwc0FycmF5fTsgXG5cbiAgICAgIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVib2FyZDsiLCJjb25zdCBnYW1lYm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuY29uc3Qgc2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpO1xuXG5cblxuY29uc3QgcGxheWVyID0gKG5hbWUsaXNBSW50LG51bWJlciA9IDEpID0+IHtcbiAgY29uc3QgaXNBSSA9IGlzQUludDtcbiAgY29uc3QgcGxheWVyTmFtZSA9IG5hbWU7XG4gIGNvbnN0IHBsYXllck51bWJlciA9IG51bWJlcjtcbiAgY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQoKTsgXG5jb25zdCBzaGlwcyA9IFtdO1xuY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW107XG5jb25zdCBwb3NzaWJsZU1vdmVzID0gW107XG5cbmxldCB3aW5uZXIgPSBmYWxzZTsgXG5mb3IobGV0IGkgPSAwOyBpIDw3OyBpKyspe1xuICBsZXQgbnVtO1xuICBpZihpIDw9IDIpICBudW0gPSAyO1xuICBlbHNlIGlmKGkgPD0gNCkgIG51bSA9IDM7XG4gIGVsc2UgaWYoaSA8PSA1KSAgbnVtID0gNDtcbiAgZWxzZSBpZihpIDwgNykgbnVtID0gNTtcbiAgY29uc3Qgc2hpcDEgPSBzaGlwKG51bSk7XG4gIHNoaXBzLnB1c2goc2hpcDEpO1xufVxuXG5maWxsQWxsU2hpcHMoKTtcblxuICAgIGZ1bmN0aW9uIGdldEFsbFNoaXBzKCl7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZmlsbEFsbFNoaXBzKCl7XG4gICAgICBzaGlwcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBib2FyZC5maWxsQm9hcmRSYW5kb20oZWxlbWVudCk7XG5cbiAgICAgIH0pO1xuICAgICAgYm9hcmQucHJldHR5UHJpbnQoKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2hvb3RDb29yZGluYXRlcyh4ID0wICx5ID0gMCxpc1JvYm90KXtcbiAgICAgIGlmKGlzUm9ib3Qpe1xuICAgICAgICAgICAgIHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKjkpO1xuICAgICAgICAgICAgIHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKjkpO1xuXG4gICAgICAgIGlmKHNoaXBDb29yZGluYXRlcy5sZW5ndGggPj0gMSB8fCBwb3NzaWJsZU1vdmVzLmxlbmd0aCA+PSAxKXtcbiAgICAgICAgICAvLyBpZihib2FyZC5jaGVja0lzU2hpcChib2FyZC5sb2NhdGlvbihzaGlwQ29vcmRpbmF0ZXNbMF0sc2hpcENvb3JkaW5hdGVzWzFdKSkpXG4gICAgICAgICAgLy8gICBzaGlwQ29vcmRpbmF0ZXMuc3BsaWNlKDAsc2hpcENvb3JkaW5hdGVzLmxlbmd0aCk7XG4gICAgICAgICAgLy8gICBlbHNle1xuICAgICAgICAgICAgaWYoc2hpcENvb3JkaW5hdGVzLmxlbmd0aCA+PSAxKXtcbiAgICAgICAgICAgICAgeCA9IHNoaXBDb29yZGluYXRlcy5zcGxpY2UoMCwxKVswXTtcbiAgICAgICAgICAgICAgeSA9ICBzaGlwQ29vcmRpbmF0ZXMuc3BsaWNlKDAsMSlbMF07XG4gICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh4KzEseSk7XG4gICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh4LTEseSk7XG4gICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh4LHktMSk7XG4gICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh4LHkrMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBjb29yZCA9IHBvc3NpYmxlTW92ZXMuc3BsaWNlKDAsMik7XG4gICAgICAgICAgICAgICAgbGV0IGhpdFdoYXQgPSBib2FyZC5oaXRTaGlwKGNvb3JkWzBdLGNvb3JkWzFdKVxuICAgICAgICAgICAgICB3aGlsZShwb3NzaWJsZU1vdmVzLmxlbmd0aCAhPTAgJiYgIGhpdFdoYXQgPT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICAgICAgY29vcmQgPSBwb3NzaWJsZU1vdmVzLnNwbGljZSgwLDIpO1xuICAgICAgICAgICAgICAgIGhpdFdoYXQgID0gYm9hcmQuaGl0U2hpcChjb29yZFswXSxjb29yZFsxXSk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGlmKGhpdFdoYXQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhoaXRXaGF0KTtcbiAgICAgICAgICAgICAgICAgIGlmKGhpdFdoYXQpe1xuICAgICAgICAgICAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChjb29yZFswXSk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKGNvb3JkWzFdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgIGxldCBtb3ZlUG9zc2libGUgPSBib2FyZC5oaXRTaGlwKHgseSk7XG4gICAgICAgIFxuICAgICAgICAgIHdoaWxlKG1vdmVQb3NzaWJsZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgIHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKjkpO1xuICAgICAgICAgICAgICAgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqOSk7XG4gICAgICAgICAgICAgIG1vdmVQb3NzaWJsZSA9IGJvYXJkLmhpdFNoaXAoeCx5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBpZihtb3ZlUG9zc2libGUgPT0gdHJ1ZSl7XG4gICAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaCh4KTtcbiAgICAgICAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKHkpO1xuICAgICAgICAgIH1cblxuICAgICAgXG4gICAgICB9ZWxzZXtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdodW1hbicpO1xuICAgICAgICBib2FyZC5oaXRTaGlwKHgseSlcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNXaW5uZXIoKXtcbiAgICAgIHJldHVybiB3aW5uZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdvbigpe1xuICAgICAgIHdpbm5lciA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE5hbWUoKXtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0QWxsU2hpcHMsYm9hcmQsc2hvb3RDb29yZGluYXRlcywgcGxheWVyTnVtYmVyLGdldE5hbWUsaXNBSSxpc1dpbm5lcix3b259XG4gIH1cblxuXG4gIG1vZHVsZS5leHBvcnRzID0gcGxheWVyOyIsIlxuY29uc3QgU2hpcCA9IChsZW5ndGggPSAyLCBpc0hvcml6b250YWwgPSAwLCBzdW5rID0gZmFsc2UpID0+IHtcbiBjb25zdCBzaGlwID0ge1xuICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgIGhpdHM6IDAsXG4gICAgc3Vuazogc3VuayxcbiAgICBob3Jpem9udGFsOiB1bmRlZmluZWRcbiAgfVxuXG4gICBpc0hvcml6b250YWwgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICBzaGlwLmhvcml6b250YWwgPSBpc0hvcml6b250YWwgPT0gMTtcblxuICBjb25zdCBoaXQgPSAoKSA9PntcbiAgICBzaGlwLmhpdHMgKz0gMTtcbiAgICByZXR1cm4gc2hpcC5oaXRzO1xuICB9XG4gIGZ1bmN0aW9uIGlzU2hpcEhvcml6b250YWwoKXtcbiAgICByZXR1cm4gc2hpcC5ob3Jpem9udGFsO1xuICB9XG4gIGNvbnN0IGdldFNoaXAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXA7XG4gIH1cbiAgXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+e1xuICAgIGlmKHNoaXAuaGl0cyA9PSBzaGlwLmxlbmd0aCkgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICByZXR1cm4gc2hpcC5zdW5rO1xuICB9XG5cbiAgcmV0dXJuIHtTaGlwLGdldFNoaXAsaGl0LGlzU3Vuayxpc1NoaXBIb3Jpem9udGFsfTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImNvbnN0IHBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5pbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuXG5cblxubGV0IGlzQWkgPSB0cnVlO1xuXG5sZXQgcGxheWVyMSA9IHBsYXllcignUGxheWVyMScsIWlzQWksMSk7XG5sZXQgcGxheWVyMiA9IHBsYXllcignQUknLGlzQWksMik7XG5cbmxldCBpID0gMDsgXG5sZXQgd2lubmVyID0gZmFsc2U7XG5cbmNvbnN0IG5ld0dhbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydCcpO1xuY29uc3Qgc3RhcnRHYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0JylcblxuLy8gYnV0dG9uIHRvIHN0YXJ0IGdhbWUgXG5uZXdHYW1lRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxwbGF5R2FtZSk7XG5zdGFydEdhbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZEV2ZW50TGlzdGVuZXJHYW1lU3RhcnQpO1xuXG5jb25zdCBwbGF5ZXIxQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyb25lZ3JpZCcpO1xuY29uc3QgcGxheWVyMkJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcnR3b2dyaWQnKTtcbnBsYXlHYW1lKCk7XG5cblxuXG4vLyBtYWtlIGEgYm9hcmQgb24gd2Vic2l0ZVxuZnVuY3Rpb24gcGxheUdhbWUoKXtcbiAgc3RhcnRHYW1lRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgcGxheWVyMSA9IHBsYXllcignUGxheWVyMScsIWlzQWksMSk7XG4gcGxheWVyMiA9IHBsYXllcignQUknLGlzQWksMik7XG4gIGNvbnNvbGUubG9nKFwibmV3IGdhbWVcIilcblxuXG5jaGVja1R1cm4oKTtcblxubWFrZUFHcmlkKHBsYXllcjFCb2FyZCk7XG5tYWtlQUdyaWQocGxheWVyMkJvYXJkKTtcblxudXBkYXRlQm9hcmQoKTtcblxufVxuXG5cblxuLy8gcGxheUdhbWUoKTsgIC8vd2lsbCBuZWVkIHRvIGNoYW5nZSBmb3Igd2hlbiB0aGVyZSBpcyBhIHVzZXIgaW50ZXJmYWNlXG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJHYW1lU3RhcnQoZSl7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coJ2FkZExpc3RlbnJzJylcblxuICBzdGFydEdhbWVEaXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIHBsYXllcjIuYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJ0d29ncmlkJyk7XG5cbiAgICBlbGVtZW50LmZvckVhY2goIGVsZW1lbnQ9PiB7XG4gICAgICBsZXQgbnVtYmVyID0gXCJcIiArIGVsZW1lbnQueCtlbGVtZW50Lnk7XG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxldmFsdWxhdGVQbGF5ZXJDbGljayk7XG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsZHJhZ1NoaXApO1xuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsZHJhZ2dpbmdmdW5jdGlvbik7XG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLGRyYWdTaGlwRW5kKTtcbiAgICB9KVxuICB9KTtcblxuICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyb25lZ3JpZCcpO1xuXG4gICAgZWxlbWVudC5mb3JFYWNoKCBlbGVtZW50PT4ge1xuICAgICAgbGV0IG51bWJlciA9IFwiXCIgKyBlbGVtZW50LngrZWxlbWVudC55O1xuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLGRyYWdTaGlwKTtcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLGRyYWdnaW5nZnVuY3Rpb24pO1xuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJyxkcmFnU2hpcEVuZCk7XG4gICAgfSlcbiAgfSk7XG5cbn1cblxuZnVuY3Rpb24gZHJhZ1NoaXAoZSl7XG4gIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsYXNzTGlzdFsyXSlcbiAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuY2xhc3NMaXN0WzJdKTtcbiAgbGV0IHNoaXBOYW1lID0gZS50YXJnZXQuY2xhc3NMaXN0WzJdO1xuICBjb25zdCBzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzaGlwTmFtZSk7XG4gIC8vIGxldCBzaGlwQ29vcmRpbmF0ZSA9IFtdO1xuICAvLyBjb25zb2xlLmxvZyhzaGlwKTtcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZS50YXJnZXQuaWQpO1xuICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJjb3B5XCI7XG4gIC8vIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDtpKyspe1xuICAvLyAgIHNoaXBDb29yZGluYXRlLnB1c2goc2hpcFtpXS5pZCk7XG5cbiAgLy8gfVxufVxuXG5mdW5jdGlvbiBkcmFnU2hpcEVuZChlKXtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuY29uc3Qgc291cmNlRGF0YSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xubGV0IHNvdXJjZVNoaXBDb29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NvdXJjZURhdGF9YCk7XG5sZXQgc291cmNlU2hpcE5hbWVBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3NvdXJjZVNoaXBDb29yZC5jbGFzc0xpc3RbMl19YCk7XG5jb25zdCBzaGlwQ29vcmQgPSBbXTtcblxuc291cmNlU2hpcE5hbWVBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT57XG4gIGxldCB4eSA9IGVsZW1lbnQuaWQuc3BsaXQoJycpO1xuICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgc2hpcENvb3JkLnB1c2goK3h5WzBdKTtcbiAgc2hpcENvb3JkLnB1c2goK3h5WzFdKTtcbn0pO1xubGV0IGNvb3JkaW5hdGUgPSAoc291cmNlRGF0YSkuc3BsaXQoJycpO1xuXG5sZXQgc291cmNlU2hpcCA9IHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVsrY29vcmRpbmF0ZVswXV1bK2Nvb3JkaW5hdGVbMV1dLnNoaXA7XG4vLyBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClcblxubGV0IHRhcmdldElEICA9IGUudGFyZ2V0LmlkXG5cblxuXG5jaGVja1VwZGF0ZUdhbWVCb2FyZChzaGlwQ29vcmQsc291cmNlU2hpcCxzb3VyY2VEYXRhLHRhcmdldElEKTtcblxubWFrZUFHcmlkKHBsYXllcjFCb2FyZCk7XG51cGRhdGVCb2FyZCgpO1xufVxuXG4vLyBmdW5jdGlvbiB1cGRhdGVTaGlwc0JvYXJkKCl7XG4vLyAgIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuLy8gICAgIGVsZW1lbnQuZm9yRWFjaCggZWxlbWVudD0+IHtcbi8vICAgICAgIGxldCBudW0gPSAwO1xuLy8gICAgICAgbGV0IG51bWJlciA9IFwiXCIgKyBlbGVtZW50LngrZWxlbWVudC55O1xuLy8gICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyb25lZ3JpZCcpO1xuLy8gICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS50ZXh0Q29udGVudCA9ICcnO1xuLy8gICAgICAgaWYoZWxlbWVudC5zaGlwKXtcblxuLy8gICAgICAgfVxuLy8gICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICBcbi8vICAgfSl9KVxuLy8gfVxuXG5mdW5jdGlvbiBjaGVja1VwZGF0ZUdhbWVCb2FyZChzaGlwQ29vcmQsc291cmNlU2hpcCxzb3VyY2VEYXRhLHRhcmdldElEKXtcbiAgbGV0IGFkZCBcbiAgbGV0IGRpZmZlcmVuY2UgXG4gIGxldCBuZXdQb3NpdGlvbkNvb3JkIFxuICBsZXQgbmV3UG9zaXRpb25Ib2xkZXI7XG4gIGlmKCFwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK3NoaXBDb29yZFswXV1bK3NoaXBDb29yZFsxXV0uc2hpcC5pc1NoaXBIb3Jpem9udGFsKCkpe1xuICAgICBhZGQgPTE7IFxuICAgZGlmZmVyZW5jZSA9IChzaGlwQ29vcmRbc2hpcENvb3JkLmxlbmd0aC0yXSoxMCtzaGlwQ29vcmRbc2hpcENvb3JkLmxlbmd0aC0xXSkgLSBzb3VyY2VEYXRhO1xuICAgbmV3UG9zaXRpb25Db29yZCA9ICt0YXJnZXRJRCArIGRpZmZlcmVuY2UgLSAoc2hpcENvb3JkLmxlbmd0aC8yLTEpO1xuICAgbmV3UG9zaXRpb25Ib2xkZXIgPSBuZXdQb3NpdGlvbkNvb3JkO1xuICBpZihuZXdQb3NpdGlvbkNvb3JkJTEwKyhzaGlwQ29vcmQubGVuZ3RoLzIpID4gMTApe1xuICAgIHJldHVybjtcbiAgfVxuICB9ZWxzZXtcbiAgICBhZGQgPSAxMDtcbiAgICAgZGlmZmVyZW5jZSA9IChzaGlwQ29vcmRbc2hpcENvb3JkLmxlbmd0aC0yXSoxMCtzaGlwQ29vcmRbc2hpcENvb3JkLmxlbmd0aC0xXSkgLSBzb3VyY2VEYXRhO1xuICAgICBuZXdQb3NpdGlvbkNvb3JkID0gK3RhcmdldElEICsgZGlmZmVyZW5jZSAtIChzaGlwQ29vcmQubGVuZ3RoLzItMSkqMTA7XG4gICAgIG5ld1Bvc2l0aW9uSG9sZGVyID0gbmV3UG9zaXRpb25Db29yZDtcbiAgICBcbiAgICBpZihNYXRoLnJvdW5kKG5ld1Bvc2l0aW9uQ29vcmQvMTAtMC40OSkrKHNoaXBDb29yZC5sZW5ndGgvMikgPiAxMCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgICBmb3IobGV0IGkgPTA7IGkgPCBzaGlwQ29vcmQubGVuZ3RoO2krKyl7ICAgLy9jaGVjayB0YXJnZXQgaGFzIG5vIHNoaXBcbiAgICAgIGxldCAgbmV3U2hpcENvb3JkWFk7XG4gICAgICBpZihuZXdQb3NpdGlvbkhvbGRlcjw9OSl7XG4gICAgICAgIG5ld1NoaXBDb29yZFhZID0gKGAwJHtuZXdQb3NpdGlvbkhvbGRlcn1gKS5zcGxpdCgnJyk7XG4gICAgICB9ZWxzZVxuICAgICAgICBuZXdTaGlwQ29vcmRYWSA9IChgJHtuZXdQb3NpdGlvbkhvbGRlcn1gKS5zcGxpdCgnJyk7XG4gICAgICBpZihwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK25ld1NoaXBDb29yZFhZWzBdXVsrbmV3U2hpcENvb3JkWFlbMV1dLnNoaXAgJiZcbiAgICAgIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVsrbmV3U2hpcENvb3JkWFlbMF1dWytuZXdTaGlwQ29vcmRYWVsxXV0uc2hpcCAhPSBzb3VyY2VTaGlwKVxuICAgICAgcmV0dXJuO1xuICAgICAgbmV3UG9zaXRpb25Ib2xkZXIrPWFkZDtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgZm9yKGxldCBpID0wOyBpIDwgc2hpcENvb3JkLmxlbmd0aDtpKyspeyAgLy9yZW1vdmUgY3VycmVudCBzaGlwXG4gICAgICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK3NoaXBDb29yZFtpXV1bK3NoaXBDb29yZFtpKzFdXS5zaGlwICA9IHVuZGVmaW5lZDtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgZm9yKGxldCBpID0wOyBpIDwgc2hpcENvb3JkLmxlbmd0aDtpKyspeyAgXG4gICAgICBsZXQgIG5ld1NoaXBDb29yZFhZO1xuICAgICAgaWYobmV3UG9zaXRpb25Db29yZDw9OSl7XG4gICAgICAgIG5ld1NoaXBDb29yZFhZID0gKGAwJHtuZXdQb3NpdGlvbkNvb3JkfWApLnNwbGl0KCcnKTtcbiAgICAgIH1lbHNlXG4gICAgICAgIG5ld1NoaXBDb29yZFhZID0gKGAke25ld1Bvc2l0aW9uQ29vcmR9YCkuc3BsaXQoJycpO1xuICAgICAgICBjb25zb2xlLmxvZygrbmV3U2hpcENvb3JkWFlbMF0sK25ld1NoaXBDb29yZFhZWzFdKVxuICAgICAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpWytuZXdTaGlwQ29vcmRYWVswXV1bK25ld1NoaXBDb29yZFhZWzFdXS5zaGlwICA9IHNvdXJjZVNoaXA7XG4gICAgICBpKys7XG4gICAgICBuZXdQb3NpdGlvbkNvb3JkKz1hZGQ7XG4gICAgfVxuXG4gIH1cbiAgXG5cbiAgICBcbmZ1bmN0aW9uIGRyYWdnaW5nZnVuY3Rpb24oZSl7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cbmZ1bmN0aW9uIG1ha2VBR3JpZChwYXJlbnREaXYpe1xuICBwYXJlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yKGxldCBpID0gMDtpPCAxMDtpKyspe1xuICAgIGZvcihsZXQgbyA9MDtvIDwxMDtvKyspe1xuICAgICAgICBjb25zdCBib3hHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBib3hHcmlkLmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuICAgICAgICBib3hHcmlkLnNldEF0dHJpYnV0ZSgnaWQnLGAke2l9JHtvfWApXG4gICAgICAgIGlmKHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVtpXVtvXS5zaGlwKXtcbiAgICAgICAgICBib3hHcmlkLmRyYWdnYWJsZSAgPSB0cnVlO1xuICAgICAgICAgIGJveEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JyxkcmFnU2hpcCk7XG4gICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBib3hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJyxkcmFnZ2luZ2Z1bmN0aW9uKTtcbiAgICAgICAgLy8gYm94R3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wZW5kJyxkcmFnU2hpcEVuZCk7XG4gICAgICAgIGJveEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsZHJhZ1NoaXBFbmQpO1xuICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoYm94R3JpZCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGV2YWx1bGF0ZVBsYXllckNsaWNrKGUpe1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmKHBsYXllcjEuaXNXaW5uZXIoKSB8fCAgcGxheWVyMi5pc1dpbm5lcigpKXtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYocGxheWVyMS5ib2FyZC50dXJuK3BsYXllcjIuYm9hcmQudHVybiA9PSAwICYmIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQgPT09ICdwbGF5ZXJvbmVncmlkJyApe1xuICAgIC8vZ2FtZSBoYXMgbm90IHN0YXJ0ZWQuIGNhbiBtb3ZlIHNoaXBzLi4uLlxuICAgICAgbGV0IGNvb3JkID0gZS50YXJnZXQuaWQuc3BsaXQoJycpO1xuICAgICAgaWYocGxheWVyMS5ib2FyZC5jaGVja0lzU2hpcChwbGF5ZXIxLmJvYXJkLmxvY2F0aW9uKGNvb3JkWzBdLGNvb3JkWzFdKSkpe1xuICAgICAgICAvLyB2YXIgZGF0YSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoZS50YXJnZXQpO1xuICAgICAgICBjb25zb2xlLmxvZyhlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLFwiaGlcIikpO1xuICBcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm47XG4gIH1cbiAgXG4gICAgaWYocGxheWVyMS5ib2FyZC50dXJuID09IHBsYXllcjIuYm9hcmQudHVybiAmJiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkID09PSAncGxheWVydHdvZ3JpZCcgKXtcbiAgICAvLyBwbGF5ZXIgMSB0dXJuXG4gICAgcGxheWVyMS5ib2FyZC50dXJuKytcbiAgICBsZXQgY29vcmQgPSBlLnRhcmdldC5pZC5zcGxpdCgnJyk7XG4gICAgaWYocGxheWVyMi5ib2FyZC5oaXRTaGlwKGNvb3JkWzBdLGNvb3JkWzFdKSA9PSB1bmRlZmluZWQpe1xuICAgICAgcGxheWVyMS5ib2FyZC50dXJuLS07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICAgdXBkYXRlQm9hcmQoKTtcbiAgICAgIGNoZWNrV2lubmVyKCk7XG4gICBcbiAgfWVsc2V7XG4gIGNvbnNvbGUubG9nKCdBTEwgVU5JVFMgTVVTVCBBVFRBQ0sgRU5FTVkuJylcbiAgcmV0dXJuO1xufVxuICAgIHBsYXllcjIuYm9hcmQudHVybisrO1xuICAgIHBsYXllcjEuc2hvb3RDb29yZGluYXRlcygwLDAscGxheWVyMi5pc0FJKTtcbiAgICB1cGRhdGVCb2FyZCgpO1xuXG5cbiAgICBjaGVja1R1cm4oKTtcblxuICAgIGNoZWNrV2lubmVyKCk7XG5cblxuICAgIFxufVxuZnVuY3Rpb24gY2hlY2tUdXJuKCl7XG4gIGNvbnN0IHR1cm5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybicpO1xuICBpZihwbGF5ZXIxLmJvYXJkLnR1cm4gPT0gcGxheWVyMi5ib2FyZC50dXJuKSB7XG4gICAgdHVybkRpdi50ZXh0Q29udGVudCA9ICdQTEFZRVIgT05FIFRVUk4gJztcbiAgfVxuICBpZihwbGF5ZXIxLmJvYXJkLnR1cm4gPiBwbGF5ZXIyLmJvYXJkLnR1cm4pe1xuICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSAnUExBWUVSIFRXTyBUVVJOJztcbiAgfVxufVxuZnVuY3Rpb24gdXBkYXRlQm9hcmQoKXtcbiAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5mb3JFYWNoKCBlbGVtZW50PT4ge1xuICAgICAgbGV0IG51bSA9IDA7XG4gICAgICBsZXQgbnVtYmVyID0gXCJcIiArIGVsZW1lbnQueCtlbGVtZW50Lnk7XG4gICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJvbmVncmlkJyk7XG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnRleHRDb250ZW50ID0gJyc7XG4gICAgICBpZihlbGVtZW50LmhpdCA9PSBmYWxzZSkgXG4gICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QudG9nZ2xlKCdtaXNzJyk7XG4gICAgICBlbHNlIGlmKCFlbGVtZW50LnNoaXApXG4gICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS50ZXh0Q29udGVudCA9Jyc7XG4gICAgICBlbHNlIGlmKGVsZW1lbnQuc2hpcC5pc1N1bmsoKSlcbiAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC50b2dnbGUoJ3N1bmsnKTtcbiAgICAgIGVsc2UgaWYoZWxlbWVudC5oaXQgPT0gdHJ1ZSkgXG4gICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QudG9nZ2xlKCdoaXQnKTtcbiAgICAgIGVsc2UgaWYoZWxlbWVudC5zaGlwKXtcblxuICAgICAgcGxheWVyMS5ib2FyZC5zaGlwc0FycmF5LmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgIGlmKHNoaXAuZ2V0U2hpcCgpID09PSBlbGVtZW50LnNoaXAuZ2V0U2hpcCgpKXtcbiAgICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QudG9nZ2xlKGBzaGlwYCk7XG4gICAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LmFkZChgc2hpcCR7bnVtfWApO1xuICAgICAgICB9XG4gICAgICAgIG51bSsrO1xuICAgICAgfSk7XG5cblxuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuXG4gIHBsYXllcjIuYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuZm9yRWFjaCggZWxlbWVudD0+IHtcbiAgICAgIGxldCBudW1iZXIgPSBcIlwiICsgZWxlbWVudC54K2VsZW1lbnQueTtcbiAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcnR3b2dyaWQnKTtcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgXG4gICAgICAgIGlmKGVsZW1lbnQuaGl0ID09IGZhbHNlKSBcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICBlbHNlIGlmKCFlbGVtZW50LnNoaXApXG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnRleHRDb250ZW50ID0nJztcbiAgICAgICAgZWxzZSBpZihlbGVtZW50LnNoaXAuaXNTdW5rKCkpe1xuICAgICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcpO1xuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihlbGVtZW50LmhpdCA9PSB0cnVlKSBcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIC8vIGVsc2UgaWYoZWxlbWVudC5zaGlwKVxuICAgICAgICAvLyBib3guY2hpbGROb2Rlc1srbnVtYmVyXS50ZXh0Q29udGVudCA9IFwiU1wiO1xuICAgIH0pXG4gIH0pO1xuXG59XG5cblxuZnVuY3Rpb24gY2hlY2tXaW5uZXIoKXtcbiAgY29uc3QgdHVybkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dXJuJyk7XG5cbiAgaWYocGxheWVyMi5ib2FyZC5jaGVja0FsbFN1bmsoKSl7XG4gICAgdHVybkRpdi50ZXh0Q29udGVudCA9IFwiUGxheWVyIDEgV09OXCI7XG4gICAgcGxheWVyMS53b24oKTtcbn1cbmlmKHBsYXllcjEuYm9hcmQuY2hlY2tBbGxTdW5rKCkpe1xuICB0dXJuRGl2LnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMiBXT05cIjtcbiAgcGxheWVyMi53b24oKTtcbn1cbn1cblxuLy8gZnVuY3Rpb24gZmluZE1vdmVBSSgpe1xuLy8gICBsZXQgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqOSk7XG4vLyAgIGxldCB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcblxuLy8gICAgIGxldCBtb3ZlUG9zc2libGUgPSBwbGF5ZXIxLmJvYXJkLmhpdFNoaXAoeCx5KTtcbiAgICBcbi8vICAgICAgd2hpbGUobW92ZVBvc3NpYmxlID09PSB1bmRlZmluZWQpe1xuLy8gICAgICAgICBsZXQgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqOSk7XG4vLyAgICAgICAgIGxldCB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcbiAgICAgICBcbi8vICAgICAgIH1cbi8vICAgICAgIGlmKG1vdmVQb3NzaWJsZSA9PSB0cnVlKXtcbiAgICAgICAgXG4vLyAgICAgICB9XG4vLyAgICAgICBtb3ZlUG9zc2libGUgPSBwbGF5ZXIxLmJvYXJkLmhpdFNoaXAoeCx5KTtcbi8vICAgICAgLy8gd2hpbGUobW92ZVBvc3NpYmxlID09PSB1bmRlZmluZWQpe1xuLy8gICAgIC8vICAgICBsZXQgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqOSk7XG4vLyAgICAgLy8gICAgIGxldCB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICo5KTtcbi8vICAgICAvLyAgICAgbW92ZVBvc3NpYmxlID0gcGxheWVyMi5ib2FyZC5oaXRTaGlwKHgseSk7XG4vLyAgICAgLy8gICB9XG4vLyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9