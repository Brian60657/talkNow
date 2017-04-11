angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'I Want', id: 1 },
    { title: 'I Feel', id: 2 },
    { title: 'My Activity', id: 3 },
    { title: 'My Routine', id: 4 },
    { title: 'Get Dressed', id: 5 }
    // { title: '', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.playlistSet = [
    [
      { task: 'Drink', picture: ' '},
      { task: 'Sandwich', picture: ' '},
      { task: 'Snack', picture: ' '}
    ],
    [
      { task: 'Happy', picture: ' '},
      { task: 'Sad', picture: ' '},
      { task: 'Angry', picture: ' '}
    ],
    [
      { task: 'Computer time', picture: ' '},
      { task: 'Arts & Crafts time', picture: ' '},
      { task: 'Module Time', picture: ' '}
    ],
    [
      { task: 'Going to Work', picture: ' '},
      { task: 'Leaving', picture: ' '},
      { task: 'Eating Lunch', picture: ' '}
    ],
    [
      { task: 'Underwear', picture: ' '},
      { task: 'Pants', picture: ' '},
      { task: 'Shirt', picture: ' '}
    ]

  ];
  $scope.id = $stateParams.playlistId;
});
