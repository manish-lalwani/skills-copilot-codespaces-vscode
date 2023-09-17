// create a web server that can listen to requests and respond with HTML or JSON depending on the URL.
server = http.createServer(requestHandler);
server.listen(port, function() {
  console.log('Listening on port ' + port);
});
requestHandler = function (req, res) {
  var parsedUrl = url.parse(req.url);
  var path = parsedUrl.pathname;
  var method = req.method;
  if (method === 'GET' && path === '/') {
    var html = '<html><body><h1>Hello, World!</h1></body></html>';
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': html.length
    });
    res.end(html);
  } else if (method === 'GET' && path === '/comments') {
    var comments = [