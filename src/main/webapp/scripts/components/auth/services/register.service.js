'use strict';

angular.module('secondwebappApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


