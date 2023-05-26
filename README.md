# The Weather Program.
## Weather Console Application

### Purpose
The primary goal of this project was to create a console application that fetches and displays the current weather for a specified city using OpenWeather API. We aimed to get hands-on experience with Node.js, manage API calls, create mock tests using Jest, and initially we intended to use ES6 modules but had to switch back to commonJs due to compatibility issues.

Throughout this project, we strived to follow best practices like not exposing our API keys in our version-controlled files. We implemented key concepts like test-driven development(TDD) and used utilities like callback-fetch to mange the API requests. We crafted a URL to fetch data, parsed the response into a JavaScript (JS)object, and displayed the relevant information in the console.

### Process
We began by setting up the project structure and deciding on the necessary files. We divided the functionality into three main classes. We work on classes that have no or few dependencies first then move on to the ones the depend on them. We start to draft and write the jest testing file before implement the code into the file. After Jest test is passed, we then move on to the next one.

This project contains 4 main files: WeatherClient for fetching data, WeatherUI for displaying data to users, Weather for managing the business logic flow and Index for the entry point and run the application.

### conclusion
Throughout this process, we encountered several challenges and learned valuable lessons. One such challenge was the incompatibility of Jest with ES6 modules, which forced us to switch to CommonJS and refactor some of our code accordingly.

This project was a great opportunity to enhance our understanding of asynchronous programming, working with API, and testing in Node.js. Future improvements could involve expanding features to include weather forecasts, supporting multiple cities, and introducing a proper user interface.

We also learned the importance of securing API keys and got familiar with how APIs cna charge based on usage. The project allowed us to explore different aspects of Node.js, APIs, testing and JS's module systems, which will be valuable in our future projects.