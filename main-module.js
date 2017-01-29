(function (angular) {

    var dependencies = [
        "ionic"
    ];

    var modules = [
        {package: require('./src/bundle')}
    ];

    modules.forEach(function (mod, index) {
        var modName = ("scenehound_" + index);
        var ngMod = angular.module(modName, []);
        mod.package(ngMod);
        dependencies.push(modName);
    });

    angular.module("scenehound", dependencies);

})(window.angular);
