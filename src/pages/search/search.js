module.exports = function (mod) {
  mod
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.search', {
          url: '/search',
          views: {
            'menuContent': {
              template: require('./search.html'),
              controller: 'SearchCtrl as vm'
            }
          }
        })
    })
    .controller('SearchCtrl', function () {
      console.log('web-pack built file');
    });
};
