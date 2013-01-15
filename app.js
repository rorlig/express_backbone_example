/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
    , express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , http = require('http')
    , path = require('path')
    , util = require('util')
    ,Db = require('mongodb').Db
    ,Server = require('mongodb').Server
    , server_config = new Server('localhost', 27017, {auto_reconnect: true, native_parser: true})
    , db = new Db('items', server_config, {});

var app = express();




mongoose.connect('mongodb://localhost/polls');
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;


// Linked Schema

//todo
var LinkedSchema = new Schema({
    network:{type: String , required:true},
    firstName: String,
    lastName:String,
    networkId:Number,
    accessToken: String,
    accessTokenExpiration:Number
});

// User Schema
//
//var UserSchema = new Schema({linkedAccount:[LinkedSchema]
//});


var ItemSchema = new Schema({
    title:{type: String , required:true},
});








var ItemModel = mongoose.model('Item', ItemSchema);






//add plugin for oauth   ... just use fb for now...


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//get all items
app.get('/api/items', function (req, res) {
    console.log('return all items');
    return ItemModel.find(function (err, items) {
       if (!err) {
            return res.send(items);
        } else {
            return console.log(err);
        }
    });

});

//create new item
app.post('/api/items', function (req, res) {
   //
    var item = new ItemModel({
                title: req.body.title});

            item.save(function (err) {
                if (!err) {
                    console.log("created");
                } else {
                    console.log(err);
                }
            });

            return res.send(item);
});

//delete an item
app.delete('/api/items/:itemId', function (req, res) {
    //
    console.log('deleting item with id::' + req.params.itemId);
    ItemModel.remove({"_id": req.params.itemId}, function (err) {
        if (err) return handleError(err);
        console.log("removing doc");
        res.send('deleted');
    });
});

//change the item
app.put('/api/items/:itemId', function (req, res) {
    //

    ItemModel.findOne({"_id": req.params.itemId}, function (err, item) {
        item.title = req.body.title;
        return item.save(function (err) {
            if (!err) {
//                    console.log("updated");
                console.log("item is" + item.toJSON());
            } else {
                console.log(err);
            }
            return res.send(item);
        });

    });
});




//delete item
//change item title


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
