import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons1 from './componentes/Buttons1'
import Buttons2 from './componentes/Buttons2'
import ResetPlatform from './componentes/ResetPlatform'
import UserDisplay from './componentes/UserDisplay'
import InputPlatform from './componentes/InputPlatform'

const buttons1 = []
const buttons2 = []


for(let i=0; i<10; i++){

  buttons1.push({
    name: i,
    value: i
    
  })

  buttons2.push({
    name: `${i*10} to ${(i*10)+9}`,
    value: i*10
  })

}


console.log(buttons1)


function App() {


  return (
    <>
      <UserDisplay />
      <Buttons1 buttons={buttons1} />
      <Buttons2 buttons2={buttons2} />
      <ResetPlatform />
      
    </>
  )
}

export default App
