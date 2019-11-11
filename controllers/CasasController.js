var CasasController = (function () {
    function CasasController($scope, casasService) {
        var _this = this;
        this.$scope = $scope;
        this.casasService = casasService;
        console.log("Constructor CasasController");
        this.$scope.vm = this;
        this.$scope.vm.casas = [];
        this.$scope.vm.alerta = '';
        this.listar = function () {
            _this.casasService.getCasas().then(function (casas) {
                _this.$scope.vm.casas = casas;
                console.debug("Casas %o", $scope.vm.casas);
            }, function (errorResponse) {
                console.warn('Respuesta servicio en controlador %o', errorResponse);
                _this.$scope.vm.alerta = "Servicio Rest parado o incorrecto " + errorResponse.status;
            });
        };
        this.listar();
        this.detalle = function (c) {
            _this.$scope.vm.casa = angular.copy(c);
            console.log("Detalle casa %o", _this.$scope.vm.casa);
        };
        this.guardarCasa = function () {
            console.log("Guardar casa %o", _this.$scope.vm.casa);
            var lib = {
                "nombre": _this.$scope.vm.casa.nombre,
                "precio": _this.$scope.vm.casa.precio,
                "alquiler": _this.$scope.vm.casa.alquiler,
                "habitaciones": _this.$scope.vm.casa.habitaciones,
                "foto": (_this.$scope.vm.casa.foto) ? _this.$scope.vm.casa.foto : "",
                "direccion": _this.$scope.vm.casa.direccion,
                "servicios": [{
                        "nombre": "tv",
                        "disponible": (_this.$scope.vm.casa.servicios && _this.$scope.vm.casa.servicios.tv) ? true : false
                    },
                    {
                        "nombre": "wc",
                        "disponible": (_this.$scope.vm.casa.servicios && _this.$scope.vm.casa.servicios.wc) ? true : false
                    },
                    {
                        "nombre": "jardin",
                        "disponible": (_this.$scope.vm.casa.servicios && _this.$scope.vm.casa.servicios.jardin) ? true : false
                    },
                    {
                        "nombre": "cocina",
                        "disponible": (_this.$scope.vm.casa.servicios && _this.$scope.vm.casa.servicios.cocina) ? true : false
                    }
                ]
            };
            console.debug('Submitado formulario %o', lib);
            casasService.crear(lib).then(function (data) {
                console.info("Casa nueva %o", data);
                _this.$scope.vm.casa = undefined;
                _this.$scope.vm.alerta = "Casa nueva creada";
            }, function (res) {
                console.warn("No se puedo crear libro %o", res);
                _this.$scope.vm.alerta = "Error creando libro";
            });
        };
    }
    CasasController.$inject = ["$scope", "casasService"];
    return CasasController;
}());
//# sourceMappingURL=CasasController.js.map