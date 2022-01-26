import React, { useState, useEffect } from 'react'
import FilterPeople from './components/filterpeople'
import PersonForm from './components/personform'
import Filter from './components/filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [myFilter, setFilter] = useState('')

  const baseUrl = 'http://localhost:3001/persons'

  useEffect(() => {
      axios
        .get(baseUrl)
        .then(response => {
          setPersons(response.data)
        })
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      axios
        .post(baseUrl, personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter myFilter={myFilter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm func={addPerson} name={newName} handleNameChange={handleNameChange}
        number={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <FilterPeople persons={persons} name={myFilter} />
    </div>
  )
}

export default App