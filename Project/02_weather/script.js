document.addEventListener("DOMContentLoaded", () => {
    const cityinput= document.getElementById("city-input")
    const getweatherbtn = document.getElementById("get-weather-btn")
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const APIKey = "d0c06e728a69e624ac9e66fe0f6baa6c";

    getweatherbtn.addEventListener("click" , async () => {
        const city = cityinput.value.trim();
        if(!city) return ; 

        try{
           const weatherData = await fetchWeatherData(city);
           displayWeatherData(weatherData);
        } catch(error){
            displayError();
        }


         
    })

    async function fetchWeatherData(city){
        // code
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

        const respone = await fetch(url);
        // console.log(respone);
        if (!respone.ok){
            throw new Error(" City Not Found");
        }
        const data = await respone.json()
        return data;

    }

    function displayWeatherData(data){
        errorMessage.classList.add('hidden');
        weatherInfo.classList.remove('hidden');
        console.log(data);
        const {name , main , weather} = data;
        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature: ${main.temp}`;
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`;
    }

    function displayError(){
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }

})