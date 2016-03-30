/**
 * Created by Brad on 3/9/2016.
 */

(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductListController", ["productResource", ProductListController]);

    function ProductListController(productResource) {
        var vm = this;

        productResource.query(function(data) {
            vm.products = data;
        });

        vm.showImage = false;

        vm.whatever = function() {
            return 'returning';
        }

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }
    }
})();
