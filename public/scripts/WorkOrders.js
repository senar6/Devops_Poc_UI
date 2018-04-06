var app = angular.module('WorkOrders', []);

app.controller('woCtrl', function ($scope, $http) {
    $scope.viewAcknowledgement = function () {
        $("#ackView").submit();
    }

});