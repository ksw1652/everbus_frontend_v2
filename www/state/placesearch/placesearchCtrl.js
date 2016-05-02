/**
 * Created by kimsungwoo on 2015. 12. 24..
 */
angular.module('everbus.controllers')
    .controller('placesearchCtrl',[
        '$scope',
        '$state',
        '$ionicLoading',
        '$timeout',
        'placesearchFactory',
        'placelatlngFactory',
        'placesearchinfoFactory',
        '$ionicPopup',
        '$localStorage',
        function($scope, $state, $ionicLoading, $timeout, placesearchFactory, placelatlngFactory, placesearchinfoFactory, $ionicPopup, $localStorage) {
            $scope.$storage = $localStorage;

            $scope.search_placepath = function(){
                if(placelatlngFactory.get_start_latlng() == undefined || placelatlngFactory.get_end_latlng() == undefined){
                    var alertPopup = $ionicPopup.alert({
                        title: '알림',
                        template: '출발지/도착지를 정확히 입력해 주세요'
                    });
                } else {
                    $ionicLoading.show({
                        showBackdrop: false,
                        showDelay: 0,
                        template : '<ion-spinner icon="android" class="spinner-positive"></ion-spinner>'
                    });

                    /**
                     * localStroage에 검색 place 추가
                     */
                    var i;
                    for(i=0; i < $scope.$storage.recently_search_List.length; i++) {
                        if($scope.$storage.recently_search_List[i].search_type=="place" &&
                            placelatlngFactory.get_start_latlng().lat() == $scope.$storage.recently_search_List[i].start_latlng.lat &&
                            placelatlngFactory.get_start_latlng().lng() == $scope.$storage.recently_search_List[i].start_latlng.lng &&
                            placelatlngFactory.get_end_latlng().lat() == $scope.$storage.recently_search_List[i].end_latlng.lat &&
                            placelatlngFactory.get_end_latlng().lng() == $scope.$storage.recently_search_List[i].end_latlng.lng ){
                            break;
                        }
                    }

                    if(i == $scope.$storage.recently_search_List.length) {
                        //중복값이 없다면
                        var temp = {};
                        temp.search_type = "place";
                        temp.start_name = placesearchinfoFactory.get_start_name();
                        temp.end_name = placesearchinfoFactory.get_end_name();
                        temp.start_latlng = placelatlngFactory.get_start_latlng();
                        temp.end_latlng = placelatlngFactory.get_end_latlng();
                        $scope.$storage.recently_search_List.push(temp);

                    } else {
                        //중복값이 존재하면
                        $scope.$storage.recently_search_List.splice(i, 1);
                        var temp = {};
                        temp.search_type = "place";
                        temp.start_name = placesearchinfoFactory.get_start_name();
                        temp.end_name = placesearchinfoFactory.get_end_name();
                        temp.start_latlng = placelatlngFactory.get_start_latlng();
                        temp.end_latlng = placelatlngFactory.get_end_latlng();
                        $scope.$storage.recently_search_List.push(temp);

                    }

                    $state.go('tabs.placesearchresult');
                }
            }

        }]);
