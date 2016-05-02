/**
 * Created by kimsungwoo on 2015. 12. 24..
 */
angular.module('everbus.controllers')
    .controller('bookmarkCtrl',[
        '$scope',
        '$state',
        '$timeout',
        '$ionicLoading',
        '$localStorage',
        'placelatlngFactory',
        'placesearchinfoFactory',
        'busRouteService',
        'busStopService',
        function($scope, $state, $timeout, $ionicLoading, $localStorage, placelatlngFactory, placesearchinfoFactory, busRouteService, busStopService) {
            $scope.$storage = $localStorage;

            if($scope.$storage.recently_search_List == undefined || $scope.$storage.recently_search_List.length == 0 ) {
                //최근 검색 결과가 없으면
                $scope.$storage.recently_search_List = [];
            }

            $scope.$on('$ionicView.enter', function(){
                $scope.shouldShowDelete = false;

                $scope.recent_list = $scope.$storage.recently_search_List;

                console.log($scope.recent_list);
            });

            $scope.recentitem_clicked = function(item){
                $ionicLoading.show({
                    showBackdrop: false,
                    showDelay: 0,
                    template : '<ion-spinner icon="android" class="spinner-positive"></ion-spinner>'
                });

                if(item.search_type == 'route'){
                    busRouteService.http_get_route_detail(item.area, item.rid).then(function(data){
                        busRouteService.set_selected_route(data);

                        $timeout(function () {
                            $state.go('tabs.routedetail');
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

                } else if(item.search_type == 'station'){

                    busStopService.http_get_stop_detail(item.areacd, item).then(function(data){
                        busStopService.set_selected_stop_info(data);

                        $timeout(function () {
                            $state.go('tabs.stationdetail');
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

                } else if(item.search_type == 'place'){
                    if(typeof(item.start_latlng.lat) == 'number'){
                        placelatlngFactory.set_start_latlng(new google.maps.LatLng(item.start_latlng.lat, item.start_latlng.lng));
                    } else {
                        placelatlngFactory.set_start_latlng(item.start_latlng);
                    }

                    placesearchinfoFactory.set_start_name(item.start_name);

                    if(typeof(item.end_latlng.lat) == 'number'){
                        placelatlngFactory.set_end_latlng(new google.maps.LatLng(item.end_latlng.lat, item.end_latlng.lng));
                    } else {
                        placelatlngFactory.set_end_latlng(item.end_latlng);
                    }

                    placesearchinfoFactory.set_end_name(item.end_name);

                    $state.go('tabs.placesearchresult');
                }


            }
        }]);
