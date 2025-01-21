const App = () => {

  return (
    <div>
      <Header course={'Half Stack application development'} />
      <Content part={'Fundamentals of React'} number={10}/>
      <Content part={'Using props to pass data'} number={7}/>
      <Content part={'State of a component'} number={14}/>
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

const Content = (props) => {
  return (
    <div>
      <p>{props.part} {props.number}</p>
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