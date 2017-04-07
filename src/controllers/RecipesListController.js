/**
* LibrosListController
* Controlador del listado de libros
*/
function RecipesListController($scope, $http) {
  $http.get('http://localhost/backend-api/web/app_dev.php/api/recetas').success(function(data) {
	$scope.libros = data._embedded.recetas;
  });

  //selecciona el desplegable y ordena automaticamente, variable definida en la vista con ng-model
  $scope.orderField = "nombre";
  $scope.orderReverse = "true";
}