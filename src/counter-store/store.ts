import { create } from 'zustand'
import { CounterStore } from './types'

export const useCounterStore = create<CounterStore>(set => ({
  count: 0,
  increment: () => {
    set(state => ({ count: state.count + 1 }))
  },
  decrement: () => {
    set(state => ({ count: state.count - 1 }))
  },
  incrementAsync: async () => {
    //handle async logic
    await new Promise(resolve => setTimeout(resolve, 1000))
    set(state => ({ count: state.count + 1 }))
  },
  decrementAsync: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    set(state => ({ count: state.count - 1 }))
  }
}))
