var app = angular.module('Application', []);
app.controller('ApplicationController', ['$scope','$http', function($scope, $http)
{

$scope.albums = [];
$scope.status = "Loading...";

FB.init({
  appId      : 'your-app-id',
  xfbml      : true,
  version    : 'v2.0'
});

FB.getLoginStatus(function(response)
{
  if (response.status === 'connected')
  {
    console.log('Logged in.');

    // Update facebook status
    $scope.$apply(function () {
       $scope.status = 'Connected';
    });
  
    // Show status
    $http
     .get('/albums', {params:{accessToken: response.authResponse.accessToken}})
	 .success(function(data)
      {
          $scope.albums = data;
	  })
     .error(function(data, status)
      {
  	   alert("Fail getting albums list..." + status);
	  });
  }
  else
  {
     $scope.$apply(function () {
       $scope.status = 'Not connected';
    });
    FB.login(function(){}, {scope: 'user_photos,user_videos,user_tagged_places'});
  }
});

}]);
