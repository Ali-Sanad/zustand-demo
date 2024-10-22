export type CounterStore = {
  count: number
  increment: () => void
  decrement: () => void
  incrementAsync: () => Promise<void>
  decrementAsync: () => Promise<void>
}
