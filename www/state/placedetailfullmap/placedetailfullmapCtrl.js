/**
 * Created by kimsungwoo on 2015. 12. 24..
 */
angular.module('everbus.controllers')
    .controller('placedetailfullmapCtrl',[
        '$scope',
        'placesearchinfoFactory',
        'placedetail_obj',
        '$ionicSlideBoxDelegate',
        '$stateParams',
        'placelatlngFactory',
        function($scope, placesearchinfoFactory, placedetail_obj, $ionicSlideBoxDelegate, $stateParams, placelatlngFactory) {
            $scope.start_name = placesearchinfoFactory.get_start_name();
            $scope.second_bus_st = placedetail_obj.second_bus_st;
            $scope.third_bus_st = placedetail_obj.third_bus_st;
            $scope.second_metro_st = placedetail_obj.second_metro_st;
            $scope.first = placedetail_obj.first;
            $scope.third_bus_ed = placedetail_obj.third_bus_ed;
            $scope.second_metro_ed = placedetail_obj.second_metro_ed;
            $scope.second_bus_ed = placedetail_obj.second_bus_ed;
            $scope.end_name = placesearchinfoFactory.get_end_name();

            $scope.departure_obj = {
                step_name : 'departure',
                st_obj : {
                    latitude : placelatlngFactory.get_start_latlng().lat(),
                    longitude : placelatlngFactory.get_start_latlng().lng()
                }
            };

            $scope.arrival_obj = {
                step_name : 'arrival',
                st_obj : {
                    latitude : placelatlngFactory.get_end_latlng().lat(),
                    longitude : placelatlngFactory.get_end_latlng().lng()
                }
            };

            var params_list = [];

            /**
             * calculate_slidebox = function(step_name, ST_LAT, ST_LNG, ED_LAT, ED_LNG)
             *
             */
            $scope.calculate_slideindex = function(step_name, ST_LAT, ST_LNG, ED_LAT, ED_LNG){
                var temp = {};
                temp.step_name = step_name;
                temp.st_obj = {
                    latitude : ST_LAT,
                    longitude : ST_LNG
                };
                temp.ed_obj = {
                    latitude : ED_LAT,
                    longitude : ED_LNG
                };

                params_list.push(temp);
            }

            var uniq_paramList = [];

            $scope.$on('$ionicView.enter', function(){
                /**
                 * 배열 내 중복 제거 소스. 순서는 보장 되게 중복된 상태에서 제거
                 */
                uniq_paramList = _.uniqWith(params_list, _.isEqual);

                //배열의 처음과 끝에 출발지/도착지 추가
                uniq_paramList.unshift($scope.departure_obj);
                uniq_paramList.push($scope.arrival_obj);

                console.log("placedetail_obj : ");
                console.log(placedetail_obj);
                console.log("latlng_list : ");
                console.log(uniq_paramList);

                //전 state에서 전달 받은 인자를 현재 배열 내에서 찾음, 그 index를 active로 둠.
                $scope.active_slide_num  = _.findIndex(uniq_paramList, function(o) { return o.step_name == $stateParams.param; });

                $scope.map_check = true;

                $scope.map = {
                    center: {
                        latitude: uniq_paramList[$scope.active_slide_num].st_obj.latitude,
                        longitude: uniq_paramList[$scope.active_slide_num].st_obj.longitude
                    },
                    zoom: 17,
                    options : {
                        mapTypeControl:false
                    },
                    start_markers : [],
                    end_markers : []
                };

                $scope.polyline = {
                    id: 1,
                    path: [
                        {
                            latitude: uniq_paramList[$scope.active_slide_num].st_obj.latitude,
                            longitude: uniq_paramList[$scope.active_slide_num].st_obj.latitude
                        },
                        {
                            latitude: uniq_paramList[$scope.active_slide_num].st_obj.latitude,
                            longitude: uniq_paramList[$scope.active_slide_num].st_obj.latitude
                        }
                    ],
                    stroke: {
                        color: '#6060FB',
                        weight: 3
                    },
                    editable: false,
                    draggable: false,
                    geodesic: true,
                    visible: true
                };

                $scope.map.start_markers = [
                    {
                        id: 1,
                        icon: 'img/marker_departure.png',
                        latitude: uniq_paramList[$scope.active_slide_num].st_obj.latitude,
                        longitude: uniq_paramList[$scope.active_slide_num].st_obj.longitude
                    }
                ];

            });

            $scope.$on('$ionicView.leave', function(){
                $scope.map_check = false;
            });

            $scope.slideChanged = function(index){
                if(uniq_paramList[index].step_name == 'departure') {
                    $scope.map.center = {
                        latitude: uniq_paramList[index].st_obj.latitude,
                        longitude: uniq_paramList[index].st_obj.longitude
                    };

                    $scope.map.start_markers = [
                        {
                            id: 1,
                            icon: 'img/marker_departure.png',
                            latitude: uniq_paramList[index].st_obj.latitude,
                            longitude: uniq_paramList[index].st_obj.longitude
                        }
                    ];

                    $scope.polyline = {id: 1,
                        path: [
                            {
                                latitude: null,
                                longitude: null
                            },
                            {
                                latitude: null,
                                longitude: null
                            }
                        ],
                        stroke: {
                            color: '#6060FB',
                            weight: 3
                        },
                        editable: false,
                        draggable: false,
                        geodesic: true,
                        visible: true
                    };
                    $scope.map.end_markers = [];

                } else if(uniq_paramList[index].step_name == 'arrival') {
                    $scope.map.center = {
                        latitude: uniq_paramList[index].st_obj.latitude,
                        longitude: uniq_paramList[index].st_obj.longitude
                    };

                    $scope.map.start_markers = [
                        {
                            id: 1,
                            icon: 'img/marker_arrival.png',
                            latitude: uniq_paramList[index].st_obj.latitude,
                            longitude: uniq_paramList[index].st_obj.longitude
                        }
                    ];

                    $scope.polyline = {
                        id: 1,
                        path: [
                            {
                                latitude: null,
                                longitude: null
                            },
                            {
                                latitude: null,
                                longitude: null
                            }
                        ],
                        stroke: {
                            color: '#6060FB',
                            weight: 3
                        },
                        editable: false,
                        draggable: false,
                        geodesic: true,
                        visible: true
                    };

                    $scope.map.end_markers = [];

                } else if(uniq_paramList[index].step_name == 'walk_1'){
                    $scope.map.center = {
                        latitude: (uniq_paramList[index].st_obj.latitude + uniq_paramList[index].ed_obj.latitude) / 2,
                        longitude: (uniq_paramList[index].st_obj.longitude + uniq_paramList[index].ed_obj.longitude) / 2
                    };

                    $scope.polyline = {
                        id: 1,
                        path: [
                            {
                                latitude: uniq_paramList[index].st_obj.latitude,
                                longitude: uniq_paramList[index].st_obj.longitude
                            },
                            {
                                latitude: uniq_paramList[index].ed_obj.latitude,
                                longitude: uniq_paramList[index].ed_obj.longitude
                            }
                        ],
                        stroke: {
                            color: '#6060FB',
                            weight: 3
                        },
                        editable: false,
                        draggable: false,
                        geodesic: true,
                        visible: true
                    };

                    $scope.map.start_markers = [
                        {
                            id: 1,
                            icon: 'img/marker_departure.png',
                            latitude: uniq_paramList[index].st_obj.latitude,
                            longitude: uniq_paramList[index].st_obj.longitude
                        }
                    ];

                    $scope.map.end_markers = [
                        {
                            id: 2,
                            icon: 'img/marker_walk.png',
                            latitude: uniq_paramList[index].ed_obj.latitude,
                            longitude: uniq_paramList[index].ed_obj.longitude
                        }
                    ];

                } else if(uniq_paramList[index].step_name == 'walk_2' ||
                    uniq_paramList[index].step_name == 'walk_3' ||
                    uniq_paramList[index].step_name == 'walk_4' ||
                    uniq_paramList[index].step_name == 'walk_5' ||
                    uniq_paramList[index].step_name == 'walk_6'){

                    $scope.map.center = {
                        latitude: (uniq_paramList[index].st_obj.latitude + uniq_paramList[index].ed_obj.latitude) / 2,
                        longitude: (uniq_paramList[index].st_obj.longitude + uniq_paramList[index].ed_obj.longitude) / 2
                    };

                    $scope.polyline = {
                        id: 1,
                        path: [
                            {
                                latitude: uniq_paramList[index].st_obj.latitude,
                                longitude: uniq_paramList[index].st_obj.longitude
                            },
                            {
                                latitude: uniq_paramList[index].ed_obj.latitude,
                                longitude: uniq_paramList[index].ed_obj.longitude
                            }
                        ],
                        stroke: {
                            color: '#6060FB',
                            weight: 3
                        },
                        editable: false,
                        draggable: false,
                        geodesic: true,
                        visible: true
                    };

                    $scope.map.start_markers = [
                        {
                            id: 1,
                            icon: 'img/marker_takeoff.png',
                            latitude: uniq_paramList[index].st_obj.latitude,
                            longitude: uniq_paramList[index].st_obj.longitude
                        }
                    ];

                    $scope.map.end_markers = [
                        {
                            id: 2,
                            icon: 'img/marker_walk.png',
                            latitude: uniq_paramList[index].ed_obj.latitude,
                            longitude: uniq_paramList[index].ed_obj.longitude
                        }
                    ];

                } else {
                    $scope.map.center = {
                        latitude:uniq_paramList[index].st_obj.latitude,
                        longitude: uniq_paramList[index].st_obj.longitude
                    };

                    $scope.polyline = {
                        id: 1,
                        path: [
                            {
                                latitude: null,
                                longitude: null
                            },
                            {
                                latitude: null,
                                longitude: null
                            }
                        ],
                        stroke: {
                            color: '#6060FB',
                            weight: 3
                        },
                        editable: false,
                        draggable: false,
                        geodesic: true,
                        visible: true
                    };

                    $scope.map.start_markers = [
                        {
                            id: 1,
                            icon: 'img/marker_takeon.png',
                            latitude: uniq_paramList[index].st_obj.latitude,
                            longitude: uniq_paramList[index].st_obj.longitude
                        }
                    ];

                    $scope.map.end_markers = [];
                }

            }

            $scope.slideLeft = function(){
                $ionicSlideBoxDelegate.previous();
            }

            $scope.slideRight = function(){
                $ionicSlideBoxDelegate.next();
            }


        }]);
