import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme from 'enzyme'
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import MainSection from './MainSection'
import MainContentTitle from './main_section/MainSectionTitle'
import MainContentBoxOne from './main_section/MainContentBoxOne'
import MainContentBoxTwo from './main_section/MainContentBoxTwo'
import MainContentBoxThree from './main_section/MainContentBoxThree'

Enzyme.configure({ adapter: new Adapter() })

describe('Main Section renderes all components', () => {

  it('Main Content Title Renders', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MainContentTitle />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Main Content Box 1 Renders', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MainContentBoxOne />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Main Content Box 2 Renders', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MainContentBoxTwo />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Main Content Box 3 Renders', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MainContentBoxThree />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Main section to contains three boxes', () => {
    const component = mount(<MainSection />)
    expect(component.find('.box')).to.have.lengthOf(3)
  })
})
