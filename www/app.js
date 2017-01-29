/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function (angular) {
	
	    var dependencies = [
	        "ionic"
	    ];
	
	    var modules = [
	        {package: __webpack_require__(1)}
	    ];
	
	    modules.forEach(function (mod, index) {
	        var modName = ("scenehound_" + index);
	        var ngMod = angular.module(modName, []);
	        mod.package(ngMod);
	        dependencies.push(modName);
	    });
	
	    angular.module("scenehound", dependencies);
	
	})(window.angular);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (mod){
		__webpack_require__(2)(mod);
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (mod) {
	  mod
	    .config(function ($stateProvider, $urlRouterProvider) {
	
	      $urlRouterProvider.otherwise('/home');
	
	      $stateProvider
	        .state('home', {
	          url: '/home',
	          template: __webpack_require__(3),
	          controller: 'HomeCtrl as vm'
	        })
	    })
	    .controller('HomeCtrl', function () {
	      console.log('web-pack built file');
	    });
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<ion-view>\n  <ion-nav-bar>\n    <ion-nav-title>Hello World</ion-nav-title>\n  </ion-nav-bar>\n\n\n  <ion-content>\n    <h1>Hello there <i class=\"icon ion-ionic\"></i></h1>\n  </ion-content>\n\n</ion-view>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map