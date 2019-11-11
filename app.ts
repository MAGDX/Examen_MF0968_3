const app = angular.module("app", ["ui.router"]);

// Registro de Servicios y Controladores
app
  .service("casasService", CasasService)
  .controller("casasController", CasasController)
  .controller("resumenController", ResumenController);

app.filter('filtroPrecio', function(){
  return function(casas: Array<ICasa>, min: number, max: number){
    let casasFiltradas = casas.filter( e => {
      if(e.precio >= min && e.precio <= max){
        return true;
      }
    })

    return casasFiltradas;
  };
});