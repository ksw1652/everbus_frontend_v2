/**
 * Created by parkbeomsoo on 2016. 3. 17..
 */
angular.module('everbus.controllers')
  .controller('tabsCtrl',[
    '$scope',
    '$state',
    '$ionicHistory',
    function($scope, $state, $ionicHistory) {

      $scope.clickRoute = function(){
        $ionicHistory.nextViewOptions({
          historyRoot : true
        });
        $state.go('tabs.routesearch');
      };

      $scope.clickStop = function(){
        $ionicHistory.nextViewOptions({
          historyRoot : true
        });
        $state.go('tabs.stationsearch');
      };
    }
  ]
);
