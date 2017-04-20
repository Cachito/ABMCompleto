angular.module('CachoAbmApp', []);

// $http es lo que permite el uso de get, post, put, etc
function CachoAbmController($scope, $http){
    $scope.newUsuario = {};
    $scope.usuarios = {};
    $scope.selected = false;

    // estructura general
    // $shttp.operacion(get/post/put/delete)('/api/ruta').success(function(){
    //
    //}).error(function(){
    //
    //})

    // octenemos la info de la base de datos
    // no va en el scope, se ejecuta al iniciar y carga la grilla principal
    $http.get('/api/usuario').success(function(data){
        $scope.usuarios = data;
    }).error(function(data){
        console.log('Error: ' + data);
    });

    // estructura general
    // scope.nombrefunción = function(){
    //
    //}

    // function para registrar usuario
    $scope.registrarUsuario = function(){
        $http.post('/api/usuario', $scope.newUsuario).success(function(data){
            $scope.newUsuario = {}; // limpio el form
            $scope.usuarios = data; // vuelve a cargar la grilla
        }).error(function(data){
            console.log('Error: ' + data);
        });
    };

    // función para eliminar usuario. solo envío el id. lo necesario para eliminar
    $scope.borrarUsuario = function(){
        $http.delete('/api/usuario/' + $scope.newUsuario._id).success(function(data){
            $scope.newUsuario = {};  // limpio el form
            $scope.usuarios = data;  // actualizo la lista
            $scope.selected = false; // ya no hay nada seleccionado
        }).error(function(data){
            console.log('Error: ' + data);
        });
    };

    // función para modificar usuario. envio id y estructura
    // newUsuario._id este _id es generado por mongo (no aurelio, mongodb)
    // '/api/usuario/' + $scope.newUsuario._id, $scope.newUsuario termina siendo una ruta 'http[s]://localhost/api/usuario?_id=123'
    $scope.modificarUsuario = function(){
        $http.put('/api/usuario/' + $scope.newUsuario._id, $scope.newUsuario).success(function(data){
            $scope.newUsuario = {};  // limpio el form
            $scope.usuarios = data;  // actualizo la lista
            $scope.selected = false; // ya no hay nada seleccionado
        }).error(function(data){
            console.log('Error: ' + data);
        });
    };

    // función para seleccionar un usuario.
    $scope.selectUsuario = function(usuario){
        $scope.newUsuario = usuario; // cargo el usuario de la grilla
        $scope.selected = true;      // ya hay algo seleccionado
        console.log($scope.newUsuario, $scope.selected);
    };
};
