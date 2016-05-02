angular.module('everbus.services')
	.factory('placesearchFactory', ['$window', '$q', '$http', function ($window, $q, $http) {
		var placeobj = {};

		placeobj.place_search = function (start_latlng, end_latlng) {
			console.log("start_lat : "+start_latlng.lat());
			console.log("start_lng : "+start_latlng.lng());
			console.log("end_lat : "+end_latlng.lat());
			console.log("end_lng : "+end_latlng.lng());
			var defer = $q.defer();

			$http({
				method: 'GET',
				url: 'http://54.255.169.44:3000/bus/place/placeS?' +
				'st_lat='+start_latlng.lat()+ '&st_lng='+start_latlng.lng()+
				'&ed_lat='+end_latlng.lat()+'&ed_lng='+end_latlng.lng()
			}).success(function (data, status, headers, config) {
				defer.resolve(data);
			}).error(function (data, status, headers, config) {
				$window.alert(data);
			});

			return defer.promise;
		};
		return placeobj;
	}]);
