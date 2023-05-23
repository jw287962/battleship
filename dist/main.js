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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/carrier.svg */ "./src/asset/carrier.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"RobotoReg\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"RobotoBold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nbody {\n  font-family: \"RobotoReg\", Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n  width: 100vw;\n}\n\n.header {\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid grey;\n  height: 70px;\n  font-size: 25px;\n}\n\n/* making a board */\n#playeronegrid,\n#playertwogrid,\n#playeroneDisplay {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n}\n#playeroneDisplay {\n  position: absolute;\n  transform: translateY(-100%);\n}\n#playeroneDisplay > .box {\n  padding: 1px;\n  border: none;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 100px;\n}\n\n.box {\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n  z-index: 99;\n}\n\n.turn {\n  font-family: RobotoBold, Arial, Helvetica, sans-serif;\n  margin: 10px;\n  border: 1px solid grey;\n  padding: 10px;\n  color: white;\n  background-color: black;\n}\n\n.ship {\n  background-color: rgb(99, 250, 255);\n}\n\n.battleship1,\n.battleship2,\n.battleship3,\n.battleship4,\n.battleship5,\n.battleship6 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\n  background-repeat: no-repeat;\n  background-size: 100%;\n  border: none;\n}\n\n/* each ship */\n.hit,\n.sunk {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hit::before {\n  content: \"\";\n  display: flex;\n  justify-content: center;\n  color: black;\n  border: 8px solid red;\n\n  border-radius: 50%;\n}\n.miss {\n  background-color: rgb(195, 237, 247);\n  opacity: 90%;\n}\n.sunk {\n  font-weight: 800;\n  font-size: 30px;\n}\n.sunk::before {\n  content: \"X\";\n  color: red;\n}\n\n/* BUTTONS */\nbutton {\n  background-color: white;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 5px;\n  width: 100px;\n}\n.restart {\n  background-color: white;\n  margin: 3px;\n\n  position: absolute;\n  left: 0;\n}\n\n.restart:active {\n  position: absolute;\n  top: 20px;\n}\n\nbutton:active {\n  position: relative;\n  top: 2px;\n}\n.hidden {\n  display: none;\n}\n\n.start {\n  width: 150px;\n  background-color: rgb(202, 242, 255);\n  margin: 10px;\n}\n\n@media only screen and (max-width: 900px) {\n  .gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .box {\n    height: 38px;\n    width: 38px;\n    border: 1px solid black;\n  }\n}\n@media only screen and (max-width: 550px) {\n  .gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .box {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,4CAAmC;AACrC;;AAEA;EACE,sDAAsD;EACtD,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA,mBAAmB;AACnB;;;EAGE,aAAa;EACb,mCAAmC;EACnC,sCAAsC;AACxC;AACA;EACE,kBAAkB;EAClB,4BAA4B;AAC9B;AACA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,qDAAqD;EACrD,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;;;;;;EAME,yDAA4C;;EAE5C,4BAA4B;EAC5B,qBAAqB;EACrB,YAAY;AACd;;AAEA,cAAc;AACd;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,qBAAqB;;EAErB,kBAAkB;AACpB;AACA;EACE,oCAAoC;EACpC,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA,YAAY;AACZ;EACE,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,WAAW;;EAEX,kBAAkB;EAClB,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,QAAQ;AACV;AACA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,uBAAuB;EACzB;AACF;AACA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,uBAAuB;EACzB;AACF","sourcesContent":["@font-face {\n  font-family: \"RobotoReg\";\n  src: url(\"./asset/Roboto-Regular.ttf\");\n}\n@font-face {\n  font-family: \"RobotoBold\";\n  src: url(\"./asset/Roboto-Bold.ttf\");\n}\n\nbody {\n  font-family: \"RobotoReg\", Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n  width: 100vw;\n}\n\n.header {\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid grey;\n  height: 70px;\n  font-size: 25px;\n}\n\n/* making a board */\n#playeronegrid,\n#playertwogrid,\n#playeroneDisplay {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n}\n#playeroneDisplay {\n  position: absolute;\n  transform: translateY(-100%);\n}\n#playeroneDisplay > .box {\n  padding: 1px;\n  border: none;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 100px;\n}\n\n.box {\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n  z-index: 99;\n}\n\n.turn {\n  font-family: RobotoBold, Arial, Helvetica, sans-serif;\n  margin: 10px;\n  border: 1px solid grey;\n  padding: 10px;\n  color: white;\n  background-color: black;\n}\n\n.ship {\n  background-color: rgb(99, 250, 255);\n}\n\n.battleship1,\n.battleship2,\n.battleship3,\n.battleship4,\n.battleship5,\n.battleship6 {\n  background-image: url(\"./asset/carrier.svg\");\n\n  background-repeat: no-repeat;\n  background-size: 100%;\n  border: none;\n}\n\n/* each ship */\n.hit,\n.sunk {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hit::before {\n  content: \"\";\n  display: flex;\n  justify-content: center;\n  color: black;\n  border: 8px solid red;\n\n  border-radius: 50%;\n}\n.miss {\n  background-color: rgb(195, 237, 247);\n  opacity: 90%;\n}\n.sunk {\n  font-weight: 800;\n  font-size: 30px;\n}\n.sunk::before {\n  content: \"X\";\n  color: red;\n}\n\n/* BUTTONS */\nbutton {\n  background-color: white;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 5px;\n  width: 100px;\n}\n.restart {\n  background-color: white;\n  margin: 3px;\n\n  position: absolute;\n  left: 0;\n}\n\n.restart:active {\n  position: absolute;\n  top: 20px;\n}\n\nbutton:active {\n  position: relative;\n  top: 2px;\n}\n.hidden {\n  display: none;\n}\n\n.start {\n  width: 150px;\n  background-color: rgb(202, 242, 255);\n  margin: 10px;\n}\n\n@media only screen and (max-width: 900px) {\n  .gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .box {\n    height: 38px;\n    width: 38px;\n    border: 1px solid black;\n  }\n}\n@media only screen and (max-width: 550px) {\n  .gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .box {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/Controller.js":
/*!***************************!*\
  !*** ./src/Controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTurn": () => (/* binding */ checkTurn),
/* harmony export */   "checkUpdateGameBoard": () => (/* binding */ checkUpdateGameBoard),
/* harmony export */   "checkWinner": () => (/* binding */ checkWinner),
/* harmony export */   "dragShip": () => (/* binding */ dragShip),
/* harmony export */   "dragShipEnd": () => (/* binding */ dragShipEnd),
/* harmony export */   "draggingfunction": () => (/* binding */ draggingfunction),
/* harmony export */   "evalulatePlayerClick": () => (/* binding */ evalulatePlayerClick),
/* harmony export */   "makeAGrid": () => (/* binding */ makeAGrid),
/* harmony export */   "setPreliminaryBoard": () => (/* binding */ setPreliminaryBoard),
/* harmony export */   "updateBoardGameLive": () => (/* binding */ updateBoardGameLive),
/* harmony export */   "updateDisplay": () => (/* binding */ updateDisplay)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function checkWinner() {
  if (_index__WEBPACK_IMPORTED_MODULE_0__.player2.board.checkAllSunk()) {
    _index__WEBPACK_IMPORTED_MODULE_0__.player1.won();
  }
  if (_index__WEBPACK_IMPORTED_MODULE_0__.player1.board.checkAllSunk()) {
    _index__WEBPACK_IMPORTED_MODULE_0__.player2.won();
  }
}

// for after game started
function evalulatePlayerClick(e) {
  e.preventDefault();
  if (_index__WEBPACK_IMPORTED_MODULE_0__.player1.isWinner() || _index__WEBPACK_IMPORTED_MODULE_0__.player2.isWinner()) {
    return;
  }
  if (
    _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.turn + _index__WEBPACK_IMPORTED_MODULE_0__.player2.board.turn == 0 &&
    e.target.parentElement.id === "playeronegrid"
  ) {
    //game has not started. can move ships....
    let coord = e.target.id.split("");
    if (_index__WEBPACK_IMPORTED_MODULE_0__.player1.board.checkIsShip(_index__WEBPACK_IMPORTED_MODULE_0__.player1.board.location(coord[0], coord[1]))) {
      // var data = e.dataTransfer.getData(e.target);
    }

    return;
  }

  if (
    _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.turn == _index__WEBPACK_IMPORTED_MODULE_0__.player2.board.turn &&
    e.target.parentElement.id === "playertwogrid"
  ) {
    // player 1 turn
    _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.turn++;
    let coord = e.target.id.split("");
    if (_index__WEBPACK_IMPORTED_MODULE_0__.player2.board.hitShip(coord[0], coord[1]) == undefined) {
      _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.turn--;
      return;
    }
    updateBoardGameLive();
    checkWinner();
  } else {
    console.log("ALL UNITS MUST ATTACK ENEMY.");
    return;
  }
  _index__WEBPACK_IMPORTED_MODULE_0__.player2.board.turn++;
  _index__WEBPACK_IMPORTED_MODULE_0__.player1.shootCoordinates(0, 0, _index__WEBPACK_IMPORTED_MODULE_0__.player2.isAI);
  updateBoardGameLive();
  checkTurn();

  checkWinner();
}
function checkTurn() {
  const turnDiv = document.querySelector(".turn");
  if (_index__WEBPACK_IMPORTED_MODULE_0__.player1.board.turn == _index__WEBPACK_IMPORTED_MODULE_0__.player2.board.turn) {
    turnDiv.textContent = "PLAYER ONE TURN ";
  }
  if (_index__WEBPACK_IMPORTED_MODULE_0__.player1.board.turn > _index__WEBPACK_IMPORTED_MODULE_0__.player2.board.turn) {
    turnDiv.textContent = "PLAYER TWO TURN";
  }
}

function updateDisplay() {
  const box = document.querySelector("#playeroneDisplay");
  _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.shipsArray.forEach((ship) => {
    const coord = ship.getStartCoordinates();
    const shipLength = ship.getShip().length;
    let number = "" + coord[0] + coord[1];
    // if (ship.getShip() === element.ship.getShip()) {
    let translateXAmount = 36;
    let translateFix = 1;
    switch (shipLength) {
      case 2:
        translateFix = 1.6;
        break;
      case 4:
        translateFix = 0.88;
        break;
      case 5:
        translateFix = 0.75;
        break;
      default:
        translateFix = 1;
    }
    switch (shipLength) {
      case 2:
        translateXAmount = 28;
        break;
      case 5:
        translateXAmount = 38;
        break;
    }

    box.childNodes[+number].classList.toggle(`battleship${shipLength}`);
    if (!ship.isShipHorizontal()) {
      // box.childNodes[+number].classList.toggle(`horizontal`);
      box.childNodes[
        +number
      ].style.transform = `scale(${shipLength}) translateX(${translateXAmount}%) translateY(${
        translateXAmount * translateFix
      }%)`;
    } else {
      // box.childNodes[+number].classList.toggle(`vertical`);
      box.childNodes[
        +number
      ].style.transform = `rotate(90deg) scale(${shipLength}) translateX(${translateXAmount}%) translateY(${
        translateXAmount * translateFix
      }%) `;
    }
    // }
  });
}
//       }
//     });
//   });
// }
// WHEN GAME STARTS
function updateBoardGameLive() {
  _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard().forEach((element) => {
    element.forEach((element) => {
      let num = 0;
      let number = "" + element.x + element.y;
      const box = document.querySelector("#playeronegrid");
      box.childNodes[+number].textContent = "";
      if (element.hit == false)
        box.childNodes[+number].classList.toggle("miss");
      else if (!element.ship) box.childNodes[+number].textContent = "";
      else if (element.ship.isSunk())
        box.childNodes[+number].classList.toggle("sunk");
      else if (element.hit == true)
        box.childNodes[+number].classList.toggle("hit");
      else if (element.ship) {
        _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.shipsArray.forEach((ship) => {
          if (ship.getShip() === element.ship.getShip()) {
            box.childNodes[+number].classList.add(`ship${num}`);
          }
          num++;
        });
      }
    });
  });
  _index__WEBPACK_IMPORTED_MODULE_0__.player2.board.getBoard().forEach((element) => {
    element.forEach((element) => {
      let number = "" + element.x + element.y;
      const box = document.querySelector("#playertwogrid");
      box.childNodes[+number].textContent = "";

      if (element.hit == false) box.childNodes[+number].classList.add("miss");
      else if (!element.ship) box.childNodes[+number].textContent = "";
      else if (element.ship.isSunk()) {
        box.childNodes[+number].classList.remove("hit");
        box.childNodes[+number].classList.add("sunk");
      } else if (element.hit == true)
        box.childNodes[+number].classList.add("hit");
    });
  });
}

// BEFORE GAME STARTS

// default grid for gameboard
function makeAGrid(parentDiv) {
  parentDiv.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    for (let o = 0; o < 10; o++) {
      const boxGrid = document.createElement("div");

      boxGrid.classList.add("box");
      boxGrid.setAttribute("id", `${i}${o}`);
      if (_index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard()[i][o].ship) {
        boxGrid.draggable = true;
        boxGrid.addEventListener("dragstart", dragShip);
      }
      boxGrid.addEventListener("dragover", draggingfunction);
      // boxGrid.addEventListener('dropend',dragShipEnd);
      boxGrid.addEventListener("drop", dragShipEnd);
      boxGrid.addEventListener("dblclick", rotateShip);
      parentDiv.appendChild(boxGrid);
    }
  }
}

function checkTargetForShips(shipCoord, newPositionCoord, add) {
  // checks based on rotate
  let newPositionHolder = newPositionCoord.join("");
  // let add = nextShipCoordHelper(shipCoord, true);
  for (let i = 0; i < shipCoord.length; i++) {
    //check target has no ship
    let newShipCoordXY = getNewShipCoordinate(newPositionHolder * 1);

    if (
      _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship !=
      undefined
    )
      return false;

    newPositionHolder = newPositionHolder * 1 + add;
    i++;
  }
  return true;
}
function rotateShip(e) {
  const shipCoords = getShipCoordsAll(
    document.querySelectorAll(`.${e.target.classList[2]}`)
  );
  let add = nextShipCoordHelper(shipCoords, true);
  const coordinate = e.target.id.split("");
  let shipInstance =
    _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard()[+coordinate[0]][+coordinate[1]].ship;

  const newPositionCoord = [
    Math.round(Math.random() * 9),
    Math.round(Math.random() * 9),
  ];
  while (
    checkNewCoordinatePossible(
      _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard()[+shipCoords[0]][+shipCoords[1]].ship,
      shipCoords,
      newPositionCoord,
      true
    ) === false ||
    checkTargetForShips(shipCoords, newPositionCoord, add) === false
  ) {
    newPositionCoord.splice(
      0,
      Infinity,
      ...[Math.round(Math.random() * 9), Math.round(Math.random() * 9)]
    );
  }
  removeandAddNewShip(shipCoords, newPositionCoord, add, shipInstance, true);
  // move to new Position;
  makeAGrid(_index__WEBPACK_IMPORTED_MODULE_0__.player1Board);
  makeAGrid(_index__WEBPACK_IMPORTED_MODULE_0__.player1Display);
  setPreliminaryBoard();
}

function setPreliminaryBoard() {
  const box = document.querySelector("#playeronegrid");

  console.log(_index__WEBPACK_IMPORTED_MODULE_0__.player1.board.prettyPrint());
  _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard().forEach((element) => {
    element.forEach((element) => {
      let number = "" + element.x + element.y;
      if (!element.ship) {
        return box.childNodes[+number].classList.remove(`ship`);
      }
      if (element.ship.getShip()) {
        let num = 0;

        _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.shipsArray.forEach((ship) => {
          if (ship.getShip() === element.ship.getShip()) {
            box.childNodes[+number].classList.add(`ship`);
            box.childNodes[+number].classList.add(`ship${num}`);
          }
          num++;
        });
      }
    });
  });
}

// before game starts
function dragShip(e) {
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
function draggingfunction(e) {
  e.preventDefault();
}
function getShipCoordsAll(sourceShipNameArray) {
  const shipCoords = [];
  sourceShipNameArray.forEach((element) => {
    let xy = element.id.split("");
    shipCoords.push(+xy[0]);
    shipCoords.push(+xy[1]);
  });
  return shipCoords;
}
function dragShipEnd(e) {
  e.preventDefault();
  const userClickedCoordinate = e.dataTransfer.getData("text");
  let sourceShipCoord = document.getElementById(`${userClickedCoordinate}`);
  let sourceShipNameArray = document.querySelectorAll(
    `.${sourceShipCoord.classList[2]}`
  );
  const shipCoords = getShipCoordsAll(sourceShipNameArray);
  let coordinate = userClickedCoordinate.split("");

  let shipInstance =
    _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard()[+coordinate[0]][+coordinate[1]].ship;

  // player1.board.getBoard()
  // console.log(sourceShip);

  let targetID = e.target.id;

  checkUpdateGameBoard(
    shipCoords,
    shipInstance,
    userClickedCoordinate,
    targetID
  );

  makeAGrid(_index__WEBPACK_IMPORTED_MODULE_0__.player1Board);
  makeAGrid(_index__WEBPACK_IMPORTED_MODULE_0__.player1Display);
  setPreliminaryBoard();
}
function nextShipCoordHelper(shipCoord, rotate) {
  let add;
  if (rotate) {
    !_index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard()
      [+shipCoord[0]][+shipCoord[1]].ship.isShipHorizontal()
      ? (add = 10)
      : (add = 1);
  } else {
    !_index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard()
      [+shipCoord[0]][+shipCoord[1]].ship.isShipHorizontal()
      ? (add = 1)
      : (add = 10);
  }

  return add;
}
function checkUpdateGameBoard(shipCoord, shipInstance, sourceData, targetID) {
  let add;
  let newPositionCoord;
  let newPositionHolder;
  // coordinates add to determine current ship's next coordinates
  add = nextShipCoordHelper(shipCoord);

  newPositionCoord = findStartPosition(
    add,
    shipCoord,
    findCoordinateDifference(shipCoord, sourceData),
    targetID
  );

  if (
    checkNewCoordinatePossible(
      _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard()[+shipCoord[0]][+shipCoord[1]].ship,
      shipCoord,
      newPositionCoord
    ) === false
  ) {
    return;
  }
  newPositionHolder = newPositionCoord;

  // iterates through ship coordinates.

  for (let i = 0; i < shipCoord.length; i++) {
    //check target has no ship
    let newShipCoordXY = getNewShipCoordinate(newPositionHolder);
    if (
      _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship &&
      _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship !=
        shipInstance
    )
      return;

    newPositionHolder += add;
    i++;
  }
  removeandAddNewShip(shipCoord, newPositionCoord, add, shipInstance);
}

function removeandAddNewShip(
  shipCoord,
  newPositionCoord,
  add,
  shipInstance,
  rotate
) {
  if (Array.isArray(newPositionCoord)) {
    newPositionCoord = `${newPositionCoord[0]}${newPositionCoord[1]}` * 1;
  }
  console.log(shipCoord, newPositionCoord, add, shipInstance);
  for (let i = 0; i < shipCoord.length; i++) {
    //remove current ship
    _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard()[+shipCoord[i]][+shipCoord[i + 1]].ship = undefined;
    i++;
  }
  for (let i = 0; i < shipCoord.length; i++) {
    let newShipCoordXY = getNewShipCoordinate(newPositionCoord);

    if (i === 0) {
      shipInstance.setStartCoordinates(+newShipCoordXY[0], +newShipCoordXY[1]);
    }

    // console.log(+newShipCoordXY[0], +newShipCoordXY[1]);
    _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship =
      shipInstance;
    if (rotate && i === shipCoord.length - 2) {
      _index__WEBPACK_IMPORTED_MODULE_0__.player1.board.getBoard()
        [+newShipCoordXY[0]][+newShipCoordXY[1]].ship.updateShipDirection();
    }
    i++;
    newPositionCoord += add;
  }
}

function checkNewCoordinatePossible(
  playerShip,
  shipCoord,
  newPositionCoord,
  rotate
) {
  if (Array.isArray(newPositionCoord)) {
    newPositionCoord = newPositionCoord.join("") * 1;
  }
  if (rotate) {
    console.log(newPositionCoord, shipCoord.length / 2);
    if (playerShip.isShipHorizontal()) {
      if ((newPositionCoord % 10) + shipCoord.length / 2 > 10) return false;
    } else {
      if (Math.round(newPositionCoord / 10 - 0.49) + shipCoord.length / 2 > 10)
        return false;
    }
  }
  if (!playerShip.isShipHorizontal()) {
    if ((newPositionCoord % 10) + shipCoord.length / 2 > 10) return false;
  } else {
    if (Math.round(newPositionCoord / 10 - 0.49) + shipCoord.length / 2 > 10)
      return false;
  }
}

// find start*(aka end) edge of ship (bottom or right edge)
function findCoordinateDifference(shipCoord, sourceData) {
  const answer =
    shipCoord[shipCoord.length - 2] * 10 +
    shipCoord[shipCoord.length - 1] -
    sourceData;

  return answer;
}
function findStartPosition(add, shipCoord, difference, targetID) {
  return +targetID + difference - (shipCoord.length / 2 - 1) * add;
}

function getNewShipCoordinate(newPositionCoord) {
  if (newPositionCoord <= 9) {
    return `0${newPositionCoord}`.split("");
  } else return `${newPositionCoord}`.split("");
}




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ship = __webpack_require__(/*! ./ship */ "./src/ship.js");
// const ship = { length, sunk,}
const gameboard = () => {
  let board = [[]];
  createBoard();
  let turn = 0;
  let shipsArray = [];

  function getBoard() {
    return board;
  }
  function createBoard() {
    for (let i = 0; i < 10; i++) {
      board.push([]);
      for (let o = 0; o < 10; o++) {
        board[i].push(createCoordinateObject(i, o));
      }
    }
  }

  function createCoordinateObject(x, y) {
    let coordinate = {
      x: x,
      y: y,
      ship: undefined,
      hit: null,
    };
    return coordinate;
  }

  const location = (num1, num2) => {
    return board[num1][num2];
  };

  function fillBoardRandom(battleship) {
    shipsArray.push(battleship);
    let length = battleship.getShip().length;

    let x = Math.round(Math.random() * 9);
    let y = Math.round(Math.random() * 9);
    while (!checkNoShip(battleship.isShipHorizontal(), length, x, y)) {
      x = Math.round(Math.random() * 9);
      y = Math.round(Math.random() * 9);
    }
    battleship.setStartCoordinates(x, y);
    if (battleship.isShipHorizontal()) {
      for (let i = 0; i < length; i++) {
        board[x + i][y].ship = battleship;
      }
    } else {
      for (let i = 0; i < length; i++) {
        board[x][y + i].ship = battleship;
      }
    }
  }
  function checkNoShip(isHorizontal, length, x, y) {
    if (isHorizontal) {
      if (x < 0 || x + length > 9 || y < 0 || y > 9) return false;
      for (let i = 0; i < length; i++) {
        if (board[x + i][y].ship != undefined) return false;
      }
    } else {
      if (x < 0 || x > 9 || y < 0 || y + length > 9) return false;
      for (let i = 0; i < length; i++) {
        if (board[x][y + i].ship != undefined) return false;
      }
    }
    return true;
  }
  function addShip(num1, num2, size = 2, isHorizontal = true) {
    const battleship = ship(size);

    if (isHorizontal) {
      for (let i = 0; i < size; i++) {
        board[num1][num2 + i].ship = battleship;
      }
    } else {
      for (let i = 0; i < size; i++) {
        board[num1 + i][num1].ship = battleship;
      }
    }

    prettyPrint();
  }

  function prettyPrint() {
    let string = "";
    for (let i = 0; i < 10; i++) {
      string += "\n";
      for (let o = 0; o < 10; o++) {
        if (board[i][o].hit == false) string += "[-]";
        else if (!board[i][o].ship) string += "[ ]";
        else if (board[i][o].ship.isSunk()) string += "[X]";
        else if (board[i][o].ship) string += "[S]";
      }
    }
    return string;
  }

  function hitShip(num1, num2) {
    if (num1 < 0 || num2 < 0 || num1 > 9 || num2 > 9) {
      return undefined;
    }
    if (board[num1][num2].hit !== null) {
      //can't hit something already hit before
      return undefined;
    }

    if (board[num1][num2].ship) {
      //if a ship
      board[num1][num2].ship.hit();
      board[num1][num2].ship.isSunk();
      board[num1][num2].hit = true;
      // see if all ships are sunk
      prettyPrint();
      return true;
    } else {
      //if a miss
      board[num1][num2].hit = false;
      prettyPrint();
      return false;
    }
  }

  function checkAllSunk() {
    let allSunk = board.every((coord) =>
      coord.every((element) => checkShip(element))
    );
    // && coord.ship.sunk == false
    if (allSunk) {
      return true;
    } else return false;
  }
  function checkShip(coord) {
    if (coord.ship == undefined) return true;
    else if (coord.ship.getShip().sunk) return true;
    else return false;
  }

  function checkIsShip(coord) {
    if (coord.ship == undefined) return false;
    else if (coord.ship) return true; //lol redudnat?
    else return false;
  }

  return {
    turn,
    getBoard,
    location,
    addShip,
    hitShip,
    prettyPrint,
    checkAllSunk,
    checkIsShip,
    fillBoardRandom,
    shipsArray,
  };
};

module.exports = gameboard;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player1": () => (/* binding */ player1),
/* harmony export */   "player1Board": () => (/* binding */ player1Board),
/* harmony export */   "player1Display": () => (/* binding */ player1Display),
/* harmony export */   "player2": () => (/* binding */ player2),
/* harmony export */   "player2Board": () => (/* binding */ player2Board)
/* harmony export */ });
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ "./src/Controller.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const player = __webpack_require__(/*! ./player */ "./src/player.js");


let isAi = true;

let player1 = player("Player1", !isAi, 1);
let player2 = player("AI", isAi, 2);

const newGameDiv = document.querySelector(".restart");
const startGameDiv = document.querySelector(".start");

// button to start game
newGameDiv.addEventListener("click", playGame);
startGameDiv.addEventListener("click", addEventListenerGameStart);

const player1Board = document.querySelector("#playeronegrid");
const player1Display = document.querySelector("#playeroneDisplay");
const player2Board = document.querySelector("#playertwogrid");

playGame();

// make a board on website
function playGame() {
  startGameDiv.classList.remove("hidden");
  player1 = player("Player1", !isAi, 1);
  player2 = player("AI", isAi, 2);
  console.log("new game");

  (0,_Controller__WEBPACK_IMPORTED_MODULE_0__.makeAGrid)(player1Board);
  (0,_Controller__WEBPACK_IMPORTED_MODULE_0__.makeAGrid)(player1Display);
  (0,_Controller__WEBPACK_IMPORTED_MODULE_0__.makeAGrid)(player2Board);

  (0,_Controller__WEBPACK_IMPORTED_MODULE_0__.setPreliminaryBoard)();
}

// playGame();  //will need to change for when there is a user interface

function addEventListenerGameStart(e) {
  e.preventDefault();
  (0,_Controller__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)();
  (0,_Controller__WEBPACK_IMPORTED_MODULE_0__.checkTurn)();

  console.log("addListenrs");

  startGameDiv.classList.toggle("hidden");
  player2.board.getBoard().forEach((element) => {
    const box = document.querySelector("#playertwogrid");

    element.forEach((element) => {
      let number = "" + element.x + element.y;
      box.childNodes[+number].addEventListener("click", _Controller__WEBPACK_IMPORTED_MODULE_0__.evalulatePlayerClick);
      // box.childNodes[+number].removeEventListener("dragstart", dragShip);
      // box.childNodes[+number].removeEventListener("dragover", draggingfunction);
      // box.childNodes[+number].removeEventListener("drop", dragShipEnd);
    });
  });

  player1.board.getBoard().forEach((element) => {
    const box = document.querySelector("#playeronegrid");

    element.forEach((element) => {
      let number = "" + element.x + element.y;
      box.childNodes[+number].removeEventListener("dragstart", _Controller__WEBPACK_IMPORTED_MODULE_0__.dragShip);
      box.childNodes[+number].classList.remove("ship");
      box.childNodes[+number].removeEventListener("dragover", _Controller__WEBPACK_IMPORTED_MODULE_0__.draggingfunction);
      box.childNodes[+number].removeEventListener("drop", _Controller__WEBPACK_IMPORTED_MODULE_0__.dragShipEnd);
    });
  });
}

// }


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
const ship = __webpack_require__(/*! ./ship */ "./src/ship.js");

const player = (name, isAInt, number = 1) => {
  const isAI = isAInt;
  const playerName = name;
  const playerNumber = number;
  const board = gameboard();
  const ships = [];
  const shipCoordinates = [];
  const possibleMoves = [];

  let winner = false;
  for (let i = 0; i < 7; i++) {
    let num;
    if (i <= 2) num = 2;
    else if (i <= 4) num = 3;
    else if (i <= 5) num = 4;
    else if (i < 7) num = 5;
    const ship1 = ship(num);
    ships.push(ship1);
  }

  fillAllShips();

  function getAllShips() {
    return ships;
  }

  function fillAllShips() {
    ships.forEach((element) => {
      board.fillBoardRandom(element);
    });
    board.prettyPrint();
  }

  function shootCoordinates(x = 0, y = 0, isRobot) {
    if (isRobot) {
      x = Math.round(Math.random() * 9);
      y = Math.round(Math.random() * 9);

      if (shipCoordinates.length >= 1 || possibleMoves.length >= 1) {
        if (shipCoordinates.length >= 1) {
          x = shipCoordinates.splice(0, 1)[0];
          y = shipCoordinates.splice(0, 1)[0];
          possibleMoves.push(x + 1, y);
          possibleMoves.push(x - 1, y);
          possibleMoves.push(x, y - 1);
          possibleMoves.push(x, y + 1);
        }
        let coord = possibleMoves.splice(0, 2);
        let possibleMoveCoordinate = board.hitShip(coord[0], coord[1]);
        while (
          possibleMoves.length != 0 &&
          possibleMoveCoordinate == undefined
        ) {
          coord = possibleMoves.splice(0, 2);
          possibleMoveCoordinate = board.hitShip(coord[0], coord[1]);
        }
        if (possibleMoveCoordinate) {
          shipCoordinates.push(coord[0]);
          shipCoordinates.push(coord[1]);
        }
        return;
      }
      let movePossible = board.hitShip(x, y);

      while (movePossible === undefined) {
        x = Math.round(Math.random() * 9);
        y = Math.round(Math.random() * 9);
        movePossible = board.hitShip(x, y);
      }
      if (movePossible == true) {
        shipCoordinates.push(x);
        shipCoordinates.push(y);
      }
    } else {
      board.hitShip(x, y);
    }
  }
  function isWinner() {
    return winner;
  }
  function won() {
    const turnDiv = document.querySelector(".turn");
    turnDiv.textContent = `${playerName} WON`;
    winner = true;
  }
  function getName() {
    return name;
  }

  return {
    getAllShips,
    board,
    shootCoordinates,
    playerNumber,
    getName,
    isAI,
    isWinner,
    won,
  };
};

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
    horizontal: undefined,
  };

  isHorizontal = Math.round(Math.random());
  ship.horizontal = isHorizontal == 1;

  const hit = () => {
    ship.hits += 1;
    return ship.hits;
  };
  function isShipHorizontal() {
    return ship.horizontal;
  }
  function updateShipDirection() {
    ship.horizontal = !ship.horizontal;
    console.log(ship.horizontal);
  }
  const getShip = () => {
    return ship;
  };

  const isSunk = () => {
    if (ship.hits == ship.length) ship.sunk = true;
    return ship.sunk;
  };
  const setStartCoordinates = (x, y) => {
    ship.coordinate = [x, y];
  };

  const getStartCoordinates = () => {
    return ship.coordinate;
  };
  return {
    Ship,
    getShip,
    hit,
    isSunk,
    isShipHorizontal,
    setStartCoordinates,
    getStartCoordinates,
    updateShipDirection,
  };
};

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

/***/ }),

/***/ "./src/asset/carrier.svg":
/*!*******************************!*\
  !*** ./src/asset/carrier.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1fb05701b8ed12a863f4.svg";

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXQvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0L2NhcnJpZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvUmVnXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b0JvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvUmVnXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcXG4gIGhlaWdodDogNzBweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLyogbWFraW5nIGEgYm9hcmQgKi9cXG4jcGxheWVyb25lZ3JpZCxcXG4jcGxheWVydHdvZ3JpZCxcXG4jcGxheWVyb25lRGlzcGxheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuI3BsYXllcm9uZURpc3BsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG59XFxuI3BsYXllcm9uZURpc3BsYXkgPiAuYm94IHtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi5ib3gge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG5cXG4udHVybiB7XFxuICBmb250LWZhbWlseTogUm9ib3RvQm9sZCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMjUwLCAyNTUpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcDEsXFxuLmJhdHRsZXNoaXAyLFxcbi5iYXR0bGVzaGlwMyxcXG4uYmF0dGxlc2hpcDQsXFxuLmJhdHRsZXNoaXA1LFxcbi5iYXR0bGVzaGlwNiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcblxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogZWFjaCBzaGlwICovXFxuLmhpdCxcXG4uc3VuayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDhweCBzb2xpZCByZWQ7XFxuXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDIzNywgMjQ3KTtcXG4gIG9wYWNpdHk6IDkwJTtcXG59XFxuLnN1bmsge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLnN1bms6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiWFxcXCI7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBCVVRUT05TICovXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuLnJlc3RhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDNweDtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5yZXN0YXJ0OmFjdGl2ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxufVxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN0YXJ0IHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDI0MiwgMjU1KTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gIH1cXG5cXG4gIC5ib3gge1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIHdpZHRoOiAzOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gIH1cXG5cXG4gIC5ib3gge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBc0M7QUFDeEM7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBbUM7QUFDckM7O0FBRUE7RUFDRSxzREFBc0Q7RUFDdEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBLG1CQUFtQjtBQUNuQjs7O0VBR0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBOzs7Ozs7RUFNRSx5REFBNEM7O0VBRTVDLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBLGNBQWM7QUFDZDs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixxQkFBcUI7O0VBRXJCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7O0VBRVgsa0JBQWtCO0VBQ2xCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtFQUN6QjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7RUFDekI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvUmVnXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0L1JvYm90by1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvQm9sZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldC9Sb2JvdG8tQm9sZC50dGZcXFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1JlZ1xcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi8qIG1ha2luZyBhIGJvYXJkICovXFxuI3BsYXllcm9uZWdyaWQsXFxuI3BsYXllcnR3b2dyaWQsXFxuI3BsYXllcm9uZURpc3BsYXkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcbiNwbGF5ZXJvbmVEaXNwbGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxufVxcbiNwbGF5ZXJvbmVEaXNwbGF5ID4gLmJveCB7XFxuICBwYWRkaW5nOiAxcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uYm94IHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuXFxuLnR1cm4ge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDI1MCwgMjU1KTtcXG59XFxuXFxuLmJhdHRsZXNoaXAxLFxcbi5iYXR0bGVzaGlwMixcXG4uYmF0dGxlc2hpcDMsXFxuLmJhdHRsZXNoaXA0LFxcbi5iYXR0bGVzaGlwNSxcXG4uYmF0dGxlc2hpcDYge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0L2NhcnJpZXIuc3ZnXFxcIik7XFxuXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBlYWNoIHNoaXAgKi9cXG4uaGl0LFxcbi5zdW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaXQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogOHB4IHNvbGlkIHJlZDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMjM3LCAyNDcpO1xcbiAgb3BhY2l0eTogOTAlO1xcbn1cXG4uc3VuayB7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4uc3Vuazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJYXFxcIjtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi8qIEJVVFRPTlMgKi9cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG4ucmVzdGFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogM3B4O1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnJlc3RhcnQ6YWN0aXZlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjQyLCAyNTUpO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgfVxcblxcbiAgLmJveCB7XFxuICAgIGhlaWdodDogMzhweDtcXG4gICAgd2lkdGg6IDM4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAuZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgfVxcblxcbiAgLmJveCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgcGxheWVyMixcbiAgcGxheWVyMSxcbiAgcGxheWVyMUJvYXJkLFxuICBwbGF5ZXIxRGlzcGxheSxcbiAgcGxheWVyMkJvYXJkLFxufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5mdW5jdGlvbiBjaGVja1dpbm5lcigpIHtcbiAgaWYgKHBsYXllcjIuYm9hcmQuY2hlY2tBbGxTdW5rKCkpIHtcbiAgICBwbGF5ZXIxLndvbigpO1xuICB9XG4gIGlmIChwbGF5ZXIxLmJvYXJkLmNoZWNrQWxsU3VuaygpKSB7XG4gICAgcGxheWVyMi53b24oKTtcbiAgfVxufVxuXG4vLyBmb3IgYWZ0ZXIgZ2FtZSBzdGFydGVkXG5mdW5jdGlvbiBldmFsdWxhdGVQbGF5ZXJDbGljayhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKHBsYXllcjEuaXNXaW5uZXIoKSB8fCBwbGF5ZXIyLmlzV2lubmVyKCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKFxuICAgIHBsYXllcjEuYm9hcmQudHVybiArIHBsYXllcjIuYm9hcmQudHVybiA9PSAwICYmXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCA9PT0gXCJwbGF5ZXJvbmVncmlkXCJcbiAgKSB7XG4gICAgLy9nYW1lIGhhcyBub3Qgc3RhcnRlZC4gY2FuIG1vdmUgc2hpcHMuLi4uXG4gICAgbGV0IGNvb3JkID0gZS50YXJnZXQuaWQuc3BsaXQoXCJcIik7XG4gICAgaWYgKHBsYXllcjEuYm9hcmQuY2hlY2tJc1NoaXAocGxheWVyMS5ib2FyZC5sb2NhdGlvbihjb29yZFswXSwgY29vcmRbMV0pKSkge1xuICAgICAgLy8gdmFyIGRhdGEgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKGUudGFyZ2V0KTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoXG4gICAgcGxheWVyMS5ib2FyZC50dXJuID09IHBsYXllcjIuYm9hcmQudHVybiAmJlxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQgPT09IFwicGxheWVydHdvZ3JpZFwiXG4gICkge1xuICAgIC8vIHBsYXllciAxIHR1cm5cbiAgICBwbGF5ZXIxLmJvYXJkLnR1cm4rKztcbiAgICBsZXQgY29vcmQgPSBlLnRhcmdldC5pZC5zcGxpdChcIlwiKTtcbiAgICBpZiAocGxheWVyMi5ib2FyZC5oaXRTaGlwKGNvb3JkWzBdLCBjb29yZFsxXSkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwbGF5ZXIxLmJvYXJkLnR1cm4tLTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdXBkYXRlQm9hcmRHYW1lTGl2ZSgpO1xuICAgIGNoZWNrV2lubmVyKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJBTEwgVU5JVFMgTVVTVCBBVFRBQ0sgRU5FTVkuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBwbGF5ZXIyLmJvYXJkLnR1cm4rKztcbiAgcGxheWVyMS5zaG9vdENvb3JkaW5hdGVzKDAsIDAsIHBsYXllcjIuaXNBSSk7XG4gIHVwZGF0ZUJvYXJkR2FtZUxpdmUoKTtcbiAgY2hlY2tUdXJuKCk7XG5cbiAgY2hlY2tXaW5uZXIoKTtcbn1cbmZ1bmN0aW9uIGNoZWNrVHVybigpIHtcbiAgY29uc3QgdHVybkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVyblwiKTtcbiAgaWYgKHBsYXllcjEuYm9hcmQudHVybiA9PSBwbGF5ZXIyLmJvYXJkLnR1cm4pIHtcbiAgICB0dXJuRGl2LnRleHRDb250ZW50ID0gXCJQTEFZRVIgT05FIFRVUk4gXCI7XG4gIH1cbiAgaWYgKHBsYXllcjEuYm9hcmQudHVybiA+IHBsYXllcjIuYm9hcmQudHVybikge1xuICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSBcIlBMQVlFUiBUV08gVFVSTlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyb25lRGlzcGxheVwiKTtcbiAgcGxheWVyMS5ib2FyZC5zaGlwc0FycmF5LmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCBjb29yZCA9IHNoaXAuZ2V0U3RhcnRDb29yZGluYXRlcygpO1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmdldFNoaXAoKS5sZW5ndGg7XG4gICAgbGV0IG51bWJlciA9IFwiXCIgKyBjb29yZFswXSArIGNvb3JkWzFdO1xuICAgIC8vIGlmIChzaGlwLmdldFNoaXAoKSA9PT0gZWxlbWVudC5zaGlwLmdldFNoaXAoKSkge1xuICAgIGxldCB0cmFuc2xhdGVYQW1vdW50ID0gMzY7XG4gICAgbGV0IHRyYW5zbGF0ZUZpeCA9IDE7XG4gICAgc3dpdGNoIChzaGlwTGVuZ3RoKSB7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRyYW5zbGF0ZUZpeCA9IDEuNjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHRyYW5zbGF0ZUZpeCA9IDAuODg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICB0cmFuc2xhdGVGaXggPSAwLjc1O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRyYW5zbGF0ZUZpeCA9IDE7XG4gICAgfVxuICAgIHN3aXRjaCAoc2hpcExlbmd0aCkge1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0cmFuc2xhdGVYQW1vdW50ID0gMjg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICB0cmFuc2xhdGVYQW1vdW50ID0gMzg7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC50b2dnbGUoYGJhdHRsZXNoaXAke3NoaXBMZW5ndGh9YCk7XG4gICAgaWYgKCFzaGlwLmlzU2hpcEhvcml6b250YWwoKSkge1xuICAgICAgLy8gYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnRvZ2dsZShgaG9yaXpvbnRhbGApO1xuICAgICAgYm94LmNoaWxkTm9kZXNbXG4gICAgICAgICtudW1iZXJcbiAgICAgIF0uc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c2hpcExlbmd0aH0pIHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYQW1vdW50fSUpIHRyYW5zbGF0ZVkoJHtcbiAgICAgICAgdHJhbnNsYXRlWEFtb3VudCAqIHRyYW5zbGF0ZUZpeFxuICAgICAgfSUpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnRvZ2dsZShgdmVydGljYWxgKTtcbiAgICAgIGJveC5jaGlsZE5vZGVzW1xuICAgICAgICArbnVtYmVyXG4gICAgICBdLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoOTBkZWcpIHNjYWxlKCR7c2hpcExlbmd0aH0pIHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYQW1vdW50fSUpIHRyYW5zbGF0ZVkoJHtcbiAgICAgICAgdHJhbnNsYXRlWEFtb3VudCAqIHRyYW5zbGF0ZUZpeFxuICAgICAgfSUpIGA7XG4gICAgfVxuICAgIC8vIH1cbiAgfSk7XG59XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfVxuLy8gV0hFTiBHQU1FIFNUQVJUU1xuZnVuY3Rpb24gdXBkYXRlQm9hcmRHYW1lTGl2ZSgpIHtcbiAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBudW0gPSAwO1xuICAgICAgbGV0IG51bWJlciA9IFwiXCIgKyBlbGVtZW50LnggKyBlbGVtZW50Lnk7XG4gICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcm9uZWdyaWRcIik7XG4gICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBpZiAoZWxlbWVudC5oaXQgPT0gZmFsc2UpXG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC50b2dnbGUoXCJtaXNzXCIpO1xuICAgICAgZWxzZSBpZiAoIWVsZW1lbnQuc2hpcCkgYm94LmNoaWxkTm9kZXNbK251bWJlcl0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgZWxzZSBpZiAoZWxlbWVudC5zaGlwLmlzU3VuaygpKVxuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QudG9nZ2xlKFwic3Vua1wiKTtcbiAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaGl0ID09IHRydWUpXG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC50b2dnbGUoXCJoaXRcIik7XG4gICAgICBlbHNlIGlmIChlbGVtZW50LnNoaXApIHtcbiAgICAgICAgcGxheWVyMS5ib2FyZC5zaGlwc0FycmF5LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICBpZiAoc2hpcC5nZXRTaGlwKCkgPT09IGVsZW1lbnQuc2hpcC5nZXRTaGlwKCkpIHtcbiAgICAgICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5hZGQoYHNoaXAke251bX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbnVtKys7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcGxheWVyMi5ib2FyZC5nZXRCb2FyZCgpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBudW1iZXIgPSBcIlwiICsgZWxlbWVudC54ICsgZWxlbWVudC55O1xuICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJ0d29ncmlkXCIpO1xuICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgICBpZiAoZWxlbWVudC5oaXQgPT0gZmFsc2UpIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgZWxzZSBpZiAoIWVsZW1lbnQuc2hpcCkgYm94LmNoaWxkTm9kZXNbK251bWJlcl0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgZWxzZSBpZiAoZWxlbWVudC5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5yZW1vdmUoXCJoaXRcIik7XG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmhpdCA9PSB0cnVlKVxuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gQkVGT1JFIEdBTUUgU1RBUlRTXG5cbi8vIGRlZmF1bHQgZ3JpZCBmb3IgZ2FtZWJvYXJkXG5mdW5jdGlvbiBtYWtlQUdyaWQocGFyZW50RGl2KSB7XG4gIHBhcmVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBvID0gMDsgbyA8IDEwOyBvKyspIHtcbiAgICAgIGNvbnN0IGJveEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBib3hHcmlkLmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG4gICAgICBib3hHcmlkLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2l9JHtvfWApO1xuICAgICAgaWYgKHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVtpXVtvXS5zaGlwKSB7XG4gICAgICAgIGJveEdyaWQuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgYm94R3JpZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdTaGlwKTtcbiAgICAgIH1cbiAgICAgIGJveEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdnaW5nZnVuY3Rpb24pO1xuICAgICAgLy8gYm94R3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wZW5kJyxkcmFnU2hpcEVuZCk7XG4gICAgICBib3hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyYWdTaGlwRW5kKTtcbiAgICAgIGJveEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIHJvdGF0ZVNoaXApO1xuICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGJveEdyaWQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1RhcmdldEZvclNoaXBzKHNoaXBDb29yZCwgbmV3UG9zaXRpb25Db29yZCwgYWRkKSB7XG4gIC8vIGNoZWNrcyBiYXNlZCBvbiByb3RhdGVcbiAgbGV0IG5ld1Bvc2l0aW9uSG9sZGVyID0gbmV3UG9zaXRpb25Db29yZC5qb2luKFwiXCIpO1xuICAvLyBsZXQgYWRkID0gbmV4dFNoaXBDb29yZEhlbHBlcihzaGlwQ29vcmQsIHRydWUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb29yZC5sZW5ndGg7IGkrKykge1xuICAgIC8vY2hlY2sgdGFyZ2V0IGhhcyBubyBzaGlwXG4gICAgbGV0IG5ld1NoaXBDb29yZFhZID0gZ2V0TmV3U2hpcENvb3JkaW5hdGUobmV3UG9zaXRpb25Ib2xkZXIgKiAxKTtcblxuICAgIGlmIChcbiAgICAgIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVsrbmV3U2hpcENvb3JkWFlbMF1dWytuZXdTaGlwQ29vcmRYWVsxXV0uc2hpcCAhPVxuICAgICAgdW5kZWZpbmVkXG4gICAgKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgbmV3UG9zaXRpb25Ib2xkZXIgPSBuZXdQb3NpdGlvbkhvbGRlciAqIDEgKyBhZGQ7XG4gICAgaSsrO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gcm90YXRlU2hpcChlKSB7XG4gIGNvbnN0IHNoaXBDb29yZHMgPSBnZXRTaGlwQ29vcmRzQWxsKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2UudGFyZ2V0LmNsYXNzTGlzdFsyXX1gKVxuICApO1xuICBsZXQgYWRkID0gbmV4dFNoaXBDb29yZEhlbHBlcihzaGlwQ29vcmRzLCB0cnVlKTtcbiAgY29uc3QgY29vcmRpbmF0ZSA9IGUudGFyZ2V0LmlkLnNwbGl0KFwiXCIpO1xuICBsZXQgc2hpcEluc3RhbmNlID1cbiAgICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK2Nvb3JkaW5hdGVbMF1dWytjb29yZGluYXRlWzFdXS5zaGlwO1xuXG4gIGNvbnN0IG5ld1Bvc2l0aW9uQ29vcmQgPSBbXG4gICAgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSksXG4gICAgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSksXG4gIF07XG4gIHdoaWxlIChcbiAgICBjaGVja05ld0Nvb3JkaW5hdGVQb3NzaWJsZShcbiAgICAgIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVsrc2hpcENvb3Jkc1swXV1bK3NoaXBDb29yZHNbMV1dLnNoaXAsXG4gICAgICBzaGlwQ29vcmRzLFxuICAgICAgbmV3UG9zaXRpb25Db29yZCxcbiAgICAgIHRydWVcbiAgICApID09PSBmYWxzZSB8fFxuICAgIGNoZWNrVGFyZ2V0Rm9yU2hpcHMoc2hpcENvb3JkcywgbmV3UG9zaXRpb25Db29yZCwgYWRkKSA9PT0gZmFsc2VcbiAgKSB7XG4gICAgbmV3UG9zaXRpb25Db29yZC5zcGxpY2UoXG4gICAgICAwLFxuICAgICAgSW5maW5pdHksXG4gICAgICAuLi5bTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSksIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpXVxuICAgICk7XG4gIH1cbiAgcmVtb3ZlYW5kQWRkTmV3U2hpcChzaGlwQ29vcmRzLCBuZXdQb3NpdGlvbkNvb3JkLCBhZGQsIHNoaXBJbnN0YW5jZSwgdHJ1ZSk7XG4gIC8vIG1vdmUgdG8gbmV3IFBvc2l0aW9uO1xuICBtYWtlQUdyaWQocGxheWVyMUJvYXJkKTtcbiAgbWFrZUFHcmlkKHBsYXllcjFEaXNwbGF5KTtcbiAgc2V0UHJlbGltaW5hcnlCb2FyZCgpO1xufVxuXG5mdW5jdGlvbiBzZXRQcmVsaW1pbmFyeUJvYXJkKCkge1xuICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcm9uZWdyaWRcIik7XG5cbiAgY29uc29sZS5sb2cocGxheWVyMS5ib2FyZC5wcmV0dHlQcmludCgpKTtcbiAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBudW1iZXIgPSBcIlwiICsgZWxlbWVudC54ICsgZWxlbWVudC55O1xuICAgICAgaWYgKCFlbGVtZW50LnNoaXApIHtcbiAgICAgICAgcmV0dXJuIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5yZW1vdmUoYHNoaXBgKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LnNoaXAuZ2V0U2hpcCgpKSB7XG4gICAgICAgIGxldCBudW0gPSAwO1xuXG4gICAgICAgIHBsYXllcjEuYm9hcmQuc2hpcHNBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgaWYgKHNoaXAuZ2V0U2hpcCgpID09PSBlbGVtZW50LnNoaXAuZ2V0U2hpcCgpKSB7XG4gICAgICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QuYWRkKGBzaGlwYCk7XG4gICAgICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QuYWRkKGBzaGlwJHtudW19YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG51bSsrO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIGJlZm9yZSBnYW1lIHN0YXJ0c1xuZnVuY3Rpb24gZHJhZ1NoaXAoZSkge1xuICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5jbGFzc0xpc3RbMl0pO1xuICBsZXQgc2hpcE5hbWUgPSBlLnRhcmdldC5jbGFzc0xpc3RbMl07XG4gIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNoaXBOYW1lKTtcbiAgLy8gbGV0IHNoaXBDb29yZGluYXRlID0gW107XG4gIC8vIGNvbnNvbGUubG9nKHNoaXApO1xuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBlLnRhcmdldC5pZCk7XG4gIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcImNvcHlcIjtcbiAgLy8gZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoO2krKyl7XG4gIC8vICAgc2hpcENvb3JkaW5hdGUucHVzaChzaGlwW2ldLmlkKTtcblxuICAvLyB9XG59XG5mdW5jdGlvbiBkcmFnZ2luZ2Z1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZnVuY3Rpb24gZ2V0U2hpcENvb3Jkc0FsbChzb3VyY2VTaGlwTmFtZUFycmF5KSB7XG4gIGNvbnN0IHNoaXBDb29yZHMgPSBbXTtcbiAgc291cmNlU2hpcE5hbWVBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgbGV0IHh5ID0gZWxlbWVudC5pZC5zcGxpdChcIlwiKTtcbiAgICBzaGlwQ29vcmRzLnB1c2goK3h5WzBdKTtcbiAgICBzaGlwQ29vcmRzLnB1c2goK3h5WzFdKTtcbiAgfSk7XG4gIHJldHVybiBzaGlwQ29vcmRzO1xufVxuZnVuY3Rpb24gZHJhZ1NoaXBFbmQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHVzZXJDbGlja2VkQ29vcmRpbmF0ZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICBsZXQgc291cmNlU2hpcENvb3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dXNlckNsaWNrZWRDb29yZGluYXRlfWApO1xuICBsZXQgc291cmNlU2hpcE5hbWVBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgYC4ke3NvdXJjZVNoaXBDb29yZC5jbGFzc0xpc3RbMl19YFxuICApO1xuICBjb25zdCBzaGlwQ29vcmRzID0gZ2V0U2hpcENvb3Jkc0FsbChzb3VyY2VTaGlwTmFtZUFycmF5KTtcbiAgbGV0IGNvb3JkaW5hdGUgPSB1c2VyQ2xpY2tlZENvb3JkaW5hdGUuc3BsaXQoXCJcIik7XG5cbiAgbGV0IHNoaXBJbnN0YW5jZSA9XG4gICAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpWytjb29yZGluYXRlWzBdXVsrY29vcmRpbmF0ZVsxXV0uc2hpcDtcblxuICAvLyBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClcbiAgLy8gY29uc29sZS5sb2coc291cmNlU2hpcCk7XG5cbiAgbGV0IHRhcmdldElEID0gZS50YXJnZXQuaWQ7XG5cbiAgY2hlY2tVcGRhdGVHYW1lQm9hcmQoXG4gICAgc2hpcENvb3JkcyxcbiAgICBzaGlwSW5zdGFuY2UsXG4gICAgdXNlckNsaWNrZWRDb29yZGluYXRlLFxuICAgIHRhcmdldElEXG4gICk7XG5cbiAgbWFrZUFHcmlkKHBsYXllcjFCb2FyZCk7XG4gIG1ha2VBR3JpZChwbGF5ZXIxRGlzcGxheSk7XG4gIHNldFByZWxpbWluYXJ5Qm9hcmQoKTtcbn1cbmZ1bmN0aW9uIG5leHRTaGlwQ29vcmRIZWxwZXIoc2hpcENvb3JkLCByb3RhdGUpIHtcbiAgbGV0IGFkZDtcbiAgaWYgKHJvdGF0ZSkge1xuICAgICFwbGF5ZXIxLmJvYXJkXG4gICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgWytzaGlwQ29vcmRbMF1dWytzaGlwQ29vcmRbMV1dLnNoaXAuaXNTaGlwSG9yaXpvbnRhbCgpXG4gICAgICA/IChhZGQgPSAxMClcbiAgICAgIDogKGFkZCA9IDEpO1xuICB9IGVsc2Uge1xuICAgICFwbGF5ZXIxLmJvYXJkXG4gICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgWytzaGlwQ29vcmRbMF1dWytzaGlwQ29vcmRbMV1dLnNoaXAuaXNTaGlwSG9yaXpvbnRhbCgpXG4gICAgICA/IChhZGQgPSAxKVxuICAgICAgOiAoYWRkID0gMTApO1xuICB9XG5cbiAgcmV0dXJuIGFkZDtcbn1cbmZ1bmN0aW9uIGNoZWNrVXBkYXRlR2FtZUJvYXJkKHNoaXBDb29yZCwgc2hpcEluc3RhbmNlLCBzb3VyY2VEYXRhLCB0YXJnZXRJRCkge1xuICBsZXQgYWRkO1xuICBsZXQgbmV3UG9zaXRpb25Db29yZDtcbiAgbGV0IG5ld1Bvc2l0aW9uSG9sZGVyO1xuICAvLyBjb29yZGluYXRlcyBhZGQgdG8gZGV0ZXJtaW5lIGN1cnJlbnQgc2hpcCdzIG5leHQgY29vcmRpbmF0ZXNcbiAgYWRkID0gbmV4dFNoaXBDb29yZEhlbHBlcihzaGlwQ29vcmQpO1xuXG4gIG5ld1Bvc2l0aW9uQ29vcmQgPSBmaW5kU3RhcnRQb3NpdGlvbihcbiAgICBhZGQsXG4gICAgc2hpcENvb3JkLFxuICAgIGZpbmRDb29yZGluYXRlRGlmZmVyZW5jZShzaGlwQ29vcmQsIHNvdXJjZURhdGEpLFxuICAgIHRhcmdldElEXG4gICk7XG5cbiAgaWYgKFxuICAgIGNoZWNrTmV3Q29vcmRpbmF0ZVBvc3NpYmxlKFxuICAgICAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpWytzaGlwQ29vcmRbMF1dWytzaGlwQ29vcmRbMV1dLnNoaXAsXG4gICAgICBzaGlwQ29vcmQsXG4gICAgICBuZXdQb3NpdGlvbkNvb3JkXG4gICAgKSA9PT0gZmFsc2VcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIG5ld1Bvc2l0aW9uSG9sZGVyID0gbmV3UG9zaXRpb25Db29yZDtcblxuICAvLyBpdGVyYXRlcyB0aHJvdWdoIHNoaXAgY29vcmRpbmF0ZXMuXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmQubGVuZ3RoOyBpKyspIHtcbiAgICAvL2NoZWNrIHRhcmdldCBoYXMgbm8gc2hpcFxuICAgIGxldCBuZXdTaGlwQ29vcmRYWSA9IGdldE5ld1NoaXBDb29yZGluYXRlKG5ld1Bvc2l0aW9uSG9sZGVyKTtcbiAgICBpZiAoXG4gICAgICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK25ld1NoaXBDb29yZFhZWzBdXVsrbmV3U2hpcENvb3JkWFlbMV1dLnNoaXAgJiZcbiAgICAgIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVsrbmV3U2hpcENvb3JkWFlbMF1dWytuZXdTaGlwQ29vcmRYWVsxXV0uc2hpcCAhPVxuICAgICAgICBzaGlwSW5zdGFuY2VcbiAgICApXG4gICAgICByZXR1cm47XG5cbiAgICBuZXdQb3NpdGlvbkhvbGRlciArPSBhZGQ7XG4gICAgaSsrO1xuICB9XG4gIHJlbW92ZWFuZEFkZE5ld1NoaXAoc2hpcENvb3JkLCBuZXdQb3NpdGlvbkNvb3JkLCBhZGQsIHNoaXBJbnN0YW5jZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZWFuZEFkZE5ld1NoaXAoXG4gIHNoaXBDb29yZCxcbiAgbmV3UG9zaXRpb25Db29yZCxcbiAgYWRkLFxuICBzaGlwSW5zdGFuY2UsXG4gIHJvdGF0ZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG5ld1Bvc2l0aW9uQ29vcmQpKSB7XG4gICAgbmV3UG9zaXRpb25Db29yZCA9IGAke25ld1Bvc2l0aW9uQ29vcmRbMF19JHtuZXdQb3NpdGlvbkNvb3JkWzFdfWAgKiAxO1xuICB9XG4gIGNvbnNvbGUubG9nKHNoaXBDb29yZCwgbmV3UG9zaXRpb25Db29yZCwgYWRkLCBzaGlwSW5zdGFuY2UpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb29yZC5sZW5ndGg7IGkrKykge1xuICAgIC8vcmVtb3ZlIGN1cnJlbnQgc2hpcFxuICAgIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVsrc2hpcENvb3JkW2ldXVsrc2hpcENvb3JkW2kgKyAxXV0uc2hpcCA9IHVuZGVmaW5lZDtcbiAgICBpKys7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmQubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbmV3U2hpcENvb3JkWFkgPSBnZXROZXdTaGlwQ29vcmRpbmF0ZShuZXdQb3NpdGlvbkNvb3JkKTtcblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBzaGlwSW5zdGFuY2Uuc2V0U3RhcnRDb29yZGluYXRlcygrbmV3U2hpcENvb3JkWFlbMF0sICtuZXdTaGlwQ29vcmRYWVsxXSk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coK25ld1NoaXBDb29yZFhZWzBdLCArbmV3U2hpcENvb3JkWFlbMV0pO1xuICAgIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVsrbmV3U2hpcENvb3JkWFlbMF1dWytuZXdTaGlwQ29vcmRYWVsxXV0uc2hpcCA9XG4gICAgICBzaGlwSW5zdGFuY2U7XG4gICAgaWYgKHJvdGF0ZSAmJiBpID09PSBzaGlwQ29vcmQubGVuZ3RoIC0gMikge1xuICAgICAgcGxheWVyMS5ib2FyZFxuICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICBbK25ld1NoaXBDb29yZFhZWzBdXVsrbmV3U2hpcENvb3JkWFlbMV1dLnNoaXAudXBkYXRlU2hpcERpcmVjdGlvbigpO1xuICAgIH1cbiAgICBpKys7XG4gICAgbmV3UG9zaXRpb25Db29yZCArPSBhZGQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tOZXdDb29yZGluYXRlUG9zc2libGUoXG4gIHBsYXllclNoaXAsXG4gIHNoaXBDb29yZCxcbiAgbmV3UG9zaXRpb25Db29yZCxcbiAgcm90YXRlXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkobmV3UG9zaXRpb25Db29yZCkpIHtcbiAgICBuZXdQb3NpdGlvbkNvb3JkID0gbmV3UG9zaXRpb25Db29yZC5qb2luKFwiXCIpICogMTtcbiAgfVxuICBpZiAocm90YXRlKSB7XG4gICAgY29uc29sZS5sb2cobmV3UG9zaXRpb25Db29yZCwgc2hpcENvb3JkLmxlbmd0aCAvIDIpO1xuICAgIGlmIChwbGF5ZXJTaGlwLmlzU2hpcEhvcml6b250YWwoKSkge1xuICAgICAgaWYgKChuZXdQb3NpdGlvbkNvb3JkICUgMTApICsgc2hpcENvb3JkLmxlbmd0aCAvIDIgPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoTWF0aC5yb3VuZChuZXdQb3NpdGlvbkNvb3JkIC8gMTAgLSAwLjQ5KSArIHNoaXBDb29yZC5sZW5ndGggLyAyID4gMTApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKCFwbGF5ZXJTaGlwLmlzU2hpcEhvcml6b250YWwoKSkge1xuICAgIGlmICgobmV3UG9zaXRpb25Db29yZCAlIDEwKSArIHNoaXBDb29yZC5sZW5ndGggLyAyID4gMTApIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoTWF0aC5yb3VuZChuZXdQb3NpdGlvbkNvb3JkIC8gMTAgLSAwLjQ5KSArIHNoaXBDb29yZC5sZW5ndGggLyAyID4gMTApXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gZmluZCBzdGFydCooYWthIGVuZCkgZWRnZSBvZiBzaGlwIChib3R0b20gb3IgcmlnaHQgZWRnZSlcbmZ1bmN0aW9uIGZpbmRDb29yZGluYXRlRGlmZmVyZW5jZShzaGlwQ29vcmQsIHNvdXJjZURhdGEpIHtcbiAgY29uc3QgYW5zd2VyID1cbiAgICBzaGlwQ29vcmRbc2hpcENvb3JkLmxlbmd0aCAtIDJdICogMTAgK1xuICAgIHNoaXBDb29yZFtzaGlwQ29vcmQubGVuZ3RoIC0gMV0gLVxuICAgIHNvdXJjZURhdGE7XG5cbiAgcmV0dXJuIGFuc3dlcjtcbn1cbmZ1bmN0aW9uIGZpbmRTdGFydFBvc2l0aW9uKGFkZCwgc2hpcENvb3JkLCBkaWZmZXJlbmNlLCB0YXJnZXRJRCkge1xuICByZXR1cm4gK3RhcmdldElEICsgZGlmZmVyZW5jZSAtIChzaGlwQ29vcmQubGVuZ3RoIC8gMiAtIDEpICogYWRkO1xufVxuXG5mdW5jdGlvbiBnZXROZXdTaGlwQ29vcmRpbmF0ZShuZXdQb3NpdGlvbkNvb3JkKSB7XG4gIGlmIChuZXdQb3NpdGlvbkNvb3JkIDw9IDkpIHtcbiAgICByZXR1cm4gYDAke25ld1Bvc2l0aW9uQ29vcmR9YC5zcGxpdChcIlwiKTtcbiAgfSBlbHNlIHJldHVybiBgJHtuZXdQb3NpdGlvbkNvb3JkfWAuc3BsaXQoXCJcIik7XG59XG5cbmV4cG9ydCB7XG4gIGNoZWNrV2lubmVyLFxuICB1cGRhdGVCb2FyZEdhbWVMaXZlLFxuICB1cGRhdGVEaXNwbGF5LFxuICBjaGVja1VwZGF0ZUdhbWVCb2FyZCxcbiAgc2V0UHJlbGltaW5hcnlCb2FyZCxcbiAgZXZhbHVsYXRlUGxheWVyQ2xpY2ssXG4gIG1ha2VBR3JpZCxcbiAgY2hlY2tUdXJuLFxuICBkcmFnU2hpcCxcbiAgZHJhZ1NoaXBFbmQsXG4gIGRyYWdnaW5nZnVuY3Rpb24sXG59O1xuIiwiY29uc3Qgc2hpcCA9IHJlcXVpcmUoXCIuL3NoaXBcIik7XG4vLyBjb25zdCBzaGlwID0geyBsZW5ndGgsIHN1bmssfVxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBsZXQgYm9hcmQgPSBbW11dO1xuICBjcmVhdGVCb2FyZCgpO1xuICBsZXQgdHVybiA9IDA7XG4gIGxldCBzaGlwc0FycmF5ID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgYm9hcmQucHVzaChbXSk7XG4gICAgICBmb3IgKGxldCBvID0gMDsgbyA8IDEwOyBvKyspIHtcbiAgICAgICAgYm9hcmRbaV0ucHVzaChjcmVhdGVDb29yZGluYXRlT2JqZWN0KGksIG8pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDb29yZGluYXRlT2JqZWN0KHgsIHkpIHtcbiAgICBsZXQgY29vcmRpbmF0ZSA9IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5LFxuICAgICAgc2hpcDogdW5kZWZpbmVkLFxuICAgICAgaGl0OiBudWxsLFxuICAgIH07XG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH1cblxuICBjb25zdCBsb2NhdGlvbiA9IChudW0xLCBudW0yKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkW251bTFdW251bTJdO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZpbGxCb2FyZFJhbmRvbShiYXR0bGVzaGlwKSB7XG4gICAgc2hpcHNBcnJheS5wdXNoKGJhdHRsZXNoaXApO1xuICAgIGxldCBsZW5ndGggPSBiYXR0bGVzaGlwLmdldFNoaXAoKS5sZW5ndGg7XG5cbiAgICBsZXQgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIGxldCB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgd2hpbGUgKCFjaGVja05vU2hpcChiYXR0bGVzaGlwLmlzU2hpcEhvcml6b250YWwoKSwgbGVuZ3RoLCB4LCB5KSkge1xuICAgICAgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIH1cbiAgICBiYXR0bGVzaGlwLnNldFN0YXJ0Q29vcmRpbmF0ZXMoeCwgeSk7XG4gICAgaWYgKGJhdHRsZXNoaXAuaXNTaGlwSG9yaXpvbnRhbCgpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3ggKyBpXVt5XS5zaGlwID0gYmF0dGxlc2hpcDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFt4XVt5ICsgaV0uc2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNoZWNrTm9TaGlwKGlzSG9yaXpvbnRhbCwgbGVuZ3RoLCB4LCB5KSB7XG4gICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgaWYgKHggPCAwIHx8IHggKyBsZW5ndGggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFt4ICsgaV1beV0uc2hpcCAhPSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgKyBsZW5ndGggPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5ICsgaV0uc2hpcCAhPSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gYWRkU2hpcChudW0xLCBudW0yLCBzaXplID0gMiwgaXNIb3Jpem9udGFsID0gdHJ1ZSkge1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBzaGlwKHNpemUpO1xuXG4gICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgYm9hcmRbbnVtMV1bbnVtMiArIGldLnNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBib2FyZFtudW0xICsgaV1bbnVtMV0uc2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJldHR5UHJpbnQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXR0eVByaW50KCkge1xuICAgIGxldCBzdHJpbmcgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgc3RyaW5nICs9IFwiXFxuXCI7XG4gICAgICBmb3IgKGxldCBvID0gMDsgbyA8IDEwOyBvKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW29dLmhpdCA9PSBmYWxzZSkgc3RyaW5nICs9IFwiWy1dXCI7XG4gICAgICAgIGVsc2UgaWYgKCFib2FyZFtpXVtvXS5zaGlwKSBzdHJpbmcgKz0gXCJbIF1cIjtcbiAgICAgICAgZWxzZSBpZiAoYm9hcmRbaV1bb10uc2hpcC5pc1N1bmsoKSkgc3RyaW5nICs9IFwiW1hdXCI7XG4gICAgICAgIGVsc2UgaWYgKGJvYXJkW2ldW29dLnNoaXApIHN0cmluZyArPSBcIltTXVwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaGl0U2hpcChudW0xLCBudW0yKSB7XG4gICAgaWYgKG51bTEgPCAwIHx8IG51bTIgPCAwIHx8IG51bTEgPiA5IHx8IG51bTIgPiA5KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoYm9hcmRbbnVtMV1bbnVtMl0uaGl0ICE9PSBudWxsKSB7XG4gICAgICAvL2Nhbid0IGhpdCBzb21ldGhpbmcgYWxyZWFkeSBoaXQgYmVmb3JlXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChib2FyZFtudW0xXVtudW0yXS5zaGlwKSB7XG4gICAgICAvL2lmIGEgc2hpcFxuICAgICAgYm9hcmRbbnVtMV1bbnVtMl0uc2hpcC5oaXQoKTtcbiAgICAgIGJvYXJkW251bTFdW251bTJdLnNoaXAuaXNTdW5rKCk7XG4gICAgICBib2FyZFtudW0xXVtudW0yXS5oaXQgPSB0cnVlO1xuICAgICAgLy8gc2VlIGlmIGFsbCBzaGlwcyBhcmUgc3Vua1xuICAgICAgcHJldHR5UHJpbnQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL2lmIGEgbWlzc1xuICAgICAgYm9hcmRbbnVtMV1bbnVtMl0uaGl0ID0gZmFsc2U7XG4gICAgICBwcmV0dHlQcmludCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQWxsU3VuaygpIHtcbiAgICBsZXQgYWxsU3VuayA9IGJvYXJkLmV2ZXJ5KChjb29yZCkgPT5cbiAgICAgIGNvb3JkLmV2ZXJ5KChlbGVtZW50KSA9PiBjaGVja1NoaXAoZWxlbWVudCkpXG4gICAgKTtcbiAgICAvLyAmJiBjb29yZC5zaGlwLnN1bmsgPT0gZmFsc2VcbiAgICBpZiAoYWxsU3Vuaykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBjaGVja1NoaXAoY29vcmQpIHtcbiAgICBpZiAoY29vcmQuc2hpcCA9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICAgIGVsc2UgaWYgKGNvb3JkLnNoaXAuZ2V0U2hpcCgpLnN1bmspIHJldHVybiB0cnVlO1xuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tJc1NoaXAoY29vcmQpIHtcbiAgICBpZiAoY29vcmQuc2hpcCA9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICBlbHNlIGlmIChjb29yZC5zaGlwKSByZXR1cm4gdHJ1ZTsgLy9sb2wgcmVkdWRuYXQ/XG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR1cm4sXG4gICAgZ2V0Qm9hcmQsXG4gICAgbG9jYXRpb24sXG4gICAgYWRkU2hpcCxcbiAgICBoaXRTaGlwLFxuICAgIHByZXR0eVByaW50LFxuICAgIGNoZWNrQWxsU3VuayxcbiAgICBjaGVja0lzU2hpcCxcbiAgICBmaWxsQm9hcmRSYW5kb20sXG4gICAgc2hpcHNBcnJheSxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZWJvYXJkO1xuIiwiaW1wb3J0IHtcbiAgY2hlY2tXaW5uZXIsXG4gIHVwZGF0ZUJvYXJkR2FtZUxpdmUsXG4gIHVwZGF0ZURpc3BsYXksXG4gIGNoZWNrVXBkYXRlR2FtZUJvYXJkLFxuICBzZXRQcmVsaW1pbmFyeUJvYXJkLFxuICBldmFsdWxhdGVQbGF5ZXJDbGljayxcbiAgbWFrZUFHcmlkLFxuICBjaGVja1R1cm4sXG4gIGRyYWdTaGlwLFxuICBkcmFnU2hpcEVuZCxcbiAgZHJhZ2dpbmdmdW5jdGlvbixcbn0gZnJvbSBcIi4vQ29udHJvbGxlclwiO1xuXG5jb25zdCBwbGF5ZXIgPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG5pbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuXG5sZXQgaXNBaSA9IHRydWU7XG5cbmV4cG9ydCBsZXQgcGxheWVyMSA9IHBsYXllcihcIlBsYXllcjFcIiwgIWlzQWksIDEpO1xuZXhwb3J0IGxldCBwbGF5ZXIyID0gcGxheWVyKFwiQUlcIiwgaXNBaSwgMik7XG5cbmNvbnN0IG5ld0dhbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnRcIik7XG5jb25zdCBzdGFydEdhbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0XCIpO1xuXG4vLyBidXR0b24gdG8gc3RhcnQgZ2FtZVxubmV3R2FtZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheUdhbWUpO1xuc3RhcnRHYW1lRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRFdmVudExpc3RlbmVyR2FtZVN0YXJ0KTtcblxuZXhwb3J0IGNvbnN0IHBsYXllcjFCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyb25lZ3JpZFwiKTtcbmV4cG9ydCBjb25zdCBwbGF5ZXIxRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyb25lRGlzcGxheVwiKTtcbmV4cG9ydCBjb25zdCBwbGF5ZXIyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcnR3b2dyaWRcIik7XG5cbnBsYXlHYW1lKCk7XG5cbi8vIG1ha2UgYSBib2FyZCBvbiB3ZWJzaXRlXG5mdW5jdGlvbiBwbGF5R2FtZSgpIHtcbiAgc3RhcnRHYW1lRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIHBsYXllcjEgPSBwbGF5ZXIoXCJQbGF5ZXIxXCIsICFpc0FpLCAxKTtcbiAgcGxheWVyMiA9IHBsYXllcihcIkFJXCIsIGlzQWksIDIpO1xuICBjb25zb2xlLmxvZyhcIm5ldyBnYW1lXCIpO1xuXG4gIG1ha2VBR3JpZChwbGF5ZXIxQm9hcmQpO1xuICBtYWtlQUdyaWQocGxheWVyMURpc3BsYXkpO1xuICBtYWtlQUdyaWQocGxheWVyMkJvYXJkKTtcblxuICBzZXRQcmVsaW1pbmFyeUJvYXJkKCk7XG59XG5cbi8vIHBsYXlHYW1lKCk7ICAvL3dpbGwgbmVlZCB0byBjaGFuZ2UgZm9yIHdoZW4gdGhlcmUgaXMgYSB1c2VyIGludGVyZmFjZVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyR2FtZVN0YXJ0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB1cGRhdGVEaXNwbGF5KCk7XG4gIGNoZWNrVHVybigpO1xuXG4gIGNvbnNvbGUubG9nKFwiYWRkTGlzdGVucnNcIik7XG5cbiAgc3RhcnRHYW1lRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIHBsYXllcjIuYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJ0d29ncmlkXCIpO1xuXG4gICAgZWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgbnVtYmVyID0gXCJcIiArIGVsZW1lbnQueCArIGVsZW1lbnQueTtcbiAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmFsdWxhdGVQbGF5ZXJDbGljayk7XG4gICAgICAvLyBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdTaGlwKTtcbiAgICAgIC8vIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnZ2luZ2Z1bmN0aW9uKTtcbiAgICAgIC8vIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyYWdTaGlwRW5kKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcm9uZWdyaWRcIik7XG5cbiAgICBlbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBudW1iZXIgPSBcIlwiICsgZWxlbWVudC54ICsgZWxlbWVudC55O1xuICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnU2hpcCk7XG4gICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcbiAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnZ2luZ2Z1bmN0aW9uKTtcbiAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyYWdTaGlwRW5kKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIH1cbiIsImNvbnN0IGdhbWVib2FyZCA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcbmNvbnN0IHNoaXAgPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xuXG5jb25zdCBwbGF5ZXIgPSAobmFtZSwgaXNBSW50LCBudW1iZXIgPSAxKSA9PiB7XG4gIGNvbnN0IGlzQUkgPSBpc0FJbnQ7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBuYW1lO1xuICBjb25zdCBwbGF5ZXJOdW1iZXIgPSBudW1iZXI7XG4gIGNvbnN0IGJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFtdO1xuICBjb25zdCBwb3NzaWJsZU1vdmVzID0gW107XG5cbiAgbGV0IHdpbm5lciA9IGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGxldCBudW07XG4gICAgaWYgKGkgPD0gMikgbnVtID0gMjtcbiAgICBlbHNlIGlmIChpIDw9IDQpIG51bSA9IDM7XG4gICAgZWxzZSBpZiAoaSA8PSA1KSBudW0gPSA0O1xuICAgIGVsc2UgaWYgKGkgPCA3KSBudW0gPSA1O1xuICAgIGNvbnN0IHNoaXAxID0gc2hpcChudW0pO1xuICAgIHNoaXBzLnB1c2goc2hpcDEpO1xuICB9XG5cbiAgZmlsbEFsbFNoaXBzKCk7XG5cbiAgZnVuY3Rpb24gZ2V0QWxsU2hpcHMoKSB7XG4gICAgcmV0dXJuIHNoaXBzO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsbEFsbFNoaXBzKCkge1xuICAgIHNoaXBzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGJvYXJkLmZpbGxCb2FyZFJhbmRvbShlbGVtZW50KTtcbiAgICB9KTtcbiAgICBib2FyZC5wcmV0dHlQcmludCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvb3RDb29yZGluYXRlcyh4ID0gMCwgeSA9IDAsIGlzUm9ib3QpIHtcbiAgICBpZiAoaXNSb2JvdCkge1xuICAgICAgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuXG4gICAgICBpZiAoc2hpcENvb3JkaW5hdGVzLmxlbmd0aCA+PSAxIHx8IHBvc3NpYmxlTW92ZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgaWYgKHNoaXBDb29yZGluYXRlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICAgIHggPSBzaGlwQ29vcmRpbmF0ZXMuc3BsaWNlKDAsIDEpWzBdO1xuICAgICAgICAgIHkgPSBzaGlwQ29vcmRpbmF0ZXMuc3BsaWNlKDAsIDEpWzBdO1xuICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh4ICsgMSwgeSk7XG4gICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHggLSAxLCB5KTtcbiAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goeCwgeSAtIDEpO1xuICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh4LCB5ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvb3JkID0gcG9zc2libGVNb3Zlcy5zcGxpY2UoMCwgMik7XG4gICAgICAgIGxldCBwb3NzaWJsZU1vdmVDb29yZGluYXRlID0gYm9hcmQuaGl0U2hpcChjb29yZFswXSwgY29vcmRbMV0pO1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgcG9zc2libGVNb3Zlcy5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgIHBvc3NpYmxlTW92ZUNvb3JkaW5hdGUgPT0gdW5kZWZpbmVkXG4gICAgICAgICkge1xuICAgICAgICAgIGNvb3JkID0gcG9zc2libGVNb3Zlcy5zcGxpY2UoMCwgMik7XG4gICAgICAgICAgcG9zc2libGVNb3ZlQ29vcmRpbmF0ZSA9IGJvYXJkLmhpdFNoaXAoY29vcmRbMF0sIGNvb3JkWzFdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zc2libGVNb3ZlQ29vcmRpbmF0ZSkge1xuICAgICAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKGNvb3JkWzBdKTtcbiAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChjb29yZFsxXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IG1vdmVQb3NzaWJsZSA9IGJvYXJkLmhpdFNoaXAoeCwgeSk7XG5cbiAgICAgIHdoaWxlIChtb3ZlUG9zc2libGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgIHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgbW92ZVBvc3NpYmxlID0gYm9hcmQuaGl0U2hpcCh4LCB5KTtcbiAgICAgIH1cbiAgICAgIGlmIChtb3ZlUG9zc2libGUgPT0gdHJ1ZSkge1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaCh4KTtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goeSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkLmhpdFNoaXAoeCwgeSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGlzV2lubmVyKCkge1xuICAgIHJldHVybiB3aW5uZXI7XG4gIH1cbiAgZnVuY3Rpb24gd29uKCkge1xuICAgIGNvbnN0IHR1cm5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR1cm5cIik7XG4gICAgdHVybkRpdi50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9IFdPTmA7XG4gICAgd2lubmVyID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRBbGxTaGlwcyxcbiAgICBib2FyZCxcbiAgICBzaG9vdENvb3JkaW5hdGVzLFxuICAgIHBsYXllck51bWJlcixcbiAgICBnZXROYW1lLFxuICAgIGlzQUksXG4gICAgaXNXaW5uZXIsXG4gICAgd29uLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCA9IDIsIGlzSG9yaXpvbnRhbCA9IDAsIHN1bmsgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBzaGlwID0ge1xuICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgIGhpdHM6IDAsXG4gICAgc3Vuazogc3VuayxcbiAgICBob3Jpem9udGFsOiB1bmRlZmluZWQsXG4gIH07XG5cbiAgaXNIb3Jpem9udGFsID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgc2hpcC5ob3Jpem9udGFsID0gaXNIb3Jpem9udGFsID09IDE7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIHNoaXAuaGl0cyArPSAxO1xuICAgIHJldHVybiBzaGlwLmhpdHM7XG4gIH07XG4gIGZ1bmN0aW9uIGlzU2hpcEhvcml6b250YWwoKSB7XG4gICAgcmV0dXJuIHNoaXAuaG9yaXpvbnRhbDtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVTaGlwRGlyZWN0aW9uKCkge1xuICAgIHNoaXAuaG9yaXpvbnRhbCA9ICFzaGlwLmhvcml6b250YWw7XG4gICAgY29uc29sZS5sb2coc2hpcC5ob3Jpem9udGFsKTtcbiAgfVxuICBjb25zdCBnZXRTaGlwID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAoc2hpcC5oaXRzID09IHNoaXAubGVuZ3RoKSBzaGlwLnN1bmsgPSB0cnVlO1xuICAgIHJldHVybiBzaGlwLnN1bms7XG4gIH07XG4gIGNvbnN0IHNldFN0YXJ0Q29vcmRpbmF0ZXMgPSAoeCwgeSkgPT4ge1xuICAgIHNoaXAuY29vcmRpbmF0ZSA9IFt4LCB5XTtcbiAgfTtcblxuICBjb25zdCBnZXRTdGFydENvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwLmNvb3JkaW5hdGU7XG4gIH07XG4gIHJldHVybiB7XG4gICAgU2hpcCxcbiAgICBnZXRTaGlwLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgaXNTaGlwSG9yaXpvbnRhbCxcbiAgICBzZXRTdGFydENvb3JkaW5hdGVzLFxuICAgIGdldFN0YXJ0Q29vcmRpbmF0ZXMsXG4gICAgdXBkYXRlU2hpcERpcmVjdGlvbixcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==