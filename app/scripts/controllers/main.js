'use strict';

/**
 * @ngdoc function
 * @name todoAppHybridApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoAppHybridApp
 */
angular.module('todoAppHybridApp')
  .controller('MainCtrl', function ($scope, MainFactory, localStorageService) {

    function _init() {
      MainFactory.getFoods();
    }
    _init();
  });
