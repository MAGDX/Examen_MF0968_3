interface IResumenController extends ng.IScope {
    vm: ResumenController;
}

class ResumenController implements ng.IController {

    public casas: Array < ICasa > ;
    public casas1: Array < any > ;
    public casas2: any;
    public casas3: any;
    public casas4: any;

    public listar: any;
    public ejercicio1: any;
    public ejercicio2: any;
    public ejercicio3: any;
    public ejercicio4: any;

    public static $inject = ["$scope", "casasService"];

    // Constructor
    constructor(private $scope: IResumenController, private casasService: CasasService) {
        console.log("Constructor ResumenController");
        this.$scope.vm = this;
        this.$scope.vm.casas = [];

        this.listar = () => {
            this.casasService.getCasas().then(casas => {
                this.$scope.vm.casas = casas;
                this.ejercicio1();
                this.ejercicio2();
                this.ejercicio3();
                this.ejercicio4();
                console.debug('Casas obtenidas %o', this.$scope.vm.casas);
            })
        };

        this.listar();

        this.ejercicio1 = () => {
            this.$scope.vm.casas1 = this.$scope.vm.casas.map(elem => {
                return {
                    "nombre": elem.nombre,
                    "precio": elem.precio
                }
            })
        };
        console.debug('Ejercicio 1 %o', this.$scope.vm.casas1);

        this.ejercicio2 = () => {
            this.$scope.vm.casas2 = this.$scope.vm.casas.find(elem =>
                (elem.servicios.find(e =>
                    (e.nombre == "cocina" && e.disponible)
                ))
            )
        };
        console.debug('Ejercicio 2 %o', this.$scope.vm.casas2);

        this.ejercicio3 = () => {
            this.$scope.vm.casas3 = this.$scope.vm.casas.map(elem => {
                if (elem.alquiler && elem.habitaciones > 3) {
                    return elem.precio;
                }
            }).reduce((num1: any, num2: any) => {
                return num1 + num2;
            });
        };
        console.debug('Ejercicio 3 %o', this.$scope.vm.casas3);
    }
}