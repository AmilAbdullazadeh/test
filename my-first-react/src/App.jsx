import './App.css'
import s from './assets/style.module.css'
import {Header} from "./components/Header/Header.jsx";
import {Button} from "./components/Button/Button.jsx";
import {useState} from "react";

export const App = () => {
  // 1 Components ✓
  // 2 Props ✓
  // 3 State ✓

 //? let age = 20
 const [age, setAge] = useState(0) // immutable
 //? let name = 'John Doe'
 const [name, setName] = useState('John Doe')


    function changeName() {
        setName('Nushabe')
    }

  return (
      <div className={`${s.coloRed} ${s.textCenter}`} >
          <Header />
          <h2>Hello world 👻 <Button text='Send'  /> </h2>
           <h3 >Name: {name}</h3>
          <button onClick={changeName} >Increment</button>
      </div>
  )
}

// Statefull Functional Component