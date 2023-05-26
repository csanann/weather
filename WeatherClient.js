// weatherClient.mjs  create this file first then weather.mjs

//import the fetch function
// import fetch from 'node-fetch';
const fetch = require(`node-fetch`); 

class WeatherClient {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    //fetchWeatherData method fetches data for a given city
    fetchWeatherData(city) {
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=your-city-name&appid=your-api-key';
        //use fetch to get data from the server and return a promise
        return fetch(apiUrl)
            //get the response and convert to json
            .then((response) => response.json());
    }
}
// export default weatherClient;
module.exports = WeatherClient;