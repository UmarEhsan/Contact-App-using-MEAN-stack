var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('crud' , ['crud']);
var bodyParser = require('body-parser')
app.use(express.static(__dirname + "/PPublic"));
app.use(bodyParser.json());


app.get('/contacts' , function(req , res){

    console.log('I recieved a GET request');

    db.crud.find(function(err , docs){
        if(!err){
            console.log(docs);
            console.log("There Is Not Any Error!");
            res.json(docs);

        }
        else{
            console.log(err);
        }

    })
});

app.post('/contacts' , function(req , res){
    req.body._id=0;
      db.crud.insert(req.body , function(err , doc){
           if(!err){

               res.json(doc);
           }

      });

});

app.delete('/contacts/:id' , function(req , res){
    var removeId = req.params.id;
         console.log(removeId  +" " + "Remove");
    db.crud.remove({"_id": mongojs.ObjectId(removeId)}, function(err , doc){

        res.json(doc);
    });
})

app.get('/contacts/:id' , function(req , res){

    var editIt = req.params.id;

    db.crud.findOne({"_id" : mongojs.ObjectId(editIt)} , function(err , doc){

        res.json(doc);
    })

})
app.put('/contacts/:id' , function(req , res){

    var updateId = req.params.id;
    db.crud.findAndModify({query : {"_id" : mongojs.ObjectId(updateId)},

        update:{$set : {fname : req.body.fname , lname : req.body.lname , email : req.body.email}},
            new : false

        } , function(err , doc){
            if(!err){

                res.json(doc);
            }

        }


    );

})
app.listen(3000);
console.log('Server running on port 3000');