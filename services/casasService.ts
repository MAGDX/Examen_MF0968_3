interface ICasasService{
    getCasas(): angular.IPromise<Array<ICasa>>;
    crear(casa: any): angular.IPromise<any>;
}

class CasasService implements ICasasService{

    // Atributos
    private http: ng.IHttpService;
    public ENDPOINT: string;

    // Constructor
    constructor($http){
        console.log("CasasService constructor");
        this.http = $http;
        this.ENDPOINT = "http://localhost:3000/casas/";
    }

    // Funciones
    public getCasas(): angular.IPromise<any> {
        let url = this.ENDPOINT;
        console.log('GET ' + url);
        return this.http.get(url).then( res => res.data);
    }
    
    public crear(casa: any): angular.IPromise<any> {
        let url = this.ENDPOINT;
        console.log('POST ' + url);
        return this.http.post(url, casa).then( res => res.data);
    }
}