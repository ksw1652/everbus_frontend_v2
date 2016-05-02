// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('everbus', [
    'ionic',
    'everbus.controllers',
    'everbus.services',
    'everbus.directives',
    'uiGmapgoogle-maps',
    'everbus.routes',
    'vAccordion',
    'ionMdInput',
    'ngCordova',
    'uiGmapgoogle-maps',
    'ionic-pullup',
    'ngStorage'
])
    .run([
        '$ionicPlatform',
        '$cordovaStatusbar',
        '$ionicHistory',
        '$state',
        function($ionicPlatform, $cordovaStatusbar, $ionicHistory, $state) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if(window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if(window.StatusBar) {
                    $cordovaStatusbar.overlaysWebView(true);
                    $cordovaStatusbar.styleHex('#FF565A');
                }

                /**
                * admob
                */

                // select the right Ad Id according to platform
                var admobid = {};
                if( /(android)/i.test(navigator.userAgent) ) { // for android & amazon-fireos
                    admobid = {
                        banner: 'ca-app-pub-3205973680596412/3551955681', // or DFP format "/6253334/dfp_example_ad"
                        interstitial: ''
                    };
                } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
                    admobid = {
                        banner: 'ca-app-pub-3205973680596412/1024501282', // or DFP format "/6253334/dfp_example_ad"
                        interstitial: ''
                    };
                } else { // for windows phone
                    admobid = {
                        banner: '', // or DFP format "/6253334/dfp_example_ad"
                        interstitial: ''
                    };
                }

                if(AdMob) AdMob.createBanner( {
                    adId: admobid.banner,
                    position: AdMob.AD_POSITION.BOTTOM_CENTER,
                    autoShow: true } );
            });

            $ionicPlatform.registerBackButtonAction(function (event) {
                    if($state.current.name=="tabs.bookmark" || $state.current.name=="tabs.routesearch" ||
                        $state.current.name=="tabs.stateionsearch" ||$state.current.name=="tabs.placesearch" ||
                        $state.current.name=="tabs.shareplace"){

                        navigator.app.exitApp();

                    } else if($state.current.name=="sidemenu_notice" ||$state.current.name=="sidemenu_selectregion" ||
                        $state.current.name=="sidemenu_versioncheck" ||$state.current.name=="sidemenu_removeappdata"){

                        $state.go('tabs.bookmark');

                    } else {
                        navigator.app.backHistory();
                    }
            }, 100);


        }])

angular.module('everbus.controllers', []);

angular.module('everbus.services', []);

angular.module('everbus.directives', []);
