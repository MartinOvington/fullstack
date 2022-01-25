import React, { useState, useEffect } from 'react'
import Countries from './components/countries'
import axios from 'axios'

function App() {
  const [findCountry, setFindCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [capitalWeather, setCapitalWeather] = useState(null)
  
  const api_key = process.env.REACT_APP_API_KEY

  const filteredCountries = countries.filter(country => 
    country.name.common.toLowerCase().includes(findCountry.toLowerCase()))

  useEffect(() => {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then(response => {
          setCountries(response.data)
      })

  }, [filteredCountries])

  const handleCountryChange = (event) => {
    setFindCountry(event.target.value)
  }
  
  if (filteredCountries.length == 1) {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather?q=' +
        filteredCountries[0].capital + '&appid=' + api_key.replaceAll("'", ""))
      .then(response => {
        setCapitalWeather(response.data)
      })
  }

  return (
    <div>
      <form>
        <div>
          find countries: <input value={findCountry} onChange={handleCountryChange}></input>
        </div>
      </form>
      <Countries countries={filteredCountries} setFindCountry={setFindCountry} capitalWeather={capitalWeather}/>
    </div>
  )
}

export default App;
