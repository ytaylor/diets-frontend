/**
* $scope - ámbito
* $http - 
* $routeParams - parámetros de la ruta
*/
function RecipeDetailController($scope, $http, $routeParams) {
  $scope.id = $routeParams.recipeId;
  $http.get('http://localhost/backend-api/web/app_dev.php/api/receta/'+$scope.id).success(function(data) {

      $scope.receta = data;
  });
 
}