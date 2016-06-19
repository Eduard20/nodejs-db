var app = angular.module("mainModule", []);

app.controller("mainCtrl", ['$scope', '$rootScope', '$http',
    function ($scope, $rootScope, $http) {
        $scope.formData = [];
        console.log($scope.formData);
        $scope.getData = function(name,surname,description,category,songs) {
            var Data = {
                name: name,
                surname: surname,
                description : description,
                category: category,
                songs : songs
            };
            $scope.formData = JSON.stringify(Data);
            $http({url: "/addData", method: "POST", data: $scope.formData}).success(function (data) {});
        };

    }
]);

