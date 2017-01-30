module.exports = function (mod) {
  mod
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.browse', {
          url: '/browse',
          views: {
            'menuContent': {
              template: require('./browse.html'),
              controller: 'BrowseCtrl as vm'
            }
          }
        })
    })
    .controller('BrowseCtrl', function () {
      console.log('web-pack built file');
    });
};
