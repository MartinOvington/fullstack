import React from 'react'

const Country = ({country, filterHandler}) => (
    <div>
        <h2>{country.name.common}</h2>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>
        <h2>languages</h2>
        <ul>
            {Object.entries(country.languages).map(([key, language]) =>
                <li key={key}>{language}</li>)}
        </ul>
        <font size="48">{country.flag}</font>
    </div>
)

export default Country