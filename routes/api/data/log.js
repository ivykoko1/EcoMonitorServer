var dbController = require('../../../src/db/db_handler');

/*
* /api/data/log - GET
*  
* params:
* 
* humidity: float
* temperature: float
* ip: string (not implemented yet, it is harcoded for testing purposesa)
*
*/
var handler = function(req, res){
    let temperature = req.query.temperature;
    let humidity = req.query.humidity;
    await dbController.injectData(humidity, temperature);
}