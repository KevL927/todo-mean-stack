'use strict';

var angular = require('angular');

angular.module('todoListApp')
  .controller('mainCtrl', function($scope, dataService) {

    dataService.getTodos(function(response) {
      var todos = response.data.todo;
      $scope.todos = todos;
    });

    $scope.addTodo = function () {
      var todo = {name: "New entry"}
      $scope.todos.unshift(todo);
    };

    $scope.deleteTodo = function (todo, index) {
      dataService.deleteTodo(todo);
      $scope.todos.splice(index, 1);
    };
    
    $scope.saveTodos = function() {
      var filteredTodos = $scope.todos.filter(function(todo) {
        if(todo.edited) {
          return todo;
        };
      });
      dataService.saveTodos(filteredTodos);
    };
  })