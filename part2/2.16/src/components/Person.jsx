const Person = ({ person, handleRemove }) => {
    return <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      {person.name} {person.number}
      <button onClick={() => handleRemove(person.id)}>delete</button>
    </li>
}
  export default Person