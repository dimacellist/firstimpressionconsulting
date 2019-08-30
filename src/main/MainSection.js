import React from 'react'
import MainContentTitle from './main_section/MainSectionTitle'
import MainContentBoxOne from './main_section/MainContentBoxOne'
import MainContentBoxTwo from './main_section/MainContentBoxTwo'
import MainContentBoxThree from './main_section/MainContentBoxThree'

function MainSection() {
  return(
    <section className="services js--section-services" id="services">
      <MainContentTitle />
      <div className="row">
        <MainContentBoxOne />
        <MainContentBoxTwo />
        <MainContentBoxThree />
      </div>
    </section>
  ) 
}

export default MainSection