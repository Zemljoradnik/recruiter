var recruiter = angular.module('recruiter', [
  'ngRoute',
  'recruiterControllers',
  // 'recruiterFilters',
  'recruiterServices'
]);

recruiter.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/positions', {
        templateUrl: 'partials/positions.html',
        controller: 'positionsControler'
      }).
	  when('/candidates', {
        templateUrl: 'partials/candidates.html',
        controller: 'candidatesControler'
      }).
	  when('/interviews', {
        templateUrl: 'partials/interviews.html',
        controller: 'interviewsControler'
      }).
	  when('/view', {
        templateUrl: 'partials/view.html',
        controller: 'viewControler'
      }).
      otherwise({
        redirectTo: '/positions'
      });
  }
]);
