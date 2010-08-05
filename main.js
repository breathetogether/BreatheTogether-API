var http = require('http');
var breathe = [{c:1, i:2500, hi:2500, o:3750, ho:1250}];
var body = JSON.stringify(breathe);

http.createServer(function(req, res){

  var dt = new Date();
  var ms_since_cycle = ((dt.getSeconds() % 10) * 1000) + dt.getMilliseconds();
  var ms_until_cycle = 10000 - ms_since_cycle;

  setTimeout(function(){

    res.writeHead(200, {'Content-Type': 'text/javascript',
                        'Access-Control-Allow-Origin': '*',
                        'Content-Length': body.length});
    res.end(body);

  }, ms_until_cycle);



}).listen(80, "184.106.206.235");

console.log("Server running! " + body);