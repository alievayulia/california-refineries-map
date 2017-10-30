require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {"name":"refinery-graphics","version":"1.0.12","license":"MIT","devDependencies":{"babel-cli":"^6.23.0","babel-core":"^6.23.1","babel-loader":"^7.0.0-beta.1","babel-preset-env":"^1.2.0","gulp":"^3.9.1","gulp-awspublish":"^3.3.0","gulp-changed":"^1.3.2","gulp-clean-css":"^3.0.3","gulp-csslint":"^1.0.0","gulp-jshint":"^2.0.1","gulp-less":"^3.1.0","gulp-rename":"^1.2.2","gulp-sourcemaps":"^1.6.0","gulp-uglify":"^2.0.0","jshint":"^2.9.3","jshint-stylish":"^1.0.2","merge-stream":"^1.0.0","vinyl-buffer":"^1.0.0","vinyl-source-stream":"^1.1.0","webpack-stream":"^3.2.0"},"dependencies":{"babel-preset-es2015":"^6.22.0","babel-preset-stage-2":"^6.22.0","body-parser":"^1.15.2","cookie-parser":"^1.4.3","d3-scale":"^1.0.6","es6-promise":"^4.0.5","express":"^4.14.0","file-loader":"^0.10.0","hogan-express":"^0.5.2","js-yaml":"^3.6.1","json-loader":"^0.5.4","leaflet":"^1.2.0","less-middleware":"^2.2.0","lodash":"^4.17.4","morgan":"^1.7.0","raw-loader":"^0.5.1","serve-favicon":"^2.3.0","source-map-support":"^0.4.14","topojson":"^3.0.2","vue":"^2.0.5","vue-router":"^2.0.1","vue-template-compiler":"^2.1.10","vue-template-compiler-loader":"^1.0.4","vuex":"^1.0.0","webpack":"^2.2.1","webpack-dev-middleware":"^1.10.0","webpack-merge":"^4.1.0","webpack-node-externals":"^1.5.4","whatwg-fetch":"^2.0.2"},"main":"./dist/app.js","scripts":{"start":"node ./dist/app.js","dev":"NODE_ENV=development ./node_modules/babel-cli/bin/babel-node.js src/app --presets es2015,stage-2"},"jshintConfig":{"esnext":true}}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(17);



var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.get('/example.json', function (req, res, next) {
    __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].example(function (err, example) {
        res.json({
            example: example
        });
    });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var pkg = __webpack_require__(0),
    webpack = __webpack_require__(2),
    merge = __webpack_require__(18),
    nodeExternals = __webpack_require__(19);

var env = 'production';

var common = {
    output: {
        filename: '[name].js',
        publicPath: '/',
        path: env !== 'development' ? __dirname + '/dist/' : __dirname + '/src/'
    },
    node: {
        __dirname: false
    },
    devtool: 'source-map',
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    module: {
        rules: [{
            test: /\.html$/,
            loader: 'vue-template-compiler'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                //presets: ['es2015'],

                // All of the plugins of babel-preset-es2015,
                // minus babel-plugin-transform-es2015-modules-commonjs
                plugins: ['transform-es2015-template-literals', 'transform-es2015-literals', 'transform-es2015-function-name', 'transform-es2015-arrow-functions', 'transform-es2015-block-scoped-functions', 'transform-es2015-classes', 'transform-es2015-object-super', 'transform-es2015-shorthand-properties', 'transform-es2015-computed-properties', 'transform-es2015-for-of', 'transform-es2015-sticky-regex', 'transform-es2015-unicode-regex', 'check-es2015-constants', 'transform-es2015-spread', 'transform-es2015-parameters', 'transform-es2015-destructuring', 'transform-es2015-block-scoping', 'transform-es2015-typeof-symbol', ['transform-regenerator', { async: false, asyncGenerators: false }]]
            }
        }]
    }
};

var webEntry = {
    embed: './src/script/embed.js'
};

webEntry[pkg.version + '/script'] = ['es6-promise/auto', './src/script/script.js'];

var definePlugin = new webpack.DefinePlugin({
    'PKG_VERSION': '\'' + pkg.version + '\'',
    'PKG_NAME': '\'' + pkg.name + '\'',
    'process.env.NODE_ENV': "'" + (env !== 'development' ? 'production' : env) + "'"
    // 'require.main': 'module'
});

var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    },
    sourceMap: true
});

var bannerPlugin = new webpack.BannerPlugin({
    banner: 'require("source-map-support").install();',
    raw: true,
    entryOnly: false
});

module.exports = (env !== 'development' ? ['node', 'web'] : ['web']).map(function (target) {
    if (target == 'node') {
        return merge(common, {
            target: target,
            entry: {
                app: './src/app.js'
            },
            externals: [nodeExternals()],
            plugins: [bannerPlugin, definePlugin]
        });
    }

    return merge(common, {
        target: target,
        entry: webEntry,
        plugins: [definePlugin, uglifyPlugin]
    });
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("hogan-express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("less-middleware");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_parser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_serve_favicon__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hogan_express__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hogan_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hogan_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_less_middleware__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_less_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_less_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_morgan__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_path__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__package_json__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__package_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_webpack__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_webpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_webpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__webpack_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__webpack_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__webpack_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_webpack_dev_middleware__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_webpack_dev_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_webpack_dev_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_example__ = __webpack_require__(3);














var env = 'production';

var app = __WEBPACK_IMPORTED_MODULE_2_express___default()();

// view engine setup
app.engine('html', __WEBPACK_IMPORTED_MODULE_5_hogan_express___default.a);
// app.enable('view cache');
app.set('view engine', 'html');
app.set('views', __dirname + '/view');

// misc. express middlware
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(__WEBPACK_IMPORTED_MODULE_7_morgan___default()('dev'));
app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.urlencoded({
    extended: false
}));
app.use(__WEBPACK_IMPORTED_MODULE_1_cookie_parser___default()());

if (env === 'development') {
    // style.less middleware
    app.use('/' + __WEBPACK_IMPORTED_MODULE_9__package_json___default.a.version, __WEBPACK_IMPORTED_MODULE_6_less_middleware___default()(__WEBPACK_IMPORTED_MODULE_8_path___default.a.join(__dirname, 'style')));
    app.use('/' + __WEBPACK_IMPORTED_MODULE_9__package_json___default.a.version, __WEBPACK_IMPORTED_MODULE_2_express___default.a.static(__WEBPACK_IMPORTED_MODULE_8_path___default.a.join(__dirname, 'style')));

    // app.use('/' + pkg.version + '/fonts', express.static(path.join(__dirname, '..', 'node_modules', 'font-awesome', 'fonts')));

    // serves up common scripts
    app.use('/apps/common/', __WEBPACK_IMPORTED_MODULE_2_express___default.a.static(__WEBPACK_IMPORTED_MODULE_8_path___default.a.join(__dirname, 'script', 'lib', 'common')));
}

app.get(['/', '/index.html', '/embed.html'], function (req, res) {
    res.render('index', {
        pkg: __WEBPACK_IMPORTED_MODULE_9__package_json___default.a
    });
});

app.get(['/preview', '/preview.html'], function (req, res) {
    res.render('preview', {
        pkg: __WEBPACK_IMPORTED_MODULE_9__package_json___default.a
    });
});



app.use(__WEBPACK_IMPORTED_MODULE_13__routes_example__["a" /* default */]);
app.use('/' + __WEBPACK_IMPORTED_MODULE_9__package_json___default.a.version, __WEBPACK_IMPORTED_MODULE_13__routes_example__["a" /* default */]);

if (env === 'development') {
    // webpack middlware
    var compiler = __WEBPACK_IMPORTED_MODULE_10_webpack___default()(__WEBPACK_IMPORTED_MODULE_11__webpack_config___default.a);

    app.use(['/', '/' + __WEBPACK_IMPORTED_MODULE_9__package_json___default.a.version], __WEBPACK_IMPORTED_MODULE_12_webpack_dev_middleware___default()(compiler, {
        noInfo: true
    }));

    app.use('/' + __WEBPACK_IMPORTED_MODULE_9__package_json___default.a.version, __WEBPACK_IMPORTED_MODULE_2_express___default.a.static(__WEBPACK_IMPORTED_MODULE_8_path___default.a.join(__dirname)));
}

// http://stackoverflow.com/a/33633199
app.use('/', function (req, res, next) {
    if (req.url.match(/^\/app/)) {
        return res.status(403).end('403 Forbidden');
    }

    next();
});

app.use('/', __WEBPACK_IMPORTED_MODULE_2_express___default.a.static(__WEBPACK_IMPORTED_MODULE_8_path___default.a.join(__dirname)));

if (!module.parent) {
    app.listen(process.env.PORT || 5000);
}

/* harmony default export */ __webpack_exports__["default"] = (app);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)(module)))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = (function (cb) {
    cb(null, {
        example: true
    });
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__example__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = ({
	example: __WEBPACK_IMPORTED_MODULE_0__example__["a" /* default */]
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("webpack-merge");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map