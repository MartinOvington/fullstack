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

  const capital = filteredCountries.length == 1
    ? filteredCountries[0].capital
    : ''
  
  useEffect(() => {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then(response => {
          setCountries(response.data)
      })

  }, [])

  useEffect(() => {
    console.log(capital)
    if (capital != '') {
        axios
          .get('https://api.openweathermap.org/data/2.5/weather?q=' +
            capital + '&appid=' + api_key.replaceAll("'", ""))
          .then(response => {
            setCapitalWeather(response.data)
            })
      }
    }, [capital])

  const handleCountryChange = (event) => {
    setFindCountry(event.target.value)
  }

  return (
    <div>
      <form>
        <div>
          find countries: <input value={findCountry} onChange={handleCountryChange}></input>
        </div>
      </form>
      <Countries countries={filteredCountries} setFindCountry={setFindCountry} 
        capitalWeather={capitalWeather}/>
    </div>
  )
}

export default App;
