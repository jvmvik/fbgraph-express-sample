var express = require('express');
var router = express.Router();

var graph = require('fbgraph');

/*
 Return list of albums
*/
router.get('/', function(req, res) 
{
 try
 {
  console.log(req.query);
  graph.setAccessToken(req.query.accessToken);
  
  graph.get("me/albums", function(err, data)
   {
     if(err)
     { 
      console.log(err);
      res.json(401, err);
     }
     console.log("FB: " + data);
     res.json(200, data.data);
   });
 }
 catch(e)
 {
   console.log("Error: " + e);
 }
  //var albums = [{title:'Album1'}, {title: 'Album 2'}];
  //res.json(200, albums);
});

module.exports = router;
