/**
 * Created by Yanelis on 25/03/2017.
 */
function TimelineController($scope, $http) {
    $scope.allevents=[];

    $scope.data= new Date().toISOString().substring(0, 10);
    $http.get('http://localhost/backend-api/web/app_dev.php/api/timeline/1/'+$scope.data+" 00:00:00").success(function(data) {
        $scope.events = data;

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