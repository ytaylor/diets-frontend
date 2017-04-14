/**
 * LoginController
 * Controlador del login de los usuarios
 */
function LoginController($scope, $http, $window ) {
    $scope.username = null;
    $scope.password = null;
    $scope.postdata = function (usuario, contrasena) {
        var data = {
            username: usuario,
            password: contrasena

        };
        $http.post('http://localhost/backend-api/web/app_dev.php/register', JSON.stringify(data))
            .then(function (response) {
                if (response.data) {
                    $scope.msg = "Post Data Submitted Successfully!";
                    $location.path('index_user.html/timeline');
                    $location.path('/');
                }
            }, function (response) {
                $scope.msg = "Service not Exists";
                $scope.statusval = response.status;
                $scope.statustext = response.statusText;
                $scope.headers = response.headers();
            });
    }

    $scope.postdatalogin = function (usuario, contrasena, jwtHelper) {
        var data = {
            username: usuario,
            password: contrasena
        };
        $http.post('http://localhost/backend-api/web/app_dev.php/login', JSON.stringify(data))
            .then(function (response) {
                if (response.data) {
                    localStorage.setItem('token',response.data.token);
                    $scope.msg = "Post Data Submitted Successfully!"
                    $window.location.href = "index_user.html/timeline";

                }
            }, function (response) {
                $scope.msg = "Service not Exists";
                $scope.statusval = response.status;
                $scope.statustext = response.statusText;
                $scope.headers = response.headers();
            });
    }

}


