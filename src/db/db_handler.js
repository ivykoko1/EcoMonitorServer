var mysql = require('mysql');


class DatabaseController
{
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'ecomonitor',
        password : 'ecoecomonitor'
    });
    

    init(){
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

    async injectData(humidity, temperature){
        if(temperature < -100 || temperature > 150){
            temperature = 0.0;
        }if(humidity < 0 || humidity > 100){
            humidity = 0.0;
        }
        let query = `INSERT INTO sensor_reading(node_id, humidity, temperature) VALUES(1, ${humidity}, ${temperature});`;
    }

    async insert(table, data, conditions){
        let sqlSentence = '';
    }
}

module.exports = new DatabaseController();