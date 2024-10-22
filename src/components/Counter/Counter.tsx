import { useCounterStore } from '../../counter-store/store'

export const Counter = () => {
  const count = useCounterStore(state => state.count)
  const increment = useCounterStore(state => state.increment)
  const decrement = useCounterStore(state => state.decrement)

  return (
    <div className='counter'>
      <button data-testid='increment' onClick={increment}>
        Increment
      </button>

      <p data-testid='count'>{count}</p>

      <button data-testid='decrement' onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}
