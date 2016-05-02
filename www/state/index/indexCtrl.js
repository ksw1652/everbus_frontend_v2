angular.module('everbus.controllers')
	.controller('indexCtrl',[
		'$scope',
		'$ionicSideMenuDelegate',
		'$cordovaEmailComposer',
		function($scope, $ionicSideMenuDelegate, $cordovaEmailComposer) {
			$scope.showRightMenu = function () {
				$ionicSideMenuDelegate.toggleRight();
			};

			$scope.sendbugmail = function(){
				var email = {
					to: 'makeyourif@gmail.com',
					subject: '오류 및 문의메일 입니다.',
					body: '여러분의 메일 한 통이 저희 아이에프에게는 소중한 자산이 됩니다.<br> 감사합니다.<br><br>',
					isHtml: true
				};

				$cordovaEmailComposer.open(email).then(null, function () {

				});
			}
		}]);
