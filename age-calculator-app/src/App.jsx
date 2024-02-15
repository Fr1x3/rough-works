import Button from "./components/Button"
import DateInput from "./components/DateInput"
import Result from "./components/Result"

function App() {

  return (
   <div className='bg-off-white h-screen w-full px-8 pt-24 md:flex md:justify-center lg:pt-0 lg:items-center'>
      <div className="bg-white rounded-2xl rounded-br-[5rem] px-4 py-10 grid gap-4 grid-rows-[1fr_1fr_2fr] md:w-3/5 md:h-fit lg:w-2/5 lg:px-8">
        <DateInput />
        <Button />
        <Result />
      </div>
   </div>
  )
}

export default App
