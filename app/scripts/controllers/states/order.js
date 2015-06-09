'use strict';

/**
 * @ngdoc function
 * @name todoAppHybridApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the todoAppHybridApp
 */
angular.module('todoAppHybridApp')
  .controller('OrderCtrl', function ($scope, OrderService) {

    $scope.order = OrderService.getOrder();
    console.log($scope.order);
  });
