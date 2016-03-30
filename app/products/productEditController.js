/**
 * Created by User on 3/10/2016.
 */
(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductEditController", ["product", "$state", ProductEditController]);

    function ProductEditController(product, $state) {
        var vm = this;

        vm.product = product;

        if (vm.product && vm.product.productId) {
            vm.title = "Edit: " + vm.product.productName;
        } else {
            vm.title = "New Product";
        }

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function(isValid) {
            if (isValid) {
                vm.product.$save(function (data) {
                    toastr.success("Save successful");
                });
            } else {
                //alert("Please correct the validation errors first.");
                toastr.error("Please fix the validation errors first.");
            }
        };

        vm.cancel = function() {
            $state.go('productList');
        };

        vm.addTags = function (tags) {
            if (tags) {
                var array = tags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                vm.newTags = "";
            } else {
                alert("Please enter one or more tags separated by commas");
            }
        }

        vm.removeTag = function (idx) {
            var index = vm.product.tags.indexOf(idx);
            vm.product.tags.splice(index, 1);
        }
    }
})();
