var tmpApp = angular.module('tmpApp',[]);

tmpApp.controller('TmpCtrl', ['$scope', function($scope){
	var vm = $scope;
	function defineItems(){
		vm.item = Object();
		vm.item.item = '';
		vm.item.ingredients = Array();
		vm.item.tool = 'None';
		vm.item.bench = 'None';
	}
	defineItems();

	vm.list = Array();
	vm.pushItem = function(){
		if((vm.item.item != null) && (vm.item.item != '')){
			for(var i = 0; i<vm.item.ingredients.length;i++){
				if(vm.item.ingredients[i].name == ""){
					console.log("Pos "+i);
					vm.item.ingredients.splice(i,1);
				}
			}
			vm.list.push(vm.item);
			defineItems();
		}
	}
	vm.flushList = function(){
		vm.list = Array();
	}
}]);
