import Person from './Person'

const Persons = ({ persons }) => {
  console.log(persons);
  
    return (
    <ul id='xd'>
    {persons.map(person => <Person person={person} key={person.name} />)}
  </ul>
    )
}

export default Persons