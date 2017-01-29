module.exports = function (mod) {
  mod
    .config(function ($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          template: require('./shared.html'),
          controller: 'HomeCtrl as vm'
        })
    })
    .controller('HomeCtrl', function () {
      console.log('web-pack built file');
    });
};
