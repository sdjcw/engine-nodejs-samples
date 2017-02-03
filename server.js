var fs = require('fs');
var phantomjs = require('phantomjs-prebuilt')
var program = phantomjs.exec('phantomjs-web.js')

program.stdout.pipe(process.stdout)
program.stderr.pipe(process.stderr)
program.on('exit', code => {
  console.log('exit', code);
})

require('http').createServer(function(req, res) {
  if (req.url !== '/') {
    res.statusCode = 404;
    return res.end();
  }

  fs.readFile('./screenshot.png', function(err, buffer) {
    if (err) {
      res.end('Not yet completed');
    } else {
      res.setHeader('Content-Type', 'image/png');
      res.end(buffer);
    }
  });
}).listen(3000);
