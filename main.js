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
        // if(board.checkIsShip(board.location(shipCoordinates[0],shipCoordinates[1])))
        //   shipCoordinates.splice(0,shipCoordinates.length);
        //   else{
        if (shipCoordinates.length >= 1) {
          x = shipCoordinates.splice(0, 1)[0];
          y = shipCoordinates.splice(0, 1)[0];
          possibleMoves.push(x + 1, y);
          possibleMoves.push(x - 1, y);
          possibleMoves.push(x, y - 1);
          possibleMoves.push(x, y + 1);
        }
        let coord = possibleMoves.splice(0, 2);
        let hitWhat = board.hitShip(coord[0], coord[1]);
        while (possibleMoves.length != 0 && hitWhat == undefined) {
          coord = possibleMoves.splice(0, 2);
          hitWhat = board.hitShip(coord[0], coord[1]);
        }
        if (hitWhat != undefined) {
          // console.log(hitWhat);
          if (hitWhat) {
            shipCoordinates.push(coord[0]);
            shipCoordinates.push(coord[1]);
          }
          return;
        }
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
      console.log("human");
      board.hitShip(x, y);
    }
  }
  function isWinner() {
    return winner;
  }
  function won() {
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

let player1 = player("Player1", !isAi, 1);
let player2 = player("AI", isAi, 2);

let i = 0;
let winner = false;

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

  makeAGrid(player1Board);
  makeAGrid(player1Display);
  makeAGrid(player2Board);

  setPreliminaryBoard();
}

// playGame();  //will need to change for when there is a user interface

function addEventListenerGameStart(e) {
  e.preventDefault();
  updateDisplay();
  checkTurn();

  console.log("addListenrs");

  startGameDiv.classList.toggle("hidden");
  player2.board.getBoard().forEach((element) => {
    const box = document.querySelector("#playertwogrid");

    element.forEach((element) => {
      let number = "" + element.x + element.y;
      box.childNodes[+number].addEventListener("click", evalulatePlayerClick);
      // box.childNodes[+number].removeEventListener("dragstart", dragShip);
      // box.childNodes[+number].removeEventListener("dragover", draggingfunction);
      // box.childNodes[+number].removeEventListener("drop", dragShipEnd);
    });
  });

  player1.board.getBoard().forEach((element) => {
    const box = document.querySelector("#playeronegrid");

    element.forEach((element) => {
      let number = "" + element.x + element.y;
      box.childNodes[+number].removeEventListener("dragstart", dragShip);
      box.childNodes[+number].classList.remove("ship");
      box.childNodes[+number].removeEventListener("dragover", draggingfunction);
      box.childNodes[+number].removeEventListener("drop", dragShipEnd);
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
function dragShipEnd(e) {
  e.preventDefault();
  const userClickedCoordinate = e.dataTransfer.getData("text");
  let sourceShipCoord = document.getElementById(`${userClickedCoordinate}`);
  let sourceShipNameArray = document.querySelectorAll(
    `.${sourceShipCoord.classList[2]}`
  );
  const shipCoords = [];
  sourceShipNameArray.forEach((element) => {
    let xy = element.id.split("");
    shipCoords.push(+xy[0]);
    shipCoords.push(+xy[1]);
  });
  let coordinate = userClickedCoordinate.split("");

  let shipInstance =
    player1.board.getBoard()[+coordinate[0]][+coordinate[1]].ship;

  // player1.board.getBoard()
  // console.log(sourceShip);

  let targetID = e.target.id;

  checkUpdateGameBoard(
    shipCoords,
    shipInstance,
    userClickedCoordinate,
    targetID
  );

  makeAGrid(player1Board);
  makeAGrid(player1Display);
  setPreliminaryBoard();
}

// }

function checkUpdateGameBoard(shipCoord, shipInstance, sourceData, targetID) {
  let add;
  let newPositionCoord;
  let newPositionHolder;
  // coordinates add to determine current ship's next coordinates
  !player1.board
    .getBoard()
    [+shipCoord[0]][+shipCoord[1]].ship.isShipHorizontal()
    ? (add = 1)
    : (add = 10);

  newPositionCoord = findStartPosition(
    add,
    shipCoord,
    findCoordinateDifference(shipCoord, sourceData),
    targetID
  );

  if (
    checkNewCoordinatePossible(
      player1.board.getBoard()[+shipCoord[0]][+shipCoord[1]].ship,
      shipCoord,
      newPositionCoord
    )
  ) {
    return;
  }
  newPositionHolder = newPositionCoord;

  // iterates through ship coordinates.

  for (let i = 0; i < shipCoord.length; i++) {
    //check target has no ship
    let newShipCoordXY = getNewShipCoordinate(newPositionHolder);
    if (
      player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship &&
      player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship !=
        shipInstance
    )
      return;

    newPositionHolder += add;
    i++;
  }
  for (let i = 0; i < shipCoord.length; i++) {
    //remove current ship
    player1.board.getBoard()[+shipCoord[i]][+shipCoord[i + 1]].ship = undefined;
    i++;
  }
  for (let i = 0; i < shipCoord.length; i++) {
    let newShipCoordXY = getNewShipCoordinate(newPositionCoord);

    if (i === 0)
      shipInstance.setStartCoordinates(+newShipCoordXY[0], +newShipCoordXY[1]);

    // console.log(+newShipCoordXY[0], +newShipCoordXY[1]);
    player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship =
      shipInstance;
    i++;
    newPositionCoord += add;
  }
}
function checkNewCoordinatePossible(playerShip, shipCoord, newPositionCoord) {
  if (!playerShip.isShipHorizontal()) {
    if ((newPositionCoord % 10) + shipCoord.length / 2 > 10) return true;
  } else {
    if (Math.round(newPositionCoord / 10 - 0.49) + shipCoord.length / 2 > 10)
      return;
  }
}

// find start*(aka end) edge of ship (bottom or right edge)
function findCoordinateDifference(shipCoord, sourceData) {
  const answer =
    shipCoord[shipCoord.length - 2] * 10 +
    shipCoord[shipCoord.length - 1] -
    sourceData;
  // console.log(shipCoord, "-", sourceData, "difference", answer);

  return answer;
}
function findStartPosition(add, shipCoord, difference, targetID) {
  // console.log(add, "-", shipCoord, "-", difference, "-", targetID);
  return +targetID + difference - (shipCoord.length / 2 - 1) * add;
}

function getNewShipCoordinate(newPositionCoord) {
  console.log(newPositionCoord);
  if (newPositionCoord <= 9) {
    return `0${newPositionCoord}`.split("");
  } else return `${newPositionCoord}`.split("");
}

// default grid for gameboard
function makeAGrid(parentDiv) {
  parentDiv.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    for (let o = 0; o < 10; o++) {
      const boxGrid = document.createElement("div");

      boxGrid.classList.add("box");
      boxGrid.setAttribute("id", `${i}${o}`);
      if (player1.board.getBoard()[i][o].ship) {
        boxGrid.draggable = true;
        boxGrid.addEventListener("dragstart", dragShip);
      }
      boxGrid.addEventListener("dragover", draggingfunction);
      // boxGrid.addEventListener('dropend',dragShipEnd);
      boxGrid.addEventListener("drop", dragShipEnd);
      parentDiv.appendChild(boxGrid);
    }
  }
}

// for after game started
function evalulatePlayerClick(e) {
  e.preventDefault();
  if (player1.isWinner() || player2.isWinner()) {
    return;
  }
  if (
    player1.board.turn + player2.board.turn == 0 &&
    e.target.parentElement.id === "playeronegrid"
  ) {
    //game has not started. can move ships....
    let coord = e.target.id.split("");
    if (player1.board.checkIsShip(player1.board.location(coord[0], coord[1]))) {
      // var data = e.dataTransfer.getData(e.target);
    }

    return;
  }

  if (
    player1.board.turn == player2.board.turn &&
    e.target.parentElement.id === "playertwogrid"
  ) {
    // player 1 turn
    player1.board.turn++;
    let coord = e.target.id.split("");
    if (player2.board.hitShip(coord[0], coord[1]) == undefined) {
      player1.board.turn--;
      return;
    }
    updateBoardGameLive();
    checkWinner();
  } else {
    console.log("ALL UNITS MUST ATTACK ENEMY.");
    return;
  }
  player2.board.turn++;
  player1.shootCoordinates(0, 0, player2.isAI);
  updateBoardGameLive();
  checkTurn();

  checkWinner();
}
function checkTurn() {
  const turnDiv = document.querySelector(".turn");
  if (player1.board.turn == player2.board.turn) {
    turnDiv.textContent = "PLAYER ONE TURN ";
  }
  if (player1.board.turn > player2.board.turn) {
    turnDiv.textContent = "PLAYER TWO TURN";
  }
}

function updateDisplay() {
  const box = document.querySelector("#playeroneDisplay");
  player1.board.shipsArray.forEach((ship) => {
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

// BEFORE GAME STARTS
function setPreliminaryBoard() {
  const box = document.querySelector("#playeronegrid");

  console.log(player1.board.prettyPrint());
  player1.board.getBoard().forEach((element) => {
    element.forEach((element) => {
      let number = "" + element.x + element.y;
      if (!element.ship) {
        return box.childNodes[+number].classList.remove(`ship`);
      }
      if (element.ship.getShip()) {
        let num = 0;

        player1.board.shipsArray.forEach((ship) => {
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
// WHEN GAME STARTS
function updateBoardGameLive() {
  player1.board.getBoard().forEach((element) => {
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
        player1.board.shipsArray.forEach((ship) => {
          if (ship.getShip() === element.ship.getShip()) {
            box.childNodes[+number].classList.add(`ship${num}`);
          }
          num++;
        });
      }
    });
  });
  player2.board.getBoard().forEach((element) => {
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

function checkWinner() {
  const turnDiv = document.querySelector(".turn");

  if (player2.board.checkAllSunk()) {
    turnDiv.textContent = "Player 1 WON";
    player1.won();
  }
  if (player1.board.checkAllSunk()) {
    turnDiv.textContent = "Player 2 WON";
    player2.won();
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDRDQUE0QyxtSEFBc0M7QUFDbEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCwrQkFBK0IseURBQXlELEdBQUcsY0FBYyxnQ0FBZ0MseURBQXlELEdBQUcsVUFBVSw2REFBNkQsa0JBQWtCLDJCQUEyQix3QkFBd0IsaUJBQWlCLGdCQUFnQixpQkFBaUIsR0FBRyxhQUFhLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixrQ0FBa0MsaUJBQWlCLG9CQUFvQixHQUFHLCtFQUErRSxrQkFBa0Isd0NBQXdDLDJDQUEyQyxHQUFHLHFCQUFxQix1QkFBdUIsaUNBQWlDLEdBQUcsNEJBQTRCLGlCQUFpQixpQkFBaUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDBDQUEwQyxlQUFlLEdBQUcsVUFBVSxpQkFBaUIsZ0JBQWdCLDRCQUE0QixnQkFBZ0IsR0FBRyxXQUFXLDBEQUEwRCxpQkFBaUIsMkJBQTJCLGtCQUFrQixpQkFBaUIsNEJBQTRCLEdBQUcsV0FBVyx3Q0FBd0MsR0FBRyw2RkFBNkYsc0VBQXNFLG1DQUFtQywwQkFBMEIsaUJBQWlCLEdBQUcsbUNBQW1DLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsa0JBQWtCLGtCQUFrQixrQkFBa0IsNEJBQTRCLGlCQUFpQiwwQkFBMEIseUJBQXlCLEdBQUcsU0FBUyx5Q0FBeUMsaUJBQWlCLEdBQUcsU0FBUyxxQkFBcUIsb0JBQW9CLEdBQUcsaUJBQWlCLG1CQUFtQixlQUFlLEdBQUcsMkJBQTJCLDRCQUE0QiwyQkFBMkIsdUJBQXVCLGlCQUFpQixpQkFBaUIsR0FBRyxZQUFZLDRCQUE0QixnQkFBZ0IseUJBQXlCLFlBQVksR0FBRyxxQkFBcUIsdUJBQXVCLGNBQWMsR0FBRyxtQkFBbUIsdUJBQXVCLGFBQWEsR0FBRyxXQUFXLGtCQUFrQixHQUFHLFlBQVksaUJBQWlCLHlDQUF5QyxpQkFBaUIsR0FBRywrQ0FBK0MsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEtBQUssWUFBWSxtQkFBbUIsa0JBQWtCLDhCQUE4QixLQUFLLEdBQUcsNkNBQTZDLGdCQUFnQixvQkFBb0IsNkJBQTZCLGdCQUFnQixLQUFLLFlBQVksbUJBQW1CLGtCQUFrQiw4QkFBOEIsS0FBSyxHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sWUFBWSxRQUFRLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sVUFBVSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksWUFBWSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxxQ0FBcUMsK0JBQStCLDZDQUE2QyxHQUFHLGNBQWMsZ0NBQWdDLDBDQUEwQyxHQUFHLFVBQVUsNkRBQTZELGtCQUFrQiwyQkFBMkIsd0JBQXdCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLEdBQUcsYUFBYSxpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0NBQWtDLGlCQUFpQixvQkFBb0IsR0FBRywrRUFBK0Usa0JBQWtCLHdDQUF3QywyQ0FBMkMsR0FBRyxxQkFBcUIsdUJBQXVCLGlDQUFpQyxHQUFHLDRCQUE0QixpQkFBaUIsaUJBQWlCLEdBQUcsZ0JBQWdCLGtCQUFrQiwwQ0FBMEMsZUFBZSxHQUFHLFVBQVUsaUJBQWlCLGdCQUFnQiw0QkFBNEIsZ0JBQWdCLEdBQUcsV0FBVywwREFBMEQsaUJBQWlCLDJCQUEyQixrQkFBa0IsaUJBQWlCLDRCQUE0QixHQUFHLFdBQVcsd0NBQXdDLEdBQUcsNkZBQTZGLG1EQUFtRCxtQ0FBbUMsMEJBQTBCLGlCQUFpQixHQUFHLG1DQUFtQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGtCQUFrQixrQkFBa0Isa0JBQWtCLDRCQUE0QixpQkFBaUIsMEJBQTBCLHlCQUF5QixHQUFHLFNBQVMseUNBQXlDLGlCQUFpQixHQUFHLFNBQVMscUJBQXFCLG9CQUFvQixHQUFHLGlCQUFpQixtQkFBbUIsZUFBZSxHQUFHLDJCQUEyQiw0QkFBNEIsMkJBQTJCLHVCQUF1QixpQkFBaUIsaUJBQWlCLEdBQUcsWUFBWSw0QkFBNEIsZ0JBQWdCLHlCQUF5QixZQUFZLEdBQUcscUJBQXFCLHVCQUF1QixjQUFjLEdBQUcsbUJBQW1CLHVCQUF1QixhQUFhLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxZQUFZLGlCQUFpQix5Q0FBeUMsaUJBQWlCLEdBQUcsK0NBQStDLGdCQUFnQixvQkFBb0IsNkJBQTZCLGdCQUFnQixLQUFLLFlBQVksbUJBQW1CLGtCQUFrQiw4QkFBOEIsS0FBSyxHQUFHLDZDQUE2QyxnQkFBZ0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsS0FBSyxZQUFZLG1CQUFtQixrQkFBa0IsOEJBQThCLEtBQUssR0FBRyxxQkFBcUI7QUFDOW9PO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ2QxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ2ZBLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQztBQUNBO0FBQ0EsTUFBTTtBQUNOLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQy9KQSxrQkFBa0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2QyxhQUFhLG1CQUFPLENBQUMsNkJBQVE7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0L1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXQvUm9ib3RvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9jYXJyaWVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1JlZ1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9Cb2xkXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1JlZ1xcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi8qIG1ha2luZyBhIGJvYXJkICovXFxuI3BsYXllcm9uZWdyaWQsXFxuI3BsYXllcnR3b2dyaWQsXFxuI3BsYXllcm9uZURpc3BsYXkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcbiNwbGF5ZXJvbmVEaXNwbGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxufVxcbiNwbGF5ZXJvbmVEaXNwbGF5ID4gLmJveCB7XFxuICBwYWRkaW5nOiAxcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uYm94IHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuXFxuLnR1cm4ge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDI1MCwgMjU1KTtcXG59XFxuXFxuLmJhdHRsZXNoaXAxLFxcbi5iYXR0bGVzaGlwMixcXG4uYmF0dGxlc2hpcDMsXFxuLmJhdHRsZXNoaXA0LFxcbi5iYXR0bGVzaGlwNSxcXG4uYmF0dGxlc2hpcDYge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG5cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIGVhY2ggc2hpcCAqL1xcbi5oaXQsXFxuLnN1bmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiA4cHggc29saWQgcmVkO1xcblxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAyMzcsIDI0Nyk7XFxuICBvcGFjaXR5OiA5MCU7XFxufVxcbi5zdW5rIHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5zdW5rOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlhcXFwiO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLyogQlVUVE9OUyAqL1xcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcbi5yZXN0YXJ0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAzcHg7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ucmVzdGFydDphY3RpdmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdGFydCB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyNDIsIDI1NSk7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICB9XFxuXFxuICAuYm94IHtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICB3aWR0aDogMzhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICB9XFxuXFxuICAuYm94IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsNENBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQSxtQkFBbUI7QUFDbkI7OztFQUdFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTs7Ozs7O0VBTUUseURBQTRDOztFQUU1Qyw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQSxjQUFjO0FBQ2Q7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oscUJBQXFCOztFQUVyQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBLFlBQVk7QUFDWjtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXOztFQUVYLGtCQUFrQjtFQUNsQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7RUFDekI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1JlZ1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldC9Sb2JvdG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b0JvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXQvUm9ib3RvLUJvbGQudHRmXFxcIik7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9SZWdcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4vKiBtYWtpbmcgYSBib2FyZCAqL1xcbiNwbGF5ZXJvbmVncmlkLFxcbiNwbGF5ZXJ0d29ncmlkLFxcbiNwbGF5ZXJvbmVEaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4jcGxheWVyb25lRGlzcGxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbn1cXG4jcGxheWVyb25lRGlzcGxheSA+IC5ib3gge1xcbiAgcGFkZGluZzogMXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmJveCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgei1pbmRleDogOTk7XFxufVxcblxcbi50dXJuIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCAyNTAsIDI1NSk7XFxufVxcblxcbi5iYXR0bGVzaGlwMSxcXG4uYmF0dGxlc2hpcDIsXFxuLmJhdHRsZXNoaXAzLFxcbi5iYXR0bGVzaGlwNCxcXG4uYmF0dGxlc2hpcDUsXFxuLmJhdHRsZXNoaXA2IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldC9jYXJyaWVyLnN2Z1xcXCIpO1xcblxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogZWFjaCBzaGlwICovXFxuLmhpdCxcXG4uc3VuayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDhweCBzb2xpZCByZWQ7XFxuXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDIzNywgMjQ3KTtcXG4gIG9wYWNpdHk6IDkwJTtcXG59XFxuLnN1bmsge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLnN1bms6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiWFxcXCI7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBCVVRUT05TICovXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuLnJlc3RhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDNweDtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5yZXN0YXJ0OmFjdGl2ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxufVxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN0YXJ0IHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDI0MiwgMjU1KTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gIH1cXG5cXG4gIC5ib3gge1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIHdpZHRoOiAzOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gIH1cXG5cXG4gIC5ib3gge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHNoaXAgPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xuLy8gY29uc3Qgc2hpcCA9IHsgbGVuZ3RoLCBzdW5rLH1cbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgbGV0IGJvYXJkID0gW1tdXTtcbiAgY3JlYXRlQm9hcmQoKTtcbiAgbGV0IHR1cm4gPSAwO1xuICBsZXQgc2hpcHNBcnJheSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xuICAgIHJldHVybiBib2FyZDtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGJvYXJkLnB1c2goW10pO1xuICAgICAgZm9yIChsZXQgbyA9IDA7IG8gPCAxMDsgbysrKSB7XG4gICAgICAgIGJvYXJkW2ldLnB1c2goY3JlYXRlQ29vcmRpbmF0ZU9iamVjdChpLCBvKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29vcmRpbmF0ZU9iamVjdCh4LCB5KSB7XG4gICAgbGV0IGNvb3JkaW5hdGUgPSB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHNoaXA6IHVuZGVmaW5lZCxcbiAgICAgIGhpdDogbnVsbCxcbiAgICB9O1xuICAgIHJldHVybiBjb29yZGluYXRlO1xuICB9XG5cbiAgY29uc3QgbG9jYXRpb24gPSAobnVtMSwgbnVtMikgPT4ge1xuICAgIHJldHVybiBib2FyZFtudW0xXVtudW0yXTtcbiAgfTtcblxuICBmdW5jdGlvbiBmaWxsQm9hcmRSYW5kb20oYmF0dGxlc2hpcCkge1xuICAgIHNoaXBzQXJyYXkucHVzaChiYXR0bGVzaGlwKTtcbiAgICBsZXQgbGVuZ3RoID0gYmF0dGxlc2hpcC5nZXRTaGlwKCkubGVuZ3RoO1xuXG4gICAgbGV0IHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICBsZXQgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIHdoaWxlICghY2hlY2tOb1NoaXAoYmF0dGxlc2hpcC5pc1NoaXBIb3Jpem9udGFsKCksIGxlbmd0aCwgeCwgeSkpIHtcbiAgICAgIHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgIHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICB9XG4gICAgYmF0dGxlc2hpcC5zZXRTdGFydENvb3JkaW5hdGVzKHgsIHkpO1xuICAgIGlmIChiYXR0bGVzaGlwLmlzU2hpcEhvcml6b250YWwoKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFt4ICsgaV1beV0uc2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeF1beSArIGldLnNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjaGVja05vU2hpcChpc0hvcml6b250YWwsIGxlbmd0aCwgeCwgeSkge1xuICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgIGlmICh4IDwgMCB8fCB4ICsgbGVuZ3RoID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbeCArIGldW3ldLnNoaXAgIT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ICsgbGVuZ3RoID4gOSkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbeF1beSArIGldLnNoaXAgIT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGFkZFNoaXAobnVtMSwgbnVtMiwgc2l6ZSA9IDIsIGlzSG9yaXpvbnRhbCA9IHRydWUpIHtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcChzaXplKTtcblxuICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGJvYXJkW251bTFdW251bTIgKyBpXS5zaGlwID0gYmF0dGxlc2hpcDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgYm9hcmRbbnVtMSArIGldW251bTFdLnNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByZXR0eVByaW50KCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV0dHlQcmludCgpIHtcbiAgICBsZXQgc3RyaW5nID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHN0cmluZyArPSBcIlxcblwiO1xuICAgICAgZm9yIChsZXQgbyA9IDA7IG8gPCAxMDsgbysrKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVtvXS5oaXQgPT0gZmFsc2UpIHN0cmluZyArPSBcIlstXVwiO1xuICAgICAgICBlbHNlIGlmICghYm9hcmRbaV1bb10uc2hpcCkgc3RyaW5nICs9IFwiWyBdXCI7XG4gICAgICAgIGVsc2UgaWYgKGJvYXJkW2ldW29dLnNoaXAuaXNTdW5rKCkpIHN0cmluZyArPSBcIltYXVwiO1xuICAgICAgICBlbHNlIGlmIChib2FyZFtpXVtvXS5zaGlwKSBzdHJpbmcgKz0gXCJbU11cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpdFNoaXAobnVtMSwgbnVtMikge1xuICAgIGlmIChudW0xIDwgMCB8fCBudW0yIDwgMCB8fCBudW0xID4gOSB8fCBudW0yID4gOSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKGJvYXJkW251bTFdW251bTJdLmhpdCAhPT0gbnVsbCkge1xuICAgICAgLy9jYW4ndCBoaXQgc29tZXRoaW5nIGFscmVhZHkgaGl0IGJlZm9yZVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoYm9hcmRbbnVtMV1bbnVtMl0uc2hpcCkge1xuICAgICAgLy9pZiBhIHNoaXBcbiAgICAgIGJvYXJkW251bTFdW251bTJdLnNoaXAuaGl0KCk7XG4gICAgICBib2FyZFtudW0xXVtudW0yXS5zaGlwLmlzU3VuaygpO1xuICAgICAgYm9hcmRbbnVtMV1bbnVtMl0uaGl0ID0gdHJ1ZTtcbiAgICAgIC8vIHNlZSBpZiBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgICAgIHByZXR0eVByaW50KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9pZiBhIG1pc3NcbiAgICAgIGJvYXJkW251bTFdW251bTJdLmhpdCA9IGZhbHNlO1xuICAgICAgcHJldHR5UHJpbnQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0FsbFN1bmsoKSB7XG4gICAgbGV0IGFsbFN1bmsgPSBib2FyZC5ldmVyeSgoY29vcmQpID0+XG4gICAgICBjb29yZC5ldmVyeSgoZWxlbWVudCkgPT4gY2hlY2tTaGlwKGVsZW1lbnQpKVxuICAgICk7XG4gICAgLy8gJiYgY29vcmQuc2hpcC5zdW5rID09IGZhbHNlXG4gICAgaWYgKGFsbFN1bmspIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tTaGlwKGNvb3JkKSB7XG4gICAgaWYgKGNvb3JkLnNoaXAgPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIGlmIChjb29yZC5zaGlwLmdldFNoaXAoKS5zdW5rKSByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrSXNTaGlwKGNvb3JkKSB7XG4gICAgaWYgKGNvb3JkLnNoaXAgPT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgZWxzZSBpZiAoY29vcmQuc2hpcCkgcmV0dXJuIHRydWU7IC8vbG9sIHJlZHVkbmF0P1xuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0dXJuLFxuICAgIGdldEJvYXJkLFxuICAgIGxvY2F0aW9uLFxuICAgIGFkZFNoaXAsXG4gICAgaGl0U2hpcCxcbiAgICBwcmV0dHlQcmludCxcbiAgICBjaGVja0FsbFN1bmssXG4gICAgY2hlY2tJc1NoaXAsXG4gICAgZmlsbEJvYXJkUmFuZG9tLFxuICAgIHNoaXBzQXJyYXksXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVib2FyZDtcbiIsImNvbnN0IGdhbWVib2FyZCA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcbmNvbnN0IHNoaXAgPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xuXG5jb25zdCBwbGF5ZXIgPSAobmFtZSwgaXNBSW50LCBudW1iZXIgPSAxKSA9PiB7XG4gIGNvbnN0IGlzQUkgPSBpc0FJbnQ7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBuYW1lO1xuICBjb25zdCBwbGF5ZXJOdW1iZXIgPSBudW1iZXI7XG4gIGNvbnN0IGJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFtdO1xuICBjb25zdCBwb3NzaWJsZU1vdmVzID0gW107XG5cbiAgbGV0IHdpbm5lciA9IGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGxldCBudW07XG4gICAgaWYgKGkgPD0gMikgbnVtID0gMjtcbiAgICBlbHNlIGlmIChpIDw9IDQpIG51bSA9IDM7XG4gICAgZWxzZSBpZiAoaSA8PSA1KSBudW0gPSA0O1xuICAgIGVsc2UgaWYgKGkgPCA3KSBudW0gPSA1O1xuICAgIGNvbnN0IHNoaXAxID0gc2hpcChudW0pO1xuICAgIHNoaXBzLnB1c2goc2hpcDEpO1xuICB9XG5cbiAgZmlsbEFsbFNoaXBzKCk7XG5cbiAgZnVuY3Rpb24gZ2V0QWxsU2hpcHMoKSB7XG4gICAgcmV0dXJuIHNoaXBzO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsbEFsbFNoaXBzKCkge1xuICAgIHNoaXBzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGJvYXJkLmZpbGxCb2FyZFJhbmRvbShlbGVtZW50KTtcbiAgICB9KTtcbiAgICBib2FyZC5wcmV0dHlQcmludCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvb3RDb29yZGluYXRlcyh4ID0gMCwgeSA9IDAsIGlzUm9ib3QpIHtcbiAgICBpZiAoaXNSb2JvdCkge1xuICAgICAgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuXG4gICAgICBpZiAoc2hpcENvb3JkaW5hdGVzLmxlbmd0aCA+PSAxIHx8IHBvc3NpYmxlTW92ZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgLy8gaWYoYm9hcmQuY2hlY2tJc1NoaXAoYm9hcmQubG9jYXRpb24oc2hpcENvb3JkaW5hdGVzWzBdLHNoaXBDb29yZGluYXRlc1sxXSkpKVxuICAgICAgICAvLyAgIHNoaXBDb29yZGluYXRlcy5zcGxpY2UoMCxzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgICAgICAgLy8gICBlbHNle1xuICAgICAgICBpZiAoc2hpcENvb3JkaW5hdGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgeCA9IHNoaXBDb29yZGluYXRlcy5zcGxpY2UoMCwgMSlbMF07XG4gICAgICAgICAgeSA9IHNoaXBDb29yZGluYXRlcy5zcGxpY2UoMCwgMSlbMF07XG4gICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHggKyAxLCB5KTtcbiAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goeCAtIDEsIHkpO1xuICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh4LCB5IC0gMSk7XG4gICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHgsIHkgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29vcmQgPSBwb3NzaWJsZU1vdmVzLnNwbGljZSgwLCAyKTtcbiAgICAgICAgbGV0IGhpdFdoYXQgPSBib2FyZC5oaXRTaGlwKGNvb3JkWzBdLCBjb29yZFsxXSk7XG4gICAgICAgIHdoaWxlIChwb3NzaWJsZU1vdmVzLmxlbmd0aCAhPSAwICYmIGhpdFdoYXQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29vcmQgPSBwb3NzaWJsZU1vdmVzLnNwbGljZSgwLCAyKTtcbiAgICAgICAgICBoaXRXaGF0ID0gYm9hcmQuaGl0U2hpcChjb29yZFswXSwgY29vcmRbMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoaXRXaGF0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGhpdFdoYXQpO1xuICAgICAgICAgIGlmIChoaXRXaGF0KSB7XG4gICAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChjb29yZFswXSk7XG4gICAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChjb29yZFsxXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IG1vdmVQb3NzaWJsZSA9IGJvYXJkLmhpdFNoaXAoeCwgeSk7XG5cbiAgICAgIHdoaWxlIChtb3ZlUG9zc2libGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgIHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgbW92ZVBvc3NpYmxlID0gYm9hcmQuaGl0U2hpcCh4LCB5KTtcbiAgICAgIH1cbiAgICAgIGlmIChtb3ZlUG9zc2libGUgPT0gdHJ1ZSkge1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaCh4KTtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goeSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaHVtYW5cIik7XG4gICAgICBib2FyZC5oaXRTaGlwKHgsIHkpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpc1dpbm5lcigpIHtcbiAgICByZXR1cm4gd2lubmVyO1xuICB9XG4gIGZ1bmN0aW9uIHdvbigpIHtcbiAgICB3aW5uZXIgPSB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldEFsbFNoaXBzLFxuICAgIGJvYXJkLFxuICAgIHNob290Q29vcmRpbmF0ZXMsXG4gICAgcGxheWVyTnVtYmVyLFxuICAgIGdldE5hbWUsXG4gICAgaXNBSSxcbiAgICBpc1dpbm5lcixcbiAgICB3b24sXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoID0gMiwgaXNIb3Jpem9udGFsID0gMCwgc3VuayA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHNoaXAgPSB7XG4gICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgaGl0czogMCxcbiAgICBzdW5rOiBzdW5rLFxuICAgIGhvcml6b250YWw6IHVuZGVmaW5lZCxcbiAgfTtcblxuICBpc0hvcml6b250YWwgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICBzaGlwLmhvcml6b250YWwgPSBpc0hvcml6b250YWwgPT0gMTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgc2hpcC5oaXRzICs9IDE7XG4gICAgcmV0dXJuIHNoaXAuaGl0cztcbiAgfTtcbiAgZnVuY3Rpb24gaXNTaGlwSG9yaXpvbnRhbCgpIHtcbiAgICByZXR1cm4gc2hpcC5ob3Jpem9udGFsO1xuICB9XG4gIGNvbnN0IGdldFNoaXAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXA7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChzaGlwLmhpdHMgPT0gc2hpcC5sZW5ndGgpIHNoaXAuc3VuayA9IHRydWU7XG4gICAgcmV0dXJuIHNoaXAuc3VuaztcbiAgfTtcbiAgY29uc3Qgc2V0U3RhcnRDb29yZGluYXRlcyA9ICh4LCB5KSA9PiB7XG4gICAgc2hpcC5jb29yZGluYXRlID0gW3gsIHldO1xuICB9O1xuXG4gIGNvbnN0IGdldFN0YXJ0Q29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXAuY29vcmRpbmF0ZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBTaGlwLFxuICAgIGdldFNoaXAsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBpc1NoaXBIb3Jpem9udGFsLFxuICAgIHNldFN0YXJ0Q29vcmRpbmF0ZXMsXG4gICAgZ2V0U3RhcnRDb29yZGluYXRlcyxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJjb25zdCBwbGF5ZXIgPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG5pbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuXG5sZXQgaXNBaSA9IHRydWU7XG5cbmxldCBwbGF5ZXIxID0gcGxheWVyKFwiUGxheWVyMVwiLCAhaXNBaSwgMSk7XG5sZXQgcGxheWVyMiA9IHBsYXllcihcIkFJXCIsIGlzQWksIDIpO1xuXG5sZXQgaSA9IDA7XG5sZXQgd2lubmVyID0gZmFsc2U7XG5cbmNvbnN0IG5ld0dhbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnRcIik7XG5jb25zdCBzdGFydEdhbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0XCIpO1xuXG4vLyBidXR0b24gdG8gc3RhcnQgZ2FtZVxubmV3R2FtZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheUdhbWUpO1xuc3RhcnRHYW1lRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRFdmVudExpc3RlbmVyR2FtZVN0YXJ0KTtcblxuY29uc3QgcGxheWVyMUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJvbmVncmlkXCIpO1xuXG5jb25zdCBwbGF5ZXIxRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyb25lRGlzcGxheVwiKTtcblxuY29uc3QgcGxheWVyMkJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJ0d29ncmlkXCIpO1xucGxheUdhbWUoKTtcblxuLy8gbWFrZSBhIGJvYXJkIG9uIHdlYnNpdGVcbmZ1bmN0aW9uIHBsYXlHYW1lKCkge1xuICBzdGFydEdhbWVEaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgcGxheWVyMSA9IHBsYXllcihcIlBsYXllcjFcIiwgIWlzQWksIDEpO1xuICBwbGF5ZXIyID0gcGxheWVyKFwiQUlcIiwgaXNBaSwgMik7XG4gIGNvbnNvbGUubG9nKFwibmV3IGdhbWVcIik7XG5cbiAgbWFrZUFHcmlkKHBsYXllcjFCb2FyZCk7XG4gIG1ha2VBR3JpZChwbGF5ZXIxRGlzcGxheSk7XG4gIG1ha2VBR3JpZChwbGF5ZXIyQm9hcmQpO1xuXG4gIHNldFByZWxpbWluYXJ5Qm9hcmQoKTtcbn1cblxuLy8gcGxheUdhbWUoKTsgIC8vd2lsbCBuZWVkIHRvIGNoYW5nZSBmb3Igd2hlbiB0aGVyZSBpcyBhIHVzZXIgaW50ZXJmYWNlXG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJHYW1lU3RhcnQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHVwZGF0ZURpc3BsYXkoKTtcbiAgY2hlY2tUdXJuKCk7XG5cbiAgY29uc29sZS5sb2coXCJhZGRMaXN0ZW5yc1wiKTtcblxuICBzdGFydEdhbWVEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgcGxheWVyMi5ib2FyZC5nZXRCb2FyZCgpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcnR3b2dyaWRcIik7XG5cbiAgICBlbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBudW1iZXIgPSBcIlwiICsgZWxlbWVudC54ICsgZWxlbWVudC55O1xuICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2YWx1bGF0ZVBsYXllckNsaWNrKTtcbiAgICAgIC8vIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ1NoaXApO1xuICAgICAgLy8gYm94LmNoaWxkTm9kZXNbK251bWJlcl0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdnaW5nZnVuY3Rpb24pO1xuICAgICAgLy8gYm94LmNoaWxkTm9kZXNbK251bWJlcl0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJhZ1NoaXBFbmQpO1xuICAgIH0pO1xuICB9KTtcblxuICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyb25lZ3JpZFwiKTtcblxuICAgIGVsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IG51bWJlciA9IFwiXCIgKyBlbGVtZW50LnggKyBlbGVtZW50Lnk7XG4gICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdTaGlwKTtcbiAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdnaW5nZnVuY3Rpb24pO1xuICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJhZ1NoaXBFbmQpO1xuICAgIH0pO1xuICB9KTtcbn1cbi8vIGJlZm9yZSBnYW1lIHN0YXJ0c1xuZnVuY3Rpb24gZHJhZ1NoaXAoZSkge1xuICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5jbGFzc0xpc3RbMl0pO1xuICBsZXQgc2hpcE5hbWUgPSBlLnRhcmdldC5jbGFzc0xpc3RbMl07XG4gIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNoaXBOYW1lKTtcbiAgLy8gbGV0IHNoaXBDb29yZGluYXRlID0gW107XG4gIC8vIGNvbnNvbGUubG9nKHNoaXApO1xuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBlLnRhcmdldC5pZCk7XG4gIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcImNvcHlcIjtcbiAgLy8gZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoO2krKyl7XG4gIC8vICAgc2hpcENvb3JkaW5hdGUucHVzaChzaGlwW2ldLmlkKTtcblxuICAvLyB9XG59XG5mdW5jdGlvbiBkcmFnZ2luZ2Z1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZnVuY3Rpb24gZHJhZ1NoaXBFbmQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHVzZXJDbGlja2VkQ29vcmRpbmF0ZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICBsZXQgc291cmNlU2hpcENvb3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dXNlckNsaWNrZWRDb29yZGluYXRlfWApO1xuICBsZXQgc291cmNlU2hpcE5hbWVBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgYC4ke3NvdXJjZVNoaXBDb29yZC5jbGFzc0xpc3RbMl19YFxuICApO1xuICBjb25zdCBzaGlwQ29vcmRzID0gW107XG4gIHNvdXJjZVNoaXBOYW1lQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGxldCB4eSA9IGVsZW1lbnQuaWQuc3BsaXQoXCJcIik7XG4gICAgc2hpcENvb3Jkcy5wdXNoKCt4eVswXSk7XG4gICAgc2hpcENvb3Jkcy5wdXNoKCt4eVsxXSk7XG4gIH0pO1xuICBsZXQgY29vcmRpbmF0ZSA9IHVzZXJDbGlja2VkQ29vcmRpbmF0ZS5zcGxpdChcIlwiKTtcblxuICBsZXQgc2hpcEluc3RhbmNlID1cbiAgICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK2Nvb3JkaW5hdGVbMF1dWytjb29yZGluYXRlWzFdXS5zaGlwO1xuXG4gIC8vIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVxuICAvLyBjb25zb2xlLmxvZyhzb3VyY2VTaGlwKTtcblxuICBsZXQgdGFyZ2V0SUQgPSBlLnRhcmdldC5pZDtcblxuICBjaGVja1VwZGF0ZUdhbWVCb2FyZChcbiAgICBzaGlwQ29vcmRzLFxuICAgIHNoaXBJbnN0YW5jZSxcbiAgICB1c2VyQ2xpY2tlZENvb3JkaW5hdGUsXG4gICAgdGFyZ2V0SURcbiAgKTtcblxuICBtYWtlQUdyaWQocGxheWVyMUJvYXJkKTtcbiAgbWFrZUFHcmlkKHBsYXllcjFEaXNwbGF5KTtcbiAgc2V0UHJlbGltaW5hcnlCb2FyZCgpO1xufVxuXG4vLyB9XG5cbmZ1bmN0aW9uIGNoZWNrVXBkYXRlR2FtZUJvYXJkKHNoaXBDb29yZCwgc2hpcEluc3RhbmNlLCBzb3VyY2VEYXRhLCB0YXJnZXRJRCkge1xuICBsZXQgYWRkO1xuICBsZXQgbmV3UG9zaXRpb25Db29yZDtcbiAgbGV0IG5ld1Bvc2l0aW9uSG9sZGVyO1xuICAvLyBjb29yZGluYXRlcyBhZGQgdG8gZGV0ZXJtaW5lIGN1cnJlbnQgc2hpcCdzIG5leHQgY29vcmRpbmF0ZXNcbiAgIXBsYXllcjEuYm9hcmRcbiAgICAuZ2V0Qm9hcmQoKVxuICAgIFsrc2hpcENvb3JkWzBdXVsrc2hpcENvb3JkWzFdXS5zaGlwLmlzU2hpcEhvcml6b250YWwoKVxuICAgID8gKGFkZCA9IDEpXG4gICAgOiAoYWRkID0gMTApO1xuXG4gIG5ld1Bvc2l0aW9uQ29vcmQgPSBmaW5kU3RhcnRQb3NpdGlvbihcbiAgICBhZGQsXG4gICAgc2hpcENvb3JkLFxuICAgIGZpbmRDb29yZGluYXRlRGlmZmVyZW5jZShzaGlwQ29vcmQsIHNvdXJjZURhdGEpLFxuICAgIHRhcmdldElEXG4gICk7XG5cbiAgaWYgKFxuICAgIGNoZWNrTmV3Q29vcmRpbmF0ZVBvc3NpYmxlKFxuICAgICAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpWytzaGlwQ29vcmRbMF1dWytzaGlwQ29vcmRbMV1dLnNoaXAsXG4gICAgICBzaGlwQ29vcmQsXG4gICAgICBuZXdQb3NpdGlvbkNvb3JkXG4gICAgKVxuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbmV3UG9zaXRpb25Ib2xkZXIgPSBuZXdQb3NpdGlvbkNvb3JkO1xuXG4gIC8vIGl0ZXJhdGVzIHRocm91Z2ggc2hpcCBjb29yZGluYXRlcy5cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb29yZC5sZW5ndGg7IGkrKykge1xuICAgIC8vY2hlY2sgdGFyZ2V0IGhhcyBubyBzaGlwXG4gICAgbGV0IG5ld1NoaXBDb29yZFhZID0gZ2V0TmV3U2hpcENvb3JkaW5hdGUobmV3UG9zaXRpb25Ib2xkZXIpO1xuICAgIGlmIChcbiAgICAgIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVsrbmV3U2hpcENvb3JkWFlbMF1dWytuZXdTaGlwQ29vcmRYWVsxXV0uc2hpcCAmJlxuICAgICAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpWytuZXdTaGlwQ29vcmRYWVswXV1bK25ld1NoaXBDb29yZFhZWzFdXS5zaGlwICE9XG4gICAgICAgIHNoaXBJbnN0YW5jZVxuICAgIClcbiAgICAgIHJldHVybjtcblxuICAgIG5ld1Bvc2l0aW9uSG9sZGVyICs9IGFkZDtcbiAgICBpKys7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmQubGVuZ3RoOyBpKyspIHtcbiAgICAvL3JlbW92ZSBjdXJyZW50IHNoaXBcbiAgICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK3NoaXBDb29yZFtpXV1bK3NoaXBDb29yZFtpICsgMV1dLnNoaXAgPSB1bmRlZmluZWQ7XG4gICAgaSsrO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG5ld1NoaXBDb29yZFhZID0gZ2V0TmV3U2hpcENvb3JkaW5hdGUobmV3UG9zaXRpb25Db29yZCk7XG5cbiAgICBpZiAoaSA9PT0gMClcbiAgICAgIHNoaXBJbnN0YW5jZS5zZXRTdGFydENvb3JkaW5hdGVzKCtuZXdTaGlwQ29vcmRYWVswXSwgK25ld1NoaXBDb29yZFhZWzFdKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCtuZXdTaGlwQ29vcmRYWVswXSwgK25ld1NoaXBDb29yZFhZWzFdKTtcbiAgICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK25ld1NoaXBDb29yZFhZWzBdXVsrbmV3U2hpcENvb3JkWFlbMV1dLnNoaXAgPVxuICAgICAgc2hpcEluc3RhbmNlO1xuICAgIGkrKztcbiAgICBuZXdQb3NpdGlvbkNvb3JkICs9IGFkZDtcbiAgfVxufVxuZnVuY3Rpb24gY2hlY2tOZXdDb29yZGluYXRlUG9zc2libGUocGxheWVyU2hpcCwgc2hpcENvb3JkLCBuZXdQb3NpdGlvbkNvb3JkKSB7XG4gIGlmICghcGxheWVyU2hpcC5pc1NoaXBIb3Jpem9udGFsKCkpIHtcbiAgICBpZiAoKG5ld1Bvc2l0aW9uQ29vcmQgJSAxMCkgKyBzaGlwQ29vcmQubGVuZ3RoIC8gMiA+IDEwKSByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoTWF0aC5yb3VuZChuZXdQb3NpdGlvbkNvb3JkIC8gMTAgLSAwLjQ5KSArIHNoaXBDb29yZC5sZW5ndGggLyAyID4gMTApXG4gICAgICByZXR1cm47XG4gIH1cbn1cblxuLy8gZmluZCBzdGFydCooYWthIGVuZCkgZWRnZSBvZiBzaGlwIChib3R0b20gb3IgcmlnaHQgZWRnZSlcbmZ1bmN0aW9uIGZpbmRDb29yZGluYXRlRGlmZmVyZW5jZShzaGlwQ29vcmQsIHNvdXJjZURhdGEpIHtcbiAgY29uc3QgYW5zd2VyID1cbiAgICBzaGlwQ29vcmRbc2hpcENvb3JkLmxlbmd0aCAtIDJdICogMTAgK1xuICAgIHNoaXBDb29yZFtzaGlwQ29vcmQubGVuZ3RoIC0gMV0gLVxuICAgIHNvdXJjZURhdGE7XG4gIC8vIGNvbnNvbGUubG9nKHNoaXBDb29yZCwgXCItXCIsIHNvdXJjZURhdGEsIFwiZGlmZmVyZW5jZVwiLCBhbnN3ZXIpO1xuXG4gIHJldHVybiBhbnN3ZXI7XG59XG5mdW5jdGlvbiBmaW5kU3RhcnRQb3NpdGlvbihhZGQsIHNoaXBDb29yZCwgZGlmZmVyZW5jZSwgdGFyZ2V0SUQpIHtcbiAgLy8gY29uc29sZS5sb2coYWRkLCBcIi1cIiwgc2hpcENvb3JkLCBcIi1cIiwgZGlmZmVyZW5jZSwgXCItXCIsIHRhcmdldElEKTtcbiAgcmV0dXJuICt0YXJnZXRJRCArIGRpZmZlcmVuY2UgLSAoc2hpcENvb3JkLmxlbmd0aCAvIDIgLSAxKSAqIGFkZDtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3U2hpcENvb3JkaW5hdGUobmV3UG9zaXRpb25Db29yZCkge1xuICBjb25zb2xlLmxvZyhuZXdQb3NpdGlvbkNvb3JkKTtcbiAgaWYgKG5ld1Bvc2l0aW9uQ29vcmQgPD0gOSkge1xuICAgIHJldHVybiBgMCR7bmV3UG9zaXRpb25Db29yZH1gLnNwbGl0KFwiXCIpO1xuICB9IGVsc2UgcmV0dXJuIGAke25ld1Bvc2l0aW9uQ29vcmR9YC5zcGxpdChcIlwiKTtcbn1cblxuLy8gZGVmYXVsdCBncmlkIGZvciBnYW1lYm9hcmRcbmZ1bmN0aW9uIG1ha2VBR3JpZChwYXJlbnREaXYpIHtcbiAgcGFyZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IG8gPSAwOyBvIDwgMTA7IG8rKykge1xuICAgICAgY29uc3QgYm94R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGJveEdyaWQuY2xhc3NMaXN0LmFkZChcImJveFwiKTtcbiAgICAgIGJveEdyaWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7aX0ke299YCk7XG4gICAgICBpZiAocGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpW2ldW29dLnNoaXApIHtcbiAgICAgICAgYm94R3JpZC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICBib3hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ1NoaXApO1xuICAgICAgfVxuICAgICAgYm94R3JpZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ2dpbmdmdW5jdGlvbik7XG4gICAgICAvLyBib3hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3BlbmQnLGRyYWdTaGlwRW5kKTtcbiAgICAgIGJveEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJhZ1NoaXBFbmQpO1xuICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGJveEdyaWQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBmb3IgYWZ0ZXIgZ2FtZSBzdGFydGVkXG5mdW5jdGlvbiBldmFsdWxhdGVQbGF5ZXJDbGljayhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKHBsYXllcjEuaXNXaW5uZXIoKSB8fCBwbGF5ZXIyLmlzV2lubmVyKCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKFxuICAgIHBsYXllcjEuYm9hcmQudHVybiArIHBsYXllcjIuYm9hcmQudHVybiA9PSAwICYmXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCA9PT0gXCJwbGF5ZXJvbmVncmlkXCJcbiAgKSB7XG4gICAgLy9nYW1lIGhhcyBub3Qgc3RhcnRlZC4gY2FuIG1vdmUgc2hpcHMuLi4uXG4gICAgbGV0IGNvb3JkID0gZS50YXJnZXQuaWQuc3BsaXQoXCJcIik7XG4gICAgaWYgKHBsYXllcjEuYm9hcmQuY2hlY2tJc1NoaXAocGxheWVyMS5ib2FyZC5sb2NhdGlvbihjb29yZFswXSwgY29vcmRbMV0pKSkge1xuICAgICAgLy8gdmFyIGRhdGEgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKGUudGFyZ2V0KTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoXG4gICAgcGxheWVyMS5ib2FyZC50dXJuID09IHBsYXllcjIuYm9hcmQudHVybiAmJlxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQgPT09IFwicGxheWVydHdvZ3JpZFwiXG4gICkge1xuICAgIC8vIHBsYXllciAxIHR1cm5cbiAgICBwbGF5ZXIxLmJvYXJkLnR1cm4rKztcbiAgICBsZXQgY29vcmQgPSBlLnRhcmdldC5pZC5zcGxpdChcIlwiKTtcbiAgICBpZiAocGxheWVyMi5ib2FyZC5oaXRTaGlwKGNvb3JkWzBdLCBjb29yZFsxXSkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwbGF5ZXIxLmJvYXJkLnR1cm4tLTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdXBkYXRlQm9hcmRHYW1lTGl2ZSgpO1xuICAgIGNoZWNrV2lubmVyKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJBTEwgVU5JVFMgTVVTVCBBVFRBQ0sgRU5FTVkuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBwbGF5ZXIyLmJvYXJkLnR1cm4rKztcbiAgcGxheWVyMS5zaG9vdENvb3JkaW5hdGVzKDAsIDAsIHBsYXllcjIuaXNBSSk7XG4gIHVwZGF0ZUJvYXJkR2FtZUxpdmUoKTtcbiAgY2hlY2tUdXJuKCk7XG5cbiAgY2hlY2tXaW5uZXIoKTtcbn1cbmZ1bmN0aW9uIGNoZWNrVHVybigpIHtcbiAgY29uc3QgdHVybkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVyblwiKTtcbiAgaWYgKHBsYXllcjEuYm9hcmQudHVybiA9PSBwbGF5ZXIyLmJvYXJkLnR1cm4pIHtcbiAgICB0dXJuRGl2LnRleHRDb250ZW50ID0gXCJQTEFZRVIgT05FIFRVUk4gXCI7XG4gIH1cbiAgaWYgKHBsYXllcjEuYm9hcmQudHVybiA+IHBsYXllcjIuYm9hcmQudHVybikge1xuICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSBcIlBMQVlFUiBUV08gVFVSTlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyb25lRGlzcGxheVwiKTtcbiAgcGxheWVyMS5ib2FyZC5zaGlwc0FycmF5LmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCBjb29yZCA9IHNoaXAuZ2V0U3RhcnRDb29yZGluYXRlcygpO1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmdldFNoaXAoKS5sZW5ndGg7XG4gICAgbGV0IG51bWJlciA9IFwiXCIgKyBjb29yZFswXSArIGNvb3JkWzFdO1xuICAgIC8vIGlmIChzaGlwLmdldFNoaXAoKSA9PT0gZWxlbWVudC5zaGlwLmdldFNoaXAoKSkge1xuICAgIGxldCB0cmFuc2xhdGVYQW1vdW50ID0gMzY7XG4gICAgbGV0IHRyYW5zbGF0ZUZpeCA9IDE7XG4gICAgc3dpdGNoIChzaGlwTGVuZ3RoKSB7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRyYW5zbGF0ZUZpeCA9IDEuNjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHRyYW5zbGF0ZUZpeCA9IDAuODg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICB0cmFuc2xhdGVGaXggPSAwLjc1O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRyYW5zbGF0ZUZpeCA9IDE7XG4gICAgfVxuICAgIHN3aXRjaCAoc2hpcExlbmd0aCkge1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0cmFuc2xhdGVYQW1vdW50ID0gMjg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICB0cmFuc2xhdGVYQW1vdW50ID0gMzg7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC50b2dnbGUoYGJhdHRsZXNoaXAke3NoaXBMZW5ndGh9YCk7XG4gICAgaWYgKCFzaGlwLmlzU2hpcEhvcml6b250YWwoKSkge1xuICAgICAgLy8gYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnRvZ2dsZShgaG9yaXpvbnRhbGApO1xuICAgICAgYm94LmNoaWxkTm9kZXNbXG4gICAgICAgICtudW1iZXJcbiAgICAgIF0uc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c2hpcExlbmd0aH0pIHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYQW1vdW50fSUpIHRyYW5zbGF0ZVkoJHtcbiAgICAgICAgdHJhbnNsYXRlWEFtb3VudCAqIHRyYW5zbGF0ZUZpeFxuICAgICAgfSUpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnRvZ2dsZShgdmVydGljYWxgKTtcbiAgICAgIGJveC5jaGlsZE5vZGVzW1xuICAgICAgICArbnVtYmVyXG4gICAgICBdLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoOTBkZWcpIHNjYWxlKCR7c2hpcExlbmd0aH0pIHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYQW1vdW50fSUpIHRyYW5zbGF0ZVkoJHtcbiAgICAgICAgdHJhbnNsYXRlWEFtb3VudCAqIHRyYW5zbGF0ZUZpeFxuICAgICAgfSUpIGA7XG4gICAgfVxuICAgIC8vIH1cbiAgfSk7XG59XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfVxuXG4vLyBCRUZPUkUgR0FNRSBTVEFSVFNcbmZ1bmN0aW9uIHNldFByZWxpbWluYXJ5Qm9hcmQoKSB7XG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyb25lZ3JpZFwiKTtcblxuICBjb25zb2xlLmxvZyhwbGF5ZXIxLmJvYXJkLnByZXR0eVByaW50KCkpO1xuICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IG51bWJlciA9IFwiXCIgKyBlbGVtZW50LnggKyBlbGVtZW50Lnk7XG4gICAgICBpZiAoIWVsZW1lbnQuc2hpcCkge1xuICAgICAgICByZXR1cm4gYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnJlbW92ZShgc2hpcGApO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQuc2hpcC5nZXRTaGlwKCkpIHtcbiAgICAgICAgbGV0IG51bSA9IDA7XG5cbiAgICAgICAgcGxheWVyMS5ib2FyZC5zaGlwc0FycmF5LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICBpZiAoc2hpcC5nZXRTaGlwKCkgPT09IGVsZW1lbnQuc2hpcC5nZXRTaGlwKCkpIHtcbiAgICAgICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5hZGQoYHNoaXBgKTtcbiAgICAgICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5hZGQoYHNoaXAke251bX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbnVtKys7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbi8vIFdIRU4gR0FNRSBTVEFSVFNcbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkR2FtZUxpdmUoKSB7XG4gIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgbnVtID0gMDtcbiAgICAgIGxldCBudW1iZXIgPSBcIlwiICsgZWxlbWVudC54ICsgZWxlbWVudC55O1xuICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJvbmVncmlkXCIpO1xuICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgaWYgKGVsZW1lbnQuaGl0ID09IGZhbHNlKVxuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QudG9nZ2xlKFwibWlzc1wiKTtcbiAgICAgIGVsc2UgaWYgKCFlbGVtZW50LnNoaXApIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGVsc2UgaWYgKGVsZW1lbnQuc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnRvZ2dsZShcInN1bmtcIik7XG4gICAgICBlbHNlIGlmIChlbGVtZW50LmhpdCA9PSB0cnVlKVxuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QudG9nZ2xlKFwiaGl0XCIpO1xuICAgICAgZWxzZSBpZiAoZWxlbWVudC5zaGlwKSB7XG4gICAgICAgIHBsYXllcjEuYm9hcmQuc2hpcHNBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgaWYgKHNoaXAuZ2V0U2hpcCgpID09PSBlbGVtZW50LnNoaXAuZ2V0U2hpcCgpKSB7XG4gICAgICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QuYWRkKGBzaGlwJHtudW19YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG51bSsrO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHBsYXllcjIuYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgbnVtYmVyID0gXCJcIiArIGVsZW1lbnQueCArIGVsZW1lbnQueTtcbiAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVydHdvZ3JpZFwiKTtcbiAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgaWYgKGVsZW1lbnQuaGl0ID09IGZhbHNlKSBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgIGVsc2UgaWYgKCFlbGVtZW50LnNoaXApIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGVsc2UgaWYgKGVsZW1lbnQuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGl0XCIpO1xuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oaXQgPT0gdHJ1ZSlcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2lubmVyKCkge1xuICBjb25zdCB0dXJuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50dXJuXCIpO1xuXG4gIGlmIChwbGF5ZXIyLmJvYXJkLmNoZWNrQWxsU3VuaygpKSB7XG4gICAgdHVybkRpdi50ZXh0Q29udGVudCA9IFwiUGxheWVyIDEgV09OXCI7XG4gICAgcGxheWVyMS53b24oKTtcbiAgfVxuICBpZiAocGxheWVyMS5ib2FyZC5jaGVja0FsbFN1bmsoKSkge1xuICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSBcIlBsYXllciAyIFdPTlwiO1xuICAgIHBsYXllcjIud29uKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==