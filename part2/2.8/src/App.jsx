import Person from './components/Person'
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
      <form onSubmit={handleSubmit}>
        <div>
          name: <input
          name='name'
          value={newName}
          onChange={handleNameInput}
           />
        </div>
        <div>
          number: <input
          name='number'
          value={newNumber}
          onChange={handleNumberInput}
        />
         </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul id='xd'>
        {persons.map(person => <Person person={person} key={person.name} />)}
      </ul>
    </div>
  )
}

export default App