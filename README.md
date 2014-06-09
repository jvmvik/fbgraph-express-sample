FBGraph Express Sample
=======

Facebook Graph integration with Express / Node.JS + AngularJS + JavaScript Facebook SDK.

Goals
----
This example demonstrates the usage of fbgraph module.
The authentification is based on the Facebook JavaScript SDK which deliver a robust & very easy to use solution.
To run this application you must install node.js 0.10+ and then follow the instruction.

Steps:
------
## Initialization
 - cd .
 - npm install
 - chmod +x start.sh
 - Get a facebook application keys
 - Set the application keys in the main javascript file
  - Edit: public/js/app.js 
  - Replace: app-id by your the application public id, e.g.:
     appId      : 'your-app-id',
 
## Run the application
 - ./start.sh
 - open http://localhost:3000

Front end
-------

When the page is loaded, the main controller starts in AngularJS.
This controller is going to attempt a connection to facebook with JavaScript Facebook SDK.
After a successfull connection, the frontend requests the user's albums. The request will contain the accessToken 
obtain during the authentication. Then, the backend will set the accessToken in the graph provided by fbgraph module.
Then, a secure request will be executed against Facebook, then result will be returned in the response.
After that, the angularjs controller will just update the list of albums.

@jvmvik
2014
