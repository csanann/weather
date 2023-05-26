// file: Weather.js //.mjs
// import WeatherUI from "./WeatherUI.mjs";
// import weatherClient from "./WeatherClient.mjs";
const WeatherUI = require('./WeatherUI');

//Weather is an object
//has its own properties (weatherClient, weatherData)
class Weather {
    constructor(weatherClient, weatherUI = new WeatherUI()) {
        //WeatherClient instance is assigning,to be used for fetching data
        this.weatherClient = weatherClient;
        //initialize a variable to hold data, null because it's no data in Weather instance when it first crated yet
        this.weatherData = null;
        this.weatherUI = weatherUI;
        //
        this.intervalId = null;
    }
    // Method to load and refresh weather data every 5 seconds
    loadAndRefresh(city) {
    // Call load method immediately
    this.load(city).then(() => {
      // Log weather data for the city
      this.displayWeather();
    });

    //clear previous interval if exists
    if(this.intervalId) {
        clearInterval(this.intervalId);
    }
  
    // Set interval to refresh weather data every 5 seconds
    this.intervalId = setInterval(() => {
      this.load(city).then(() => {
        // Log weather data for the city
        this.displayWeather();
      });
    }, 5000); // 5000 milliseconds = 5 seconds
  }
  
  // Method to display weather data
  displayWeather() {
    if (this.weatherData) {
      console.log(`City: ${this.weatherData.name}`);
      console.log(`Weather: ${this.weatherData.weather[0].main}`);
      console.log(`Temperature: ${this.weatherData.main.temp}`);
      console.log(`Feels like: ${this.weatherData.main.feels_like}`);
      console.log(`Humidity: ${this.weatherData.main.humidity}%`);
    }
  }
  
    //load method is to fetch data for a city
    load(city) {
        //fetch the data and store it
        // 'this' refers to the current instance/property of Weather class/object
        return this.weatherClient.fetchWeatherData(city)
        //use then method is called/will taking action when the promise is fulfilled.
            .then((weatherData) => {
                this.weatherData = weatherData;
            });
    }
//use this method to return the fetched data
    getWeatherData() {
        return this.weatherData;
    }

    //additional method
    async compareWith(city) {
        const newWeatherData = await this.weatherClient.fetchWeatherData(city);
        if(this.weatherData.main.temp > newWeatherData.main.temp) {
            console.log(`${this.weatherData.name} is warmer than ${newWeatherData.name}`);
        } else {
            console.log(`${this.weatherData.name} is colder than ${newWeatherData.name}`);
        }
    }
}
// export default Weather;
module.exports = Weather;