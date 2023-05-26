// WeatherUI.test.mjs

//since the WeatherUI class doesn't have any state of its own
//we'll test by passing a mock weatherData object and checking if it's correctly display all messages or not

//import WeatherUI from "./WeatherUI.mjs";
const WeatherUI = require("./WeatherUI");

describe('WeatherUI', () => {
    it('display all information about weather.', () => {
        //create a mock console.log to capture log msg
        console.log = jest.fn();

        const mockWeatherData = { 
            name: 'Chiang Mai',
            weather: [{main: 'Cloudy'}],
            main: {
                temp: 25,
                feels_like: 26,
                humidity: 70,
            }
        };

        const weatherUi = new WeatherUI();
        weatherUi.displayWeather(mockWeatherData);

        expect(console.log).toHaveBeenCalledWith(`City: Chiang Mai`);
        expect(console.log).toHaveBeenCalledWith(`Weather: Cloudy`);
        expect(console.log).toHaveBeenCalledWith(`Temperature: 25`);
        expect(console.log).toHaveBeenCalledWith(`Feels like: 26`);
        expect(console.log).toHaveBeenCalledWith(`Humidity: 70`);
    });
});