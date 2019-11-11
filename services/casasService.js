var CasasService = (function () {
    function CasasService($http) {
        console.log("CasasService constructor");
        this.http = $http;
        this.ENDPOINT = "http://localhost:3000/casas/";
    }
    CasasService.prototype.getCasas = function () {
        var url = this.ENDPOINT;
        console.log('GET ' + url);
        return this.http.get(url).then(function (res) { return res.data; });
    };
    CasasService.prototype.crear = function (casa) {
        var url = this.ENDPOINT;
        console.log('POST ' + url);
        return this.http.post(url, casa).then(function (res) { return res.data; });
    };
    return CasasService;
}());
//# sourceMappingURL=casasService.js.map