var recruiterControllers = angular.module('recruiterControllers', []);

recruiterControllers.controller('positionsControler', ['$scope', 'Position',
  function($scope, Position) {
    $scope.positions = Position.query();
    // $scope.orderProp = 'age';
  }
]);

recruiterControllers.controller('candidatesControler', ['$scope', '$routeParams', 'Position',
  function($scope, $routeParams, Position) {
    // $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      // $scope.mainImageUrl = phone.images[0];
    // });

    // $scope.setImage = function(imageUrl) {
      // $scope.mainImageUrl = imageUrl;
    // }
  }
]);
  
recruiterControllers.controller('interviewsControler', ['$scope',
  function($scope) {
	
  }
]);
  
recruiterControllers.controller('viewControler', ['$scope',
  function($scope) {
	
  }
]);
