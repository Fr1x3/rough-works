import CardFormScreen from "./screens/cardform/CardFormScreen"
import HeaderScreen from "./screens/header/HeaderScreen"

function App() {

  return (
    <div className="min-h-screen grid grid-rows-[2fr_3fr] text-lg">
      <HeaderScreen />
      <CardFormScreen />
    </div>
  )
}

export default App
