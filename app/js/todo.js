(function() {
  this.Todo = angular.module("app", []);

  angular.module('app').controller('TodoCtrl', [
    '$scope', 'DuduService', function($scope, DuduService) {
      $scope.todos = [
        {
          text: "learn angular",
          done: true
        }, {
          text: "build an angular app",
          done: false
        }
      ];
      $scope.addTodo = function() {
        $scope.todos.push({
          text: $scope.todoText,
          done: false
        });
        $scope.todoText = "";
        return alert(DuduService.tata());
      };
      $scope.remaining = function() {
        var count;
        count = 0;
        angular.forEach($scope.todos, function(todo) {
          return count += (todo.done ? 0 : 1);
        });
        return count;
      };
      return $scope.archive = function() {
        var oldTodos;
        oldTodos = $scope.todos;
        $scope.todos = [];
        return angular.forEach(oldTodos, function(todo) {
          if (!todo.done) {
            return $scope.todos.push(todo);
          }
        });
      };
    }
  ]);

}).call(this);
