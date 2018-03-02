(function(){
  function FormController(dataService){
   var vm = this;
   refreshDataFromServer();

   vm.setData = function(newItemText){
     var newTask = {
       text: newItemText
     };
     dataService.addTask(newTask).then(function() {
         refreshDataFromServer();
     });
   }


    vm.removeItem = function(taskId){
      dataService.deleteTask(taskId).then(refreshDataFromServer);
    }

    function refreshDataFromServer() {
      dataService.getAllTasks().then(function(tasks) {
        vm.todoList = tasks;
        console.log(vm.todoList)
      });
    }

  }
  angular
  .module("app")
  .controller("FormController", FormController);

})();
