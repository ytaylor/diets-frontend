/**
* LibrosListController
* Controlador del listado de libros
*/
function RecipesListController($scope, $http) {
  $http.get('http://localhost/backend-api/web/app_dev.php/recetas').success(function(data) {
	$scope.libros = data._embedded.recetas;
  });
 
  //defines una variable
  $scope.var1 = "variable definida desde el controlador";
  
  //selecciona el desplegable y ordena automaticamente, variable definida en la vista con ng-model
  $scope.orderField = "nombre";
  $scope.orderReverse = "true";
}