describe('Controller: ProductListController', function() {

    var ProductListController, $httpBackend;

    beforeEach(module('productManagement'));

    beforeEach(inject(function($controller, _$httpBackend_) {
        ProductListController = $controller('ProductListController', {});
        $httpBackend = _$httpBackend_;
    }));

    // it ('products should really be defined', function() {
    //     $httpBackend.flush();
    //     console.log(ProductListController.products);
    //     expect(ProductListController.products[0].productId).toBe(1);
    // });

    it ('products ', function() {
        $httpBackend.expectGET('/api/products').respond([{'productId': 13}]);
        $httpBackend.flush();
        console.log('data = ' + JSON.stringify(ProductListController.products));
        expect(ProductListController.products[0].productId).toBe(13);
    });
});
