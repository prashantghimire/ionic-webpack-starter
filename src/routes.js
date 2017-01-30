module.exports = function (mod) {
  mod
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/app/playlists');
    });
};
