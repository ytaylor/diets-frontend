
/**
 * Created by Yanelis on 25/03/2017.
 */

function DietaListController($scope, $http, $routeParams) {
    $scope.id = $routeParams.userId;
    $http.get('http://localhost/backend-api/web/app_dev.php/api/user/1').success(function(data) {
        $scope.dietasuser = data;
    });
}