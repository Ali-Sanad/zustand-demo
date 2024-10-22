import { useCounterStore } from './store'

/**
 * to set or get the state without the need to call
 * the hook inside react component
 */

export const getCountState = () => useCounterStore.getState().count

export const setCountState = (value: number) =>
  useCounterStore.setState({ count: value })
