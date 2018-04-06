var app = angular.module('Acknowledge', []);

app.controller('ackCtrl', function ($scope, $http, $filter) {
    $scope.sendACK = function () {
        var url = "http://172.25.74.113:18080/SpringMVCHibernate/acknowledge"
        var param = {};
        param.user = $('#user').val();
        param.datetime = $filter('date')(new Date(), 'MM/dd/yyyy');
        var ack_param = JSON.stringify(param);
		console.log("URL:"+url);
		console.log("Param:"+ack_param);
		
        $http.post(url, ack_param).
		then(function mySuccess(response) {
		    $scope.temp = angular.fromJson(response.data);
		    if ($scope.temp.success) {
		        alert("Successfully Acknowledged")
		    }
		    else {
		        alert("Acknowledgement Failed... Please try again..!");
		    }

		}, function myError(response) {
		    console.log(response.statusText);
		});
    }
});