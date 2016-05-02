/**
 * Created by parkbeomsoo on 2016. 3. 10..
 */
angular.module('everbus.controllers')
    .controller('routedetailCtrl',[
      '$scope',
      '$ionicFilterBar',
      '$ionicScrollDelegate',
      '$ionicHistory',
      '$ionicLoading',
      '$timeout',
      '$state',
      'busRouteService',
      'busStopService',
      function($scope, $ionicFilterBar, $ionicScrollDelegate, $ionicHistory, $ionicLoading, $timeout, $state, busRouteService, busStopService) {

        /**
         * route_info : route 상세정보
         * stop_list : 짤라진 데이터.
         * @type {{}}
         */
        $scope.route_info = {};
        $scope.stop_up_list = [];
        $scope.stop_down_list = [];
        $scope.stop_list=[];
        $scope.up_down_con = true;

        $scope.init = function(){
          console.log("detail_init_call");
          $scope.route_info = busRouteService.get_selected_route();
          $scope.control_stop_list('up');
          console.log($scope.route_info);
        }
        /**
         * $scope.route_info > 데이터 바인딩
         * $scope.route_info.
         */
          // 이전 페이지에서 요청한 데이터 가져오기.
        $scope.$on('$ionicView.enter', function(){
          $scope.init();
        });

        /**
         * 상, 하행 버튼에 따라 stop_list 구분하기.
         */
        $scope.control_stop_list = function(flag){
          $scope.stop_list = [];
          if(flag=='up'){
            angular.element(document.getElementById('up')).removeClass('button-light');
            angular.element(document.getElementById('up')).removeClass('button-outline');
            angular.element(document.getElementById('up')).addClass('button-calm');

            angular.element(document.getElementById('down')).removeClass('button-calm');
            angular.element(document.getElementById('down')).addClass('button-light');
            angular.element(document.getElementById('down')).addClass('button-outline');

            $scope.stop_list = $scope.route_info.STOPLIST.slice(0,$scope.route_info.TRNSEQ);

            $scope.up_down_con = true;
          }else{
            angular.element(document.getElementById('down')).removeClass('button-light');
            angular.element(document.getElementById('down')).removeClass('button-outline');
            angular.element(document.getElementById('down')).addClass('button-calm');

            angular.element(document.getElementById('up')).removeClass('button-calm');
            angular.element(document.getElementById('up')).addClass('button-light');
            angular.element(document.getElementById('up')).addClass('button-outline');

            $scope.stop_list = $scope.route_info.STOPLIST.slice($scope.route_info.TRNSEQ, $scope.route_info.length);

            $scope.up_down_con = false;
          }
        }


        $scope.showFilterBar = function () {
          console.log($scope.route_info);
          $ionicFilterBar.show({
            items: $scope.stop_list,
            update: function (filteredItems) {

              console.log(filteredItems);
              $scope.stop_list = filteredItems;
            },
            filterProperties: 'stopnm'
          });
        };

        $scope.goback = function(){
          $ionicHistory.goBack();
        }

        $scope.refesh = function(){
          console.log($scope.route_info.AREACD, $scope.route_info.ROUTEID);
          busRouteService.http_get_route_detail($scope.route_info.AREACD, $scope.route_info.ROUTEID).then(function(data){

            busRouteService.set_selected_route(data);
            $scope.init();

            $timeout(function () {
              $ionicLoading.hide();
            }, 500);
          },function(err){
            $timeout(function () {
              $ionicLoading.hide();
            }, 500);
            alert("network 불안정")
          });

          $ionicLoading.show({
            showBackdrop: false,
            showDelay: 0,
            template : '<ion-spinner icon="android" class="spinner-positive"></ion-spinner>'
          });
        }

        $scope.click_stop = function(selected_item){

          busStopService.http_get_stop_detail($scope.route_info.AREACD,selected_item).then(function(data){
            busStopService.set_selected_stop_info(data);

            $timeout(function () {
              $state.go('tabs.stationdetail');
              $ionicLoading.hide();
            }, 500);
          });

          $ionicLoading.show({
            showBackdrop: false,
            showDelay: 0,
            template : '<ion-spinner icon="android" class="spinner-positive"></ion-spinner>'
          });

        }
      }]);
