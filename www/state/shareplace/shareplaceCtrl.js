/**
 * Created by kimsungwoo on 2015. 12. 24..
 */
angular.module('everbus.controllers')
    .controller('shareplaceCtrl', [
        '$scope',
        '$window',
        '$ionicPopover',
        '$cordovaGeolocation',
        '$ionicPopup',
        '$ionicModal',
        '$ionicLoading',
        '$timeout',
        '$state',
        '$cordovaImagePicker',
        '$ionicScrollDelegate',
        'placeinfoService',
        '$ionicSideMenuDelegate',
        'shareService',
        function ($scope, $window, $ionicPopover, $cordovaGeolocation, $ionicPopup, $ionicModal, $ionicLoading,
                  $timeout, $state, $cordovaImagePicker, $ionicScrollDelegate, placeinfoService, $ionicSideMenuDelegate,
                  shareService) {

            $scope.active = 'card';
            /**
             * '스토리를 가져오는 중입니다..' 메시지 표시 변수
             */
            $scope.sendShareStory = {
                title: '',
                text: '',
                photos: undefined,
                lat: '',
                lng: '',
                address: ''
            };


            /**
             * stroy 저장을 위한 객체 설정
             *
             */
            $scope.storyCard = [];

            $scope.story_card_obj = {
                pagenum: 1,
                title: ''
            };
            shareService.storyCard($scope.story_card_obj).then(function (data) {
                $scope.storyCard.push(data);
            });


            $scope.searchTitle = function () {
                $scope.storyCard = [];
                console.log($scope.story_card_obj.title.length);
                if($scope.story_card_obj.title.length == 0){
                    shareService.storyCard($scope.story_card_obj).then(function (data) {
                        $scope.storyCard.push(data);
                    });
                }
                else if($scope.story_card_obj.title.length  > 1){
                    shareService.storyCard($scope.story_card_obj).then(function (data) {
                        console.log(data);
                        $scope.storyCard.push(data);
                    });
                }


            };

            $scope.gps_next_value = false;

            /**
             * 스토리 작성 부분에서 위치 가져오기 체크 변수
             */


            $scope.check_getloaction = false;

            /**
             * 사진 변수. 기본값 false
             */

            $scope.check_pictureValue = false;

            /**
             * 현재 위치 가져오기
             */

            $scope.currentBtn_clicked = function () {
                var posOptions = {timeout: 2000, enableHighAccuracy: true};
                $cordovaGeolocation
                    .getCurrentPosition(posOptions)
                    .then(function (position) {
                        $scope.gps_next_value = false;
                        $scope.set_current_position();
                    }, function (err) {
                        /*$scope.showConfirm();*/
                        $scope.set_current_position();
                    });
            };

            $scope.showConfirm = function () {
                var confirmPopup = $ionicPopup.confirm({
                    title: '위치 정보 승인',
                    template: "현재 위치를 설정하려면 위치 서비스를 켜 주세요"
                });

                confirmPopup.then(function (res) {
                    if (res) {
                        cordova.plugins.settings.openSetting('location_source');
                        $scope.set_current_position();
                    }
                });
            };
            $scope.onClick = function (marker, eventName, model) {
                $scope.modal_obj = model;
                $scope.openAround_modal();
                model.show = !model.show;
            };

            $scope.set_current_position = function () {
                $cordovaGeolocation
                    .getCurrentPosition()
                    .then(function (position) {
                        var near_card_obj = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                            range: null,
                            page_no: null,
                            limit_row_num: null
                        };
                        var infowindows = [];
                        shareService.nearCard(near_card_obj).then(function (data) {
                            var temp = shareService.getMapObject();
                            $scope.map = temp;
                            for (var i in data) {

                                var temp = {};
                                temp.id = i;
                                temp.latitude = data[i].LAT;
                                temp.longitude = data[i].LNG;
                                temp.PHOTO_PATH = data[i].PHOTO_PATH;
                                temp.title = data[i].TITLE;
                                temp.content = data[i].CONTENT;

                                infowindows.push(temp);
                            }
                            $scope.map.markers = infowindows;
                            if ($scope.gps_next_value) {
                                $scope.map.center.latitude = position.coords.latitude;
                                $scope.map.center.longitude = position.coords.longitude;
                                $scope.map.zoom = 17;
                                $scope.map.control.refresh();
                                $scope.gps_next_value = false;
                            } else {
                                $ionicLoading.show({
                                    template: '현재 위치를 가져오는 중입니다.',
                                    showDelay: 0
                                });
                                $timeout(function () {
                                    $scope.map.center.latitude = position.coords.latitude;
                                    $scope.map.center.longitude = position.coords.longitude;
                                    $scope.map.zoom = 17;
                                    $scope.map.control.refresh();
                                    $ionicLoading.hide();
                                }, 500);
                                $scope.gps_next_value = true;
                            }
                        });
                    });
            };
            /**
             * around modal
             * (스토리 모달)
             */
            $scope.openAround_modal = function () {
                $ionicLoading.show({
                    template: '스토리를 가져오는 중입니다..',
                    showDelay: 0
                });

                $timeout(function () {
                    $ionicLoading.hide();

                    $ionicModal.fromTemplateUrl('state/shareplace/aroundmodal.html', {
                        scope: $scope,
                        animation: 'slide-in-right'
                    }).then(function (modal) {
                        $scope.aroundmodal = modal;
                        $scope.aroundmodal.show();
                    });
                }, 1000);
            };
            $scope.close_aroundmodal = function () {
                $scope.aroundmodal.hide();
            };

            /**
             * goto shareplacemarkonthemap page
             */

            $scope.goto_shareplacesearchquery = function () {
                $ionicLoading.show({
                    showBackdrop: false,
                    showDelay: 0,
                    template: '<ion-spinner icon="android" class="spinner-positive"></ion-spinner>'
                });
                $timeout(function () {
                    $ionicLoading.hide();
                    $state.go('tabs.shareplacesearchquery');

                }, 2000);
            };

            $scope.upload_picture = function () {
                $scope.story_pictures = [];
                $scope.story_pictures_base64 = [];
                $scope.check_pictureValue = false;

                var options = {
                    maximumImagesCount: 3,
                    width: 800,
                    height: 800,
                    quality: 80
                };

                $cordovaImagePicker.getPictures(options)
                    .then(function (results) {
                        for (var i = 0; i < results.length; i++) {
                            $scope.story_pictures.push(results[i]);
                            convertImgToBase64URL(results[i], function (base64Img) {
                                $scope.story_pictures_base64.push(base64Img);
                            });
                            $scope.check_pictureValue = true;
                            $ionicScrollDelegate.scrollBottom();
                        }
                        if (!$scope.$$phase) {
                            $scope.$apply();
                        }
                    }, function (error) {
                        alert(error);
                        throw error;
                    });
            };

            $scope.setActive = function (getType) {
                $scope.active = getType;
                if (getType == 'card') {

                } else if (getType == 'map') {

                    $scope.map = {
                        center: {
                            latitude: 37.5568476,
                            longitude: 126.9237910
                        },
                        zoom: 17,
                        control: {},
                        markers: [],
                        options: {
                            mapTypeControl: true
                        }
                    };
                    shareService.setMapObject($scope.map);

                } else {

                }
            };

            $scope.isActive = function (type) {
                return type === $scope.active;
            };

            $scope.check_placeValue = function () {
                return placeinfoService.get_place_data().check_value;
            };

            $scope.showRightMenu = function () {
                $ionicSideMenuDelegate.toggleRight();
            };

            $scope.finishShare = function () {

                var placeinfo = placeinfoService.get_place_data();
                $scope.sendShareStory.photos = $scope.story_pictures_base64;
                $scope.sendShareStory.lat = placeinfo.selected_lat;
                $scope.sendShareStory.lng = placeinfo.selected_lng;
                $scope.sendShareStory.address = placeinfo.address;

                shareService.uploadStory($scope.sendShareStory).then(function (data) {
                    $ionicLoading.show({
                        template: '<i class="ion-checkmark-circled"></i> 스토리를 공유하였습니다.'
                        , noBackdrop: true
                        , duration: 1000
                    });
                    $timeout(function () {
                        resetShare();
                    }, 1000);

                });
            };

            function resetShare() {
                var placeinfo = {};
                placeinfo.check_value = false;
                placeinfo.location = {};
                placeinfoService.set_place_data(placeinfo);
                $scope.story_pictures = [];
                $scope.check_pictureValue = false;
                $scope.sendShareStory.title = '';
                $scope.sendShareStory.text = '';

                $state.go($state.current, {}, {reload: true});

            }

            $scope.goDestination = function (lat, lng) {
                $cordovaGeolocation.getCurrentPosition().then(function(position){
                    // current position
                    // position.coords.latitude , position.coords.longitude

                    console.log(position);
                    // destination position
                    console.log(lat,lng);

                })
            };

            var pagenumVal = 2;
            $scope.loadmoreStoryEvent = function () {
                var more_card_obj = {
                    pagenum: pagenumVal,
                    title: $scope.story_card_obj.title
                };
                shareService.storyCard(more_card_obj).then(function (data) {
                    console.log(data);
                    $scope.storyCard.push(data);
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                    pagenumVal++;
                });

            }

        }]);
///////////////////////////////////////////// native javascript function //////////////////////////////

function convertImgToBase64URL(url, callback, outputFormat) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        var canvas = document.createElement('CANVAS'),
            ctx = canvas.getContext('2d'), dataURL;
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        canvas = null;
    };
    img.src = url;
}


