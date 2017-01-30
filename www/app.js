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

	module.exports = function (mod) {
	  __webpack_require__(2)(mod);
	  __webpack_require__(3)(mod);
	  __webpack_require__(4)(mod);
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function (mod) {
	  mod
	    .run(function ($ionicPlatform, $window) {
	      $ionicPlatform.ready(function () {
	        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	        // for form inputs)
	        if (window.cordova && window.cordova.plugins.Keyboard) {
	          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	          cordova.plugins.Keyboard.disableScroll(true);
	
	        }
	        if ($window.StatusBar) {
	          // org.apache.cordova.statusbar required
	          StatusBar.styleDefault();
	        }
	      });
	    })
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function (mod) {
	  mod
	    .config(function ($stateProvider, $urlRouterProvider) {
	      $urlRouterProvider.otherwise('/app/playlists');
	    });
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (mod){
		__webpack_require__(5)(mod);
		__webpack_require__(8)(mod);
		__webpack_require__(10)(mod);
		__webpack_require__(12)(mod);
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (mod) {
	  mod
	    .config(function ($stateProvider) {
	      $stateProvider.state('app', {
	        url: '/app',
	        abstract: true,
	        template: __webpack_require__(6),
	        controller: 'HomeCtrl as vm'
	      });
	    })
	    .controller('HomeCtrl', function ($scope, $ionicModal, $timeout) {
	      console.log('web-pack built file');
	
	      $scope.loginData = {};
	
	      var modal = $ionicModal.fromTemplate(__webpack_require__(7), {
	        scope: $scope
	      });
	
	      $scope.modal = modal;
	
	      $scope.closeLogin = function () {
	        $scope.modal.hide();
	      };
	
	      $scope.login = function () {
	        $scope.modal.show();
	      };
	
	      $scope.doLogin = function () {
	        console.log('Doing login', $scope.loginData);
	
	        $timeout(function () {
	          $scope.closeLogin();
	        }, 1000);
	      };
	    });
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<ion-side-menus enable-menu-with-back-views=\"false\">\n  <ion-side-menu-content>\n    <ion-nav-bar class=\"bar-stable\">\n      <ion-nav-back-button>\n      </ion-nav-back-button>\n\n      <ion-nav-buttons side=\"left\">\n        <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\">\n        </button>\n      </ion-nav-buttons>\n    </ion-nav-bar>\n    <ion-nav-view name=\"menuContent\"></ion-nav-view>\n  </ion-side-menu-content>\n\n  <ion-side-menu side=\"left\">\n    <ion-header-bar class=\"bar-stable\">\n      <h1 class=\"title\">Left</h1>\n    </ion-header-bar>\n    <ion-content>\n      <ion-list>\n        <ion-item menu-close ng-click=\"login()\">\n          Login\n        </ion-item>\n        <ion-item menu-close href=\"#/app/search\">\n          Search\n        </ion-item>\n        <ion-item menu-close href=\"#/app/browse\">\n          Browse\n        </ion-item>\n        <ion-item menu-close href=\"#/app/playlists\">\n          Playlists\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-side-menu>\n</ion-side-menus>\n";

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n  <ion-header-bar>\n    <h1 class=\"title\">Login</h1>\n    <div class=\"buttons\">\n      <button class=\"button button-dark button-clear\" ng-click=\"closeLogin()\">\n        <i class=\"icon ion-close-round\"></i>\n      </button>\n    </div>\n  </ion-header-bar>\n  <ion-content>\n    <form ng-submit=\"doLogin()\">\n      <div class=\"list\">\n        <label class=\"item item-input\">\n          <span class=\"input-label\">Username</span>\n          <input type=\"text\" ng-model=\"loginData.username\">\n        </label>\n        <label class=\"item item-input\">\n          <span class=\"input-label\">Password</span>\n          <input type=\"password\" ng-model=\"loginData.password\">\n        </label>\n        <label class=\"item\">\n          <button class=\"button button-block button-positive\" type=\"submit\">Log in</button>\n        </label>\n      </div>\n    </form>\n  </ion-content>\n</ion-modal-view>\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (mod) {
	  mod
	    .config(function ($stateProvider) {
	      $stateProvider
	        .state('app.browse', {
	          url: '/browse',
	          views: {
	            'menuContent': {
	              template: __webpack_require__(9),
	              controller: 'BrowseCtrl as vm'
	            }
	          }
	        })
	    })
	    .controller('BrowseCtrl', function () {
	      console.log('web-pack built file');
	    });
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"Browse\">\n  <ion-content>\n    <h1>Browse</h1>\n  </ion-content>\n</ion-view>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (mod) {
	  mod
	    .config(function ($stateProvider) {
	      $stateProvider
	        .state('app.playlists', {
	          url: '/playlists',
	          views: {
	            'menuContent': {
	              template: __webpack_require__(11),
	              controller: 'PlaylistsCtrl as vm'
	            }
	          }
	        })
	    })
	    .controller('PlaylistsCtrl', function ($scope) {
	      $scope.playlists = [
	        {title: 'Reggae', id: 1},
	        {title: 'Chill', id: 2},
	        {title: 'Dubstep', id: 3},
	        {title: 'Indie', id: 4},
	        {title: 'Rap', id: 5},
	        {title: 'Cowbell', id: 6}
	      ];
	    });
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"Playlists\">\n  <ion-content>\n    <ion-list>\n      <ion-item ng-repeat=\"playlist in playlists\" href=\"#/app/playlists/{{playlist.id}}\">\n        {{playlist.title}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-view>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (mod) {
	  mod
	    .config(function ($stateProvider) {
	      $stateProvider
	        .state('app.search', {
	          url: '/search',
	          views: {
	            'menuContent': {
	              template: __webpack_require__(13),
	              controller: 'SearchCtrl as vm'
	            }
	          }
	        })
	    })
	    .controller('SearchCtrl', function () {
	      console.log('web-pack built file');
	    });
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"Search\">\n  <ion-content>\n    <h1>Search</h1>\n  </ion-content>\n</ion-view>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map