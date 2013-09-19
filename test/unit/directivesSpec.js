(function() {
  describe("appService", function() {
    beforeEach(module('app'));
    beforeEach(function() {
      return true;
    });
    return it('should get people', inject([
      'duduService', function(duduService) {
        expect(true).toBe(true);
        expect(duduService.tata()).toBe('imim');
        return console.log('duie');
      }
    ]));
  });

}).call(this);
