var httpServer = require('http').createServer(function(req, resp){
        console.log([req, resp]);
        resp.statusCode = 200;
        resp.setHeader('content-type', 'text/html');
        resp.write('hehe nodedev!');
        resp.end();
});
httpServer.listen(10086);
