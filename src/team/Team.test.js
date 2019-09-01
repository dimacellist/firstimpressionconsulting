import React from 'react'
import Enzyme from 'enzyme'
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import Team from './Team'

Enzyme.configure({ adapter: new Adapter() })

describe('Team', () => {
  const component = shallow(<Team />)

  it('Team section contains main <h2>', () => {
    expect(component.containsMatchingElement(
      <h2>WHO WE ARE</h2>
    )).to.equal(true)
  })

  it('Team section to contains two members', () => {
    const component = mount(<Team />)
    expect(component.find('.span-1-of-2')).to.have.lengthOf(2)
  })
})
