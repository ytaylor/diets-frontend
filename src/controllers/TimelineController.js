/**
 * Created by Yanelis on 25/03/2017.
 */
function TimelineController($scope, $http , jwtHelper ) {
    $scope.allevents=[];

    $scope.data= new Date().toISOString().substring(0, 10);
    var tokenPayload = jwtHelper.decodeToken(localStorage.getItem('token'));

    $http.get('http://localhost/backend-api/web/app_dev.php/api/timeline/'+tokenPayload.id/'2017-04-04 00:00:00').success(function(data) {
        $scope.events = data.recetas;
        angular.forEach($scope.events, function(value, key)
        {
            //Para obtener el objeto de tu lista
            angular.forEach(value, function(vvv, kkk)
            {
                $scope.allevents.push(vvv);
            });
        });
    });



}