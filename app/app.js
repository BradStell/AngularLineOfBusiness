/**
 * Created by Brad on 3/8/2016.
 */

(function () {
    "use strict";   // makes javascript throw some exceptions and catch common errors

    var app = angular.module("productManagement", ["common.services", "productResourceMock", "ui.router", "ui.mask", "ui.bootstrap"]);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            // Home
            .state("home", {
                url: "/",
                templateUrl: "app/welcomeView.html"
            })

            // Product List View
            .state("productList", {
                url: "/products",
                templateUrl: "app/products/productListView.html",
                controller: "ProductListController as vm"
            })

            // Product Detail
            .state("productDetail", {
                url: "/products/:productId",
                templateUrl: "app/products/productDetailView.html",
                controller: "ProductDetailController as vm",
                resolve: {
                    productResource: "productResource",

                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({productId: productId}).$promise;

                    }
                }
            })

            // Edit Product
            .state("productEdit", {
                abstract: true,
                url: "/products/edit/:productId",
                templateUrl: "app/products/productEditView.html",
                controller: "ProductEditController as vm",
                resolve: {
                    productResource: "productResource",

                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({productId: productId}).$promise;

                    }
                }
            })
            // Nested info view
            .state("productEdit.info", {
                url: "/info",
                templateUrl: "app/products/productEditInfoView.html"
            })
            // Nested price view
            .state("productEdit.price", {
                url: "/price",
                templateUrl: "app/products/productEditPriceView.html"
            })
            // Nested tags view
            .state("productEdit.tags", {
                url: "/tags",
                templateUrl: "app/products/productEditTagsView.html"
            });
    }]);
})();


