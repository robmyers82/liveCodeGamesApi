var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var Game     	=   require("./models/game");
var router      =   express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

app.get("/games", function(req,res){
    var response = {};
    Game.find({},function(err,data){
        if(err) {
            response = {"error" : true,"message" : "Error fetching data"};
        } else {
            response = {"error" : false,"message" : data};
        }
        res.json(response);
    });
});

app.listen(80);
console.log("Listening to port 80");