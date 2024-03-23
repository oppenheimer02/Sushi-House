import React from 'react';
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import InfoSec from './components/InfoSec';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
 return (
    <div id='App'>
      <Header/>
      <About/>
      <Services/>
      <InfoSec/>
      <ContactUs/>
      <Footer/>
     </div>
  )
}

export default App;
