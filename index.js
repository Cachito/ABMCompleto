// inicialización
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 8080;  // puerto local 8080 si no está declarada la variable PORT

// configuración
mongoose.connect('mongodb://localhost:27017/ABMMongoBase');
// ABMMongoBase es el nombre que usará mongo oara guardar la data. si no existe la crea

// middleware
app.use(express.static(__dirname + '/angular'));
// __dirname es la carpeta del localhost:8080, le digo dónde está angular

app.use(morgan('combine'));
// formato de impresión del log

app.use(bodyParser.urlencoded({extended:false}));
// encode de la url y uso de parametros del querystring

app.use(bodyParser.json());
// para que entienda con json

pp.use(methodOverride('X-HTTP-Method-Override'));
// habilita PUT y DELETE en nuesta app

// carga de los endpoints
require('./app/routes.js')(app);

// puerto
app.listen(port);
console.log("APP por el puerto " + port);
