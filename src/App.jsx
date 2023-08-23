

import './App.css'
import Booking from './Component/Booking/Booking'


import Footer from './Component/Footer/Footer'
import Gelary from './Component/Gelary/Gelary'
import Header from './Component/Header/Header'
import NaVBar from './Component/NavBar.jsx/NaVBar'
import Offer from './Component/Offer/Offer'
import Open from './Component/Open/Open'
import Slider from './Component/Slider/Slider'


function App() {
  

  return (
    <>
    <Open></Open>
    <NaVBar></NaVBar>
    <Header></Header>
    {/* <Card></Card> */}
    <Offer></Offer>
    <Slider></Slider>
    <Gelary></Gelary>
    <Booking></Booking>
    <Footer></Footer>
    
    
      
    </>
  )
}

export default App
