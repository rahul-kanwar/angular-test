(
  function(){
    'use strict';

  angular
      .module('LunchCheck', [])
      .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

      function LunchCheckController($scope){
        //  console.log($scope.input);
        $scope.message="";  
        $scope.checkItems = function(){

          if($scope.input == "" || $scope.input == null){
            $scope.message = "Please enter data first";
            $scope.type = "danger";
          }
          else {
                var noOfItems = $scope.input.split(',');
                var cnt = 0;
                for(var i=0;i<noOfItems.length;i++){
                  if(noOfItems[i].trim()!="")
                    cnt = cnt+1;
                  }
                if(cnt > 3)
                {
                  $scope.message = "Too Much!";
                  $scope.type = "warning";
                }
                else {
                  $scope.message = "Enjoy!";
                  $scope.type = "success";
                }
              }
        }

      }
  })();
