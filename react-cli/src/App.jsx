import { useEffect } from "react"
import User from "./utils/common"
import User2 from "./utils/common2"

import Home from './pages/Home'
import About from './pages/About'
import { Link, Routes, Route } from 'react-router-dom'

const App = () => {

  useEffect(() => {
    const min = new User('ming', 24)
    console.log(min.getName())
    console.log(min.getAge())

    const min2 = new User2('ming', 24)
    console.log(min2.getName())
    console.log(min2.getAge())
  }, [])

  return (
    <>
      <div>App</div>
      <div className="image"></div>
      <ul>
        <li><Link to={'/home'}>home</Link></li>
        <li><Link to={'/about'}>about</Link></li>
      </ul>

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

    </>
  )
}

export default App
