(function() {
  angular.module("app")
  .config(function($routeProvider){
    $routeProvider
    .when("/welcome", {
      template: "<welcome></welcome>"
    })
    .when("/form", {
      template:"<task-form></task-form>"
    })
    .otherwise({ redirectTo: "/welcome" });

  });

}());
