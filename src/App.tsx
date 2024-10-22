import { Counter } from './components/Counter/Counter'
import zustandLogo from '/bear.png'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href='https://zustand-demo.pmnd.rs/' target='_blank'>
          <img
            src={zustandLogo}
            className='logo zustand'
            alt='Zustand logo'
          />
        </a>
      </div>

      <h1>Zustand Demo</h1>

      <Counter />

      <p className='read-the-docs'>
        Click on the Zustand logo to learn more
      </p>
    </>
  )
}

export default App
