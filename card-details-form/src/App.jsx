import { useState } from "react"
import CardFormScreen from "./screens/cardform/CardFormScreen"
import HeaderScreen from "./screens/header/HeaderScreen"
import SuccessScreen from "./screens/success/SuccessScreen"

function App() {

  const [isComplete, setIsComplete] = useState(false)
  return (
    <div className="min-h-screen grid grid-rows-[2fr_3fr] text-lg">
      <HeaderScreen />
      { isComplete ? <SuccessScreen /> : <CardFormScreen handleSubmit={setIsComplete} /> }
    </div>
  )
}

export default App
