import React from 'react'
import Weather from './weather'

const Country = ({country, capitalWeather}) => (
    <div>
        <h2>{country.name.common}</h2>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>
        <h2>Spoken languages</h2>
        <ul>
            {Object.entries(country.languages).map(([key, language]) =>
                <li key={key}>{language}</li>)}
        </ul>
        <font size="48">{country.flag}</font>
        <Weather capital={country.capital} capitalWeather={capitalWeather}/>
    </div>
)

export default Country