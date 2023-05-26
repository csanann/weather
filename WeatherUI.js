// file: WeatherUI.mjs
// export default class WeatherUI {
//     displayWeather(weatherData) {
//         console.log(`City: ${this.weatherData.name}`);
//         console.log(`Weather: ${this.weatherData.Weather[0].main}`);
//         console.log(`Temperature: ${this.weatherData.main.temp}`);
//         console.log(`Feels like: ${this.weatherData.main.feels_like}`);
//         console.log(`Humidity: ${this.weatherData.main.humidity}`);
//     }
// }

// module.exports = class WeatherUI { /*...*/}

class WeatherUI {
    displayWeather(weatherData) {
        console.log(`City: ${weatherData.name}`);
        console.log(`Weather: ${weatherData.weather[0].main}`);
        console.log(`Temperature: ${weatherData.main.temp}`);
        console.log(`Feels like: ${weatherData.main.feels_like}`);
        console.log(`Humidity: ${weatherData.main.humidity}`);
    }
}

module.exports = WeatherUI;