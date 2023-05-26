// WeatherClient.test.js
//import the fetch function from module node-fetch
//fetch function that sends http requests and returns a promise that resolves to the response.
const fetch = require(`node-fetch`);
//import weatherClient class from the file
const WeatherClient = require('./WeatherClient');
//using jest mocking capabilities, create a mock version of fetch function
//that returns Promise that resolves to the mocked data
//tells jest to replace fetch function from 'node-fetch' with a jest mock function whenever its imported to our test
jest.mock('node-fetch');
//define a jest test,1st argument is string, 2nd argu is a function that defines the test
test('fetches weather data for a city', async () => {
    //defines mock data that represents a response from the weather api
    const mockData = { /* Mocked weather data */ };
    //tells mock function to return a promise that resolves to an object with a json method
    fetch.mockResolvedValueOnce({
        //json method returns another promise that resolves to mockData, 
        //which mimic the behavior of fetch function. the resolved value is assigned to data
        json: () => Promise.resolve(mockData),
    });
    //create a new instance and passing apikey
    const client = new WeatherClient('api-key');
    //calls a fetchWeatherData method on the WeatherClient instance and wait for a returned promise to resolve
    const data = await client.fetchWeatherData('London');
//asserting data should = mockData
    expect(data).toEqual(mockData);
    //another expectation
    expect(fetch).toHaveBeenCalledWith('https://api.openweathermap.org/data/2.5/weather?units=metric&q=City-here&appid=api-key-here');
});
