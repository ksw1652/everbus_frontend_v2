/**
 * Created by kimsungwoo on 2016. 3. 10..
 */
angular.module('everbus.services')
	.factory('placelatlngFactory', [function () {
		var start_latlng = undefined,
			end_latlng = undefined;

		return {
			set_start_latlng : function(start_latlng_obj){
				start_latlng = start_latlng_obj;
			},
			get_start_latlng : function(){
				return start_latlng;
			},
			set_end_latlng : function(end_latlng_obj){
				end_latlng = end_latlng_obj;
			},
			get_end_latlng : function(){
				return end_latlng;
			}
		}
	}]);
