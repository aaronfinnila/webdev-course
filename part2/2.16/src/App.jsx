import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personsService from './services/personsservice'
import Notification from './components/Notification'
import { useState, useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)

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
        setMessage(`Added ${newName}`)
        setTimeout(() => {
          setMessage(null)
        }, 4000)
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
    } else {
      alert(`${newName} is already in the phonebook`)
    }
}

const handleRemove = (id) => {
const pers = persons.find(person => person.id === id)
const name = pers ? pers.name : "Not found"

  if (window.confirm(`Delete ${name} ?`)) {
    setMessage(`Removed ${name}`)
    setTimeout(() => {
      setMessage(null)
    }, 4000)
    setPersons(persons.filter(person => person.id !== id))
    personsService.remove(id)
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
      <Notification message={message} />

      <h3>Add a new number</h3>

      <PersonForm         
        newName={newName}
        handleNameInput={handleNameInput}
        newNumber={newNumber}
        handleNumberInput={handleNumberInput}
        handleSubmit={handleSubmit}/>

      <h3>Numbers</h3>

      <Persons persons={persons} handleRemove={handleRemove} />

    </div>
  )
}

export default App