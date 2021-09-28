import React from 'react'; 

function WeatherCard({ cloudiness, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed }) {
    return (
        <section className="weatherCardStyle">
            <p className="weatherCardTitle">
                Weather Type: <strong> {weatherType} </strong>
            </p>
            <div className="weatherCardTemp">
                <p className="weatherCardTempLeft">
                    Current Temperature: <strong> {currentTemp} </strong>
                </p>
                <div className="weatherCardTempRight">
                    <p>
                        Low Temp: <strong> {lowTemp} </strong>
                    </p>
                    <p>
                        High Temp: <strong> {highTemp} </strong>
                    </p>
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