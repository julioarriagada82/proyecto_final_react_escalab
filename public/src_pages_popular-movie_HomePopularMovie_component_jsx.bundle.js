(self["webpackChunkproyecto_react_app"] = self["webpackChunkproyecto_react_app"] || []).push([["src_pages_popular-movie_HomePopularMovie_component_jsx"],{

/***/ "./src/components/collection/collection-item/CollectionItem.component.jsx":
/*!********************************************************************************!*\
  !*** ./src/components/collection/collection-item/CollectionItem.component.jsx ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _movie_images_poster_Poster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../movie/images/poster/Poster.component */ "./src/components/movie/images/poster/Poster.component.jsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");






var CollectionItem = function CollectionItem(_ref) {
  var id = _ref.id,
      vote_average = _ref.vote_average,
      poster_path = _ref.poster_path,
      popularity = _ref.popularity,
      title = _ref.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__.default, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/movie/details/".concat(id),
    className: "card-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: "paper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_movie_images_poster_Poster_component__WEBPACK_IMPORTED_MODULE_1__.default, {
    poster_path: poster_path,
    title: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Votaci\xF3n: ", vote_average), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Popularidad: ", popularity)))));
};

/* harmony default export */ __webpack_exports__["default"] = (CollectionItem);

/***/ }),

/***/ "./src/components/collection/collection-list/CollectionList.component.jsx":
/*!********************************************************************************!*\
  !*** ./src/components/collection/collection-list/CollectionList.component.jsx ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _collection_item_CollectionItem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collection-item/CollectionItem.component */ "./src/components/collection/collection-item/CollectionItem.component.jsx");
var _excluded = ["id"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var CollectionList = function CollectionList(_ref) {
  var movies = _ref.movies;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__.default, {
    container: true,
    spacing: 3,
    justify: "center"
  }, movies.map(function (_ref2) {
    var id = _ref2.id,
        otherCollectionProps = _objectWithoutProperties(_ref2, _excluded);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_collection_item_CollectionItem_component__WEBPACK_IMPORTED_MODULE_1__.default, _extends({
      key: id
    }, otherCollectionProps, {
      id: id
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CollectionList);

/***/ }),

/***/ "./src/components/common/error-message/ErrorMessage.component.jsx":
/*!************************************************************************!*\
  !*** ./src/components/common/error-message/ErrorMessage.component.jsx ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");





var ErrorMessage = function ErrorMessage(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "paper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, text)));
};

ErrorMessage.displayName = "ErrorMessage";
/* harmony default export */ __webpack_exports__["default"] = (ErrorMessage);
ErrorMessage.propTypes = {
  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};

/***/ }),

/***/ "./src/components/common/genre-movie/GenreMovie.component.jsx":
/*!********************************************************************!*\
  !*** ./src/components/common/genre-movie/GenreMovie.component.jsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/ToggleButton */ "./node_modules/@material-ui/lab/esm/ToggleButton/ToggleButton.js");






var GenreMovie = function GenreMovie(_ref) {
  var getData = _ref.getData,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? function () {} : _ref$onSelect,
      selected = _ref.selected;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "paper"
  }, getData.map(function (movie) {
    var id = movie.id,
        name = movie.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_4__.default, {
      key: name,
      id: id,
      value: name,
      selected: id === selected ? true : false,
      onClick: function onClick() {
        return onSelect(id);
      }
    }, name);
  })));
};

GenreMovie.displayName = "GenreMovie";
/* harmony default export */ __webpack_exports__["default"] = (GenreMovie);
GenreMovie.propTypes = {
  onSelect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/***/ }),

/***/ "./src/components/movie/images/poster/Poster.component.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/movie/images/poster/Poster.component.jsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants/variables */ "./src/constants/variables.js");
/* harmony import */ var _assets_static_images_placeholder_poster_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/static/images/placeholder-poster.png */ "./src/assets/static/images/placeholder-poster.png");





var Poster = function Poster(_ref) {
  var poster_path = _ref.poster_path,
      title = _ref.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: poster_path ? "".concat(_constants_variables__WEBPACK_IMPORTED_MODULE_2__.PATH_IMAGE_w300).concat(poster_path) : _assets_static_images_placeholder_poster_png__WEBPACK_IMPORTED_MODULE_3__.default,
    alt: "poster of ".concat(title),
    width: "300px",
    height: "450px"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Poster);
Poster.propTypes = {
  poster_path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};

/***/ }),

/***/ "./src/constants/variables.js":
/*!************************************!*\
  !*** ./src/constants/variables.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PATH_IMAGE_w300": function() { return /* binding */ PATH_IMAGE_w300; },
/* harmony export */   "PATH_IMAGE_w500": function() { return /* binding */ PATH_IMAGE_w500; },
/* harmony export */   "USER": function() { return /* binding */ USER; },
/* harmony export */   "PASS": function() { return /* binding */ PASS; }
/* harmony export */ });
var PATH_IMAGE_w300 = 'http://image.tmdb.org/t/p/w300/';
var PATH_IMAGE_w500 = 'http://image.tmdb.org/t/p/w500/';
var USER = 'admin';
var PASS = '1234';

/***/ }),

/***/ "./src/pages/popular-movie/HomePopularMovie.component.jsx":
/*!****************************************************************!*\
  !*** ./src/pages/popular-movie/HomePopularMovie.component.jsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_MoviesContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/MoviesContext */ "./src/context/MoviesContext.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _components_common_genre_movie_GenreMovie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/genre-movie/GenreMovie.component */ "./src/components/common/genre-movie/GenreMovie.component.jsx");
/* harmony import */ var _components_common_error_message_ErrorMessage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/common/error-message/ErrorMessage.component */ "./src/components/common/error-message/ErrorMessage.component.jsx");
/* harmony import */ var _components_common_loader_Loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/loader/Loader.component */ "./src/components/common/loader/Loader.component.jsx");
/* harmony import */ var _components_collection_collection_list_CollectionList_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/collection/collection-list/CollectionList.component */ "./src/components/collection/collection-list/CollectionList.component.jsx");








var HomePopularMovie = function HomePopularMovie() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MoviesContext__WEBPACK_IMPORTED_MODULE_1__.MoviesContext),
      popularMovies = _useContext.popularMovies,
      genres = _useContext.genres,
      genreMovies = _useContext.genreMovies,
      getMovieByGenreId = _useContext.getMovieByGenreId,
      currentGenre = _useContext.currentGenre,
      errorMovies = _useContext.errorMovies,
      loadingMovies = _useContext.loadingMovies;

  var applyFilter = function applyFilter(genreId) {
    getMovieByGenreId(genreId);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
    container: true,
    spacing: 3,
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_genre_movie_GenreMovie_component__WEBPACK_IMPORTED_MODULE_2__.default, {
    getData: genres,
    onSelect: applyFilter,
    selected: currentGenre
  }))), loadingMovies ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_loader_Loader_component__WEBPACK_IMPORTED_MODULE_4__.default, null) : errorMovies ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_error_message_ErrorMessage_component__WEBPACK_IMPORTED_MODULE_3__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_collection_collection_list_CollectionList_component__WEBPACK_IMPORTED_MODULE_5__.default, {
    movies: genreMovies.length > 0 ? genreMovies : popularMovies
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePopularMovie);

/***/ }),

/***/ "./src/assets/static/images/placeholder-poster.png":
/*!*********************************************************!*\
  !*** ./src/assets/static/images/placeholder-poster.png ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8dc055c4e00779bbac7a4139ef3aa980.png");

/***/ })

}]);
//# sourceMappingURL=src_pages_popular-movie_HomePopularMovie_component_jsx.bundle.js.map