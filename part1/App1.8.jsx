import { useState } from 'react'

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const incGood = () => {
    setGood(good + 1)
  }
  
  const incNeutral = () => {
    setNeutral(neutral + 1)
  }
  
  const incBad = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={incGood} text='good' />
      <Button onClick={incNeutral} text='neutral' />
      <Button onClick={incBad} text='bad' />
      <h1>statistics</h1>
      <Statistics text='good' value={good} />
      <Statistics text='neutral' value={neutral} />
      <Statistics text='bad' value={bad} />
      <Statistics text='all' value={good+neutral+bad} />
      <Statistics text='average' value={(good - bad) / (good + neutral + bad)} />
      <Statistics text='positive' value={(good / (good + neutral + bad)) * 100} symbol='%'/>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return (
    <div>
      {props.text} {props.value} {props.symbol}
    </div>
  )
}

export default App