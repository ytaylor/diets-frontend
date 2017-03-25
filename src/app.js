angular.module('app', ["ngRoute"]).
   config(function($routeProvider){
        $routeProvider
            .when('/', {
            templateUrl: 'views/recipes-list.html',
            controller: RecipesListController
             })
            .when('/login', {
            templateUrl: 'login.html',
            controller: LoginController
            })
            . when('/createrecipes', {
            templateUrl: 'views/create_recipe.html',
            controller: CreateRecipeController
            })
            .otherwise({ redirect: '/'});

       /* //mediante dos puntos (:) definimos un parámetro
        when('/recipes/:recipeId', {
            templateUrl: 'views/libro.html',
            controller: RecipeDetailController
        }).*/
});
