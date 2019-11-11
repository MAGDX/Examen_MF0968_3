var ResumenController = (function () {
    function ResumenController($scope, casasService) {
        var _this = this;
        this.$scope = $scope;
        this.casasService = casasService;
        console.log("Constructor ResumenController");
        this.$scope.vm = this;
        this.$scope.vm.casas = [];
        this.listar = function () {
            _this.casasService.getCasas().then(function (casas) {
                _this.$scope.vm.casas = casas;
                _this.ejercicio1();
                _this.ejercicio2();
                _this.ejercicio3();
                _this.ejercicio4();
                console.debug('Casas obtenidas %o', _this.$scope.vm.casas);
            });
        };
        this.listar();
        this.ejercicio1 = function () {
            _this.$scope.vm.casas1 = _this.$scope.vm.casas.map(function (elem) {
                return {
                    "nombre": elem.nombre,
                    "precio": elem.precio
                };
            });
        };
        console.debug('Ejercicio 1 %o', this.$scope.vm.casas1);
        this.ejercicio2 = function () {
            _this.$scope.vm.casas2 = _this.$scope.vm.casas.find(function (elem) {
                return (elem.servicios.find(function (e) {
                    return (e.nombre == "cocina" && e.disponible);
                }));
            });
        };
        console.debug('Ejercicio 2 %o', this.$scope.vm.casas2);
        this.ejercicio3 = function () {
            _this.$scope.vm.casas3 = _this.$scope.vm.casas.map(function (elem) {
                if (elem.alquiler && elem.habitaciones > 3) {
                    return elem.precio;
                }
            }).reduce(function (num1, num2) {
                return num1 + num2;
            });
        };
        console.debug('Ejercicio 3 %o', this.$scope.vm.casas3);
    }
    ResumenController.$inject = ["$scope", "casasService"];
    return ResumenController;
}());
//# sourceMappingURL=ResumenController.js.map