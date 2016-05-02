angular.module('everbus.directives')
    .directive('locationSuggestion', function($ionicModal, LocationService, placelatlngFactory, placesearchinfoFactory){
        return {
            restrict: 'A',
            scope: {
                getplacedata: '=',
                getParam: '='

            },
            link: function(scope, element){
                scope.resultParam = undefined;

                scope.search = {};
                scope.search.suggestions = [];
                scope.search.query = "";
                $ionicModal.fromTemplateUrl('location.html', {
                    scope: scope,
                    focusFirstInput: true
                }).then(function(modal) {
                    scope.modal = modal;
                });
                element[0].addEventListener('focus', function(event) {
                    scope.open();
                });
                scope.$watch('search.query', function(newValue) {
                    if (newValue) {
                        LocationService.searchAddress(newValue).then(function(result) {
                            scope.search.error = null;
                            scope.search.suggestions = result;

                        }, function(status){
                            scope.search.error = "There was an error :( " + status;
                        });
                    };
                    scope.open = function() {
                        scope.modal.show();
                    };
                    scope.close = function() {
                        scope.modal.hide();
                    };
                    scope.choosePlace = function(place) {
                        LocationService.getDetails(place.place_id).then(function(location) {

                            scope.getplacedata = {};
                            scope.getplacedata.place = place;
                            scope.getplacedata.location = location;

                            /**
                             * 구글 place 검색을 통해 선택한 결과를 placesearchCtrl에서 사용하는 것이 불가능
                             * 따라서 파라미터를 하나 추가하여 출발지/도착지를 구분한뒤 서비스에서 싱글톤으로 유지
                             */
                            if(scope.getParam == 'start'){
                                var start_latlng = scope.getplacedata.location.geometry.location;
                                placelatlngFactory.set_start_latlng(start_latlng);

                                console.log(start_latlng);

                                placesearchinfoFactory.set_start_name(location.name);
                            } else {
                                var end_latlng = scope.getplacedata.location.geometry.location;
                                placelatlngFactory.set_end_latlng(end_latlng);

                                placesearchinfoFactory.set_end_name(location.name);
                            }

                            scope.close();
                        });
                    };
                });


            }
        }
    });