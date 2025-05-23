import Person from './Person'

const Persons = ({ persons, handleRemove }) => {
  
    return (
    <ul id='xd'>
    {persons.map(person => <Person person={person} key={person.name} handleRemove={handleRemove} />)}
  </ul>
    )
}

export default Persons