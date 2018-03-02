(function() {
  function dataService($http){

    return{
      getAllTasks: getAllTasks,
      addTask: addTask,
      deleteTask: deleteTask
    }

            // Call the Node Server API to get all the items. Return a promise that
            // resolves to an array of products. (The promise should NOT resolve to the
            // entire response object.)
            function getAllTasks() {
                // GET /api/items
                return $http({
                    method: "GET",
                    url: "/tasks"
                }).then(function(response) {
                    return response.data;
                    console.log(response.data);
                });
            };

            // Call the Node Server API to add an item.
            // The item parameter will be an object, for example:
            // { product: "Apples", price: 1.89 }
            // Return a promise that resolves when the request finishes. It doesn't
            // matter what the value of the promise is.
            function addTask(item) {
              console.log(item)
                // POST /api/items
                // body -> { product: "...", price: ... }
                return $http({
                    method: "POST",
                    url: "/tasks",
                    data: item
                });
            };

            // Call the Node Server API to delete an item.
            // The itemId parameter will be the ID of the item to delete.
            // Return a promise that resolves when the request finishes. It doesn't
            // matter what the value of the promise is.
            function deleteTask(itemId) {
              console.log(itemId);
                // DELETE /api/items/{ID}
                return $http({
                    method: "DELETE",
                    url: "/tasks/" + itemId
                });
            };






  }


  angular
  .module("app")
  .factory("dataService", dataService);
})();
