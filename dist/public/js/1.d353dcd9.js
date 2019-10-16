(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Head/index.less":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Head/index.less ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".head-component {\n  background-color: #fff;\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid #e9e9e9;\n  position: relative;\n  z-index: 10;\n  justify-content: space-between;\n  padding: 0 30px;\n}\n.head-component .left {\n  display: flex;\n  align-items: center;\n}\n.head-component .logo {\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  height: 90%;\n}\n.head-component .logo img {\n  flex: 1;\n  height: 22px;\n  padding-right: 10px;\n  margin-right: 10px;\n  margin-left: 20px;\n  border-right: 1px solid #d8d8d8;\n}\n.head-component .logo .log_tit {\n  font-weight: bold;\n  font-size: 14px;\n  color: #333;\n  font-family: \"Microsoft YaHei\";\n}\n.head-component .user {\n  margin-right: 20px;\n}\n.head-component .name {\n  color: #108ee9;\n}\n.head-component .logout {\n  cursor: pointer;\n}\n.head-component .logout:hover {\n  color: #108ee9;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Home/index.less":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Home/index.less ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".primary-layout .ant-layout-header {\n  padding: 0px!important;\n}\n", ""]);


/***/ }),

/***/ "./src/assets/img/header_logo.png":
/*!****************************************!*\
  !*** ./src/assets/img/header_logo.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9197849709de1fc8b8864aa16deefa3b.png";

/***/ }),

/***/ "./src/components/Head/index.less":
/*!****************************************!*\
  !*** ./src/components/Head/index.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Head/index.less");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Head/index.less",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Head/index.less");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/Head/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Head/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./src/components/Head/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/fetch */ "./src/utils/fetch.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var lazy = react__WEBPACK_IMPORTED_MODULE_1__["lazy"],
    Suspense = react__WEBPACK_IMPORTED_MODULE_1__["Suspense"],
    useEffect = react__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
    useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"];

var Head = function Head() {
  var _useState = useState({
    userName: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      userInfo = _useState2[0],
      setUserInfo = _useState2[1];

  var getUserInfo = function getUserInfo() {
    // let timestamp = Date.parse(new Date());
    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_2__["default"])("/report/user/info").then(function (res) {
      if (res.errorCode == 0) {
        var name = res.result.name;
        setUserInfo(_objectSpread({}, userInfo, {
          userName: name
        }));
        window.sessionStorage.setItem('login', JSON.stringify(res.result));
      } else if (res.data.errorCode = 50000) {
        if (res.data.loginUrl) {
          window.location.href = res.data.loginUrl; // window.location.href = res.data.loginUrl+'?redirect=http://localhost-isp.yiche.com/isp-static/#/index/home';
        } else {// window.location.href = "https://a.yiche.com/static_common-portal/login.html?redirect=http://dev-isp.yiche.com:8080/#/index/home";
          }
      }
    });
  };

  var handleLogoutClick = function handleLogoutClick() {
    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_2__["default"])("/common-portal/common/portal/logout", {}, true).then(function (res) {
      if (res.errorCode === 0) {
        window.location = window.location.origin + "/static_common-portal/login.html?redirect=" + window.location.href;
      }
    });
  };

  useEffect(function () {
    getUserInfo();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "head-component"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "logo"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: __webpack_require__(/*! @assets/img/header_logo.png */ "./src/assets/img/header_logo.png")
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: "log_tit"
  }, "\u53CD\u4F5C\u5F0A\u7CFB\u7EDF"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "left"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "user"
  }, "\u6B22\u8FCE\u60A8, ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: "name"
  }, userInfo.userName)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "logout",
    onClick: function onClick() {
      return handleLogoutClick();
    }
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, "\u9000\u51FA"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./src/components/Nav/index.tsx":
/*!**************************************!*\
  !*** ./src/components/Nav/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_icon_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/antd/es/icon/style/css.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/icon */ "./node_modules/antd/es/icon/index.js");
/* harmony import */ var antd_es_menu_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/menu/style/css */ "./node_modules/antd/es/menu/style/css.js");
/* harmony import */ var antd_es_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/menu */ "./node_modules/antd/es/menu/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_menus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pages/menus */ "./src/pages/menus/index.tsx");





function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // import "./index.less";



var useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"];
var SubMenu = antd_es_menu__WEBPACK_IMPORTED_MODULE_3__["default"].SubMenu;

var Nav = function Nav() {
  var _useState = useState(_pages_menus__WEBPACK_IMPORTED_MODULE_6__["default"]),
      _useState2 = _slicedToArray(_useState, 2),
      menues = _useState2[0],
      setMenues = _useState2[1];

  var _useState3 = useState(JSON.parse(window.sessionStorage.getItem('navCurrent')) || ['5176']),
      _useState4 = _slicedToArray(_useState3, 2),
      current = _useState4[0],
      setCurrent = _useState4[1];

  var _useState5 = useState(JSON.parse(window.sessionStorage.getItem('navOpenKey')) || ['5169']),
      _useState6 = _slicedToArray(_useState5, 2),
      openKey = _useState6[0],
      setOpenKey = _useState6[1];

  var currentKeyChange = function currentKeyChange(key) {};

  var handleClick = function handleClick(e) {
    var currentOpenKey = [],
        currentSelectedKey = [];
    currentOpenKey.push(e.keyPath[1]);
    currentSelectedKey.push(e.key);
    e.keyPath[2] ? currentOpenKey.push(e.keyPath[2]) : '';
    window.sessionStorage.navCurrent = JSON.stringify(currentSelectedKey);
    window.sessionStorage.navOpenKey = JSON.stringify(currentOpenKey);
    window.sessionStorage.removeItem('hasDate');
    setCurrent([].concat(currentSelectedKey));
    setOpenKey([].concat(currentOpenKey)); // window.location.reload();
  };

  var showMenu = menues.map(function (menu, index) {
    return !menu.subNodeList ? react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_es_menu__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
      key: menu.nodeId
    }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
      activeClassName: "active",
      to: menu.nodeUrl
    }, menu.className)) : react__WEBPACK_IMPORTED_MODULE_4__["createElement"](SubMenu, {
      key: menu.nodeId,
      title: react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_es_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: menu.imgName
      }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null, menu.className))
    }, menu.subNodeList.map(function (subMenu, i) {
      return !subMenu.subMenues ? react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_es_menu__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
        key: subMenu.nodeId
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
        activeClassName: "active",
        to: subMenu.nodeUrl
      }, subMenu.className)) : react__WEBPACK_IMPORTED_MODULE_4__["createElement"](SubMenu, {
        key: subMenu.nodeId,
        title: subMenu.className
      }, subMenu.subMenues.map(function (subMenu, i) {
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_es_menu__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
          onClick: function onClick() {
            return currentKeyChange(subMenu.nodeId);
          },
          key: subMenu.nodeId
        }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
          activeClassName: "active",
          to: subMenu.nodeUrl
        }, subMenu.className));
      }));
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "components-nav"
  }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_es_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theme: "dark",
    onClick: function onClick(e) {
      return handleClick(e);
    },
    defaultOpenKeys: openKey,
    selectedKeys: current,
    mode: "inline"
  }, showMenu));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/pages/Home/index.less":
/*!***********************************!*\
  !*** ./src/pages/Home/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Home/index.less");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Home/index.less",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Home/index.less");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_layout_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/layout/style/css */ "./node_modules/antd/es/layout/style/css.js");
/* harmony import */ var antd_es_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/layout */ "./node_modules/antd/es/layout/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./src/pages/Home/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Nav */ "./src/components/Nav/index.tsx");
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Head */ "./src/components/Head/index.tsx");







var lazy = react__WEBPACK_IMPORTED_MODULE_3__["lazy"],
    Suspense = react__WEBPACK_IMPORTED_MODULE_3__["Suspense"],
    useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"],
    useEffect = react__WEBPACK_IMPORTED_MODULE_3__["useEffect"];
var Header = antd_es_layout__WEBPACK_IMPORTED_MODULE_1__["default"].Header,
    Footer = antd_es_layout__WEBPACK_IMPORTED_MODULE_1__["default"].Footer,
    Sider = antd_es_layout__WEBPACK_IMPORTED_MODULE_1__["default"].Sider,
    Content = antd_es_layout__WEBPACK_IMPORTED_MODULE_1__["default"].Content;

var Home = function Home(props) {
  var route = props.route;
  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](antd_es_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "primary-layout"
  }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Header, null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_components_Head__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](antd_es_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Sider, null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_components_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Content, null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__["renderRoutes"])(route.routes)))) // <div>
  //   <header className="header-box">
  //     <Head/>
  //   </header>
  //   <main className="main-container">
  //     <div className="nav-container">
  //       <Nav />
  //     </div>
  //     <div className="content-container">
  //       { renderRoutes(route.routes) }
  //     </div> 
  //   </main>
  // </div>
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/menus/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/menus/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var menuTreeItemList = [{
  "className": "订单",
  "nodeId": 5169,
  "nodePid": 0,
  "nodeUrl": "/order/orderList",
  "imgName": 'copy',
  "subNodeList": [{
    "className": "订单管理",
    "nodeId": 5176,
    "nodePid": 5169,
    "nodeUrl": "/order/orderList",
    "subNodeList": [],
    "title": "订单管理"
  }],
  "title": "订单"
}, {
  "className": "数据报告",
  "nodeId": 5190,
  "nodePid": 0,
  "nodeUrl": "/dataReportList",
  "imgName": 'snippets',
  "subNodeList": [{
    "className": "基础数据",
    "nodeId": 6420,
    "nodePid": 5190,
    "nodeUrl": "/dataReport/dataReportList",
    "subNodeList": [],
    "title": "客户列表"
  }, {
    "className": "异常数据",
    "nodeId": 6421,
    "nodePid": '5190',
    "nodeUrl": "/dataReport/abnormalFlowList",
    "subMenues": [{
      "className": "异常流量",
      "nodeId": 6426,
      "nodePid": 6421,
      "nodeUrl": "/dataReport/abnormalFlowList",
      "subNodeList": [],
      "title": "客户列表"
    }, {
      "className": "频次异常",
      "nodeId": 6422,
      "nodePid": 6421,
      "nodeUrl": "/dataReport/frequencyList",
      "subNodeList": [],
      "title": "客户列表"
    }, {
      "className": "行为异常",
      "nodeId": 6423,
      "nodePid": 6421,
      "nodeUrl": "/dataReport/behaviorList",
      "subNodeList": [],
      "title": "客户列表"
    }, {
      "className": "伪造用户",
      "nodeId": 6424,
      "nodePid": 6421,
      "nodeUrl": "/dataReport/fakeUserList",
      "subNodeList": [],
      "title": "客户列表"
    }, {
      "className": "浏览异常",
      "nodeId": 6425,
      "nodePid": 6421,
      "nodeUrl": "/dataReport/browserList",
      "subNodeList": [],
      "title": "客户列表"
    }],
    "title": "客户列表"
  }],
  "title": "客户"
}];
/* harmony default export */ __webpack_exports__["default"] = (menuTreeItemList);

/***/ }),

/***/ "./src/utils/fetch.tsx":
/*!*****************************!*\
  !*** ./src/utils/fetch.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetch; });
/* harmony import */ var antd_es_message_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/message/style/css */ "./node_modules/antd/es/message/style/css.js");
/* harmony import */ var antd_es_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/message */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import Promise from 'promise'

var Promise = __webpack_require__(/*! promise */ "./node_modules/promise/index.js");

Object(es6_promise__WEBPACK_IMPORTED_MODULE_2__["polyfill"])();
var status_map = {};
function fetch(url, options, bool) {
  if (status_map[url]) {// return Promise.reject('OVER_CLICK') // 处理连续点击的问题！
  }

  status_map[url] = true;
  return new Promise(function (resolve, reject) {
    var u = bool ? '' : '/rsp-web'; //兼容 不同接口的不同路径

    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(u + url, _objectSpread({
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      credentials: 'same-origin'
    }, options)).then(function (res) {
      return res.json();
    }).then(function (res) {
      status_map[url] = false;

      if (res.errorCode === 50000) {
        antd_es_message__WEBPACK_IMPORTED_MODULE_1__["default"].error('您没有操作权限！');

        setTimeout(function () {
          window.location = "http://a.yiche.com/static_common-portal/login.html?redirect=".concat(window.location.href); //https://a.yiche.com/static_common-portal/login.html
        }, 3000);
      } else if (res.errorCode === 403 || res.errorCode === 404) {
        antd_es_message__WEBPACK_IMPORTED_MODULE_1__["default"].error('您没有操作权限！');

        setTimeout(function () {
          window.location = "http://a.yiche.com/static_common-portal/login.html?redirect=".concat(window.location.href);
        }, 3000);
        reject(res.errorCode);
      } else if (res.errorCode !== 0) {
        antd_es_message__WEBPACK_IMPORTED_MODULE_1__["default"].error(res.errorMsg);

        reject(res.errorCode);
      } else {
        resolve(res);
      }
    })["catch"](function (e) {
      status_map[url] = false;

      antd_es_message__WEBPACK_IMPORTED_MODULE_1__["default"].error('服务端异常！');

      throw e;
    });
  });
} // import {encodeSearchParams} from "@utils/index";
// export function fetchPost(url, params, header) {
//     if (!header) {
//         header = {}
//     }
//     let formData = new FormData()
//     if (params) {
//         for (let key in params) {
//             // if ((typeof params[key]) === 'string') {
//             //     formData.append(key, encodeURI(params[key].toString()))
//             // } else {
//             formData.append(key, params[key])
//             // }
//         }
//     }
//     const request = fetch(url, {
//         method: 'POST',
//         body: formData,
//         mode: 'cors',
//         // credentials: 'include',
//         // cache: "force-cache",
//         headers: new Headers({
//             'Accept': 'application/json',
//             // "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
//             ...header
//         })
//     })
//     return fetchResult(request)
// }
// export function fetchGet(url, params, header) {
//   if (!header) {
//       header = {}
//   }
//   if (params) {
//       let paramsArray = [];
//       //拼接参数
//       Object.keys(params).forEach(key =>
//           paramsArray.push(key + '=' + encodeURI(encodeSearchParams(params, key).toString())))
//       if (paramsArray.length > 0) {
//           if (url.search(/\?/) === -1) {
//               url += '?' + paramsArray.join('&')
//           } else {
//               url += '&' + paramsArray.join('&')
//           }
//       }
//   }
//   const request = fetch(url, {
//       method: 'GET',
//       mode: 'cors',
//       // credentials: 'include',
//       // cache: "force-cache",
//       headers: new Headers({
//           'Accept': 'application/json',
//           "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
//           ...header
//       })
//   })
//   return fetchResult(request)
// }
// /**
//  * 处理网络请求结果
//  * @param request
//  * @returns {*}
//  */
// function fetchResult(request) {
//   try {
//       return request.then(response => {
//           if (response.status == 200) {
//               return response;
//           } else {
//               throw response
//           }
//       }).catch(error => {
//           if (error.json) {
//               return error.json()
//           } else {
//               return Promise.reject('请求异常')
//           }
//       }).then(result => {
//           if (result.status == 200) {
//               let resultJson = result.json();
//               return resultJson;
//           } else {
//               if (result.exceptionInfo) {
//                   if (result.exceptionInfo.length > 30) {
//                       throw '接口请求异常'
//                   } else {
//                       throw result.exceptionInfo
//                   }
//               } else {
//                   throw result
//               }
//           }
//       }).then(result => {
//           console.log(result)
//           if (result.success) {
//               return result
//             } else {
//                 if (result.exceptionInfo) {
//                     if (result.exceptionInfo.length > 30) {
//                         throw '接口请求异常'
//                     } else {
//                         throw result.exceptionInfo
//                     }
//                 } else if (result.message) {
//                     if (result.message.length > 30) {
//                         throw '接口请求异常'
//                     } else {
//                         throw result.message
//                     }
//                 } else {
//                     throw result
//                 }
//             }
//         })
//     } catch (e) {
//         return Promise.reject('请求异常')
//     }
// }

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0hvbWUvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltZy9oZWFkZXJfbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZC9pbmRleC5sZXNzP2M1OGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS9pbmRleC5sZXNzPzY0ODciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0hvbWUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9tZW51cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2ZldGNoLnRzeCJdLCJuYW1lcyI6WyJsYXp5IiwiUmVhY3QiLCJTdXNwZW5zZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsInVzZXJOYW1lIiwidXNlckluZm8iLCJzZXRVc2VySW5mbyIsImdldFVzZXJJbmZvIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwiZXJyb3JDb2RlIiwibmFtZSIsInJlc3VsdCIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwibG9naW5VcmwiLCJsb2NhdGlvbiIsImhyZWYiLCJoYW5kbGVMb2dvdXRDbGljayIsIm9yaWdpbiIsInJlcXVpcmUiLCJTdWJNZW51IiwiTmF2IiwibWVudXMiLCJtZW51ZXMiLCJzZXRNZW51ZXMiLCJwYXJzZSIsImdldEl0ZW0iLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsIm9wZW5LZXkiLCJzZXRPcGVuS2V5IiwiY3VycmVudEtleUNoYW5nZSIsImtleSIsImhhbmRsZUNsaWNrIiwiZSIsImN1cnJlbnRPcGVuS2V5IiwiY3VycmVudFNlbGVjdGVkS2V5IiwicHVzaCIsImtleVBhdGgiLCJuYXZDdXJyZW50IiwibmF2T3BlbktleSIsInJlbW92ZUl0ZW0iLCJzaG93TWVudSIsIm1hcCIsIm1lbnUiLCJpbmRleCIsInN1Yk5vZGVMaXN0Iiwibm9kZUlkIiwibm9kZVVybCIsImNsYXNzTmFtZSIsImltZ05hbWUiLCJzdWJNZW51IiwiaSIsInN1Yk1lbnVlcyIsIkhlYWRlciIsIkZvb3RlciIsIlNpZGVyIiwiQ29udGVudCIsIkhvbWUiLCJwcm9wcyIsInJvdXRlIiwicmVuZGVyUm91dGVzIiwicm91dGVzIiwibWVudVRyZWVJdGVtTGlzdCIsIlByb21pc2UiLCJwb2x5ZmlsbCIsInN0YXR1c19tYXAiLCJ1cmwiLCJvcHRpb25zIiwiYm9vbCIsInJlc29sdmUiLCJyZWplY3QiLCJ1Iiwib3JpZ2luRmV0Y2giLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJqc29uIiwiZXJyb3IiLCJzZXRUaW1lb3V0IiwiZXJyb3JNc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxvQkFBb0IsMkJBQTJCLGtCQUFrQixnQkFBZ0IscUNBQXFDLHVCQUF1QixnQkFBZ0IsbUNBQW1DLG9CQUFvQixHQUFHLHlCQUF5QixrQkFBa0Isd0JBQXdCLEdBQUcseUJBQXlCLGtCQUFrQix3QkFBd0Isb0JBQW9CLGdCQUFnQixHQUFHLDZCQUE2QixZQUFZLGlCQUFpQix3QkFBd0IsdUJBQXVCLHNCQUFzQixvQ0FBb0MsR0FBRyxrQ0FBa0Msc0JBQXNCLG9CQUFvQixnQkFBZ0IscUNBQXFDLEdBQUcseUJBQXlCLHVCQUF1QixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRywyQkFBMkIsb0JBQW9CLEdBQUcsaUNBQWlDLG1CQUFtQixHQUFHOzs7Ozs7Ozs7Ozs7QUNGbjVCLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyx1Q0FBdUMsMkJBQTJCLEdBQUc7Ozs7Ozs7Ozs7OztBQ0Y1RixpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7OztBQ0F4QyxjQUFjLG1CQUFPLENBQUMsK05BQTJHOztBQUVqSTtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx5SkFBOEU7O0FBRW5HO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0EsTUFBTSwrTkFBMkc7QUFDakg7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQywrTkFBMkc7O0FBRTVJO0FBQ0EseUJBQXlCLFFBQVM7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7SUFDUUEsSSxHQUFzQ0MsMEM7SUFBaENDLFEsR0FBZ0NELDhDO0lBQXRCRSxTLEdBQXNCRiwrQztJQUFaRyxRLEdBQVlILDhDOztBQUU5QyxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFLO0FBQUEsa0JBQ2dCRCxRQUFRLENBQUM7QUFBQ0UsWUFBUSxFQUFDO0FBQVYsR0FBRCxDQUR4QjtBQUFBO0FBQUEsTUFDVEMsUUFEUztBQUFBLE1BQ0NDLFdBREQ7O0FBRWhCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUs7QUFDdkI7QUFDQUMsZ0VBQUsscUJBQUwsQ0FBMkJDLElBQTNCLENBQWdDLFVBQUFDLEdBQUcsRUFBSTtBQUNyQyxVQUFJQSxHQUFHLENBQUNDLFNBQUosSUFBaUIsQ0FBckIsRUFBd0I7QUFDdEIsWUFBTUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLE1BQUosQ0FBV0QsSUFBeEI7QUFDQU4sbUJBQVcsbUJBQUtELFFBQUw7QUFBY0Qsa0JBQVEsRUFBQ1E7QUFBdkIsV0FBWDtBQUNBRSxjQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLENBQThCLE9BQTlCLEVBQXVDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsR0FBRyxDQUFDRyxNQUFuQixDQUF2QztBQUNELE9BSkQsTUFLSyxJQUFJSCxHQUFHLENBQUNTLElBQUosQ0FBU1IsU0FBVCxHQUFxQixLQUF6QixFQUErQjtBQUNoQyxZQUFJRCxHQUFHLENBQUNTLElBQUosQ0FBU0MsUUFBYixFQUF1QjtBQUNuQk4sZ0JBQU0sQ0FBQ08sUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUJaLEdBQUcsQ0FBQ1MsSUFBSixDQUFTQyxRQUFoQyxDQURtQixDQUVuQjtBQUNILFNBSEQsTUFJSyxDQUNEO0FBQ0g7QUFDSjtBQUNGLEtBZkQ7QUFnQkQsR0FsQkQ7O0FBbUJBLE1BQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBSTtBQUM1QmYsZ0VBQUssQ0FBQyxxQ0FBRCxFQUF1QyxFQUF2QyxFQUEwQyxJQUExQyxDQUFMLENBQXFEQyxJQUFyRCxDQUEwRCxVQUFBQyxHQUFHLEVBQUk7QUFDL0QsVUFBSUEsR0FBRyxDQUFDQyxTQUFKLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCRyxjQUFNLENBQUNPLFFBQVAsR0FBa0JQLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQkcsTUFBaEIsR0FBeUIsNENBQXpCLEdBQXdFVixNQUFNLENBQUNPLFFBQVAsQ0FBZ0JDLElBQTFHO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FORDs7QUFPQXJCLFdBQVMsQ0FBQyxZQUFJO0FBQ1pNLGVBQVc7QUFDWixHQUZRLEVBRVAsRUFGTyxDQUFUO0FBR0UsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssT0FBRyxFQUFFa0IsbUJBQU8sQ0FBQyxxRUFBRDtBQUFqQixJQURGLEVBRUU7QUFBTSxhQUFTLEVBQUM7QUFBaEIsc0NBRkYsRUFHRSw4REFIRixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsNkJBQ087QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FBd0JwQixRQUFRLENBQUNELFFBQWpDLENBRFAsQ0FERixFQUlFO0FBQ0UsYUFBUyxFQUFDLFFBRFo7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFJbUIsaUJBQWlCLEVBQXJCO0FBQUE7QUFGWCxLQUlFLGlGQUpGLENBSkYsQ0FORixDQURGO0FBb0JELENBbkRIOztBQXFEZXBCLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0N6REE7O0FBQ0E7QUFFQTtJQUVRRCxRLEdBQVlILDhDO0lBQ1oyQixPLHdEQUFBQSxPOztBQUVSLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQSxrQkFFWXpCLFFBQVEsQ0FBQzBCLG9EQUFELENBRnBCO0FBQUE7QUFBQSxNQUVUQyxNQUZTO0FBQUEsTUFFREMsU0FGQzs7QUFBQSxtQkFHYzVCLFFBQVEsQ0FBQ2UsSUFBSSxDQUFDYyxLQUFMLENBQVdqQixNQUFNLENBQUNDLGNBQVAsQ0FBc0JpQixPQUF0QixDQUE4QixZQUE5QixDQUFYLEtBQTJELENBQUMsTUFBRCxDQUE1RCxDQUh0QjtBQUFBO0FBQUEsTUFHVEMsT0FIUztBQUFBLE1BR0FDLFVBSEE7O0FBQUEsbUJBSWNoQyxRQUFRLENBQUNlLElBQUksQ0FBQ2MsS0FBTCxDQUFXakIsTUFBTSxDQUFDQyxjQUFQLENBQXNCaUIsT0FBdEIsQ0FBOEIsWUFBOUIsQ0FBWCxLQUEyRCxDQUFDLE1BQUQsQ0FBNUQsQ0FKdEI7QUFBQTtBQUFBLE1BSVRHLE9BSlM7QUFBQSxNQUlBQyxVQUpBOztBQUtoQixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEdBQUQsRUFBTyxDQUUvQixDQUZEOztBQUdBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBSztBQUN2QixRQUFJQyxjQUFjLEdBQUcsRUFBckI7QUFBQSxRQUF3QkMsa0JBQWtCLEdBQUcsRUFBN0M7QUFDQUQsa0JBQWMsQ0FBQ0UsSUFBZixDQUFvQkgsQ0FBQyxDQUFDSSxPQUFGLENBQVUsQ0FBVixDQUFwQjtBQUNBRixzQkFBa0IsQ0FBQ0MsSUFBbkIsQ0FBd0JILENBQUMsQ0FBQ0YsR0FBMUI7QUFDQUUsS0FBQyxDQUFDSSxPQUFGLENBQVUsQ0FBVixJQUFlSCxjQUFjLENBQUNFLElBQWYsQ0FBb0JILENBQUMsQ0FBQ0ksT0FBRixDQUFVLENBQVYsQ0FBcEIsQ0FBZixHQUFtRCxFQUFuRDtBQUNBOUIsVUFBTSxDQUFDQyxjQUFQLENBQXNCOEIsVUFBdEIsR0FBbUM1QixJQUFJLENBQUNDLFNBQUwsQ0FBZXdCLGtCQUFmLENBQW5DO0FBQ0E1QixVQUFNLENBQUNDLGNBQVAsQ0FBc0IrQixVQUF0QixHQUFtQzdCLElBQUksQ0FBQ0MsU0FBTCxDQUFldUIsY0FBZixDQUFuQztBQUNBM0IsVUFBTSxDQUFDQyxjQUFQLENBQXNCZ0MsVUFBdEIsQ0FBaUMsU0FBakM7QUFDQWIsY0FBVSxXQUFLUSxrQkFBTCxFQUFWO0FBQ0FOLGNBQVUsV0FBS0ssY0FBTCxFQUFWLENBVHVCLENBVXZCO0FBQ0QsR0FYRDs7QUFZQSxNQUFNTyxRQUFRLEdBQUduQixNQUFNLENBQUNvQixHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzNDLFdBQ0UsQ0FBQ0QsSUFBSSxDQUFDRSxXQUFOLEdBQ0EseUdBQU0sSUFBTjtBQUFXLFNBQUcsRUFBRUYsSUFBSSxDQUFDRztBQUFyQixPQUNFLG9EQUFDLHdEQUFEO0FBQVMscUJBQWUsRUFBQyxRQUF6QjtBQUFrQyxRQUFFLEVBQUVILElBQUksQ0FBQ0k7QUFBM0MsT0FBcURKLElBQUksQ0FBQ0ssU0FBMUQsQ0FERixDQURBLEdBSUcsb0RBQUMsT0FBRDtBQUNHLFNBQUcsRUFBRUwsSUFBSSxDQUFDRyxNQURiO0FBRUcsV0FBSyxFQUNILGtFQUNFO0FBQU0sWUFBSSxFQUFFSCxJQUFJLENBQUNNO0FBQWpCLFFBREYsRUFFRSxrRUFBT04sSUFBSSxDQUFDSyxTQUFaLENBRkY7QUFITCxPQVNHTCxJQUFJLENBQUNFLFdBQUwsQ0FBaUJILEdBQWpCLENBQXFCLFVBQUNRLE9BQUQsRUFBVUMsQ0FBVixFQUFnQjtBQUNuQyxhQUNFLENBQUNELE9BQU8sQ0FBQ0UsU0FBVCxHQUNBLHlHQUFNLElBQU47QUFBVyxXQUFHLEVBQUVGLE9BQU8sQ0FBQ0o7QUFBeEIsU0FDRSxvREFBQyx3REFBRDtBQUFTLHVCQUFlLEVBQUMsUUFBekI7QUFBa0MsVUFBRSxFQUFFSSxPQUFPLENBQUNIO0FBQTlDLFNBQXdERyxPQUFPLENBQUNGLFNBQWhFLENBREYsQ0FEQSxHQUlHLG9EQUFDLE9BQUQ7QUFBUyxXQUFHLEVBQUVFLE9BQU8sQ0FBQ0osTUFBdEI7QUFBOEIsYUFBSyxFQUFFSSxPQUFPLENBQUNGO0FBQTdDLFNBRUdFLE9BQU8sQ0FBQ0UsU0FBUixDQUFrQlYsR0FBbEIsQ0FBc0IsVUFBQ1EsT0FBRCxFQUFVQyxDQUFWLEVBQWdCO0FBQ3BDLGVBQ0UseUdBQU0sSUFBTjtBQUFXLGlCQUFPLEVBQUU7QUFBQSxtQkFBSXJCLGdCQUFnQixDQUFDb0IsT0FBTyxDQUFDSixNQUFULENBQXBCO0FBQUEsV0FBcEI7QUFBMEQsYUFBRyxFQUFFSSxPQUFPLENBQUNKO0FBQXZFLFdBQ0Usb0RBQUMsd0RBQUQ7QUFBUyx5QkFBZSxFQUFDLFFBQXpCO0FBQWtDLFlBQUUsRUFBRUksT0FBTyxDQUFDSDtBQUE5QyxXQUF3REcsT0FBTyxDQUFDRixTQUFoRSxDQURGLENBREY7QUFLRCxPQU5ELENBRkgsQ0FMTDtBQWlCRCxLQWxCRCxDQVRILENBTEw7QUFxQ0QsR0F0Q2dCLENBQWpCO0FBd0NBLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQ0UsU0FBSyxFQUFFLE1BRFQ7QUFFRSxXQUFPLEVBQUUsaUJBQUNmLENBQUQ7QUFBQSxhQUFLRCxXQUFXLENBQUNDLENBQUQsQ0FBaEI7QUFBQSxLQUZYO0FBR0UsbUJBQWUsRUFBRUwsT0FIbkI7QUFJRSxnQkFBWSxFQUFFRixPQUpoQjtBQUtFLFFBQUksRUFBQztBQUxQLEtBT0llLFFBUEosQ0FERixDQURGO0FBYUQsQ0F6RUQ7O0FBMEVlckIsa0VBQWYsRTs7Ozs7Ozs7Ozs7QUNuRkEsY0FBYyxtQkFBTyxDQUFDLDBOQUEyRzs7QUFFakk7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUpBQThFOztBQUVuRztBQUNBO0FBQ0E7O0FBRUEsSUFBSSxJQUFVO0FBQ2Q7QUFDQTtBQUNBLE1BQU0sME5BQTJHO0FBQ2pIO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsME5BQTJHOztBQUU1STtBQUNBLHlCQUF5QixRQUFTO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7SUFHUTdCLEksR0FBdUNDLDBDO0lBQWpDQyxRLEdBQWlDRCw4QztJQUF2QkcsUSxHQUF1QkgsOEM7SUFBYkUsUyxHQUFhRiwrQztJQUN2QzZELE0sMERBQUFBLE07SUFBUUMsTSwwREFBQUEsTTtJQUFRQyxLLDBEQUFBQSxLO0lBQU9DLE8sMERBQUFBLE87O0FBRS9CLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ2RDLEtBRGMsR0FDSkQsS0FESSxDQUNkQyxLQURjO0FBRXRCLFNBQ0U7QUFBUSxhQUFTLEVBQUM7QUFBbEIsS0FDRSxvREFBQyxNQUFELFFBQ0Usb0RBQUMsd0RBQUQsT0FERixDQURGLEVBSUUsa0hBQ0Usb0RBQUMsS0FBRCxRQUNFLG9EQUFDLHVEQUFELE9BREYsQ0FERixFQUlFLG9EQUFDLE9BQUQsUUFDSUMsd0VBQVksQ0FBQ0QsS0FBSyxDQUFDRSxNQUFQLENBRGhCLENBSkYsQ0FKRixDQURGLENBY0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkY7QUE0QkQsQ0E5QkQ7O0FBK0JlSixtRUFBZixFOzs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQSxJQUFNSyxnQkFBZ0IsR0FBRyxDQUN2QjtBQUNJLGVBQWEsSUFEakI7QUFFSSxZQUFVLElBRmQ7QUFHSSxhQUFXLENBSGY7QUFJSSxhQUFXLGtCQUpmO0FBS0ksYUFBVSxNQUxkO0FBTUksaUJBQWUsQ0FDWDtBQUNJLGlCQUFhLE1BRGpCO0FBRUksY0FBVSxJQUZkO0FBR0ksZUFBVyxJQUhmO0FBSUksZUFBVyxrQkFKZjtBQUtJLG1CQUFlLEVBTG5CO0FBTUksYUFBUztBQU5iLEdBRFcsQ0FObkI7QUFnQkksV0FBUztBQWhCYixDQUR1QixFQW1CdkI7QUFDSSxlQUFhLE1BRGpCO0FBRUksWUFBVSxJQUZkO0FBR0ksYUFBVyxDQUhmO0FBSUksYUFBVyxpQkFKZjtBQUtJLGFBQVUsVUFMZDtBQU1JLGlCQUFlLENBQ1g7QUFDSSxpQkFBYSxNQURqQjtBQUVJLGNBQVUsSUFGZDtBQUdJLGVBQVcsSUFIZjtBQUlJLGVBQVcsNEJBSmY7QUFLSSxtQkFBZSxFQUxuQjtBQU1JLGFBQVM7QUFOYixHQURXLEVBU1g7QUFDRSxpQkFBYSxNQURmO0FBRUUsY0FBVSxJQUZaO0FBR0UsZUFBVyxNQUhiO0FBSUUsZUFBVyw4QkFKYjtBQUtFLGlCQUFhLENBQ1g7QUFDRSxtQkFBYSxNQURmO0FBRUUsZ0JBQVUsSUFGWjtBQUdFLGlCQUFXLElBSGI7QUFJRSxpQkFBVyw4QkFKYjtBQUtFLHFCQUFlLEVBTGpCO0FBTUUsZUFBUztBQU5YLEtBRFcsRUFTWDtBQUNFLG1CQUFhLE1BRGY7QUFFRSxnQkFBVSxJQUZaO0FBR0UsaUJBQVcsSUFIYjtBQUlFLGlCQUFXLDJCQUpiO0FBS0UscUJBQWUsRUFMakI7QUFNRSxlQUFTO0FBTlgsS0FUVyxFQWlCWDtBQUNFLG1CQUFhLE1BRGY7QUFFRSxnQkFBVSxJQUZaO0FBR0UsaUJBQVcsSUFIYjtBQUlFLGlCQUFXLDBCQUpiO0FBS0UscUJBQWUsRUFMakI7QUFNRSxlQUFTO0FBTlgsS0FqQlcsRUF5Qlg7QUFDRSxtQkFBYSxNQURmO0FBRUUsZ0JBQVUsSUFGWjtBQUdFLGlCQUFXLElBSGI7QUFJRSxpQkFBVywwQkFKYjtBQUtFLHFCQUFlLEVBTGpCO0FBTUUsZUFBUztBQU5YLEtBekJXLEVBaUNYO0FBQ0UsbUJBQWEsTUFEZjtBQUVFLGdCQUFVLElBRlo7QUFHRSxpQkFBVyxJQUhiO0FBSUUsaUJBQVcseUJBSmI7QUFLRSxxQkFBZSxFQUxqQjtBQU1FLGVBQVM7QUFOWCxLQWpDVyxDQUxmO0FBK0NFLGFBQVM7QUEvQ1gsR0FUVyxDQU5uQjtBQWlFSSxXQUFTO0FBakViLENBbkJ1QixDQUF6QjtBQXdGZUEsK0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7Q0FFQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUc3QyxtQkFBTyxDQUFDLGdEQUFELENBQXZCOztBQUVBOEMsNERBQVE7QUFFUixJQUFNQyxVQUFVLEdBQUcsRUFBbkI7QUFFZSxTQUFTaEUsS0FBVCxDQUFlaUUsR0FBZixFQUFvQkMsT0FBcEIsRUFBNkJDLElBQTdCLEVBQW9DO0FBQ2pELE1BQUlILFVBQVUsQ0FBQ0MsR0FBRCxDQUFkLEVBQXFCLENBQ25CO0FBQ0Q7O0FBQ0RELFlBQVUsQ0FBQ0MsR0FBRCxDQUFWLEdBQWtCLElBQWxCO0FBQ0EsU0FBTyxJQUFJSCxPQUFKLENBQVksVUFBQ00sT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLFFBQUlDLENBQUMsR0FBR0gsSUFBSSxHQUFHLEVBQUgsR0FBUSxVQUFwQixDQURzQyxDQUNKOztBQUNsQ0ksMkRBQVcsQ0FBRUQsQ0FBQyxHQUFHTCxHQUFOO0FBQ1RPLGFBQU8sRUFBRTtBQUNQLHdCQUFnQixrQkFEVDtBQUVQLDRCQUFvQjtBQUZiLE9BREE7QUFLVEMsaUJBQVcsRUFBRTtBQUxKLE9BTU5QLE9BTk0sRUFBWCxDQVFHakUsSUFSSCxDQVFRLFVBQUNDLEdBQUQsRUFBUztBQUNmLGFBQU9BLEdBQUcsQ0FBQ3dFLElBQUosRUFBUDtBQUNELEtBVkQsRUFVR3pFLElBVkgsQ0FVUSxVQUFDQyxHQUFELEVBQVM7QUFDZjhELGdCQUFVLENBQUNDLEdBQUQsQ0FBVixHQUFrQixLQUFsQjs7QUFDQSxVQUFJL0QsR0FBRyxDQUFDQyxTQUFKLEtBQWtCLEtBQXRCLEVBQTZCO0FBQzNCLGdFQUFRd0UsS0FBUixDQUFjLFVBQWQ7O0FBQ0FDLGtCQUFVLENBQUMsWUFBSTtBQUNidEUsZ0JBQU0sQ0FBQ08sUUFBUCx5RUFBaUZQLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQkMsSUFBakcsRUFEYSxDQUMyRjtBQUN6RyxTQUZTLEVBRVIsSUFGUSxDQUFWO0FBSUQsT0FORCxNQU1PLElBQUlaLEdBQUcsQ0FBQ0MsU0FBSixLQUFrQixHQUFsQixJQUF5QkQsR0FBRyxDQUFDQyxTQUFKLEtBQWtCLEdBQS9DLEVBQW9EO0FBQ3pELGdFQUFRd0UsS0FBUixDQUFjLFVBQWQ7O0FBQ0FDLGtCQUFVLENBQUMsWUFBSTtBQUNidEUsZ0JBQU0sQ0FBQ08sUUFBUCx5RUFBaUZQLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQkMsSUFBakc7QUFDRCxTQUZTLEVBRVIsSUFGUSxDQUFWO0FBSUF1RCxjQUFNLENBQUNuRSxHQUFHLENBQUNDLFNBQUwsQ0FBTjtBQUNELE9BUE0sTUFPQSxJQUFJRCxHQUFHLENBQUNDLFNBQUosS0FBa0IsQ0FBdEIsRUFBeUI7QUFDOUIsZ0VBQVF3RSxLQUFSLENBQWN6RSxHQUFHLENBQUMyRSxRQUFsQjs7QUFDQVIsY0FBTSxDQUFDbkUsR0FBRyxDQUFDQyxTQUFMLENBQU47QUFDRCxPQUhNLE1BR0E7QUFDTGlFLGVBQU8sQ0FBQ2xFLEdBQUQsQ0FBUDtBQUNEO0FBQ0YsS0EvQkQsV0ErQlMsVUFBQzhCLENBQUQsRUFBTztBQUNkZ0MsZ0JBQVUsQ0FBQ0MsR0FBRCxDQUFWLEdBQWtCLEtBQWxCOztBQUNBLDhEQUFRVSxLQUFSLENBQWMsUUFBZDs7QUFDQSxZQUFNM0MsQ0FBTjtBQUNELEtBbkNEO0FBb0NELEdBdENNLENBQVA7QUF1Q0QsQyxDQUVEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSSIsImZpbGUiOiJwdWJsaWMvanMvMS5kMzUzZGNkOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlYWQtY29tcG9uZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAzMHB4O1xcbn1cXG4uaGVhZC1jb21wb25lbnQgLmxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkLWNvbXBvbmVudCAubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG4uaGVhZC1jb21wb25lbnQgLmxvZ28gaW1nIHtcXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDIycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDhkOGQ4O1xcbn1cXG4uaGVhZC1jb21wb25lbnQgLmxvZ28gLmxvZ190aXQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWljcm9zb2Z0IFlhSGVpXFxcIjtcXG59XFxuLmhlYWQtY29tcG9uZW50IC51c2VyIHtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuLmhlYWQtY29tcG9uZW50IC5uYW1lIHtcXG4gIGNvbG9yOiAjMTA4ZWU5O1xcbn1cXG4uaGVhZC1jb21wb25lbnQgLmxvZ291dCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oZWFkLWNvbXBvbmVudCAubG9nb3V0OmhvdmVyIHtcXG4gIGNvbG9yOiAjMTA4ZWU5O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucHJpbWFyeS1sYXlvdXQgLmFudC1sYXlvdXQtaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MTk3ODQ5NzA5ZGUxZmM4Yjg4NjRhYTE2ZGVlZmEzYi5wbmdcIjsiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgXG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufSIsImltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnQHV0aWxzL2ZldGNoJztcbmNvbnN0IHsgbGF6eSwgU3VzcGVuc2UgLHVzZUVmZmVjdCx1c2VTdGF0ZX0gPSBSZWFjdDtcblxuY29uc3QgSGVhZCA9ICgpID0+e1xuICBjb25zdCBbdXNlckluZm8sIHNldFVzZXJJbmZvXSA9IHVzZVN0YXRlKHt1c2VyTmFtZTonJ30pO1xuICBjb25zdCBnZXRVc2VySW5mbyA9ICgpPT4ge1xuICAgIC8vIGxldCB0aW1lc3RhbXAgPSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpO1xuICAgIGZldGNoKGAvcmVwb3J0L3VzZXIvaW5mb2ApLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmIChyZXMuZXJyb3JDb2RlID09IDApIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHJlcy5yZXN1bHQubmFtZTtcbiAgICAgICAgc2V0VXNlckluZm8oey4uLnVzZXJJbmZvLHVzZXJOYW1lOm5hbWV9KTtcbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xvZ2luJywgSlNPTi5zdHJpbmdpZnkocmVzLnJlc3VsdCkpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocmVzLmRhdGEuZXJyb3JDb2RlID0gNTAwMDApe1xuICAgICAgICAgIGlmIChyZXMuZGF0YS5sb2dpblVybCkge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5kYXRhLmxvZ2luVXJsO1xuICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5kYXRhLmxvZ2luVXJsKyc/cmVkaXJlY3Q9aHR0cDovL2xvY2FsaG9zdC1pc3AueWljaGUuY29tL2lzcC1zdGF0aWMvIy9pbmRleC9ob21lJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL2EueWljaGUuY29tL3N0YXRpY19jb21tb24tcG9ydGFsL2xvZ2luLmh0bWw/cmVkaXJlY3Q9aHR0cDovL2Rldi1pc3AueWljaGUuY29tOjgwODAvIy9pbmRleC9ob21lXCI7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGhhbmRsZUxvZ291dENsaWNrID0gKCk9PntcbiAgICBmZXRjaChcIi9jb21tb24tcG9ydGFsL2NvbW1vbi9wb3J0YWwvbG9nb3V0XCIse30sdHJ1ZSkudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKHJlcy5lcnJvckNvZGUgPT09IDApIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiL3N0YXRpY19jb21tb24tcG9ydGFsL2xvZ2luLmh0bWw/cmVkaXJlY3Q9XCIgKyB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBnZXRVc2VySW5mbygpO1xuICB9LFtdKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWQtY29tcG9uZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCdAYXNzZXRzL2ltZy9oZWFkZXJfbG9nby5wbmcnKX0gLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dfdGl0XCI+5Y+N5L2c5byK57O757ufPC9zcGFuPlxuICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgICAg5qyi6L+O5oKoLCA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e3VzZXJJbmZvLnVzZXJOYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nb3V0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5oYW5kbGVMb2dvdXRDbGljaygpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPumAgOWHujwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgXG5leHBvcnQgZGVmYXVsdCBIZWFkOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IFwiLi9pbmRleC5sZXNzXCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IE1lbnUsSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IG1lbnVzIGZyb20gJ0BwYWdlcy9tZW51cyc7XG5cbmNvbnN0IHsgdXNlU3RhdGV9ID0gUmVhY3Q7XG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgXG4gIGNvbnN0IFttZW51ZXMsIHNldE1lbnVlc10gPSB1c2VTdGF0ZShtZW51cyk7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKEpTT04ucGFyc2Uod2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ25hdkN1cnJlbnQnKSkgfHwgWyc1MTc2J10pO1xuICBjb25zdCBbb3BlbktleSwgc2V0T3BlbktleV0gPSB1c2VTdGF0ZShKU09OLnBhcnNlKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCduYXZPcGVuS2V5JykpIHx8IFsnNTE2OSddKTtcbiAgY29uc3QgY3VycmVudEtleUNoYW5nZSA9IChrZXkpPT57XG4gICAgXG4gIH1cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSk9PntcbiAgICBsZXQgY3VycmVudE9wZW5LZXkgPSBbXSxjdXJyZW50U2VsZWN0ZWRLZXkgPSBbXTtcbiAgICBjdXJyZW50T3BlbktleS5wdXNoKGUua2V5UGF0aFsxXSk7XG4gICAgY3VycmVudFNlbGVjdGVkS2V5LnB1c2goZS5rZXkpO1xuICAgIGUua2V5UGF0aFsyXSA/IGN1cnJlbnRPcGVuS2V5LnB1c2goZS5rZXlQYXRoWzJdKSA6ICcnO1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5uYXZDdXJyZW50ID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudFNlbGVjdGVkS2V5KTtcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UubmF2T3BlbktleSA9IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRPcGVuS2V5KTtcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnaGFzRGF0ZScpO1xuICAgIHNldEN1cnJlbnQoWy4uLmN1cnJlbnRTZWxlY3RlZEtleV0pO1xuICAgIHNldE9wZW5LZXkoWy4uLmN1cnJlbnRPcGVuS2V5XSk7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG4gIGNvbnN0IHNob3dNZW51ID0gbWVudWVzLm1hcCgobWVudSwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgIW1lbnUuc3ViTm9kZUxpc3QgPyBcbiAgICAgIDxNZW51Lkl0ZW0ga2V5PXttZW51Lm5vZGVJZH0+XG4gICAgICAgIDxOYXZMaW5rIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiIHRvPXttZW51Lm5vZGVVcmx9PnttZW51LmNsYXNzTmFtZX08L05hdkxpbms+XG4gICAgICA8L01lbnUuSXRlbT5cbiAgICAgIDogKDxTdWJNZW51IFxuICAgICAgICAgICAga2V5PXttZW51Lm5vZGVJZH1cbiAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPEljb24gdHlwZT17bWVudS5pbWdOYW1lfSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPnttZW51LmNsYXNzTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIH0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgbWVudS5zdWJOb2RlTGlzdC5tYXAoKHN1Yk1lbnUsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAhc3ViTWVudS5zdWJNZW51ZXMgPyBcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17c3ViTWVudS5ub2RlSWR9PlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCIgdG89e3N1Yk1lbnUubm9kZVVybH0+e3N1Yk1lbnUuY2xhc3NOYW1lfTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA6ICg8U3ViTWVudSBrZXk9e3N1Yk1lbnUubm9kZUlkfSB0aXRsZT17c3ViTWVudS5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3ViTWVudS5zdWJNZW51ZXMubWFwKChzdWJNZW51LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9eygpPT5jdXJyZW50S2V5Q2hhbmdlKHN1Yk1lbnUubm9kZUlkKX0ga2V5PXtzdWJNZW51Lm5vZGVJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCIgdG89e3N1Yk1lbnUubm9kZVVybH0+e3N1Yk1lbnUuY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+KVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvU3ViTWVudT4pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICA8L1N1Yk1lbnU+KVxuICAgIClcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtbmF2XCI+IFxuICAgICAgPE1lbnVcbiAgICAgICAgdGhlbWU9e1wiZGFya1wifVxuICAgICAgICBvbkNsaWNrPXsoZSk9PmhhbmRsZUNsaWNrKGUpfVxuICAgICAgICBkZWZhdWx0T3BlbktleXM9e29wZW5LZXl9XG4gICAgICAgIHNlbGVjdGVkS2V5cz17Y3VycmVudH1cbiAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgID5cbiAgICAgICAgeyBzaG93TWVudSB9XG4gICAgICA8L01lbnU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBOYXY7IiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5sZXNzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2Fscykge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5sZXNzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IFxuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn0iLCJpbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1jb25maWdcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBOYXYgZnJvbSBcIkBjb21wb25lbnRzL05hdlwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIkBjb21wb25lbnRzL0hlYWRcIjtcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCB7IGxhenksIFN1c3BlbnNlICx1c2VTdGF0ZSwgdXNlRWZmZWN0fSA9IFJlYWN0O1xuY29uc3QgeyBIZWFkZXIsIEZvb3RlciwgU2lkZXIsIENvbnRlbnQgfSA9IExheW91dDtcblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJvdXRlIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInByaW1hcnktbGF5b3V0XCI+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8SGVhZC8+XG4gICAgICA8L0hlYWRlcj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxTaWRlcj5cbiAgICAgICAgICA8TmF2IC8+XG4gICAgICAgIDwvU2lkZXI+XG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgIHsgcmVuZGVyUm91dGVzKHJvdXRlLnJvdXRlcykgfVxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0xheW91dD5cbiAgICAvLyA8ZGl2PlxuICAgIC8vICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXItYm94XCI+XG4gICAgLy8gICAgIDxIZWFkLz5cbiAgICAvLyAgIDwvaGVhZGVyPlxuICAgIC8vICAgPG1haW4gY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgLy8gICAgICAgPE5hdiAvPlxuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgIC8vICAgICAgIHsgcmVuZGVyUm91dGVzKHJvdXRlLnJvdXRlcykgfVxuICAgIC8vICAgICA8L2Rpdj4gXG4gICAgLy8gICA8L21haW4+XG4gICAgLy8gPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImNvbnN0IG1lbnVUcmVlSXRlbUxpc3QgPSBbXG4gIHtcbiAgICAgIFwiY2xhc3NOYW1lXCI6IFwi6K6i5Y2VXCIsXG4gICAgICBcIm5vZGVJZFwiOiA1MTY5LFxuICAgICAgXCJub2RlUGlkXCI6IDAsXG4gICAgICBcIm5vZGVVcmxcIjogXCIvb3JkZXIvb3JkZXJMaXN0XCIsXG4gICAgICBcImltZ05hbWVcIjonY29weScsXG4gICAgICBcInN1Yk5vZGVMaXN0XCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwi6K6i5Y2V566h55CGXCIsXG4gICAgICAgICAgICAgIFwibm9kZUlkXCI6IDUxNzYsXG4gICAgICAgICAgICAgIFwibm9kZVBpZFwiOiA1MTY5LFxuICAgICAgICAgICAgICBcIm5vZGVVcmxcIjogXCIvb3JkZXIvb3JkZXJMaXN0XCIsXG4gICAgICAgICAgICAgIFwic3ViTm9kZUxpc3RcIjogW10sXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCLorqLljZXnrqHnkIZcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInRpdGxlXCI6IFwi6K6i5Y2VXCJcbiAgfSxcbiAge1xuICAgICAgXCJjbGFzc05hbWVcIjogXCLmlbDmja7miqXlkYpcIixcbiAgICAgIFwibm9kZUlkXCI6IDUxOTAsXG4gICAgICBcIm5vZGVQaWRcIjogMCxcbiAgICAgIFwibm9kZVVybFwiOiBcIi9kYXRhUmVwb3J0TGlzdFwiLFxuICAgICAgXCJpbWdOYW1lXCI6J3NuaXBwZXRzJyxcbiAgICAgIFwic3ViTm9kZUxpc3RcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCLln7rnoYDmlbDmja5cIixcbiAgICAgICAgICAgICAgXCJub2RlSWRcIjogNjQyMCxcbiAgICAgICAgICAgICAgXCJub2RlUGlkXCI6IDUxOTAsXG4gICAgICAgICAgICAgIFwibm9kZVVybFwiOiBcIi9kYXRhUmVwb3J0L2RhdGFSZXBvcnRMaXN0XCIsXG4gICAgICAgICAgICAgIFwic3ViTm9kZUxpc3RcIjogW10sXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCLlrqLmiLfliJfooahcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCLlvILluLjmlbDmja5cIixcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IDY0MjEsXG4gICAgICAgICAgICBcIm5vZGVQaWRcIjogJzUxOTAnLFxuICAgICAgICAgICAgXCJub2RlVXJsXCI6IFwiL2RhdGFSZXBvcnQvYWJub3JtYWxGbG93TGlzdFwiLFxuICAgICAgICAgICAgXCJzdWJNZW51ZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCLlvILluLjmtYHph49cIixcbiAgICAgICAgICAgICAgICBcIm5vZGVJZFwiOiA2NDI2LFxuICAgICAgICAgICAgICAgIFwibm9kZVBpZFwiOiA2NDIxLFxuICAgICAgICAgICAgICAgIFwibm9kZVVybFwiOiBcIi9kYXRhUmVwb3J0L2Fibm9ybWFsRmxvd0xpc3RcIixcbiAgICAgICAgICAgICAgICBcInN1Yk5vZGVMaXN0XCI6IFtdLFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCLlrqLmiLfliJfooahcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCLpopHmrKHlvILluLhcIixcbiAgICAgICAgICAgICAgICBcIm5vZGVJZFwiOiA2NDIyLFxuICAgICAgICAgICAgICAgIFwibm9kZVBpZFwiOiA2NDIxLFxuICAgICAgICAgICAgICAgIFwibm9kZVVybFwiOiBcIi9kYXRhUmVwb3J0L2ZyZXF1ZW5jeUxpc3RcIixcbiAgICAgICAgICAgICAgICBcInN1Yk5vZGVMaXN0XCI6IFtdLFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCLlrqLmiLfliJfooahcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCLooYzkuLrlvILluLhcIixcbiAgICAgICAgICAgICAgICBcIm5vZGVJZFwiOiA2NDIzLFxuICAgICAgICAgICAgICAgIFwibm9kZVBpZFwiOiA2NDIxLFxuICAgICAgICAgICAgICAgIFwibm9kZVVybFwiOiBcIi9kYXRhUmVwb3J0L2JlaGF2aW9yTGlzdFwiLFxuICAgICAgICAgICAgICAgIFwic3ViTm9kZUxpc3RcIjogW10sXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuWuouaIt+WIl+ihqFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcIuS8qumAoOeUqOaIt1wiLFxuICAgICAgICAgICAgICAgIFwibm9kZUlkXCI6IDY0MjQsXG4gICAgICAgICAgICAgICAgXCJub2RlUGlkXCI6IDY0MjEsXG4gICAgICAgICAgICAgICAgXCJub2RlVXJsXCI6IFwiL2RhdGFSZXBvcnQvZmFrZVVzZXJMaXN0XCIsXG4gICAgICAgICAgICAgICAgXCJzdWJOb2RlTGlzdFwiOiBbXSxcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwi5a6i5oi35YiX6KGoXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwi5rWP6KeI5byC5bi4XCIsXG4gICAgICAgICAgICAgICAgXCJub2RlSWRcIjogNjQyNSxcbiAgICAgICAgICAgICAgICBcIm5vZGVQaWRcIjogNjQyMSxcbiAgICAgICAgICAgICAgICBcIm5vZGVVcmxcIjogXCIvZGF0YVJlcG9ydC9icm93c2VyTGlzdFwiLFxuICAgICAgICAgICAgICAgIFwic3ViTm9kZUxpc3RcIjogW10sXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuWuouaIt+WIl+ihqFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi5a6i5oi35YiX6KGoXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ0aXRsZVwiOiBcIuWuouaIt1wiXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVUcmVlSXRlbUxpc3Q7IiwiaW1wb3J0IHtwb2x5ZmlsbH0gZnJvbSAnZXM2LXByb21pc2UnO1xuaW1wb3J0IG9yaWdpbkZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuLy8gaW1wb3J0IFByb21pc2UgZnJvbSAncHJvbWlzZSdcbmNvbnN0IFByb21pc2UgPSByZXF1aXJlKCdwcm9taXNlJyk7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCdcbnBvbHlmaWxsKClcblxuY29uc3Qgc3RhdHVzX21hcCA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZldGNoKHVybCwgb3B0aW9ucz8sYm9vbD8pIHtcbiAgaWYgKHN0YXR1c19tYXBbdXJsXSkge1xuICAgIC8vIHJldHVybiBQcm9taXNlLnJlamVjdCgnT1ZFUl9DTElDSycpIC8vIOWkhOeQhui/nue7reeCueWHu+eahOmXrumimO+8gVxuICB9XG4gIHN0YXR1c19tYXBbdXJsXSA9IHRydWU7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IHUgPSBib29sID8gJycgOiAnL3JzcC13ZWInOyAgIC8v5YW85a65IOS4jeWQjOaOpeWPo+eahOS4jeWQjOi3r+W+hFxuICAgIG9yaWdpbkZldGNoKCB1ICsgdXJsLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgIH0sXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAvLyBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHN0YXR1c19tYXBbdXJsXSA9IGZhbHNlXG4gICAgICBpZiAocmVzLmVycm9yQ29kZSA9PT0gNTAwMDApIHtcbiAgICAgICAgbWVzc2FnZS5lcnJvcign5oKo5rKh5pyJ5pON5L2c5p2D6ZmQ77yBJylcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGBodHRwOi8vYS55aWNoZS5jb20vc3RhdGljX2NvbW1vbi1wb3J0YWwvbG9naW4uaHRtbD9yZWRpcmVjdD0ke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWAgLy9odHRwczovL2EueWljaGUuY29tL3N0YXRpY19jb21tb24tcG9ydGFsL2xvZ2luLmh0bWxcbiAgICAgICAgfSwzMDAwKVxuICAgICAgICBcbiAgICAgIH0gZWxzZSBpZiAocmVzLmVycm9yQ29kZSA9PT0gNDAzIHx8IHJlcy5lcnJvckNvZGUgPT09IDQwNCkge1xuICAgICAgICBtZXNzYWdlLmVycm9yKCfmgqjmsqHmnInmk43kvZzmnYPpmZDvvIEnKVxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gYGh0dHA6Ly9hLnlpY2hlLmNvbS9zdGF0aWNfY29tbW9uLXBvcnRhbC9sb2dpbi5odG1sP3JlZGlyZWN0PSR7d2luZG93LmxvY2F0aW9uLmhyZWZ9YDtcbiAgICAgICAgfSwzMDAwKVxuICAgICAgICBcbiAgICAgICAgcmVqZWN0KHJlcy5lcnJvckNvZGUpXG4gICAgICB9IGVsc2UgaWYgKHJlcy5lcnJvckNvZGUgIT09IDApIHtcbiAgICAgICAgbWVzc2FnZS5lcnJvcihyZXMuZXJyb3JNc2cpXG4gICAgICAgIHJlamVjdChyZXMuZXJyb3JDb2RlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIHN0YXR1c19tYXBbdXJsXSA9IGZhbHNlXG4gICAgICBtZXNzYWdlLmVycm9yKCfmnI3liqHnq6/lvILluLjvvIEnKVxuICAgICAgdGhyb3cgZVxuICAgIH0pXG4gIH0pXG59XG5cbi8vIGltcG9ydCB7ZW5jb2RlU2VhcmNoUGFyYW1zfSBmcm9tIFwiQHV0aWxzL2luZGV4XCI7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvc3QodXJsLCBwYXJhbXMsIGhlYWRlcikge1xuLy8gICAgIGlmICghaGVhZGVyKSB7XG4vLyAgICAgICAgIGhlYWRlciA9IHt9XG4vLyAgICAgfVxuXG4vLyAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbi8vICAgICBpZiAocGFyYW1zKSB7XG4vLyAgICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbi8vICAgICAgICAgICAgIC8vIGlmICgodHlwZW9mIHBhcmFtc1trZXldKSA9PT0gJ3N0cmluZycpIHtcbi8vICAgICAgICAgICAgIC8vICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBlbmNvZGVVUkkocGFyYW1zW2tleV0udG9TdHJpbmcoKSkpXG4vLyAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgcGFyYW1zW2tleV0pXG4vLyAgICAgICAgICAgICAvLyB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICBjb25zdCByZXF1ZXN0ID0gZmV0Y2godXJsLCB7XG4vLyAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuLy8gICAgICAgICBib2R5OiBmb3JtRGF0YSxcbi8vICAgICAgICAgbW9kZTogJ2NvcnMnLFxuLy8gICAgICAgICAvLyBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuLy8gICAgICAgICAvLyBjYWNoZTogXCJmb3JjZS1jYWNoZVwiLFxuLy8gICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4vLyAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLThcIixcbi8vICAgICAgICAgICAgIC4uLmhlYWRlclxuLy8gICAgICAgICB9KVxuLy8gICAgIH0pXG5cbi8vICAgICByZXR1cm4gZmV0Y2hSZXN1bHQocmVxdWVzdClcbi8vIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaEdldCh1cmwsIHBhcmFtcywgaGVhZGVyKSB7XG4vLyAgIGlmICghaGVhZGVyKSB7XG4vLyAgICAgICBoZWFkZXIgPSB7fVxuLy8gICB9XG5cbi8vICAgaWYgKHBhcmFtcykge1xuLy8gICAgICAgbGV0IHBhcmFtc0FycmF5ID0gW107XG4vLyAgICAgICAvL+aLvOaOpeWPguaVsFxuLy8gICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PlxuLy8gICAgICAgICAgIHBhcmFtc0FycmF5LnB1c2goa2V5ICsgJz0nICsgZW5jb2RlVVJJKGVuY29kZVNlYXJjaFBhcmFtcyhwYXJhbXMsIGtleSkudG9TdHJpbmcoKSkpKVxuXG4vLyAgICAgICBpZiAocGFyYW1zQXJyYXkubGVuZ3RoID4gMCkge1xuLy8gICAgICAgICAgIGlmICh1cmwuc2VhcmNoKC9cXD8vKSA9PT0gLTEpIHtcbi8vICAgICAgICAgICAgICAgdXJsICs9ICc/JyArIHBhcmFtc0FycmF5LmpvaW4oJyYnKVxuLy8gICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgIHVybCArPSAnJicgKyBwYXJhbXNBcnJheS5qb2luKCcmJylcbi8vICAgICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgIH1cblxuLy8gICBjb25zdCByZXF1ZXN0ID0gZmV0Y2godXJsLCB7XG4vLyAgICAgICBtZXRob2Q6ICdHRVQnLFxuLy8gICAgICAgbW9kZTogJ2NvcnMnLFxuLy8gICAgICAgLy8gY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbi8vICAgICAgIC8vIGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4vLyAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOFwiLFxuLy8gICAgICAgICAgIC4uLmhlYWRlclxuLy8gICAgICAgfSlcbi8vICAgfSlcblxuLy8gICByZXR1cm4gZmV0Y2hSZXN1bHQocmVxdWVzdClcbi8vIH1cbi8vIC8qKlxuLy8gICog5aSE55CG572R57uc6K+35rGC57uT5p6cXG4vLyAgKiBAcGFyYW0gcmVxdWVzdFxuLy8gICogQHJldHVybnMgeyp9XG4vLyAgKi9cbi8vIGZ1bmN0aW9uIGZldGNoUmVzdWx0KHJlcXVlc3QpIHtcbi8vICAgdHJ5IHtcbi8vICAgICAgIHJldHVybiByZXF1ZXN0LnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbi8vICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICB0aHJvdyByZXNwb25zZVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbi8vICAgICAgICAgICBpZiAoZXJyb3IuanNvbikge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gZXJyb3IuanNvbigpXG4vLyAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCfor7fmsYLlvILluLgnKVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbi8vICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAyMDApIHtcbi8vICAgICAgICAgICAgICAgbGV0IHJlc3VsdEpzb24gPSByZXN1bHQuanNvbigpO1xuLy8gICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0SnNvbjtcbi8vICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXhjZXB0aW9uSW5mbykge1xuLy8gICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5leGNlcHRpb25JbmZvLmxlbmd0aCA+IDMwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ+aOpeWPo+ivt+axguW8guW4uCdcbi8vICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzdWx0LmV4Y2VwdGlvbkluZm9cbi8vICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgIHRocm93IHJlc3VsdFxuLy8gICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbi8vICAgICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmV4Y2VwdGlvbkluZm8pIHtcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5leGNlcHRpb25JbmZvLmxlbmd0aCA+IDMwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAn5o6l5Y+j6K+35rGC5byC5bi4J1xuLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzdWx0LmV4Y2VwdGlvbkluZm9cbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0Lm1lc3NhZ2UpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5tZXNzYWdlLmxlbmd0aCA+IDMwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAn5o6l5Y+j6K+35rGC5byC5bi4J1xuLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzdWx0Lm1lc3NhZ2Vcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlc3VsdFxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSlcbi8vICAgICB9IGNhdGNoIChlKSB7XG4vLyAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgn6K+35rGC5byC5bi4Jylcbi8vICAgICB9XG5cbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=