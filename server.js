var Server = require('./lib/server');

process.addListener('uncaughtException', function (err, stack) {
  console.log('------------------------');
  console.log('Exception: ' + err);
  console.log(err.stack);
  console.log('------------------------');
});

new Server({
  url: "http://stream.pedromtavares.com:10000",
  port: 80,
  host: '173.255.227.12',
  reconnectTime: 60 // in seconds
});
