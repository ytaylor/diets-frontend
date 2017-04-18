/**
 * Created by Yanelis on 18/04/2017.
 */

function UserController($scope, $http, jwtHelper) {
    var tokenPayload = jwtHelper.decodeToken(localStorage.getItem('token'));
    $scope.id = tokenPayload.id;
    $scope.nombre = tokenPayload.email;
    $scope.foto= tokenPayload.foto;
}