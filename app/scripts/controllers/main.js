'use strict';

/**
 * @ngdoc function
 * @name todoAppHybridApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoAppHybridApp
 */
angular.module('todoAppHybridApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
