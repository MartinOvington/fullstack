import React from 'react'

const Weather = ({capital, capitalWeather}) => {
    if (capitalWeather === null) {
        return (<div></div>)
    }
    return (
        <div>
            <h2>Weather in {capital}</h2>
            <div><b>temperature:</b> {Math.round(capitalWeather.main.temp - 272.15)} celsius</div>
            <img src={"http://openweathermap.org/img/wn/" + capitalWeather.weather[0].icon + "@2x.png"}
                alt="Weather icon"></img>
        </div>
    )

}

export default Weather