/**
* LibrosListController
* Controlador del listado de libros
*/
function RecipesListController($scope, $http) {
  $http.get('http://localhost/backend-api/web/app_dev.php/api/recetas').success(function(data) {
	$scope.receta = data._embedded.recetas;
  });


/*  $scope.cantseguidores = function (idreceta) {
      $http.get('http://localhost/backend-api/web/app_dev.php/api/receta/'+idreceta+'/seguidores').success(function(data) {
          $scope.seguidores = data._embedded.usuarios_seguidores.length;
      })
      };*/


  //selecciona el desplegable y ordena automaticamente, variable definida en la vista con ng-model
  $scope.orderField = "nombre";
  $scope.orderReverse = "true";
}