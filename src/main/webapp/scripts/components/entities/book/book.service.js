'use strict';

angular.module('secondwebappApp')
    .factory('Book', function ($resource) {
        return $resource('api/books/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    var publication_dateFrom = data.publication_date.split("-");
                    data.publication_date = new Date(new Date(publication_dateFrom[0], publication_dateFrom[1] - 1, publication_dateFrom[2]));
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
