var usuario = require('./model/usuario');

/*
en general
exports.nombreFuncion = function(req, res){
operacion en la db
}
*/

// obtiene los usuarios de la db
// el orden de los parametros no es arbitrario, hay que googlear
exports.getUsuario = function(req, res){
    usuario.find(
        function(err, usuario){
            if(err){
                res.send(err); // devuelve el error, no sigue.
            }

            res.json(usuario); // aca devuelve el usuario
        });
    }

    // guardar un usuario nuevo
    exports.setUsuario = function(req, res){
        usuario.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            edad: req.body.edad
        },
        function(err, usuario){
            if(err){
                res.send(err);
            }
            usuario.find(function(err, usuarios){
                if(err){
                    res.send(err);
                }
                res.json(usuarios);
            });
        });
    }

    // actualizar un usuario
    exports.updateUsuario = function(req, res){
        usuario.update({_id: req.params.usuario_id},
        {
            $set:{
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                edad: req.body.edad
            }
        },
        function(err,usuario){
            if(err){
                res.send(err);
            }

            usuario.find(function(err, usuario){
                if(err){
                    res.send(err);
                }

                res.json(usuario);
            });
        });
    }

        // eliminar un usuario
        exports.removeUsuario = function(res, req){
            usuario.remove({
                _id: req.params.usuario_id},
                function(err, usuario){
                    if(err){
                        res.send(err);
                    }
                    usuario.find(function(err, usuarios){
                        if(err){
                            res.send(err);
                        }

                        res.json(usuarios);
                    });
                });
            }
