angular.module('CachoAbmApp', []);

function CachoAbmController($scope, $http){
    $scope.newUsuario = {};
    $scope.usuarios = {};
    $scope.selected = {};

    // estructura general
    // http.operacion(get/post/put/delete)('ruta').success(function(){
    //
    //}).error(function(){
    //
    //})

    // octenemos la info de la base de datos
    $http.get('/api/usuario').success(function(data){
        $scope.usuarios = data;
    }).error(function(data){
        console.log('Error: ' + data);
    });

    // estructura general
    // scopte.nombrefunción = function(){
    //
    //}

    // function para registrar usuario
    $scope.registrarUsuario = function(){
        $http.post('/api/usuario', $scope.newUsuario).success(function(data){
            $scope.newUsuario = {}; // limpio el form
            $scope.usuarios = data;
        }).error(function(data){
            console.log('Error: ' + data);
        });
    };

    // función para eliminar usuario. solo envío el id. lo necesario para eliminar
    $scope.borrarUsuario = function(){
        $http.delete('/api/usuario/' + $scope.newUsuario._id).success(function(data){
            $scope.newUsuario = {}; // limpio el form
            $scope.usuarios = data; // actualizo la lista
            $scope.selected = false; // ya no hay nada seleccionado
        }).error(function(data){
            console.log('Error: ' + data);
        });
    };

    // función para modificar usuario. envio id y estructura
    $scope.modificarUsuario = function(){
        $http.put('/api/usuario/' + $scope.newUsuario._id, $scope.newUsuario).success(function(data){
            $scope.newUsuario = {}; // limpio el form
            $scope.usuarios = data; // actualizo la lista
            $scope.selected = false; // ya no hay nada seleccionado
        }).error(function(data){
            console.log('Error: ' + data);
        });
    };

    // función para seleccionar un usuario.
    $scope.selectUsuario = function(usuario){
        $scope.newUsuario = usuario; // cargo el usuario de la grilla
        $scope.selected = true; // ya hay seleccionado
        console.log($scope.newUsuario, $scope.selected);
    };
};
}
