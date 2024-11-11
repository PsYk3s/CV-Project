import './App.css'
import Intro from './Intro'
import WorkForm from './WorkForm.jsx'
import WorkList from './WorkList.jsx'
import { Schooling, SchoolingForm } from './Schooling.jsx'
import { useState } from 'react'

function App() {

  const [schooling, setSchooling] = useState([]) 
  const [working, setWorking] = useState([])

  return (
    <><h1>My CV</h1>
      <Intro />
      <h2>Education</h2>
      <Schooling schooling={schooling} />
      <SchoolingForm setSchooling={setSchooling} />
      <h2>Work Experience</h2>
      <WorkList working={working} />
      <WorkForm setWorking={setWorking} />
    </>
  )
}

export default App
