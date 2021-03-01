import React, { useState } from 'react'
import Person from './Person'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
      event.preventDefault()
      console.log('button clicked', event.target)
      const personObject = {
          name: newName, 
          id: persons.length + 1
      }

      setPersons(persons.concat(personObject))
      setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Person persons={persons} /> 
    </div>
  )
}

export default App