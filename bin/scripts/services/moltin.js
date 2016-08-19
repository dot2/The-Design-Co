'use strict';

/**
 * @ngdoc service
 * @name testStoreApp.moltin
 * @description
 * # moltin
 * Service in the testStoreApp.
 */
angular.module('storeApp.API', [])
  .factory('MoltinAuth', function ($q) {
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: 'q64QTspvNeOAlD1T0VEb3wMVDuItS8MYSooVww6SIK'});
    moltin.Authenticate(function(){
      deferred.resolve(moltin);
    });
    return deferred.promise;
  });
