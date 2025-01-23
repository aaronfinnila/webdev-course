const App = () => {

  return (
    <div>
      <Header course={'Half Stack application development'} />
      <Content/>
      <Total ex1={10} ex2={7} ex3={14}/>
    </div>
  )
}

const Header = (props) => {
    return (
  <div>
    <p>{props.course}</p>
  </div>
    )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.number}</p>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part name={'Fundamentals of React'} number={10}/>
      <Part name={'Using props to pass data'} number={7}/>
      <Part name={'State of a component'} number={14}/>
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>Number of exercises = {props.ex1 + props.ex2 + props.ex3}</p>
    </div>
  )
}

export default App