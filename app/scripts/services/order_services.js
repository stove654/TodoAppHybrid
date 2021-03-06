'use strict';

/**
 * @ngdoc service
 * @name resAdminApp.login
 * @description
 * # login
 * Factory in the resAdminApp.
 */
angular.module('todoAppHybridApp')
  .service('OrderService', function () {
    var order = {
      items: [],
      discounts: [],
      taxes: [],
      total: 0
    };


    this.updateItems = function (item) {
      order.items.push(item);
    };

    this.getOrder = function () {
      return order;
    };

    this.clearOrder = function () {
      order = {
        items: [],
        discounts: [],
        taxes: [],
        total: 0
      };
    };

  });
