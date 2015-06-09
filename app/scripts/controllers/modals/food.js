'use strict';

/**
 * @ngdoc function
 * @name todoAppHybridApp.controller:FoodCtrl
 * @description
 * # FoodCtrl
 * Controller of the todoAppHybridApp
 */
angular.module('todoAppHybridApp')
  .controller('FoodCtrl', function ($scope, FoodService, OrderService) {

    $scope.selectOption = function (item) {
      if (!item.selected) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      FoodService.subTotalFood($scope.food);
    };

    $scope.selectDiscount = function () {
      FoodService.subTotalFood($scope.food);
    };

    $scope.addQuantity = function () {
      $scope.food.quantity++;
      FoodService.subTotalFood($scope.food);
    };

    $scope.subQuantity = function () {
      if ($scope.food.quantity > 1) {
        $scope.food.quantity--;
        FoodService.subTotalFood($scope.food);
      }
    };

    $scope.closeModalFood = function () {
      $scope.modalFood.hide();
    };

    $scope.addFood = function () {
      OrderService.updateItems(angular.copy($scope.food))
      $scope.modalFood.hide();
    }

  });
