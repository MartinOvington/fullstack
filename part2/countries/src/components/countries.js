import React from 'react'
import Country from './country'

const Countries = ({countries, setFindCountry, getCapitalWeather, capitalWeather}) => {
    if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }
    else if (countries.length > 1) {
        return (
            countries.map(country =>
                <div key={country.name.common}>
                    {country.name.common}
                    <button onClick={() =>
                        setFindCountry(country.name.common)}>show</button>
                </div>
            )
        )
    }
    else if (countries.length === 0) {
        return <div></div>
    }
    else {
        return (
            <Country country={countries[0]} capitalWeather={capitalWeather} />
        )
    }
}

export default Countries