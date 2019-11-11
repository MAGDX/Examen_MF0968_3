interface ICasasController extends ng.IScope {
    vm: CasasController;
}

class CasasController implements ng.IController {

    // Atributos
    public casas: Array < ICasa > ;
    public casa: any;
    public alerta: string;

    // Funciones
    public listar: any;
    public detalle: any;
    public guardarCasa: any;

    // Inyectamos el servicio
    public static $inject = ["$scope", "casasService"];

    // Constructor
    constructor(private $scope: ICasasController, private casasService: CasasService) {
        console.log("Constructor CasasController");
        this.$scope.vm = this;
        this.$scope.vm.casas = [];
        this.$scope.vm.alerta = '';

        this.listar = () => {
            this.casasService.getCasas().then(casas => {
                this.$scope.vm.casas = casas;
                console.debug("Casas %o", $scope.vm.casas); 
            }, errorResponse => {
                console.warn('Respuesta servicio en controlador %o', errorResponse);
                this.$scope.vm.alerta = `Servicio Rest parado o incorrecto ${errorResponse.status}`;
            })
        };

        this.listar();

        // Funciones
        this.detalle = (c: ICasa) => {
            this.$scope.vm.casa = angular.copy(c);
            console.log("Detalle casa %o", this.$scope.vm.casa);
        }

        this.guardarCasa = () => {
            console.log("Guardar casa %o", this.$scope.vm.casa);
            let lib = {
                "nombre": this.$scope.vm.casa.nombre,
                "precio": this.$scope.vm.casa.precio,
                "alquiler": this.$scope.vm.casa.alquiler,
                "habitaciones": this.$scope.vm.casa.habitaciones,
                "foto": (this.$scope.vm.casa.foto)?this.$scope.vm.casa.foto:"",
                "direccion": this.$scope.vm.casa.direccion,
                "servicios": [{
                        "nombre": "tv",
                        "disponible": (this.$scope.vm.casa.servicios && this.$scope.vm.casa.servicios.tv)?true:false
                    },
                    {
                        "nombre": "wc",
                        "disponible": (this.$scope.vm.casa.servicios && this.$scope.vm.casa.servicios.wc)?true:false
                    },
                    {
                        "nombre": "jardin",
                        "disponible": (this.$scope.vm.casa.servicios && this.$scope.vm.casa.servicios.jardin)?true:false
                    },
                    {
                        "nombre": "cocina",
                        "disponible": (this.$scope.vm.casa.servicios && this.$scope.vm.casa.servicios.cocina)?true:false
                    }
                ]
            };
            console.debug('Submitado formulario %o', lib);

            // insertar nuevo
            casasService.crear(lib).then(
                data => {
                    console.info("Casa nueva %o", data);
                    this.$scope.vm.casa = undefined;
                    this.$scope.vm.alerta = "Casa nueva creada";
                },
                res => {
                    console.warn("No se puedo crear libro %o", res);
                    this.$scope.vm.alerta = "Error creando libro";
                }
            );
        };
    }
}