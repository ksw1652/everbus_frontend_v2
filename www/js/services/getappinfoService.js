/**
 * Created by kimsungwoo on 2016. 4. 1..
 */
angular.module('everbus.services')
	.factory('getappinfoService', ['$window', '$q', '$http', function ($window, $q, $http) {
		var appinfo_obj = {};

		appinfo_obj.getapp_version = function () {

			var defer = $q.defer();

			$http({
				method: 'GET',
				url: 'http://54.255.169.44:3000/appversion'
			}).success(function (data, status, headers, config) {
				defer.resolve(data);
			}).error(function (data, status, headers, config) {
				$window.alert(data);
			});

			return defer.promise;
		};

		appinfo_obj.getapp_notice = function () {

			var defer = $q.defer();

			$http({
				method: 'GET',
				url: 'http://54.255.169.44:3000/notice'
			}).success(function (data, status, headers, config) {
				defer.resolve(data);
			}).error(function (data, status, headers, config) {
				$window.alert(data);
			});

			return defer.promise;
		};

		return appinfo_obj;
	}]);
