app.config([
    "$urlRouterProvider",
    "$stateProvider",
    function ($urlRouterProvider, $stateProvider) {
        console.log("Configuracion de rutas");
        $urlRouterProvider.when("", "/inicio");
        $stateProvider
            .state("inicio", {
            url: "/inicio",
            templateUrl: "views/inicio.html",
            controller: CasasController
        })
            .state("resumen", {
            url: "/resumen-casas",
            templateUrl: "views/resumen.html",
            controller: ResumenController
        })
            .state("formulario", {
            url: "/nueva-casa",
            templateUrl: "views/formulario.html",
            controller: CasasController
        })
            .state("leeme", {
            url: "/leeme",
            templateUrl: "views/leeme.html"
        });
    }
]);
//# sourceMappingURL=config.js.map