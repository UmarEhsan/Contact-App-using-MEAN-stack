/**
 * Created by hp Elite Book 8530p on 10/8/2015.
 */
var app = angular.module('crudApp' , ["ngNewRouter" ]);

app.controller("MainCtrl" ,function($router){

     $router.config([

             {path : "/" , component : "home"},
             {path : "/edit/:id" , component : "edit"}




         ]
     );


});