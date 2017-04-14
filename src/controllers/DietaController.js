/**
 * Created by Yanelis on 07/04/2017.
 */
function DietaController($scope, $http) {
    $http.get('http://localhost/backend-api/web/app_dev.php/api/recetas').success(function(data) {
        $scope.recetas = data._embedded.recetas;
    });

    $scope.miecetaSeleccionada=null;
    $scope.recetas_diets=null;



    /* Seleccionand las recetas*/
    $scope.addRecetas = function() {
        $scope.recetas_diets.push({text:$scope.todoText.nombre, done:false});
        $scope.recetas_diets.push($scope.todoText.nombre);
        $scope.todoText = '';
    };
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.recetas_diets, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };
    $scope.archive = function() {
        var oldTodos = $scope.recetas_diets;
        $scope.recetas_diets = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) $scope.recetas_diets.push(todo);
        });
    };




}