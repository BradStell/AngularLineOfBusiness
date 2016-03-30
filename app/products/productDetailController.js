/**
 * Created by User on 3/9/2016.
 */
(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductDetailController", ["product", ProductDetailController]);

    function ProductDetailController(product) {
        var vm = this;

        vm.product = product;

        vm.title = "Product Detail: " + vm.product.productName;

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    }
})();