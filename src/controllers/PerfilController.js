/**
 * Created by Yanelis on 25/03/2017.
 */
function PerfilController($scope, $http,  jwtHelper ) {

    $scope.tokenPayload = jwtHelper.decodeToken(localStorage.getItem('token'));
    var id =$scope.tokenPayload.id;

    $http.get('http://localhost/backend-api/web/app_dev.php/api/user/'+id).success(function(data) {
        $scope.user = data.usuario;
    });
}