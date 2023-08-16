
import Navbar from './components/navbar'
import Hero from './components/hero'
import Solution from './components/solution'
import Footer from './components/footer'
import GetStarted from './components/getStarted'
import Automation from './components/automation'


export default function Home() {
  return (
    <main className="w-full ">
        
        <Navbar />
        <Hero />
        {/* <Automation /> */}
        <Solution />
        <GetStarted />
        <Footer />

    </main>
  )
}
