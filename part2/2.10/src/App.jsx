import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1234567' }]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (persons.map(person => person.name).includes(newName) === false) {
      setPersons(persons.concat({name: newName, number: newNumber}))
    } else {
      alert(`${newName} is already in the phonebook`)
    }
}

const handleNameInput = (event) => {
  setNewName(event.target.value)
}

const handleNumberInput = (event) => {
  setNewNumber(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>

      <h3>Add a new number</h3>

      <PersonForm         
        newName={newName}
        handleNameInput={handleNameInput}
        newNumber={newNumber}
        handleNumberInput={handleNumberInput}
        handleSubmit={handleSubmit}/>

      <h3>Numbers</h3>

      <Persons persons={persons} />

    </div>
  )
}

export default App