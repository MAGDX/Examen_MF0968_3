app.config([
    "$urlRouterProvider",
    "$stateProvider",
    ($urlRouterProvider: angular.ui.IUrlRouterProvider, $stateProvider: angular.ui.IStateProvider) => {
        console.log("Configuracion de rutas");
        
        $urlRouterProvider.when("", "/inicio");
        
        $stateProvider
            // Inicio
            .state("inicio", {
                url: "/inicio",
                templateUrl: "views/inicio.html",
                controller: CasasController
            })
            // Resumen
            .state("resumen", {
                url: "/resumen-casas",
                templateUrl: "views/resumen.html",
                controller: ResumenController
            })
            // Formulario
            .state("formulario", {
                url: "/nueva-casa",
                templateUrl: "views/formulario.html",
                controller: CasasController
            })
            // Leeme
            .state("leeme", {
                url: "/leeme",
                templateUrl: "views/leeme.html"
            });/*
            // Ejercicios Contratos
            .state("ejerciciosContratos", {
                url: "/ejercicios-contratos",
                templateUrl: "views/ejercicios-contratos.html",
                controller: ContratosController
            })
            // Libros
            .state("libros", {
                url: "/libros",
                templateUrl: "views/libros.html",
                controller: LibrosController
            });*/
    }
]);