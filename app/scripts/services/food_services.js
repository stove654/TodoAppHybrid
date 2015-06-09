'use strict';

/**
 * @ngdoc service
 * @name resAdminApp.login
 * @description
 * # login
 * Factory in the resAdminApp.
 */
angular.module('todoAppHybridApp')
  .service('FoodService', function () {

    this.subTotalFood = function (item) {
      item.price = parseFloat(item.price);
      var optionPrice = angular.copy(item.price);
      angular.forEach(item.options, function(value, key) {
        if (value.selected) {
          value.price = parseFloat(value.price);
          optionPrice += value.price;
        }
      });
      angular.forEach(item.discounts, function(value, key) {
        if (value.selected) {
          value.amount = parseFloat(value.amount);
          optionPrice += value.amount;
        }
      });
      item.subTotal = optionPrice * item.quantity;
    }
  });
