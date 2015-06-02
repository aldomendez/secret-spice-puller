var EventLogger = require('node-windows').EventLogger;
var log = new EventLogger('Hello World');
var rest = require('unirest');
log.info('Service for updating monitors working');

var interval;

interval =(function() {
      unirest.get('http://cymautocert/osaapp/semaforo-dev/toolbox.php?action=updateTables');
    }
 , 5000);


/*
request
interval = do ->
 return setInterval ()=>
  request = unirest.get('http://cymautocert/osaapp/semaforo-dev/toolbox.php?action=updateTables')
 ,5000
 */