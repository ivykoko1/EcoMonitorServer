var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'example.org',
    user     : 'bob',
    password : 'secret'
});
   

function init(){
    if(connection.state === 'disconnected'){
        connection.connect(function(err) {
            if (err) {
              console.error('error connecting: ' + err.stack);
              return false;
            }
            console.log('connected as id ' + connection.threadId);
            return true;
          });
    }else{
        console.log('db is already connected');
        return false;
    }
}

async function injectData(humidity, temperature){
    if(temperature < -100 || temperature > 150){
        temperature = 0.0;
    }if(humidity < 0 || humidity > 100){
        humidity = 0.0;
    }
    let query = `INSERT INTO sensor_reading(node_id, humidity, temperature, ip_address) VALUES(1, ${humidity}, ${temperature}, '192.168.x.x')`;
}

async function insert(table, data, conditions){
    let sqlSentence = '';
}
