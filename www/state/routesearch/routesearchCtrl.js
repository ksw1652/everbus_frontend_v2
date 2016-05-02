/**
 * Created by parkbeomsoo on 2016. 3. 10..
 */
angular.module('everbus.controllers')
    .controller('routesearchCtrl',[
        '$scope',
        '$state',
        '$ionicLoading',
        '$timeout',
        'busRouteService',
        '$localStorage',
        function($scope, $state, $ionicLoading, $timeout, busRouteService, $localStorage) {

            $scope.route_list = [];
            $scope.$storage = $localStorage;

            $scope.gotoroutedetail = function(selected_item){
                /**
                 *  1. route 상세정보 가져오기.
                 *      - busRouteService.http_get_route_detail
                 *  2. busRouteService.selected_route에 데이터 세팅
                 *  3. 페이지 전환
                 */
                busRouteService.http_get_route_detail(selected_item.area, selected_item.rid).then(function(data){

                    console.log(data);
                    busRouteService.set_selected_route(data);
                    $timeout(function () {
                        /**
                         * localStroage에 검색 route 추가
                         */
                        var i;
                        for(i=0; i < $scope.$storage.recently_search_List.length; i++) {
                            if($scope.$storage.recently_search_List[i].search_type=="route" && selected_item.rid == $scope.$storage.recently_search_List[i].rid){
                                break;
                            }
                        }

                        if(i == $scope.$storage.recently_search_List.length) {
                            //중복값이 없다면
                            selected_item.search_type = 'route';
                            $scope.$storage.recently_search_List.push(selected_item);

                        } else {
                            //중복값이 존재하면
                            $scope.$storage.recently_search_List.splice(i, 1);
                            selected_item.search_type = 'route';
                            $scope.$storage.recently_search_List.push(selected_item);
                        }


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
            }


            var pre_data = '';
            $scope.route_search_key_up = function(search_keyword){

                if(search_keyword===undefined) return;
                if(search_keyword.length >= 1){

                    busRouteService.http_get_route_nm_list(search_keyword).then(function(data){
                        /**
                         * data bind.
                         * API -> $scope.route_list
                         */
                        $scope.route_list = data;
                        /**
                         * Infinite-scroll Variables init.
                         */
                        $scope.infinite_init();
                    },function(err){
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 500);
                        alert("network 불안정")
                    });
                }
            }
            /**
             * Infinite-scroll Variables init.
             */
            $scope.infinite_init = function(){
                $scope.limit_cnt=10;
                $scope.infinite_con = true;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }
            /**
             * Infinite-scroll Source
             */
            $scope.limit_cnt=10;
            $scope.infinite_con = false;
            $scope.loadMoreData = function(){

                if($scope.limit_cnt < $scope.route_list.length){
                    $scope.limit_cnt+=10;
                    $scope.infinite_con = true;
                }else{
                    $scope.infinite_con = false;
                }
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }
        }]);
