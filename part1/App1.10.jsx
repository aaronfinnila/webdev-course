import { useState } from 'react'

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  const incGood = () => {
    setGood(good + 1)
  }
  
  const incNeutral = () => {
    setNeutral(neutral + 1)
  }
  
  const incBad = () => {
    setBad(bad + 1)
  }
  if (all != 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button onClick={incGood} text='good' />
        <Button onClick={incNeutral} text='neutral' />
        <Button onClick={incBad} text='bad' />
        <h1>statistics</h1>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={all} />
        <StatisticLine text='average' value={(good - bad) / (all)} />
        <StatisticLine text='positive' value={(good / (all)) * 100} symbol='%'/>
      </div>
    )
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={incGood} text='good' />
      <Button onClick={incNeutral} text='neutral' />
      <Button onClick={incBad} text='bad' />
      <h1>statistics</h1>
      <p>no feedback given</p>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value} {props.symbol}
    </div>
  )
}

export default App