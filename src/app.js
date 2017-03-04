angular.module('app', []).

//definimos las rutas de la 'app'
config(['$routeProvider', function($routes) {

    $routes.
    when('/libros', {
        templateUrl: 'views/libros-list.html',
        controller: LibrosListController
    }).

    //mediante dos puntos (:) definimos un parámetro
    when('/libro/:libroId', {
        templateUrl: 'views/libro.html',
        controller: LibroDetailController
    }).

    //cualquier ruta no definida
    otherwise({
        redirectTo: '/libros'});

}]);
