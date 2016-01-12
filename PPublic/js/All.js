/**
 * Created by hp Elite Book 8530p on 10/23/2015.
 */
var app = angular.module('crudApp' , []);

app.controller('Save' , function($scope , $http){

    var onPageLoad = function(){
        $http.get('/contacts')
            .success(function(response){

                $scope.persons =response;
                console.log(typeof(response.length));



            })

    }

    $scope.user = {};
    $scope.Save = function(){

        $http.post('/contacts' , $scope.user).success(function(response){

            console.log(response);
            onPageLoad();

        });
        $scope.user = {};




    }


    $scope.Remove = function(id){
        $http.delete('/contacts/' + id).success(function(response){

            onPageLoad();

        });
    }

    $scope.Edit = function(id){

        $http.get('/contacts/' + id).success(function(response){

            $scope.user = response;
        })

    }
    $scope.Update = function(){

        console.log($scope.user._id);
        $http.put('/contacts/' +  $scope.user._id , $scope.user).success(function(response){

            onPageLoad();
            $scope.user = "";

        });
    }


    onPageLoad();

})