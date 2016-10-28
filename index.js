var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// the public directory contains the "index.html" file
app.use(express.static(__dirname + "/public"));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
