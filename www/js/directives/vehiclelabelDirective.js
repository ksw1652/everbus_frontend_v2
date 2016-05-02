/**
 * Created by kimsungwoo on 2016. 3. 22..
 */
angular.module('everbus.directives')
	.directive('vehiclelabelDirective',function() {
		return {
			restrict: 'E',
			scope: {
				vehicleFlag: '@',
				metroLine: '@',
				metroareaName: '@',
				trainType: '@',
				busrouteType: '@',
				busrouteName: '@'
			},
			template: '<div class="vehicleLabel" style="background-color:{{color}}">{{vehicleTypename}}</div><div class="busnameLabel" style="color:{{color}}">{{busrouteName}}</div>',

			link: function (scope, element, attributes) {
				scope.color = undefined;
				scope.vehicleTypename= undefined;

				if(scope.vehicleFlag == 'M'){
					//지하철
					if(scope.metroareaName == "수도권"){
						if(scope.metroLine == "1"){
							scope.color = '#00498B';
							scope.vehicleTypename = '수도권 1호선';
						} else if(scope.metroLine == "2"){
							scope.color = '#009246';
							scope.vehicleTypename = '수도권 2호선';
						} else if(scope.metroLine == "3"){
							scope.color = '#F36630';
							scope.vehicleTypename = '수도권 3호선';
						} else if(scope.metroLine == "4"){
							scope.color = '#00A2D1';
							scope.vehicleTypename = '수도권 4호선';
						} else if(scope.metroLine == "5"){
							scope.color = '#A064A3';
							scope.vehicleTypename = '수도권 5호선';
						} else if(scope.metroLine == "6"){
							scope.color = '#9E4510';
							scope.vehicleTypename = '수도권 6호선';
						} else if(scope.metroLine == "7"){
							scope.color = '#5D6519';
							scope.vehicleTypename = '수도권 7호선';
						} else if(scope.metroLine == "8"){
							scope.color = '#D6406A';
							scope.vehicleTypename = '수도권 8호선';
						} else if(scope.metroLine == "9"){
							scope.color = '#8E764B';
							scope.vehicleTypename = '수도권 9호선';
						} else if(scope.metroLine == "A"){
							//공항
							scope.color = '#006D9D';
							scope.vehicleTypename = '공항철도';
						} else if(scope.metroLine == "B"){
							//분당
							scope.color = '#E0A134';
							scope.vehicleTypename = '분당선';
						} else if(scope.metroLine == "G"){
							//경춘
							scope.color = '#2ABFD0';
							scope.vehicleTypename = '경춘선';
						} else if(scope.metroLine == "I"){
							//인천
							scope.color = '#6E98BB';
							scope.vehicleTypename = '인천 1호선';
						} else if(scope.metroLine == "K"){
							//경의선
							scope.color = '#72C7A6';
							scope.vehicleTypename = '경의선';
						} else if(scope.metroLine == "S"){
							//신분당
							scope.color = '#BB1833';
							scope.vehicleTypename = '신분당선';
						} else if(scope.metroLine == "SU"){
							//SU 수인선
							scope.color = '#E0A134';
							scope.vehicleTypename = '수인선';
						}
					} else if(scope.metroareaName == "부산"){
						if(scope.metroLine == "1"){
							scope.color = '#F06A00';
							scope.vehicleTypename = '부산 1호선';
						} else if(scope.metroLine == "2"){
							scope.color = '#81BF48';
							scope.vehicleTypename = '부산 2호선';
						} else if(scope.metroLine == "3"){
							scope.color = '#BB8C00';
							scope.vehicleTypename = '부산 3호선';
						} else if(scope.metroLine == "4"){
							scope.color = '#217DCB';
							scope.vehicleTypename = '부산 4호선';
						} else if(scope.metroLine == "K"){
							//K 경전철
							scope.color = '#8652A1';
							scope.vehicleTypename = '부산 경전철';
						}
					} else if(scope.metroareaName == "대구"){
						if(scope.metroareaName == "1"){
							scope.color = '#D93F5C';
							scope.vehicleTypename = '대구 1호선';
						} else if(scope.metroareaName == "2"){
							scope.color = '#00AA80';
							scope.vehicleTypename = '대구 2호선';
						} else if(scope.metroareaName == "3"){
							scope.color = '#FFB100';
							scope.vehicleTypename = '대구 3호선';
						}
					} else if(scope.metroareaName == "대전"){
						//대전은 1호선 1개
						scope.color = '#007448';
						scope.vehicleTypename = '대전 1호선';
					} else if(scope.metroareaName == "광주"){
						//광주도 1호선 1개
						scope.color = '#009088';
						scope.vehicleTypename = '광주 1호선';
					}
				} else if(scope.vehicleFlag == 'B'){
					//일반 버스
					if(scope.busrouteType == "1"){
						//공항
						scope.color = "#BF3BE8";
						scope.vehicleTypename = '공항버스';
					} else if(scope.busrouteType == "2"){
						//마을
						scope.color = "#5FD06E";
						scope.vehicleTypename = '마을버스';
					} else if(scope.busrouteType == "3"){
						//간선
						scope.color = "#1F5BFF";
						scope.vehicleTypename = '간선버스';
					} else if(scope.busrouteType == "4"){
						//지선
						scope.color = "#08DB32";
						scope.vehicleTypename = '지선버스';
					} else if(scope.busrouteType == "5"){
						//순환
						scope.color = "#E8A612";
						scope.vehicleTypename = '순환버스';
					} else if(scope.busrouteType == "6"){
						//광역
						scope.color = "#FF302F";
						scope.vehicleTypename = '광역버스';
					} else if(scope.busrouteType == "7"){
						//급행
						scope.color = "#FF302F";
						scope.vehicleTypename = '급행버스';
					} else if(scope.busrouteType == "8"){
						//경기
						scope.color = "#2CB5A3";
						scope.vehicleTypename = '경기버스';
					} else if(scope.busrouteType == "9"){
						//인천
						scope.color = "#4DACEB";
						scope.vehicleTypename = '인천버스';
					} else if(scope.busrouteType == "10"){
						//일반
						scope.color = "#77AB2C";
						scope.vehicleTypename = '일반버스';
					} else if(scope.busrouteType == "11"){
						//직행
						scope.color = "#FF302F";
						scope.vehicleTypename = '직행버스';
					} else if(scope.busrouteType == "12"){
						//좌석
						scope.color = "#FF302F";
						scope.vehicleTypename = '좌석버스';
					} else if(scope.busrouteType == "13"){
						//시외
						scope.color = "#1F5BFF";
						scope.vehicleTypename = '시외버스';
					} else if(scope.busrouteType == "14"){
						//심야
						scope.color = "#A09D9D";
						scope.vehicleTypename = '심야버스';
					} else if(scope.busrouteType == "15"){
						//첨단
						scope.color = "#BF3BE8";
						scope.vehicleTypename = '첨단버스';
					}

				}
				else if(scope.vehicleFlag == "T"){
					//기차
					if(scope.trainType == "KTX"){
						scope.color = "cornflowerblue";
						scope.vehicleTypename = 'KTX';
					} else if(scope.trainType == "ITX-청춘"){
						scope.color = "#13B4DE";
						scope.vehicleTypename = 'ITX-청춘';
					} else if(scope.trainType == "새마을"){
						scope.color = "#4E9E5C";
						scope.vehicleTypename = '새마을';
					} else if(scope.trainType == "무궁화"){
						scope.color = "tomato";
						scope.vehicleTypename = '무궁화';
					} else if(scope.trainType == "누리로"){
						scope.color = "#0F1011";
						scope.vehicleTypename = '누리로';
					}

				} else if(scope.vehicleFlag == "E"){
					//고속버스
					scope.color = "lightslategrey";
					scope.vehicleTypename = '고속버스';
				}

			}
		}
	});