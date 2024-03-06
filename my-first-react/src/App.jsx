import './App.css'
import s from './assets/style.module.css'

export const App = () => {
  let isOnline = false

  function formatDate(date) {
      return date + ' 🥶'
  }

  let word = <h2>Hello world 👻</h2>

  return (
      <div className={`${s.coloRed} ${s.textCenter}`} >
          { word }
      </div>
  )
}