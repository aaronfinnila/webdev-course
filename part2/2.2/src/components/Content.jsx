import Part from './Part'

const Content = ({ parts }) => {
    const exerc = parts.map(part => part.exercises)
    return (
        <div>
        <ul>
            {parts.map(part => <Part key={part.id} name={part.name} number={part.exercises} />)}
        </ul>
        <b>total of {exerc.reduce(sum)} exercises</b>
        </div>
    )
}

function sum(previous, next) {
    return previous + next;
}

export default Content