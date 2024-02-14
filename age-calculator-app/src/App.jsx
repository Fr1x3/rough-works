import Button from "./components/Button"
import DateInput from "./components/DateInput"
import Result from "./components/Result"

function App() {

  return (
   <div className='bg-off-white h-screen w-full px-8'>
    <div className="bg-white rounded-2xl rounded-br-[5rem] px-4 py-10 grid gap-4 grid-rows-[1fr_1fr_4fr]">
      <DateInput />
      <Button />
      <Result />
    </div>
   </div>
  )
}

export default App
