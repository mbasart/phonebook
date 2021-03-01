import React, { useState } from 'react'
import Person from './Person'
import Filter from './Filter'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')

  const addPerson = (event) => {
      event.preventDefault()
      console.log('button clicked', event.target)
      const person = persons.find(p => p.name === newName)
      if (person === undefined) {
        const personObject = {
            name: newName,
            number: newNumber, 
            id: persons.length + 1
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      } else {
          window.alert(`${newName} is already added to phonebook`)
      }

  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
      setNameFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleNameFilterChange={handleNameFilterChange} />

      <h2>Add a new</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <Person persons={persons} nameFilter={nameFilter} /> 
    </div>
  )
}

export default App