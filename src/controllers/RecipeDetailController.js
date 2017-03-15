/**
* LibroDetailController
* Controlador de la ficha del libro
* $scope - ámbito
* $http - 
* $routeParams - parámetros de la ruta
*/
function RecipeDetailController($scope, $http, $routeParams) {
  $scope.id = $routeParams.libroId;

  $http.get('data/libro'+$scope.id+'.json').success(function(data) {
	  $scope.libro = data[0];
  });
 
}