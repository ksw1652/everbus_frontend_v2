/**
 * Created by kimsungwoo on 2016. 3. 2..
 */
angular.module('everbus.controllers')
	.controller('shareplacemarkonthemapCtrl',[
		'$scope',
		'$cordovaGeolocation',
		'$ionicPopup',
		'$ionicLoading',
		'$timeout',
		'$ionicHistory',
		'$stateParams',
		'placeinfoService',
		function($scope, $cordovaGeolocation, $ionicPopup, $ionicLoading, $timeout, $ionicHistory, $stateParams, placeinfoService) {

			$scope.map_check = false;
			var selected_placedata = {};

			$scope.$on('$ionicView.enter', function(){

				/**
				 * 페이지에 진입시 맵 초기화
				 * map instance, marker, infowindow
				 */

				selected_placedata = $stateParams.placeobj;

				$scope.map = {
					center: {
						latitude: selected_placedata.location.location.lat(),
						longitude: selected_placedata.location.location.lng()
					},
					zoom: 17,
					options : {
						mapTypeControl:false
					}
				};

				$scope.map_check = true;

				console.log("초기 센터 값 : ");
				console.log($scope.map.center);
			});

			/**
			 * 처음 gps를 체크 한 후 다음번 검사 때 사용할 변수
			 */
			$scope.gps_next_value_inmodal = false;


			$scope.chooseplace_byMap = function(){
				/**
				 * 지도상의 현재위치 가져와야함.
				 */

				console.log("센터 값 : ");
				console.log($scope.map.center);

				var getplaceinfo_data = {};
				getplaceinfo_data.check_value = true;

				getplaceinfo_data.location = new google.maps.LatLng($scope.map.center.latitude, $scope.map.center.longitude);

				var latlng = {lat: parseFloat($scope.map.center.latitude), lng: parseFloat($scope.map.center.longitude)};
				var geocoder = new google.maps.Geocoder;
				geocoder.geocode({'location': latlng}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK) {
						if (results[1]) {

							getplaceinfo_data.address = results[1].formatted_address;

							getplaceinfo_data.selected_lat = $scope.map.center.latitude;
							getplaceinfo_data.selected_lng = $scope.map.center.longitude;
							placeinfoService.set_place_data(getplaceinfo_data);

							$ionicHistory.goBack(-2);

						} else {
							window.alert('No results found');
						}
					} else {
						window.alert('Geocoder failed due to: ' + status);
					}
				});



			};

			/**
			 * 현재 위치 가져오기
			 */

			$scope.currentBtn_clicked = function(){

				var posOptions = {timeout: 2000, enableHighAccuracy: true};

				$cordovaGeolocation
					.getCurrentPosition(posOptions)
					.then(function (position) {
						$scope.gps_next_value = false;
						$scope.set_current_position();
					}, function(err) {
						$scope.showConfirm();
					});
			}

			$scope.showConfirm = function() {
				var confirmPopup = $ionicPopup.confirm({
					title: '위치 정보 승인',
					template: "현재 위치를 설정하려면 위치 서비스를 켜 주세요"
				});

				confirmPopup.then(function(res) {
					if(res) {
						cordova.plugins.settings.openSetting('location_source');
						$scope.set_current_position();
					}
				});
			};

			$scope.set_current_position = function(){
				$cordovaGeolocation
					.getCurrentPosition()
					.then(function (position) {

						if($scope.gps_next_value){
							$scope.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
							$scope.map.setZoom(13);
							$scope.gps_next_value = false;
						} else{
							$ionicLoading.show({
								template: '현재 위치를 가져오는 중입니다.',
								showDelay: 0
							});

							$timeout(function () {
								$scope.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
								$scope.map.setZoom(17);
								$ionicLoading.hide();

							}, 500);
							$scope.gps_next_value = true;
						}
					});
			}
		}]);



