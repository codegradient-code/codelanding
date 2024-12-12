import { useState } from 'react'
import './App.css'
 import Navbar from './Components/Navbar'
 import HeroSection from './Components/HeroSection'
import StatsSection from './Components/StatsSection'
import AboutSection from './Components/AbousSection'
import Footer from './Components/Footer'
import MultiCheckboxQuiz from './Components/MultiCheckboxQuiz'
import CampaignCards from './Components/CampaignCards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSection/>
   <StatsSection/> 
   <AboutSection/>
   <CampaignCards/>
   <MultiCheckboxQuiz/>
   <Footer/>
    </>
  )
}

export default App
