var http = require("http");
var Data = ('Hello world');
http.createServer(function(req,res){
    res.writeHead[200,{"content-type":"text/html"}];
    res.end(Data);
})
.listen(500); 