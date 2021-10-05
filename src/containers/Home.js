import axios from 'axios'; //allows you to make HTTP requests
import React, {useEffect, useMemo, useState} from 'react'; 
import {useLocation} from "react-router-dom";
import WeatherCard from '../components/WeatherCard'; 

const API_KEY = `2bec72d51eb363c0848fa929acd2c7c1`; 

//URL Search Parameters localhost:3000.?city=paris
//Abstract away URL Search Params to make it easier to use
function useQuery() { 
    return new URLSearchParams(useLocation().search); 
}

function Home() {

    const [city, setCity] = useState(); 
    const [weatherData, setWeatherData] = useState(); 
    let query = useQuery();
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    
    useEffect(() => {
        const cityValue = query.get('city'); 
        setCity(cityValue); 
    })
    useEffect(() => {
        //Get Weather Data
        if (city) {
            axios
                .get(URL)
                .then(function (response) {
                    //SUCCESS
                    setWeatherData(response.data); 
                    console.log(response.data); 
                })
                .catch(function (error) {
                    console.warn(error); 
                })
        } 
    }, [URL, city]); 
    
    const { cloudiness, currentTemp, feelsLike,  highTemp, humidity, lowTemp, weatherDescription, weatherType, windSpeed } = useMemo(() => {
        if (!weatherData) return {}; //if weatherData is non existent we return an empty object
        console.log(weatherData); 
        return {
            cloudiness: weatherData.clouds.all,
            currentTemp: weatherData.main.temp,
            feelsLike: weatherData.main.feels_like, 
            highTemp: weatherData.main.temp_max,
            humidity: weatherData.main.humidity,
            lowTemp: weatherData.main.temp_min,
            weatherDescription: weatherData.weather[0].description, 
            weatherType: weatherData.weather[0].main,
            windSpeed: weatherData.wind.speed,
        }
    }, [])

    return ( 

        <main>
            <header className="weatherHeader"> Weather App </header>
            <header className="weatherCities">
                <p> <a href="/?city=Tokyo">Tokyo</a> </p>
                <p> <a href="/?city=Greece">Greece</a> </p>
                <p> <a href="/?city=Belfast">Belfast</a> </p>
                <p> <a href="/?city=Manila">Manila</a> </p>
            </header>
            
            <section> 
                <WeatherCard
                city={city}
                cloudiness={cloudiness}
                currentTemp={currentTemp}
                feelsLike={feelsLike}
                highTemp={highTemp}
                humidity={humidity}
                lowTemp={lowTemp}
                weatherDescription={weatherDescription}
                weatherType={weatherType}
                windSpeed={windSpeed}
                /> 
            </section>
        </main>
    );
}

export default Home; 