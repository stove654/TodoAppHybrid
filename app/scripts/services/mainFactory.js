'use strict';

/**
 * @ngdoc service
 * @name resAdminApp.MainFactory
 * @description
 * # MainFactory
 * Factory in the resAdminApp.
 */
angular.module('todoAppHybridApp')
  .factory('MainFactory', function (AppConfig, $http, localStorageService) {

    var api = {};

    api.getFoods = function () {
      return $http.get(AppConfig.baseUrl + 'api/foods/all-foods').then(function(data) {
        localStorageService.set('foods', data.data.data)
      });
    };

    return api;
  });
