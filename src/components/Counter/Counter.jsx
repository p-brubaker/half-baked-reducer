import { useEffect, useState, useReducer } from 'react'

const pinkRGB = 'rgb(236, 72, 153)'
const greenRGB = 'rgb(52, 211, 153)'
const redRGB = 'rgb(239, 68, 68)'

function countReducer(count, action) {
  switch (action.type) {
    case 'increment': {
      return count + 1
    }

    case 'decrement': {
      return count - 1
    }

    case 'reset': {
      return 0
    }

    default: {
      throw new Error(
        `Invalid action type '${action.type}'. Allowed types are 'increment', 'decrement', and 'reset'`
      )
    }
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(countReducer, 0)
  const [color, setColor] = useState(pinkRGB)

  useEffect(() => {
    if (count > 0) setColor(greenRGB)
    if (count === 0) setColor(pinkRGB)
    if (count < 0) setColor(redRGB)
  }, [count])

  const increment = () => {
    dispatch({
      type: 'increment',
    })
  }

  const decrement = () => {
    dispatch({
      type: 'decrement',
    })
  }

  const reset = () => {
    dispatch({
      type: 'reset',
    })
  }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color }}>
        {count}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={increment}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={decrement}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
