/**
 * Created by parkbeomsoo on 2016. 3. 8..
 */
angular.module('everbus.services')
  .factory('selectedAreaService',[
    '$http',
    '$window',
    '$q',
    function($http, $window, $q){

    var selected_area_code_arr = [];

    var read_con = false;

    return {

      init_selected_area_list : function(){
        read_con = true;

        var defer = $q.defer();
        if($window.localStorage.selected_area_list == undefined){
          // Obj not exists, data bind.
          // JSON 내 기본데이터 가져오기.
          $http.get('data/region_modi.json')
            .success(function (data) {
              console.log(data);
              $window.localStorage.selected_area_list = angular.toJson(data);
              defer.resolve();
            })
            .error(function (error) {
              defer.reject(error);
            });

        }else {
          defer.resolve();
        }
        return defer.promise;
      },

      check_selected_area_list : function(){
        return read_con;
      },

      set_selected_area_list : function(selected_area_list){
        // 저장버튼 생성시, 추가하기.
        $window.localStorage.selected_area_list = angular.toJson(selected_area_list);

      },

      get_selected_area_list : function(){
        return JSON.parse($window.localStorage.selected_area_list);
      },

      set_areacd_arr : function(){
        selected_area_code_arr = [];

        var selected_area_list = JSON.parse($window.localStorage.selected_area_list);
        for(var x in selected_area_list){
          for(var y in selected_area_list[x].data){

            if(selected_area_list[x].data[y].checked){
              selected_area_code_arr.push(selected_area_list[x].data[y].regioncode);
            }
          }
        }
        console.log(selected_area_code_arr);
        $window.localStorage.selected_area_code_arr = selected_area_code_arr;
      },

      get_areacd_arr : function(){
        if(selected_area_code_arr.length==0){
          selected_area_code_arr = JSON.parse($window.localStorage.selected_area_list);
        }
        return selected_area_code_arr;
      }
    }
  }]);
