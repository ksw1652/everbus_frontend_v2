/**
 * Created by parkbeomsoo on 2016. 3. 10..
 */
angular.module('everbus.controllers')
    .controller('stationdetailCtrl',[
        '$scope',
        '$ionicHistory',
        '$ionicFilterBar',
        '$state',
        '$ionicLoading',
        '$timeout',
        'busStopService',
        'busRouteService',
        function($scope, $ionicHistory, $ionicFilterBar, $state, $ionicLoading, $timeout, busStopService, busRouteService) {

            $scope.bus_stop = {};

            $scope.showFilterBar = function () {
              $ionicFilterBar.show({
                items: $scope.bus_stop.stop_detail_info.ROUTELIST,
                update: function (filteredItems) {

                  console.log(filteredItems);
                  $scope.bus_stop.stop_detail_info.ROUTELIST = filteredItems;
                },
                filterProperties: 'routenm'
              });
            };

            $scope.goback = function(){
              console.log("dd")
              $ionicHistory.goBack();
            };

            $scope.$on('$ionicView.enter', function(){

              if(busStopService.get_selected_stop_info() === undefined){
                $scope.goback();
              }
              $scope.bus_stop= busStopService.get_selected_stop_info();
              console.log($scope.bus_stop);
              /**
                 * 페이지에 진입시 맵 초기화
                 * map instance, marker, infowindow
                 */
                $scope.map = {
                    center: {
                        latitude: $scope.bus_stop.stop_detail_info.LAT,
                        longitude: $scope.bus_stop.stop_detail_info.LNG
                    },
                    zoom: 17,
                    options : {
                        mapTypeControl:false
                    }
                };
                $scope.markers = [];
                $scope.markers.push({
                  id: $scope.bus_stop.stop_detail_info.STOPID,
                  arsid : $scope.bus_stop.stop_detail_info.ARSID,
                  coords: {
                    latitude: $scope.bus_stop.stop_detail_info.LAT,
                    longitude: $scope.bus_stop.stop_detail_info.LNG
                  },
                  options: {
                    draggable: false,
                    icon:"img/busStop_inMap.png"
                  }
                });
                for(var i in $scope.bus_stop.arround_info){
                  var around_stop = {
                    id: $scope.bus_stop.arround_info[i].STOPID,
                    arsid : $scope.bus_stop.arround_info[i].ARSID,
                    areacd : $scope.bus_stop.arround_info[i].AREACD,
                    coords: {
                      latitude: $scope.bus_stop.arround_info[i].LAT,
                      longitude: $scope.bus_stop.arround_info[i].LNG
                    },
                    options: {
                      draggable: false,
                      icon:"img/non_busStop_inMap.png"
                    },
                    events : {
                    }
                  };
                  $scope.markers.push(around_stop);
                }

                $scope.map_check = true;
            });

            $scope.$on('$ionicView.leave', function(){
                $scope.map_check = false;
            });

            $scope.click_around_stop = function(selected_stop){
              console.log(selected_stop);
              var item = {
                stopid : selected_stop.id,
                arsid : selected_stop.arsid,
                lat : selected_stop.coords.latitude,
                lng : selected_stop.coords.longitude
              };

              busStopService.http_get_stop_detail(selected_stop.areacd,item).then(function(data){
                busStopService.set_selected_stop_info(data);
                $scope.$broadcast('$ionicView.enter');
              });

            }

            $scope.refesh = function(){
              console.log($scope.bus_stop.stop_detail_info);

              busStopService.http_get_stop_detail($scope.bus_stop.stop_detail_info.AREACD, $scope.bus_stop.stop_detail_info)
                .then(function(data){
                  console.log(data);
                  busStopService.set_selected_stop_info(data);
                  $scope.bus_stop = busStopService.get_selected_stop_info();
                  console.log($scope.bus_stop);
                  
                  $timeout(function () {
                    $ionicLoading.hide();
                  }, 500);
                },function(){
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

            $scope.click_bus = function(selected_areacd, selected_routeid){

              busRouteService.http_get_route_detail(selected_areacd, selected_routeid).then(function(data){

                busRouteService.set_selected_route(data);

                $timeout(function () {
                  $state.go('tabs.routedetail');
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
