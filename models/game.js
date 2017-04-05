var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/livecodegames');

var mongoSchema =   mongoose.Schema;
var gameSchema  = {
    "name" : String,
    "company" : String,
    "thumbnail_img" : String,
    "img": String,
    "buy_link": String
};

module.exports = mongoose.model('games', gameSchema);