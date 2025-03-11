import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personsService from './services/personsservice'
import Button from './components/Button'
import { useState, useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newId, setNewId] = useState('')

  useEffect(() => {
    personsService.getAll().then(response => {
      setPersons(response)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (persons.map(person => person.name).includes(newName) === false) {
      personsService
      .create({ name: newName, number: newNumber }).then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
    } else {
      alert(`${newName} is already in the phonebook`)
    }
}

const handleRemove = (event) => {
  // DO WINDOW CONFIRM AND DO BUTTON FOR EVERY LIST ELEMENT
  event.preventDefault();

  setPersons(persons.filter(person => person.id !== newId))
  setNewId('')
  personsService.remove(newId)
}

const handleIdInput = (event) => {
  setNewId(event.target.value)
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

      <h3>Remove a number</h3>
      <Button 
      handleRemove={handleRemove}
      handleIdInput={handleIdInput}
      newId={newId}
      />
    </div>
  )
}

export default App