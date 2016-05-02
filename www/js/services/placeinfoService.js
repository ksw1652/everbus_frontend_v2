angular.module('everbus.services')
    .factory('placeinfoService',[function(){
        /**
         * 유효성 체크를 위해 기본값을 초기화 해주어야 함
         */

        var place_data = {};
        place_data.check_value = false;
        /*place_data.description = undefined;
        place_data.address = undefined;*/
        place_data.location = {};

        return {
            set_place_data : function(getplaceinfo_data){
                place_data = getplaceinfo_data;
                console.log(place_data);
            },
            get_place_data : function(){
                return place_data;
            }
        }
    }]);
