/**
 * Created by Yanelis on 25/03/2017.
 */

function RecipesListUserController($scope, $http, $routeParams) {
    $scope.id = $routeParams.userId;
    $http.get('http://localhost/backend-api/web/app_dev.php/api/user/1').success(function(data) {
        $scope.recetasuser = data.usuario.recetas;
    });

}