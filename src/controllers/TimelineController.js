/**
 * Created by Yanelis on 25/03/2017.
 */
function TimelineController($scope, $http , jwtHelper ) {

    $scope.allevents=[];
    $scope.seguidores=[];

    $scope.data= new Date().toISOString().substring(0, 10);
    $scope.tokenPayload = jwtHelper.decodeToken(localStorage.getItem('token'));
    var id =$scope.tokenPayload.id;

    $http.get('http://localhost/backend-api/web/app_dev.php/api/timeline/'+id+'/'+ $scope.data +' 00:00:00').success(function(data) {
        $scope.events = data;
        angular.forEach($scope.events, function(value, key)
        {//Para obtener el objeto de tu lista
            angular.forEach(value, function(vvv, kkk)
            {
                $scope.allevents.push(vvv);
            });
        });
    });

   /* $scope.usuariosseguidores = function (idreceta) {
        $http.get('http://localhost/backend-api/web/app_dev.php/api/receta/'+idreceta+'/seguidores').success(function(data) {
            $scope.seguidores = data._embedded.usuarios_seguidores;
        });
    }*/
}