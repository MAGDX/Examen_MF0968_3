var app = angular.module("app", ["ui.router"]);
app
    .service("casasService", CasasService)
    .controller("casasController", CasasController)
    .controller("resumenController", ResumenController);
app.filter('filtroPrecio', function () {
    return function (casas, min, max) {
        var casasFiltradas = casas.filter(function (e) {
            if (e.precio >= min && e.precio <= max) {
                return true;
            }
        });
        return casasFiltradas;
    };
});
//# sourceMappingURL=app.js.map