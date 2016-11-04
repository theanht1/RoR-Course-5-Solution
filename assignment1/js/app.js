(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.checkMeal = function() {
    var input = $scope.dishes;
    // console.log(input);
    
    if (input == "" || input == undefined) {
      $scope.message = "Please enter data first";
      $scope.message_class = "red";
    } else {
      $scope.message_class = "green";
      var dishes = input.split(",");

      function notEmptyOrSpaces(x) { return x.trim() != ""}
      dishes = dishes.filter(notEmptyOrSpaces);      
      // console.log(dishes);

      if (dishes.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }
  }
}
})();