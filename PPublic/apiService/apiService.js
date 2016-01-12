/**
 * Created by hp Elite Book 8530p on 10/26/2015.
 */
var app = angular.module('crudApp');


app.service('apis', function($http) {

    this.async = function(){

        return $http.get('/contacts').success(function(respanse){
            console.log()

        });
    }

    this.saveUser = function(user){
        $http.post('/contacts' , user).success(function(response){
            console.log(response);

        });
    }

    this.deleteUser = function(userId){
        $http.delete('/contacts/' + userId);



    }
    this.editUser = function(userId){
       return $http.get('/contacts/' + userId);
    }
    this.updateUser = function(userId , userDetail){

        $http.put('/contacts/' +  userId , userDetail);

    }
});
