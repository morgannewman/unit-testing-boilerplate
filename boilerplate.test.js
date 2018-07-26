+function() {
  'use strict';

  describe('Main heading', function() {

    describe('Test Category here', function() {
      it('should have a name for this test', function() {
        expect(true).to.be.true;
      });
      it('should have a name for this test', function() {
        expect(false).to.be.true;
      });
    });

    describe('Another test category here', function() {
      it('should probably use this framework to write real tests', function() {
        expect(true).to.be.true;
      });
    });
  });
}();
