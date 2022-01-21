import React from 'react'
import Country from './country'

const Countries = ({filter, countries}) => {
    const filteredCountries = countries.filter(country => 
        country.name.common.toLowerCase().includes(filter.toLowerCase()))
    if (filteredCountries.length > 1) {
        return (
            filteredCountries.map(country => <div key={country.name.common}> {country.name.common}</div>)
        )
    }
    if (filteredCountries.length === 0) {
        return <div></div>
    }
    console.log(filteredCountries[0].flag)
    return (
        <Country country={filteredCountries[0]} />
    )
}

export default Countries