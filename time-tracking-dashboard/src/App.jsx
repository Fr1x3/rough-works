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
    <main className="grid  py-10 bg-very-dark-blue min-h-screen lg:items-center lg:justify-items-center">
      <div className="grid grid-rows-7 gap-4 justify-items-center lg:grid-rows-[150px_150px] lg:grid-cols-[150px_200px_200px_200px] ">
      <ProfileCard 
        period={period}
        handleClick={onChangePeriod} 
      />
      <Card period={period} />
      </div>
    </main>
  )
}

export default App
