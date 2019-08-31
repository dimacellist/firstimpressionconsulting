import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter() })

it('Footer Should Contain 3 links', () => {
  const component = mount(<Footer />)

  expect(component.exists('.social')).to.equal(true);
  expect(component.exists('.ion-social-facebook-outline')).to.equal(true);
  expect(component.find('li')).to.have.lengthOf(3);
  
})
