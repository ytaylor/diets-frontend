
function CreateRecipeController($scope, $http) {

    $scope.ingredientes = [];
    $scope.preparacion = [];
    $scope.nombre = null;
    $scope.raciones = null;
    $scope.tiempo_preparacion = null;
    $scope.ingredientesjson= [];
    $scope.preparacionjson = [];
    $scope.foto= null;


    $scope.createrecipe = function (nombre, raciones, tiempo_preparacion) {

        var data = {
            nombre:  nombre,
            raciones:  raciones,
            tiempo_preparacion: tiempo_preparacion,
            ingredientes:   $scope.ingredientesjson,
            preparacion: $scope.preparacionjson
    };
    $http.post('http://localhost/backend-api/web/app_dev.php/api/receta', JSON.stringify(data))
            .then(function (response) {
                if (response.data) {
                    $scope.msg = "Post Data Submitted Successfully!";

                        var fd = new FormData();
                        //Take the first selected file
                        fd.append("file", $scope.foto);

                        $http.post('http://localhost/backend-api/web/app_dev.php/api/receta/'+response.data.id +'/picture', fd, {
                            withCredentials: true,
                            headers: {'Content-Type': undefined },
                            transformRequest: angular.identity
                        }).then(function (response) {
                            if (response.data) {
                                $scope.msg = "Post Data Submitted Successfully!";
                            }
                        }, function (response) {
                            $scope.msg = "Service not Exists";

                        });


                    alert('Su receta ha sidc creada satisfactoriamente. Puede agregarle fotos si desea. The Cousini se lo recomienda');
                    $scope.ingredientes = [];
                    $scope.preparacion = [];
                    $scope.nombre = null;
                    $scope.raciones = null;
                    $scope.tiempo_preparacion = null;
                    $scope.ingredientesjson= [];
                    $scope.preparacionjson = [];
                }
            }, function (response) {
                $scope.msg = "Service not Exists";
                $scope.statusval = response.status;
                $scope.statustext = response.statusText;
                $scope.headers = response.headers();
            });
    }


    /* Adicionar las ingredientes*/
    $scope.addIngredients = function() {
        $scope.ingredientes.push({text:$scope.todoText, done:false});
        $scope.ingredientesjson.push($scope.todoText);
        $scope.todoText = '';
    };
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.ingredientes, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };
    $scope.archive = function() {
        var oldTodos = $scope.ingredientes;
        $scope.ingredientes = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) $scope.ingredientes.push(todo);
        });
    };

    /* Adicionar la preparacion*/
    $scope.addPreparacion = function() {
        $scope.preparacion.push({text:$scope.todoTextPreparacion, donePreparacion:false});
        $scope.preparacionjson.push($scope.todoTextPreparacion);
        $scope.todoTextPreparacion = '';
    };
    $scope.remainingPreparacion = function() {
        var count = 0;
        angular.forEach($scope.preparacion, function(todo) {
            count += todo.donePreparacion ? 0 : 1;
        });
        return count;
    };
    $scope.archivePreparaciones = function() {
        var oldTodos = $scope.preparacion;
        $scope.preparacion = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.donePreparacion) $scope.preparacion.push(todo);
        });
    };


    $scope.uploadFile  = function(files) {
        $scope.foto= files[0];
        /*var fd = new FormData();
        //Take the first selected file
        fd.append("file", files[0]);

        $http.post('http://localhost/backend-api/web/app_dev.php/api/receta/26/picture', fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        }).then(function (response) {
                if (response.data) {
                    $scope.msg = "Post Data Submitted Successfully!";
                }
        }, function (response) {
            $scope.msg = "Service not Exists";

        });*/
    };


}