const Button = ({ handleRemove, newId, handleIdInput }) => {
    return (
        <form onSubmit={handleRemove}>
            <div> 
            id: <input name='id'
            value={newId}
            onChange={handleIdInput}
            />
            </div>
            <div>
            <button type="submit">delete</button>
            </div>
        </form>
    )
}

export default Button