import Part from './Part'

const Content = ({ parts }) => {
    return (
        <ul>
            {parts.map(part => <Part key={part.id} name={part.name} />)}
        </ul>
    )
}

export default Content