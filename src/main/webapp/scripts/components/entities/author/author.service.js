'use strict';

angular.module('secondwebappApp')
    .factory('Author', function ($resource) {
        return $resource('api/authors/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    var birth_dateFrom = data.birth_date.split("-");
                    data.birth_date = new Date(new Date(birth_dateFrom[0], birth_dateFrom[1] - 1, birth_dateFrom[2]));
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
