(function(){
    var app = angular.module('mainApp',[]);
    app.directive("navinc",function(){
       return{
           restrict:'E',
           templateUrl:"nav.html",
           controller:"navigationCtrl"
       }
    });
    app.controller('navigationCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.isCurrentPath = function (path) {
            var url=window.location.href;
            var arr=url.split('/')[url.split('/').length-1];
            if(arr==null || arr=="" || arr==undefined){
                arr="index.html";
            }
            return arr == path;
        };
    }]);
    app.directive("footerinc",function(){
        return{
            restrict:'E',
            templateUrl:"footer.html"

        }
    });
    app.directive("rightrailinc",function(){
        return{
            restrict:'E',
            templateUrl:"rightrailinc.html"

        }
    });
})();