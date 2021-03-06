import React from 'react'; 
import WeatherImage from './WeatherImage'; 

function WeatherCard({ city, cloudiness, currentTemp, feelsLike, highTemp, humidity, lowTemp, weatherDescription, weatherType, windSpeed }) {
    return (
        <section className="weatherCardStyle" style={{backgroundColor:`rgba(117,179,227, ${cloudiness / 100})`}}>
            <p className="weatherCardHeader">
                <strong className="weatherCardWeatherType"> 
                    <WeatherImage weatherType={weatherType}> </WeatherImage>
                </strong>
                <strong className="weatherCardTitle"> {city} </strong>
            </p>
            <div className="weatherCardTemp">
                <p className="weatherCardTempLeft">
                    <strong className="weatherCardCurrentTemp"> {currentTemp}° </strong>
                    <strong className="weatherCardDescription">  {weatherDescription} </strong>
                </p>
                <div className="weatherCardTempRight">
                    <p> High: <strong> {highTemp}° </strong> </p>
                    <p> Low: <strong> {lowTemp}° </strong> </p>
                    <p> Feels Like: <strong> {feelsLike}° </strong> </p>
                </div>
            </div>
            
            <div className="weatherCardStatuses">
                <p>
                    Cloudiness: <strong> {cloudiness} </strong>
                </p>
                <p>
                    Humidity: <strong> {humidity} </strong>
                </p>
                <p>
                    Wind Speed: <strong> {windSpeed} </strong>
                </p>
            </div>
        </section>
    )
}

export default WeatherCard; 