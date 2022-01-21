import React, { useState, useEffect } from 'react'
import Countries from './components/countries'
import axios from 'axios'

function App() {
  const [findCountry, setFindCountry] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

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
      <Countries filter={findCountry} countries={countries} />
    </div>
  )
}

export default App;
