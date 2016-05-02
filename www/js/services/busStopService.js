/**
 * Created by parkbeomsoo on 2016. 3. 8..
 */
angular.module('everbus.services')
  .factory('busStopService',[
    '$http',
    '$q',
    '$window',
    function($http, $q, $window){
      var url = 'http://54.255.169.44:3000';
      var selected_stop_info = undefined;

      return {

        http_get_stop_nm_list : function(search_keyword_stopnm){
          var defer = $q.defer();

          var data = {
            STOPNM : search_keyword_stopnm,
            areaobject: $window.localStorage.selected_area_code_arr
          }
          $http({
            url : url + '/bus/stop/stopS',
            method : 'POST',
            data:  data
          })
            .success(function(data){
              var result = [];
              data = data[0];
              for(var i in data){
                data[i].STOPINFO = JSON.parse(data[i].STOPINFO);
                result.push({
                  divider : data[i].AREANM,
                  isDivider : true
                });
                result = result.concat(data[i].STOPINFO);
              }

              defer.resolve(result);
            })
            .error(function(err){
              defer.reject(err);
            });
          return defer.promise;
        },

        http_get_stop_detail : function(search_areacd, selected_item){
          var defer = $q.defer();

          var data = {
            AREACD : search_areacd+"",
            STOPID : selected_item.stopid || selected_item.STOPID,
            ARSID : selected_item.arsid || selected_item.ARSID,
            LAT : selected_item.lat || selected_item.LAT,
            LNG : selected_item.lng || selected_item.LNG
          };
          $http({
            url : url + '/bus/stop/stopD',
            method : 'POST',
            data:  data

          })
            .success(function(data){
              var result = {};
              data.stopdetailinfo[0][0].ROUTELIST = JSON.parse(data.stopdetailinfo[0][0].ROUTELIST);
              result.arround_info = data.stoparoundxy[0];
              result.stop_detail_info = data.stopdetailinfo[0][0];
              result.real_bus = data.arrive_bus;

              for(var i in result.stop_detail_info.ROUTELIST){

                for(var j in result.real_bus){

                  if(result.stop_detail_info.ROUTELIST[i].routeid==result.real_bus[j].routeid){
                    var index = result.real_bus[j].arrive_time.indexOf('[');
                    if(index == -1){

                      if(result.real_bus[j].arrive_time.replace(' ','')=='곧도착'){
                        result.stop_detail_info.ROUTELIST[i].real_time_info = {
                          arrive_time : result.real_bus[j].arrive_time,
                          pre_count : "0 번째 전 정류장"
                        }
                      }else{
                        result.stop_detail_info.ROUTELIST[i].real_time_info = {
                          arrive_time : result.real_bus[j].arrive_time,
                          pre_count : result.real_bus[j].prev_stop_count+"번째 전 정류장"
                        }
                      }
                    }else{

                      result.stop_detail_info.ROUTELIST[i].real_time_info = {
                        arrive_time : result.real_bus[j].arrive_time.substr(0,index),
                        pre_count : result.real_bus[j].arrive_time.substr(index+1).replace(']','')+" 정류장"
                      }
                    };
                    break;
                  }
                }
              }

              defer.resolve(result);
            })
            .error(function(err){
              defer.reject(err);
            });
          return defer.promise;
        },

        set_selected_stop_info : function(stop_info){
          selected_stop_info = stop_info;
        },

        get_selected_stop_info : function(){
          return selected_stop_info;
        },

        get_selected_stop_list_proto : function(){
          var defer = $q.defer();
          $http.get('/data/stop_list.json')
            .success(function(data){
              defer.resolve(data);
            })
            .error(function(data){
              defer.reject();
            });
          return defer.promise;
        }

      }
    }]);
