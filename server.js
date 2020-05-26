var express = require ("express");
var mongoose = require('mongoose');
var router = require('./routes')

var app = express();
var PORT = process.env.PORT || 5000;

mongoose.connect(process.env.NODE_ENV || 'mongodb://localhost/sentcontacts')

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("viewer"))

//routing code
app.use(router);

//server listener
app.listen(PORT, function (){
    console.log(`currently listening to ${PORT}`)
})