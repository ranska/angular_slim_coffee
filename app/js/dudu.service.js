(function() {
  var DuduService;

  DuduService = (function() {
    function DuduService() {
      true;
    }

    DuduService.prototype.tata = function() {
      return 'imim';
    };

    return DuduService;

  })();

  this.Todo.service('duduService', [DuduService]);

}).call(this);
