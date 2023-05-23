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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"RobotoReg\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"RobotoBold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nbody {\n  font-family: \"RobotoReg\", Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n  width: 100vw;\n}\n\n.header {\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid grey;\n  height: 70px;\n  font-size: 25px;\n}\n\n/* making a board */\n#playeronegrid,\n#playertwogrid,\n#playeroneDisplay {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n}\n#playeroneDisplay {\n  position: absolute;\n  transform: translateY(-100%);\n}\n#playeroneDisplay > .box {\n  padding: 1px;\n  border: none;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 100px;\n}\n\n.box {\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n  z-index: 99;\n}\n\n.turn {\n  font-family: RobotoBold, Arial, Helvetica, sans-serif;\n  margin: 10px 10px;\n  margin-bottom: 30px;\n  border: 1px solid grey;\n  padding: 10px 20px;\n  color: white;\n  background-color: black;\n  position: relative;\n}\n\n.ship {\n  background-color: rgb(99, 250, 255);\n}\n\n.battleship1,\n.battleship2,\n.battleship3,\n.battleship4,\n.battleship5,\n.battleship6 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\n  background-repeat: no-repeat;\n  background-size: 100%;\n  border: none;\n}\n\n/* each ship */\n.hit,\n.sunk {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hit::before {\n  content: \"\";\n  display: flex;\n  justify-content: center;\n  color: black;\n  border: 8px solid red;\n\n  border-radius: 50%;\n}\n.miss {\n  background-color: rgb(195, 237, 247);\n  opacity: 90%;\n}\n.sunk {\n  font-weight: 800;\n  font-size: 30px;\n}\n.sunk::before {\n  content: \"X\";\n  color: red;\n}\n\n/* BUTTONS */\nbutton {\n  background-color: white;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 5px;\n  width: 100px;\n}\n.restart {\n  background-color: white;\n  margin: 20px;\n\n  position: fixed;\n  left: 0;\n}\n\n.restart:active {\n  position: absolute;\n  top: 20px;\n}\n\nbutton:active {\n  position: relative;\n  top: 2px;\n}\n.hidden {\n  display: none;\n}\n\n.start {\n  width: 150px;\n  background-color: rgb(202, 242, 255);\n  margin: 10px;\n}\n\n.info {\n  border: 1px solid white;\n  width: 13px;\n  border-radius: 50%;\n  position: absolute;\n  font-size: 15px;\n  right: 2px;\n  text-align: center;\n  bottom: 3px;\n}\n.infotext {\n  position: absolute;\n  color: black;\n  border: 1px solid grey;\n  border-radius: 10px;\n  padding: 5px;\n  top: 25px;\n  right: -200%;\n  min-width: 200px;\n}\n\n@media only screen and (max-width: 1200px) {\n  .gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .box {\n    height: 38px;\n    width: 38px;\n    border: 1px solid black;\n  }\n}\n@media only screen and (max-width: 550px) {\n  .gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .box {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,4CAAmC;AACrC;;AAEA;EACE,sDAAsD;EACtD,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA,mBAAmB;AACnB;;;EAGE,aAAa;EACb,mCAAmC;EACnC,sCAAsC;AACxC;AACA;EACE,kBAAkB;EAClB,4BAA4B;AAC9B;AACA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,qDAAqD;EACrD,iBAAiB;EACjB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;;;;;;EAME,yDAA4C;;EAE5C,4BAA4B;EAC5B,qBAAqB;EACrB,YAAY;AACd;;AAEA,cAAc;AACd;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,qBAAqB;;EAErB,kBAAkB;AACpB;AACA;EACE,oCAAoC;EACpC,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA,YAAY;AACZ;EACE,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,YAAY;;EAEZ,eAAe;EACf,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,QAAQ;AACV;AACA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,uBAAuB;EACzB;AACF;AACA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,uBAAuB;EACzB;AACF","sourcesContent":["@font-face {\n  font-family: \"RobotoReg\";\n  src: url(\"./asset/Roboto-Regular.ttf\");\n}\n@font-face {\n  font-family: \"RobotoBold\";\n  src: url(\"./asset/Roboto-Bold.ttf\");\n}\n\nbody {\n  font-family: \"RobotoReg\", Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n  width: 100vw;\n}\n\n.header {\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid grey;\n  height: 70px;\n  font-size: 25px;\n}\n\n/* making a board */\n#playeronegrid,\n#playertwogrid,\n#playeroneDisplay {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n}\n#playeroneDisplay {\n  position: absolute;\n  transform: translateY(-100%);\n}\n#playeroneDisplay > .box {\n  padding: 1px;\n  border: none;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 100px;\n}\n\n.box {\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n  z-index: 99;\n}\n\n.turn {\n  font-family: RobotoBold, Arial, Helvetica, sans-serif;\n  margin: 10px 10px;\n  margin-bottom: 30px;\n  border: 1px solid grey;\n  padding: 10px 20px;\n  color: white;\n  background-color: black;\n  position: relative;\n}\n\n.ship {\n  background-color: rgb(99, 250, 255);\n}\n\n.battleship1,\n.battleship2,\n.battleship3,\n.battleship4,\n.battleship5,\n.battleship6 {\n  background-image: url(\"./asset/carrier.svg\");\n\n  background-repeat: no-repeat;\n  background-size: 100%;\n  border: none;\n}\n\n/* each ship */\n.hit,\n.sunk {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hit::before {\n  content: \"\";\n  display: flex;\n  justify-content: center;\n  color: black;\n  border: 8px solid red;\n\n  border-radius: 50%;\n}\n.miss {\n  background-color: rgb(195, 237, 247);\n  opacity: 90%;\n}\n.sunk {\n  font-weight: 800;\n  font-size: 30px;\n}\n.sunk::before {\n  content: \"X\";\n  color: red;\n}\n\n/* BUTTONS */\nbutton {\n  background-color: white;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 5px;\n  width: 100px;\n}\n.restart {\n  background-color: white;\n  margin: 20px;\n\n  position: fixed;\n  left: 0;\n}\n\n.restart:active {\n  position: absolute;\n  top: 20px;\n}\n\nbutton:active {\n  position: relative;\n  top: 2px;\n}\n.hidden {\n  display: none;\n}\n\n.start {\n  width: 150px;\n  background-color: rgb(202, 242, 255);\n  margin: 10px;\n}\n\n.info {\n  border: 1px solid white;\n  width: 13px;\n  border-radius: 50%;\n  position: absolute;\n  font-size: 15px;\n  right: 2px;\n  text-align: center;\n  bottom: 3px;\n}\n.infotext {\n  position: absolute;\n  color: black;\n  border: 1px solid grey;\n  border-radius: 10px;\n  padding: 5px;\n  top: 25px;\n  right: -200%;\n  min-width: 200px;\n}\n\n@media only screen and (max-width: 1200px) {\n  .gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .box {\n    height: 38px;\n    width: 38px;\n    border: 1px solid black;\n  }\n}\n@media only screen and (max-width: 550px) {\n  .gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .box {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Db250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0L1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXQvUm9ib3RvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9jYXJyaWVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1JlZ1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9Cb2xkXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1JlZ1xcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi8qIG1ha2luZyBhIGJvYXJkICovXFxuI3BsYXllcm9uZWdyaWQsXFxuI3BsYXllcnR3b2dyaWQsXFxuI3BsYXllcm9uZURpc3BsYXkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcbiNwbGF5ZXJvbmVEaXNwbGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxufVxcbiNwbGF5ZXJvbmVEaXNwbGF5ID4gLmJveCB7XFxuICBwYWRkaW5nOiAxcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uYm94IHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuXFxuLnR1cm4ge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDEwcHggMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMjUwLCAyNTUpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcDEsXFxuLmJhdHRsZXNoaXAyLFxcbi5iYXR0bGVzaGlwMyxcXG4uYmF0dGxlc2hpcDQsXFxuLmJhdHRsZXNoaXA1LFxcbi5iYXR0bGVzaGlwNiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcblxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogZWFjaCBzaGlwICovXFxuLmhpdCxcXG4uc3VuayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDhweCBzb2xpZCByZWQ7XFxuXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDIzNywgMjQ3KTtcXG4gIG9wYWNpdHk6IDkwJTtcXG59XFxuLnN1bmsge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLnN1bms6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiWFxcXCI7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBCVVRUT05TICovXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuLnJlc3RhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDIwcHg7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ucmVzdGFydDphY3RpdmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdGFydCB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyNDIsIDI1NSk7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5pbmZvIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgd2lkdGg6IDEzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICByaWdodDogMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm90dG9tOiAzcHg7XFxufVxcbi5pbmZvdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRvcDogMjVweDtcXG4gIHJpZ2h0OiAtMjAwJTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgfVxcblxcbiAgLmJveCB7XFxuICAgIGhlaWdodDogMzhweDtcXG4gICAgd2lkdGg6IDM4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAuZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgfVxcblxcbiAgLmJveCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUFzQztBQUN4QztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDRDQUFtQztBQUNyQzs7QUFFQTtFQUNFLHNEQUFzRDtFQUN0RCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUEsbUJBQW1CO0FBQ25COzs7RUFHRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLHNDQUFzQztBQUN4QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTs7Ozs7O0VBTUUseURBQTRDOztFQUU1Qyw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQSxjQUFjO0FBQ2Q7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oscUJBQXFCOztFQUVyQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBLFlBQVk7QUFDWjtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZOztFQUVaLGVBQWU7RUFDZixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtFQUN6QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9SZWdcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXQvUm9ib3RvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9Cb2xkXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0L1JvYm90by1Cb2xkLnR0ZlxcXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvUmVnXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcXG4gIGhlaWdodDogNzBweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLyogbWFraW5nIGEgYm9hcmQgKi9cXG4jcGxheWVyb25lZ3JpZCxcXG4jcGxheWVydHdvZ3JpZCxcXG4jcGxheWVyb25lRGlzcGxheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuI3BsYXllcm9uZURpc3BsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG59XFxuI3BsYXllcm9uZURpc3BsYXkgPiAuYm94IHtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi5ib3gge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG5cXG4udHVybiB7XFxuICBmb250LWZhbWlseTogUm9ib3RvQm9sZCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMTBweCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCAyNTAsIDI1NSk7XFxufVxcblxcbi5iYXR0bGVzaGlwMSxcXG4uYmF0dGxlc2hpcDIsXFxuLmJhdHRsZXNoaXAzLFxcbi5iYXR0bGVzaGlwNCxcXG4uYmF0dGxlc2hpcDUsXFxuLmJhdHRsZXNoaXA2IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldC9jYXJyaWVyLnN2Z1xcXCIpO1xcblxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogZWFjaCBzaGlwICovXFxuLmhpdCxcXG4uc3VuayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDhweCBzb2xpZCByZWQ7XFxuXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDIzNywgMjQ3KTtcXG4gIG9wYWNpdHk6IDkwJTtcXG59XFxuLnN1bmsge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLnN1bms6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiWFxcXCI7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBCVVRUT05TICovXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuLnJlc3RhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDIwcHg7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ucmVzdGFydDphY3RpdmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdGFydCB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyNDIsIDI1NSk7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5pbmZvIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgd2lkdGg6IDEzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICByaWdodDogMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm90dG9tOiAzcHg7XFxufVxcbi5pbmZvdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRvcDogMjVweDtcXG4gIHJpZ2h0OiAtMjAwJTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgfVxcblxcbiAgLmJveCB7XFxuICAgIGhlaWdodDogMzhweDtcXG4gICAgd2lkdGg6IDM4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAuZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgfVxcblxcbiAgLmJveCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgcGxheWVyMixcbiAgcGxheWVyMSxcbiAgcGxheWVyMUJvYXJkLFxuICBwbGF5ZXIxRGlzcGxheSxcbiAgcGxheWVyMkJvYXJkLFxufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5mdW5jdGlvbiBjaGVja1dpbm5lcigpIHtcbiAgaWYgKHBsYXllcjIuYm9hcmQuY2hlY2tBbGxTdW5rKCkpIHtcbiAgICBwbGF5ZXIxLndvbigpO1xuICB9XG4gIGlmIChwbGF5ZXIxLmJvYXJkLmNoZWNrQWxsU3VuaygpKSB7XG4gICAgcGxheWVyMi53b24oKTtcbiAgfVxufVxuXG4vLyBmb3IgYWZ0ZXIgZ2FtZSBzdGFydGVkXG5mdW5jdGlvbiBldmFsdWxhdGVQbGF5ZXJDbGljayhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKHBsYXllcjEuaXNXaW5uZXIoKSB8fCBwbGF5ZXIyLmlzV2lubmVyKCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKFxuICAgIHBsYXllcjEuYm9hcmQudHVybiArIHBsYXllcjIuYm9hcmQudHVybiA9PSAwICYmXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCA9PT0gXCJwbGF5ZXJvbmVncmlkXCJcbiAgKSB7XG4gICAgLy9nYW1lIGhhcyBub3Qgc3RhcnRlZC4gY2FuIG1vdmUgc2hpcHMuLi4uXG4gICAgbGV0IGNvb3JkID0gZS50YXJnZXQuaWQuc3BsaXQoXCJcIik7XG4gICAgaWYgKHBsYXllcjEuYm9hcmQuY2hlY2tJc1NoaXAocGxheWVyMS5ib2FyZC5sb2NhdGlvbihjb29yZFswXSwgY29vcmRbMV0pKSkge1xuICAgICAgLy8gdmFyIGRhdGEgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKGUudGFyZ2V0KTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoXG4gICAgcGxheWVyMS5ib2FyZC50dXJuID09IHBsYXllcjIuYm9hcmQudHVybiAmJlxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQgPT09IFwicGxheWVydHdvZ3JpZFwiXG4gICkge1xuICAgIC8vIHBsYXllciAxIHR1cm5cbiAgICBwbGF5ZXIxLmJvYXJkLnR1cm4rKztcbiAgICBsZXQgY29vcmQgPSBlLnRhcmdldC5pZC5zcGxpdChcIlwiKTtcbiAgICBpZiAocGxheWVyMi5ib2FyZC5oaXRTaGlwKGNvb3JkWzBdLCBjb29yZFsxXSkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwbGF5ZXIxLmJvYXJkLnR1cm4tLTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdXBkYXRlQm9hcmRHYW1lTGl2ZSgpO1xuICAgIGNoZWNrV2lubmVyKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJBTEwgVU5JVFMgTVVTVCBBVFRBQ0sgRU5FTVkuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBwbGF5ZXIyLmJvYXJkLnR1cm4rKztcbiAgcGxheWVyMS5zaG9vdENvb3JkaW5hdGVzKDAsIDAsIHBsYXllcjIuaXNBSSk7XG4gIHVwZGF0ZUJvYXJkR2FtZUxpdmUoKTtcbiAgY2hlY2tUdXJuKCk7XG5cbiAgY2hlY2tXaW5uZXIoKTtcbn1cbmZ1bmN0aW9uIGNoZWNrVHVybigpIHtcbiAgY29uc3QgdHVybkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVyblwiKTtcbiAgaWYgKHBsYXllcjEuYm9hcmQudHVybiA9PSBwbGF5ZXIyLmJvYXJkLnR1cm4pIHtcbiAgICB0dXJuRGl2LnRleHRDb250ZW50ID0gXCJQTEFZRVIgT05FIFRVUk4gXCI7XG4gIH1cbiAgaWYgKHBsYXllcjEuYm9hcmQudHVybiA+IHBsYXllcjIuYm9hcmQudHVybikge1xuICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSBcIlBMQVlFUiBUV08gVFVSTlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlXaXRoU2hpcEltYWdlKCkge1xuICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcm9uZURpc3BsYXlcIik7XG4gIHBsYXllcjEuYm9hcmQuc2hpcHNBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3QgY29vcmQgPSBzaGlwLmdldFN0YXJ0Q29vcmRpbmF0ZXMoKTtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5nZXRTaGlwKCkubGVuZ3RoO1xuICAgIGxldCBudW1iZXIgPSBcIlwiICsgY29vcmRbMF0gKyBjb29yZFsxXTtcbiAgICAvLyBpZiAoc2hpcC5nZXRTaGlwKCkgPT09IGVsZW1lbnQuc2hpcC5nZXRTaGlwKCkpIHtcbiAgICBsZXQgdHJhbnNsYXRlWEFtb3VudCA9IDM2O1xuICAgIGxldCB0cmFuc2xhdGVGaXggPSAxO1xuICAgIHN3aXRjaCAoc2hpcExlbmd0aCkge1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0cmFuc2xhdGVGaXggPSAxLjY7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICB0cmFuc2xhdGVGaXggPSAwLjg4O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgdHJhbnNsYXRlRml4ID0gMC43NTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0cmFuc2xhdGVGaXggPSAxO1xuICAgIH1cbiAgICBzd2l0Y2ggKHNoaXBMZW5ndGgpIHtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdHJhbnNsYXRlWEFtb3VudCA9IDI4O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgdHJhbnNsYXRlWEFtb3VudCA9IDM4O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QudG9nZ2xlKGBiYXR0bGVzaGlwJHtzaGlwTGVuZ3RofWApO1xuICAgIGlmICghc2hpcC5pc1NoaXBIb3Jpem9udGFsKCkpIHtcbiAgICAgIC8vIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC50b2dnbGUoYGhvcml6b250YWxgKTtcbiAgICAgIGJveC5jaGlsZE5vZGVzW1xuICAgICAgICArbnVtYmVyXG4gICAgICBdLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NoaXBMZW5ndGh9KSB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWEFtb3VudH0lKSB0cmFuc2xhdGVZKCR7XG4gICAgICAgIHRyYW5zbGF0ZVhBbW91bnQgKiB0cmFuc2xhdGVGaXhcbiAgICAgIH0lKWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmNsYXNzTGlzdC50b2dnbGUoYHZlcnRpY2FsYCk7XG4gICAgICBib3guY2hpbGROb2Rlc1tcbiAgICAgICAgK251bWJlclxuICAgICAgXS5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKDkwZGVnKSBzY2FsZSgke3NoaXBMZW5ndGh9KSB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWEFtb3VudH0lKSB0cmFuc2xhdGVZKCR7XG4gICAgICAgIHRyYW5zbGF0ZVhBbW91bnQgKiB0cmFuc2xhdGVGaXhcbiAgICAgIH0lKSBgO1xuICAgIH1cbiAgICAvLyB9XG4gIH0pO1xufVxuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICB9KTtcbi8vIH1cbi8vIFdIRU4gR0FNRSBTVEFSVFNcbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkR2FtZUxpdmUoKSB7XG4gIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgbnVtID0gMDtcbiAgICAgIGxldCBudW1iZXIgPSBcIlwiICsgZWxlbWVudC54ICsgZWxlbWVudC55O1xuICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJvbmVncmlkXCIpO1xuICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgaWYgKGVsZW1lbnQuaGl0ID09IGZhbHNlKVxuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QudG9nZ2xlKFwibWlzc1wiKTtcbiAgICAgIGVsc2UgaWYgKCFlbGVtZW50LnNoaXApIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGVsc2UgaWYgKGVsZW1lbnQuc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnRvZ2dsZShcInN1bmtcIik7XG4gICAgICBlbHNlIGlmIChlbGVtZW50LmhpdCA9PSB0cnVlKVxuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QudG9nZ2xlKFwiaGl0XCIpO1xuICAgICAgZWxzZSBpZiAoZWxlbWVudC5zaGlwKSB7XG4gICAgICAgIHBsYXllcjEuYm9hcmQuc2hpcHNBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgaWYgKHNoaXAuZ2V0U2hpcCgpID09PSBlbGVtZW50LnNoaXAuZ2V0U2hpcCgpKSB7XG4gICAgICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QuYWRkKGBzaGlwJHtudW19YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG51bSsrO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHBsYXllcjIuYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgbnVtYmVyID0gXCJcIiArIGVsZW1lbnQueCArIGVsZW1lbnQueTtcbiAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVydHdvZ3JpZFwiKTtcbiAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgaWYgKGVsZW1lbnQuaGl0ID09IGZhbHNlKSBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgIGVsc2UgaWYgKCFlbGVtZW50LnNoaXApIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGVsc2UgaWYgKGVsZW1lbnQuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGl0XCIpO1xuICAgICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oaXQgPT0gdHJ1ZSlcbiAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIEJFRk9SRSBHQU1FIFNUQVJUU1xuXG4vLyBkZWZhdWx0IGdyaWQgZm9yIGdhbWVib2FyZFxuZnVuY3Rpb24gbWFrZUFHcmlkKHBhcmVudERpdikge1xuICBwYXJlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgbyA9IDA7IG8gPCAxMDsgbysrKSB7XG4gICAgICBjb25zdCBib3hHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgYm94R3JpZC5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuICAgICAgYm94R3JpZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtpfSR7b31gKTtcbiAgICAgIGlmIChwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbaV1bb10uc2hpcCkge1xuICAgICAgICBib3hHcmlkLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIGJveEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnU2hpcCk7XG4gICAgICB9XG4gICAgICBib3hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnZ2luZ2Z1bmN0aW9uKTtcbiAgICAgIC8vIGJveEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcGVuZCcsZHJhZ1NoaXBFbmQpO1xuICAgICAgYm94R3JpZC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcmFnU2hpcEVuZCk7XG4gICAgICBib3hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCByb3RhdGVTaGlwKTtcbiAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChib3hHcmlkKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tUYXJnZXRGb3JTaGlwcyhzaGlwQ29vcmQsIG5ld1Bvc2l0aW9uQ29vcmQsIGFkZCkge1xuICAvLyBjaGVja3MgYmFzZWQgb24gcm90YXRlXG4gIGxldCBuZXdQb3NpdGlvbkhvbGRlciA9IG5ld1Bvc2l0aW9uQ29vcmQuam9pbihcIlwiKTtcbiAgLy8gbGV0IGFkZCA9IG5leHRTaGlwQ29vcmRIZWxwZXIoc2hpcENvb3JkLCB0cnVlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmQubGVuZ3RoOyBpKyspIHtcbiAgICAvL2NoZWNrIHRhcmdldCBoYXMgbm8gc2hpcFxuICAgIGxldCBuZXdTaGlwQ29vcmRYWSA9IGdldE5ld1NoaXBDb29yZGluYXRlKG5ld1Bvc2l0aW9uSG9sZGVyICogMSk7XG5cbiAgICBpZiAoXG4gICAgICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK25ld1NoaXBDb29yZFhZWzBdXVsrbmV3U2hpcENvb3JkWFlbMV1dLnNoaXAgIT1cbiAgICAgIHVuZGVmaW5lZFxuICAgIClcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIG5ld1Bvc2l0aW9uSG9sZGVyID0gbmV3UG9zaXRpb25Ib2xkZXIgKiAxICsgYWRkO1xuICAgIGkrKztcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHJvdGF0ZVNoaXAoZSkge1xuICBjb25zdCBzaGlwQ29vcmRzID0gZ2V0U2hpcENvb3Jkc0FsbChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtlLnRhcmdldC5jbGFzc0xpc3RbMl19YClcbiAgKTtcbiAgbGV0IGFkZCA9IG5leHRTaGlwQ29vcmRIZWxwZXIoc2hpcENvb3JkcywgdHJ1ZSk7XG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBlLnRhcmdldC5pZC5zcGxpdChcIlwiKTtcbiAgbGV0IHNoaXBJbnN0YW5jZSA9XG4gICAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpWytjb29yZGluYXRlWzBdXVsrY29vcmRpbmF0ZVsxXV0uc2hpcDtcblxuICBjb25zdCBuZXdQb3NpdGlvbkNvb3JkID0gW1xuICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpLFxuICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpLFxuICBdO1xuICB3aGlsZSAoXG4gICAgY2hlY2tOZXdDb29yZGluYXRlUG9zc2libGUoXG4gICAgICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK3NoaXBDb29yZHNbMF1dWytzaGlwQ29vcmRzWzFdXS5zaGlwLFxuICAgICAgc2hpcENvb3JkcyxcbiAgICAgIG5ld1Bvc2l0aW9uQ29vcmQsXG4gICAgICB0cnVlXG4gICAgKSA9PT0gZmFsc2UgfHxcbiAgICBjaGVja1RhcmdldEZvclNoaXBzKHNoaXBDb29yZHMsIG5ld1Bvc2l0aW9uQ29vcmQsIGFkZCkgPT09IGZhbHNlXG4gICkge1xuICAgIG5ld1Bvc2l0aW9uQ29vcmQuc3BsaWNlKFxuICAgICAgMCxcbiAgICAgIEluZmluaXR5LFxuICAgICAgLi4uW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpLCBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KV1cbiAgICApO1xuICB9XG4gIHJlbW92ZWFuZEFkZE5ld1NoaXAoc2hpcENvb3JkcywgbmV3UG9zaXRpb25Db29yZCwgYWRkLCBzaGlwSW5zdGFuY2UsIHRydWUpO1xuICAvLyBtb3ZlIHRvIG5ldyBQb3NpdGlvbjtcbiAgbWFrZUFHcmlkKHBsYXllcjFCb2FyZCk7XG4gIG1ha2VBR3JpZChwbGF5ZXIxRGlzcGxheSk7XG4gIHNldFByZWxpbWluYXJ5Qm9hcmQoKTtcbn1cblxuZnVuY3Rpb24gc2V0UHJlbGltaW5hcnlCb2FyZCgpIHtcbiAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJvbmVncmlkXCIpO1xuXG4gIGNvbnNvbGUubG9nKHBsYXllcjEuYm9hcmQucHJldHR5UHJpbnQoKSk7XG4gIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgbnVtYmVyID0gXCJcIiArIGVsZW1lbnQueCArIGVsZW1lbnQueTtcbiAgICAgIGlmICghZWxlbWVudC5zaGlwKSB7XG4gICAgICAgIHJldHVybiBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5jbGFzc0xpc3QucmVtb3ZlKGBzaGlwYCk7XG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC5zaGlwLmdldFNoaXAoKSkge1xuICAgICAgICBsZXQgbnVtID0gMDtcblxuICAgICAgICBwbGF5ZXIxLmJvYXJkLnNoaXBzQXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgIGlmIChzaGlwLmdldFNoaXAoKSA9PT0gZWxlbWVudC5zaGlwLmdldFNoaXAoKSkge1xuICAgICAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LmFkZChgc2hpcGApO1xuICAgICAgICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LmFkZChgc2hpcCR7bnVtfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBudW0rKztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBiZWZvcmUgZ2FtZSBzdGFydHNcbmZ1bmN0aW9uIGRyYWdTaGlwKGUpIHtcbiAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuY2xhc3NMaXN0WzJdKTtcbiAgbGV0IHNoaXBOYW1lID0gZS50YXJnZXQuY2xhc3NMaXN0WzJdO1xuICBjb25zdCBzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzaGlwTmFtZSk7XG4gIC8vIGxldCBzaGlwQ29vcmRpbmF0ZSA9IFtdO1xuICAvLyBjb25zb2xlLmxvZyhzaGlwKTtcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZS50YXJnZXQuaWQpO1xuICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJjb3B5XCI7XG4gIC8vIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDtpKyspe1xuICAvLyAgIHNoaXBDb29yZGluYXRlLnB1c2goc2hpcFtpXS5pZCk7XG5cbiAgLy8gfVxufVxuZnVuY3Rpb24gZHJhZ2dpbmdmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cbmZ1bmN0aW9uIGdldFNoaXBDb29yZHNBbGwoc291cmNlU2hpcE5hbWVBcnJheSkge1xuICBjb25zdCBzaGlwQ29vcmRzID0gW107XG4gIHNvdXJjZVNoaXBOYW1lQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGxldCB4eSA9IGVsZW1lbnQuaWQuc3BsaXQoXCJcIik7XG4gICAgc2hpcENvb3Jkcy5wdXNoKCt4eVswXSk7XG4gICAgc2hpcENvb3Jkcy5wdXNoKCt4eVsxXSk7XG4gIH0pO1xuICByZXR1cm4gc2hpcENvb3Jkcztcbn1cbmZ1bmN0aW9uIGRyYWdTaGlwRW5kKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB1c2VyQ2xpY2tlZENvb3JkaW5hdGUgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgbGV0IHNvdXJjZVNoaXBDb29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3VzZXJDbGlja2VkQ29vcmRpbmF0ZX1gKTtcbiAgbGV0IHNvdXJjZVNoaXBOYW1lQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIGAuJHtzb3VyY2VTaGlwQ29vcmQuY2xhc3NMaXN0WzJdfWBcbiAgKTtcbiAgY29uc3Qgc2hpcENvb3JkcyA9IGdldFNoaXBDb29yZHNBbGwoc291cmNlU2hpcE5hbWVBcnJheSk7XG4gIGxldCBjb29yZGluYXRlID0gdXNlckNsaWNrZWRDb29yZGluYXRlLnNwbGl0KFwiXCIpO1xuXG4gIGxldCBzaGlwSW5zdGFuY2UgPVxuICAgIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVsrY29vcmRpbmF0ZVswXV1bK2Nvb3JkaW5hdGVbMV1dLnNoaXA7XG5cbiAgLy8gcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpXG4gIC8vIGNvbnNvbGUubG9nKHNvdXJjZVNoaXApO1xuXG4gIGxldCB0YXJnZXRJRCA9IGUudGFyZ2V0LmlkO1xuXG4gIGNoZWNrVXBkYXRlR2FtZUJvYXJkKFxuICAgIHNoaXBDb29yZHMsXG4gICAgc2hpcEluc3RhbmNlLFxuICAgIHVzZXJDbGlja2VkQ29vcmRpbmF0ZSxcbiAgICB0YXJnZXRJRFxuICApO1xuXG4gIG1ha2VBR3JpZChwbGF5ZXIxQm9hcmQpO1xuICBtYWtlQUdyaWQocGxheWVyMURpc3BsYXkpO1xuICBzZXRQcmVsaW1pbmFyeUJvYXJkKCk7XG59XG5mdW5jdGlvbiBuZXh0U2hpcENvb3JkSGVscGVyKHNoaXBDb29yZCwgcm90YXRlKSB7XG4gIGxldCBhZGQ7XG4gIGlmIChyb3RhdGUpIHtcbiAgICAhcGxheWVyMS5ib2FyZFxuICAgICAgLmdldEJvYXJkKClcbiAgICAgIFsrc2hpcENvb3JkWzBdXVsrc2hpcENvb3JkWzFdXS5zaGlwLmlzU2hpcEhvcml6b250YWwoKVxuICAgICAgPyAoYWRkID0gMTApXG4gICAgICA6IChhZGQgPSAxKTtcbiAgfSBlbHNlIHtcbiAgICAhcGxheWVyMS5ib2FyZFxuICAgICAgLmdldEJvYXJkKClcbiAgICAgIFsrc2hpcENvb3JkWzBdXVsrc2hpcENvb3JkWzFdXS5zaGlwLmlzU2hpcEhvcml6b250YWwoKVxuICAgICAgPyAoYWRkID0gMSlcbiAgICAgIDogKGFkZCA9IDEwKTtcbiAgfVxuXG4gIHJldHVybiBhZGQ7XG59XG5mdW5jdGlvbiBjaGVja1VwZGF0ZUdhbWVCb2FyZChzaGlwQ29vcmQsIHNoaXBJbnN0YW5jZSwgc291cmNlRGF0YSwgdGFyZ2V0SUQpIHtcbiAgbGV0IGFkZDtcbiAgbGV0IG5ld1Bvc2l0aW9uQ29vcmQ7XG4gIGxldCBuZXdQb3NpdGlvbkhvbGRlcjtcbiAgLy8gY29vcmRpbmF0ZXMgYWRkIHRvIGRldGVybWluZSBjdXJyZW50IHNoaXAncyBuZXh0IGNvb3JkaW5hdGVzXG4gIGFkZCA9IG5leHRTaGlwQ29vcmRIZWxwZXIoc2hpcENvb3JkKTtcblxuICBuZXdQb3NpdGlvbkNvb3JkID0gZmluZFN0YXJ0UG9zaXRpb24oXG4gICAgYWRkLFxuICAgIHNoaXBDb29yZCxcbiAgICBmaW5kQ29vcmRpbmF0ZURpZmZlcmVuY2Uoc2hpcENvb3JkLCBzb3VyY2VEYXRhKSxcbiAgICB0YXJnZXRJRFxuICApO1xuXG4gIGlmIChcbiAgICBjaGVja05ld0Nvb3JkaW5hdGVQb3NzaWJsZShcbiAgICAgIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVsrc2hpcENvb3JkWzBdXVsrc2hpcENvb3JkWzFdXS5zaGlwLFxuICAgICAgc2hpcENvb3JkLFxuICAgICAgbmV3UG9zaXRpb25Db29yZFxuICAgICkgPT09IGZhbHNlXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBuZXdQb3NpdGlvbkhvbGRlciA9IG5ld1Bvc2l0aW9uQ29vcmQ7XG5cbiAgLy8gaXRlcmF0ZXMgdGhyb3VnaCBzaGlwIGNvb3JkaW5hdGVzLlxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgLy9jaGVjayB0YXJnZXQgaGFzIG5vIHNoaXBcbiAgICBsZXQgbmV3U2hpcENvb3JkWFkgPSBnZXROZXdTaGlwQ29vcmRpbmF0ZShuZXdQb3NpdGlvbkhvbGRlcik7XG4gICAgaWYgKFxuICAgICAgcGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpWytuZXdTaGlwQ29vcmRYWVswXV1bK25ld1NoaXBDb29yZFhZWzFdXS5zaGlwICYmXG4gICAgICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK25ld1NoaXBDb29yZFhZWzBdXVsrbmV3U2hpcENvb3JkWFlbMV1dLnNoaXAgIT1cbiAgICAgICAgc2hpcEluc3RhbmNlXG4gICAgKVxuICAgICAgcmV0dXJuO1xuXG4gICAgbmV3UG9zaXRpb25Ib2xkZXIgKz0gYWRkO1xuICAgIGkrKztcbiAgfVxuICByZW1vdmVhbmRBZGROZXdTaGlwKHNoaXBDb29yZCwgbmV3UG9zaXRpb25Db29yZCwgYWRkLCBzaGlwSW5zdGFuY2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVhbmRBZGROZXdTaGlwKFxuICBzaGlwQ29vcmQsXG4gIG5ld1Bvc2l0aW9uQ29vcmQsXG4gIGFkZCxcbiAgc2hpcEluc3RhbmNlLFxuICByb3RhdGVcbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShuZXdQb3NpdGlvbkNvb3JkKSkge1xuICAgIG5ld1Bvc2l0aW9uQ29vcmQgPSBgJHtuZXdQb3NpdGlvbkNvb3JkWzBdfSR7bmV3UG9zaXRpb25Db29yZFsxXX1gICogMTtcbiAgfVxuICBjb25zb2xlLmxvZyhzaGlwQ29vcmQsIG5ld1Bvc2l0aW9uQ29vcmQsIGFkZCwgc2hpcEluc3RhbmNlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmQubGVuZ3RoOyBpKyspIHtcbiAgICAvL3JlbW92ZSBjdXJyZW50IHNoaXBcbiAgICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK3NoaXBDb29yZFtpXV1bK3NoaXBDb29yZFtpICsgMV1dLnNoaXAgPSB1bmRlZmluZWQ7XG4gICAgaSsrO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG5ld1NoaXBDb29yZFhZID0gZ2V0TmV3U2hpcENvb3JkaW5hdGUobmV3UG9zaXRpb25Db29yZCk7XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgc2hpcEluc3RhbmNlLnNldFN0YXJ0Q29vcmRpbmF0ZXMoK25ld1NoaXBDb29yZFhZWzBdLCArbmV3U2hpcENvb3JkWFlbMV0pO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCtuZXdTaGlwQ29vcmRYWVswXSwgK25ld1NoaXBDb29yZFhZWzFdKTtcbiAgICBwbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbK25ld1NoaXBDb29yZFhZWzBdXVsrbmV3U2hpcENvb3JkWFlbMV1dLnNoaXAgPVxuICAgICAgc2hpcEluc3RhbmNlO1xuICAgIGlmIChyb3RhdGUgJiYgaSA9PT0gc2hpcENvb3JkLmxlbmd0aCAtIDIpIHtcbiAgICAgIHBsYXllcjEuYm9hcmRcbiAgICAgICAgLmdldEJvYXJkKClcbiAgICAgICAgWytuZXdTaGlwQ29vcmRYWVswXV1bK25ld1NoaXBDb29yZFhZWzFdXS5zaGlwLnVwZGF0ZVNoaXBEaXJlY3Rpb24oKTtcbiAgICB9XG4gICAgaSsrO1xuICAgIG5ld1Bvc2l0aW9uQ29vcmQgKz0gYWRkO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrTmV3Q29vcmRpbmF0ZVBvc3NpYmxlKFxuICBwbGF5ZXJTaGlwLFxuICBzaGlwQ29vcmQsXG4gIG5ld1Bvc2l0aW9uQ29vcmQsXG4gIHJvdGF0ZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG5ld1Bvc2l0aW9uQ29vcmQpKSB7XG4gICAgbmV3UG9zaXRpb25Db29yZCA9IG5ld1Bvc2l0aW9uQ29vcmQuam9pbihcIlwiKSAqIDE7XG4gIH1cbiAgaWYgKHJvdGF0ZSkge1xuICAgIGNvbnNvbGUubG9nKG5ld1Bvc2l0aW9uQ29vcmQsIHNoaXBDb29yZC5sZW5ndGggLyAyKTtcbiAgICBpZiAocGxheWVyU2hpcC5pc1NoaXBIb3Jpem9udGFsKCkpIHtcbiAgICAgIGlmICgobmV3UG9zaXRpb25Db29yZCAlIDEwKSArIHNoaXBDb29yZC5sZW5ndGggLyAyID4gMTApIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKE1hdGgucm91bmQobmV3UG9zaXRpb25Db29yZCAvIDEwIC0gMC40OSkgKyBzaGlwQ29vcmQubGVuZ3RoIC8gMiA+IDEwKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmICghcGxheWVyU2hpcC5pc1NoaXBIb3Jpem9udGFsKCkpIHtcbiAgICBpZiAoKG5ld1Bvc2l0aW9uQ29vcmQgJSAxMCkgKyBzaGlwQ29vcmQubGVuZ3RoIC8gMiA+IDEwKSByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgaWYgKE1hdGgucm91bmQobmV3UG9zaXRpb25Db29yZCAvIDEwIC0gMC40OSkgKyBzaGlwQ29vcmQubGVuZ3RoIC8gMiA+IDEwKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIGZpbmQgc3RhcnQqKGFrYSBlbmQpIGVkZ2Ugb2Ygc2hpcCAoYm90dG9tIG9yIHJpZ2h0IGVkZ2UpXG5mdW5jdGlvbiBmaW5kQ29vcmRpbmF0ZURpZmZlcmVuY2Uoc2hpcENvb3JkLCBzb3VyY2VEYXRhKSB7XG4gIGNvbnN0IGFuc3dlciA9XG4gICAgc2hpcENvb3JkW3NoaXBDb29yZC5sZW5ndGggLSAyXSAqIDEwICtcbiAgICBzaGlwQ29vcmRbc2hpcENvb3JkLmxlbmd0aCAtIDFdIC1cbiAgICBzb3VyY2VEYXRhO1xuXG4gIHJldHVybiBhbnN3ZXI7XG59XG5mdW5jdGlvbiBmaW5kU3RhcnRQb3NpdGlvbihhZGQsIHNoaXBDb29yZCwgZGlmZmVyZW5jZSwgdGFyZ2V0SUQpIHtcbiAgcmV0dXJuICt0YXJnZXRJRCArIGRpZmZlcmVuY2UgLSAoc2hpcENvb3JkLmxlbmd0aCAvIDIgLSAxKSAqIGFkZDtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3U2hpcENvb3JkaW5hdGUobmV3UG9zaXRpb25Db29yZCkge1xuICBpZiAobmV3UG9zaXRpb25Db29yZCA8PSA5KSB7XG4gICAgcmV0dXJuIGAwJHtuZXdQb3NpdGlvbkNvb3JkfWAuc3BsaXQoXCJcIik7XG4gIH0gZWxzZSByZXR1cm4gYCR7bmV3UG9zaXRpb25Db29yZH1gLnNwbGl0KFwiXCIpO1xufVxuXG5leHBvcnQge1xuICBjaGVja1dpbm5lcixcbiAgdXBkYXRlQm9hcmRHYW1lTGl2ZSxcbiAgdXBkYXRlRGlzcGxheVdpdGhTaGlwSW1hZ2UsXG4gIGNoZWNrVXBkYXRlR2FtZUJvYXJkLFxuICBzZXRQcmVsaW1pbmFyeUJvYXJkLFxuICBldmFsdWxhdGVQbGF5ZXJDbGljayxcbiAgbWFrZUFHcmlkLFxuICBjaGVja1R1cm4sXG4gIGRyYWdTaGlwLFxuICBkcmFnU2hpcEVuZCxcbiAgZHJhZ2dpbmdmdW5jdGlvbixcbn07XG4iLCJjb25zdCBzaGlwID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcbi8vIGNvbnN0IHNoaXAgPSB7IGxlbmd0aCwgc3Vuayx9XG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGxldCBib2FyZCA9IFtbXV07XG4gIGNyZWF0ZUJvYXJkKCk7XG4gIGxldCB0dXJuID0gMDtcbiAgbGV0IHNoaXBzQXJyYXkgPSBbXTtcblxuICBmdW5jdGlvbiBnZXRCb2FyZCgpIHtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBib2FyZC5wdXNoKFtdKTtcbiAgICAgIGZvciAobGV0IG8gPSAwOyBvIDwgMTA7IG8rKykge1xuICAgICAgICBib2FyZFtpXS5wdXNoKGNyZWF0ZUNvb3JkaW5hdGVPYmplY3QoaSwgbykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvb3JkaW5hdGVPYmplY3QoeCwgeSkge1xuICAgIGxldCBjb29yZGluYXRlID0ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHksXG4gICAgICBzaGlwOiB1bmRlZmluZWQsXG4gICAgICBoaXQ6IG51bGwsXG4gICAgfTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgfVxuXG4gIGNvbnN0IGxvY2F0aW9uID0gKG51bTEsIG51bTIpID0+IHtcbiAgICByZXR1cm4gYm9hcmRbbnVtMV1bbnVtMl07XG4gIH07XG5cbiAgZnVuY3Rpb24gZmlsbEJvYXJkUmFuZG9tKGJhdHRsZXNoaXApIHtcbiAgICBzaGlwc0FycmF5LnB1c2goYmF0dGxlc2hpcCk7XG4gICAgbGV0IGxlbmd0aCA9IGJhdHRsZXNoaXAuZ2V0U2hpcCgpLmxlbmd0aDtcblxuICAgIGxldCB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgbGV0IHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICB3aGlsZSAoIWNoZWNrTm9TaGlwKGJhdHRsZXNoaXAuaXNTaGlwSG9yaXpvbnRhbCgpLCBsZW5ndGgsIHgsIHkpKSB7XG4gICAgICB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgfVxuICAgIGJhdHRsZXNoaXAuc2V0U3RhcnRDb29yZGluYXRlcyh4LCB5KTtcbiAgICBpZiAoYmF0dGxlc2hpcC5pc1NoaXBIb3Jpem9udGFsKCkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeCArIGldW3ldLnNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3hdW3kgKyBpXS5zaGlwID0gYmF0dGxlc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tOb1NoaXAoaXNIb3Jpem9udGFsLCBsZW5ndGgsIHgsIHkpIHtcbiAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBpZiAoeCA8IDAgfHwgeCArIGxlbmd0aCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3ggKyBpXVt5XS5zaGlwICE9IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSArIGxlbmd0aCA+IDkpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3hdW3kgKyBpXS5zaGlwICE9IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBhZGRTaGlwKG51bTEsIG51bTIsIHNpemUgPSAyLCBpc0hvcml6b250YWwgPSB0cnVlKSB7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IHNoaXAoc2l6ZSk7XG5cbiAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBib2FyZFtudW0xXVtudW0yICsgaV0uc2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGJvYXJkW251bTEgKyBpXVtudW0xXS5zaGlwID0gYmF0dGxlc2hpcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV0dHlQcmludCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJldHR5UHJpbnQoKSB7XG4gICAgbGV0IHN0cmluZyA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBzdHJpbmcgKz0gXCJcXG5cIjtcbiAgICAgIGZvciAobGV0IG8gPSAwOyBvIDwgMTA7IG8rKykge1xuICAgICAgICBpZiAoYm9hcmRbaV1bb10uaGl0ID09IGZhbHNlKSBzdHJpbmcgKz0gXCJbLV1cIjtcbiAgICAgICAgZWxzZSBpZiAoIWJvYXJkW2ldW29dLnNoaXApIHN0cmluZyArPSBcIlsgXVwiO1xuICAgICAgICBlbHNlIGlmIChib2FyZFtpXVtvXS5zaGlwLmlzU3VuaygpKSBzdHJpbmcgKz0gXCJbWF1cIjtcbiAgICAgICAgZWxzZSBpZiAoYm9hcmRbaV1bb10uc2hpcCkgc3RyaW5nICs9IFwiW1NdXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBoaXRTaGlwKG51bTEsIG51bTIpIHtcbiAgICBpZiAobnVtMSA8IDAgfHwgbnVtMiA8IDAgfHwgbnVtMSA+IDkgfHwgbnVtMiA+IDkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChib2FyZFtudW0xXVtudW0yXS5oaXQgIT09IG51bGwpIHtcbiAgICAgIC8vY2FuJ3QgaGl0IHNvbWV0aGluZyBhbHJlYWR5IGhpdCBiZWZvcmVcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGJvYXJkW251bTFdW251bTJdLnNoaXApIHtcbiAgICAgIC8vaWYgYSBzaGlwXG4gICAgICBib2FyZFtudW0xXVtudW0yXS5zaGlwLmhpdCgpO1xuICAgICAgYm9hcmRbbnVtMV1bbnVtMl0uc2hpcC5pc1N1bmsoKTtcbiAgICAgIGJvYXJkW251bTFdW251bTJdLmhpdCA9IHRydWU7XG4gICAgICAvLyBzZWUgaWYgYWxsIHNoaXBzIGFyZSBzdW5rXG4gICAgICBwcmV0dHlQcmludCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vaWYgYSBtaXNzXG4gICAgICBib2FyZFtudW0xXVtudW0yXS5oaXQgPSBmYWxzZTtcbiAgICAgIHByZXR0eVByaW50KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tBbGxTdW5rKCkge1xuICAgIGxldCBhbGxTdW5rID0gYm9hcmQuZXZlcnkoKGNvb3JkKSA9PlxuICAgICAgY29vcmQuZXZlcnkoKGVsZW1lbnQpID0+IGNoZWNrU2hpcChlbGVtZW50KSlcbiAgICApO1xuICAgIC8vICYmIGNvb3JkLnNoaXAuc3VuayA9PSBmYWxzZVxuICAgIGlmIChhbGxTdW5rKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrU2hpcChjb29yZCkge1xuICAgIGlmIChjb29yZC5zaGlwID09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gICAgZWxzZSBpZiAoY29vcmQuc2hpcC5nZXRTaGlwKCkuc3VuaykgcmV0dXJuIHRydWU7XG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0lzU2hpcChjb29yZCkge1xuICAgIGlmIChjb29yZC5zaGlwID09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIGVsc2UgaWYgKGNvb3JkLnNoaXApIHJldHVybiB0cnVlOyAvL2xvbCByZWR1ZG5hdD9cbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHVybixcbiAgICBnZXRCb2FyZCxcbiAgICBsb2NhdGlvbixcbiAgICBhZGRTaGlwLFxuICAgIGhpdFNoaXAsXG4gICAgcHJldHR5UHJpbnQsXG4gICAgY2hlY2tBbGxTdW5rLFxuICAgIGNoZWNrSXNTaGlwLFxuICAgIGZpbGxCb2FyZFJhbmRvbSxcbiAgICBzaGlwc0FycmF5LFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lYm9hcmQ7XG4iLCJpbXBvcnQge1xuICBjaGVja1dpbm5lcixcbiAgdXBkYXRlQm9hcmRHYW1lTGl2ZSxcbiAgdXBkYXRlRGlzcGxheVdpdGhTaGlwSW1hZ2UsXG4gIGNoZWNrVXBkYXRlR2FtZUJvYXJkLFxuICBzZXRQcmVsaW1pbmFyeUJvYXJkLFxuICBldmFsdWxhdGVQbGF5ZXJDbGljayxcbiAgbWFrZUFHcmlkLFxuICBjaGVja1R1cm4sXG4gIGRyYWdTaGlwLFxuICBkcmFnU2hpcEVuZCxcbiAgZHJhZ2dpbmdmdW5jdGlvbixcbn0gZnJvbSBcIi4vQ29udHJvbGxlclwiO1xuXG5jb25zdCBwbGF5ZXIgPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG5pbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuXG5sZXQgaXNBaSA9IHRydWU7XG5hZGRJbmZvSGVscGVyKCk7XG5leHBvcnQgbGV0IHBsYXllcjEgPSBwbGF5ZXIoXCJQbGF5ZXIxXCIsICFpc0FpLCAxKTtcbmV4cG9ydCBsZXQgcGxheWVyMiA9IHBsYXllcihcIkFJXCIsIGlzQWksIDIpO1xuXG5jb25zdCBuZXdHYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXJ0XCIpO1xuY29uc3Qgc3RhcnRHYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydFwiKTtcblxuLy8gYnV0dG9uIHRvIHN0YXJ0IGdhbWVcbm5ld0dhbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlHYW1lKTtcbnN0YXJ0R2FtZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkRXZlbnRMaXN0ZW5lckdhbWVTdGFydCk7XG5cbmV4cG9ydCBjb25zdCBwbGF5ZXIxQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcm9uZWdyaWRcIik7XG5leHBvcnQgY29uc3QgcGxheWVyMURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcm9uZURpc3BsYXlcIik7XG5leHBvcnQgY29uc3QgcGxheWVyMkJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJ0d29ncmlkXCIpO1xuXG5wbGF5R2FtZSgpO1xuXG4vLyBtYWtlIGEgYm9hcmQgb24gd2Vic2l0ZVxuZnVuY3Rpb24gcGxheUdhbWUoKSB7XG4gIHN0YXJ0R2FtZURpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBwbGF5ZXIxID0gcGxheWVyKFwiUGxheWVyMVwiLCAhaXNBaSwgMSk7XG4gIHBsYXllcjIgPSBwbGF5ZXIoXCJBSVwiLCBpc0FpLCAyKTtcbiAgY29uc29sZS5sb2coXCJuZXcgZ2FtZVwiKTtcblxuICBtYWtlQUdyaWQocGxheWVyMUJvYXJkKTtcbiAgbWFrZUFHcmlkKHBsYXllcjFEaXNwbGF5KTtcbiAgbWFrZUFHcmlkKHBsYXllcjJCb2FyZCk7XG5cbiAgc2V0UHJlbGltaW5hcnlCb2FyZCgpO1xufVxuXG4vLyBwbGF5R2FtZSgpOyAgLy93aWxsIG5lZWQgdG8gY2hhbmdlIGZvciB3aGVuIHRoZXJlIGlzIGEgdXNlciBpbnRlcmZhY2VcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckdhbWVTdGFydChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdXBkYXRlRGlzcGxheVdpdGhTaGlwSW1hZ2UoKTtcbiAgY2hlY2tUdXJuKCk7XG5cbiAgc3RhcnRHYW1lRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIHBsYXllcjIuYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJ0d29ncmlkXCIpO1xuXG4gICAgZWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgbnVtYmVyID0gXCJcIiArIGVsZW1lbnQueCArIGVsZW1lbnQueTtcbiAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmFsdWxhdGVQbGF5ZXJDbGljayk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJvbmVncmlkXCIpO1xuXG4gICAgZWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgbnVtYmVyID0gXCJcIiArIGVsZW1lbnQueCArIGVsZW1lbnQueTtcbiAgICAgIGJveC5jaGlsZE5vZGVzWytudW1iZXJdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ1NoaXApO1xuICAgICAgYm94LmNoaWxkTm9kZXNbK251bWJlcl0uY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ2dpbmdmdW5jdGlvbik7XG4gICAgICBib3guY2hpbGROb2Rlc1srbnVtYmVyXS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcmFnU2hpcEVuZCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyB9XG5cbmZ1bmN0aW9uIGFkZEluZm9IZWxwZXIoKSB7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW5mb3RleHRcIik7XG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBpbmZvLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gIGluZm8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBzaG93SGVscCk7XG4gIGluZm8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIHJlbW92ZUhlbHApO1xufVxuXG5mdW5jdGlvbiBzaG93SGVscCgpIHtcbiAgY29uc3QgaW5mb3RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm90ZXh0XCIpO1xuICBpbmZvdGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBpbmZvdGV4dC50ZXh0Q29udGVudCA9IFwiRG91YmxlIENsaWNrIHRvIFJvdGF0ZVwiO1xufVxuXG5mdW5jdGlvbiByZW1vdmVIZWxwKCkge1xuICBjb25zdCBpbmZvdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb3RleHRcIik7XG4gIGluZm90ZXh0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59XG4iLCJjb25zdCBnYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XG5jb25zdCBzaGlwID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcblxuY29uc3QgcGxheWVyID0gKG5hbWUsIGlzQUludCwgbnVtYmVyID0gMSkgPT4ge1xuICBjb25zdCBpc0FJID0gaXNBSW50O1xuICBjb25zdCBwbGF5ZXJOYW1lID0gbmFtZTtcbiAgY29uc3QgcGxheWVyTnVtYmVyID0gbnVtYmVyO1xuICBjb25zdCBib2FyZCA9IGdhbWVib2FyZCgpO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtdO1xuXG4gIGxldCB3aW5uZXIgPSBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBsZXQgbnVtO1xuICAgIGlmIChpIDw9IDIpIG51bSA9IDI7XG4gICAgZWxzZSBpZiAoaSA8PSA0KSBudW0gPSAzO1xuICAgIGVsc2UgaWYgKGkgPD0gNSkgbnVtID0gNDtcbiAgICBlbHNlIGlmIChpIDwgNykgbnVtID0gNTtcbiAgICBjb25zdCBzaGlwMSA9IHNoaXAobnVtKTtcbiAgICBzaGlwcy5wdXNoKHNoaXAxKTtcbiAgfVxuXG4gIGZpbGxBbGxTaGlwcygpO1xuXG4gIGZ1bmN0aW9uIGdldEFsbFNoaXBzKCkge1xuICAgIHJldHVybiBzaGlwcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGxBbGxTaGlwcygpIHtcbiAgICBzaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBib2FyZC5maWxsQm9hcmRSYW5kb20oZWxlbWVudCk7XG4gICAgfSk7XG4gICAgYm9hcmQucHJldHR5UHJpbnQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob290Q29vcmRpbmF0ZXMoeCA9IDAsIHkgPSAwLCBpc1JvYm90KSB7XG4gICAgaWYgKGlzUm9ib3QpIHtcbiAgICAgIHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgIHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcblxuICAgICAgaWYgKHNoaXBDb29yZGluYXRlcy5sZW5ndGggPj0gMSB8fCBwb3NzaWJsZU1vdmVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIGlmIChzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICB4ID0gc2hpcENvb3JkaW5hdGVzLnNwbGljZSgwLCAxKVswXTtcbiAgICAgICAgICB5ID0gc2hpcENvb3JkaW5hdGVzLnNwbGljZSgwLCAxKVswXTtcbiAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goeCArIDEsIHkpO1xuICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh4IC0gMSwgeSk7XG4gICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHgsIHkgLSAxKTtcbiAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goeCwgeSArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb29yZCA9IHBvc3NpYmxlTW92ZXMuc3BsaWNlKDAsIDIpO1xuICAgICAgICBsZXQgcG9zc2libGVNb3ZlQ29vcmRpbmF0ZSA9IGJvYXJkLmhpdFNoaXAoY29vcmRbMF0sIGNvb3JkWzFdKTtcbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgIHBvc3NpYmxlTW92ZXMubGVuZ3RoICE9IDAgJiZcbiAgICAgICAgICBwb3NzaWJsZU1vdmVDb29yZGluYXRlID09IHVuZGVmaW5lZFxuICAgICAgICApIHtcbiAgICAgICAgICBjb29yZCA9IHBvc3NpYmxlTW92ZXMuc3BsaWNlKDAsIDIpO1xuICAgICAgICAgIHBvc3NpYmxlTW92ZUNvb3JkaW5hdGUgPSBib2FyZC5oaXRTaGlwKGNvb3JkWzBdLCBjb29yZFsxXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc3NpYmxlTW92ZUNvb3JkaW5hdGUpIHtcbiAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChjb29yZFswXSk7XG4gICAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goY29vcmRbMV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBtb3ZlUG9zc2libGUgPSBib2FyZC5oaXRTaGlwKHgsIHkpO1xuXG4gICAgICB3aGlsZSAobW92ZVBvc3NpYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgIG1vdmVQb3NzaWJsZSA9IGJvYXJkLmhpdFNoaXAoeCwgeSk7XG4gICAgICB9XG4gICAgICBpZiAobW92ZVBvc3NpYmxlID09IHRydWUpIHtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goeCk7XG4gICAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKHkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBib2FyZC5oaXRTaGlwKHgsIHkpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpc1dpbm5lcigpIHtcbiAgICByZXR1cm4gd2lubmVyO1xuICB9XG4gIGZ1bmN0aW9uIHdvbigpIHtcbiAgICBjb25zdCB0dXJuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50dXJuXCIpO1xuICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSBXT05gO1xuICAgIHdpbm5lciA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0QWxsU2hpcHMsXG4gICAgYm9hcmQsXG4gICAgc2hvb3RDb29yZGluYXRlcyxcbiAgICBwbGF5ZXJOdW1iZXIsXG4gICAgZ2V0TmFtZSxcbiAgICBpc0FJLFxuICAgIGlzV2lubmVyLFxuICAgIHdvbixcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGxheWVyO1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGggPSAyLCBpc0hvcml6b250YWwgPSAwLCBzdW5rID0gZmFsc2UpID0+IHtcbiAgY29uc3Qgc2hpcCA9IHtcbiAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICBoaXRzOiAwLFxuICAgIHN1bms6IHN1bmssXG4gICAgaG9yaXpvbnRhbDogdW5kZWZpbmVkLFxuICB9O1xuXG4gIGlzSG9yaXpvbnRhbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gIHNoaXAuaG9yaXpvbnRhbCA9IGlzSG9yaXpvbnRhbCA9PSAxO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBzaGlwLmhpdHMgKz0gMTtcbiAgICByZXR1cm4gc2hpcC5oaXRzO1xuICB9O1xuICBmdW5jdGlvbiBpc1NoaXBIb3Jpem9udGFsKCkge1xuICAgIHJldHVybiBzaGlwLmhvcml6b250YWw7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlU2hpcERpcmVjdGlvbigpIHtcbiAgICBzaGlwLmhvcml6b250YWwgPSAhc2hpcC5ob3Jpem9udGFsO1xuICAgIGNvbnNvbGUubG9nKHNoaXAuaG9yaXpvbnRhbCk7XG4gIH1cbiAgY29uc3QgZ2V0U2hpcCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcDtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKHNoaXAuaGl0cyA9PSBzaGlwLmxlbmd0aCkgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICByZXR1cm4gc2hpcC5zdW5rO1xuICB9O1xuICBjb25zdCBzZXRTdGFydENvb3JkaW5hdGVzID0gKHgsIHkpID0+IHtcbiAgICBzaGlwLmNvb3JkaW5hdGUgPSBbeCwgeV07XG4gIH07XG5cbiAgY29uc3QgZ2V0U3RhcnRDb29yZGluYXRlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcC5jb29yZGluYXRlO1xuICB9O1xuICByZXR1cm4ge1xuICAgIFNoaXAsXG4gICAgZ2V0U2hpcCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIGlzU2hpcEhvcml6b250YWwsXG4gICAgc2V0U3RhcnRDb29yZGluYXRlcyxcbiAgICBnZXRTdGFydENvb3JkaW5hdGVzLFxuICAgIHVwZGF0ZVNoaXBEaXJlY3Rpb24sXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=