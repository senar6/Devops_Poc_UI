
var app = angular.module('Login', []);
app.controller('loginCtrl', function($scope, $http) {
    $scope.btnLoginclick = function () {
		var url = 'http://172.25.74.113:8080/SpringMVCHibernate/authenticate'
		var param = {};
        param.user = $('#username').val();
		param.password = $('#password').val();
		var login_param = JSON.stringify(param);		//Parameter to be sent for Authentication
		
		$http.post(url,login_param).
		then(function mySuccess(response) {
		    $scope.temp = angular.fromJson(response.data);
		    if ($scope.temp.success) {
		        $("#validateUserPswd").hide();
		        $("#jsonWO").val(JSON.stringify(response.data));
		        $("#WOform").submit();
		    }
		    else {
		        $("#validateUserPswd").show();
		    }
		    
		}, function myError(response) {
                    $('.hcf-div-imp').show();
		    console.log(response.statusText);
		});
    }
});
