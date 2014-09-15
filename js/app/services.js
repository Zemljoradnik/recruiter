var recruiterServices = angular.module('recruiterServices', ['ngResource']);

recruiterServices.factory('Position', ['$resource',
  function($resource){
    return $resource('resources/:position.json', {}, {
      query: {method:'GET', params:{position:'positions'}, isArray:true}
    });
  }
]);
