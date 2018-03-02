(function(){
  function hoverstate(){
    return{
    link: function ($scope, $element, $attrs){
      $element.on("mouseover", function(){
        $element.css("cursor", "crosshair");
      });
    }
  }
  }


  angular.module("app")
    .directive("hoverstate", hoverstate);





})();
