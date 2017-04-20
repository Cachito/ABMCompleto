var mongoose = require('mongoose');

// exports porque lo voy a necesitar en otro lado, el resto es declaración.
module.exports = mongoose.model('usuario', {
    nombre: String,
    apellido: String,
    edad: String
});
