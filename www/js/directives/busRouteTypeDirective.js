/**
 * Created by parkbeomsoo on 2016. 3. 15..
 */

angular.module('everbus.directives')
  .directive('busRouteTypeDirective',function(){
    return {
      restrict: 'AE',
      scope: {
        route_type: '@routeType'
      },
      link: function (scope, element, attributes, controller) {

        if(scope.route_type === undefined || scope.route_type=='') {
          return;
        }else{
          scope.route_type = parseInt(scope.route_type);
          element.addClass('bus_type_'+scope.route_type);

          var typenm = ['공항','마을','간선','지선','순환','광역','급행','경기','인천','일반','직행','좌석','시외','심야','첨단'];
          element.append('&nbsp<span> ('+typenm[scope.route_type]+') </span>');
        }
      }
    }
  });
