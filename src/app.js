angular.module('app', []).

//definimos las rutas de la 'app'
config(['$routeProvider', function($routes) {

    $routes.
    when('/recipes', {
        templateUrl: 'views/recipes-list.html',
        controller: RecipesListController
    }).

    when('/login', {
        templateUrl: 'login.html',
        controller: LoginController
    }).

   /* //mediante dos puntos (:) definimos un parámetro
    when('/recipes/:recipeId', {
        templateUrl: 'views/libro.html',
        controller: RecipeDetailController
    }).*/

    //cualquier ruta no definida
    otherwise({
        redirectTo: '/recipes'});

}]);
