/**
 * Created by kimsungwoo on 2016. 3. 21..
 */
angular.module('everbus.directives')
	.directive('drawTimeline',function() {
		return {
			restrict: 'E',
			scope: {
				vehicleFlag: '@',
				metroLine: '@',
				metroareaName: '@',
				trainType: '@',
				busrouteType: '@'
			},
			template: '<div class="circle" style="background-color:{{color}}"><i class="{{icon}}"></i></div>' +
			'<div class="line_down" style="border: 1px solid {{color}}"></div><div class="circle_departure" style="background-color: {{color}}"></div>',

			link: function (scope, element, attributes) {
				scope.color = undefined;
				scope.icon = undefined;

				if(scope.vehicleFlag == 'M'){
					//지하철
					/*scope.color = '#888888';*/
					scope.icon = 'ion-android-subway';

					if(scope.metroareaName == "수도권"){
						if(scope.metroLine == "1"){
							scope.color = '#00498B';
						} else if(scope.metroLine == "2"){
							scope.color = '#009246';
						} else if(scope.metroLine == "3"){
							scope.color = '#F36630';
						} else if(scope.metroLine == "4"){
							scope.color = '#00A2D1';
						} else if(scope.metroLine == "5"){
							scope.color = '#A064A3';
						} else if(scope.metroLine == "6"){
							scope.color = '#9E4510';
						} else if(scope.metroLine == "7"){
							scope.color = '#5D6519';
						} else if(scope.metroLine == "8"){
							scope.color = '#D6406A';
						} else if(scope.metroLine == "9"){
							scope.color = '#8E764B';
						} else if(scope.metroLine == "A"){
							//공항
							scope.color = '#006D9D';
						} else if(scope.metroLine == "B"){
							//분당
							scope.color = '#E0A134';
						} else if(scope.metroLine == "G"){
							//경춘
							scope.color = '#2ABFD0';
						} else if(scope.metroLine == "I"){
							//인천
							scope.color = '#6E98BB';
						} else if(scope.metroLine == "K"){
							//경의선
							scope.color = '#72C7A6';
						} else if(scope.metroLine == "S"){
							//신분당
							scope.color = '#BB1833';
						} else if(scope.metroLine == "SU"){
							//SU 수인선
							scope.color = '#E0A134';
						}
					} else if(scope.metroareaName == "부산"){
						if(scope.metroLine == "1"){
							scope.color = '#F06A00';
						} else if(scope.metroLine == "2"){
							scope.color = '#81BF48';
						} else if(scope.metroLine == "3"){
							scope.color = '#BB8C00';
						} else if(scope.metroLine == "4"){
							scope.color = '#217DCB';
						} else if(scope.metroLine == "K"){
							//K 경전철
							scope.color = '#8652A1';
						}
					} else if(scope.metroareaName == "대구"){
						if(scope.metroareaName == "1"){
							scope.color = '#D93F5C';
						} else if(scope.metroareaName == "2"){
							scope.color = '#00AA80';
						} else if(scope.metroareaName == "3"){
							scope.color = '#FFB100';
						}
					} else if(scope.metroareaName == "대전"){
						//대전은 1호선 1개
						scope.color = '#007448';
					} else if(scope.metroareaName == "광주"){
						//광주도 1호선 1개
						scope.color = '#009088';
					}
				} else if(scope.vehicleFlag == 'B'){
					//일반 버스
					scope.icon = "ion-android-bus";

					if(scope.busrouteType == "1"){
						//공항
						scope.color = "#BF3BE8";
					} else if(scope.busrouteType == "2"){
						//마을
						scope.color = "#5FD06E";
					} else if(scope.busrouteType == "3"){
						//간선
						scope.color = "#1F5BFF";
					} else if(scope.busrouteType == "4"){
						//지선
						scope.color = "#08DB32";
					} else if(scope.busrouteType == "5"){
						//순환
						scope.color = "#E8A612";
					} else if(scope.busrouteType == "6"){
						//광역
						scope.color = "#FF302F";
					} else if(scope.busrouteType == "7"){
						//급행
						scope.color = "#FF302F";
					} else if(scope.busrouteType == "8"){
						//경기
						scope.color = "#2CB5A3";
					} else if(scope.busrouteType == "9"){
						//인천
						scope.color = "#4DACEB";
					} else if(scope.busrouteType == "10"){
						//일반
						scope.color = "#77AB2C";
					} else if(scope.busrouteType == "11"){
						//직행
						scope.color = "#FF302F";
					} else if(scope.busrouteType == "12"){
						//좌석
						scope.color = "#FF302F";
					} else if(scope.busrouteType == "13"){
						//시외
						scope.color = "#1F5BFF";
					} else if(scope.busrouteType == "14"){
						//심야
						scope.color = "#A09D9D";
					} else if(scope.busrouteType == "15"){
						//첨단
						scope.color = "#BF3BE8";
					}

				}
				else if(scope.vehicleFlag == "T"){
					//기차
					scope.icon = "ion-android-train";

					if(scope.trainType == "KTX"){
						scope.color = "cornflowerblue";
					} else if(scope.trainType == "ITX-청춘"){
						scope.color = "#13B4DE";
					} else if(scope.trainType == "새마을"){
						scope.color = "#4E9E5C";
					} else if(scope.trainType == "무궁화"){
						scope.color = "tomato";
					} else if(scope.trainType == "누리로"){
						scope.color = "#0F1011";
					}

				} else if(scope.vehicleFlag == "E"){
					//고속버스
					scope.color = "lightslategrey";
					scope.icon = "ion-android-bus";
				}

			}
		}
	});