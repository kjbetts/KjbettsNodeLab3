(function() {
  var taskForm = {
    controller: "FormController",
    templateUrl: "templates/forms.html"
  };
  angular
    .module("app")
    .component("taskForm", taskForm);

}());
