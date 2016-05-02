/**
 * Created by kimsungwoo on 2016. 3. 12..
 */
angular.module('everbus.services')
	.factory('placedetailFactory', [function () {
		var place_obj_result = undefined;

		return {
			setPlace_obj : function(place_obj){
				place_obj_result = place_obj;
			},

			getPlace_obj: function() {
				return place_obj_result;
			}
		}
	}]);
