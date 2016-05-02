angular.module('everbus.controllers')
	.controller('placesearchresultCtrl',[
		'$scope',
		'$state',
		'$ionicLoading',
		'placesearch_resultList',
		'$timeout',
		'placedetailFactory',
		'remodelingPathlistService',
		function($scope, $state, $ionicLoading, placesearch_resultList, $timeout, placedetailFactory, remodelingPathlistService) {
			var pathList = undefined;

			$scope.active = "metro";

			$scope.$on('$ionicView.enter', function(){
				$ionicLoading.hide();

				/**
				 * initialize placesearch path list
				 */

				pathList = remodelingPathlistService.remodel_pathList(placesearch_resultList);

				$scope.metro_pathList = pathList[0];
				$scope.bus_pathList = pathList[1];
				$scope.train_pathList = pathList[2];
				$scope.express_pathList = pathList[3];

			});

			$scope.gotoplacedetail = function(place_obj){
				console.log(place_obj);
				$ionicLoading.show({
					showBackdrop: false,
					showDelay: 0,
					template : '<ion-spinner icon="android" class="spinner-positive"></ion-spinner>'
				});

				$timeout(function () {
					placedetailFactory.setPlace_obj(place_obj);
					$state.go('tabs.placedetail');
					$ionicLoading.hide();
				}, 2000);
			}

			$scope.setActive = function(getType) {
				$scope.active = getType;
			};

			$scope.isActive = function(type) {
				return type === $scope.active;
			};
		}]);