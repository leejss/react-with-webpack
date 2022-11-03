import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <h1>
      hell1232313231o sds! {process.env.NODE_ENV}
      <button
        onClick={() => {
          setCount((prev) => prev + 1)
        }}
      >
        inc {count}
      </button>
    </h1>
  )
}

export default App
