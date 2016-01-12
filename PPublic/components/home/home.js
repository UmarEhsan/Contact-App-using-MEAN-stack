/**
 * Created by hp Elite Book 8530p on 10/25/2015.
 */
var app = angular.module('crudApp');
app.controller('HomeController' , function($http , apis , $timeout){
    var vm = this;
    vm.title = "ContactList";

    var onPageLoad = function(){

        apis.async().then(function(d) { //2. so you can use .then()
            vm.persons = d.data;
            return d;
        }).then(function(data){
            var length =data.data.length;
            console.log(data.data[0].fname);

            console.log(length);
            for(var i=0; i< data.data.length; i++){

                console.log(data.data[i].fname);
            }



        })
        ;

    }


    vm.Save = function(){
        onPageLoad();
       apis.saveUser(vm.user);

        vm.user = {};

    }


    vm.Remove = function(id){
       apis.deleteUser(id);
        onPageLoad();
    }





    onPageLoad();


})