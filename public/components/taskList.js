(function() {
 var taskList= {
  controller: "FormController",
   templateUrl: "templates/taskList.html"
 };
  angular
    .module("app")
    .component("taskList",taskList);

}());
