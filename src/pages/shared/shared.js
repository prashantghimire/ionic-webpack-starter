module.exports = function (mod) {
  mod
    .config(function ($stateProvider) {
      $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        template: require('./shared.html'),
        controller: 'HomeCtrl as vm'
      });
    })
    .controller('HomeCtrl', function ($scope, $ionicModal, $timeout) {
      console.log('web-pack built file');

      $scope.loginData = {};

      var modal = $ionicModal.fromTemplate(require('./../login/login.html'), {
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
