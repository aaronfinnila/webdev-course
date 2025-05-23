import Number from './components/Number'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (persons.map(person => person.name).includes(newName) === false) {
      setPersons(persons.concat({name: newName}))
    } else {
      alert(`${newName} is already in the phonebook`)
    }
}

const handleInput = (event) => {
  setNewName(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input
          value={newName}
          onChange={handleInput}
           />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul id='xd'>
        {persons.map(person => <Number number={person} key={person.name} />)}
      </ul>
    </div>
  )
}

export default App