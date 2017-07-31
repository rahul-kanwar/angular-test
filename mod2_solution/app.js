(
  function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
            .controller('ToBuyController', ToBuyController)
            .controller('AlreadyBoughtController', AlreadyBoughtController)
            .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var list = this;

  list.toBuyList = ShoppingListCheckOffService.getBuyItems();
  list.purchased = function(itemIndex){
    ShoppingListCheckOffService.purchased(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var list = this;

  list.toBoughtList = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
    var service = this;
    var boughtItems = [];
    var buyItems = [
          {
          name : "cookies",
          quantity : 10
          },
          {
          name : "chips",
          quantity : 2
          },
          {
          name : "donuts",
          quantity : 6
          },
          {
          name : "bagels",
          quantity : 4
          },
          {
          name : "candies",
          quantity : 20
          }
    ];

    service.purchased = function(itemIndex){
      boughtItems.push(buyItems[itemIndex]);
      buyItems.splice(itemIndex, 1);
    };

    service.getBuyItems = function(){
      return buyItems;
    };

    service.getBoughtItems = function(){
      return boughtItems;
    };
}
  })();
