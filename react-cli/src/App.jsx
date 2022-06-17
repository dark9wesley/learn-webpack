import { useEffect } from "react"
import User from "./utils/common"
import User2 from "./utils/common2"

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
    </>
  )
}

export default App
