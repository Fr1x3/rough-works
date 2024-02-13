import { useState, lazy, Suspense } from "react"
import CardFormScreen from "./screens/cardform/CardFormScreen"
import HeaderScreen from "./screens/header/HeaderScreen"
const SuccessScreen = lazy(() => import( "./screens/success/SuccessScreen"))

function App() {

  const [isComplete, setIsComplete] = useState(false)
  function toggleIsComplete(){
    setIsComplete( (prev) => !prev)
  }
  return (
    <div className="min-h-screen grid grid-rows-[2fr_3fr] lg:grid-cols-2 lg:grid-rows-1  text-lg">
      <HeaderScreen />
      { isComplete ? <Suspense><SuccessScreen handleNav={toggleIsComplete}/></Suspense> : <CardFormScreen handleNav={toggleIsComplete} /> }
    </div>
  )
}

export default App
