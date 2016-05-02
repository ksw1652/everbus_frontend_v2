/**
 * Created by airnold on 16. 3. 12..
 */
angular.module('everbus.services')
	.factory('shareService',['$q','$http',function($q, $http){
		/**
		 * 유효성 체크를 위해 기본값을 초기화 해주어야 함
		 */

		var share_obj = {};

		share_obj.gmap = {};







		share_obj.uploadStory = function(obj){
			console.log(obj);
			var defer = $q.defer();
			$http({
				url:"http://54.255.169.44:3000/share/upload/uploadcard",
				method: 'POST',
				data: obj
			}).success(function (data, status, headers, config) {

				defer.resolve(data);
			}).error(function (data, status, headers, config) {
				console.log(config);
			});

			return defer.promise;
		};

		share_obj.storyCard = function(obj){
			var defer = $q.defer();
			$http({
				url:"http://54.255.169.44:3000/share/story",
				method: 'POST',
				data: obj
			}).success(function (data, status, headers, config) {
				defer.resolve(data);

			}).error(function (data, status, headers, config) {
				console.log(config);
			});

			return defer.promise;

		};

		share_obj.nearCard = function(obj){
			var defer = $q.defer();
			$http({
				url:"http://54.255.169.44:3000/share/near",
				method: 'POST',
				data: obj
			}).success(function (data, status, headers, config) {
				defer.resolve(data);

			}).error(function (data, status, headers, config) {
				console.log(config);
			});

			return defer.promise;
		};

		share_obj.setMapObject = function(map){
			console.log(map);
			share_obj.gmap = map;
		};
		share_obj.getMapObject = function(){
			console.log(share_obj.gmap);
			return share_obj.gmap;
		};



		return share_obj;

	}]);
