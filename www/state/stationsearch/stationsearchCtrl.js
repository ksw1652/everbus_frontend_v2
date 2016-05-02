/**
 * Created by parkbeomsoo on 2016. 3. 15..
 */
angular.module('everbus.controllers')
    .controller('stationsearchCtrl',[
        '$scope',
        '$state',
        '$ionicLoading',
        '$timeout',
        'busStopService',
        '$localStorage',
        function($scope, $state, $ionicLoading, $timeout, busStopService, $localStorage) {

            $scope.limit_cnt = 10;
            $scope.$storage = $localStorage;

            $scope.gotostationdetail = function(selected_item){
                /**
                 * 1. http_요청--> req : areacd, stopid
                 * 2. data_bind --> busStopService : selected_stop_info
                 * 3. page move.
                 */
                busStopService.http_get_stop_detail(selected_item.areacd, selected_item).then(function(data){
                    busStopService.set_selected_stop_info(data);
                    /**
                     * localStroage에 검색 station 추가
                     */
                    var i;
                    for(i=0; i < $scope.$storage.recently_search_List.length; i++) {
                        if($scope.$storage.recently_search_List[i].search_type=="station" && selected_item.stopid == $scope.$storage.recently_search_List[i].stopid){
                            break;
                        }
                    }

                    if(i == $scope.$storage.recently_search_List.length) {
                        //중복값이 없다면
                        selected_item.search_type = 'station';
                        $scope.$storage.recently_search_List.push(selected_item);

                    } else {
                        //중복값이 존재하면
                        $scope.$storage.recently_search_List.splice(i, 1);
                        selected_item.search_type = 'station';
                        $scope.$storage.recently_search_List.push(selected_item);
                    }

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


            }

            var pre_data = '';
            $scope.stop_search_key_up = function(search_keyword){
                if(search_keyword===undefined) return;
                if(search_keyword.length >= 2){

                    busStopService.http_get_stop_nm_list(search_keyword).then(function(data){

                        $scope.stop_list= data;
                        $scope.infinite_init();
                    },function(){
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

                if($scope.limit_cnt < $scope.stop_list.length){
                    $scope.limit_cnt+=10;
                    $scope.infinite_con = true;
                }else{
                    $scope.infinite_con = false;
                }
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }
        }]);
