/**
 * Created by parkbeomsoo on 2016. 3. 8..
 */
angular.module('everbus.services')
    .factory('busRouteService',[
      '$http',
      '$q',
      '$window',
      function($http, $q, $window){
        var url = 'http://54.255.169.44:3000';
        var selected_route = {};

        return {

          http_get_route_nm_list : function(search_keyword_routenm){
            var defer = $q.defer();

            var data = {
              ROUTENM : search_keyword_routenm,
              areaobject: $window.localStorage.selected_area_code_arr
            };

            $http({
              url : url + '/bus/route/routeS',
              method : 'POST',
              data:  data
            })
                .success(function(data){
                  var result = [];
                  data = data[0];
                  for(var i in data){
                    data[i].ROUTEINFO = JSON.parse(data[i].ROUTEINFO);
                    result.push({
                      divider : data[i].AREANM,
                      isDivider : true
                    });
                    result = result.concat(data[i].ROUTEINFO);
                  }
                  //result = data;
                  defer.resolve(result);
                })
                .error(function(err){
                  defer.reject(err);
                });
            return defer.promise;
          },

          http_get_route_detail : function(search_areacd, search_keyword_routeid){
            var defer = $q.defer();

            var data = {
              ROUTEID : search_keyword_routeid,
              AREACD : search_areacd+""
            }

            $http({
              url : url + '/bus/route/routeD',
              method : 'POST',
              data:  data
            })
                .success(function(data){
                  var result = {};
                  data.routestop[0][0].STOPLIST = JSON.parse(data.routestop[0][0].STOPLIST);
                  result = data.routestop[0][0];
                  for(var i in data.location_bus){
                    var index = parseInt(data.location_bus[i]);
                    if(index<result.STOPLIST.length) result.STOPLIST[index].real_bus = true;
                  }
                  if(result.TRNSEQ ==null){
                    result.TRNSEQ = result.STOPLIST.length;
                    result.up_down_con = false;
                  }else{
                    result.up_down_con = true;
                  }
                  defer.resolve(result);
                })
                .error(function(err){
                  defer.reject(err);
                });
            return defer.promise;
          },

          set_selected_route : function(route_info){
            selected_route = route_info;
          },

          get_selected_route : function(){
            return selected_route;
          }
        }
      }]);
