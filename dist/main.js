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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"RobotoReg\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"RobotoBold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nbody {\n  font-family: \"RobotoReg\", Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n  width: 100vw;\n}\n\n.header {\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid grey;\n  height: 70px;\n  font-size: 25px;\n}\n\n/* making a board */\n#playeronegrid,\n#playertwogrid,\n#playeroneDisplay {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n}\n#playeroneDisplay {\n  position: absolute;\n  transform: translateY(-100%);\n}\n#playeroneDisplay > .box {\n  padding: 1px;\n  border: none;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 100px;\n}\n\n.box {\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n  z-index: 99;\n}\n\n.turn {\n  font-family: RobotoBold, Arial, Helvetica, sans-serif;\n  margin: 10px 10px;\n  margin-bottom: 30px;\n  border: 1px solid grey;\n  padding: 10px 20px;\n  color: white;\n  background-color: black;\n  position: relative;\n}\n\n.ship {\n  background-color: rgb(99, 250, 255);\n}\n\n.battleship1,\n.battleship2,\n.battleship3,\n.battleship4,\n.battleship5,\n.battleship6 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\n  background-repeat: no-repeat;\n  background-size: 100%;\n  border: none;\n}\n\n/* each ship */\n.hit,\n.sunk {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hit::before {\n  content: \"\";\n  display: flex;\n  justify-content: center;\n  color: black;\n  border: 8px solid red;\n\n  border-radius: 50%;\n}\n.miss {\n  background-color: rgb(195, 237, 247);\n  opacity: 90%;\n}\n.sunk {\n  font-weight: 800;\n  font-size: 30px;\n}\n.sunk::before {\n  content: \"X\";\n  color: red;\n}\n\n/* BUTTONS */\nbutton {\n  background-color: white;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 5px;\n  width: 100px;\n}\n.restart {\n  background-color: white;\n  margin: 20px;\n\n  position: fixed;\n  left: 0;\n}\n\n.restart:active {\n  position: absolute;\n  top: 2px;\n}\n\nbutton:active {\n  position: relative;\n  top: 2px;\n}\n.hidden {\n  display: none;\n}\n\n.start {\n  width: 150px;\n  background-color: rgb(202, 242, 255);\n  margin: 10px;\n}\n\n.info {\n  border: 1px solid white;\n  width: 13px;\n  border-radius: 50%;\n  position: absolute;\n  font-size: 15px;\n  right: 2px;\n  text-align: center;\n  bottom: 3px;\n}\n.infotext {\n  position: absolute;\n  color: black;\n  border: 1px solid grey;\n  border-radius: 10px;\n  padding: 5px;\n  top: 25px;\n  right: -200%;\n  min-width: 200px;\n}\n\n@media only screen and (max-width: 1200px) {\n  .gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .box {\n    height: 38px;\n    width: 38px;\n    border: 1px solid black;\n  }\n}\n@media only screen and (max-width: 550px) {\n  .gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .box {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,4CAAmC;AACrC;;AAEA;EACE,sDAAsD;EACtD,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA,mBAAmB;AACnB;;;EAGE,aAAa;EACb,mCAAmC;EACnC,sCAAsC;AACxC;AACA;EACE,kBAAkB;EAClB,4BAA4B;AAC9B;AACA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,qDAAqD;EACrD,iBAAiB;EACjB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;;;;;;EAME,yDAA4C;;EAE5C,4BAA4B;EAC5B,qBAAqB;EACrB,YAAY;AACd;;AAEA,cAAc;AACd;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,qBAAqB;;EAErB,kBAAkB;AACpB;AACA;EACE,oCAAoC;EACpC,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA,YAAY;AACZ;EACE,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,YAAY;;EAEZ,eAAe;EACf,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,QAAQ;AACV;AACA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,uBAAuB;EACzB;AACF;AACA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,uBAAuB;EACzB;AACF","sourcesContent":["@font-face {\n  font-family: \"RobotoReg\";\n  src: url(\"./asset/Roboto-Regular.ttf\");\n}\n@font-face {\n  font-family: \"RobotoBold\";\n  src: url(\"./asset/Roboto-Bold.ttf\");\n}\n\nbody {\n  font-family: \"RobotoReg\", Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n  width: 100vw;\n}\n\n.header {\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid grey;\n  height: 70px;\n  font-size: 25px;\n}\n\n/* making a board */\n#playeronegrid,\n#playertwogrid,\n#playeroneDisplay {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n}\n#playeroneDisplay {\n  position: absolute;\n  transform: translateY(-100%);\n}\n#playeroneDisplay > .box {\n  padding: 1px;\n  border: none;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 100px;\n}\n\n.box {\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n  z-index: 99;\n}\n\n.turn {\n  font-family: RobotoBold, Arial, Helvetica, sans-serif;\n  margin: 10px 10px;\n  margin-bottom: 30px;\n  border: 1px solid grey;\n  padding: 10px 20px;\n  color: white;\n  background-color: black;\n  position: relative;\n}\n\n.ship {\n  background-color: rgb(99, 250, 255);\n}\n\n.battleship1,\n.battleship2,\n.battleship3,\n.battleship4,\n.battleship5,\n.battleship6 {\n  background-image: url(\"./asset/carrier.svg\");\n\n  background-repeat: no-repeat;\n  background-size: 100%;\n  border: none;\n}\n\n/* each ship */\n.hit,\n.sunk {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hit::before {\n  content: \"\";\n  display: flex;\n  justify-content: center;\n  color: black;\n  border: 8px solid red;\n\n  border-radius: 50%;\n}\n.miss {\n  background-color: rgb(195, 237, 247);\n  opacity: 90%;\n}\n.sunk {\n  font-weight: 800;\n  font-size: 30px;\n}\n.sunk::before {\n  content: \"X\";\n  color: red;\n}\n\n/* BUTTONS */\nbutton {\n  background-color: white;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 5px;\n  width: 100px;\n}\n.restart {\n  background-color: white;\n  margin: 20px;\n\n  position: fixed;\n  left: 0;\n}\n\n.restart:active {\n  position: absolute;\n  top: 2px;\n}\n\nbutton:active {\n  position: relative;\n  top: 2px;\n}\n.hidden {\n  display: none;\n}\n\n.start {\n  width: 150px;\n  background-color: rgb(202, 242, 255);\n  margin: 10px;\n}\n\n.info {\n  border: 1px solid white;\n  width: 13px;\n  border-radius: 50%;\n  position: absolute;\n  font-size: 15px;\n  right: 2px;\n  text-align: center;\n  bottom: 3px;\n}\n.infotext {\n  position: absolute;\n  color: black;\n  border: 1px solid grey;\n  border-radius: 10px;\n  padding: 5px;\n  top: 25px;\n  right: -200%;\n  min-width: 200px;\n}\n\n@media only screen and (max-width: 1200px) {\n  .gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .box {\n    height: 38px;\n    width: 38px;\n    border: 1px solid black;\n  }\n}\n@media only screen and (max-width: 550px) {\n  .gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .box {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "updateDisplayWithShipImage": () => (/* binding */ updateDisplayWithShipImage)
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

function updateDisplayWithShipImage() {
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
addInfoHelper();
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
  (0,_Controller__WEBPACK_IMPORTED_MODULE_0__.updateDisplayWithShipImage)();
  (0,_Controller__WEBPACK_IMPORTED_MODULE_0__.checkTurn)();

  startGameDiv.classList.toggle("hidden");
  player2.board.getBoard().forEach((element) => {
    const box = document.querySelector("#playertwogrid");

    element.forEach((element) => {
      let number = "" + element.x + element.y;
      box.childNodes[+number].addEventListener("click", _Controller__WEBPACK_IMPORTED_MODULE_0__.evalulatePlayerClick);
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

function addInfoHelper() {
  const info = document.querySelector(".info");
  const newDiv = document.createElement("div");
  newDiv.classList.add("infotext");
  newDiv.classList.add("hidden");
  info.appendChild(newDiv);
  info.addEventListener("mouseover", showHelp);
  info.addEventListener("mouseout", removeHelp);
}

function showHelp() {
  const infotext = document.querySelector(".infotext");
  infotext.classList.remove("hidden");
  infotext.textContent = "Double Click to Rotate";
}

function removeHelp() {
  const infotext = document.querySelector(".infotext");
  infotext.classList.add("hidden");
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Db250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0L1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXQvUm9ib3RvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9jYXJyaWVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1JlZ1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9Cb2xkXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1JlZ1xcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi8qIG1ha2luZyBhIGJvYXJkICovXFxuI3BsYXllcm9uZWdyaWQsXFxuI3BsYXllcnR3b2dyaWQsXFxuI3BsYXllcm9uZURpc3BsYXkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcbiNwbGF5ZXJvbmVEaXNwbGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxufVxcbiNwbGF5ZXJvbmVEaXNwbGF5ID4gLmJveCB7XFxuICBwYWRkaW5nOiAxcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uYm94IHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuXFxuLnR1cm4ge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDEwcHggMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMjUwLCAyNTUpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcDEsXFxuLmJhdHRsZXNoaXAyLFxcbi5iYXR0bGVzaGlwMyxcXG4uYmF0dGxlc2hpcDQsXFxuLmJhdHRsZXNoaXA1LFxcbi5iYXR0bGVzaGlwNiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcblxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogZWFjaCBzaGlwICovXFxuLmhpdCxcXG4uc3VuayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDhweCBzb2xpZCByZWQ7XFxuXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDIzNywgMjQ3KTtcXG4gIG9wYWNpdHk6IDkwJTtcXG59XFxuLnN1bmsge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLnN1bms6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiWFxcXCI7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBCVVRUT05TICovXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuLnJlc3RhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDIwcHg7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ucmVzdGFydDphY3RpdmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycHg7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxufVxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN0YXJ0IHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDI0MiwgMjU1KTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmluZm8ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICB3aWR0aDogMTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHJpZ2h0OiAycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3R0b206IDNweDtcXG59XFxuLmluZm90ZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdG9wOiAyNXB4O1xcbiAgcmlnaHQ6IC0yMDAlO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICB9XFxuXFxuICAuYm94IHtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICB3aWR0aDogMzhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICB9XFxuXFxuICAuYm94IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsNENBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQSxtQkFBbUI7QUFDbkI7OztFQUdFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBOzs7Ozs7RUFNRSx5REFBNEM7O0VBRTVDLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBLGNBQWM7QUFDZDs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixxQkFBcUI7O0VBRXJCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7O0VBRVosZUFBZTtFQUNmLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7RUFDekI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1JlZ1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldC9Sb2JvdG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b0JvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXQvUm9ib3RvLUJvbGQudHRmXFxcIik7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9SZWdcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4vKiBtYWtpbmcgYSBib2FyZCAqL1xcbiNwbGF5ZXJvbmVncmlkLFxcbiNwbGF5ZXJ0d29ncmlkLFxcbiNwbGF5ZXJvbmVEaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4jcGxheWVyb25lRGlzcGxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbn1cXG4jcGxheWVyb25lRGlzcGxheSA+IC5ib3gge1xcbiAgcGFkZGluZzogMXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmJveCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgei1pbmRleDogOTk7XFxufVxcblxcbi50dXJuIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDI1MCwgMjU1KTtcXG59XFxuXFxuLmJhdHRsZXNoaXAxLFxcbi5iYXR0bGVzaGlwMixcXG4uYmF0dGxlc2hpcDMsXFxuLmJhdHRsZXNoaXA0LFxcbi5iYXR0bGVzaGlwNSxcXG4uYmF0dGxlc2hpcDYge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0L2NhcnJpZXIuc3ZnXFxcIik7XFxuXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBlYWNoIHNoaXAgKi9cXG4uaGl0LFxcbi5zdW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaXQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogOHB4IHNvbGlkIHJlZDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMjM3LCAyNDcpO1xcbiAgb3BhY2l0eTogOTAlO1xcbn1cXG4uc3VuayB7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4uc3Vuazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJYXFxcIjtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi8qIEJVVFRPTlMgKi9cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG4ucmVzdGFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMjBweDtcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5yZXN0YXJ0OmFjdGl2ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJweDtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjQyLCAyNTUpO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uaW5mbyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHdpZHRoOiAxM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgcmlnaHQ6IDJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvdHRvbTogM3B4O1xcbn1cXG4uaW5mb3RleHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0b3A6IDI1cHg7XFxuICByaWdodDogLTIwMCU7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gIH1cXG5cXG4gIC5ib3gge1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIHdpZHRoOiAzOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gIH1cXG5cXG4gIC5ib3gge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG4gIHBsYXllcjIsXG4gIHBsYXllcjEsXG4gIHBsYXllcjFCb2FyZCxcbiAgcGxheWVyMURpc3BsYXksXG4gIHBsYXllcjJCb2FyZCxcbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZnVuY3Rpb24gY2hlY2tXaW5uZXIoKSB7XG4gIGlmIChwbGF5ZXIyLmJvYXJkLmNoZWNrQWxsU3VuaygpKSB7XG4gICAgcGxheWVyMS53b24oKTtcbiAgfVxuICBpZiAocGxheWVyMS5ib2FyZC5jaGVja0FsbFN1bmsoKSkge1xuICAgIHBsYXllcjIud29uKCk7XG4gIH1cbn1cblxuLy8gZm9yIGFmdGVyIGdhbWUgc3RhcnRlZFxuZnVuY3Rpb24gZXZhbHVsYXRlUGxheWVyQ2xpY2soZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChwbGF5ZXIxLmlzV2lubmVyKCkgfHwgcGxheWVyMi5pc1dpbm5lcigpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChcbiAgICBwbGF5ZXIxLmJvYXJkLnR1cm4gKyBwbGF5ZXIyLmJvYXJkLnR1cm4gPT0gMCAmJlxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQgPT09IFwicGxheWVyb25lZ3JpZFwiXG4gICkge1xuICAgIC8vZ2FtZSBoYXMgbm90IHN0YXJ0ZWQuIGNhbiBtb3ZlIHNoaXBzLi4uLlxuICAgIGxldCBjb29yZCA9IGUudGFyZ2V0LmlkLnNwbGl0KFwiXCIpO1xuICAgIGlmIChwbGF5ZXIxLmJvYXJkLmNoZWNrSXNTaGlwKHBsYXllcjEuYm9hcmQubG9jYXRpb24oY29vcmRbMF0sIGNvb3JkWzFdKSkpIHtcbiAgICAgIC8vIHZhciBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShlLnRhcmdldCk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKFxuICAgIHBsYXllcjEuYm9hcmQudHVybiA9PSBwbGF5ZXIyLmJvYXJkLnR1cm4gJiZcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkID09PSBcInBsYXllcnR3b2dyaWRcIlxuICApIHtcbiAgICAvLyBwbGF5ZXIgMSB0dXJuXG4gICAgcGxheWVyMS5ib2FyZC50dXJuKys7XG4gICAgbGV0IGNvb3JkID0gZS50YXJnZXQuaWQuc3BsaXQoXCJcIik7XG4gICAgaWYgKHBsYXllcjIuYm9hcmQuaGl0U2hpcChjb29yZFswXSwgY29vcmRbMV0pID09IHVuZGVmaW5lZCkge1xuICAgICAgcGxheWVyMS5ib2FyZC50dXJuLS07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHVwZGF0ZUJvYXJkR2FtZUxpdmUoKTtcbiAgICBjaGVja1dpbm5lcigpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwiQUxMIFVOSVRTIE1VU1QgQVRUQUNLIEVORU1ZLlwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgcGxheWVyMi5ib2FyZC50dXJuKys7XG4gIHBsYXllcjEuc2hvb3RDb29yZGluYXRlcygwLCAwLCBwbGF5ZXIyLmlzQUkpO1xuICB1cGRhdGVCb2FyZEdhbWVMaXZlKCk7XG4gIGNoZWNrVHVybigpO1xuXG4gIGNoZWNrV2lubmVyKCk7XG59XG5mdW5jdGlvbiBjaGVja1R1cm4oKSB7XG4gIGNvbnN0IHR1cm5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR1cm5cIik7XG4gIGlmIChwbGF5ZXIxLmJvYXJkLnR1cm4gPT0gcGxheWVyMi5ib2FyZC50dXJuKSB7XG4gICAgdHVybkRpdi50ZXh0Q29udGVudCA9IFwiUExBWUVSIE9ORSBUVVJOIFwiO1xuICB9XG4gIGlmIChwbGF5ZXIxLmJvYXJkLnR1cm4gPiBwbGF5ZXIyLmJvYXJkLnR1cm4pIHtcbiAgICB0dXJuRGl2LnRleHRDb250ZW50ID0gXCJQTEFZRVIgVFdPIFRVUk5cIjtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5V2l0aFNoaXBJbWFnZSgpIHtcbiAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJvbmVEaXNwbGF5XCIpO1xuICBwbGF5ZXIxLmJvYXJkLnNoaXBzQXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IGNvb3JkID0gc2hpcC5nZXRTdGFydENvb3JkaW5hdGVzKCk7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAuZ2V0U2hpcCgpLmxlbmd0aDtcbiAgICBsZXQgbnVtYmVyID0gXCJcIiArIGNvb3JkWzBdICsgY29vcmRbMV07XG4gICAgLy8gaWYgKHNoaXAuZ2V0U2hpcCgpID09PSBlbGVtZW50LnNoaXAuZ2V0U2hpcCgpKSB7XG4gICAgbGV0IHRyYW5zbGF0ZVhBbW91bnQgPSAzNjtcbiAgICBsZXQgdHJhbnNsYXRlRml4ID0gMTtcbiAgICBzd2l0Y2ggKHNoaXBMZW5ndGgpIHtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdHJhbnNsYXRlRml4ID0gMS42O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdHJhbnNsYXRlRml4ID0gMC44ODtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIHRyYW5zbGF0ZUZpeCA9IDAuNzU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdHJhbnNsYXRlRml4ID0gMTtcbiAgICB9XG4gICAgc3dpdGNoIChzaGlwTGVuZ3RoKSB7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRyYW5zbGF0ZVhBbW91bnQgPSAyODtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIHRyYW5zbGF0ZVhBbW91bnQgPSAzODtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnRvZ2dsZShgYmF0dGxlc2hpcCR7c2hpcExlbmd0aH1gKTtcbiAgICBpZiAoIXNoaXAuaXNTaGlwSG9yaXpvbnRhbCgpKSB7XG4gICAgICAvLyBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QudG9nZ2xlKGBob3Jpem9udGFsYCk7XG4gICAgICBib3guY2hpbGROb2Rlc1tcbiAgICAgICAgK251bWJlclxuICAgICAgXS5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzaGlwTGVuZ3RofSkgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVhBbW91bnR9JSkgdHJhbnNsYXRlWSgke1xuICAgICAgICB0cmFuc2xhdGVYQW1vdW50ICogdHJhbnNsYXRlRml4XG4gICAgICB9JSlgO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QudG9nZ2xlKGB2ZXJ0aWNhbGApO1xuICAgICAgYm94LmNoaWxkTm9kZXNbXG4gICAgICAgICtudW1iZXJcbiAgICAgIF0uc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSg5MGRlZykgc2NhbGUoJHtzaGlwTGVuZ3RofSkgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVhBbW91bnR9JSkgdHJhbnNsYXRlWSgke1xuICAgICAgICB0cmFuc2xhdGVYQW1vdW50ICogdHJhbnNsYXRlRml4XG4gICAgICB9JSkgYDtcbiAgICB9XG4gICAgLy8gfVxuICB9KTtcbn1cbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vICAgfSk7XG4vLyB9XG4vLyBXSEVOIEdBTUUgU1RBUlRTXG5mdW5jdGlvbiB1cGRhdGVCb2FyZEdhbWVMaXZlKCkge1xuICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IG51bSA9IDA7XG4gICAgICBsZXQgbnVtYmVyID0gXCJcIiArIGVsZW1lbnQueCArIGVsZW1lbnQueTtcbiAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyb25lZ3JpZFwiKTtcbiAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGlmIChlbGVtZW50LmhpdCA9PSBmYWxzZSlcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnRvZ2dsZShcIm1pc3NcIik7XG4gICAgICBlbHNlIGlmICghZWxlbWVudC5zaGlwKSBib3guY2hpbGROb2Rlc1srbnVtYmVyXS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBlbHNlIGlmIChlbGVtZW50LnNoaXAuaXNTdW5rKCkpXG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC50b2dnbGUoXCJzdW5rXCIpO1xuICAgICAgZWxzZSBpZiAoZWxlbWVudC5oaXQgPT0gdHJ1ZSlcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnRvZ2dsZShcImhpdFwiKTtcbiAgICAgIGVsc2UgaWYgKGVsZW1lbnQuc2hpcCkge1xuICAgICAgICBwbGF5ZXIxLmJvYXJkLnNoaXBzQXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgIGlmIChzaGlwLmdldFNoaXAoKSA9PT0gZWxlbWVudC5zaGlwLmdldFNoaXAoKSkge1xuICAgICAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LmFkZChgc2hpcCR7bnVtfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBudW0rKztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBwbGF5ZXIyLmJvYXJkLmdldEJvYXJkKCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IG51bWJlciA9IFwiXCIgKyBlbGVtZW50LnggKyBlbGVtZW50Lnk7XG4gICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcnR3b2dyaWRcIik7XG4gICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgIGlmIChlbGVtZW50LmhpdCA9PSBmYWxzZSkgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICBlbHNlIGlmICghZWxlbWVudC5zaGlwKSBib3guY2hpbGROb2Rlc1srbnVtYmVyXS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBlbHNlIGlmIChlbGVtZW50LnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnJlbW92ZShcImhpdFwiKTtcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGl0ID09IHRydWUpXG4gICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBCRUZPUkUgR0FNRSBTVEFSVFNcblxuLy8gZGVmYXVsdCBncmlkIGZvciBnYW1lYm9hcmRcbmZ1bmN0aW9uIG1ha2VBR3JpZChwYXJlbnREaXYpIHtcbiAgcGFyZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IG8gPSAwOyBvIDwgMTA7IG8rKykge1xuICAgICAgY29uc3QgYm94R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGJveEdyaWQuY2xhc3NMaXN0LmFkZChcImJveFwiKTtcbiAgICAgIGJveEdyaWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7aX0ke299YCk7XG4gICAgICBpZiAocGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpW2ldW29dLnNoaXApIHtcbiAgICAgICAgYm94R3JpZC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICBib3hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ1NoaXApO1xuICAgICAgfVxuICAgICAgYm94R3JpZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ2dpbmdmdW5jdGlvbik7XG4gICAgICAvLyBib3hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3BlbmQnLGRyYWdTaGlwRW5kKTtcbiAgICAgIGJveEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJhZ1NoaXBFbmQpO1xuICAgICAgYm94R3JpZC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgcm90YXRlU2hpcCk7XG4gICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoYm94R3JpZCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrVGFyZ2V0Rm9yU2hpcHMoc2hpcENvb3JkLCBuZXdQb3NpdGlvbkNvb3JkLCBhZGQpIHtcbiAgLy8gY2hlY2tzIGJhc2VkIG9uIHJvdGF0ZVxuICBsZXQgbmV3UG9zaXRpb25Ib2xkZXIgPSBuZXdQb3NpdGlvbkNvb3JkLmpvaW4oXCJcIik7XG4gIC8vIGxldCBhZGQgPSBuZXh0U2hpcENvb3JkSGVscGVyKHNoaXBDb29yZCwgdHJ1ZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgLy9jaGVjayB0YXJnZXQgaGFzIG5vIHNoaXBcbiAgICBsZXQgbmV3U2hpcENvb3JkWFkgPSBnZXROZXdTaGlwQ29vcmRpbmF0ZShuZXdQb3NpdGlvbkhvbGRlciAqIDEpO1xuXG4gICAgaWYgKFxuICAgICAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpWytuZXdTaGlwQ29vcmRYWVswXV1bK25ld1NoaXBDb29yZFhZWzFdXS5zaGlwICE9XG4gICAgICB1bmRlZmluZWRcbiAgICApXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBuZXdQb3NpdGlvbkhvbGRlciA9IG5ld1Bvc2l0aW9uSG9sZGVyICogMSArIGFkZDtcbiAgICBpKys7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiByb3RhdGVTaGlwKGUpIHtcbiAgY29uc3Qgc2hpcENvb3JkcyA9IGdldFNoaXBDb29yZHNBbGwoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7ZS50YXJnZXQuY2xhc3NMaXN0WzJdfWApXG4gICk7XG4gIGxldCBhZGQgPSBuZXh0U2hpcENvb3JkSGVscGVyKHNoaXBDb29yZHMsIHRydWUpO1xuICBjb25zdCBjb29yZGluYXRlID0gZS50YXJnZXQuaWQuc3BsaXQoXCJcIik7XG4gIGxldCBzaGlwSW5zdGFuY2UgPVxuICAgIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVsrY29vcmRpbmF0ZVswXV1bK2Nvb3JkaW5hdGVbMV1dLnNoaXA7XG5cbiAgY29uc3QgbmV3UG9zaXRpb25Db29yZCA9IFtcbiAgICBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KSxcbiAgICBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KSxcbiAgXTtcbiAgd2hpbGUgKFxuICAgIGNoZWNrTmV3Q29vcmRpbmF0ZVBvc3NpYmxlKFxuICAgICAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpWytzaGlwQ29vcmRzWzBdXVsrc2hpcENvb3Jkc1sxXV0uc2hpcCxcbiAgICAgIHNoaXBDb29yZHMsXG4gICAgICBuZXdQb3NpdGlvbkNvb3JkLFxuICAgICAgdHJ1ZVxuICAgICkgPT09IGZhbHNlIHx8XG4gICAgY2hlY2tUYXJnZXRGb3JTaGlwcyhzaGlwQ29vcmRzLCBuZXdQb3NpdGlvbkNvb3JkLCBhZGQpID09PSBmYWxzZVxuICApIHtcbiAgICBuZXdQb3NpdGlvbkNvb3JkLnNwbGljZShcbiAgICAgIDAsXG4gICAgICBJbmZpbml0eSxcbiAgICAgIC4uLltNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KSwgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSldXG4gICAgKTtcbiAgfVxuICByZW1vdmVhbmRBZGROZXdTaGlwKHNoaXBDb29yZHMsIG5ld1Bvc2l0aW9uQ29vcmQsIGFkZCwgc2hpcEluc3RhbmNlLCB0cnVlKTtcbiAgLy8gbW92ZSB0byBuZXcgUG9zaXRpb247XG4gIG1ha2VBR3JpZChwbGF5ZXIxQm9hcmQpO1xuICBtYWtlQUdyaWQocGxheWVyMURpc3BsYXkpO1xuICBzZXRQcmVsaW1pbmFyeUJvYXJkKCk7XG59XG5cbmZ1bmN0aW9uIHNldFByZWxpbWluYXJ5Qm9hcmQoKSB7XG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyb25lZ3JpZFwiKTtcblxuICBjb25zb2xlLmxvZyhwbGF5ZXIxLmJvYXJkLnByZXR0eVByaW50KCkpO1xuICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IG51bWJlciA9IFwiXCIgKyBlbGVtZW50LnggKyBlbGVtZW50Lnk7XG4gICAgICBpZiAoIWVsZW1lbnQuc2hpcCkge1xuICAgICAgICByZXR1cm4gYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnJlbW92ZShgc2hpcGApO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQuc2hpcC5nZXRTaGlwKCkpIHtcbiAgICAgICAgbGV0IG51bSA9IDA7XG5cbiAgICAgICAgcGxheWVyMS5ib2FyZC5zaGlwc0FycmF5LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICBpZiAoc2hpcC5nZXRTaGlwKCkgPT09IGVsZW1lbnQuc2hpcC5nZXRTaGlwKCkpIHtcbiAgICAgICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5hZGQoYHNoaXBgKTtcbiAgICAgICAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5hZGQoYHNoaXAke251bX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbnVtKys7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gYmVmb3JlIGdhbWUgc3RhcnRzXG5mdW5jdGlvbiBkcmFnU2hpcChlKSB7XG4gIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsYXNzTGlzdFsyXSk7XG4gIGxldCBzaGlwTmFtZSA9IGUudGFyZ2V0LmNsYXNzTGlzdFsyXTtcbiAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2hpcE5hbWUpO1xuICAvLyBsZXQgc2hpcENvb3JkaW5hdGUgPSBbXTtcbiAgLy8gY29uc29sZS5sb2coc2hpcCk7XG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIGUudGFyZ2V0LmlkKTtcbiAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwiY29weVwiO1xuICAvLyBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7aSsrKXtcbiAgLy8gICBzaGlwQ29vcmRpbmF0ZS5wdXNoKHNoaXBbaV0uaWQpO1xuXG4gIC8vIH1cbn1cbmZ1bmN0aW9uIGRyYWdnaW5nZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5mdW5jdGlvbiBnZXRTaGlwQ29vcmRzQWxsKHNvdXJjZVNoaXBOYW1lQXJyYXkpIHtcbiAgY29uc3Qgc2hpcENvb3JkcyA9IFtdO1xuICBzb3VyY2VTaGlwTmFtZUFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBsZXQgeHkgPSBlbGVtZW50LmlkLnNwbGl0KFwiXCIpO1xuICAgIHNoaXBDb29yZHMucHVzaCgreHlbMF0pO1xuICAgIHNoaXBDb29yZHMucHVzaCgreHlbMV0pO1xuICB9KTtcbiAgcmV0dXJuIHNoaXBDb29yZHM7XG59XG5mdW5jdGlvbiBkcmFnU2hpcEVuZChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdXNlckNsaWNrZWRDb29yZGluYXRlID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gIGxldCBzb3VyY2VTaGlwQ29vcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt1c2VyQ2xpY2tlZENvb3JkaW5hdGV9YCk7XG4gIGxldCBzb3VyY2VTaGlwTmFtZUFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBgLiR7c291cmNlU2hpcENvb3JkLmNsYXNzTGlzdFsyXX1gXG4gICk7XG4gIGNvbnN0IHNoaXBDb29yZHMgPSBnZXRTaGlwQ29vcmRzQWxsKHNvdXJjZVNoaXBOYW1lQXJyYXkpO1xuICBsZXQgY29vcmRpbmF0ZSA9IHVzZXJDbGlja2VkQ29vcmRpbmF0ZS5zcGxpdChcIlwiKTtcblxuICBsZXQgc2hpcEluc3RhbmNlID1cbiAgICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK2Nvb3JkaW5hdGVbMF1dWytjb29yZGluYXRlWzFdXS5zaGlwO1xuXG4gIC8vIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVxuICAvLyBjb25zb2xlLmxvZyhzb3VyY2VTaGlwKTtcblxuICBsZXQgdGFyZ2V0SUQgPSBlLnRhcmdldC5pZDtcblxuICBjaGVja1VwZGF0ZUdhbWVCb2FyZChcbiAgICBzaGlwQ29vcmRzLFxuICAgIHNoaXBJbnN0YW5jZSxcbiAgICB1c2VyQ2xpY2tlZENvb3JkaW5hdGUsXG4gICAgdGFyZ2V0SURcbiAgKTtcblxuICBtYWtlQUdyaWQocGxheWVyMUJvYXJkKTtcbiAgbWFrZUFHcmlkKHBsYXllcjFEaXNwbGF5KTtcbiAgc2V0UHJlbGltaW5hcnlCb2FyZCgpO1xufVxuZnVuY3Rpb24gbmV4dFNoaXBDb29yZEhlbHBlcihzaGlwQ29vcmQsIHJvdGF0ZSkge1xuICBsZXQgYWRkO1xuICBpZiAocm90YXRlKSB7XG4gICAgIXBsYXllcjEuYm9hcmRcbiAgICAgIC5nZXRCb2FyZCgpXG4gICAgICBbK3NoaXBDb29yZFswXV1bK3NoaXBDb29yZFsxXV0uc2hpcC5pc1NoaXBIb3Jpem9udGFsKClcbiAgICAgID8gKGFkZCA9IDEwKVxuICAgICAgOiAoYWRkID0gMSk7XG4gIH0gZWxzZSB7XG4gICAgIXBsYXllcjEuYm9hcmRcbiAgICAgIC5nZXRCb2FyZCgpXG4gICAgICBbK3NoaXBDb29yZFswXV1bK3NoaXBDb29yZFsxXV0uc2hpcC5pc1NoaXBIb3Jpem9udGFsKClcbiAgICAgID8gKGFkZCA9IDEpXG4gICAgICA6IChhZGQgPSAxMCk7XG4gIH1cblxuICByZXR1cm4gYWRkO1xufVxuZnVuY3Rpb24gY2hlY2tVcGRhdGVHYW1lQm9hcmQoc2hpcENvb3JkLCBzaGlwSW5zdGFuY2UsIHNvdXJjZURhdGEsIHRhcmdldElEKSB7XG4gIGxldCBhZGQ7XG4gIGxldCBuZXdQb3NpdGlvbkNvb3JkO1xuICBsZXQgbmV3UG9zaXRpb25Ib2xkZXI7XG4gIC8vIGNvb3JkaW5hdGVzIGFkZCB0byBkZXRlcm1pbmUgY3VycmVudCBzaGlwJ3MgbmV4dCBjb29yZGluYXRlc1xuICBhZGQgPSBuZXh0U2hpcENvb3JkSGVscGVyKHNoaXBDb29yZCk7XG5cbiAgbmV3UG9zaXRpb25Db29yZCA9IGZpbmRTdGFydFBvc2l0aW9uKFxuICAgIGFkZCxcbiAgICBzaGlwQ29vcmQsXG4gICAgZmluZENvb3JkaW5hdGVEaWZmZXJlbmNlKHNoaXBDb29yZCwgc291cmNlRGF0YSksXG4gICAgdGFyZ2V0SURcbiAgKTtcblxuICBpZiAoXG4gICAgY2hlY2tOZXdDb29yZGluYXRlUG9zc2libGUoXG4gICAgICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK3NoaXBDb29yZFswXV1bK3NoaXBDb29yZFsxXV0uc2hpcCxcbiAgICAgIHNoaXBDb29yZCxcbiAgICAgIG5ld1Bvc2l0aW9uQ29vcmRcbiAgICApID09PSBmYWxzZVxuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbmV3UG9zaXRpb25Ib2xkZXIgPSBuZXdQb3NpdGlvbkNvb3JkO1xuXG4gIC8vIGl0ZXJhdGVzIHRocm91Z2ggc2hpcCBjb29yZGluYXRlcy5cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb29yZC5sZW5ndGg7IGkrKykge1xuICAgIC8vY2hlY2sgdGFyZ2V0IGhhcyBubyBzaGlwXG4gICAgbGV0IG5ld1NoaXBDb29yZFhZID0gZ2V0TmV3U2hpcENvb3JkaW5hdGUobmV3UG9zaXRpb25Ib2xkZXIpO1xuICAgIGlmIChcbiAgICAgIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVsrbmV3U2hpcENvb3JkWFlbMF1dWytuZXdTaGlwQ29vcmRYWVsxXV0uc2hpcCAmJlxuICAgICAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpWytuZXdTaGlwQ29vcmRYWVswXV1bK25ld1NoaXBDb29yZFhZWzFdXS5zaGlwICE9XG4gICAgICAgIHNoaXBJbnN0YW5jZVxuICAgIClcbiAgICAgIHJldHVybjtcblxuICAgIG5ld1Bvc2l0aW9uSG9sZGVyICs9IGFkZDtcbiAgICBpKys7XG4gIH1cbiAgcmVtb3ZlYW5kQWRkTmV3U2hpcChzaGlwQ29vcmQsIG5ld1Bvc2l0aW9uQ29vcmQsIGFkZCwgc2hpcEluc3RhbmNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlYW5kQWRkTmV3U2hpcChcbiAgc2hpcENvb3JkLFxuICBuZXdQb3NpdGlvbkNvb3JkLFxuICBhZGQsXG4gIHNoaXBJbnN0YW5jZSxcbiAgcm90YXRlXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkobmV3UG9zaXRpb25Db29yZCkpIHtcbiAgICBuZXdQb3NpdGlvbkNvb3JkID0gYCR7bmV3UG9zaXRpb25Db29yZFswXX0ke25ld1Bvc2l0aW9uQ29vcmRbMV19YCAqIDE7XG4gIH1cbiAgY29uc29sZS5sb2coc2hpcENvb3JkLCBuZXdQb3NpdGlvbkNvb3JkLCBhZGQsIHNoaXBJbnN0YW5jZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgLy9yZW1vdmUgY3VycmVudCBzaGlwXG4gICAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpWytzaGlwQ29vcmRbaV1dWytzaGlwQ29vcmRbaSArIDFdXS5zaGlwID0gdW5kZWZpbmVkO1xuICAgIGkrKztcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb29yZC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBuZXdTaGlwQ29vcmRYWSA9IGdldE5ld1NoaXBDb29yZGluYXRlKG5ld1Bvc2l0aW9uQ29vcmQpO1xuXG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIHNoaXBJbnN0YW5jZS5zZXRTdGFydENvb3JkaW5hdGVzKCtuZXdTaGlwQ29vcmRYWVswXSwgK25ld1NoaXBDb29yZFhZWzFdKTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygrbmV3U2hpcENvb3JkWFlbMF0sICtuZXdTaGlwQ29vcmRYWVsxXSk7XG4gICAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpWytuZXdTaGlwQ29vcmRYWVswXV1bK25ld1NoaXBDb29yZFhZWzFdXS5zaGlwID1cbiAgICAgIHNoaXBJbnN0YW5jZTtcbiAgICBpZiAocm90YXRlICYmIGkgPT09IHNoaXBDb29yZC5sZW5ndGggLSAyKSB7XG4gICAgICBwbGF5ZXIxLmJvYXJkXG4gICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgIFsrbmV3U2hpcENvb3JkWFlbMF1dWytuZXdTaGlwQ29vcmRYWVsxXV0uc2hpcC51cGRhdGVTaGlwRGlyZWN0aW9uKCk7XG4gICAgfVxuICAgIGkrKztcbiAgICBuZXdQb3NpdGlvbkNvb3JkICs9IGFkZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja05ld0Nvb3JkaW5hdGVQb3NzaWJsZShcbiAgcGxheWVyU2hpcCxcbiAgc2hpcENvb3JkLFxuICBuZXdQb3NpdGlvbkNvb3JkLFxuICByb3RhdGVcbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShuZXdQb3NpdGlvbkNvb3JkKSkge1xuICAgIG5ld1Bvc2l0aW9uQ29vcmQgPSBuZXdQb3NpdGlvbkNvb3JkLmpvaW4oXCJcIikgKiAxO1xuICB9XG4gIGlmIChyb3RhdGUpIHtcbiAgICBjb25zb2xlLmxvZyhuZXdQb3NpdGlvbkNvb3JkLCBzaGlwQ29vcmQubGVuZ3RoIC8gMik7XG4gICAgaWYgKHBsYXllclNoaXAuaXNTaGlwSG9yaXpvbnRhbCgpKSB7XG4gICAgICBpZiAoKG5ld1Bvc2l0aW9uQ29vcmQgJSAxMCkgKyBzaGlwQ29vcmQubGVuZ3RoIC8gMiA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChNYXRoLnJvdW5kKG5ld1Bvc2l0aW9uQ29vcmQgLyAxMCAtIDAuNDkpICsgc2hpcENvb3JkLmxlbmd0aCAvIDIgPiAxMClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoIXBsYXllclNoaXAuaXNTaGlwSG9yaXpvbnRhbCgpKSB7XG4gICAgaWYgKChuZXdQb3NpdGlvbkNvb3JkICUgMTApICsgc2hpcENvb3JkLmxlbmd0aCAvIDIgPiAxMCkgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGlmIChNYXRoLnJvdW5kKG5ld1Bvc2l0aW9uQ29vcmQgLyAxMCAtIDAuNDkpICsgc2hpcENvb3JkLmxlbmd0aCAvIDIgPiAxMClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBmaW5kIHN0YXJ0Kihha2EgZW5kKSBlZGdlIG9mIHNoaXAgKGJvdHRvbSBvciByaWdodCBlZGdlKVxuZnVuY3Rpb24gZmluZENvb3JkaW5hdGVEaWZmZXJlbmNlKHNoaXBDb29yZCwgc291cmNlRGF0YSkge1xuICBjb25zdCBhbnN3ZXIgPVxuICAgIHNoaXBDb29yZFtzaGlwQ29vcmQubGVuZ3RoIC0gMl0gKiAxMCArXG4gICAgc2hpcENvb3JkW3NoaXBDb29yZC5sZW5ndGggLSAxXSAtXG4gICAgc291cmNlRGF0YTtcblxuICByZXR1cm4gYW5zd2VyO1xufVxuZnVuY3Rpb24gZmluZFN0YXJ0UG9zaXRpb24oYWRkLCBzaGlwQ29vcmQsIGRpZmZlcmVuY2UsIHRhcmdldElEKSB7XG4gIHJldHVybiArdGFyZ2V0SUQgKyBkaWZmZXJlbmNlIC0gKHNoaXBDb29yZC5sZW5ndGggLyAyIC0gMSkgKiBhZGQ7XG59XG5cbmZ1bmN0aW9uIGdldE5ld1NoaXBDb29yZGluYXRlKG5ld1Bvc2l0aW9uQ29vcmQpIHtcbiAgaWYgKG5ld1Bvc2l0aW9uQ29vcmQgPD0gOSkge1xuICAgIHJldHVybiBgMCR7bmV3UG9zaXRpb25Db29yZH1gLnNwbGl0KFwiXCIpO1xuICB9IGVsc2UgcmV0dXJuIGAke25ld1Bvc2l0aW9uQ29vcmR9YC5zcGxpdChcIlwiKTtcbn1cblxuZXhwb3J0IHtcbiAgY2hlY2tXaW5uZXIsXG4gIHVwZGF0ZUJvYXJkR2FtZUxpdmUsXG4gIHVwZGF0ZURpc3BsYXlXaXRoU2hpcEltYWdlLFxuICBjaGVja1VwZGF0ZUdhbWVCb2FyZCxcbiAgc2V0UHJlbGltaW5hcnlCb2FyZCxcbiAgZXZhbHVsYXRlUGxheWVyQ2xpY2ssXG4gIG1ha2VBR3JpZCxcbiAgY2hlY2tUdXJuLFxuICBkcmFnU2hpcCxcbiAgZHJhZ1NoaXBFbmQsXG4gIGRyYWdnaW5nZnVuY3Rpb24sXG59O1xuIiwiY29uc3Qgc2hpcCA9IHJlcXVpcmUoXCIuL3NoaXBcIik7XG4vLyBjb25zdCBzaGlwID0geyBsZW5ndGgsIHN1bmssfVxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBsZXQgYm9hcmQgPSBbW11dO1xuICBjcmVhdGVCb2FyZCgpO1xuICBsZXQgdHVybiA9IDA7XG4gIGxldCBzaGlwc0FycmF5ID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgYm9hcmQucHVzaChbXSk7XG4gICAgICBmb3IgKGxldCBvID0gMDsgbyA8IDEwOyBvKyspIHtcbiAgICAgICAgYm9hcmRbaV0ucHVzaChjcmVhdGVDb29yZGluYXRlT2JqZWN0KGksIG8pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDb29yZGluYXRlT2JqZWN0KHgsIHkpIHtcbiAgICBsZXQgY29vcmRpbmF0ZSA9IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5LFxuICAgICAgc2hpcDogdW5kZWZpbmVkLFxuICAgICAgaGl0OiBudWxsLFxuICAgIH07XG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH1cblxuICBjb25zdCBsb2NhdGlvbiA9IChudW0xLCBudW0yKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkW251bTFdW251bTJdO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZpbGxCb2FyZFJhbmRvbShiYXR0bGVzaGlwKSB7XG4gICAgc2hpcHNBcnJheS5wdXNoKGJhdHRsZXNoaXApO1xuICAgIGxldCBsZW5ndGggPSBiYXR0bGVzaGlwLmdldFNoaXAoKS5sZW5ndGg7XG5cbiAgICBsZXQgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIGxldCB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgd2hpbGUgKCFjaGVja05vU2hpcChiYXR0bGVzaGlwLmlzU2hpcEhvcml6b250YWwoKSwgbGVuZ3RoLCB4LCB5KSkge1xuICAgICAgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIH1cbiAgICBiYXR0bGVzaGlwLnNldFN0YXJ0Q29vcmRpbmF0ZXMoeCwgeSk7XG4gICAgaWYgKGJhdHRsZXNoaXAuaXNTaGlwSG9yaXpvbnRhbCgpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3ggKyBpXVt5XS5zaGlwID0gYmF0dGxlc2hpcDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFt4XVt5ICsgaV0uc2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNoZWNrTm9TaGlwKGlzSG9yaXpvbnRhbCwgbGVuZ3RoLCB4LCB5KSB7XG4gICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgaWYgKHggPCAwIHx8IHggKyBsZW5ndGggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFt4ICsgaV1beV0uc2hpcCAhPSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgKyBsZW5ndGggPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5ICsgaV0uc2hpcCAhPSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gYWRkU2hpcChudW0xLCBudW0yLCBzaXplID0gMiwgaXNIb3Jpem9udGFsID0gdHJ1ZSkge1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBzaGlwKHNpemUpO1xuXG4gICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgYm9hcmRbbnVtMV1bbnVtMiArIGldLnNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBib2FyZFtudW0xICsgaV1bbnVtMV0uc2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJldHR5UHJpbnQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXR0eVByaW50KCkge1xuICAgIGxldCBzdHJpbmcgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgc3RyaW5nICs9IFwiXFxuXCI7XG4gICAgICBmb3IgKGxldCBvID0gMDsgbyA8IDEwOyBvKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW29dLmhpdCA9PSBmYWxzZSkgc3RyaW5nICs9IFwiWy1dXCI7XG4gICAgICAgIGVsc2UgaWYgKCFib2FyZFtpXVtvXS5zaGlwKSBzdHJpbmcgKz0gXCJbIF1cIjtcbiAgICAgICAgZWxzZSBpZiAoYm9hcmRbaV1bb10uc2hpcC5pc1N1bmsoKSkgc3RyaW5nICs9IFwiW1hdXCI7XG4gICAgICAgIGVsc2UgaWYgKGJvYXJkW2ldW29dLnNoaXApIHN0cmluZyArPSBcIltTXVwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaGl0U2hpcChudW0xLCBudW0yKSB7XG4gICAgaWYgKG51bTEgPCAwIHx8IG51bTIgPCAwIHx8IG51bTEgPiA5IHx8IG51bTIgPiA5KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoYm9hcmRbbnVtMV1bbnVtMl0uaGl0ICE9PSBudWxsKSB7XG4gICAgICAvL2Nhbid0IGhpdCBzb21ldGhpbmcgYWxyZWFkeSBoaXQgYmVmb3JlXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChib2FyZFtudW0xXVtudW0yXS5zaGlwKSB7XG4gICAgICAvL2lmIGEgc2hpcFxuICAgICAgYm9hcmRbbnVtMV1bbnVtMl0uc2hpcC5oaXQoKTtcbiAgICAgIGJvYXJkW251bTFdW251bTJdLnNoaXAuaXNTdW5rKCk7XG4gICAgICBib2FyZFtudW0xXVtudW0yXS5oaXQgPSB0cnVlO1xuICAgICAgLy8gc2VlIGlmIGFsbCBzaGlwcyBhcmUgc3Vua1xuICAgICAgcHJldHR5UHJpbnQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL2lmIGEgbWlzc1xuICAgICAgYm9hcmRbbnVtMV1bbnVtMl0uaGl0ID0gZmFsc2U7XG4gICAgICBwcmV0dHlQcmludCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQWxsU3VuaygpIHtcbiAgICBsZXQgYWxsU3VuayA9IGJvYXJkLmV2ZXJ5KChjb29yZCkgPT5cbiAgICAgIGNvb3JkLmV2ZXJ5KChlbGVtZW50KSA9PiBjaGVja1NoaXAoZWxlbWVudCkpXG4gICAgKTtcbiAgICAvLyAmJiBjb29yZC5zaGlwLnN1bmsgPT0gZmFsc2VcbiAgICBpZiAoYWxsU3Vuaykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBjaGVja1NoaXAoY29vcmQpIHtcbiAgICBpZiAoY29vcmQuc2hpcCA9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICAgIGVsc2UgaWYgKGNvb3JkLnNoaXAuZ2V0U2hpcCgpLnN1bmspIHJldHVybiB0cnVlO1xuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tJc1NoaXAoY29vcmQpIHtcbiAgICBpZiAoY29vcmQuc2hpcCA9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICBlbHNlIGlmIChjb29yZC5zaGlwKSByZXR1cm4gdHJ1ZTsgLy9sb2wgcmVkdWRuYXQ/XG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR1cm4sXG4gICAgZ2V0Qm9hcmQsXG4gICAgbG9jYXRpb24sXG4gICAgYWRkU2hpcCxcbiAgICBoaXRTaGlwLFxuICAgIHByZXR0eVByaW50LFxuICAgIGNoZWNrQWxsU3VuayxcbiAgICBjaGVja0lzU2hpcCxcbiAgICBmaWxsQm9hcmRSYW5kb20sXG4gICAgc2hpcHNBcnJheSxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZWJvYXJkO1xuIiwiaW1wb3J0IHtcbiAgY2hlY2tXaW5uZXIsXG4gIHVwZGF0ZUJvYXJkR2FtZUxpdmUsXG4gIHVwZGF0ZURpc3BsYXlXaXRoU2hpcEltYWdlLFxuICBjaGVja1VwZGF0ZUdhbWVCb2FyZCxcbiAgc2V0UHJlbGltaW5hcnlCb2FyZCxcbiAgZXZhbHVsYXRlUGxheWVyQ2xpY2ssXG4gIG1ha2VBR3JpZCxcbiAgY2hlY2tUdXJuLFxuICBkcmFnU2hpcCxcbiAgZHJhZ1NoaXBFbmQsXG4gIGRyYWdnaW5nZnVuY3Rpb24sXG59IGZyb20gXCIuL0NvbnRyb2xsZXJcIjtcblxuY29uc3QgcGxheWVyID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcblxubGV0IGlzQWkgPSB0cnVlO1xuYWRkSW5mb0hlbHBlcigpO1xuZXhwb3J0IGxldCBwbGF5ZXIxID0gcGxheWVyKFwiUGxheWVyMVwiLCAhaXNBaSwgMSk7XG5leHBvcnQgbGV0IHBsYXllcjIgPSBwbGF5ZXIoXCJBSVwiLCBpc0FpLCAyKTtcblxuY29uc3QgbmV3R2FtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydFwiKTtcbmNvbnN0IHN0YXJ0R2FtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRcIik7XG5cbi8vIGJ1dHRvbiB0byBzdGFydCBnYW1lXG5uZXdHYW1lRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5R2FtZSk7XG5zdGFydEdhbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEV2ZW50TGlzdGVuZXJHYW1lU3RhcnQpO1xuXG5leHBvcnQgY29uc3QgcGxheWVyMUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJvbmVncmlkXCIpO1xuZXhwb3J0IGNvbnN0IHBsYXllcjFEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJvbmVEaXNwbGF5XCIpO1xuZXhwb3J0IGNvbnN0IHBsYXllcjJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVydHdvZ3JpZFwiKTtcblxucGxheUdhbWUoKTtcblxuLy8gbWFrZSBhIGJvYXJkIG9uIHdlYnNpdGVcbmZ1bmN0aW9uIHBsYXlHYW1lKCkge1xuICBzdGFydEdhbWVEaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgcGxheWVyMSA9IHBsYXllcihcIlBsYXllcjFcIiwgIWlzQWksIDEpO1xuICBwbGF5ZXIyID0gcGxheWVyKFwiQUlcIiwgaXNBaSwgMik7XG4gIGNvbnNvbGUubG9nKFwibmV3IGdhbWVcIik7XG5cbiAgbWFrZUFHcmlkKHBsYXllcjFCb2FyZCk7XG4gIG1ha2VBR3JpZChwbGF5ZXIxRGlzcGxheSk7XG4gIG1ha2VBR3JpZChwbGF5ZXIyQm9hcmQpO1xuXG4gIHNldFByZWxpbWluYXJ5Qm9hcmQoKTtcbn1cblxuLy8gcGxheUdhbWUoKTsgIC8vd2lsbCBuZWVkIHRvIGNoYW5nZSBmb3Igd2hlbiB0aGVyZSBpcyBhIHVzZXIgaW50ZXJmYWNlXG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJHYW1lU3RhcnQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHVwZGF0ZURpc3BsYXlXaXRoU2hpcEltYWdlKCk7XG4gIGNoZWNrVHVybigpO1xuXG4gIHN0YXJ0R2FtZURpdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICBwbGF5ZXIyLmJvYXJkLmdldEJvYXJkKCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVydHdvZ3JpZFwiKTtcblxuICAgIGVsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IG51bWJlciA9IFwiXCIgKyBlbGVtZW50LnggKyBlbGVtZW50Lnk7XG4gICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZhbHVsYXRlUGxheWVyQ2xpY2spO1xuICAgIH0pO1xuICB9KTtcblxuICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyb25lZ3JpZFwiKTtcblxuICAgIGVsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IG51bWJlciA9IFwiXCIgKyBlbGVtZW50LnggKyBlbGVtZW50Lnk7XG4gICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdTaGlwKTtcbiAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdnaW5nZnVuY3Rpb24pO1xuICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJhZ1NoaXBFbmQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gfVxuXG5mdW5jdGlvbiBhZGRJbmZvSGVscGVyKCkge1xuICBjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImluZm90ZXh0XCIpO1xuICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgaW5mby5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICBpbmZvLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgc2hvd0hlbHApO1xuICBpbmZvLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCByZW1vdmVIZWxwKTtcbn1cblxuZnVuY3Rpb24gc2hvd0hlbHAoKSB7XG4gIGNvbnN0IGluZm90ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvdGV4dFwiKTtcbiAgaW5mb3RleHQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgaW5mb3RleHQudGV4dENvbnRlbnQgPSBcIkRvdWJsZSBDbGljayB0byBSb3RhdGVcIjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGVscCgpIHtcbiAgY29uc3QgaW5mb3RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm90ZXh0XCIpO1xuICBpbmZvdGV4dC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufVxuIiwiY29uc3QgZ2FtZWJvYXJkID0gcmVxdWlyZShcIi4vZ2FtZWJvYXJkXCIpO1xuY29uc3Qgc2hpcCA9IHJlcXVpcmUoXCIuL3NoaXBcIik7XG5cbmNvbnN0IHBsYXllciA9IChuYW1lLCBpc0FJbnQsIG51bWJlciA9IDEpID0+IHtcbiAgY29uc3QgaXNBSSA9IGlzQUludDtcbiAgY29uc3QgcGxheWVyTmFtZSA9IG5hbWU7XG4gIGNvbnN0IHBsYXllck51bWJlciA9IG51bWJlcjtcbiAgY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW107XG4gIGNvbnN0IHBvc3NpYmxlTW92ZXMgPSBbXTtcblxuICBsZXQgd2lubmVyID0gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgbGV0IG51bTtcbiAgICBpZiAoaSA8PSAyKSBudW0gPSAyO1xuICAgIGVsc2UgaWYgKGkgPD0gNCkgbnVtID0gMztcbiAgICBlbHNlIGlmIChpIDw9IDUpIG51bSA9IDQ7XG4gICAgZWxzZSBpZiAoaSA8IDcpIG51bSA9IDU7XG4gICAgY29uc3Qgc2hpcDEgPSBzaGlwKG51bSk7XG4gICAgc2hpcHMucHVzaChzaGlwMSk7XG4gIH1cblxuICBmaWxsQWxsU2hpcHMoKTtcblxuICBmdW5jdGlvbiBnZXRBbGxTaGlwcygpIHtcbiAgICByZXR1cm4gc2hpcHM7XG4gIH1cblxuICBmdW5jdGlvbiBmaWxsQWxsU2hpcHMoKSB7XG4gICAgc2hpcHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgYm9hcmQuZmlsbEJvYXJkUmFuZG9tKGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIGJvYXJkLnByZXR0eVByaW50KCk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG9vdENvb3JkaW5hdGVzKHggPSAwLCB5ID0gMCwgaXNSb2JvdCkge1xuICAgIGlmIChpc1JvYm90KSB7XG4gICAgICB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG5cbiAgICAgIGlmIChzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoID49IDEgfHwgcG9zc2libGVNb3Zlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICBpZiAoc2hpcENvb3JkaW5hdGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgeCA9IHNoaXBDb29yZGluYXRlcy5zcGxpY2UoMCwgMSlbMF07XG4gICAgICAgICAgeSA9IHNoaXBDb29yZGluYXRlcy5zcGxpY2UoMCwgMSlbMF07XG4gICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHggKyAxLCB5KTtcbiAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goeCAtIDEsIHkpO1xuICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh4LCB5IC0gMSk7XG4gICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHgsIHkgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29vcmQgPSBwb3NzaWJsZU1vdmVzLnNwbGljZSgwLCAyKTtcbiAgICAgICAgbGV0IHBvc3NpYmxlTW92ZUNvb3JkaW5hdGUgPSBib2FyZC5oaXRTaGlwKGNvb3JkWzBdLCBjb29yZFsxXSk7XG4gICAgICAgIHdoaWxlIChcbiAgICAgICAgICBwb3NzaWJsZU1vdmVzLmxlbmd0aCAhPSAwICYmXG4gICAgICAgICAgcG9zc2libGVNb3ZlQ29vcmRpbmF0ZSA9PSB1bmRlZmluZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29vcmQgPSBwb3NzaWJsZU1vdmVzLnNwbGljZSgwLCAyKTtcbiAgICAgICAgICBwb3NzaWJsZU1vdmVDb29yZGluYXRlID0gYm9hcmQuaGl0U2hpcChjb29yZFswXSwgY29vcmRbMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NzaWJsZU1vdmVDb29yZGluYXRlKSB7XG4gICAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goY29vcmRbMF0pO1xuICAgICAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKGNvb3JkWzFdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgbW92ZVBvc3NpYmxlID0gYm9hcmQuaGl0U2hpcCh4LCB5KTtcblxuICAgICAgd2hpbGUgKG1vdmVQb3NzaWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICBtb3ZlUG9zc2libGUgPSBib2FyZC5oaXRTaGlwKHgsIHkpO1xuICAgICAgfVxuICAgICAgaWYgKG1vdmVQb3NzaWJsZSA9PSB0cnVlKSB7XG4gICAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKHgpO1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaCh5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYm9hcmQuaGl0U2hpcCh4LCB5KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaXNXaW5uZXIoKSB7XG4gICAgcmV0dXJuIHdpbm5lcjtcbiAgfVxuICBmdW5jdGlvbiB3b24oKSB7XG4gICAgY29uc3QgdHVybkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVyblwiKTtcbiAgICB0dXJuRGl2LnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0gV09OYDtcbiAgICB3aW5uZXIgPSB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldEFsbFNoaXBzLFxuICAgIGJvYXJkLFxuICAgIHNob290Q29vcmRpbmF0ZXMsXG4gICAgcGxheWVyTnVtYmVyLFxuICAgIGdldE5hbWUsXG4gICAgaXNBSSxcbiAgICBpc1dpbm5lcixcbiAgICB3b24sXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoID0gMiwgaXNIb3Jpem9udGFsID0gMCwgc3VuayA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHNoaXAgPSB7XG4gICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgaGl0czogMCxcbiAgICBzdW5rOiBzdW5rLFxuICAgIGhvcml6b250YWw6IHVuZGVmaW5lZCxcbiAgfTtcblxuICBpc0hvcml6b250YWwgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICBzaGlwLmhvcml6b250YWwgPSBpc0hvcml6b250YWwgPT0gMTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgc2hpcC5oaXRzICs9IDE7XG4gICAgcmV0dXJuIHNoaXAuaGl0cztcbiAgfTtcbiAgZnVuY3Rpb24gaXNTaGlwSG9yaXpvbnRhbCgpIHtcbiAgICByZXR1cm4gc2hpcC5ob3Jpem9udGFsO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVNoaXBEaXJlY3Rpb24oKSB7XG4gICAgc2hpcC5ob3Jpem9udGFsID0gIXNoaXAuaG9yaXpvbnRhbDtcbiAgICBjb25zb2xlLmxvZyhzaGlwLmhvcml6b250YWwpO1xuICB9XG4gIGNvbnN0IGdldFNoaXAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXA7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChzaGlwLmhpdHMgPT0gc2hpcC5sZW5ndGgpIHNoaXAuc3VuayA9IHRydWU7XG4gICAgcmV0dXJuIHNoaXAuc3VuaztcbiAgfTtcbiAgY29uc3Qgc2V0U3RhcnRDb29yZGluYXRlcyA9ICh4LCB5KSA9PiB7XG4gICAgc2hpcC5jb29yZGluYXRlID0gW3gsIHldO1xuICB9O1xuXG4gIGNvbnN0IGdldFN0YXJ0Q29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXAuY29vcmRpbmF0ZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBTaGlwLFxuICAgIGdldFNoaXAsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBpc1NoaXBIb3Jpem9udGFsLFxuICAgIHNldFN0YXJ0Q29vcmRpbmF0ZXMsXG4gICAgZ2V0U3RhcnRDb29yZGluYXRlcyxcbiAgICB1cGRhdGVTaGlwRGlyZWN0aW9uLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9