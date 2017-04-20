/**
 * Created by Yanelis on 18/04/2017.
 */

function UserController($scope, $http, jwtHelper) {
    var tokenPayload = jwtHelper.decodeToken(localStorage.getItem('token'));
    $scope.id = tokenPayload.id;
    $scope.nombre = tokenPayload.email;
    $scope.foto= tokenPayload.foto;

    $scope.people = [
        {firstName: "Daryl", surname: "Rowland", twitter: "@darylrowland", pic: "img/daryl.jpeg"},
        {firstName: "Alan", surname: "Partridge", twitter: "@alangpartridge", pic: "img/alanp.jpg"},
        {firstName: "Annie", surname: "Rowland", twitter: "@anklesannie", pic: "img/annie.jpg"}
    ];

    $http.get('http://localhost/backend-api/web/app_dev.php/api/recetas').success(function(data) {
        $scope.people = data._embedded.recetas;
    });




}