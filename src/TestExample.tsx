import React from 'react'

function TestExample() {
  const [count, setCount] = React.useState(0)
  return <button onClick={() => setCount(count + 1)}>count is {count}</button>
}

export default TestExample
