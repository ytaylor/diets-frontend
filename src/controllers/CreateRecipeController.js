/**
* LibrosListController
* Controlador del listado de libros
*/
function CreateRecipeController($scope, $http) {

    $scope.addToList = function(item)
    {
        $scope.myIngredientes.push(item);
    }
}