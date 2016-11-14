(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	this.items = ShoppingListCheckOffService.getToBuyItems();

	this.buyItem = function(itemIndex) {
		ShoppingListCheckOffService.buy(itemIndex);
	}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	this.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
	var toBuyItems = [{name: "cookies", quantity: 10}, 
										 {name: "cakes", quantity: 5},
										 {name: "carrots", quantity: 2},
										 {name: "cabbages", quantity: 20},
										 {name: "candles", quantity: 100}];
	var boughtItems = [];
	this.getToBuyItems = function () {
		return toBuyItems;
	}

	this.getBoughtItems = function () {
		return boughtItems;
	}

	this.buy = function(itemIndex) {
		boughtItems.push(toBuyItems[itemIndex]);
		toBuyItems.splice(itemIndex, 1);
	}
}
})();