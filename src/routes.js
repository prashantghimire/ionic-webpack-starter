module.exports = function (mod) {
  mod.config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  });
};
