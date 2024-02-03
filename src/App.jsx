import { useState } from "react"
import Card from "./components/Card"
import ProfileCard from "./components/ProfileCard"
import { periods } from "./util/enums"

function App() {
  const [period, setPeriod] = useState(periods.weekly)

  function onChangePeriod(selection){
    setPeriod(selection)
  }

  return(
    <main className="grid grid-rows-7 gap-4 justify-items-center py-10 bg-very-dark-blue min-h-screen">
      <ProfileCard 
        period={period}
        handleClick={onChangePeriod} 
      />
      <Card period={period} />
    </main>
  )
}

export default App
