var app = angular.module("mainModule", []);

app.controller("mainCtrl", ['$scope', '$rootScope', '$http',
    function ($scope, $rootScope, $http) {
        $scope.showForms = true;
        $scope.formData = [];
        $scope.database = '';
        $scope.getDataMongo = function(name,surname,description,category,songs) {
            $scope.database = '';
            var Data = {
                name: name,
                surname: surname,
                description : description,
                category: category,
                songs : songs
            };
            $scope.formData = JSON.stringify(Data);
            $http({url: "/addData", method: "POST", data: $scope.formData}).success(function (data) {
                $scope.name = '';
                $scope.surname = '';
                $scope.category = '';
                $scope.description = '';
                $scope.songs = '';
                $scope.showForms = false;
                $scope.database = 'MongoDB'
            });
        };
        $scope.getDataMysql = function(name,surname,description,category,songs) {
            $scope.database = '';
            var Data = {
                name: name,
                surname: surname,
                description : description,
                category: category,
                songs : songs
            };
            $scope.formData = JSON.stringify(Data);
            $http({url: "/addDataMysql", method: "POST", data: $scope.formData}).success(function (data) {
                $scope.name1 = '';
                $scope.surname1 = '';
                $scope.category1 = '';
                $scope.description1 = '';
                $scope.songs1 = '';
                $scope.showForms = false;
                $scope.database = 'MySql'
            });
        };
        $scope.getDataInfo = function() {
            console.log('edo');
            $http({url: "/getDataMysql", method: "GET"}).success(function (data) {
                $scope.mySqlData = data;
            });
        }
        $scope.goBack = function() {
            $scope.database = '';
            $scope.showForms = true;
        }

    }
]);

