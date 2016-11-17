'use strict'

angular.module('todoListApp')
  .service('dataService', function($http) {
    this.getTodos = function(callback) {
      $http.get('mock/todos.json')
      .then(callback)
    };

    this.deleteTodo = function(todo) {
    };

    this.saveTodos = function(todo) {
    };

  });
