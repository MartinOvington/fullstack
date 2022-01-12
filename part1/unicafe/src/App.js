import React, { useState } from 'react'

const Button = ({handler, text}) => (
  <button onClick={handler}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) =>
    <tr>
      <td>{text} </td> 
      <td>{value} </td>
    </tr>

const Statistics = ({good, bad, neutral}) => {
  let total = good + bad + neutral
  if (total === 0) {
    return (
        <p>No feedback given</p>
    )
  }
  return (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={(good - bad)/total} />
            <StatisticLine text="positive" value={(good * 100 / total).toString() + "%"} />
          </tbody>
        </table>
    ) 
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handler={() => setGood(good + 1)} text="good" />
      <Button handler={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handler={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
