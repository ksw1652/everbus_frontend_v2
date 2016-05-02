angular.module('everbus.controllers')
    .controller('shareplacesearchqueryCtrl',[
        '$scope',
        'LocationService',
        '$state',
        'placeinfoService',
        function($scope, LocationService, $state, placeinfoService) {
            /**
             * google place search part
             */

            $scope.searchplace = {};
            $scope.searchplace.suggestions = [];
            $scope.searchplace.query = "";

            $scope.$watch('searchplace.query', function(newValue) {
                if (newValue) {
                    LocationService.searchAddress(newValue).then(function(result) {
                        $scope.searchplace.error = null;
                        $scope.searchplace.suggestions = result;

                    }, function(status){
                        $scope.searchplace.error = "There was an error :( " + status;
                    });
                };

                $scope.choosePlace = function(getplace) {
                    LocationService.getDetails(getplace.place_id).then(function(getlocation) {
                        /*console.log(getplace);
                         console.log(getlocation);*/

                        /**
                         * 전달 데이터 (좌표, 체크값)
                         */

                        $state.go('tabs.shareplacemarkonthemap', {placeobj:{
                            /*description : getplace.description,
                             address : getlocation.formatted_address,*/
                            location : getlocation.geometry
                        }});
                    });
                };
            });
        }]);
