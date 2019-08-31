import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from '../Navigation'
import Cover from '../Cover'
import FirstSection from '../main/FirstSection'
import MainSection from '../main/MainSection'
import Testimonials from '../testimonials/Testimonials'
import Team from '../team/Team'
import Contact from '../contact/Contact'
import Footer from '../Footer'

describe('Webpage renderes all components', () => {
  it('Navigation Section Renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navigation />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Cover Section Renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cover />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Main Section Renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainSection />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('First Section Renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FirstSection />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Testimonials Section Renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Testimonials />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Team Section Renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Team />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Contact Section Renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Footer Section Renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
