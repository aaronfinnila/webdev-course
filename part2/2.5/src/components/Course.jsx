const Course = ({ course }) => {
    
    return (
        <div>
        <ul>
        <li id="xdd"><Header name={course.name}/></li>
        <li id="xddd"><Content parts={course.parts}/></li>
        </ul>
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

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

const Part = (props) => {
    return (
        <li>{props.name} {props.number}</li>
    )
}

export default Course