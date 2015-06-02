//var EventLogger = require('node-windows').EventLogger;
//var log = new EventLogger('Hello World');
var rest = require('unirest');
var fs = require('fs');
//log.info('Service for updating monitors working');

var a, callRest, running, timeoutTime, writeFile;

running = false;

timeoutTime = 50000;

a = function(timeout) {
  var interval;
  if (!running) {
    return interval = (function(_this) {
      return function() {
        return setTimeout(callRest, timeout);
      };
    })(this)();
  }
};

callRest = function() {
  running = true;
  console.log('Running call');
  return rest.get('http://cymautocert/osaapp/semaforo-dev/toolbox.php?action=updateTables').end(function(response) {
    running = false;
    console.log('response geted');
    writeFile('C:\\apps\\node-win\\response.txt', JSON.stringify(response));
    return a(timeoutTime);
  });
};

writeFile = function(address, content) {
  return fs.writeFile(address, content, function(err) {
    if (err) {
      console.log(error);
      return console.log('File saved');
    }
  });
};

a(timeoutTime);

/*
running = false
timeoutTime = 50000
a = (timeout)->
 if not running
  interval = do =>setTimeout(callRest,timeout)

callRest = ->
 running = true
 console.log 'Running call'
 rest.get('http://cymautocert/osaapp/semaforo-dev/toolbox.php?action=updateTables').end (response)->
  running = false
  console.log 'response geted'
  writeFile('C:\\apps\\node-win\\response.txt', JSON.stringify response)
  a timeoutTime

writeFile = (address, content)->
 fs.writeFile address, content, (err)->
  if err
   console.log error
   console.log 'File saved'

a timeoutTime
*/