(function(){
    var app = angular.module('mainApp',[]);
    app.directive("navinc",function(){
       return{
           restrict:'E',
           templateUrl:"nav.html"

       }
    });
    app.directive("footerinc",function(){
        return{
            restrict:'E',
            templateUrl:"footer.html"

        }
    });

})();