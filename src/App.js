import React from 'react'
import Navigation from './components/Navigation'
import Cover from './Cover'
import FirstSection from './main/FirstSection'
import MainSection from './main/MainSection'
import Testimonials from './testimonials/Testimonials'
import Team from './team/Team'
import Contact from './contact/Contact'
import Footer from './components/Footer'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <div className="App">
        <Navigation />
          <Cover />   
          <FirstSection />
          <MainSection />
          <Testimonials />
          <Team />
          <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
