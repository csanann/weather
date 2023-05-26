//file: index.mjs > index.js
// import readline from 'readline';
// import Weather from "./Weather.mjs";
// import WeatherClient from "./WeatherClient.mjs";

const readline = require('readline');
const Weather = require('./Weather');
const WeatherClient = require('./WeatherClient');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//wrap readline.question into a function that returns a promise
function question(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

const client = new WeatherClient('api-key1234');//replace with your api key

const weather = new Weather(client);

//main async function
async function main() {
    const city = await question(`Enter a city: `);
    await weather.load(city);
    weather.displayWeather();
    rl.close();

    //for comparison
    await weather.load(`London`);
    weather.compareWith(`Bilbao`);

    //refresh weather data
    weather.loadAndRefresh(`Chiang mai`);
}
//call the main function
main();


// output from previous script
// > ✗ node index.js
// Weather data for Chiang Mai:
// {
//   coord: { lon: 99, lat: 18.75 },
//   weather: [
//     { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' }
//   ],
//   base: 'stations',
//   main: {
//     temp: 30.04,
//     feels_like: 34.19,
//     temp_min: 28,
//     temp_max: 30.04,
//     pressure: 1009,
//     humidity: 66
//   },
//   visibility: 10000,
//   wind: { speed: 1.03, deg: 0 },
//   clouds: { all: 20 },
//   dt: 1684945032,
//   sys: {
//     type: 1,
//     id: 9244,
//     country: 'TH',
//     sunrise: 1684882064,
//     sunset: 1684929248
//   },
//   timezone: 25200,
//   id: 1153670,
//   name: 'Chiang Mai',
//   cod: 200
// }