angular.module('everbus.routes', ['jett.ionic.filter.bar'])
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });

        $ionicConfigProvider.tabs.position('top');

        $stateProvider
            /**
             * sidemenus 정의
             */

            .state('sidemenu_notice', {
                url: '/sidemenu_notice',
                templateUrl: 'state/sidemenus/sidemenu_notice.html',
                controller: 'sidemenusCtrl'
            })

            .state('sidemenu_selectregion', {
                url: '/sidemenu_selectregion',
                templateUrl: 'state/sidemenus/sidemenu_selectregion.html',
                controller: 'sidemenusCtrl'
            })

            .state('sidemenu_versioncheck', {
                url: '/sidemenu_versioncheck',
                templateUrl: 'state/sidemenus/sidemenu_versioncheck.html',
                controller: 'sidemenusCtrl'
            })

            .state('sidemenu_removeappdata', {
                url: '/sidemenu_removeappdata',
                templateUrl: 'state/sidemenus/sidemenu_removeappdata.html',
                controller: 'sidemenusCtrl'
            })


            /**
             * tabs 정의
             */
            .state('tabs', {
                url: '/tabs',
                abstract:true,
                templateUrl: 'state/tabs/tabsTemplate.html',
                controller:'tabsCtrl'

            })

            .state('tabs.bookmark', {
                url: '/bookmark',
                views: {
                    'bookmark': {
                        templateUrl: 'state/bookmark/bookmark.html',
                        controller: 'bookmarkCtrl'
                    }
                }
            })

            .state('tabs.routesearch', {
                url: '/routesearch',
                views: {
                    'route': {
                        templateUrl: 'state/routesearch/routesearch.html',
                        controller: 'routesearchCtrl'
                    }
                }
            })

            .state('tabs.routedetail', {
                url: '/routedetail',
                views: {
                    'route': {
                        templateUrl: 'state/routedetail/routedetail.html',
                        controller: 'routedetailCtrl'
                    }
                }
            })
            .state('tabs.stationsearch', {
                url: '/stationsearch',
                views: {
                    'station': {
                        templateUrl: 'state/stationsearch/stationsearch.html',
                        controller: 'stationsearchCtrl'
                    }
                }
            })
            .state('tabs.stationdetail', {
                url: '/stationdetail',
                views: {
                    'station': {
                        templateUrl: 'state/stationdetail/stationdetail.html',
                        controller: 'stationdetailCtrl'
                    }
                }
            })
            .state('tabs.placesearch', {
                url: '/placesearch',
                views: {
                    'place': {
                        templateUrl: 'state/placesearch/placesearch.html',
                        controller: 'placesearchCtrl'
                    }
                }
            })
            .state('tabs.placesearchresult', {
                url: '/placesearchresult',
                views: {
                    'place': {
                        templateUrl: 'state/placesearchresult/placesearchresult.html',
                        controller: 'placesearchresultCtrl'
                    }
                },
                resolve:{
                    placesearch_resultList : function(placesearchFactory, placelatlngFactory){
                        return placesearchFactory.place_search(placelatlngFactory.get_start_latlng(), placelatlngFactory.get_end_latlng()).then(function(data){
                            return data;
                        });
                    }
                }
            })
            .state('tabs.placedetail', {
                url: '/placedetail',
                views: {
                    'place': {
                        templateUrl: 'state/placedetail/placedetail.html',
                        controller: 'placedetailCtrl',
                    }
                },
                resolve: {
                    placedetail_obj: function(placedetailFactory) {
                        return placedetailFactory.getPlace_obj();
                    }
                }
            })
            .state('tabs.placedetailfullmap', {
                url: '/placedetailfullmap/:param',
                views: {
                    'place': {
                        templateUrl: 'state/placedetailfullmap/placedetailfullmap.html',
                        controller: 'placedetailfullmapCtrl'
                    }
                },
                resolve: {
                    placedetail_obj: function(placedetailFactory) {
                        return placedetailFactory.getPlace_obj();
                    }
                }
            })
            .state('tabs.shareplace', {
                url: '/shareplace',
                views: {
                    'share': {
                        templateUrl: 'state/shareplace/shareplace.html',
                        controller: 'shareplaceCtrl'
                    }
                }
            })
            .state('tabs.shareplacesearchquery', {
                url: '/shareplacesearchquery',
                views: {
                    'share': {
                        templateUrl: 'state/shareplacesearchquery/shareplacesearchquery.html',
                        controller: 'shareplacesearchqueryCtrl'
                    }
                }
            })
            .state('tabs.shareplacemarkonthemap', {
                url: '/shareplacemarkonthemap',
                params: {placeobj: null},
                views: {
                    'share': {
                        templateUrl: 'state/shareplacemarkonthemap/shareplacemarkonthemap.html',
                        controller: 'shareplacemarkonthemapCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/tabs/bookmark');
    });
