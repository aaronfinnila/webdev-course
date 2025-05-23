const PersonForm = ({ newName, handleNameInput, newNumber, handleNumberInput, handleSubmit}) => {
    return (
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
    )
}

export default PersonForm