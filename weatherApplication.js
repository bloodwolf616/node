const https = require('https');
//gets a file that has our api key
const api = require('./api.json')
let cityName = '';


function get(query) {
const request = https.get('api.openweathermap.org/data/2.5/weather?q={city name}', response => {
    let body = "";
    response.on('data' , chunk => {
      body += chunk.toString()
    })

    response.on('end' , chunk => {
      const weather = JSON.parse(body)
      console.log(body)
    })


}
}
module.exports.get = get
