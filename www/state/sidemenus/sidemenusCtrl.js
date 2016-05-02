/**
 * Created by kimsungwoo on 2016. 2. 29..
 */
angular.module('everbus.controllers')
    .controller('sidemenusCtrl',[
        '$scope',
        '$http',
        '$state',
        '$stateParams',
        'selectedAreaService',
        /*'$cordovaAppVersion',*/
        'getappinfoService',
        function($scope, $http, $state, $stateParams, selectedAreaService/*, $cordovaAppVersion*/, getappinfoService) {

            /**
             * 모든 sidemenus 의 state가 관리되는 controller
             */
            $scope.config_title = $stateParams.config_title;
            $scope.active = $stateParams.active;

            /**
             * sidemenu_notice (ionic item expand Example)
             */
            /*$scope.notice_items = getappinfoService.getapp_notice();*/
            $scope.items = [
                {
                    title: '[공지] 3월 1일 업데이트',
                    text: "현재 나와있는 모든 버스 어플리케이션은 실시간 정보를 얻어오기 위해서 서버와 통신을 하게 됩니다.\n\n" +
                    "출퇴근 시간에 서버와 다수의 통신으로 인해서 정보를 가져오는데 어려움이 있습니다.\n\n" +
                    "특히, 경기도 서버가 트래픽이 많아지면 불안정한 모습을 많이 보여줍니다.\n\n" +
                    "이로 인해 안정화 작업을 계속해서 진행하고 있으며v2.0.4 (2014.03.11)에서 최대한 안정화를 시켰습니다.\n\n" +
                    "최신 버전으로 업데이트를 하시면 더욱 편리하게 실시간 정보를 이용할 수 있습니다.\n\n" +
                    "좋은 하루되세요~! 부릉~!!!!"
                },
                {
                    title: '9월 10일 업데이트',
                    text: "\n** 서버 설정 변경\n\n ** 어플리케이션 성능 개선\n\n"
                },
                {
                    title: '9월 1일 업데이트',
                    text: "\n** 지도에서 구글 로고, 이용약관 터치시 뒤로가기 버튼 무반응 에러 수정(구글 지도, 시스템 브라우저로 변경)\n\n"
                },
                {
                    title: '8월 24일 업데이트',
                    text: "\n** 앱 비정상 적으로 종료되던 에러 수정\n\n** 앱종료시 더이상 알림창이 뜨지 않으며 \'뒤로가기\' 버튼을 통해 앱 종료\n\n** 화순, 대구 노선구분을 위한 상세정보 표시 (정류소 검색 후 정류소 상세 페이지에 표시 됨)\n\n"
                },
                {
                    title: '8월 18일 업데이트',
                    text: "\n** 길찾기의 북마크 기능 추가(원하는 경로를 검색 한 후 상단 오른쪽 별표 터치!)\n\n** 노선 상세 페이지에서 기점 첫차/막차, 종점 첫차/막차 에러 수정\n\n** 지역선택 UI 수정\n\n"
                },
                {
                    title: '7월 29일 업데이트',
                    text: "\n** 도움말 기능 추가 (화면 오른쪽 상단 설정아이콘 -> 도움말)\n\n** 진동기능 on/off (화면 오른쪽 상단 설정아이콘 -> 설정)\n\n** 최근검색 삭제되지 않던 에러 수정\n\n** 길찾기 검색 후 도착지 클릭시 지도에 위치 표시\n\n"
                }
            ];


            /*
             * if given group is the selected group, deselect it
             * else, select the given group
             */
            $scope.toggleItem= function(item) {
                if ($scope.isItemShown(item)) {
                    $scope.shownItem = null;
                } else {
                    $scope.shownItem = item;
                }
            };
            $scope.isItemShown = function(item) {
                return $scope.shownItem === item;
            };


            /**
             * sidemenu_selectregion data
             */
            $scope.all_division = [];

            if(!selectedAreaService.check_selected_area_list()){

                selectedAreaService.init_selected_area_list().then(function(data){
                    $scope.all_division = selectedAreaService.get_selected_area_list();
                });
            }else{
                $scope.all_division = selectedAreaService.get_selected_area_list();
            }


            /**
             * selected area
             */
            $scope.click_item = function(){
                selectedAreaService.set_selected_area_list($scope.all_division);
                selectedAreaService.set_areacd_arr();
            }

            /**
             * version check
             */

            /*$cordovaAppVersion.getVersionNumber().then(function (version) {
                var appVersion = version;
                $scope.current_deviceapp_version = appVersion;
                console.log("appVersion : "+appVersion);
            });*/

            /*$scope.lastest_app_version = getappinfoService.getapp_version;*/

        }]);
