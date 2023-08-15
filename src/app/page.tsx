
import Navbar from './components/navbar'
import Hero from './components/hero'
import Solution from './components/solution'
import Footer from './components/footer'
import GetStarted from './components/getStarted'


export default function Home() {
  return (
    <main className="">
        
        <Navbar />
        <Hero />
        
        <Solution />
        <GetStarted />
        <Footer />
    </main>
  )
}
