'use strict';

angular.module('secondwebappApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
