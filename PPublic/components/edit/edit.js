/**
 * Created by hp Elite Book 8530p on 10/26/2015.
 */
var app = angular.module('crudApp');
app.controller('EditController' , function($routeParams , apis , $timeout , $location){

    var vm = this;
    vm.userId = $routeParams.id;

    $timeout(function(){
        apis.editUser(vm.userId).then(function(response){
            vm.user = response.data;
        }).then(
            function (error) {
                return error;
            })

    },0);

    vm.updateUser = function(path){

        apis.updateUser(vm.user._id , vm.user);
        $location.path(path);

    }




})