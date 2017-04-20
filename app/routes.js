var usuario = require('./model/usuario');
var controller = require('./controller');

module.exports = function(app){  // este app es de express
    // devolver los usuarios
    app.get('/api/usuario', controller.getUsuario);  // defino la ruta para la función

    app.post('/api/usuario', controller.setUsuario);

    app.put('/api/usuario/:usuario_id', controller.updateUsuario); // :usuario_id define una variable

    app.delete('/api/usuario/:usuario_id', controller.removeUsuario);

    // application
    app.get(
        '*', function(req, res){
            res.sendFile('./angular/index.html');   // viene de express y le indico dónde empieza mi app. que página leer primero
        });
    }
