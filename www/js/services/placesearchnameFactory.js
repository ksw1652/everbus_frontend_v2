/**
 * Created by kimsungwoo on 2016. 3. 22..
 */
angular.module('everbus.services')
	.factory('placesearchinfoFactory', [function () {
		var start_name = undefined,
			end_name = undefined;

		return {
			set_start_name : function(start_name_obj){
				start_name = start_name_obj;
			},
			get_start_name : function(){
				return start_name;
			},
			set_end_name : function(end_name_obj){
				end_name = end_name_obj;
			},
			get_end_name : function(){
				return end_name;
			}
		}
	}]);
