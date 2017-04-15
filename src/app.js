angular.module('app', ["ngRoute", 'angular-timeline', 'angular-jwt']).
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
            . when('/listrecipesuser/:userId', {
                templateUrl: 'views/recipes_user_list.html',
                controller: RecipesListUserController
            })
            . when('/listdietasuser/:userId', {
                templateUrl: 'views/list_dieta_user.html',
                controller: DietaListController
            })
            . when('/recipes/:recipeId', {
                templateUrl: 'views/recipe_detail.html',
                controller: RecipeDetailController
            })
            .otherwise({ redirect: '/'});

       /* //mediante dos puntos (:) definimos un parámetro
        when('/recipes/:recipeId', {
            templateUrl: 'views/libro.html',
            controller: RecipeDetailController
        }).*/
});
