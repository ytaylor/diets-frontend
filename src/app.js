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
            . when('/createdieta', {
                templateUrl: 'views/create_dieta.html',
                controller: DietaController
            })
            . when('/perfil', {
                templateUrl: 'views/perfil.html',
                controller: PerfilController
            })
            . when('/timeline', {
                templateUrl: 'views/timeline.html',
                controller: TimelineController
            })
            . when('/listrecipesuser', {
                templateUrl: 'views/list_recepes-user.html',
                controller: RecipesListUserController
            })
            . when('/listdietasuser', {
                templateUrl: 'views/list_dieta_user',
                controller: DietaListController
            })
            .otherwise({ redirect: '/'});

       /* //mediante dos puntos (:) definimos un parámetro
        when('/recipes/:recipeId', {
            templateUrl: 'views/libro.html',
            controller: RecipeDetailController
        }).*/
});
