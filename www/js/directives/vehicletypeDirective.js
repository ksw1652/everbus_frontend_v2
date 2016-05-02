/**
 * Created by kimsungwoo on 2016. 3. 10..
 */
angular.module('everbus.directives')
	.directive('vehicletypeDirective',function() {
		return {
			restrict: 'E',
			scope: {
				vehicleType : '=vehicleType',
				vehicleTrain : '=vehicleTrain'
			},
			template : '<div class="vehicle_nametag" style="background-color: {{vehicle_color}};">{{vehicleName}}</div>',

			link: function (scope, element, attributes, controller) {
				scope.vehicle_color = undefined;
				scope.vehicleName = undefined;

				if(scope.vehicleType == 'M'){
					//지하철
					scope.vehicle_color = "#74674E";
					scope.vehicleName = "지하철";

				} else if(scope.vehicleType == 'B'){
					//일반 버스
					scope.vehicle_color = "#77AB2C";
					scope.vehicleName = "버스";
				}
				else if(scope.vehicleType == "T"){
					//기차
					if(scope.vehicleTrain == "KTX"){
						scope.vehicle_color = "cornflowerblue";
					} else if(scope.vehicleTrain == "ITX-청춘"){
						scope.vehicle_color ="#13B4DE";
					} else if(scope.vehicleTrain == "새마을"){
						scope.vehicle_color ="#4E9E5C";
					} else if(scope.vehicleTrain == "무궁화"){
						scope.vehicle_color ="tomato";
					} else {
						scope.vehicle_color ="#0F1011";
					}
					scope.vehicleName = scope.vehicleTrain;

				} else if(scope.vehicleType == "E"){
					//고속버스
					scope.vehicle_color = "lightslategrey";
					scope.vehicleName = "고속버스";
				}
			}
		}
	});