import { bgHeaderDesktopIcon, bgHeaderMobileIcon } from "./utils/icons";
import ContentSection from "./components/ui/ContentSection";

function App() {

  return (
   <main className="m-h-screen w-full">
    <header className="w-full h-[150px] bg-very-dark-cyan relative">
      <img srcSet={`${bgHeaderMobileIcon} 768w, ${bgHeaderDesktopIcon} 1440w`} src={bgHeaderMobileIcon} alt="background image" className="w-full h-full" />
      <div className="h-full w-full absolute inset-0 bg-desaturated-cyan  opacity-75"/>
    </header>
    <ContentSection />
   </main>
  )
}

export default App
