/**
 * Created by kimsungwoo on 2015. 12. 24..
 */
angular.module('everbus.controllers')
    .controller('placedetailCtrl',[
        '$scope',
        '$state',
        'placedetail_obj',
        'placesearchinfoFactory',
        function($scope, $state, placedetail_obj, placesearchinfoFactory) {
            $scope.start_name = placesearchinfoFactory.get_start_name();
            $scope.second_bus_st = placedetail_obj.second_bus_st;
            $scope.third_bus_st = placedetail_obj.third_bus_st;
            $scope.second_metro_st = placedetail_obj.second_metro_st;
            $scope.first = placedetail_obj.first;
            $scope.third_bus_ed = placedetail_obj.third_bus_ed;
            $scope.second_metro_ed = placedetail_obj.second_metro_ed;
            $scope.second_bus_ed = placedetail_obj.second_bus_ed;
            $scope.end_name = placesearchinfoFactory.get_end_name();

            if(placedetail_obj.first.TR_INFO != undefined){
                $scope.first_TR = JSON.parse(placedetail_obj.first.TR_INFO).metro;
            }

            if(placedetail_obj.second_metro_st != undefined && placedetail_obj.second_metro_st.TR_INFO != undefined){
                $scope.second_metro_st_TR = JSON.parse(placedetail_obj.second_metro_st.TR_INFO).metro;
                console.log($scope.second_metro_st_TR);
            }

            if(placedetail_obj.second_metro_ed != undefined && placedetail_obj.second_metro_ed.TR_INFO != undefined){
                $scope.second_metro_ed_TR = JSON.parse(placedetail_obj.second_metro_ed.TR_INFO).metro;
                console.log($scope.second_metro_ed_TR);
            }


            if($scope.second_bus_st != undefined){
                $scope.second_bus_st_TR = JSON.parse(placedetail_obj.second_bus_st.TR_INFO);
            }

            if($scope.third_bus_st != undefined){
                $scope.third_bus_st_TR = JSON.parse(placedetail_obj.third_bus_st.TR_INFO);
            }

            if($scope.third_bus_ed != undefined){
                $scope.third_bus_ed_TR = JSON.parse(placedetail_obj.third_bus_ed.TR_INFO);
            }

            if($scope.second_bus_ed != undefined){
                $scope.second_bus_ed_TR = JSON.parse(placedetail_obj.second_bus_ed.TR_INFO);
            }

            $scope.goto_placedetailfullmap = function(getParam){
                $state.go('tabs.placedetailfullmap',{param : getParam});
            }
        }]);
