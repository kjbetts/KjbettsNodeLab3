(function() {
  var welcome= {
  controller: "FormController",
    templateUrl: "templates/welcome.html"
  };
  angular
    .module("app")
    .component("welcome",welcome);


}());
